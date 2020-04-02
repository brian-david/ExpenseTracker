import { ExpenseTypesModule } from './expense-types/expense-types.component';
import { HeaderComponent } from "./header/header.component";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table'
import {MatButtonModule} from '@angular/material/button';

import { MatToolbarModule } from '@angular/material/toolbar'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ExpenseTypesModule,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
