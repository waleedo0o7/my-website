import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLinkDelayModule } from '@bcodes/ngx-routerlink-delay';

declare var $: any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {

    // add overflow hidden to body in homepage 
    $("body").addClass("home-page");

    // homepage routing to any page
    $(".one-item").on("click", function () {

      $(this).addClass("active");


      $(".one-item").css({
        "opacity": "0",
        "width": "0%"
      });

      $(this).css({
        "opacity" : "1",
        "width" : "100%",
      });

    });    

  }
  ngOnDestroy() {
    $("body").removeClass("home-page");
  }
}
