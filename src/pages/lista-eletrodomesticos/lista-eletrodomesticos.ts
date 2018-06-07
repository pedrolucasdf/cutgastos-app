import { JsonReturn } from './../../models/jsonReturn';
import { EletrodomesticoServiceProvider } from './../../providers/eletrodomestico-service/eletrodomestico-service';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, eletrodomesticoService: EletrodomesticoServiceProvider) {
    eletrodomesticoService.getEletrodomesticos().subscribe((object : JsonReturn)=>{
      this.listaEletrodomesticos = object.data;
    });
     
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
