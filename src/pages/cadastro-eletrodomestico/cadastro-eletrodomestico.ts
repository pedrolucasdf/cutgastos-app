import { JsonReturn } from './../../models/jsonReturn';
import { EletrodomesticoServiceProvider } from './../../providers/eletrodomestico-service/eletrodomestico-service';
import { Eletrodomestico } from './../../models/eletrodomestico';
//import { CameraProvider } from './../../providers/camera/camera';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SessionProvider } from '../../providers/session/session';
import { Usuario } from '../../models/usuario';
/**
 * Generated class for the CadastroEletrodomesticoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-eletrodomestico',
  templateUrl: 'cadastro-eletrodomestico.html',
})
export class CadastroEletrodomesticoPage {

  eletrodomestico: Eletrodomestico;
  titulo : string;
  btnTexto : string;
  cadastroEletrodomesticoForm : FormGroup;
  usuarioLogado: Usuario;
  isEdit: Boolean;

  constructor(
    public navCtrl: NavController, public navParams: NavParams, 
    public formBuilder: FormBuilder,
    //public CameraProvider: CameraProvider,
    public eletrodomesticoService: EletrodomesticoServiceProvider,
    public session: SessionProvider
  ) {}

  ngOnInit() {
    this.session.get()
      .then(res => {
        this.usuarioLogado = Object.assign(new Usuario, res);
        console.log('usuário logado  >>> ',this.usuarioLogado);
      });
  
      console.log(this.session.exist());
  }

  ionViewWillLeave(){
    this.navParams.get("parentPage").refresh();
  }

  ionViewDidLoad() {
    if(!this.navParams.get("isEdit"))
    {
      this.titulo = "Cadastrar Eletrodoméstico";
      this.btnTexto = "Cadastrar";
      this.isEdit = false;
      this.cadastroEletrodomesticoForm = this.formBuilder.group({
        nome: this.formBuilder.control("", [Validators.required]),
        descricao: this.formBuilder.control("", [Validators.required]),
        quantidade: this.formBuilder.control("", [Validators.required]),
        potenciaUso: this.formBuilder.control("", [Validators.required]),
        potenciaStandby: this.formBuilder.control("", [Validators.required]),
        dias: this.formBuilder.control("", [Validators.required]),
        horas: this.formBuilder.control("", [Validators.required])
      })
    }
    else{
      this.titulo = "Edição";
      this.btnTexto = "Salvar";
      this.isEdit = true;
      this.eletrodomestico = this.navParams.get("eletrodomestico");
      this.cadastroEletrodomesticoForm = this.formBuilder.group({
        id : this.eletrodomestico.id,
        usuario : this.usuarioLogado,
        nome: this.formBuilder.control(this.eletrodomestico.nome, [Validators.required]),
        descricao: this.formBuilder.control(this.eletrodomestico.descricao, [Validators.required]),
        quantidade: this.formBuilder.control(this.eletrodomestico.quantidade, [Validators.required]),
        potenciaUso: this.formBuilder.control(this.eletrodomestico.potenciaUso, [Validators.required]),
        potenciaStandby: this.formBuilder.control(this.eletrodomestico.potenciaStandby, [Validators.required]),
        dias: this.formBuilder.control(this.eletrodomestico.dias, [Validators.required]),
        horas: this.formBuilder.control(this.eletrodomestico.horas, [Validators.required])
      })     
    }
  }

  onClickAdicionar(){
    let e = Object.assign(new Eletrodomestico, this.cadastroEletrodomesticoForm.value);
    //Adaptação técnica momentânea
    e.usuario = this.usuarioLogado;
    
    console.log(e);
    if(this.isEdit){
      this.eletrodomesticoService.updateEletrodomestico(e).subscribe((object: JsonReturn)=>{
        if(object.message == 'SUCESSO'){
          //Eletrodomestico cadastrado com sucesso
        }
        else{
          //Tratamento de erro
        }
      });
    }
    else{
      this.eletrodomesticoService.createEletrodomestico(e).subscribe((object: JsonReturn)=>{
        if(object.message == 'SUCESSO'){
          //Eletrodomestico cadastrado com sucesso
        }
        else{
          //Tratamento de erro
        }
      });
    }
    

  }
  onClickTirarFoto(){
    //this.CameraProvider.TirarFoto();
  }
}
