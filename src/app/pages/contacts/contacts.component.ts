import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})

export class ContactsComponent implements OnInit {

  form_react: FormGroup;

  constructor( private _builder: FormBuilder ) {
    this.form_data();
  }

  // Metodo para validar el formulario
  form_data() {
    this.form_react = this._builder.group({
      email: [ '', Validators.required ],
      pass:  [ '', Validators.required ]
    })
  }

  ngOnInit() {
  }

  // Metodo para requerir el campo email si no es ingresado un valor
  get require_email() {
    return this.form_react.get('email').invalid
    && this.form_react.get('email').touched
  }

  // Metodo para requerir el campo password si no es ingresado un valor
  get require_pass() {
    return this.form_react.get('pass').invalid
    && this.form_react.get('pass').touched
  }
}
