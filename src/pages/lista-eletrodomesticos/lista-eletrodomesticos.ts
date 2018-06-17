import { SessionProvider } from './../../providers/session/session';
import { JsonReturn } from './../../models/jsonReturn';
import { EletrodomesticoServiceProvider } from './../../providers/eletrodomestico-service/eletrodomestico-service';
import { CadastroEletrodomesticoPage } from './../cadastro-eletrodomestico/cadastro-eletrodomestico';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
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
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController
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

  onClickDelete(eletrodomestico){
    let alert = this.alertCtrl.create({
      title: 'Deletar eletrodomestico',
      subTitle: "Tem certeza que deseja excluir esse eletrodomestico",
      buttons: [
        {
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {
          this.refresh();
        }
      },
      {
        text: 'OK',
        handler: () => {
          this.eletrodomesticoService.deleteEletrodomestico(eletrodomestico).subscribe((response:JsonReturn)=>{
            let alert2 = this.alertCtrl.create({
              title: response.message+'',
              buttons: [{
                text : 'OK',
                handler : _=> this.refresh()
              }]
            });
            alert2.present();
          });
        }
      }]});
    alert.present();
    
  }
}
