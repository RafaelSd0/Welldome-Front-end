import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotificationPageComponent } from './pages/notification-page/notification-page.component';
import { GraphsComponent } from './pages/graphs/graphs.component';

export const routes: Routes = [
  {
    path: 'inicio',
    component: HomeComponent,
  },
  {
    path: 'notificacoes',
    component: NotificationPageComponent,
  },
  {
    path: 'graficos',
    component: GraphsComponent,
  }
];
