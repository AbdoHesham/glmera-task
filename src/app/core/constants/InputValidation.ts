import { FormControl } from '@angular/forms';

export class InputValidation {
  //arabic regx
  static ArabicRegx = new RegExp(/^[\u0600-\u06FF ]+$/);
  static ArabicWithspecialRegx = new RegExp(
    /^[\u0600-\u06FF\s\-\_\.\,\?\/\:\;\@\!\#\$\%\^\&\*\(\)\+\=\|\~\`\'\"]+$/
  );
  static ArabicNumericWithspecialRegx = new RegExp(
    /^[\u0600-\u06FF\u0750-\u077F\s0-9\-\_\.\,\?\/\:\;\@\!\#\$\%\^\&\*\(\)\+\=\|\~\`\'\"]+$/
  );

  //English regx
  static EnglishRegx = `[A-Za-z][A-Za-z ]*`;
  static EnglishWithspecialRegx = new RegExp(
    /^[a-zA-Z\s\-\_\.\,\?\/\:\;\@\!\#\$\%\^\&\*\(\)\+\=\|\~\`\'\"]+$/
  );
  static EnglishAndArabicRegx = `[A-Za-z][A-Za-z ]*/^[\u0600-\u06FF ]+$/`;

  static EnglishNumericRegx = `[a-zA-Z0-9 ]*`;
  static EnglishNumberWithspecialRegx = new RegExp(
    /^[a-zA-Z\s0-9\-\_\.\,\?\/\:\;\@\!\#\$\%\^\&\*\(\)\+\=\|\~\`\'\"]+$/
  );
  //numbers
  static onlyNumberRegx = new RegExp(/^\d+$/);
  //url
  static urlRegex = new RegExp(
    /^((http|https):\/\/)?([a-zA-Z0-9]+[.-]?)+[a-zA-Z0-9]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?([\/?#]\S*)?$/
  );
  //mobile and whatsapp
  static MobileEgpattern = new RegExp(/^(01\d{9}|1\d{9})$/);
  static MobileKSApattern = new RegExp(/^(05\d{8}|5\d{8})$/);

  static email = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
  static passw0rd = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/);

  
}
