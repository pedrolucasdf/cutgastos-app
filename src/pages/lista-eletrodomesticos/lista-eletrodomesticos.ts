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

  listaEletrodomesticos: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.listaEletrodomesticos = [
      {
        "nome":"Geladeira",
        "potencia":"45kW/h",
      },
      {
        "nome":"TV",
        "potencia":"100kW/h",
      },
      {
        "nome":"Microondas",
        "potencia":"32kW/h",
      }
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaEletrodomesticosPage');
  }

  onClickAdd(){
    this.navCtrl.push(CadastroEletrodomesticoPage, 0);
  }

  onClickEdit(eletrodomestico){
    console.log(eletrodomestico);
    this.navCtrl.push(CadastroEletrodomesticoPage, eletrodomestico);
  }

}
