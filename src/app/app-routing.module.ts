import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuccessPageComponent } from './shared/components/success-page/success-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },

  {
    path: 'success',
    loadChildren: () =>   
   import('./shared/shared.module')
    .then(m => m.SharedModule)
 } ,
 {
  path: 'auth',
  loadChildren: () =>   
 import('./pages/auth/auth.module')
  .then(m => m.AuthModule)
} ,
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
