import { Component } from 'angular2/core';
import { MoviesComponent } from './features/movies/movies.component';
import { MenuComponent } from './features/shared/menu.component';
import { JedisComponent } from './features/jedis/jedis.component';
import { JediComponent } from './features/jedis/jedi.component';

import { HTTP_PROVIDERS } from 'angular2/http';

import { JediService } from './features/jedis/jedis.service';

import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

@RouteConfig([
    {
        path : '/',
        name : 'Movies',
        component : MoviesComponent,
        useAsDefault : true
    },
    {
        path : '/Jedis',
        name : 'Jedis',
        component : JedisComponent
    },
    {
        path : '/Jedi/:id',
        name : 'Jedi',
        component : JediComponent
    }
])
@Component({
  selector: 'main-component',
  template: `
    <nav>
        <a [routerLink]="['Movies']" >Movies</a>
        <a [routerLink]="['Jedis']" >Jedis</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  providers : [ 
      HTTP_PROVIDERS,
      JediService,
      ROUTER_PROVIDERS
  ],
  directives : [ 
      MoviesComponent, 
      MenuComponent, 
      JedisComponent,
      ROUTER_DIRECTIVES 
  ]
})
export class MainComponent {
 
}




