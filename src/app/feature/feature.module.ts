import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  AboutMeComponent,
  IntroductionComponent,
  ReachMeComponent,
  RelatedCoursesComponent,
  ServiceComponent
} from './pages';
import { SkillsComponent } from './pages';
import { ClassroomProjectsComponent } from './pages';
import { PublicationsComponent } from './pages';
import { ConferencesComponent } from './pages';
import { LanguageProficiencyComponent } from './pages';
import { ReferencesComponent } from './pages';






@NgModule({
  declarations: [
    IntroductionComponent,
    AboutMeComponent,
    ReachMeComponent,
    ServiceComponent,
    RelatedCoursesComponent,
    SkillsComponent,
    ClassroomProjectsComponent,
    PublicationsComponent,
    ConferencesComponent,
    LanguageProficiencyComponent,
    ReferencesComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class FeatureModule { }
