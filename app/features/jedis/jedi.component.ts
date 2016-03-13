import { Component } from 'angular2/core';
import { ROUTER_DIRECTIVES,RouteParams } from 'angular2/router';
import { Jedi } from './jedi.model';
import { JediService } from './jedis.service';

@Component({
    selector : 'jedi',
    template : `
        <h4>A specific jedi</h4>
        <div *ngIf="jedi">
            {{ jedi.name }}
        </div>
        <button (click)="click()" >Examine jedi</button>
        <a href="" [routerLink]="['Jedis']">Back to list</a>
    `,
    directives : [ ROUTER_DIRECTIVES ]
})
export class JediComponent {
    jedi:Jedi;
    
    constructor (params:RouteParams, service:JediService) {
        let id:Number = params.get("id");
        service.getJedis()
            .subscribe( (jedis:Jedi[]) =>{
                let jedi = <Jedi>jedis.find( j => j.id === id );
                this.jedi = new Jedi(jedi.name, jedi.allegiance, jedi.id);
            });
    }
    
    click() {
        console.log('test');
    }
}