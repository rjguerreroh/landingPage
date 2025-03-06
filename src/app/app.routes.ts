import { Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../app/pages/pages.routes'),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
