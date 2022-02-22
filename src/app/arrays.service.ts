import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArraysService {

  foodsInBasket: any = [];

  foods: any = [
    {
      name: 'Pizza Margherita',
      text: 'Kein extra Belag',
      price: 5.5,
      category: 'pizza',
      amount: 0
    },
    {
      name: 'Pizza Salami',
      text: 'Rindersalami und extra Käse',
      price: 6.5,
      category: 'pizza',
      amount: 0
    },
    {
      name: 'Pizza Hawai',
      text: 'Ananas, Mais und extra Käse',
      price: 7,
      category: 'pizza',
      amount: 0
    },
    {
      name: 'Hamburger',
      text: 'Pattie mit ketchup',
      price: 3.5,
      category: 'burger',
      amount: 0
    },

    {
      name: 'Cheeseburger',
      text: 'Mit Käse und ketchup',
      price: 4.2,
      category: 'burger',
      amount: 0
    },
    {
      name: 'Double beef Burger',
      text: 'Mit Käse und 2 Patties',
      price: 5,
      category: 'burger',
      amount: 0
    },
    {
      name: 'Spaghetti Carbonara',
      text: 'Mit Sahne und Hühnchenbrust',
      price: 7.5,
      category: 'pasta',
      amount: 0
    },
    {
      name: 'Spaghetti Bolognese',
      text: 'Mit Rinderhack und Parmesan',
      price: 6.5,
      category: 'pasta',
      amount: 0
    },
    {
      name: 'Chicken Salat',
      text: 'Mit Hühnchenbrust und Feta Käse',
      price: 3.5,
      category: 'salate',
      amount: 0
    },
    {
      name: 'Vegan Salat',
      text: 'Mit Avocado und viel Gemüse',
      price: 2.5,
      category: 'salate',
      amount: 0
    },
  ];

  filteredFood = this.foods;

  constructor() { }
}
