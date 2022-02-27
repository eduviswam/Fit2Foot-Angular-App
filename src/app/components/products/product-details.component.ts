import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/service/apiservice/api.service';
import { CartService } from 'src/app/service/cartservice/cart.service';
import { MessageService } from 'src/app/service/messageservice/message.service';

@Component({
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit, OnDestroy {

  productId: string = '';
  productData: any[] = [];
  productSelected: any = [];
  selectedValue: number  = 8;

  constructor(private api: ApiService,
              private route: ActivatedRoute,
              private messageService: MessageService,
              private cartService: CartService) { }

  ngOnInit(): void {
    this.messageService.clear();
    this.api.getProducts().subscribe(productData =>{
      this.productData = productData;  
      this.productId = this.route.snapshot.paramMap.get('id') || '';
      this.productData.forEach((item:any) => {
        Object.assign(item,{quantity:1,total:item.price.amount});
      });
      this.getProductById();
    });
  }

  getProductById (){
    this.productSelected.push(this.productData.find(prodduct => 
      prodduct.id === this.productId
    ));
  }

  addToCart(item: any, size: any){
    Object.assign(item,{selectedSize:this.selectedValue});
    this.cartService.addToCart(item);
    this.messageService.clear();
    this.messageService.add(`Product ${item.name} added to Cart`);
  }

  onChangeSize(size: any){
    this.selectedValue = size.value;    
  }

  ngOnDestroy(): void {
    this.productSelected = [];
  }

}
