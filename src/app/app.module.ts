import { TabsPage } from './../pages/tabs/tabs';
import { ListaEletrodomesticosPage } from './../pages/lista-eletrodomesticos/lista-eletrodomesticos';
import { CadastroEletrodomesticoPage } from './../pages/cadastro-eletrodomestico/cadastro-eletrodomestico';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BodyTextChatComponent } from './../components/body-text-chat/body-text-chat';
import { TextChatComponent } from './../components/text-chat/text-chat';
import { IonicStorageModule } from '@ionic/storage';
import { Camera } from '@ionic-native/camera'
import { Keyboard } from '@ionic-native/keyboard';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { CadastroPage } from './../pages/cadastro/cadastro';
import { ChatSparkPage } from './../pages/chat-spark/chat-spark';

import { BrMaskerModule } from 'brmasker-ionic-3';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { ContextChatProvider } from '../providers/context-chat/context-chat';
import { CallChatProvider } from '../providers/call-chat/call-chat';
import { AlertController } from 'ionic-angular';
import { SaveDataProvider } from '../providers/save-data/save-data';
import { Http, HttpModule } from '@angular/http';
import { CameraProvider } from '../providers/camera/camera';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    CadastroPage,
    CadastroEletrodomesticoPage,
    ListaEletrodomesticosPage,
    ChatSparkPage,
    BodyTextChatComponent,
    TextChatComponent
,
    TabsPage
  ],
  imports: [
    BrowserModule,
    BrMaskerModule,
    HttpClientModule,
    HttpModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp, {
      tabsPlacement: 'top',
      tabsHideOnSubPages: true,
      scrollAssist: false, 
      autoFocusAssist: false
      
      }),
  ],

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    CadastroPage,
    CadastroEletrodomesticoPage,
    ListaEletrodomesticosPage,
    TabsPage,
    ChatSparkPage,
    TextChatComponent, BodyTextChatComponent
  ],
  providers: [
    HttpModule,
    StatusBar,
    SplashScreen,
    HttpClient,
    AuthServiceProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ContextChatProvider,
    AlertController,
    CallChatProvider,
    SaveDataProvider,
    CameraProvider,
    BodyTextChatComponent,
    Camera,
    Keyboard
    
    

  ]
})
export class AppModule {}