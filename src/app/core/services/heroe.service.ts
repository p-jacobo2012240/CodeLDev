import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from '../../../environments/environment'
import { Observable } from 'rxjs';
import { Heroe } from '../components/heroe';

@Injectable({
  providedIn: 'root'
})
export class HeroeService {
  
  private httpHeaders = new HttpHeaders({'Content-Type' : 'Application/json'})

  constructor(private http: HttpClient ) { }

  getHeroes() : Observable<Heroe> {
    return this.http.get<Heroe>(`${API_URL}heroes`)
  }

  addHero(hero: Heroe ): Observable<Heroe>{
    let data = JSON.stringify(hero)
    return this.http.post<Heroe>(`${API_URL}heroes`, data, {headers: this.httpHeaders})
  }

  getHero(id): Observable<Heroe>{
    return this.http.get<Heroe>(`${API_URL}heroes/${id}`)
  }


}
