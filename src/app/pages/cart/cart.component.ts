import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items: Array<any> = [];

  fullPrice: number = 0;

  constructor() { }

  ngOnInit() {
    if(JSON.parse(localStorage.getItem('cartItems')).length){
      this.items = JSON.parse(localStorage.getItem('cartItems'))

      this.calcPrice();
    }
  }

  public remove(i){
    this.items = JSON.parse(localStorage.getItem('cartItems'))

    this.items.splice(i,1)

    localStorage.setItem('cartItems', JSON.stringify(this.items));

    this.calcPrice();
  }


  public calcPrice(){
    this.fullPrice = 0;

    for(let item of this.items){
      this.fullPrice += item.price
    }
  }

}
