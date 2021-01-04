import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  
  constructor() {}

  ngOnInit() {}

  // Variables que almacenan el color y fondo ingresado por el usuario
  color_text: string;
  bg_color: string;

  
  // Variable que almacena el color del texto cuando el usuario hace click
  text: string;

  color_red() {
    this.text = 'red';
  }

  color_green() {
    this.text = 'green';
  }
  
  color_blue() {
    this.text = 'blue';
  }

}
