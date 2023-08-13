import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuccessPageComponent } from './shared/components/success-page/success-page.component';

const routes: Routes = [
  // {path:'' , component:SuccessPageComponent},
  {
    path: '',
    loadChildren: () =>   
   import('./shared/shared.module')
    .then(m => m.SharedModule)
 } ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
