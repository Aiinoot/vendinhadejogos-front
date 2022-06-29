import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jogo } from '../domain/jogo';
import { JogoModel } from '../model/jogo-model';

@Injectable({
  providedIn: 'root',
})
export class JogoService {
  url = 'http://localhost:8080/jogo/';

  constructor(private http: HttpClient) {}

  cadastrar(model: JogoModel): Observable<Jogo> {
    return this.http.post<Jogo>(this.url + 'cadastrar', model);
  }

  alterar(id: string, model: JogoModel): Observable<Jogo> {
    return this.http.put<Jogo>(this.url + 'alterar/' + id, model);
  }

  consultar(): Observable<Jogo[]> {
    return this.http.get<Jogo[]>(this.url + 'consultar');
  }

  remover(id: string): Observable<Jogo> {
    return this.http.delete<Jogo>(this.url + 'remover/' + id);
  }
}
