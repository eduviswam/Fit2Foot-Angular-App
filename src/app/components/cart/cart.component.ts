import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cartservice/cart.service';
import { MessageService } from 'src/app/service/messageservice/message.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  public products : any = [];
  public grandTotal !: number;
  constructor(private cartService : CartService,
              private router: Router,
              private messageService: MessageService) { }

  ngOnInit(): void {
    this.messageService.clear();
    this.cartService.getProducts()
    .subscribe(res =>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }
  removeItem(item: any){
    this.cartService.removeCartItem(item);
    this.messageService.clear();
    this.messageService.add(`Product ${item.name} removed from Cart`);
  }
  emptyCart(){
    this.cartService.removeAllCart();
    this.router.navigate(['/cart'])
  }
}
