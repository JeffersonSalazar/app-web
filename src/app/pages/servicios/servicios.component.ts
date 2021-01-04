import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})

export class ServiciosComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

  // Arrays de Objetos
  personas: Valores[] = [
    {
      nombre: 'Mark', apellido: 'Otto', correo: '@mot' 
    },
    {
      nombre: 'Josh', apellido: 'Curl', correo: '@jcu'
    },
  ]

  // Metodo para mostrar mensaje cuando la tabla no tiene elementos
  element() {
    return this.personas.length >0;
  }

  // Variables para almacenar el ingreso de datos del usuario
  add_name: string;
  add_sub: string;
  add_email: string;

  // Metodo para añadir elementos a las tablas
  btn_add(): void { 
    function Persona(nombre, apellido, correo) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.correo = correo;
    }
    
    let nuevo: Valores = new Persona(this.add_name, this.add_sub, this.add_email);
    this.personas.push(nuevo);
  };

  // Metodo para eliminar elementos a las tablas
  btn_delete(): void {
    this.personas.pop();
  }
}

// Definicion de los tipos de datos del Array de Objetos
export interface Valores {
  nombre: string,
  apellido: string,
  correo: string
}
