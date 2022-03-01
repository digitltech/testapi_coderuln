import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsumerComponent } from './consumer/consumer.component';
import { ShowConComponent } from './consumer/show-con/show-con.component';
import { AddEditConComponent } from './consumer/add-edit-con/add-edit-con.component';
import { SharedService } from './shared.service';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ElmetricComponent } from './elmetric/elmetric.component';
import { ListinformationComponent } from './listinformation/listinformation.component';
import { ConsInformationComponent } from './cons-information/cons-information.component';
import { DetailsComponent } from './cons-information/details/details.component';
import { EditComponent } from './cons-information/edit/edit.component';
import { CreateComponent } from './cons-information/create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsumerComponent,
    ShowConComponent,
    AddEditConComponent,
    ElmetricComponent,
    ListinformationComponent,
    ConsInformationComponent,
    DetailsComponent,
    EditComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
