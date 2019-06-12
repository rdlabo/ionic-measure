import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckTutorial } from './providers/check-tutorial.service';
import { TutorialPage } from './pages/tutorial/tutorial';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tutorial',
    pathMatch: 'full'
  },
  {
    path: 'account',
    loadChildren: './pages/account/account.module#AccountModule'
  },
  {
    path: 'support',
    loadChildren: './pages/support/support.module#SupportModule'
  },
  {
    path: 'login',
    loadChildren: './pages/login/login.module#LoginModule'
  },
  {
    path: 'signup',
    loadChildren: './pages/signup/signup.module#SignUpModule'
  },
  {
    path: 'app',
    loadChildren: './pages/tabs-page/tabs-page.module#TabsModule'
  },
  {
    path: 'tutorial',
    component: TutorialPage,
    canLoad: [CheckTutorial],
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    IonicModule,
  ],
  exports: [RouterModule],
  declarations: [TutorialPage],
  entryComponents: [TutorialPage],
})
export class AppRoutingModule {}
