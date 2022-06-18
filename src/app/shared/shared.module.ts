import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper';
import { SwiperModule } from 'swiper/angular';
import { ButtonComponent } from './button/button.component';
import { CarouselComponent } from './carousel/carousel.component';
import { PostCardComponent } from './post-card/post-card.component';

SwiperCore.use([Navigation, Pagination, Scrollbar]);


@NgModule({
  declarations: [
    ButtonComponent,
    CarouselComponent,
    PostCardComponent
  ],
  imports: [
    CommonModule,
    SwiperModule,
    RouterModule
  ],
  exports: [
    CarouselComponent,
    PostCardComponent
  ]
})
export class SharedModule { }
