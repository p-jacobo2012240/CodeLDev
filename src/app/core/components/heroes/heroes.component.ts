import { Component, OnInit } from '@angular/core';
import { HeroeService } from '../../services/heroe.service'
import { Heroe } from '../heroe';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes : Heroe[] = []

  constructor(private heroeService: HeroeService ) {}

  getHeros(){
    
    this.heroeService.getHeroes()
      .subscribe( (data: any)=>{

        this.heroes = data
        console.log(data)

      })
  }

  ngOnInit() {
    this.getHeros()
  }

}
