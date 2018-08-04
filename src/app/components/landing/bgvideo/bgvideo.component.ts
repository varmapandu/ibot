import { Component, OnInit,ViewChild } from '@angular/core';
@Component({
  selector: 'app-bgvideo',
  templateUrl: './bgvideo.component.html',
  styleUrls: ['./bgvideo.component.scss']
})
export class BgvideoComponent implements OnInit {
  @ViewChild('videoPlayer') videoplayer: any;
  autoplay:boolean;
  constructor() { 
    this.autoplay=true;
this.toggleVideo;

  }
  toggleVideo() {
    this.autoplay=true;

    this.videoplayer.nativeElement.play();
}
  ngOnInit() {
    this.autoplay=true;
this.toggleVideo;
  }

}
