import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

declare var $: any;
declare var ScrollMagic: any;
declare var TweenMax: any;
declare var TweenLite: any;
declare var TimelineLite: any;
declare var Power0: any;
declare var Back: any;
declare var Circ: any;
declare var Splitting: any;
declare var Linear: any;


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit, OnDestroy {

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

    // parallax effect start 

    $(".one-item").each(function(){

      var portfolioTween = TweenLite.from(this.children[0], 1, { y: '250px',rotationX:40});

        // Create scrollmagic scene
        var parallaxScene = new ScrollMagic.Scene({
          triggerElement: this , // <-- Use this to select current element
          triggerHook: 1,
          duration: "100%",
        })
          // .addIndicators()
          .setTween(portfolioTween).addTo(controller);
      });
      
      // parallax effect end
    
    // add internal-page class to body
    $("body").addClass("internal-page-body");

  }
  ngOnDestroy() {

    // remove internal-page class from body
    $("body").removeClass("internal-page-body");

  }

}
