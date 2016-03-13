import { Component } from 'angular2/core';
import { JediService } from './jedis.service';
import { Jedi } from './jedi.model';
import { Observable } from 'rxjs/Observable';
import { ROUTER_DIRECTIVES } from 'angular2/router';


@Component({
    selector : 'jedis',
    template : `
    <div style="border: solid 1px lightgray; padding: 10px; border-radius:5px">
        <div *ngFor="#jedi of jedis">
            <a href="" [routerLink] ="['Jedi', { id: jedi.id }]">
                {{ jedi.name }}
            </a>
        </div>
        
        <div *ngFor="#jedi of promiseJedis">
            <a href="" [routerLink] ="['Jedi', { id: jedi.id }]">
                {{ jedi.name }}
            </a>
        </div>
        {{ errorMessage }}
    </div>
    `,
    directives : [ ROUTER_DIRECTIVES ]     
})
export class JedisComponent {
    service:JediService;
    jedis:Observable<Jedi[]>;
    promiseJedis:Jedi[]
    
    errorMessage:string
    
    constructor (service:JediService) {
        this.service = service;
        //this.jedis = service.getJedis();
        let test:Observable = new Observable();
        
        this.service.getJedis()
            .subscribe(
                jedis => this.jedis = jedis,
                error => this.errorMessage = <any>error
            )
            
        //this.promiseJedis = service.getJedisAsPromise();
        let promise = service.getJedisAsPromise(); //.then( response => this.promiseJedis = response );
        promise
            .then( response => this.promiseJedis = response )
            .catch( response => {
                console.log( response ); 
            });
    }
}