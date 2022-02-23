import { Component, HostListener, OnInit } from '@angular/core';
import { ArraysService } from '../arrays.service';

@Component({
  selector: 'app-shopping-basket',
  templateUrl: './shopping-basket.component.html',
  styleUrls: ['./shopping-basket.component.scss']
})
export class ShoppingBasketComponent implements OnInit {

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
  }

  onScroll(event: any) {
    console.log(event);
    if (this.currentPosition > 0) {
      
    }

  }

}
