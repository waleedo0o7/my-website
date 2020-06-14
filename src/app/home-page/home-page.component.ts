import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLinkDelayModule } from '@bcodes/ngx-routerlink-delay';
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
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {

  constructor(private router: Router) { }

  ngOnInit() {


    // add overflow hidden to body in homepage 
    $("body").addClass("home-page");

    // homepage routing to any page
    $(".one-item").on("click", function () {

      $(".word").fadeOut();

      $(this).addClass("active");

      $(".one-item").css({"opacity": "0","width": "0%"});

      $(this).css({"opacity" : "1","width" : "100%","background-position": "0 0"});

    });

  }
  ngAfterViewInit() {
    scrollToTop(); cursorEffect(); pageHeaderEffect(); headlineEffect(); paragraphEffect(); meEffect();    
  }

  ngOnDestroy() {
    $("body").removeClass("home-page");
  }
}
