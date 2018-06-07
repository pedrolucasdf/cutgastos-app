import { Eletrodomestico } from './../../models/eletrodomestico';
//import { CameraProvider } from './../../providers/camera/camera';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the CadastroEletrodomesticoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-eletrodomestico',
  templateUrl: 'cadastro-eletrodomestico.html',
})
export class CadastroEletrodomesticoPage {

  eletrodomestico: Eletrodomestico;
  titulo : string;
  btnTexto : string;
  cadastroEletrodomesticoForm : FormGroup;

  constructor(
    public navCtrl: NavController, public navParams: NavParams, 
    public formBuilder: FormBuilder//, public CameraProvider: CameraProvider
  ) { let e = Object.assign(new Eletrodomestico, this.eletrodomestico)}

  ionViewDidLoad() {
    if(this.navParams.data == 0)
    {
      this.titulo = "Cadastrar Eletrodoméstico";
      this.btnTexto = "Cadastrar";
      this.cadastroEletrodomesticoForm = this.formBuilder.group({
        nome: this.formBuilder.control("", [Validators.required]),
        descricao: this.formBuilder.control("", [Validators.required]),
        quantidade: this.formBuilder.control("", [Validators.required]),
        potencia_uso: this.formBuilder.control("", [Validators.required]),
        potencia_standby: this.formBuilder.control("", [Validators.required]),
        dias: this.formBuilder.control("", [Validators.required]),
        horas: this.formBuilder.control("", [Validators.required])
      })
    }
    else{
      this.titulo = "Edição";
      this.btnTexto = "Salvar";
      this.eletrodomestico = this.navParams.data;
      this.cadastroEletrodomesticoForm = this.formBuilder.group({
        nome: this.formBuilder.control(this.eletrodomestico.nome, [Validators.required]),
        descricao: this.formBuilder.control(this.eletrodomestico.descricao, [Validators.required]),
        quantidade: this.formBuilder.control(this.eletrodomestico.quantidade, [Validators.required]),
        potencia_uso: this.formBuilder.control(this.eletrodomestico.potencia_uso, [Validators.required]),
        potencia_standby: this.formBuilder.control(this.eletrodomestico.potencia_standby, [Validators.required]),
        dias: this.formBuilder.control(this.eletrodomestico.dias, [Validators.required]),
        horas: this.formBuilder.control(this.eletrodomestico.horas, [Validators.required])
      })     
    }
  }

  onClickAdicionar(){
    
  }
  onClickTirarFoto(){
    //this.CameraProvider.TirarFoto();
  }
}
