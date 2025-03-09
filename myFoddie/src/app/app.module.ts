import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { OrderComponentComponent } from './order-component/order-component.component';
import { VerifyComponentComponent } from './verify-component/verify-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { CustomerDetailsComponentComponent } from './customer-details-component/customer-details-component.component';
import { ForgotPasswordComponentComponent } from './forgot-password-component/forgot-password-component.component';
import { PlaceOrderComponentComponent } from './place-order-component/place-order-component.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NewUsercomponentComponent } from './new-usercomponent/new-usercomponent.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    OrderComponentComponent,
    VerifyComponentComponent,
    LoginComponentComponent,
    CustomerDetailsComponentComponent,
    ForgotPasswordComponentComponent,
    PlaceOrderComponentComponent,
    NewUsercomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
