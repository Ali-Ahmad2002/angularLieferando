import { Component, Input, OnInit } from '@angular/core';
import { ArraysService } from '../arrays.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  constructor(public arrays: ArraysService) { }

  ngOnInit(): void {
   
  }

  showFood(category: string) {
    if (category !== 'all') {
      console.log(category);
      this.arrays.filteredFood = this.arrays.foods.filter((f: any) => f.category === category);
    } else {
      this.arrays.filteredFood = this.arrays.foods;
    }
  }

  addToBasket(food: any) {
    this.arrays.foodsInBasket.push(food);
    console.log('test:', this.arrays.foodsInBasket);
  }

}
