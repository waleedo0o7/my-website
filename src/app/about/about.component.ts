import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';


declare var $: any;
declare var ScrollMagic: any;
declare var TweenMax: any;
declare var Power0: any;
declare var Back:any;
declare var Circ:any;

declare var Splitting: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {

  constructor() {}

  ngOnInit(){

    Splitting({target: '.splited-headline', by: 'chars' });

    Splitting({target: '.splited-paragraph', by: 'words' });

    $("body").addClass("internal-page-body");

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

    // heading effect start

    $(".data").each(function(){

      new ScrollMagic.Scene({
        triggerElement: this.children[0],
        duration: '80%',
        triggerHook: 0.9,
      })
      .setClassToggle(this, "head-in") // add class toggle
      // .addIndicators() // add indicators (requires plugin)
      .addTo(controller);
      
    });

    // heading effect end 

    // paragraph effect start 
    
    new ScrollMagic.Scene({
      triggerElement: ".splited-paragraph",
      duration: '80%',
      triggerHook: 0.8,
    })
    .setClassToggle(".splited-paragraph", "paragraph-in") // add class toggle
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller);
    
    // paragraph effect end




    // parallax effect start 

          var item = $(".image");

          // Add tweenmax for background Parallax
          var parallax = TweenMax.to(item, 1, {
            y: '-150px',
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
            
      // parallax effect end



      // start steps

      $(".one-step").each(function(){

        console.log(this.children[0]);

        var stepsTweens = TweenMax.from(this.children[0],0.9,{
          rotationY:91,
          ease: Back.easeInOut.config(1.7)
        })
  
        var stepsScene = new ScrollMagic.Scene({
          triggerElement: ".steps",
        })
          .addIndicators()
          .setTween(stepsTweens).addTo(controller);

      });

      // end steps

      // me start
      var meTweenMax = TweenMax.fromTo(".me",1,{
        top: "55px",
        ease: Back.easeInOut.config(1.7)
      },{top: "-78",ease: Back.easeInOut.config(1.7)})
      var meScene = new ScrollMagic.Scene({
        triggerElement: ".about-footer",
      })
      .addIndicators()
      .setTween(meTweenMax).addTo(controller);
      // me end


  }
  
  ngOnDestroy() {
    // remove internal-page class from body
    $("body").removeClass("internal-page-body");
  }

}
