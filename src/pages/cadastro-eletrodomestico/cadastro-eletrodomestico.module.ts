import { CameraProvider } from './../../providers/camera/camera';
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
  providers: [
    CameraProvider
  ]
})
export class CadastroEletrodomesticoPageModule {}
