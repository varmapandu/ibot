import { Component, OnInit,ViewChild,ElementRef} from '@angular/core';
import { Props } from '../../../apex/common/props';
import { Contact } from '../../../apex/entities/contact.entity';
import {CoursesService} from '../courses.service';
declare var $: any;
import { FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Routes, RouterModule, Router, NavigationStart,NavigationEnd } from '@angular/router';

import { ContactForm } from '../../../shared/common-form/app.form';
@Component({
  selector: 'app-maincourse',
  templateUrl: './maincourse.component.html',
  styleUrls: ['./maincourse.component.scss']
})
export class MaincourseComponent implements OnInit {
  @ViewChild('nav') nav: ElementRef;
  @ViewChild('footerBotom') footerBottom: ElementRef;
  bannerData:any= [
    {
      heading:'We are Online!Courses Too, So, Step into online platform for Bright Career!',
      img:'../../../../assets/images/coursebanner.png'
  }
  ];
  imageHost=Props.IMAGE_HOST;
  UserDetailsForm: FormGroup;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  namePattern = '[a-zA-Z ]+$';
  mobilePattern = '^[6-9][0-9]{9}$';
  myForm: any = ContactForm.init();
  profile: Contact = new Contact();
  currentURL_slug : any;
  hubspot = 
  {
  name:null,
  email:null,
  phonenumber:null,
  message:null,
  slug:null
}
  courseData=[

    { 
      name : "IoT", 
      courseImage : "assets/images/all-courses/iot.png", 
      courseImageAlt: "IoT", 
      views : 100, 
      share: 52, 
      rating : 4.6, 
      slug: "iot-course-training-hyderabad", 
      position : 1, 
  },
  { 
    name : "Flying Drones", 
    courseImage : "assets/images/all-courses/flyingdronebanner.png", 
    courseImageAlt: "Flying Drones", 
    views : 51, 
    share: 56, 
    rating : 4.6, 
    slug: "flyingdrones-course-training-hyderabad", 
    position : 1, 
},
{ 
  name : "Self-driving cars", 
  courseImage : "assets/images/all-courses/Self-driving.png", 
  courseImageAlt: "selfdriving", 
  views : 51, 
  share: 51, 
  rating : 4.6, 
  slug: "selfdriving-course-training-hyderabad", 
  position : 1, 
},
{ 
  name : "Robotics", 
  courseImage : "assets/images/all-courses/robotics.png", 
  courseImageAlt: "Robotics", 
  views : 41, 
  share: 39, 
  rating : 4.6, 
  slug: "robotics-course-training-hyderabad", 
  position : 1, 
},

  ]
  constructor(private router: Router,private formBuilder: FormBuilder,private coursesService: CoursesService) { 
    ContactForm.edit(this.myForm);
    this.UserDetailsForm = this.formBuilder.group({
      'name': ['', [Validators.required, Validators.pattern(this.namePattern)]],
      'email': ['', [Validators.required, Validators.pattern(this.emailPattern)]],
       'mobile': ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.pattern(this.mobilePattern)])]
    });
  }
  onSubmit(){
    this.profile.sourceOfPage = "courses"
    // this.coursesService.saveForm(this.profile).subscribe((data:any)=>{
    //   if(data.status == '1'){
    //     setTimeout(function () {
    // }, 2000);
    // this.coursesService.navigateToThanksPage();
    //   }
    // })   
    this.hubspot.name = this.profile.name+'-ibot';
      this.hubspot.email = this.profile.email;
      this.hubspot.phonenumber = this.profile.mobile;
      this.hubspot.message = this.profile.message;
      this.hubspot.slug = this.currentURL_slug;

      // this.leadSquare[0].Value=this.profile.name;
      // this.leadSquare[1].Value=this.profile.email;
      // this.leadSquare[2].Value=this.profile.mobile;
      // this.leadSquare[3].Value=this.profile.message;
      // this.leadSquare[4].Value=this.currentURL_slug;
      // console.log(this.leadSquare)
      this.coursesService.saveFormToHubSpot(this.hubspot).subscribe((data:any)=>{
      console.log(data)
        if (data.status == 1) {
          setTimeout(function () {
          }, 2000);
          this.coursesService.navigateToThanksPage();
          this.hubspot = null;
        }
      })
  }
  
  ngOnInit() {
  }
  ngAfterViewInit() {
    $(this.nav.nativeElement).affix({
      offset: {
        top: $(this.nav.nativeElement).offset().top,
        bottom: ($('#footer-bottom').outerHeight(true) + 450
        )
      }
    })
  }
}
