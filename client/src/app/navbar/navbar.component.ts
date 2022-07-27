import { Component, OnInit } from '@angular/core';
import { CartService } from '../_services/cart.service';
import { CartModelPublic } from '../_models/cart';
import { Cheese } from '../_models/cheese';
import { Transaction } from '../_models/transaction';
import { TransItem } from '../_models/transitem';
import { TransactionsService } from '../_services/transactions.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  cartData: CartModelPublic;
  cartSize: number;
  cartTotal: number;
  _message: string;
  products: Cheese[];

  store: any = [];
  logo: any;

  constructor(
    private cartService: CartService,
    private transService: TransactionsService
  ) {}

  ngOnInit() {
    // set the products locally
    this.cartService.productData$.subscribe((data) => {
      this.products = data;
    });

    this.cartService.cartDataObs$.subscribe((data) => {
      this.cartData = data;
      this.cartSize = Object.entries(data).reduce(
        (total, val) => total + val[1],
        0
      );
    });
  }

  // Increments the number of items in cart if value is positive,
  // or decrements if negative
  changeItemAmount(id: string, value: number) {
    this.cartService.ModifyProductCount(id, value);
  }

  // returns the details for the specified cheese
  getDetails(id: string): Cheese {
    const details = this.products.filter(
      (product) => product.id === parseInt(id)
    );
    return details[0];
  }

  // calculates the total cart cost
  calculateTotal() {
    return Object.entries(this.cartData).reduce(
      (total, [key, value]) => total + this.getDetails(key).price * value,
      0
    );
  }
  
  // Converts Cart to Purchase Transaction
  convertCartToTransaction(): Transaction {
    let trans: Transaction = {
      transType: "Purchase", // TODO: Convert to Enum
      totalItemQuantity: this.cartSize,
      totalAmount: this.calculateTotal(),
      transItems: []
    };

    Object.entries(this.cartData).forEach (
      ([key, value]) => {
        let cheese: Cheese = this.getDetails(key);
        let t: TransItem = {
          itemNo: trans.transItems.length + 1,
          cheeseId: cheese.id,
          quantity: value,
          price: cheese.price,
          total: value * cheese.price
        };

        trans.transItems.push(t);
      }
    );

    return trans;
  }

  clearCart() {
    this.cartSize = 0;
    this.cartTotal = 0;
    this.cartService.ClearCart();
  }

  purchaseCart() {
    let trans: Transaction = this.convertCartToTransaction(); 

    console.log('Converted Cart', trans);
    this.transService.postTransaction(trans).subscribe(() => console.log('Post Transaction Complete'));
    this.clearCart();
  }
}
