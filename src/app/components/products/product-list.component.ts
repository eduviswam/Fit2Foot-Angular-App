import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { ApiService } from 'src/app/service/apiservice/api.service';

import { CartService } from 'src/app/service/cartservice/cart.service';
import { MessageService } from 'src/app/service/messageservice/message.service';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productsList: any | undefined;
  selectedValue: number  = 8;
  
  constructor(private api: ApiService,
              private cartService: CartService,
              private messageService: MessageService) { }

  ngOnInit(): void {
    this.messageService.clear();
    this.api.getProducts().subscribe(productData =>{
      this.productsList = productData;  
      this.productsList.forEach((item:any) => {        
        Object.assign(item,{quantity:1,total:item.price, selectedSize:this.selectedValue});
      });
    });
  }

  onChange(selectedSize: any) {
    this.selectedValue = selectedSize;
  }

  addToCart(item: any, size: any) {
    Object.assign(item,{selectedSize:size});
    this.cartService.addToCart(item);
    this.messageService.clear();
    this.messageService.add(`Product ${item.name} added to Cart`);
  }

  addToHistory(item: any) {
    this.cartService.addToHistory(item);
  }
}
