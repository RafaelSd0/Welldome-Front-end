import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'notificacoes',
    loadComponent: () => import('./pages/notification-page/notification-page.component').then(m => m.NotificationPageComponent)
  },
  {
    path: 'graficos',
    loadComponent: () => import('./pages/graphs/graphs.component').then(m => m.GraphsComponent)
  }
];
