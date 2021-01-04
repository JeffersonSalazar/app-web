import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

  // Servicio para als tarjetas
  public informacion: any = {
    parrafo: `Lorem ipsum dolor sit amet consectetur 
    adipisicing. Quibusdam, 
    necessitatibus. m ipsum dolor sit 
    consectetur adipisicing elit. Quibusdam, 
    necessitatibus. sitatibus.`
  }

  /* Estados del NgIf */
  most_one: boolean = true;
  most_two: boolean;
  most_three: boolean;

  /* Metodos para cambiar ocultar o mostrar las tarjetas */
  mostrar_one() {
    this.most_one = !this.most_one;
    this.most_two = false;
    this.most_three = false;
  }

  mostrar_two() {
    this.most_two = !this.most_two;
    this.most_one = false;
    this.most_three = false;
  };

  mostrar_three() {
    this.most_three = !this.most_three;
    this.most_one = false;
    this.most_two = false;
  }
}
