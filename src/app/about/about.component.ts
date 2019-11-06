import { Component, OnInit, OnDestroy } from '@angular/core';

declare var $: any;
declare var ScrollMagic: any;
declare var TweenMax: any;
declare var Power0: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    // add internal-page class to body
    $("body").addClass("internal-page-body");

    var controller = new ScrollMagic.Controller();

    var pageHeader = $(".internal-page .header");

    var rotateBackToZero = TweenMax.to(pageHeader, 1, {
      rotation: -20,
      scale:3,
      opacity:0,
      ease: Power0.easeNone
    })

    // Create scrollmagic scene
    var parallaxScene = new ScrollMagic.Scene({
      triggerElement: pageHeader, // <-- Use this to select current element
      triggerHook: 0,
      duration: '80%',
    })
      .setTween(rotateBackToZero).addTo(controller);
  }
  ngOnDestroy() {
    // remove internal-page class from body
    $("body").removeClass("internal-page-body");
  }

}
