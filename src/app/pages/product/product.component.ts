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

  // add product
  newProduct:Product = {
    name: '',
    description: '',
    price: 0,
    imageUrl: ''
  };

  ngOnInit(): void {
    this.getAllProducts();
  };
  
  getAllProducts(){
    this.productService.getAllProducts().subscribe((data) => {
      this.products = data;
      console.log(this.products);
    })
  };

  // add product
  addProduct(){
    this.productService.addProduct(this.newProduct).subscribe(() => {
      this.getAllProducts(); // refresh list
      this.newProduct = {name: '',description: '',price: 0,imageUrl: ''}; // clear form
    })
  }

  // delete product
  deleteProduct(id:number){
this.productService.deleteProduct(id).subscribe(() => {
  this.products = this.products.filter(product => product.id !== id);
  });
}

  // edit product
  selectedProduct:Product | null = null;
  editProduct(product:any){
    this.selectedProduct = { ...product }; // copy product
  };

  // cancel editiing product
  cancelEdit(){
    this.selectedProduct = null;
  }
  
}
