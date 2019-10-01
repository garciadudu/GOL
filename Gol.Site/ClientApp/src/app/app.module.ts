import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { AirplaneComponent } from './airplane/airplane.component';
import { AirplaneEditComponent } from './airplane-edit/airplane-edit.component';
import { AirplaneDeleteComponent } from './airplane-delete/airplane-delete.component';
import { AirplaneInsertComponent } from './airplane-insert/airplane-insert.component';

import { NgForm } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    AirplaneComponent,
    AirplaneEditComponent,
    AirplaneDeleteComponent,
    AirplaneInsertComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
      FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'airplane', component: AirplaneComponent },
      { path: 'airplane-edit', component: AirplaneEditComponent },
        { path: 'airplane-insert', component: AirplaneInsertComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
