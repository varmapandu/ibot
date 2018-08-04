import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import {CommonModule} from '@angular/common'; 
import {WINDOW_PROVIDERS} from "./services/window.service";
import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingComponent } from './components/landing/landing.component';
import { BgvideoComponent } from './components/landing/bgvideo/bgvideo.component';
import { TrendingcoursesComponent } from './components/landing/trendingcourses/trendingcourses.component';
import { WeareoneComponent } from './components/landing/weareone/weareone.component';
import { OurprocessComponent } from './components/landing/ourprocess/ourprocess.component';
import { OurbranchesComponent } from './components/landing/ourbranches/ourbranches.component';
import { OurreviewsComponent } from './components/landing/ourreviews/ourreviews.component';
import { OurpartnersComponent } from './components/landing/ourpartners/ourpartners.component';
import {SharedModule} from './shared/shared.module';
import {FooterService} from './components/footer/footer.service';
import { SelfdrivingcourseComponent } from './components/courses/selfdrivingcourse/selfdrivingcourse.component';
import { FlyingdronescourseComponent } from './components/courses/flyingdronescourse/flyingdronescourse.component';
import { IotcourseComponent } from './components/courses/iotcourse/iotcourse.component';
import { RoboticscourseComponent } from './components/courses/roboticscourse/roboticscourse.component';
import { BlockchaincourseComponent } from './components/courses/blockchaincourse/blockchaincourse.component';
// import { FullstackprogramComponent } from './components/programs/fullstackprogram/fullstackprogram.component';
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
// import { MainprogramComponent } from './components/programs/mainprogram/mainprogram.component';
import { BatchesComponent } from './components/batches/batches.component';
import {CoursesService} from './components/courses/courses.service';
import { ModalpopupComponent } from './components/modalpopup/modalpopup.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { FormmodalComponent } from './components/formmodal/formmodal.component';
import { ThankyoupageComponent } from './components/thankyoupage/thankyoupage.component';
import {ThankyouService} from './components/thankyoupage/thankyou.service';
import {ProgramsComponent} from './components/programs/programs.component';
import {ProgramsService} from './components/programs/programs.service';
import {ProgramComponent} from "./components/programs/program/program.component";
import {WeTrainComponent} from './components/programs/program/we-train/we-train.component';
import {HeaderService} from './components/header/header.service';
import {AcademicComponent} from './components/programs/features/academic/academic.component';
import {FuturedegreesComponent} from './components/programs/features/futuredegrees/futuredegrees.component';
import {OnlyatdigitallyncComponent} from './components/programs/features/onlyatdigitallync/onlyatdigitallync.component';
import {PlacementComponent} from './components/programs/features/placement/placement.component';
import {BlogComponent} from './components/blog/blog.component';
import {BlogDetailComponent} from './components/blog/blog-detail/blog-detail.component';
import {BlogService} from './components/blog/blog.service';
import {EventsComponent} from './components/events/events.component';
import {EventComponent} from './components/events/event/event.component';
import {AboutEventComponent} from './components/events/event/about-event/about-event.component';
import {EventsService} from './components/events/events.service';
import {ContactusComponent} from './components/contactus/contactus.component';
import {GoldComponent} from './components/membership/gold/gold.component';
import {PlatinumComponent} from './components/membership/platinum/platinum.component';
import {SilverComponent} from './components/membership/silver/silver.component';
import {PrivacypolicyComponent} from './components/footer/privacypolicy/privacypolicy.component';
import {SitemapComponent} from './components/footer/sitemap/sitemap.component';
import {AdminloginComponent} from './components/adminlogin/adminlogin.component';
import {RegistrationComponent} from './components/registration/registration.component';
import {InnovationComponent} from './components/innovation/innovation.component';
import {RegisterService} from './components/registration/register.service';
import {LoginService} from './components/adminlogin/login.service';
@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'Ibot-Academy' }),
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule.forRoot(),
    HttpModule
  ],
  declarations: [
    AppComponent,AdminloginComponent,RegistrationComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    InnovationComponent,
    BgvideoComponent,
    TrendingcoursesComponent,
    WeareoneComponent,
    OurprocessComponent,
    OurbranchesComponent,
    OurreviewsComponent,
    OurpartnersComponent,
    SelfdrivingcourseComponent,
    FlyingdronescourseComponent,
    IotcourseComponent,
    RoboticscourseComponent,
    BlockchaincourseComponent,
    ProgramsComponent,
    ProgramComponent,
    // FullstackprogramComponent,
    // FullstackwithjavaComponent,
    // FullstackwithpythonComponent,
    // PythonengineerprogramComponent,
    // AiwithpythonComponent,
    // MachinelearningprogramComponent,
    // BlockchainwithpythonComponent,
    // BlockchainwithjavascriptComponent,
    // BlockchainfoundationComponent,
    // ClouddevopsengineerComponent,
    // DigitalmarketingexecutiveComponent,
    // FsitprogramComponent,
    // GamingarvrprogramComponent,
    // CrtprogramComponent,
    // GethackathonprogramComponent,
    MaincourseComponent,
    // MainprogramComponent,
    BatchesComponent,
    ModalpopupComponent,
    ReviewsComponent,
    FormmodalComponent,
    ThankyoupageComponent,
    WeTrainComponent,
    AcademicComponent,
    FuturedegreesComponent,
    OnlyatdigitallyncComponent,
    PlacementComponent,
    BlogComponent,
    BlogDetailComponent,
    EventsComponent,
    EventComponent,
    AboutEventComponent,
    ContactusComponent,
    GoldComponent,
    PlatinumComponent,
    SilverComponent,
    PrivacypolicyComponent,
    SitemapComponent
  ],
  providers: [FooterService,WINDOW_PROVIDERS,CoursesService,ThankyouService,ProgramsService,HeaderService,BlogService,EventsService,RegisterService,LoginService],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string) {
    const platform = isPlatformBrowser(platformId) ?
      'in the browser' : 'on the server';
    console.log(`Running ${platform} with appId=${appId}`);
  }
}
