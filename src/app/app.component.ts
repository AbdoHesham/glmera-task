import { Component , ViewChild, TemplateRef, ElementRef} from '@angular/core';
import { ModalDismissReasons, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

import { map, take, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [NgbModalConfig, NgbModal],

})
export class AppComponent {
  title = 'glamera-task';
  
}
