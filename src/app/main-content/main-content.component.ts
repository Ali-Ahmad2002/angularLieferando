import { Component, Input, OnInit } from '@angular/core';
import { ArraysService } from '../arrays.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  activeBtn: boolean = true;

  constructor(public arrays: ArraysService) { }

  ngOnInit(): void {

  }

  showFood(category: string) {
    if (category !== 'all') {
      console.log(category);
      this.arrays.filteredFood = this.arrays.foods.filter((f: any) => f.category === category);
      this.activeBtn = true;
    } else {
      this.arrays.filteredFood = this.arrays.foods;
      this.activeBtn = false;
    }
  }

  addToBasket(food: any) {
    let position = this.arrays.foodsInBasket.indexOf(this.arrays.filteredFood[food]);
    let index = this.arrays.filteredFood[food];
    console.log('pos', position);
    if (position == -1) {
      index.amount = 1;
      this.arrays.foodsInBasket.push(index);
    } else {
      index.amount++;
    }


  }
}
