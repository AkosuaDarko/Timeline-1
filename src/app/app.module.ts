import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
<<<<<<< HEAD
import { ProjectModalPage } from '../pages/project-modal/project-modal';
import { EditModalPage } from '../pages/edit-modal/edit-modal';
import { DeletePage } from '../pages/delete/delete';

=======
import { AddUserPage } from '../pages/add-user/add-user';
// import { FIREBASE_CREDENTIALS } from './firebase.credentials';
import { AngularFireAuthModule } from 'angularfire2/auth'
import { AngularFireDatabaseModule } from 'angularfire2/database';

//import { AngularFireAuthModule } from 'angularfire2/auth'
//import { AngularFireDatabaseModule } from 'angularfire2/database';


const firebaseAuth = {
    apiKey: "AIzaSyBqcpOPeRJAbbbACiStw2sjdMJWaSIbjxw",
    authDomain: "timeline-6e270.firebaseapp.com",
    databaseURL: "https://timeline-6e270.firebaseio.com",
    projectId: "timeline-6e270",
    storageBucket: "timeline-6e270.appspot.com",
    messagingSenderId: "268210978652"
  };
>>>>>>> 12548cfd0fcce68c0959b71574288cd6199abea1

@NgModule({
  declarations: [
    MyApp,
    HomePage,
<<<<<<< HEAD
    ProjectModalPage,
    DeletePage,
    EditModalPage
=======
    AddUserPage
>>>>>>> 12548cfd0fcce68c0959b71574288cd6199abea1
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule,
    AngularFireDatabaseModule
 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
<<<<<<< HEAD
    ProjectModalPage,
    DeletePage,
    EditModalPage

=======
    AddUserPage
>>>>>>> 12548cfd0fcce68c0959b71574288cd6199abea1
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
