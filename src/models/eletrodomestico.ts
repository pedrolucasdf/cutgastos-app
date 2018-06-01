import { Time } from "@angular/common";

export class Eletrodomestico {
    id: number;
    nome: string;
    descricao: string;
    potencia_uso: number;
    potencia_standby: number;
    data_cadastro: Date;
    quantidade: number;
    horas: Time;
    minutos: Time;
    usuario_id: number;
}
