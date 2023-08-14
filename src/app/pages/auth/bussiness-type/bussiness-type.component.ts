import { Component , ViewChild, TemplateRef, ElementRef} from '@angular/core';
import { ModalDismissReasons, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

import { map, take, timer } from 'rxjs';
@Component({
  selector: 'app-bussiness-type',
  templateUrl: './bussiness-type.component.html',
  styleUrls: ['./bussiness-type.component.scss'],
  providers: [NgbModalConfig, NgbModal],

})
export class BussinessTypeComponent {
  @ViewChild('content') modalContent!: TemplateRef<any>;
  date = new Date();
   seconds:any ;

  constructor(config: NgbModalConfig, private modalService: NgbModal){

  }
  ngOnInit(){
    const countdown$ = timer(0, 1000).pipe(
      take(60),
      map(secondsElapsed => 60 - secondsElapsed)
    );
    
    countdown$.subscribe(secondsLeft => {
      this.seconds = secondsLeft;
    });
  }
  open(){
    
    this.seconds = this.date.getSeconds();
    console.log(this.seconds);
		this.modalService.open(this.modalContent).result.then(
      (result) => {
        // Modal closed with a result
        console.log('Modal closed:', result);
      },
      (reason) => {
        // Modal dismissed
        console.log('Modal dismissed:', this.getDismissReason(reason));
      }
    );

  }
  private getDismissReason(reason: any): string {
    // Close reasons
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
    // this called every time when user changed the code
    onCodeChanged(code: string) {
    }
    
    // this called only if user entered full code
    onCodeCompleted(code: string) {
    }
}
