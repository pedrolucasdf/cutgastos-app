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
        potenciaemuso: this.formBuilder.control("", [Validators.required]),
        potenciaemstandby: this.formBuilder.control("", [Validators.required]),
        dias: this.formBuilder.control("", [Validators.required]),
        horas: this.formBuilder.control("", [Validators.required])
      })
    }
    else{
      this.titulo = "Edição";
      this.btnTexto = "Salvar";
      this.eletrodomestico = this.navParams.data;
      this.cadastroEletrodomesticoForm = this.formBuilder.group({
        nome: this.formBuilder.control("", [Validators.required]),
        descricao: this.formBuilder.control("", [Validators.required]),
        quantidade: this.formBuilder.control("", [Validators.required]),
        potenciaemuso: this.formBuilder.control("", [Validators.required]),
        potenciaemstandby: this.formBuilder.control("", [Validators.required]),
        dias: this.formBuilder.control("", [Validators.required]),
        horas: this.formBuilder.control("", [Validators.required])
      })     
    }
  }

  onClickAdicionar(){
    
  }
  onClickTirarFoto(){
    //this.CameraProvider.TirarFoto();
  }
}
