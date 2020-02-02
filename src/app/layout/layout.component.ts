import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  isHome: boolean;

  constructor(private router: Router) {
    router.events.subscribe((n) => {
      if (this.router.url === '/inicio') {
        this.isHome = true;
      } else {
        this.isHome = false;
      }
    });
  }

  ngOnInit() {
  }

}
