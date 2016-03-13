import { Component } from 'angular2/core';
import { MovieService } from './movies.service';
import { Movie } from './movie.model';
import { MovieComponent } from './movie.component';

@Component({
  selector: 'movies',
  template: `
    <h3>Movies</h3>
    <div *ngIf="movies.length == 0">
      No movies to show
    </div>
    <div *ngFor="#movie of movies" style="border: solid 1px lightgray; padding: 5px; width: 50%">
      <button style="float:right" (click)="select(movie)" >Select</button> 
      <h4 [innerText]="movie.getName()"></h4>
      <input [value]="movie.name"
             #mov
             (keyup)="0" 
       />
      {{ mov.value }} 
      
      
      <input type="text" 
             [value]="movie.name"
             (input)="movie.name=$event.target.value" /> 
      
      <button (click)="save(mov.value)">Save</button>
      
    </div>
    <selected-movie 
        [movie]="selectedMovie"
        *ngIf="selectedMovie"
        (changed)="changed($event)" >
    </selected-movie>
    
    
  `,
  providers : [ MovieService ],
  directives : [ MovieComponent ]
})
export class MoviesComponent {
  private service:MovieService;
  selectedMovie:Movie;
  
  movies:Array<Movie> = new Array<Movie>();
  color = 'blue';
  
  constructor(service:MovieService) {
    this.service = service;  
    this.movies = service.getData(); 
  }
  
  save(viewMovie) {
      console.log('test');
  }
  
  select(movie) {
    this.selectedMovie = movie;
  }
  
  changed(movie:Movie){
      console.log("from child");
  }
}



