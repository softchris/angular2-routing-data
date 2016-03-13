  import { bootstrap } from 'angular2/platform/browser';
  import { MainComponent } from './main.component';
  
  bootstrap(MainComponent)
    .then(success => console.log(`Bootstrap success`))
    .catch(error => console.log(error));
