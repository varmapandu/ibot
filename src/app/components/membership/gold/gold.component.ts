import { Component, OnInit, HostListener, Inject, ViewChild, ElementRef } from '@angular/core';
// import { WINDOW } from "./window.service";
import { Routes, RouterModule, Router, NavigationStart,NavigationEnd } from '@angular/router';
import { Contact } from '../../../apex/entities/contact.entity';
import { Page } from '../../../apex/entities/page.entity';
import { ContactForm } from '../../courses/courses.form';
@Component({
  selector: 'app-gold',
  templateUrl: './gold.component.html',
  styleUrls: ['./gold.component.scss']
})

export class GoldComponent implements OnInit {
  
  page: Page = new Page();
  buttonText:any="Enroll Now";

  constructor(private router: Router) {

    this.routerFinder();
  }
list=[
  {name:"Lifetime access to classroom training for above choosen package"},
  {name:"Offer special Launch Price and Bonus for new product launch or tie - up with marketplace company and provide discount coupons"},
  {name:"Resume support from expert"},
  {name:"Community Discussion Forum"},
  {name:"Technical Library - Latest E-Books, Technical Articles and Papers"},
  {name:"24/7 Support"}
  
]
courses=[
  {name:"Full Stack Development + Mobile Development "},
  {name:"Python + Data Science "},
  {name:"Digital Marketing + Graphic Design"},
  {name:"DevOps + Cloud Computing"},
   {name:"Game Development + Animation + AR/VR"}
]
  ngOnInit() {
   
  }
  
  routerFinder(){
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
      }
    });
  }
}
