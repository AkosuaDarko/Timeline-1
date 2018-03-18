import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AdminHomePage } from '../admin-home/admin-home';
import {AngularFireAuth } from 'angularfire2/auth';
import { ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	@ViewChild('em') user;
	@ViewChild('pass1') upass;

  constructor(public loadingCtrl: LoadingController, public toastCtrl: ToastController,public navCtrl: NavController, private fire: AngularFireAuth) {

  }

   presentToast(){
    let toast = this.toastCtrl.create({
      message: 'Log in successful',
      // duration: 3000
    });
    toast.present();
  }

  presentLoadingText(){
    let loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: 'Loading...'
    });

    loading.present();

    setTimeout(() => {
      this.navCtrl.push('AdminHomePage');
    }, 1000);

    setTimeout(() => {
      loading.dismiss();
    }, 1000);
  }

  adminHomePage(): void {
  	this.fire.auth.signInWithEmailAndPassword(this.user.value, this.upass.value)
  	.then(data => {
  		this.presentToast();
  		this.presentLoadingText()
  	});
    
  }

}
