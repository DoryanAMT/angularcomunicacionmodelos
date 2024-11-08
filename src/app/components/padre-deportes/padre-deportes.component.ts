import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-padre-deportes',
  templateUrl: './padre-deportes.component.html',
  styleUrl: './padre-deportes.component.css'
})
export class PadreDeportesComponent {
  public deportes: Array<string>;
  public deporteFavorito!: string;
  //  TENDREMOS UN METODO PARA PODER SELECCIONAR UN FAVORITO
  //  Y DIBUJARLO
  seleccionarFavoritoPadre(event: any): void{
    console.log("Dato: "+event)
    this.deporteFavorito = "Deporte Favorito: "+event;
  }
  constructor (){
    this.deportes = ["Petanca", "Curiling", "Futbol", "Dados"]
  }
}
