import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutes } from './app.router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatToolbarModule, MatMenuModule, MatButtonModule } from '@angular/material';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './table/table.component';
import { ChartComponent } from './chart/chart.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TableComponent,
    ChartComponent,
  ],
  imports: [
    AppRoutes,
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
