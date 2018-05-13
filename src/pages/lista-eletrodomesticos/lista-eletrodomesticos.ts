import { CadastroEletrodomesticoPage } from './../cadastro-eletrodomestico/cadastro-eletrodomestico';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListaEletrodomesticosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-eletrodomesticos',
  templateUrl: 'lista-eletrodomesticos.html',
})
export class ListaEletrodomesticosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaEletrodomesticosPage');
  }

  onClickAdd(){
    this.navCtrl.push(CadastroEletrodomesticoPage);
  }

}
