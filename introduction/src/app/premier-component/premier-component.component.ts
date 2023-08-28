import { Component } from '@angular/core';

@Component({
  selector: 'app-premier-component',
  templateUrl: './premier-component.component.html',
  styleUrls: ['./premier-component.component.css']
})
export class PremierComponentComponent {
  title = 'le titre du composant';
  classBanane = 'banane';
  classCerise = 'cerise';
  isRead = true;
  inputValue = 'placeholder';
  nickname = '';
  isReadToggle () {
    this.isRead = !this.isRead;
  }
  setNickname (input: HTMLInputElement) {
    this.nickname = input.value;
    input.value = '';
  }
}

