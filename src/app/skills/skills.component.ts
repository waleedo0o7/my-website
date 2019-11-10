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

    var designWord = TweenMax.fromTo(".design-char", 5,
      { y: "-200px", repeat: -1 }, { y: "939px", repeat: -1 },
    )

    
    
    // add internal-page class to body
    $("body").addClass("internal-page-body");
  }
  ngOnDestroy() {
    // remove internal-page class from body
    $("body").removeClass("internal-page-body");
  }

}