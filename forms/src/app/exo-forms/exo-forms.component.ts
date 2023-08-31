import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-exo-forms',
  templateUrl: './exo-forms.component.html',
  styleUrls: ['./exo-forms.component.css']
})
export class ExoFormsComponent {
  category = ['Programmation', 'Philosophie', 'Culturisme']
  subclassDev = ['Angular', 'js', 'nodeJS']
  subclassPhilo = ['Platon', 'Socrate', 'Sofiane']
  subclassCult = ['chest', 'legs', 'biceps']
  submit(form: NgForm) {
    console.log(form);
    
  }

}
