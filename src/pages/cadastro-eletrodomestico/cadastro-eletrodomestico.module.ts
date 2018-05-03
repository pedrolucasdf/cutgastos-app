import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroEletrodomesticoPage } from './cadastro-eletrodomestico';

@NgModule({
  declarations: [
    CadastroEletrodomesticoPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroEletrodomesticoPage),
  ],
})
export class CadastroEletrodomesticoPageModule {}
