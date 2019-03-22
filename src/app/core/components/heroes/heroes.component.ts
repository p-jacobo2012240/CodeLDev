import { Component, OnInit } from '@angular/core';
import { HeroeService } from '../../services/heroe.service'
import { Heroe } from '../heroe';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  private heroe : Heroe = new Heroe();
  public heroes : Heroe[] = []
 

  constructor(private heroeService: HeroeService ) {}

  ngOnInit() {
    this.showHeroes()
  }

  showHeroes(): void{
    this.heroeService.getHeroes()
      .subscribe( (data: any)=>{
        this.heroes = data
      })
  }

  createHero(): void{
    this.heroeService.addHero(this.heroe)
      .subscribe( ()=> this.showHeroes())
  }

}
