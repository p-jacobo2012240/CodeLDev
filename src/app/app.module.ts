import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeroesComponent } from './core/components/heroes/heroes.component';
import { HeroeComponent } from './core/components/heroe/heroe.component';
import { HeroeService } from './core/services/heroe.service';

//Routing
import { APP_ROUTING } from './app.routes'

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroeComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    HeroeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
