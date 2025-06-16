import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { Product } from '../../model/Product.model';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  constructor(private productService:ServiceService) {}

  // get all products to show
  products:Product[] = [];
  ngOnInit(): void {
    this.getAllProducts();
  };
  
  getAllProducts(){
    this.productService.getAllProducts().subscribe((data) => {
      this.products = data;
    })
  };
  
}
