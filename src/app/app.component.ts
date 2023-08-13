import { Component , ViewChild, TemplateRef} from '@angular/core';
import { ModalDismissReasons, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { VerficationCodeComponent } from './pages/verfication-code/verfication-code.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [NgbModalConfig, NgbModal],

})
export class AppComponent {
  title = 'glamera-task';
  @ViewChild('content') modalContent!: TemplateRef<any>;

  constructor(config: NgbModalConfig, private modalService: NgbModal){

  }
  open(){
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
