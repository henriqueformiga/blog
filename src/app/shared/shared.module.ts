import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper';
import { SwiperModule } from 'swiper/angular';
import { ButtonComponent } from './button/button.component';
import { CarouselComponent } from './carousel/carousel.component';

SwiperCore.use([Navigation, Pagination, Scrollbar]);


@NgModule({
  declarations: [
    ButtonComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    SwiperModule,
    RouterModule
  ],
  exports: [
    CarouselComponent
  ]
})
export class SharedModule { }
