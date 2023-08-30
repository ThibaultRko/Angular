import { Component} from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  contactMethods = ['email', 'phone', 'fax']
  submit(form: NgForm) {
    console.log(form);
  }
}
