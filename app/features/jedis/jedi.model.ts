
export class Jedi {
   name:string;
   allegiance:string;
   id:number;
   
   constructor(name:string, allegiance:string, id:number) {
       this.name = name;
       this.allegiance = allegiance;
       this.id = id;
   }
   
   toString() {
       return `${this.name} + of the ${this.allegiance}`;
   } 
}