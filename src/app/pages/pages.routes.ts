import { Routes } from "@angular/router";
import { LayoutComponent } from "../layout/layout.component";

const pagesRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
      }
    ]
  },
];

export default pagesRoutes;