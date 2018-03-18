import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { AngularFireDatabase} from 'angularfire2/database';

/**
 * Generated class for the AddUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-user',
  templateUrl: 'add-user.html',
})


export class AddUserPage {
uname
last
departments
positions
myDate


@ViewChild('user') first;
@ViewChild('lname') namelast;
@ViewChild('dep') depart;
@ViewChild('pos') rank;
@ViewChild('yrs') empdate;
 
  constructor(public loadingCtrl: LoadingController, public toastCtrl: ToastController, private fire: AngularFireAuth, private base: AngularFireDatabase, public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
  	this.base.list("/Users/");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddUserPage');
  }

  cancelUser() {
   this.viewCtrl.dismiss();
 }

 dateCheck(){
    if(!this.myDate){
      let toast = this.toastCtrl.create({
      message: 'Please enter in the date employed',
      duration: 3000
    });
    toast.present();
    }
  }

  firstCheck(){
    if(!this.uname){
      let toast = this.toastCtrl.create({
      message: 'Please enter first name',
      duration: 3000
    });
    toast.present();
    }
  }

  lastCheck(){
    if(!this.last){
      let toast = this.toastCtrl.create({
      message: 'Please enter last name',
      duration: 3000
    });
    toast.present();
    }
  }

  deptCheck(){
    if(!this.departments){
      let toast = this.toastCtrl.create({
      message: 'Please select department',
      duration: 3000
    });
    toast.present();
    }
  }

  posCheck(){
    if(!this.positions){
      let toast = this.toastCtrl.create({
      message: 'Please select position',
      duration: 3000
    });
    toast.present();
    }
  }

 newEmp(){
 	let info = {
 		username: this.uname,
 		lastname: this.last,
 		grad: this.departments,
 		sex: this.positions,
 		yr: this.myDate
 	}
 	this.base.list("/Users/").push(info);
 	console.log(info);
 }

   presentToast(){
    let toast = this.toastCtrl.create({
      message: 'Registration successful',
      duration: 3000
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
    }, 1000);

    setTimeout(() => {
      loading.dismiss();
    }, 1000);
  }

   errorToast(){
    let toast = this.toastCtrl.create({
      message: ' Please try again',
      duration: 3000
    });
    toast.present();
  }

    errorLoadingText(){
    let loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: 'Loading...'
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, 100);
  }


 saveUser(): void{
 	if(!this.posCheck() && !this.deptCheck() && !this.lastCheck() && !this.dateCheck() && !this.firstCheck()){
 		this.presentLoadingText();
 		this.presentToast();
 		this.newEmp();
 	}
 	else{
 		this.errorToast();
 		this.errorLoadingText();

 	}

 }

}
