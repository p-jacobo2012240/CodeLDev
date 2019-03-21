import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router'
import { Heroe } from '../heroe';
import { HeroeService } from '../../services/heroe.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  private heroe : Heroe = new Heroe();

  constructor(private heroeService : HeroeService,
    private router: Router ) { }

  ngOnInit() {
  }

  createHero(): void{
    this.heroeService.addHero(this.heroe)
      .subscribe( res => this.router.navigate(['/heroes']))
  }
}
