import { Pipe, PipeTransform } from 'angular2/core';

@Pipe({ name : 'power' })
export class PowerPipe implements PipeTransform {
    transform(value:string, args : any[]) {
        let base:number = parseInt(value);
        let exp = args.length > 0 ? parseInt( args[ 0 ] ) : 1;
        //console.log(`base : ${ base } exp : ${ exp } `);
        
        return Math.pow(base,exp);
    }
}