import { Component, Inject, Input, OnInit } from '@angular/core';
import { Cheese } from '../_models/cheese';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CartService } from '../_services/cart.service';

@Component({
  selector: 'app-cheese-info-dialog',
  templateUrl: './cheese-info-dialog.component.html',
  styleUrls: [
    './cheese-info-dialog.component.css', 
    '../cheeses-tab/cheeses-tab.component.css'
  ]
})
export class CheeseInfoDialogComponent implements OnInit {

  public cheese: Cheese;

  constructor(
    // TODO: Unsure if I need both the Dialog Ref and Dialog Data
    public dialogRef: MatDialogRef<CheeseInfoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {cheese: Cheese},
    private cartService: CartService,
  ) {}

  ngOnInit(): void {
    this.cheese = this.data.cheese;
    console.log('CheeseInfoDialogComponent Init', this.cheese);
  }

  //Add to cart function
  addToCart(id: number) {
    console.log('Added to cart');
    console.log(id);
    this.cartService.AddProductToCart(id);
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
