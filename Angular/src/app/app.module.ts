import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AccountService } from './services/account.service';
import { AdminComponent } from './components/admin/admin.component';
import { CreateformComponent } from './components/createform/createform.component';
import { HomeComponent } from './components/home/home.component';
import { UpdateaccountComponent } from './components/updateaccount/updateaccount.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    CreateformComponent,
    HomeComponent,
    UpdateaccountComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
