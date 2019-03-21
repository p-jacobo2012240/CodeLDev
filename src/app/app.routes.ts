import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './core/components/heroes/heroes.component';
import { HeroeComponent } from './core/components/heroe/heroe.component';


const ROUTES : Routes = [
    {
        path: 'heroes', 
        component: HeroesComponent
    },
    {
        path : 'heroe', 
        component : HeroeComponent
    },
    {
        path: '',
        redirectTo: '/heroes',
        pathMatch: 'full' 
    }

]

export const APP_ROUTING = RouterModule.forRoot(ROUTES, { useHash: true })