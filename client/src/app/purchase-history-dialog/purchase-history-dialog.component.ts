import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Transaction } from '../_models/transaction';
import { TransactionsService } from '../_services/transactions.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-purchase-history-dialog',
  templateUrl: './purchase-history-dialog.component.html',
  styleUrls: [
    './../purchases.css',
    './purchase-history-dialog.component.css'
  ],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class PurchaseHistoryDialogComponent implements OnInit {

  expandedTransaction: Transaction | null;
  transactions: Transaction[];
  purchasesColumns: string[] = [
    'purchase-no',
    'purchase-datetime',
    'purchase-total-items',
    'purchase-total-amount',
    'expand'
  ];
  purchasedItemColumns: string[] = [
    'item-no',
    'item-quantity',
    'item-price',
    'item-total'
  ]

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
