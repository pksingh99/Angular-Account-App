import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public accounts;
  private editmode;
  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.getAccounts();
  }

  getAccounts() {
    this.accountService.getAccounts().subscribe(
      data => { this.accounts = data; },
      err => console.error(err),
      () => console.log('accounts loaded')
    );
  }

  deleteAccount(id) {
    this.accountService.deleteAccount(id).subscribe(
      data => { this.accounts = data; },
      err => console.error(err),
      () => this.getAccounts()
    );
  }

}
