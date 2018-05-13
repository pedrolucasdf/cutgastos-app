import { JsonReturn } from './../../models/jsonReturn';
import { AuthServiceProvider } from './../../providers/auth-service/auth-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loginForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams, 
    public formBuilder: FormBuilder,
    public authServiceProvider: AuthServiceProvider
  ) {}

  ionViewDidLoad() {
    //On init
    this.loginForm = this.formBuilder.group({
      email: this.formBuilder.control("", [Validators.required]),
      senha: this.formBuilder.control("", [Validators.required])
    });
  }

  onClickEntrar(){
    /*//Chama o provider que autentica o usuário
    this.authServiceProvider.autentication(this.loginForm.value)
    .subscribe((response: JsonReturn) => {
      if(response.status === "SUCESSO"){
        //Login correto
      }
      else{
        //Tratamento de erro
      }
    });*/
  }

  onClickNovaConta(){
    //Redireciona para a tela de cadastro.
  }

}
