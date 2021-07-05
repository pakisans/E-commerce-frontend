import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { LoginComponent } from './login/login.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path : 'login', component : LoginComponent},
  {path : 'registration', component : RegistrationComponent},
  {path : 'products', component : ProductsComponent},
  {path : 'orders', component : OrdersComponent},
  {path : 'create-order', component : CreateOrderComponent},
  {path : 'cart', component : CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
