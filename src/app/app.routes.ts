import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './core/components/heroes/heroes.component';
import { HeroeComponent } from './core/components/heroe/heroe.component';


const ROUTES : Routes = [
    {
        path: 'heores', 
        component: HeroesComponent,
        pathMatch: 'full'
    },
    {
        path : 'heroe/:id', component : HeroeComponent
    }
]

export const APP_ROUTING = RouterModule.forRoot(ROUTES, { useHash: true })