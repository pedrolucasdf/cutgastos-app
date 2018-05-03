import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaEletrodomesticosPage } from './lista-eletrodomesticos';

@NgModule({
  declarations: [
    ListaEletrodomesticosPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaEletrodomesticosPage),
  ],
})
export class ListaEletrodomesticosPageModule {}
