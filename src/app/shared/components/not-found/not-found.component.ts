import { Component, Input, OnInit } from '@angular/core';

@Component({
  template: '<p *ngIf="!found" class="center-xs">No se encontraron resultados</p>',
  selector: 'app-not-found',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent implements OnInit {

  @Input() found: boolean;

  constructor() {
  }

  ngOnInit() {
  }

}
