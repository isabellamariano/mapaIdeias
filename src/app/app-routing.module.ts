import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardHomeComponent } from './components/card-home/card-home.component';
import { Page404Component } from './components/page404/page404.component';

const routes: Routes = [
  { path: 'CardHome', component: CardHomeComponent, title: "Home"},
  { path: '', redirectTo: 'CardHome', pathMatch: 'full', title: "Home"},
  { path: '**', component: Page404Component, title: "404"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
