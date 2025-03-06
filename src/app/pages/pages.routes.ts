import { Routes } from "@angular/router";
import { LayoutComponent } from "../layout/layout.component";
import { HomeComponent } from "./home/home.component";

export const pagesRoutes: Routes = [
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
        component: HomeComponent
      }
    ]
  },
];