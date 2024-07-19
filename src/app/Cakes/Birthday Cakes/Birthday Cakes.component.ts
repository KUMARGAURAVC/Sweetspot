import { Component } from '@angular/core';

@Component({
  selector: 'app-Birthday Cakes',
  templateUrl: './Birthday Cakes.component.html',
  styleUrl: './Birthday Cakes.component.css'
})
export class BirthdayCakesComponent {


  cakes: { image: string; title: string; price: number }[] = [
    { image: './assets/Birthday/1.jpg', title: 'Birthday Cakes S1', price: 999 },
    { image: './assets/Birthday/2.jpg', title: 'Birthday Cakes S2', price: 399 },
    { image: './assets/Birthday/3.jpg', title: 'Birthday Cakes S3', price: 499 },  
    { image: './assets/Birthday/4.jpg', title: 'Birthday Cakes S1', price: 599 },
    { image: './assets/Birthday/5.jpg', title: 'Birthday Cakes S2', price: 799 },
    { image: './assets/Birthday/6.jpg', title: 'Birthday Cakes S1', price: 199 },
    { image: './assets/Birthday/7.jpg', title: 'Birthday Cakes S2', price: 1199 },
    { image: './assets/Birthday/8.jpg', title: 'Birthday Cakes S1', price: 1299 }
  ]  
}
