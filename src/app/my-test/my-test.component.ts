import { Component, OnInit } from '@angular/core';
import { ParticlesConfig } from './particles-config';
declare let particlesJS: any; // Required to be properly interpreted by TypeScript.

@Component({
  selector: 'app-my-test',
  templateUrl: './my-test.component.html',
  styleUrls: ['./my-test.component.scss']
})
export class MyTestComponent implements OnInit {
  
  public ngOnInit(): void {
    this.invokeParticles();
  }

  public invokeParticles(): void {
    particlesJS('particles-js', ParticlesConfig, function() {});
  }

  constructor() { }

}
