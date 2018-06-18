import { SessionProvider } from './../../providers/session/session';
import { LoginPage } from './../login/login';
import { CadastroPage } from './../cadastro/cadastro';
import { AboutPage } from './../about/about';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Usuario } from '../../models/usuario';

/**
 * Generated class for the ConfigPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-config',
  templateUrl: 'config.html',
})
export class ConfigPage {

  usuarioLogado: Usuario;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public session: SessionProvider
  ) {  }

  ngOnInit() {
    this.session.get()
      .then(res => {
        this.usuarioLogado = Object.assign(new Usuario, res);
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfigPage');
  }
  
  onClickAbout(){
      this.navCtrl.push(AboutPage);  
  }

  onClickEdit(){
    this.navCtrl.push(CadastroPage, { "isEdit":true, "parentPage": this , "usuarioLogado": this.usuarioLogado});
  }

  onClickLogout(){
    this.session.remove();
    this.navCtrl.push(LoginPage);
  }
}
