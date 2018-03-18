import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProjectModalPage } from './project-modal';

@NgModule({
  declarations: [
    ProjectModalPage,

  ],
  imports: [
    IonicPageModule.forChild(ProjectModalPage),
  ],
})
export class ProjectModalPageModule {}

