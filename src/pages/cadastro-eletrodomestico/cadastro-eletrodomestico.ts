import { CameraProvider } from './../../providers/camera/camera';
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

  eletrodomestico: any;
  titulo : string;
  btnTexto : string;
  cadastroEletrodomesticoForm : FormGroup;

  constructor(
    public navCtrl: NavController, public navParams: NavParams, 
    public formBuilder: FormBuilder, public CameraProvider: CameraProvider
  ) { }

  ionViewDidLoad() {
    if(this.navParams.data == 0)
    {
      this.titulo = "Cadastrar Eletrodoméstico";
      this.btnTexto = "Cadastrar";
      this.cadastroEletrodomesticoForm = this.formBuilder.group({
        nome: this.formBuilder.control("", [Validators.required]),
        descricao: this.formBuilder.control("", [Validators.required]),
        potencia: this.formBuilder.control("", [Validators.required])
      })
    }
    else{
      this.titulo = "Edição";
      this.btnTexto = "Salvar";
      this.eletrodomestico = this.navParams.data;
      this.cadastroEletrodomesticoForm = this.formBuilder.group({
        nome: this.formBuilder.control(this.eletrodomestico.nome, [Validators.required]),
        descricao: this.formBuilder.control(this.eletrodomestico.descricao, [Validators.required]),
        potencia: this.formBuilder.control(this.eletrodomestico.potencia, [Validators.required])
      })     
    }
  }

  onClickAdicionar(){
    
  }
  onClickTirarFoto(){
    this.CameraProvider.TirarFoto();

  }
}
