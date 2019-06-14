import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckTutorial } from './providers/check-tutorial.service';
import {TabsPage} from './pages/tabs-page/tabs-page';
import {SchedulePage} from './pages/schedule/schedule';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/app/tabs/schedule',
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
    children: [
      {
        path: 'tabs',
        component: TabsPage,
        children: [
          {
            path: 'schedule',
            children: [
              {
                path: '',
                component: SchedulePage,
              },
              {
                path: 'session/:sessionId',
                loadChildren: './pages/session-detail/session-detail.module#SessionDetailModule'
              }
            ]
          },
          {
            path: 'speakers',
            children: [
              {
                path: '',
                loadChildren: './pages/speaker-list/speaker-list.module#SpeakerListModule'
              },
              {
                path: 'session/:sessionId',
                loadChildren: './pages/session-detail/session-detail.module#SessionDetailModule'
              },
              {
                path: 'speaker-details/:speakerId',
                loadChildren: './pages/speaker-detail/speaker-detail.module#SpeakerDetailModule'
              }
            ]
          },
          {
            path: 'map',
            children: [
              {
                path: '',
                loadChildren: './pages/map/map.module#MapModule'
              }
            ]
          },
          {
            path: 'about',
            children: [
              {
                path: '',
                loadChildren: './pages/about/about.module#AboutModule'
              }
            ]
          },
          {
            path: '',
            redirectTo: '/app/tabs/schedule',
            pathMatch: 'full'
          }
        ]
      }
    ],
  },
  {
    path: 'tutorial',
    loadChildren: './pages/tutorial/tutorial.module#TutorialModule',
    canLoad: [CheckTutorial]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
