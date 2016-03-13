export class Movie {
  name:string;
  description : string;
  num:number;
  
  constructor(name:string, desc:string) {
    this.name = name;
    this.description = desc;
    this.num = 11;
  }
  
  getName():string {
    return this.name;
  }
}