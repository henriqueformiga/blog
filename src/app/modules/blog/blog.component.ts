import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  posts: any[] = [];
  slides = [
    {
      image: 'https://static.imasters.com.br/wp-content/uploads/2018/04/A.jpg',
      url: 'blog',
      title: 'Primeiro Post',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe',
    },
    {
      image: 'https://static.imasters.com.br/wp-content/uploads/2018/04/A.jpg',
      url: 'blog',
      title: 'Segundo Post',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe',
    },
  ];
  configSwiper: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 50,
    navigation: true,
    height: 100,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };

  constructor() {}

  ngOnInit(): void {
    this.getPosts();
  }


  public getPosts() {
    this.posts = [
      {
        image: 'https://static.imasters.com.br/wp-content/uploads/2018/04/A.jpg',
        url: 'blog',
        title: 'Terceiro Post',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe',
      },
      {
        image: 'https://static.imasters.com.br/wp-content/uploads/2018/04/A.jpg',
        url: 'blog',
        title: 'Quarto Post',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe',
      },
      {
        image: 'https://static.imasters.com.br/wp-content/uploads/2018/04/A.jpg',
        url: 'blog',
        title: 'Quinto Post',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe',
      }
    ]
  }


}
