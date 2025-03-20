import { Routes } from '@angular/router';
import { LoginScreenComponent } from './features/login-screen/login-screen.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';

export const routes: Routes = [
    { path: 'login', component: LoginScreenComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'dashboard', component:DashboardComponent },
    // Add more routes as needed (like dashboard)
  ];