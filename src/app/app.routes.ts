import { Routes } from '@angular/router';
import { pagesRoutes } from './pages/pages.routes';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    children: pagesRoutes
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
