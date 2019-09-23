import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  items: Array<any> = [
    {
      id: 1,
      name: 'Suit 1',
      label: 'Traditional materials, a strict cut and classic style form the basis of the Prada Spring-Summer 2019 collection.',
      price: 25
    },
    {
      id: 2,
      name: 'Suit 2',
      label: 'Traditional materials, a strict cut and classic style form the basis of the Prada Spring-Summer 2019 collection.',
      price: 35
    },
    {
      id: 3,
      name: 'Suit 3',
      label: 'Traditional materials, a strict cut and classic style form the basis of the Prada Spring-Summer 2019 collection.',
      price: 45
    },
    {
      id: 4,
      name: 'Suit 4',
      label: 'Traditional materials, a strict cut and classic style form the basis of the Prada Spring-Summer 2019 collection.',
      price: 55
    },
    {
      id: 5,
      name: 'Suit 5',
      label: 'Traditional materials, a strict cut and classic style form the basis of the Prada Spring-Summer 2019 collection.',
      price: 65
    },
    {
      id: 6,
      name: 'Suit 6',
      label: 'Traditional materials, a strict cut and classic style form the basis of the Prada Spring-Summer 2019 collection.',
      price: 75
    },
    {
      id: 7,
      name: 'Suit 7',
      label: 'Traditional materials, a strict cut and classic style form the basis of the Prada Spring-Summer 2019 collection.',
      price: 85
    },
    {
      id: 8,
      name: 'Suit 8',
      label: 'Traditional materials, a strict cut and classic style form the basis of the Prada Spring-Summer 2019 collection.',
      price: 95
    },
    {
      id: 9,
      name: 'Suit 9',
      label: 'Traditional materials, a strict cut and classic style form the basis of the Prada Spring-Summer 2019 collection.',
      price: 100
    }
  ]

  constructor() { }

  ngOnInit() {
    if(!localStorage.getItem('cartItems'))
      localStorage.setItem('cartItems', JSON.stringify([]))
  }

  public addToCart(item){
    let items: Array<any> = JSON.parse(localStorage.getItem('cartItems'))

    items.push(item)

    localStorage.setItem('cartItems', JSON.stringify(items));
  }

}
