import { Component } from '@angular/core';

@Component({
  selector: 'app-Anniversary-Cakes',
  templateUrl: './Anniversary Cakes.component.html',
  styleUrl: './Anniversary Cakes.component.css'
})
export class AnniversaryCakesComponent {


  cakes: { image: string; title: string; price: number }[] = [
    { image: './assets/anniversary/1.jpg', title: 'Anniversary Cake S1', price: 2000 },
    { image: './assets/anniversary/2.jpg', title: 'Anniversary Cake S2', price: 1500 },
    { image: './assets/anniversary/3.webp', title: 'Anniversary Cake S3', price: 1000 },
    { image: './assets/anniversary/4.jpeg', title: 'Anniversary Cake S4', price: 1200 },
    { image: './assets/anniversary/5.jpg', title: 'Anniversary Cake S5', price: 800 },
    { image: './assets/anniversary/6.jpg', title: 'Anniversary Cake S5', price: 900 } ,
    { image: './assets/anniversary/7.jpg', title: 'Anniversary Cake S5', price: 1100 } ,
    { image: './assets/anniversary/8.jpg', title: 'Anniversary Cake S5', price: 1400 }   
  ];

}
