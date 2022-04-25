import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CiComponent } from './ci/ci.component';
import { CoComponent } from './co/co.component';

const routes: Routes = [
  {
    path: 'co', component: CoComponent
  },
  {
    path: 'co/:ci.name', component:CiComponent
  },
  {
    path: '', redirectTo: 'co', pathMatch: 'full'
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
