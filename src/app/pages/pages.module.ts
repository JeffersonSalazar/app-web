import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Libs
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';

// Enrutamiento Pages
import { PagesRoutingModule } from '../pages/pages-routing.module';

// Templates Components
import { NavbarComponent } from './templates/navbar/navbar.component';
import { FooterComponent } from './templates/footer/footer.component';

// Pages Components
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactsComponent } from './contacts/contacts.component';

@NgModule({

  declarations: [
    NavbarComponent,
    FooterComponent,

    HomeComponent,
    AboutComponent, 
    ServiciosComponent, 
    ContactsComponent, 
  ],

  imports: [ 
    CommonModule, 
    PagesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],

  exports: [
    NavbarComponent,
    FooterComponent,
    
    HomeComponent,
    AboutComponent, 
    ServiciosComponent,
    ContactsComponent
  ]
})

export class PagesModule { }
