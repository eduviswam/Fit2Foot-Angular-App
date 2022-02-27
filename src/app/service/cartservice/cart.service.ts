import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  public cartItemList : any = [];
  public viewedProductList : any = [];
  public productList = new BehaviorSubject<any>([]);


  constructor() { }

  getProducts(){
    return this.productList.asObservable();
  }

  setProduct(product : any){
    
    this.cartItemList.push(...product);
    this.productList.next(product);
  }

  addToCart(product : any){
    var index = this.cartItemList.findIndex((x: { id: string; }) => +x.id == product.id); 
    // Here you can check specific property for an object whether it exist in your array or not
    index === -1 ? this.cartItemList.push(product) : this.changeProductQuantity(product); 

    this.productList.next(this.cartItemList);
    this.getTotalPrice();
  }

  addToHistory(product: any) {
    var index = this.viewedProductList.findIndex((x: { id: string; }) => +x.id == product.id); 

    // Here you can check specific property for an object whether it exist in your array or not
    if(index === -1){
      this.viewedProductList.push(product)
    }
  }
  
  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((item:any)=>{
      grandTotal += item.total.amount === undefined ? +item.total : +item.total.amount;
    })
    return grandTotal;
  }

  removeCartItem(product: any){
    this.cartItemList.map((item:any, index:any)=>{
      if(product.id=== item.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
  }

  removeAllCart() {
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }

  changeProductQuantity(product: any){
    this.cartItemList.forEach(function (value: any) {
      if(+value.id === +product.id){
        value.quantity += 1;
        value.total.amount = +product.price.amount * value.quantity;
      }
    }); 
  }
  
}



