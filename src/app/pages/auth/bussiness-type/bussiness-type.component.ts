import { Component , ViewChild, TemplateRef, ElementRef} from '@angular/core';
import { ModalDismissReasons, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InputValidation } from 'src/app/core/constants/InputValidation';
import { map, take, timer } from 'rxjs';
@Component({
  selector: 'app-bussiness-type',
  templateUrl: './bussiness-type.component.html',
  styleUrls: ['./bussiness-type.component.scss'],

})
export class BussinessTypeComponent {
  @ViewChild('content') modalContent!: TemplateRef<any>;
  date = new Date();
   seconds:any ;
   form: FormGroup | any;
   showPass:boolean=false
   isChecked: boolean = false;

  constructor(config: NgbModalConfig, private modalService: NgbModal,
    private router:Router){

  }
  ngOnInit(){
    this.initForm()
  }

    initForm(){
      this.form = new FormGroup(
        {
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
      termsAccept: new FormControl(null, [
        Validators.required,
      ]),
    })
    }
    save(){
      this.router.navigateByUrl('/success')
    }
    changeCheck() {
      console.log(this.form);
      
      this.isChecked = !this.isChecked;
      if (this.isChecked == false) {
        this.form.get('termsAccept').patchValue(null);
      } else {
        this.form.get('termsAccept').patchValue(true);
      }
    }
    back(){
      this.router.navigateByUrl('/auth/signup');

    }
}
