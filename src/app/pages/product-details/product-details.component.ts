import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../../service/service.service';
import { Product } from '../../model/Product.model';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit{
  constructor(private route:ActivatedRoute, private productService:ServiceService){}

  product:Product | null = null;
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getSingleProductById(id).subscribe((data) => {
      this.product = data;
    });
  };

    addToCart(){
      alert("Product added to cart")
    }
}
