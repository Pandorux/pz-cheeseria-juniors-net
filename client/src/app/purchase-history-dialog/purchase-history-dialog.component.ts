import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TransactionsService } from '../_services/transactions.service';

@Component({
  selector: 'app-purchase-history-dialog',
  templateUrl: './purchase-history-dialog.component.html',
  styleUrls: ['./purchase-history-dialog.component.css']
})
export class PurchaseHistoryDialogComponent implements OnInit {

  constructor(
      // TODO: Unsure if I need both the Dialog Ref and Dialog Data
      public dialogRef: MatDialogRef<PurchaseHistoryDialogComponent>,
      private transService: TransactionsService
  ) { }

  ngOnInit(): void {
    console.log('PurchaseHistoryDialogComponent Init');
  }

}
