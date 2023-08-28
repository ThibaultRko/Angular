import { Component } from '@angular/core';

@Component({
  selector: 'app-deuxieme-component',
  templateUrl: './deuxieme-component.component.html',
  styleUrls: ['./deuxieme-component.component.css']
})
export class DeuxiemeComponentComponent {
  classOrange = 'orange'
  isVisible = false;
  buttonText = 'Affiche le texte caché :)'
  movies = [{
    title: 'Forest Gump',
    descritpion: 'running man...',
  },{
    titre: 'Top Gun',
    description: 'Tom cruise on a plane'
  },{
    title: 'sharknado',
    description: 'shark + tornado'
  },{
    title: 'Bananado',
    description: 'banana + tornado'
  }]

  toggleVisibility() {
    this.isVisible = !this.isVisible;
    this.toggleButtonTexte()
  }
  toggleButtonTexte() {
    if(this.isVisible) {
      return this.buttonText = 'Cache le texte caché'
    }
    return this.buttonText = 'Affiche le texte caché'
  }
}
