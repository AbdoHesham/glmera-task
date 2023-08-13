import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Add these two
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { SuccessPageComponent } from './components/success-page/success-page.component';
import { RouterModule, Routes } from '@angular/router';

// Export this function
export function playerFactory(): any {
  return import('lottie-web');
}
const routes: Routes = [
  {path:'' , component:SuccessPageComponent},
];

@NgModule({
  declarations: [SuccessPageComponent],
  imports: [
    CommonModule,
    LottieModule.forRoot({ player: playerFactory }),
    RouterModule.forChild(routes),
  ],
  exports:[SuccessPageComponent]
})
export class SharedModule {}
