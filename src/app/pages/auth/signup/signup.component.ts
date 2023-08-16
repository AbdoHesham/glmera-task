import { Component, TemplateRef, ViewChild } from '@angular/core';

import {
  ModalDismissReasons,
  NgbModal,
  NgbModalConfig,
} from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InputValidation } from 'src/app/core/constants/InputValidation';
import { map, take, timer } from 'rxjs';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers: [NgbModalConfig, NgbModal],
})
export class SignupComponent {
  @ViewChild('content') modalContent!: TemplateRef<any>;

  date = new Date();
  seconds: any;
  form: FormGroup | any;
  form2: FormGroup | any;
  showPass: boolean = false;
  userCode: any = null;
  isChecked: boolean = false;
  constructor(
    config: NgbModalConfig,
    private modalService: NgbModal,
    private router: Router
  ) {}
  ngOnInit() {
    this.initForm();

    const countdown$ = timer(0, 1000).pipe(
      take(60),
      map((secondsElapsed) => 60 - secondsElapsed)
    );

    countdown$.subscribe((secondsLeft) => {
      this.seconds = secondsLeft;
    });
  }
  open() {
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
    this.userCode = null;
  }

  // this called only if user entered full code
  onCodeCompleted(code: string) {
    this.userCode = code;
  }
  initForm() {
    this.form = new FormGroup({
      firstName: new FormControl(null, [
        Validators.required,
        Validators.pattern(InputValidation.EnglishRegx),
      ]),
      lastName: new FormControl(null, [
        Validators.required,
        Validators.pattern(InputValidation.EnglishRegx),
      ]),

      email: new FormControl(null, [
        Validators.required,

        Validators.pattern(InputValidation.email),
      ]),
      password: new FormControl(null, [
        Validators.required,

        Validators.maxLength(8),
        Validators.pattern(InputValidation.passw0rd),
      ]),
      mobileNumber: new FormControl(null, [
        Validators.required,
        Validators.pattern(InputValidation.MobileKSApattern),
      ]),
      termsAccept: new FormControl(null, [Validators.required]),
    });
  }

  save() {
    this.open();
  }
  verify() {
    this.modalService.dismissAll();
    this.router.navigateByUrl('/auth/bussiness-type');
  }
  changeCheck() {
    this.isChecked = !this.isChecked;
    if (this.isChecked == false) {
      this.form.get('termsAccept').patchValue(null);
    } else {
      this.form.get('termsAccept').patchValue(true);
    }
  }
}
