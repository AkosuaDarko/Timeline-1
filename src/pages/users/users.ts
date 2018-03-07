import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AdminHomePage } from '../admin-home/admin-home';
import { TeamsPage } from '../teams/teams';
import { ProjectsPage } from '../projects/projects';
/**
 * Generated class for the UsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPage');
  }

  signOut(): void {
    this.navCtrl.push(HomePage);
  }

  adminHomePage(): void {
    this.navCtrl.push("AdminHomePage");
  }

  teams(): void {
    this.navCtrl.push("TeamsPage");
  }

  projects(): void {
    this.navCtrl.push("ProjectsPage");
  }
}
