import { Component, OnInit,Input,Inject,SimpleChange, HostListener, ViewChild, ElementRef } from '@angular/core';
import { Props } from '../../../apex/common/props';
import {Meta, Title} from '@angular/platform-browser';
import {routes} from "../../../app-routing.module";
import {Router, ActivatedRoute} from "@angular/router";
import { Page } from '../../../apex/entities/page.entity';
import { ContactForm } from '../courses.form';
import { FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DOCUMENT } from "@angular/platform-browser";
import {CoursesService} from '../courses.service';
import { Contact } from '../../../apex/entities/contact.entity';
// import { WINDOW } from "../window.service";


@Component({
  selector: 'app-roboticscourse',
  templateUrl: './roboticscourse.component.html',
  styleUrls: ['./roboticscourse.component.scss']
})
export class RoboticscourseComponent implements OnInit {
  page: Page = new Page();
  myForm: any = ContactForm.init();
  isShowModal:boolean = true;
  showForm:boolean = false;
  UserDetailsForm: FormGroup;
  isScrolled: any;
  stickyFooter: any;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  mobilePattern = '^[6-9][0-9]{9}$';
  namePattern = '[a-zA-Z ]+$';
  courseName: any='Robotics';
  enrollBtn: Boolean;
  buttonText:any="Enroll Now";
    selectedItem: any;
  profile: Contact = new Contact();
  constructor(private title: Title,private meta: Meta,private routes: Router,private activatedRoute:ActivatedRoute,private formBuilder: FormBuilder, @Inject(DOCUMENT) private document: Document,private coursesService:CoursesService) { 
    this.meta.updateTag(
      {name: 'Description', content: "India's No.1 Robotics Training Institute in Hyderabad with Placement Assistance. Upgrade Your Career by taking Robotics Certification Course @ Digtial Lync"});
      this.meta.updateTag(
        {name: 'Title', content: 'Robotics Training In Hyderabad | Certification Course | Digital Lync'});
        this.meta.updateTag(
          {name: 'Keywords', content: 'Robotics training in hyderabad, Robotics course in Hyderabad, Robotics in Hyderabad, Robotics training institute in Hyderabad, digital lync'});
  
    title.setTitle('Robotics Training In Hyderabad | Certification Course | Digital Lync');
    this.isShowModal = true;
    ContactForm.edit(this.myForm);
    this.UserDetailsForm = this.formBuilder.group({
      'name': ['', Validators.compose([Validators.required,Validators.pattern(this.namePattern)])],
      'email': ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      'mobile': ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.pattern(this.mobilePattern)])]
    });
    this.page.slug="robotics-course-training-hyderabad";
    this.page.name="Robotics";
  }
 
  imageHost=Props.IMAGE_HOST;
  bannerData:any= [
    {
  }
  ];
courseData={ 
    name: "Robotics", 
    description : "Robotics Course", 
    courseType : "Both", 
    duration : "9 Weeks", 
    hours : 5, 
    why : "", 
    whyImage : "why-learn-digital-lync.png", 
    whyImageAlt : "why learn Robotics", 
    careerHead : "", 
    courseImage : "assets/images/allcourses/robotics.png", 
    courseImageAlt : "Robotics", 
    views :5750, 
    share : 123,  
    slug : "robotics-course-training-hyderabad", 
    position : 1, 
    curriculum : "../../../assets/walkingkits/AI.pdf",  
    careers : [
        "Deep Learning Engineer",
        "Data Scientist"
    ], 
    pre : [
        "artificial-intelligence,",
        " ruby-on-rails 2"
    ],
    subModules:[
      { 
        name : "Introduction to AI", 
        description : "Foundations", 
        image : "assets/images/courses/roboticscourse/modules.png", 
        imageAlt : ""
    },
    { 
      name : "Intelligent Agents", 
      description : "Agents, Environments", 
      image : "assets/images/courses/roboticscourse/modules.png", 
      imageAlt : ""
    },
    { 
      name : "Searching", 
      description : "Classical Search, Adversarial Search", 
      image : "assets/images/courses/roboticscourse/modules.png", 
      imageAlt : ""
  },
  { 
    name : "Constraint Satisfaction",  
    description : "CSPs", 
    image : "assets/images/courses/roboticscourse/modules.png", 
    imageAlt : ""
},{  
  name : "Logical Agents", 
  description : "Propositional Logics", 
  image : "assets/images/courses/roboticscourse/modules.png", 
  imageAlt : ""
},{ 
  name : "First Order Logic", 
  description : "Chaining", 
  image : "assets/images/courses/roboticscourse/modules.png", 
  imageAlt : ""
},{ 
  name : "Planning", 
  description : "Classical planning", 
  image : "assets/images/courses/roboticscourse/modules.png", 
  imageAlt : ""
},{ 
  name : "Knowledge Representation", 
  description : "Events, Reasoning", 
  image : "assets/images/courses/roboticscourse/modules.png", 
  imageAlt : ""
},{ 
  name : "Uncertainty", 
  description : "Bayes Rules", 
  image : "assets/images/courses/roboticscourse/modules.png", 
  imageAlt : ""
},{ 
  name : "Probabilistic Reasoning", 
  description : "Bayesian Concepts", 
  image : "assets/images/courses/roboticscourse/modules.png", 
  imageAlt : ""
},{ 
  name : "Decision Making", 
  description : "Utility Theory", 
  image : "assets/images/courses/roboticscourse/modules.png", 
  imageAlt : ""
},{
  name : "Learning", 
  description : "Reinforcement Learning", 
  image : "assets/images/courses/roboticscourse/modules.png", 
  imageAlt : ""
}
  ],
    projects:[
      { 
        name : "Chatbots", 
        description : "Ever seen that when you ask questions at a chatting portal, automatic reply comes? Even messengers like Facebook Chat, Google Chat etc. have these features. You can even write questions and assistants like Siri, Alexa, Google, respond automatically and perfectly. Well, they are called 'Chatbots'. Now that we know their features, why not make our own chat bot system. How? We'll help you make one.", 
        image : "assets/images/courses/roboticscourse/chatbot-project-digital-lync.jpg", 
        imageAlt : "artificialintelligencecourse", 
    },
    {
      name: "Object Detection",
      description:"Is traffic giving you nuisance? Are you really getting late for your office, or your date? Well, the best solution is to provide one, than to expect one. Use Deep Learning and OpenCV to tackle this biggest problem. Learn object detection algorithms and their applications.",
      image: "assets/images/courses/roboticscourse/object-detection-project-digital-lync.jpg",
      imageAlt:"Artificial Intelligence",
    }
    ]
  }
  onSubmit() {
    this.profile.sourceOfPage="robotics-course-training-hyderabad";
    this.page.slug="robotics-course-training-hyderabad";
    this.coursesService.saveForm(this.profile).subscribe((data: any) => {
      console.log(data);
      if (data.status == '1') {
        setTimeout(function () {
        }, 2000);
        this.coursesService.navigateToThanksPage();
      }
    })
  }
  
  listClick(event, newValue) {
    console.log(newValue);
    this.selectedItem = newValue;
  }
  
  // @HostListener('window:scroll', ['$event'])
  // onWindowScroll($event) {
  //   let number = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
  //   if (number > 912) {
  //     this.isScrolled = true;  
  //   } 
  //   else {
  //     this.isScrolled = false;
  //   }
  //   if (number > 1168 && number < 4900) {
  //     this.stickyFooter = true
  //   } else {
  //     this.stickyFooter = false
  //   }
  //   if(number > 1036){
  //     this.enrollBtn = true;
  //   }else{
  //     this.enrollBtn = false;
  //   }
  // }
  ngOnInit() {
  //   this.routes.events
  // .filter((event) => event instanceof NavigationEnd)
  // .map(() => this.activatedRoute)
  // .map((route) => {
  //   while (route.firstChild) route = route.firstChild;
  //   return route;
  // })
  // .filter((route) => route.outlet === 'primary')
  // .mergeMap((route) => route.data)
  // .subscribe((event) => {
  //   this._seoService.updateTitle(event['title']);
  //   //Updating Description tag dynamically with title
  //   this._seoService.updateDescription(event['title'] + event['description'])
  // });

  }

}
