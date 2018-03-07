import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AdminHomePage } from '../admin-home/admin-home';
import { UsersPage } from '../users/users';
import { TeamsPage } from '../teams/teams';

/**
 * Generated class for the ProjectsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-projects',
  templateUrl: 'projects.html',
})
export class ProjectsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectsPage');
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

  teams(): void {
    this.navCtrl.push("TeamsPage");
  }
}
