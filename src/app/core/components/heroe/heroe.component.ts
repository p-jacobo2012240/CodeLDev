import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { HeroeService } from '../../services/heroe.service'
import { Heroe } from '../heroe';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  private heroe : Heroe = new Heroe();
  public heroes : Heroe[] = []

  constructor(private activatedRoute: ActivatedRoute,
    private heroServie : HeroeService,
    private router: Router ) { }

  ngOnInit() {
    this.changeHero();
  }

  changeHero(): void{
    this.activatedRoute.params.subscribe(params =>{
      let id = params['id']
      if(id){
        this.heroServie.getHero(id)
          .subscribe( (heroe) =>{
            this.heroe = heroe 
          })
      }
    })
  }

  updateHero(): void {
    console.log(this.heroe)
    this.heroServie.updateHero(this.heroe)
      .subscribe( heroe =>{
        console.log(this.heroe)
        this.router.navigate(['/heroes'])
      })
  }

}
