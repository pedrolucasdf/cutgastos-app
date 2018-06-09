import { LoginPage } from './../login/login';
import { CadastroPage } from './../cadastro/cadastro';
import { AboutPage } from './../about/about';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfigPage');
  }
  
  onClickAbout(){
      this.navCtrl.push(AboutPage);  
  }

  onClickEdit(){
    this.navCtrl.push(CadastroPage);  

  }

  onClickLogout(){
    this.navCtrl.push(LoginPage);  

  }
}
