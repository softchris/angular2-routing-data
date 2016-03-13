import { Component,Input,Output, EventEmitter } from 'angular2/core';
import { Movie } from './movie.model';
import { CursivePipe  } from './cursive.pipe';
import { PowerPipe } from './power.pipe';

@Component({
    selector : 'selected-movie',
    pipes : [ CursivePipe, PowerPipe ],
    template : `
        <div style="border: solid 2px black; background:grey; padding: 10px; width: 50% ">
            <strong>Selected movie {{ movie.name }}</strong>
            {{ movie.num | power:2 }}
            {{ movie.name | uppercase }}
            <div [innerHTML]="movie.description | cursive" ></div>
        </div>
        <button (click)="hi()" >Say hi to parent</button>
    `
})
export class MovieComponent {
    @Output() changed:EventEmitter<Movie> = new EventEmitter<Movie>();
    @Input() movie:Movie;
    
    constructor() {
        
    }
    
    hi() {
        console.log('saying hi to parent');
        this.changed.next(this.movie);
        //this.selected.emit(this.movie);
    }
}