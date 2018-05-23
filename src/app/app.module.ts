import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//servicios RESTful
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroService } from '../app/hero.service';
import { RouterModule, Routes, Router } from '@angular/router';

const routes: Routes = [
  {path: 'heroes', component: HeroesComponent},
  
  //pathMatch full, si va enviando valores si algo encaja, lo dirije a la pag. que yo quiera.
  {path: '', redirectTo: '/heroes', pathMatch: 'full'}

]


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
