import { Itensjogos } from './itensjogos';
import { Cliente } from './cliente';

export interface Pedido {
  id: string;
  cliente: Cliente;
  itensjogos: Itensjogos[];
  valor: number;
  dataPagamento: Date;
  valorTotal: number;
  troco: number;
  data: Date;
  status: string;
}
