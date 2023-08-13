import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-success-page',
  templateUrl: './success-page.component.html',
  styleUrls: ['./success-page.component.scss']
})
export class SuccessPageComponent {
   // This is the option that uses the package's AnimationOption interface  
   options: AnimationOptions = {    
    path: '/assets/lottie/99592.json'  
  };  

 // This is the component function that binds to the animationCreated event from the package  
 onAnimate(animationItem: AnimationItem): void {    
  console.log(animationItem);  
}
}
