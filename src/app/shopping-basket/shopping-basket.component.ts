import { Component, HostListener, OnInit } from '@angular/core';
import { ArraysService } from '../arrays.service';

@Component({
  selector: 'app-shopping-basket',
  templateUrl: './shopping-basket.component.html',
  styleUrls: ['./shopping-basket.component.scss']
})
export class ShoppingBasketComponent implements OnInit {
  activeFood: boolean = false;
  currentAmount: number = 1;

  currentPosition = window.pageYOffset;

  constructor(public arrays: ArraysService) { }

  @HostListener('window:scroll', ['$event.target']) // for window scroll events
  scroll(e: { scrollingElement: { scrollTop: any; }; }) {
    let scroll = e.scrollingElement.scrollTop;
    console.log("this is the scroll position", scroll)
    if (scroll > this.currentPosition) {
      console.log("scrollDown");
    } else {
      console.log("scrollUp");
    }
    this.currentPosition = scroll;
  }

  ngOnInit(): void {
    console.log('basket', this.arrays.foodsInBasket);
    setInterval(() => {
      this.basketFood();
    }, 25);
  }

  basketFood() {
    if (this.arrays.foodsInBasket.length > 0) {
      this.activeFood = true;
    } else if (this.arrays.foodsInBasket.length == 0) {
      this.activeFood = false;
    }
  }

  onScroll(event: any, cart: any) {
    console.log(event);
    console.log('Y', window.scrollY);
  }

  subTotal() {
    let subSum = this.arrays.foodsInBasket.price * this.arrays.foodsInBasket.amount;
    console.log('sum:', subSum);

  }

  addAmount(a: number) {
    this.arrays.foodsInBasket[a].amount++;
  }


  lowerAmount(a: number) {
    let index = this.arrays.foodsInBasket.indexOf(a);
    this.arrays.foodsInBasket[a].amount--;
    console.log(this.arrays.foodsInBasket[a].amount);
    let thePrice = +this.arrays.foodsInBasket[a].price;
    console.log('price', thePrice);
    let theAmount = +this.arrays.foodsInBasket[a].amount;
    let sum = theAmount * thePrice;
    console.log('theSum', sum);
    if (this.arrays.foodsInBasket[a].amount < 1) {
      this.arrays.foodsInBasket[a].amount = 1;
      this.arrays.foodsInBasket.splice(index, 1);
    }
  }

}
