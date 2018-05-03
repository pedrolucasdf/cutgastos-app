import { JsonReturn } from './../../models/jsonReturn'; 
import { SignInServiceProvider } from './../../providers/sign-in-service/sign-in-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
    public singIn: SignInServiceProvider
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
    this.singIn.createAccount(this.cadastroForm.value)
    .subscribe((response: JsonReturn)=> {
      if(response.status === "SUCESSO"){
        //Cadastro realizado com sucesso
      }
      else{
        //Cadastro não pode ser realizado
      }
    })
  }

}
