import { Usuario } from './usuario';
import { Time } from "@angular/common";

export class Eletrodomestico {
    id: number;
    nome: string;
    descricao: string;
    potenciaUso: number;
    potenciaStandby: number;
    dataCadastro: Date;
    quantidade: number;
    horas: Time;
    dias: number;
    usuario: Usuario;
}
