import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ProductComponent } from './pages/product/product.component';
import { CustomerProductsComponent } from './pages/customer-products/customer-products.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { CartComponent } from './pages/cart/cart.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';


export const routes: Routes = [
    {path: '', component: ProductComponent},
    {path: 'shop', component: CustomerProductsComponent},
    {path: 'product/:id', component: ProductDetailsComponent},
    {path: 'cart', component: CartComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'login', component: LoginComponent}
];