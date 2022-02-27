import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CartService } from 'src/app/service/cartservice/cart.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})

export class CarouselComponent implements OnInit {

  productHistory: any = [];
  responsiveOptions: any = [];

  constructor(private cartService: CartService) {
    this.responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '768px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '560px',
            numVisible: 1,
            numScroll: 1
        }
    ];
  }

  ngOnInit(): void {
    this.productHistory = this.cartService.viewedProductList;
  }

  addToCart(item: any) {
    this.cartService.addToCart(item);
  }

  addToHistory(item: any) {
    this.cartService.addToHistory(item);
  }

 }
