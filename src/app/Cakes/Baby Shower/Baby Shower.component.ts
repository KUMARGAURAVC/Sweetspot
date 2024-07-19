import { Component } from '@angular/core';

@Component({
  selector: 'app-Baby Shower',
  templateUrl: './Baby Shower.component.html',
  styleUrl: './Baby Shower.component.css'
})
export class BabyShowerComponent {


  cakes: { image: string; title: string; price: number }[] = [
    { image: './assets/BabyShower/1.webp', title: 'BabyShower Cake S1', price: 1500 },
    { image: './assets/BabyShower/2.webp', title: 'BabyShower Cake S2', price: 1999 },
    { image: './assets/BabyShower/3.jpg', title: 'BabyShower Cake S3', price: 1700 },
    { image: './assets/BabyShower/4.jpg', title: 'BabyShower Cake S4', price: 1300 },
    { image: './assets/BabyShower/5.jpg', title: 'BabyShower Cake S5', price: 1200 },
    { image: './assets/BabyShower/6.jpg', title: 'BabyShower Cake S5', price: 1000 },
    { image: './assets/BabyShower/7.jpg', title: 'BabyShower Cake S5', price: 800},
    { image: './assets/BabyShower/8.jpg', title: 'BabyShower Cake S5', price: 1699 }      
  ];  
}
