import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BodyTextChatComponent } from './../components/body-text-chat/body-text-chat';
import { TextChatComponent } from './../components/text-chat/text-chat';
import { IonicStorageModule } from '@ionic/storage';
//import { Camera } from '@ionic-native/camera'
//import { Keyboard } from '@ionic-native/keyboard';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { CadastroPage } from './../pages/cadastro/cadastro';
import { ChatSparkPage } from './../pages/chat-spark/chat-spark';
import { ConfigPage } from './../pages/config/config';
import { TabsPage } from './../pages/tabs/tabs';
import { ListaEletrodomesticosPage } from './../pages/lista-eletrodomesticos/lista-eletrodomesticos';
import { CadastroEletrodomesticoPage } from './../pages/cadastro-eletrodomestico/cadastro-eletrodomestico';
import { AboutPage } from './../pages/about/about';


import { BrMaskerModule } from 'brmasker-ionic-3';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { ContextChatProvider } from '../providers/context-chat/context-chat';
import { CallChatProvider } from '../providers/call-chat/call-chat';
import { AlertController } from 'ionic-angular';
import { SaveDataProvider } from '../providers/save-data/save-data';
import { Http, HttpModule } from '@angular/http';
//import { CameraProvider } from '../providers/camera/camera';
import { EletrodomesticoServiceProvider } from '../providers/eletrodomestico-service/eletrodomestico-service';
import { SessionProvider } from '../providers/session/session';
import { SingUpServiceProvider } from '../providers/sing-up-service/sing-up-service';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    CadastroPage,
    ConfigPage,
    CadastroEletrodomesticoPage,
    ListaEletrodomesticosPage,
    ChatSparkPage,
    AboutPage,
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
      tabsPlacement: 'bottom',
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
    ConfigPage,
    AboutPage,
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
    //CameraProvider,
    BodyTextChatComponent,
    //Camera,
    //Keyboard,
    EletrodomesticoServiceProvider,
    SessionProvider,
    SingUpServiceProvider
    
    

  ]
})
export class AppModule {}