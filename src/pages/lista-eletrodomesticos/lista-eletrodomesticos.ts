import { SessionProvider } from './../../providers/session/session';
import { JsonReturn } from './../../models/jsonReturn';
import { EletrodomesticoServiceProvider } from './../../providers/eletrodomestico-service/eletrodomestico-service';
import { CadastroEletrodomesticoPage } from './../cadastro-eletrodomestico/cadastro-eletrodomestico';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Usuario } from '../../models/usuario';

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
  usuarioLogado : Usuario;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public eletrodomesticoService: EletrodomesticoServiceProvider,
    public session: SessionProvider,
    public loadingCtrl: LoadingController
  ) { }

  refresh(){
    let loading = this.loadingCtrl.create({
      content: 'Calma...'
    });
    loading.present();

    this.eletrodomesticoService.getEletrodomesticoByUsuario(this.usuarioLogado).subscribe((object : JsonReturn)=>{
      this.listaEletrodomesticos = object.data;
      loading.dismiss();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaEletrodomesticosPage');
    this.session.get()
      .then(res => {
        this.usuarioLogado = Object.assign(new Usuario, res);
        this.refresh();
    });    
  }

  onClickAdd(){
    this.navCtrl.push(CadastroEletrodomesticoPage, { "isEdit":false, "parentPage": this });
  }

  onClickEdit(eletrodomestico){
    this.navCtrl.push(CadastroEletrodomesticoPage, { "isEdit":true, "parentPage": this , "eletrodomestico": eletrodomestico});
  }

}
