import { Component, OnInit } from '@angular/core';
import { ArraysService } from '../arrays.service';

@Component({
  selector: 'app-shopping-basket',
  templateUrl: './shopping-basket.component.html',
  styleUrls: ['./shopping-basket.component.scss']
})
export class ShoppingBasketComponent implements OnInit {

  constructor(public arrays: ArraysService) { }

  ngOnInit(): void {
    console.log('basket', this.arrays.foodsInBasket);
  }

  // scrollFunction() {
  //   window.onscroll = function () {
  //     if (window.scrollY > 0) {
  //     }
  //   }
  // }

}
