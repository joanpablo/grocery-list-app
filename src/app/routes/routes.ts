import { Routes } from '@angular/router';
import { AppShellComponent } from '../components/app-shell/app-shell.component';

export const routes: Routes = [
  {
    path: 'grocery-list',
    component: AppShellComponent,
    children: [
      {
        path: 'products',
        loadChildren: () =>
          import('../modules/products/products.module').then(
            (m) => m.ProductsModule
          ),
      },
    ],
  },
  { path: '', redirectTo: 'grocery-list/products', pathMatch: 'full' },
];
