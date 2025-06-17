import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { Product } from '../../model/Product.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  imports: [CommonModule,FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
https: any;

  constructor(private productService:ServiceService) {}

  // get all products to show
  products:Product[] = [];
  ngOnInit(): void {
    this.getAllProducts();
  };
  
  getAllProducts(){
    this.productService.getAllProducts().subscribe((data) => {
      this.products = data;
      console.log(this.products);
    })
  };
  
}
