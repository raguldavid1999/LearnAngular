import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from "@abacritt/angularx-social-login";
import { FacebookLoginProvider } from "@abacritt/angularx-social-login";
import { GoogleLoginProvider } from "@abacritt/angularx-social-login";
import { IgxInputDirective, IgxSliderComponent } from 'igniteui-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'learnAngular';
  watchAd:boolean = false;
  constructor(private authService: SocialAuthService) { }
  ngOnInit(): void {
    let clickElement:any = document.querySelectorAll('.navigation-head')
    let slider:any = document.querySelector('.slider')

    clickElement.forEach((element:any) => {
      element.addEventListener("click", (event:any)=>{
        console.log(event,slider?.style.left,'event');
        slider.style.left = event.target.offsetLeft + 'px';
        console.log(event.clientX + 'px');
      });
    });
    let video:any = document.getElementById('video-id');
    // video.currentTime = 5;
    let adVideo:any = document.getElementById('ad-id');
    // video?.addEventListener('ended',()=>{
    //   console.log('ended');
    //   video.src = '../assets/videos/home_wwBS1691074889.mp4';
    //   video.currentTime = 5;
    //   video.play();
    // })
    video?.addEventListener('timeupdate',(event:any)=>{
      console.log(event,'playing');
      if(event.target.currentTime>10 && !this.watchAd){
        video?.pause();
        video.src = '../assets/videos/home_Wz7n1692194497.mp4'
        video?.play();
        this.watchAd = true;
        // adVideo.play();
      }
    })
    this.authService.authState.subscribe((res)=>{
      console.log(res,'login data');
    })
    this.dropdownList = [
      { id: 1, itemName: 'India' },
      { id: 2, itemName: 'Singapore' },
      { id: 3, itemName: 'Australia' },
      { id: 4, itemName: 'Canada' },
      { id: 5, itemName: 'South Korea' },
      { id: 6, itemName: 'Germany' },
      { id: 7, itemName: 'France' },
      { id: 8, itemName: 'Russia' },
      { id: 9, itemName: 'Italy' },
      { id: 10, itemName: 'Sweden' }
    ];
    this.selectedItems = [
      { id: 2, itemName: 'Singapore' },
      { id: 3, itemName: 'Australia' },
      { id: 4, itemName: 'Canada' },
      { id: 5, itemName: 'South Korea' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      text: 'Select Countries',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      classes: 'myclass custom-class'
    };
  }

  dropdownList:any = [];
  selectedItems:any = [];
  dropdownSettings = {};
  value:number = 3;
  onItemSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }
  OnItemDeSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  onDeSelectAll(items: any) {
    console.log(items);
  }
  signInWithGoogle(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
  onEnded(event:any){
    console.log(event,'ended');
    let video:any = document.getElementById('video-id');
    video.src = '../assets/videos/home_wwBS1691074889.mp4';
    video.currentTime = 10;
    video.play();
  }

  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return `${value}`;
  }
  // signOut(): void {
  //   this.authService.signOut();
  // }
}
