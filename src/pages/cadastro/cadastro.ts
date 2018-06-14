import { SingUpServiceProvider } from './../../providers/sing-up-service/sing-up-service';
import { Usuario } from './../../models/usuario';
import { JsonReturn } from './../../models/jsonReturn';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";

/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  cadastroForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public singUp: SingUpServiceProvider,
    public alertCtrl : AlertController
  ) {}

  ionViewDidLoad() {
    this.cadastroForm = this.formBuilder.group({
      cpf : this.formBuilder.control("", [Validators.required]),
      nome : this.formBuilder.control("", [Validators.required]),
      endereco : this.formBuilder.control("", [Validators.required]),
      email : this.formBuilder.control("", [Validators.required]),
      senha : this.formBuilder.control("", [Validators.required]),
      telefone : this.formBuilder.control("", [Validators.required]),
      nascimento : this.formBuilder.control("", [Validators.required]),
      sexo : this.formBuilder.control("", [Validators.required])
    }) 
  }

  onClickCadastro(){
    let usuario = Object.assign(new Usuario, this.cadastroForm.value);
    this.singUp.createAccount(usuario).subscribe((response: JsonReturn)=> {
      if(response.status === "SUCESSO"){
        //Cadastro realizado com sucesso
        let alert = this.alertCtrl.create({
          title: 'Aceite seu destino!!',
          subTitle: response.message.toString(),
          buttons: ['OKAY']
        });
        alert.present();
      }
      else{
        //Cadastro não pode ser realizado
        let alert = this.alertCtrl.create({
          title: 'Aceite seu destino!!',
          subTitle: response.message.toString(),
          buttons: ['OKAY']
        });
        alert.present();
      }
    })
    this.navCtrl.pop();
  }

}
