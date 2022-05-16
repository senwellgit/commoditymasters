import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
// import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // title = 'ng-carousel-demo';
  id:number | undefined;
  
  customOptions: OwlOptions = {
    loop: true,
      dots: true,
    navSpeed: 300,
    autoplay: true,
    center: true,
    autoHeight: true,
    autoWidth: true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 1
      }
    },
    // nav: true
  }
  slides = [
    {id: 1, img: "../../../../assets/img1.png"},
    {id: 2, img: "../../../../assets/img3.png"},
    {id: 3, img: "../../../../assets/carousel_3.png"},
    {id: 4, img: "../../../../assets/carousel_2.png"}
  ]

  
  constructor() { }

  ngOnInit(): void {
    
  }

}
