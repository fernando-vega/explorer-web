import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InViewportModule } from 'ng-in-viewport';

import { OwlModule } from 'ngx-owl-carousel';

import { CardServiceComponent } from './components/card-service/card-service.component';
import { CounterComponent } from './components/counter/counter.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { SlideCustomersComponent } from './components/slide-customers/slide-customers.component';
import { SliderHeroComponent } from './components/slider-hero/slider-hero.component';
import { BackButtonComponent } from './components/back-button/back-button.component';

import { FirstWordPipe } from './pipes/first-word.pipe';
import { FinalTextPipe } from './pipes/final-text.pipe';
import { NormalizedUrlPipe } from './pipes/normalized-url.pipe';

import { from } from 'rxjs';



@NgModule({
  declarations: [
    CardServiceComponent,
    CounterComponent,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    SlideCustomersComponent,
    SliderHeroComponent,
    FirstWordPipe,
    FinalTextPipe,
    NormalizedUrlPipe,
    BackButtonComponent
  ],
  exports: [
    CardServiceComponent,
    CounterComponent,
    HeaderComponent,
    HeroComponent,
    FooterComponent,
    SlideCustomersComponent,
    SliderHeroComponent,
    FinalTextPipe,
    FirstWordPipe,
    NormalizedUrlPipe,
    BackButtonComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    OwlModule,
    InViewportModule
  ]
})
export class SharedModule { }
