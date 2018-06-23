import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-createform',
  templateUrl: './createform.component.html',
  styleUrls: ['./createform.component.css']
})
export class CreateformComponent implements OnInit {
  accountForm: FormGroup;
  validMessage: string = '';

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.accountForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      accountNumber: new FormControl('', Validators.required)
    });
  }

  submitRegistration() {
    if (this.accountForm.valid) {
      this.validMessage = 'Account successfully registered';
      this.accountService.createAccount(this.accountForm.value).subscribe(
        data => {
          this.accountForm.reset();
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
