import { Component, OnInit } from '@angular/core';
import { CartService } from '../../cart.service';
import { Cakes } from '../../Cakes';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';


interface OrderItem extends Cakes {
  cake: Cakes;
}

// cartItems: OrderItem[] = [];

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderdetailsComponent implements OnInit {
  cartItems: Cakes[] = [];
  totalItems: number = 0;
  cartItemsSubject = new Subject<Cakes[]>();

  constructor(private cartService: CartService,
    private router: Router) {}

  ngOnInit() {
    this.cartService.cartItems$.subscribe((items) => {
      this.cartItems = items;
      this.calculateTotalItems();
    });
  }

  calculateTotal(): number {
    return this.cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  calculateTotalItems(): void {
    this.totalItems = this.cartItems.reduce((count, item) => count + item.quantity, 0);
  }


}
