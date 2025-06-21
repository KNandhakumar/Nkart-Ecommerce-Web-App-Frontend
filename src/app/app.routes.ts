import { Routes } from '@angular/router';
import { ProductComponent } from './pages/product/product.component';
import { CustomerProductsComponent } from './pages/customer-products/customer-products.component';


export const routes: Routes = [
    {path: '', component: ProductComponent},
    {path: 'shop', component: CustomerProductsComponent}
];