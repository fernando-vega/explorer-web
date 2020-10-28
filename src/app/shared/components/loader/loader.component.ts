import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  template: '<div class="loader" *ngIf="load"></div>',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {

  @Input() load = false;

  constructor() {
  }

  ngOnInit() {
  }

}
