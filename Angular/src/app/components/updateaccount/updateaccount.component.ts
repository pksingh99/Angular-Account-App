import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AccountService} from '../../services/account.service';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-updateaccount',
  templateUrl: './updateaccount.component.html',
  styleUrls: ['./updateaccount.component.css']
})
export class UpdateaccountComponent implements OnInit {
  accountForm: FormGroup;
  public account;
  validMessage: string = '';

  constructor(private accountService: AccountService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getAccount(this.route.snapshot.params.id);
    this.accountForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      accountNumber: new FormControl('', Validators.required)
    });
  }

  getAccount(id: number) {
    this.accountService.getAccount(id).subscribe(
      data => {
        this.account = data;
      },
      err => console.error(err),
      () => console.log('Account loaded')
    );
  }

  submitRegistration(id: number) {
    if (this.accountForm.valid) {
      this.validMessage = 'Account successfully updated';
      console.log(this.accountForm.value);
      this.accountService.updateAccount(this.accountForm.value, id).subscribe(
        data => {
          return true;
        },
        error => {
          return Observable.throw(error);
        }
      );
    } else {
      this.validMessage = 'Please complete from before submitting';
    }
  }

}
