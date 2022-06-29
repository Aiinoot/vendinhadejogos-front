import { Jogo } from './jogo';
export interface Itensjogos {
  id: string;
  qtd: number;
  jogo: Jogo;
  valorTotal: number;
}
