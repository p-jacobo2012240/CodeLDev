import { Component, OnInit } from '@angular/core';
import { Heroe } from '../heroe';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  private heroe : Heroe = new Heroe();

  constructor() { }

  ngOnInit() {
  }

  createHero(): void{
    console.log(`esto es lo que se mando ${this.heroe}`)
  }
}
