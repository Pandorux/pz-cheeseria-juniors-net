import { Component, Inject, Input, OnInit } from '@angular/core';
import { Cheese } from '../_models/cheese';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-cheese-info-dialog',
  templateUrl: './cheese-info-dialog.component.html',
  styleUrls: ['./cheese-info-dialog.component.css']
})
export class CheeseInfoDialogComponent implements OnInit {

  constructor(
    // TODO: Unsure if I need both the Dialog Ref and Dialog Data
    public dialogRef: MatDialogRef<CheeseInfoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {cheese: Cheese}
  ) { }

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
