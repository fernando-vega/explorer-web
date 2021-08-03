import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { BannerService } from '../core/services/banner/banner.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {

  isHome: boolean;
  loader = true;
  bannerImage: string;
  excludePages = ['/quienes-somos', '/historia', '/plan-estrategico', '/certificaciones'];

  constructor(private router: Router, private bannerService: BannerService) {
    router.events.subscribe((event) => {
      this.bannerImage = undefined;
      this.loader = true;
      if (event instanceof NavigationEnd) {
        this.isHome = this.router.url === '/inicio';
        if (!this.excludePages.includes(this.router.url)) {
          this.bannerService.getBanner(this.router.url)
            .then((banner) => {
              this.bannerImage = banner ? banner :
                this.excludePages.includes(this.router.url) ? undefined :
                  '../../../../assets/images/banners/banner-institutional-1.jpg';
            });
        }
        this.loader = false;
      }
    });
  }

  ngOnInit() {
  }

}
