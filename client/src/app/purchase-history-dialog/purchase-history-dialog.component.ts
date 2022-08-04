import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Transaction } from '../_models/transaction';
import { TransactionsService } from '../_services/transactions.service';

@Component({
  selector: 'app-purchase-history-dialog',
  templateUrl: './purchase-history-dialog.component.html',
  styleUrls: [
    './../purchases.css',
    './purchase-history-dialog.component.css'
  ]
})
export class PurchaseHistoryDialogComponent implements OnInit {

  transactions: Transaction[];
  purchasesColumns: string[] = [
    'purchase-no',
    'purchase-datetime',
    'purchase-total-items',
    'purchase-total-amount'
  ];

  constructor(
      // TODO: Unsure if I need both the Dialog Ref and Dialog Data
      public dialogRef: MatDialogRef<PurchaseHistoryDialogComponent>,
      private transService: TransactionsService
  ) { }

  ngOnInit(): void {
    this.transService.getTransactions().subscribe((data) => {
      console.log('transaction data', data);
      this.transactions = data;
      console.log('transactions', this.transactions);
    });

    console.log('PurchaseHistoryDialogComponent Init');
  }

}
