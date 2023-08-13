import { Component, ViewChild, TemplateRef } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-verfication-code',
  templateUrl: './verfication-code.component.html',
  styleUrls: ['./verfication-code.component.scss']
})
export class VerficationCodeComponent {
  @ViewChild('content') modalContent!: TemplateRef<any>;
  constructor(private modalService: NgbModal) {}

  // this called every time when user changed the code
  onCodeChanged(code: string) {
  }
  
  // this called only if user entered full code
  onCodeCompleted(code: string) {
  }
}
