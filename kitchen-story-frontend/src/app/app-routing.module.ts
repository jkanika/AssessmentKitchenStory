import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CreateComponent } from './products/create/create.component';
import { UpdateComponent } from './products/update/update.component';
import { DetailsComponent } from './products/details/details.component';
import { UserProductsComponent } from './user-products/user-products.component';
import { PaymentComponent } from './payment/payment.component';
import { LogoutComponent } from './logout/logout.component';
import { OrderDetailsComponent } from './order-details/order-details.component';

// create routes
const routes: Routes = [
  { path: '', redirectTo:'/home', pathMatch:'full'},
  { path: 'home', component:HomeComponent},
  // map child routes.
  { path: 'products', children:[
    { path:'' , component:ProductsComponent },
    { path:'create' , component:CreateComponent },
    { path:'update/:id' , component:UpdateComponent },
    { path:'details/:id' , component:DetailsComponent }
  ]},
  { path: 'user-products', component:UserProductsComponent},
  { path: 'payment/:amount', component:PaymentComponent},
  { path: 'order-details', component:OrderDetailsComponent},
  { path: 'sign-in', component:SignInComponent },
  { path: 'sign-up', component:SignUpComponent },
  { path: 'logout', component: LogoutComponent },
  { path: '**', component:NotfoundComponent},
];

// register routes
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
