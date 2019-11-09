import { Component } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-website';

  ngOnInit() {

    // open and close menu
    $(".menu-icon , .menu-link").on("click", function() {

      if ($(".menu-container").hasClass("active")) {
        $(".menu-container ul").removeClass("active");
        setTimeout(() => {
          $(".menu-container").removeClass("active");
        }, 500);
      } else {
        $(".menu-container").addClass("active");
        setTimeout(() => {
          $(".menu-container ul").addClass("active");
        }, 500);
      }
    })
  }
}
