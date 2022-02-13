import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ConsumerComponent} from './consumer/consumer.component';

const routes: Routes = [
{path:'consumer',component:ConsumerComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
