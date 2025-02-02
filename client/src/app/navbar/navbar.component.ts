import { Component, OnInit, ViewChild } from '@angular/core';
import { CartService } from '../_services/cart.service';
import { CartModelPublic } from '../_models/cart';
import { Cheese } from '../_models/cheese';
import { Transaction } from '../_models/transaction';
import { TransItem } from '../_models/transitem';
import { TransactionsService } from '../_services/transactions.service';
import { Transtype } from '../_models/trans-type';
import { PurchaseHistoryDialogComponent } from '../purchase-history-dialog/purchase-history-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: [
    './../purchases.css',
    './navbar.component.css'
  ],
})
export class NavbarComponent implements OnInit {
  
  @ViewChild(MatSort) sort: MatSort;

  cartData: CartModelPublic;
  cartSize: number;
  cartTotal: number;
  _message: string;

  transTotal: number;
  recentPurchasesColumns: string[] = [
    'transactionNo',
    'purchase-datetime',
    'purchase-total-items',
    'purchase-total-amount'
  ];

  products: Cheese[];
  transactions: Transaction[];
  transactionDataSource: MatTableDataSource<Transaction>;

  store: any = [];
  logo: any;

  constructor(
    private cartService: CartService,
    private transService: TransactionsService,
    private dialog: MatDialog
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

    this.loadPurchaseHistory();
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
      transType: Transtype[Transtype.Purchase].toString(),
      transDateTime: new Date(),
      totalItemQuantity: this.cartSize,
      totalAmount: this.calculateTotal(),
      items: []
    };

    Object.entries(this.cartData).forEach (
      ([key, value]) => {
        let cheese: Cheese = this.getDetails(key);
        let t: TransItem = {
          itemNo: trans.items.length + 1,
          cheeseId: cheese.id,
          quantity: value,
          price: cheese.price,
          total: value * cheese.price
        };

        trans.items.push(t);
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
    this.transService.postTransaction(trans).subscribe((r) => console.log('Post Transaction Complete'));
    this.clearCart();

    this.loadPurchaseHistory();
  }

  openPurchaseHistoryDialog() {
    let dialogRef = this.dialog.open(PurchaseHistoryDialogComponent);
  }

  loadPurchaseHistory() {
    this.transService.getTransactionCount().subscribe((count) => {
      this.transTotal = count;
    });

    this.transService.getRecentPurchaseHistory().subscribe((data) => {
      console.log('transaction data', data);
      this.transactions = data;
      this.transactionDataSource = new MatTableDataSource<Transaction>(this.transactions);
      this.transactionDataSource.sort = this.sort;
      console.log('transactions', this.transactions);
    });

    this.transTotal = this.transactions ? this.transactions.length : 0; 
    console.log('transtotal', this.transTotal);
  }
}
