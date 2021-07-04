import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlagsPageComponent } from './pages/flags-page/flags-page.component';

const routes: Routes = [{ path: 'flags', component: FlagsPageComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
