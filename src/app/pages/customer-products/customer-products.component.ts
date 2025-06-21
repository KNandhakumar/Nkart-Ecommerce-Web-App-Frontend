import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { Product } from '../../model/Product.model';

@Component({
  selector: 'app-customer-products',
  imports: [],
  templateUrl: './customer-products.component.html',
  styleUrl: './customer-products.component.css'
})
export class CustomerProductsComponent implements OnInit{
  // import service
  constructor(private productService:ServiceService){}

  // get all products
  products:Product[] = [];
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((data) => {
      this.products = data;
    });
  };
}
