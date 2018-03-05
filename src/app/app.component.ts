import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { UsersPage } from '../pages/users/users';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { ProjectPage } from '../pages/project/project';
import { TeamPage } from '../pages/team/team';

@Component({
  templateUrl: 'app.html'
})
export class MyApp { 
  rootPage:any = HomePage; /**change**/
  @ViewChild(Nav) nav:Nav;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openUsersPage(page){
    this.nav.setRoot(UsersPage); 
  }

  openDashboardPage(page){
    this.nav.setRoot(DashboardPage);
  }

  openProjectPage(page){
    this.nav.setRoot(ProjectPage);
  }
  openTeamPage(page){
    this.nav.setRoot(TeamPage);
  }
  openHomePage(page){
    this.nav.setRoot(HomePage);
  }
}

