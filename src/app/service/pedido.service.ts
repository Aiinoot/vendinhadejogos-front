import { Pedido } from './../domain/pedido';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PedidoService {
  url = 'http://localhost:8080/pedido/';

  constructor(private http: HttpClient) {}

  consultar(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(this.url + 'consultar');
  }

  cadastrar(idCliente: string): Observable<Pedido> {
    return this.http.post<Pedido>(this.url + 'cadastrar', {
      idCliente,
    });
  }

  adicionarJogo(id: string, idJogo: string): Observable<Pedido> {
    return this.http.put<Pedido>(this.url + 'adicionar-jogo/' + id, {
      idJogo: idJogo,
      qtd: 1,
    });
  }

  pagar(id: string, valor: number): Observable<Pedido> {
    return this.http.put<Pedido>(this.url + 'pagar/' + id, {
      valor,
    });
  }
}
