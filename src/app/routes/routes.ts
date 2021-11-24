import { Routes } from '@angular/router';
import { AppShellComponent } from '../components/app-shell/app-shell.component';

export const routes: Routes = [
  { path: 'grocery-list', component: AppShellComponent },
  { path: '', redirectTo: 'grocery-list', pathMatch: 'full' },
];
