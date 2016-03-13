import { Component } from 'angular2/core';

@Component({
  selector : 'menu',
  template : `
    <div>
        <ul>
            <li *ngFor="#item of items">
                {{ item.name }}
            </li>
        </ul>
    </div>
  `  
})
export class MenuComponent {
    items:Array<MenuItem> = new Array<MenuItem>();
    constructor() {
        this.items.push( new MenuItem("Home") );
        this.items.push( new MenuItem("Products") );
    }
}

class MenuItem {
    name:string;
    constructor(name:string) {
        this.name = name;
    }
}