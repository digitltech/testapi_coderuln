import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ConsumerComponent} from './consumer/consumer.component';

import { ConsInformationComponent } from './cons-information/cons-information.component';

const routes: Routes = [
{path:'consumer',component:ConsumerComponent},
{path:'consinformation',component:ConsInformationComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
