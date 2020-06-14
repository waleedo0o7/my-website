import { Component, OnInit, OnDestroy } from '@angular/core';
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


declare var scrollToTop: any;
declare var cursorEffect: any;
declare var pageHeaderEffect: any;
declare var headlineEffect: any;
declare var paragraphEffect: any;
declare var imageParallaxEffect: any;
declare var meEffect: any;


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {

  constructor(private router: Router) { }

  ngOnInit() {
   
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
