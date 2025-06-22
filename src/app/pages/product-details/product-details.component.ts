import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../../service/service.service';
import { Product } from '../../model/Product.model';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit{
  constructor(
    private route:ActivatedRoute,
    private productService:ServiceService,
    private cartService:CartService,
    private router:Router
  ){}

  // get id from url
  product:Product | null = null;
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getSingleProductById(id).subscribe((data) => {
      this.product = data;
    });
  };

    addToCart(){
      if(this.product){
        this.cartService.addToCart(this.product);
        alert('Product added to cart!');
        this.router.navigate(['/cart']);
      };
    };
}
