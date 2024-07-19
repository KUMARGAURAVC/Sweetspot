
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { CakesComponent } from './Cakes/Cakes.component';
import { CartComponent } from './cart/cart.component';
import { AnniversaryCakesComponent } from './Cakes/Anniversary Cakes/Anniversary Cakes.component';
import { BabyShowerComponent } from './Cakes/Baby Shower/Baby Shower.component';
import { BirthdayCakesComponent } from './Cakes/Birthday Cakes/Birthday Cakes.component';
import { PremiumCakesComponent } from './Cakes/Premium Cakes/Premium Cakes.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrdertrackingComponent } from './ordertracking/ordertracking.component';
import { StoremanagementComponent } from './storemanagement/storemanagement.component';
import { BasicCakesComponent } from './Cakes/Basic Cakes/Basic Cakes.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'Cakes', component: CakesComponent,
  children:[
    {path: 'Anniversary Cakes', component: AnniversaryCakesComponent},
    {path: 'Baby Shower', component: BabyShowerComponent},
    {path: 'Basic', component: BasicCakesComponent},
    {path: 'Birthday Cakes', component: BirthdayCakesComponent},
    {path: 'Premium Cakes', component: PremiumCakesComponent}
  ]
 },
   
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'ordertracking', component: OrdertrackingComponent },
  { path: 'storemanagement', component: StoremanagementComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
