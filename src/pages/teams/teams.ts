import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AdminHomePage } from '../admin-home/admin-home';
import { UsersPage } from '../users/users';
import { ProjectsPage } from '../projects/projects';
/**
 * Generated class for the TeamsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html',
})
export class TeamsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamsPage');
  }

  signOut(): void {
    this.navCtrl.push(HomePage);
  }

  adminHomePage(): void {
    this.navCtrl.push("AdminHomePage");
  }

  users(): void {
    this.navCtrl.push("UsersPage");
  }

  projects(): void {
    this.navCtrl.push("ProjectsPage");
  }

}
