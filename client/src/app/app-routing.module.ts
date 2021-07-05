import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginGuard } from './guards/login.guard';

import { FlagsPageComponent } from './pages/flags-page/flags-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MapsPageComponent } from './pages/maps-page/maps-page.component';

const routes: Routes = [
  { path: 'flags', component: FlagsPageComponent, canActivate: [LoginGuard] },
  { path: 'login', component: LoginPageComponent },
  { path: 'maps', component: MapsPageComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
