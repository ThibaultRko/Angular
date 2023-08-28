import { Component } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
  classBlue = 'blue'
  
  counters: number[] = [];
  
  add(index: number) {
  this.counters[index] = (this.counters[index] || 0) + 1;
  }
  sub(index: number) {
  this.counters[index] = (this.counters[index] || 0) - 1;
  }
  
  movies = [{
    title: 'Forest Gump',
    description: 'running man...',
  },{
    title: 'Top Gun',
    description: 'Tom cruise on a plane'
  },{
    title: 'sharknado',
    description: 'shark + tornado'
  },{
    title: 'Bananado',
    description: 'banana + tornado'
  }]
}
