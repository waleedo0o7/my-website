import { Component } from '@angular/core';
 
declare var $: any;
declare var ScrollMagic: any;
declare var TweenMax: any;
declare var TimelineLite: any;
declare var Power0: any;
declare var Back: any;
declare var Circ: any;
declare var Splitting: any;
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

      .fromTo(".layer1", 2,
        { transform: 'translate3d(0,-200vh,0)', ease: Back.easeInOut },
        { transform: 'translate3d(0,0,0)', ease: Back.easeInOut }, "start")

      .fromTo(".layer2", 2,
        { transform: 'translate3d(0,-200vh,0)', ease: Back.easeInOut },
        { transform: 'translate3d(0,0,0)', ease: Back.easeInOut }, "start+=0.2")

      .fromTo(".layer3", 2,
        { transform: 'translate3d(0,-200vh,0)', ease: Back.easeInOut },
        { transform: 'translate3d(0,0,0)', ease: Back.easeInOut }, "start+=0.4")

      .fromTo(".menu-container", 2,
        { transform: 'translate3d(0,-200vh,0)', ease: Back.easeInOut },
        { transform: 'translate3d(0,0,0)', ease: Back.easeInOut }, "start+=0.6");


    if (this.isMenuActive == false) {
          this.menuStartTl.play();
          this.isMenuActive = true;
    } else {
      this.menuStartTl.reverse();
      this.isMenuActive = false;
    }

  }



  ngOnInit() {

    // open and close menu
    // $(".menu-icon , .menu-link").on("click", function() {

    //   if ($(".menu-container").hasClass("active")) {
    //     $(".menu-container ul").removeClass("active");
    //     setTimeout(() => {
    //       $(".menu-container").removeClass("active");
    //     }, 500);
    //   } else {
    //     $(".menu-container").addClass("active");
    //     setTimeout(() => {
    //       $(".menu-container ul").addClass("active");
    //     }, 500);
    //   }
    // })
  }
}
