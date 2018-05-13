import { TabsPage } from './../pages/tabs/tabs';
import { ListaEletrodomesticosPage } from './../pages/lista-eletrodomesticos/lista-eletrodomesticos';
import { CadastroEletrodomesticoPage } from './../pages/cadastro-eletrodomestico/cadastro-eletrodomestico';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { CadastroPage } from './../pages/cadastro/cadastro';

import { BrMaskerModule } from 'brmasker-ionic-3';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { ContextChatProvider } from '../providers/context-chat/context-chat';
import { CallChatProvider } from '../providers/call-chat/call-chat';
import { AlertController } from 'ionic-angular';
import { SaveDataProvider } from '../providers/save-data/save-data';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    CadastroPage,
    CadastroEletrodomesticoPage,
    ListaEletrodomesticosPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    BrMaskerModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    CadastroPage,
    CadastroEletrodomesticoPage,
    ListaEletrodomesticosPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClient,
    AuthServiceProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ContextChatProvider,
    AlertController,
    CallChatProvider,
    SaveDataProvider
  ]
})
export class AppModule {}
