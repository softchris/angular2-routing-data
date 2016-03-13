import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';


import { Jedi } from './jedi.model'; 
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class JediService {
    http:Http;
    
    constructor(http:Http) {
        this.http = http;
    }
    
    getJedis() {
        return this.http.get('jedis.json')
            .map((response: Response) => <Jedi> response.json())
            .catch(this.handleError);
            
    }
    
    getJedisAsPromise () {
         
        return this.http.get('jedis.json')
            .map((response: Response) => <Jedi> response.json())
            .toPromise();     
    }
    
    handleError(error:Response) {
        return Observable.throw(error.status || "Server error");
    }
}
