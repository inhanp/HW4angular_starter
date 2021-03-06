import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './_services/auth-guard.service';
import {AdminComponent} from './admin/admin.component';
import {RegisterComponent} from './register/register.component';
import {SettingsComponent} from './settings/settings.component';
import {Role} from './_models/role';

// add the route to the 'settings' component.

const routes: Routes = [{path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent}, { path: 'register', component: RegisterComponent },
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuard], data: { roles: [Role.admin]}},
  {path: 'settings', component: SettingsComponent},
  { path: '**', redirectTo: '' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
