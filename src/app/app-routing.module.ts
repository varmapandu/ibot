import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LandingComponent} from './components/landing/landing.component';
import {SelfdrivingcourseComponent} from "./components/courses/selfdrivingcourse/selfdrivingcourse.component";
import {FlyingdronescourseComponent} from "./components/courses/flyingdronescourse/flyingdronescourse.component";
import {IotcourseComponent} from "./components/courses/iotcourse/iotcourse.component";
import {RoboticscourseComponent} from "./components/courses/roboticscourse/roboticscourse.component";
import {BlockchaincourseComponent} from "./components/courses/blockchaincourse/blockchaincourse.component";
// import {FullstackprogramComponent} from './components/programs/fullstackprogram/fullstackprogram.component'
// import { FullstackwithjavaComponent } from './components/programs/fullstackwithjava/fullstackwithjava.component';
// import { FullstackwithpythonComponent } from './components/programs/fullstackwithpython/fullstackwithpython.component';
// import { PythonengineerprogramComponent } from './components/programs/pythonengineerprogram/pythonengineerprogram.component';
// import { AiwithpythonComponent } from './components/programs/aiwithpython/aiwithpython.component';
// import { MachinelearningprogramComponent } from './components/programs/machinelearningprogram/machinelearningprogram.component';
// import { BlockchainwithpythonComponent } from './components/programs/blockchainwithpython/blockchainwithpython.component';
// import { BlockchainwithjavascriptComponent } from './components/programs/blockchainwithjavascript/blockchainwithjavascript.component';
// import { BlockchainfoundationComponent } from './components/programs/blockchainfoundation/blockchainfoundation.component';
// import { ClouddevopsengineerComponent } from './components/programs/clouddevopsengineer/clouddevopsengineer.component';
// import { DigitalmarketingexecutiveComponent } from './components/programs/digitalmarketingexecutive/digitalmarketingexecutive.component';
// import { FsitprogramComponent } from './components/programs/fsitprogram/fsitprogram.component';
// import { GamingarvrprogramComponent } from './components/programs/gamingarvrprogram/gamingarvrprogram.component';
// import { CrtprogramComponent } from './components/programs/crtprogram/crtprogram.component';
// import { GethackathonprogramComponent } from './components/programs/gethackathonprogram/gethackathonprogram.component';
import { MaincourseComponent } from './components/courses/maincourse/maincourse.component';
// import {MainprogramComponent} from './components/programs/mainprogram/mainprogram.component';
import {ThankyoupageComponent} from './components/thankyoupage/thankyoupage.component';
import {ProgramsComponent} from './components/programs/programs.component';
import {ProgramComponent} from './components/programs/program/program.component';
import {PlacementComponent} from './components/programs/features/placement/placement.component';
import {OnlyatdigitallyncComponent} from './components/programs/features/onlyatdigitallync/onlyatdigitallync.component';
import {FuturedegreesComponent} from './components/programs/features/futuredegrees/futuredegrees.component';
import {AcademicComponent} from './components/programs/features/academic/academic.component';
import {BlogComponent} from './components/blog/blog.component';
import {BlogDetailComponent} from './components/blog/blog-detail/blog-detail.component';
import {EventsComponent} from './components/events/events.component';
import {EventComponent} from './components/events/event/event.component';
import {ContactusComponent} from './components/contactus/contactus.component'; 
import {GoldComponent} from './components/membership/gold/gold.component';
import {PlatinumComponent} from './components/membership/platinum/platinum.component';
import {SilverComponent} from './components/membership/silver/silver.component';
import {PrivacypolicyComponent} from './components/footer/privacypolicy/privacypolicy.component';
import {SitemapComponent} from './components/footer/sitemap/sitemap.component';
import {AdminloginComponent} from './components/adminlogin/adminlogin.component';
import {RegistrationComponent} from './components/registration/registration.component';
import {InnovationComponent} from './components/innovation/innovation.component';
// import {sitemap} from '../../src/sitemap';
export const routes: Routes = [
  { path: '', component: LandingComponent },
  {path:"adminlogin",component:AdminloginComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'innovation',component:InnovationComponent},
  {path:'courses',component:MaincourseComponent,children:[
    {path:'**',component:MaincourseComponent}
  ]},
  { path: 'programs', component: ProgramsComponent},
  { path: 'program/:id', component: ProgramComponent},
  {path:'blogs',component:BlogComponent},
  {path:'blog/:id', component:BlogDetailComponent},
  {path:'blogs',component:BlogComponent},
  {path:'blog/:id', component:BlogDetailComponent},
  {path:'privacypolicy',component:PrivacypolicyComponent},
  {path:'sitemap',component:SitemapComponent},

  { path: 'events', component: EventsComponent,
  children: [
    { path: "**", component: EventsComponent},
  ]},
  { path: 'event/:id', component: EventComponent},
  { path: 'connect', component: ContactusComponent,
  children: [
    // { path: ':id', component: BranchAddressComponent}
  ]
},
  // {path:'programs',component:MainprogramComponent,children:[
  //   {path:'**',component:MainprogramComponent}
  // ]},
  { path: 'thankyou', component: ThankyoupageComponent},
  { path: 'course/selfdriving-course-training-hyderabad', component: SelfdrivingcourseComponent },
  { path: 'course/flyingdrones-course-training-hyderabad', component: FlyingdronescourseComponent },
  { path: 'course/iot-course-training-hyderabad', component: IotcourseComponent },
  { path: 'course/robotics-course-training-hyderabad', component: RoboticscourseComponent },
  { path: 'course/blockchain-course-training-hyderabad', component: BlockchaincourseComponent },
  {path:'Placements',component:PlacementComponent},
  {path:'Academic',component:AcademicComponent},
  {path:'other',component:OnlyatdigitallyncComponent},
  {path:'Future',component:FuturedegreesComponent},
  {path:'membership/gold-membership',component:GoldComponent},
  {path:'membership/silver-membership',component:SilverComponent},
  {path:'membership/platinum-membership',component:PlatinumComponent}
    // {path:'program/fullstack-program',component:FullstackprogramComponent},
  // {path:'program/fullstack-java',component:FullstackwithjavaComponent},
  // {path:'program/fullstack-python-program',component:FullstackwithpythonComponent},
  // {path:'program/python-engineer-program',component:PythonengineerprogramComponent},
  // {path:'program/AI-python',component:AiwithpythonComponent},
  // {path:'program/machine-learning-program',component:MachinelearningprogramComponent},
  // {path:'program/blockchain-python',component:BlockchainwithpythonComponent},
  // {path:'program/blockchain-javascript',component:BlockchainwithjavascriptComponent},
  // {path:'program/blockchain-foundation',component:BlockchainfoundationComponent},
  // {path:'program/cloud-devops-engineer',component:ClouddevopsengineerComponent},
  // {path:'program/digital-marketing-program',component:DigitalmarketingexecutiveComponent},
  // {path:'program/FSIT-Program',component:FsitprogramComponent},
  // {path:'program/Gaming,AR-VR',component:GamingarvrprogramComponent},
  // {path:'program/CRT',component:CrtprogramComponent},
  // {path:'program/Hackathon',component:GethackathonprogramComponent}
  
  // { path: 'fullstack', component: FullstackComponent },
  // { path: 'blockchain', component: BlockchainComponent },
  // { path: 'digitalmarketing', component: DigitalmarketingComponent },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
