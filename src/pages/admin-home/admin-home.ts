import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { UsersPage } from '../users/users';
import { TeamsPage } from '../teams/teams';
import { ProjectsPage } from '../projects/projects';
/**
 * Generated class for the AdminHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-home',
  templateUrl: 'admin-home.html',
})
export class AdminHomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminHomePage');
  }

  signOut(): void {
    this.navCtrl.push(HomePage);
  }

  users(): void {
    this.navCtrl.push("UsersPage");
  }

  teams(): void {
    this.navCtrl.push("TeamsPage");
  }

  projects(): void {
    this.navCtrl.push("ProjectsPage");
  }
}
