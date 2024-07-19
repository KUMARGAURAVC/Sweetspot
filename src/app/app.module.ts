import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { CakesComponent } from './Cakes/Cakes.component'; 
import { CartComponent } from './cart/cart.component';
import { FooterComponent } from './footer/footer.component';
import { AnniversaryCakesComponent } from './Cakes/Anniversary Cakes/Anniversary Cakes.component'; 
import { BabyShowerComponent } from './Cakes/Baby Shower/Baby Shower.component';
import { BasicCakesComponent } from './Cakes/Basic Cakes/Basic Cakes.component';
import { BirthdayCakesComponent } from './Cakes/Birthday Cakes/Birthday Cakes.component';
import { PremiumCakesComponent } from './Cakes/Premium Cakes/Premium Cakes.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderdetailsComponent } from './checkout/orderdetails/orderdetails.component';
import { ContactdetailsComponent } from './checkout/contactdetails/contactdetails.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { OrdertrackingComponent } from './ordertracking/ordertracking.component';
import { StoremanagementComponent } from './storemanagement/storemanagement.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    CakesComponent,
    AnniversaryCakesComponent,
    BabyShowerComponent,
    BasicCakesComponent,
    BirthdayCakesComponent,
    PremiumCakesComponent,
    CartComponent,
    FooterComponent,
    CheckoutComponent,
    OrderdetailsComponent,
    ContactdetailsComponent,
    OrdertrackingComponent,
    StoremanagementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    GoogleMapsModule
  ],
  providers: [
    // AuthService, 
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
