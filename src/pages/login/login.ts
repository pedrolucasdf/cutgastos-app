import { Credenciais } from './../../models/login';
import { TabsPage } from './../tabs/tabs';
import { CadastroPage } from './../cadastro/cadastro';
import { JsonReturn } from './../../models/jsonReturn';
import { AuthServiceProvider } from './../../providers/auth-service/auth-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
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
    public authServiceProvider: AuthServiceProvider,
    private alertCtrl: AlertController
  ) {}

  ionViewDidLoad() {
    //On init
    this.loginForm = this.formBuilder.group({
      email: this.formBuilder.control("", [Validators.required]),
      senha: this.formBuilder.control("", [Validators.required])
    });
  }

  onClickEntrar(){
    //Chama o provider que autentica o usuário
    let c = Object.assign(new Credenciais, this.loginForm.value);
    this.alertCtrl.create({
      title: 'Aceite seu destino!!',
      subTitle: c,
      buttons: ['OKAY']
    }).present();

    

    this.authServiceProvider.autentication(this.loginForm.value).subscribe((response: JsonReturn) => {
      if(response.status === "SUCESSO"){
        //Login correto
        this.navCtrl.setRoot(TabsPage);
        this.navCtrl.push(TabsPage);
      }
      else{
        //Tratamento de erro
        let alert = this.alertCtrl.create({
          title: 'Aceite seu destino!!',
          subTitle: 'Credenciais incorretas ou não cadastradas!!!',
          buttons: ['OKAY']
        });
        alert.present();
      }
    });
  }

  onClickNovaConta(){
    //Redireciona para a tela de cadastro.
    this.navCtrl.push(CadastroPage);
  }

}
