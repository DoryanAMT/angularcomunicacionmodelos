import { Component } from '@angular/core';
import { Coche } from '../../models/coche';

@Component({
  selector: 'app-padre-coches',
  templateUrl: './padre-coches.component.html',
  styleUrl: './padre-coches.component.css'
})
export class PadreCochesComponent {
  public coches: Array<Coche>;
  constructor(){
    this.coches = [
      new Coche("Ford", "Mustang", 100, 25, false),
      new Coche("Volkswagen", "Escarabajo", 170, 10, false),
      new Coche("Lamborghini", "Diable", 180, 35, false),
    ]
  }

}
