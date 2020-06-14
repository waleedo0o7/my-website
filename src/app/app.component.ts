import { Component } from '@angular/core';
 
declare var $: any;
declare var ScrollMagic: any;
declare var TweenMax: any;
declare var TweenLite: any;
declare var TimelineLite: any;
declare var Power0: any;
declare var Power4: any;
declare var SlowMo: any;
declare var Elastic: any;
declare var Expo: any;
declare var Back: any;
declare var Circ: any;
declare var Splitting: any;
declare var Linear: any;
declare var Bounce: any;
declare var scrollToTop: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'my-website';

  menuStartTl = new TimelineLite();
  
  isMenuActive = false ;

  clickMenuActive() {

    this.menuStartTl

      .fromTo(".layer1", 1.2,
        { transform: 'translate3d(0,-200vh,0)', ease:  Expo.easeOut },
        { transform: 'translate3d(0,0,0)', ease:  Expo.easeOut }, "start")

      .fromTo(".layer2", 1.2,
        { transform: 'translate3d(0,-200vh,0)', ease:  Expo.easeOut },
        { transform: 'translate3d(0,0,0)', ease:  Expo.easeOut }, "start+=0.05")

      .fromTo(".layer3", 1.2,
        { transform: 'translate3d(0,-200vh,0)', ease:  Expo.easeOut },
        { transform: 'translate3d(0,0,0)', ease:  Expo.easeOut }, "start+=0.1")

      .fromTo(".menu-container", 1.2,
        { transform: 'translate3d(0,-200vh,0)', ease:  Expo.easeOut },
        { transform: 'translate3d(0,0,0)', ease:  Expo.easeOut }, "start+=0.15");


    if (this.isMenuActive == false) {
          this.menuStartTl.play();
          this.isMenuActive = true;
    } else {
      this.menuStartTl.reverse();
      this.isMenuActive = false;
    }



  }

  ngOnInit() {
  }


}
