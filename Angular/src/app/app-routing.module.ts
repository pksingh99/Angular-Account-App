import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { CreateformComponent } from './components/createform/createform.component';
import { UpdateaccountComponent } from './components/updateaccount/updateaccount.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'createform',
    component: CreateformComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'updateaccount/:id',
    component: UpdateaccountComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
