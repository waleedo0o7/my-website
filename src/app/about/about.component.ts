import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

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

declare var scrollToTop:any;
declare var cursorEffect: any;
declare var pageHeaderEffect:any;
declare var headlineEffect:any;
declare var paragraphEffect:any;
declare var imageParallaxEffect:any;
declare var meEffect:any;


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {

  constructor(private router: Router) {}

  ngOnInit(){

    $("body").addClass("internal-page-body");
    
    var controller = new ScrollMagic.Controller();
 
    // image Parallax Effect for About Page start

            var item = document.getElementById("my-image");

            // Add tweenmax for background Parallax
            var parallax = TweenMax.to(item, 1, {
              y: '-200px',
              ease: Power0.easeNone
            });

            // Create scrollmagic scene
            var parallaxScene = new ScrollMagic.Scene({
              triggerElement: this, // <-- Use this to select current element
              triggerHook: 1,
              duration: '200%',
            })
              //.addIndicators()
              .setTween(parallax).addTo(controller);

      // image Parallax Effect for About Page END


      // steps for About Page START

            $(".one-step").each(function(){

              var stepsTweens = TweenMax.from(this.children[0],0.9,{
                rotationY:91,
                ease: Back.easeInOut.config(1.7)
              })
        
              var stepsScene = new ScrollMagic.Scene({
                triggerElement: ".steps",
              })
                .setTween(stepsTweens).addTo(controller);

            });

      // steps  for About Page END

  }
  
  ngAfterViewInit() { 
      scrollToTop(); cursorEffect(); pageHeaderEffect(); headlineEffect(); paragraphEffect(); meEffect();
  }

  ngOnDestroy() {
    // remove internal-page class from body
    $("body").removeClass("internal-page-body");
  }

}
