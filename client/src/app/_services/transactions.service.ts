import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Transaction } from '../_models/transaction';


@Injectable({
    providedIn: 'root',
  })
  export class TransactionsService {
    private server_url = environment.serverURL;
  
    constructor(private http: HttpClient) {}

    getTransaction(id: number): Observable<any> {
      // TODO: Whole number check
      return this.http.get(this.server_url + '/transactions/get/' + id);
    }
  
    getTransactions(): Observable<any> {
      return this.http.get(this.server_url + '/transactions/get');
    }

    getRecentPurchaseHistory(): Observable<any> {
      return this.http.get(this.server_url + '/transactions/get?limit=5&orderByLatest=true');
    }

    getTransactionCount(): Observable<any> {
      return this.http.get(this.server_url + '/transactions/get/count');
    }

    postTransaction(trans: Transaction): Observable<any> {
      return this.http.post<any>(this.server_url + '/transactions/post', trans);
    }
  }