import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
 
  public name: string = 'kirby';

  public age: number = 200;

  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.name } - ${this.age}`;
  }

  changeHero():void{
    this.name='Sayori'
  }

  changeAge(){
     this.age=16
  }

  resetForm():void{
    this.name = 'kirby';
    this.age = 200;
  }

}
