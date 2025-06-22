import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/Product.model';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{

  constructor(private cartService:CartService){}

  // cart datas
  cart:Product[] = [];
  total:number = 0;

  // get product data from local storage
  ngOnInit(): void {
    this.cart = this.cartService.getCart(); // get carted product from local storage
    this.total = this.cartService.getTotal(); // get total price from carted products
  }
}
