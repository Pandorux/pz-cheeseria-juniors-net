import { BrowserModule } from '@angular/platform-browser';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AppRoutingModule } from './app-routing.module';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatChipsModule } from '@angular/material/chips'
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NavbarComponent } from './navbar/navbar.component';
import { CheesesTabComponent } from './cheeses-tab/cheeses-tab.component';
import { CheeseInfoDialogComponent } from './cheese-info-dialog/cheese-info-dialog.component';
import { PurchaseHistoryDialogComponent } from './purchase-history-dialog/purchase-history-dialog.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, CheesesTabComponent, CheeseInfoDialogComponent, PurchaseHistoryDialogComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
    ToastrModule.forRoot(), // ToastrModule added
    NgxSpinnerModule,
    NoopAnimationsModule,
    MatDialogModule,
    MatChipsModule,
    MatDividerModule,
    MatTableModule,
    NgxSkeletonLoaderModule.forRoot(),
    NgxPaginationModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
