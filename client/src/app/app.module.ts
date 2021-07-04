import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FlagsComponent } from './components/flags/flags.component';
import { SearchComponent } from './components/search/search.component';
import { FlagComponent } from './components/flag/flag.component';
import { ResetButtonComponent } from './components/reset-button/reset-button.component';
import { AppRoutingModule } from './app-routing.module';
import { FlagsPageComponent } from './pages/flags-page/flags-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';

@NgModule({
  declarations: [AppComponent, FlagsComponent, SearchComponent, FlagComponent, ResetButtonComponent, FlagsPageComponent, LoginPageComponent, LoginFormComponent, LogoutButtonComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
