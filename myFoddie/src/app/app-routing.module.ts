import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponentComponent } from './login-component/login-component.component';
import { OrderComponentComponent } from './order-component/order-component.component';
import { ForgotPasswordComponentComponent } from './forgot-password-component/forgot-password-component.component';
import { VerifyComponentComponent } from './verify-component/verify-component.component';
import { PlaceOrderComponentComponent } from './place-order-component/place-order-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { NewUsercomponentComponent } from './new-usercomponent/new-usercomponent.component';
import { CustomerDetailsComponentComponent } from './customer-details-component/customer-details-component.component';

const routes: Routes = [
  {path:"login",component:LoginComponentComponent},
  {path:"home",component:HomeComponentComponent},
  {path:"newuser",component:NewUsercomponentComponent},
  {path:"customerDetails",component:CustomerDetailsComponentComponent},
  {path:"order:id",component:OrderComponentComponent},
  {path:"forgotpassword",component:ForgotPasswordComponentComponent},
  {path:"verifyOrder",component:VerifyComponentComponent},
  {path:"palceOrder",component:PlaceOrderComponentComponent},
  {path:"**",pathMatch:"full",redirectTo:"/home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
