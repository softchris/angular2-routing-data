import { Injectable } from 'angular2/core';
import { Movie } from './movie.model';

@Injectable()
export class MovieService {
    private movies:Array<Movie> = new Array<Movie>();
	constructor() {
        this.movies.push( new Movie("Top Gun", "f16 and MIG planes") );
        this.movies.push( new Movie("Lord of the rings", "hobbits hobbits, more hobbits") );
        this.movies.push( new Movie("Avatar", "smurfs in space") );
	}

	getData():Movie[] {
        return this.movies;
	}
}