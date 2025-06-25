import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { Product } from '../../model/Product.model';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Auth } from '@angular/fire/auth';
import { onAuthStateChanged, signOut } from 'firebase/auth';

@Component({
  selector: 'app-customer-products',
  imports: [CommonModule,RouterLink],
  templateUrl: './customer-products.component.html',
  styleUrl: './customer-products.component.css'
})
export class CustomerProductsComponent implements OnInit{
  // import service
  constructor(private productService:ServiceService,
    private auth:Auth,
    private router:Router
  ){}

  // logout logic
  isLoggedIn = false;

  // get all products
  products:Product[] = [];
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((data) => {
      this.products = data;
    });

    // logout
    onAuthStateChanged(this.auth,(user) => {
      this.isLoggedIn = !!user;
    });
  };

  logout(){
    signOut(this.auth).then(() => {
      alert('Logged out!');
      this.router.navigate(['/login']);
    });
  };
}
