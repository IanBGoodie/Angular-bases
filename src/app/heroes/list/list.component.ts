import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
public heroNames: string[] = 
['Kirby', 
  'Sayori', 
  'Johny Joestar', 
  'Nikki Sixx', 
  'Yuan Lan'];

  public deletedHero?: string;

  removeLastHero(): void{
    this.deletedHero = this.heroNames.pop();
    
  }

}
