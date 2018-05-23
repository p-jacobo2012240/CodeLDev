import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  //OnInit metodo, cargue todo al inicial la pag.
  heroes: Hero[];
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  constructor(private service: HeroService) { }

  getHeroes():void{
    this.service.getHeroes().then(heroes => this.heroes = this.heroes = heroes);
    //then, cuando se cumpla ejecute, hace asyncrona la inf.
  }

  ngOnInit() {
    this.getHeroes();
  }

}
