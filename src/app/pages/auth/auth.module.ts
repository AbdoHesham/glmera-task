import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SignupComponent } from './signup/signup.component';
import { BussinessTypeComponent } from './bussiness-type/bussiness-type.component';
import { CodeInputModule } from 'angular-code-input';


@NgModule({
  declarations: [
    SignupComponent,
    BussinessTypeComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    CodeInputModule
  ]
})
export class AuthModule { }
