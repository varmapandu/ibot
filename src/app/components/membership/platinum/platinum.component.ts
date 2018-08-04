import { Component, OnInit, HostListener, Inject, ViewChild, ElementRef } from '@angular/core';
// import { WINDOW } from "./window.service";
import { Routes, RouterModule, Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Contact } from '../../../apex/entities/contact.entity';
import { Page } from '../../../apex/entities/page.entity';
import { ContactForm } from '../../courses/courses.form';
@Component({
  selector: 'app-platinum',
  templateUrl: './platinum.component.html',
  styleUrls: ['./platinum.component.scss']
})

export class PlatinumComponent implements OnInit {

  page: Page = new Page();
  buttonText: any = "Enroll Now";

  constructor(private router: Router) {

    this.routerFinder();
  }
  list = [
    { name: "Lifetime access to classroom training for above choosen package" },
    { name: "Lifetime access to all the Workshop Training on all the technologies " },
    { name: "Special price for all the technologies products launched by us " },
    { name: 'Resume support from expert' },
    { name: "Community Discussion Forum" },
    { name: "Technical Library - Latest E-Books, Technical Articles and Papers" },
    { name: "24/7 Support" }

  ]
  ngOnInit() {

  }

  routerFinder() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
      }
    });
  }
}
