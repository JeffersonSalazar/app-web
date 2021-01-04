import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Pages Components
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactsComponent } from './contacts/contacts.component';

const PagesRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'contacts', component: ContactsComponent },

  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(PagesRoutes, { useHash: true } )],
  exports: [RouterModule]
})

export class PagesRoutingModule { }
