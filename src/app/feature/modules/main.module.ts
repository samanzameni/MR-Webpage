import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from 'src/app/feature/layouts';
import { NavbarComponent } from '../components';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {path: '', redirectTo: '/introduction', pathMatch: 'full' },
      {
        path: 'introduction',
        loadChildren: () =>
          import('src/app/feature/modules/introduction.module').then(
            (module) => module.IntroductionModule
          ),
      },
      {
        path: 'education',
        loadChildren: () =>
          import('src/app/feature/modules/about-me.module').then(
            (module) => module.AboutMeModule
          ),
      },
      {
        path: 'practical-experience',
        loadChildren: () =>
          import('src/app/feature/modules/service.module').then(
            (module) => module.ServiceModule
          ),
      },
      {
        path: 'contact-me',
        loadChildren: () =>
          import('src/app/feature/modules/reach-me.module').then(
            (module) => module.ReachMeModule
          ),
      },
      {
        path: 'classroom-projects',
        loadChildren: () =>
          import('src/app/feature/modules/classroom-project.module').then(
            (module) => module.ClassroomProjectModule
          ),
      },
      {
        path: 'conferences',
        loadChildren: () =>
          import('src/app/feature/modules/conferences.module').then(
            (module) => module.ConferencesModule
          ),
      },
      {
        path: 'language-proficiency',
        loadChildren: () =>
          import('src/app/feature/modules/language-proficiency.module').then(
            (module) => module.LanguageProficiencyModule
          ),
      },
      {
        path: 'publications',
        loadChildren: () =>
          import('src/app/feature/modules/publications.module').then(
            (module) => module.PublicationsModule
          ),
      },
      {
        path: 'references',
        loadChildren: () =>
          import('src/app/feature/modules/references.module').then(
            (module) => module.ReferencesModule
          ),
      },
      {
        path: 'related-courses',
        loadChildren: () =>
          import('src/app/feature/modules/related-courses.module').then(
            (module) => module.RelatedCoursesModule
          ),
      },
      {
        path: 'skills',
        loadChildren: () =>
          import('src/app/feature/modules/skills.module').then(
            (module) => module.SkillsModule
          ),
      },
    ],
  },
];

@NgModule({
  declarations: [
    MainLayoutComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MainModule { }
