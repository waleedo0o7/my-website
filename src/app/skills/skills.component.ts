import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

declare var $: any;
declare var ScrollMagic: any;
declare var TweenMax: any;
declare var TweenLite: any;
declare var TimelineLite: any;
declare var Power0: any;
declare var Power4: any;
declare var SlowMo:any;
declare var Elastic:any;
declare var Expo:any;
declare var Back: any;
declare var Circ: any;
declare var Splitting: any;
declare var Linear: any;
declare var Bounce: any;


declare var scrollToTop: any;
declare var cursorEffect: any;
declare var pageHeaderEffect: any;
declare var headlineEffect: any;
declare var paragraphEffect: any;
declare var imageParallaxEffect: any;
declare var meEffect: any;



@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class skillsComponent implements OnInit, OnDestroy {

  constructor(private router: Router) { }

  ngOnInit() {

    var controller = new ScrollMagic.Controller();
    // images slideIn start
    $(".design-content .one-item").each(function(){
      
      var imagesTweenTl = new TimelineLite();

        imagesTweenTl

          .fromTo($(this).find(".image .after-box"),2,
          {y:-350,ease: Expo.easeInOut},{y:350,ease: Expo.easeInOut},"start")
        
          .fromTo($(this).find(".image img"),0.1,
          {autoAlpha:0},{autoAlpha:1},"start+=1")

          .fromTo($(this).find(".data"),0.5,
          {autoAlpha:0},{autoAlpha:1},"start+=1.0")

          var imagesScene = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0.7,
          })
            .setTween(imagesTweenTl).addTo(controller);
        
    });
    // images slideIn end

    // moving headline effect start
    $(".headline").each(function () {

      var headlineTween = TweenMax.fromTo(this.children[0], 5,
        { x: -1000 }, { x: 0 })
      var headlineScene = new ScrollMagic.Scene({
        triggerElement: this,
        duration: '250%',
        triggerHook: 1,
      })
        // .addIndicators()
        .setTween(headlineTween).addTo(controller);

    });
    // moving headline effect end

    // skills effect start
    $(".technical-skills-container").each(function(){

      var skillsTweenTl = new TimelineLite();

          skillsTweenTl

            .staggerFrom($(this).find(".skill"),0.5,{scale:0},0.2)
            
          var imagesScene = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0.7,
          })
            .setTween(skillsTweenTl).addTo(controller);

    });
    // skills effect end

    // soft effects start
    $(".soft-content .data").each(function(){

      var softTweenTl = new TimelineLite();

          softTweenTl
            .staggerFrom($(this).find("img"),3,{scale:0,ease:Bounce.easeOut})

            new ScrollMagic.Scene({
              triggerElement: this,
              triggerHook: 0.7,
            })
            .setTween(softTweenTl).addTo(controller);    
    })
    // soft effects end

    // add internal-page class to body
    $("body").addClass("internal-page-body");
  }

  ngAfterViewInit() {
    scrollToTop(); cursorEffect(); pageHeaderEffect(); headlineEffect(); paragraphEffect(); meEffect();
  }

  ngOnDestroy() {
    // remove internal-page class from body
    $("body").removeClass("internal-page-body");
  }

}