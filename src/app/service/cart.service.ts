import { Injectable } from '@angular/core';
import { Product } from '../model/Product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  // cart
  cart:Product[] = [];
  addToCart(product:Product){
    this.cart.push(product);
    this.saveCart();
  };

  removeFromCart(index:number){
    this.cart.splice(index,1);
    this.saveCart();
  };

  getCart():Product[]{
    this.cart = JSON.parse(localStorage.getItem('cart') || '[]');
    return this.cart;
  };

  getTotal():number{
    return this.cart.reduce((total,item) => total + item.price, 0);
  };

  saveCart(){
    localStorage.setItem('cart',JSON.stringify(this.cart));
  };
}
