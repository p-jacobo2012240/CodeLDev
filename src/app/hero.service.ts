import { Injectable } from '@angular/core';
import { Hero } from './Hero';
import { Heroes } from './mock-heroes';
import { Http, Headers } from '@angular/http';



/*Nunca se hace referencia de el, pero angular lo va proveer cuando lo necesitemos
Cuando algo es injectable, funciona como un singleton.
*/

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'api/heroes';

  constructor(private http: Http) { }


  getHeroes(): Promise<Hero[]>{
    return Promise.resolve(Heroes);
  }

  getHero(id: number): Promise<Hero>{
    return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
    
  }
}
