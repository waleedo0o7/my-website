import { Component, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
  }
  ngOnDestroy() {
    $("body").removeClass("home-page");
  }

}
