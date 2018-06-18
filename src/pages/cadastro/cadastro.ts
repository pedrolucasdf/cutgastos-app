import { SessionProvider } from './../../providers/session/session';
import { SingUpServiceProvider } from './../../providers/sing-up-service/sing-up-service';
import { Usuario } from './../../models/usuario';
import { JsonReturn } from './../../models/jsonReturn';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
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

  titulo : string;
  btnTexto : string;
  usuarioLogado : Usuario;
  cadastroForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public singUp: SingUpServiceProvider,
    public alertCtrl : AlertController,
    public loadingCtrl : LoadingController,
    public session: SessionProvider
  ) {}

  ionViewDidLoad() {
    if(!this.navParams.get("isEdit")){
      this.titulo = "Cadastrar Nova Conta";
      this.btnTexto = "Cadastrar";
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
    else{
      this.titulo = "Edição";
      this.btnTexto = "Salvar";
      this.usuarioLogado = this.navParams.get("usuarioLogado");
      this.cadastroForm = this.formBuilder.group({
        cpf : this.formBuilder.control(this.usuarioLogado.cpf, [Validators.required]),
        nome : this.formBuilder.control(this.usuarioLogado.nome, [Validators.required]),
        endereco : this.formBuilder.control("", [Validators.required]),
        email : this.formBuilder.control(this.usuarioLogado.email, [Validators.required]),
        senha : this.formBuilder.control("", [Validators.required]),
        telefone : this.formBuilder.control("", [Validators.required]),
        nascimento : this.formBuilder.control("", [Validators.required]),
        sexo : this.formBuilder.control("", [Validators.required])
      })

    }     
  }

  onClickCadastro(){

    let loading = this.loadingCtrl.create({
      content: 'Calma...'
    });
    loading.present();

    let usuario = Object.assign(new Usuario, this.cadastroForm.value);
    usuario.cpf = usuario.cpf.replace(/[-.]/g, '');

    if(this.navParams.get("isEdit")){
      this.singUp.updateAccount(usuario).subscribe((response: JsonReturn)=> {
        if(response.status == 'SUCESSO'){
          //Cadastro realizado com sucesso
          let alert = this.alertCtrl.create({
            title: 'Aceite seu destino!!',
            subTitle: 'Usuário cadastrado com sucesso',
            buttons: [
              {
              text: 'Ok',
              handler: () => {
                loading.dismiss();
              }
            }]
          });
          alert.present();
          this.navCtrl.pop();
        }
        else{
          //Cadastro não pode ser realizado
          let alert = this.alertCtrl.create({
            title: 'Aceite seu destino!!',
            subTitle: response.message+'',
            buttons: [
              {
              text: 'Ok',
              handler: () => {
                loading.dismiss();
                this.navCtrl.pop();
              }
            }]
          });
          alert.present();
        }
      });

    }
    else{
      this.singUp.createAccount(usuario).subscribe((response: JsonReturn)=> {
        console.log(response);
        if(response.status == 'SUCESSO'){
          //Cadastro realizado com sucesso
          let alert = this.alertCtrl.create({
            title: 'Aceite seu destino!!',
            subTitle: 'Usuário cadastrado com sucesso',
            buttons: [
              {
              text: 'Ok',
              handler: () => {
                loading.dismiss();
              }
            }]
          });
          alert.present();
          this.navCtrl.pop();
        }
        else{
          //Cadastro não pode ser realizado
          let alert = this.alertCtrl.create({
            title: 'Aceite seu destino!!',
            subTitle: response.message+'',
            buttons: [
              {
              text: 'Ok',
              handler: () => {
                loading.dismiss();
                this.navCtrl.pop();
              }
            }]
          });
          alert.present();
        }
      });      
    }
  }

}
