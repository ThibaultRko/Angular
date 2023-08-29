import { Component, EventEmitter, Input, Output } from '@angular/core';

enum Star {
  empty = '☆',
  filled = '★'
}

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {
  @Input() isFavorite: boolean = false;
  @Output() updateFavorite = new EventEmitter();
  declare favoriteButtonText : Star;
  
  
  //constuctor de nos classes angular
  //Sinon on a pas les valeurs des proprietes @input
  ngOnInit(): void {
    this.favoriteButtonText = this.isFavorite ? Star.filled : Star.empty;
  }

  toggleFavorite() {
    this.updateFavorite.emit(this.favoriteButtonText !== Star.filled);
    if (this.favoriteButtonText === Star.empty) {
      return this.favoriteButtonText = Star.filled;
    }
    return this.favoriteButtonText = Star.empty;
  }
}
