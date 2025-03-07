import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SinupComponent } from './sinup/sinup.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },  // Default route
    { path: 'signUp', component: SinupComponent },
    { path: 'home', component: HomeComponent },
    // { path: '**', redirectTo: '' },  // Wildcard route (fallback)
];
