import { PedidoService } from './../service/pedido.service';
import { Jogo } from './../domain/jogo';
import { Pedido } from './../domain/pedido';
import { Component, OnInit } from '@angular/core';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Cliente } from '../domain/cliente';
import { ClienteService } from '../service/cliente.service';
import { JogoService } from '../service/jogo.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.scss'],
})
export class PedidoComponent implements OnInit {
  pedidos: Pedido[] = [];
  clientes: Cliente[] = [];
  jogos: Jogo[] = [];

  form: FormGroup = this.formBuilder.group({
    idCliente: new FormControl('', [Validators.required]),
  });

  formAddJogo: FormGroup = this.formBuilder.group({
    idPedido: new FormControl('', [Validators.required]),
    idJogo: new FormControl('', [Validators.required]),
  });

  formPagarJogo: FormGroup = this.formBuilder.group({
    idPedido: new FormControl('', [Validators.required]),
    idJogo: new FormControl('', [Validators.required]),
    valor: new FormControl('null', [Validators.required]),
  });

  constructor(
    private formBuilder: FormBuilder,
    private pedidoService: PedidoService,
    private clienteService: ClienteService,
    private jogoService: JogoService
  ) {}

  ngOnInit(): void {
    this.consultarPedidos();
    this.consultarClientes();
    this.consultarJogos();
  }

  private consultarPedidos(): void {
    this.pedidoService.consultar().subscribe((x) => {
      this.pedidos = x;
    });
  }

  private consultarClientes(): void {
    this.clienteService.consultar().subscribe((x) => {
      this.clientes = x;
    });
  }

  private consultarJogos(): void {
    this.jogoService.consultar().subscribe((x) => {
      this.jogos = x;
    });
  }

  cadastrar(): void {
    if (this.form.valid) {
      const idCliente = this.form.controls['idCliente'].value;
      this.pedidoService.cadastrar(idCliente).subscribe((pedido: Pedido) => {
        this.pedidos.push(pedido);
        this.resetForm();
      });
    }
  }

  clickAddJogo(pedido: Pedido) {
    this.formAddJogo.controls['idPedido'].setValue(pedido.id);
  }

  addJogo(): void {
    console.log(this.formAddJogo.valid);
    if (this.formAddJogo.valid) {
      const idPedido = this.formAddJogo.controls['idPedido'].value;
      const idJogo = this.formAddJogo.controls['idJogo'].value;
      this.pedidoService.adicionarJogo(idPedido, idJogo).subscribe(() => {
        this.consultarPedidos();
        this.resetForm();
      });
    }
  }
  pagar(): void {
    console.log(this.formAddJogo.valid);
    if (this.formAddJogo.valid) {
      const idPedido = this.formAddJogo.controls['idPedido'].value;
      const idJogo = this.formAddJogo.controls['idJogo'].value;
      this.pedidoService.pagar(idPedido, idJogo).subscribe(() => {
        this.consultarPedidos();
        this.resetForm();
      });
    }
  }

  resetForm(): void {
    this.form.reset();
    this.form.controls['idCliente'].setValue('');

    this.formAddJogo.reset();
    this.formAddJogo.controls['idJogo'].setValue('');
  }
}
