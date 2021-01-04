import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routing
import { PagesModule } from './pages/pages.module';
import { AppRoutingModule } from './app-routing.module';

// Main Component
import { AppComponent } from './app.component';

@NgModule({
  declarations: [ AppComponent ],

  imports: [
    BrowserModule,
    
    // Routing
    AppRoutingModule,
    PagesModule
  ],

  providers: [],

  bootstrap: [AppComponent]
})

export class AppModule { }
