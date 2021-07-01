import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FlagsComponent } from './components/flags/flags.component';
import { SearchComponent } from './components/search/search.component';
import { FlagComponent } from './components/flag/flag.component';

@NgModule({
  declarations: [AppComponent, FlagsComponent, SearchComponent, FlagComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
