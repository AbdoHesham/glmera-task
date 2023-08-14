import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { BussinessTypeComponent } from './bussiness-type/bussiness-type.component';

const routes: Routes = [
  { path: '', redirectTo: 'signup', pathMatch: 'full' },


  {path:'signup',component:SignupComponent},
  {path:'bussiness-type',component:BussinessTypeComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
