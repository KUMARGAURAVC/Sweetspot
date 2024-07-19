import { Component } from '@angular/core';

@Component({
  selector: 'app-Basic Cakes',
  templateUrl: './Basic Cakes.component.html',
  styleUrl: './Basic Cakes.component.css'
})
export class BasicCakesComponent {


  cakes: { image: string; title: string; price: number }[] = [
    { image: './assets/Basic-cakes/1.jpg', title: 'Basic-cakes S1', price: 500 },
    { image: './assets/Basic-cakes/2.jpg', title: 'Basic-cakes S2', price: 699 },
    { image: './assets/Basic-cakes/3.jpg', title: 'Basic-cakes S4', price: 399 },
    { image: './assets/Basic-cakes/4.jpg', title: 'Basic-cakes S5', price: 800 }, 
    { image: './assets/Basic-cakes/5.jpg', title: 'Basic-cakes S4', price: 700 },
    { image: './assets/Basic-cakes/6.jpg', title: 'Basic-cakes S5', price: 999 },  
    { image: './assets/Basic-cakes/7.jpg', title: 'Basic-cakes S4', price: 199 },
    { image: './assets/Basic-cakes/8.jpg', title: 'Basic-cakes S5', price: 299 }  
  ];
}