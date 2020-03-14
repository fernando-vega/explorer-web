import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-backbutton',
  template: `
    <a class="btn-back" (click)="backClicked()"> < Volver</a>
  `
})
export class BackButtonComponent {

  constructor(private location: Location) { }

  backClicked() {
    this.location.back();
  }

}
