import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { API_URL } from '../../../environments/environment'
import { Observable } from 'rxjs';
import { Heroe } from '../components/heroe';

@Injectable({
  providedIn: 'root'
})
export class HeroeService {

  constructor(private http: HttpClient ) { }

  getHeroes() : Observable<Heroe> {
    return this.http.get<Heroe>(`${API_URL}heroes`)
  }


}
