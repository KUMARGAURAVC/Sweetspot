import { Component, OnInit } from '@angular/core';
import { Cakes } from '../Cakes';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-Cakes',
  templateUrl: './Cakes.component.html',
  styleUrl: './Cakes.component.css'
})
export class CakesComponent implements OnInit {
  items: Cakes[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    // Fetch product data (example)
    this.items = [
      { id: 1, title: 'Cakes 1', price: 10, image: 'image1.jpg', quantity: 1 },
      // ... other products
    ];
  }

  addToCart(Cakes: Cakes) {
    this.cartService.addToCart(Cakes);
  }
}