//import { Keyboard } from '@ionic-native/keyboard';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the ChatSparkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat-spark',
  templateUrl: 'chat-spark.html',
})
export class ChatSparkPage {
    
   constructor(public navCtrl: NavController, public navParams: NavParams, /*public keyboard: Keyboard*/) {

  }
  ionViewDidEnter(){
    //this.keyboard.disableScroll(true);
  }
}
