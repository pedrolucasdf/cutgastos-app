import { ListaEletrodomesticosPage } from './../lista-eletrodomesticos/lista-eletrodomesticos';
import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';

import { HomePage } from './../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ListaEletrodomesticosPage;
  //tab3Root = ContactPage;

  constructor( 
    public navCtrl: NavController
  ) {}
}
