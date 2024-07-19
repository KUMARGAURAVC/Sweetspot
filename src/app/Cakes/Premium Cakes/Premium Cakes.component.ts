import { Component } from '@angular/core';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-Premium-Cakes',
  templateUrl: './Premium Cakes.component.html',
  styleUrl: './Premium Cakes.component.css'
})
export class PremiumCakesComponent {


  cakes: { image: string; title: string; price: number }[] = [
    { image: './assets/Premium cake/1.jpg', title: 'Premium Cake S1', price: 1999 },
    { image: './assets/Premium cake/2.jpg', title: 'Premium Cake S2', price: 1200 },
    { image: './assets/Premium cake/3.jpg', title: 'Premium Cake S3', price: 1500 }, 
    { image: './assets/Premium cake/4.jpg', title: 'Premium Cake S1', price: 199 },
    { image: './assets/Premium cake/5.jpg', title: 'Premium Cake S2', price: 1199 },
    { image: './assets/Premium cake/6.jpg', title: 'Premium Cake S1', price: 299 },
    { image: './assets/Premium cake/7.jpg', title: 'Premium Cake S2', price: 599 },
    { image: './assets/Premium cake/8.jpg', title: 'Premium Cake S1', price: 799 }
     
  ];


  constructor(private cartService: CartService) {}

  addToCart(product: any): void {
    this.cartService.addToCart(product);
    alert('Product added to cart');
  }
}
