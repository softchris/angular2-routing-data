import { Pipe, PipeTransform } from 'angular2/core';

@Pipe({ name : 'cursive' })
export class CursivePipe implements PipeTransform {
    transform(value:string, args : any[]) {
        return `<i>${ value }</i>`;
    }
}