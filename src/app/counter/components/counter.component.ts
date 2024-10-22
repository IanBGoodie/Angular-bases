import { Component } from '@angular/core';


@Component({
selector: 'app-counter',
template: `
<h1> {{ title }} </h1>
<hr>
<h3> Nigga counter: {{counter}}</h3>
<button (click)="increasedBy()">+1 Nigga</button>
<button (click)="reset()"> Nigga Supply </button>
<button (click)="decreaseBy()">-1 Nigga</button>
`

})

export class CounterComponent {
  title = 'Angular bases app';
  public counter: number = 10; 

  increasedBy():void {
    this.counter += 1;
  }
  decreaseBy():void{
    this.counter -= 1;
  }

    reset(): void{
      this.counter = 10;
    }

}
