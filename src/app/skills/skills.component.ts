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
declare var Bounce:any;

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class skillsComponent implements OnInit, OnDestroy {

  constructor(private router: Router) { }

  ngOnInit() {

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });

    // inner pages header effect start 

    var controller = new ScrollMagic.Controller();

    var pageHeader = $(".internal-page .header");

    var rotateBackToZero = TweenMax.to(pageHeader, 1, {
      rotation: -20,
      scale: 3,
      opacity: 0,
      ease: Power0.easeNone
    })

    // Create scrollmagic scene
    var parallaxScene = new ScrollMagic.Scene({
      triggerElement: pageHeader, // <-- Use this to select current element
      triggerHook: 0,
      duration: '80%',
    })
      //.addIndicators() // add indicators (requires plugin)
      .setTween(rotateBackToZero).addTo(controller);
      
    // inner pages header effect end


    // headline effect start
    $(".headline").each(function(){

        var headlineTween = TweenMax.fromTo(this.children[0],5,
        { x:-1000},{x:0})
        var headlineScene = new ScrollMagic.Scene({
          triggerElement: this,
          duration: '250%',
          triggerHook: 1,
        })
          // .addIndicators()
          .setTween(headlineTween).addTo(controller);
      
    });
    // headline effect end

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

    // heading effect start
    Splitting({target: '.splited-headline', by: 'chars' });

    $(".data").each(function(){

      new ScrollMagic.Scene({
        triggerElement: this.children[0],
        duration: '100%',
        triggerHook: 0.9,
      })
      .setClassToggle(this, "head-in") // add class toggle
      //.addIndicators() // add indicators (requires plugin)
      .addTo(controller);
      
    });
    // heading effect end

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


 
    // me start
    var meTweenMax = TweenMax.fromTo(".me", 1, {
      top: "55px",
      ease: Back.easeInOut.config(1.7)
    }, { top: "-78", ease: Back.easeInOut.config(1.7) })
    var meScene = new ScrollMagic.Scene({
      triggerElement: ".page-footer",
    })
      .setTween(meTweenMax).addTo(controller);
      // me end

    
    // add internal-page class to body
    $("body").addClass("internal-page-body");
  }
  ngOnDestroy() {
    // remove internal-page class from body
    $("body").removeClass("internal-page-body");
  }

}