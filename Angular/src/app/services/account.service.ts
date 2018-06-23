import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient ) { }

  getAccounts() {
    return this.http.get('/server/accounts');
  }

  getAccount(id: number) {
    return this.http.get('/server/accounts/' + id);
  }

  createAccount(account) {
    let body = JSON.stringify(account);
    return this.http.post('/server/accounts', body, httpOptions);
  }

  updateAccount(account, id: number) {
    let body = JSON.stringify(account);
    return this.http.put('/server/accounts/' + id, body, httpOptions);
  }

  deleteAccount(id: number) {
    return this.http.delete('/server/accounts/' + id);
  }
}
