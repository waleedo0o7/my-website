import { Component, OnInit, OnDestroy } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-skils',
  templateUrl: './skils.component.html',
  styleUrls: ['./skils.component.scss']
})
export class SkilsComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    // add internal-page class to body
    $("body").addClass("internal-page-body");
  }
  ngOnDestroy() {
    // remove internal-page class from body
    $("body").removeClass("internal-page-body");
  }

}
