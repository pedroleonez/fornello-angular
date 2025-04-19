import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./shared/components/header/header.component').then(m => m.default)
  }
];
