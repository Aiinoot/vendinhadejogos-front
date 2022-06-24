import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { Jogo } from '../domain/jogo';
import { JogoModel } from '../model/jogo-model';

@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.scss'],
})
export class JogoComponent implements OnInit {
  list: Jogo[] = [];

  form: FormGroup = this.formBuilder.group({
    nome: new FormControl(null, [Validators.required, Validators.minLength(2)]),
    valor: new FormControl(null, [Validators.required]),
    empresa: new FormControl(null, [
      Validators.required,
      Validators.minLength(2),
    ]),
  });
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.get().subscribe((domains: Jogo[]) => {
      this.list = domains;
    });
  }

  cadastrar(): void {
    const clieteModel: JogoModel = this.form.getRawValue();
    this.post(clieteModel).subscribe((domain: Jogo) => {
      if (domain.id) {
        this.list.push(domain);
      }
    });
  }

  private post(model: JogoModel): Observable<Jogo> {
    const url = 'http://localhost:8080/jogo/cadastrar';
    return this.http.post<Jogo>(url, model);
  }

  private get(): Observable<Jogo[]> {
    const url = 'http://localhost:8080/jogo/consultar';
    return this.http.get<Jogo[]>(url);
  }
}
