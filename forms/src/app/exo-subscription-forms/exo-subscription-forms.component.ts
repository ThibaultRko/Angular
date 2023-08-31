import { Component } from '@angular/core';
import { Validators, FormGroup, FormControl, FormRecord, Form } from '@angular/forms';
import { emailAlreadyUsed } from './email.validator';
import { valuesAreEqual } from './pseudo.validator';

@Component({
  selector: 'app-exo-subscription-forms',
  templateUrl: './exo-subscription-forms.component.html',
  styleUrls: ['./exo-subscription-forms.component.css']
})
export class ExoSubscriptionFormsComponent {
form = new FormGroup({
  pseudo: new FormControl('', Validators.minLength(5)),
  email: new FormControl('', null, emailAlreadyUsed),
  password: new FormGroup({
    new: new FormControl(),
    confirm: new FormControl()
  }, valuesAreEqual)
})
get UserEmail() {
  return this.form.get('email') as FormControl
}
get Pseudo() {
  return this.form.get('pseudo') as FormControl
}
get Password() {
  return this.form.get('password') as FormControl
}
}

