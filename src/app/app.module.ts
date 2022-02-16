import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapOperatorComponent } from './Components/map-operator/map-operator.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { PluckOperatorComponent } from './Components/pluck-operator/pluck-operator.component';
import { FilterOperatorComponent } from './Components/filter-operator/filter-operator.component';

@NgModule({
  declarations: [
    AppComponent,
    MapOperatorComponent,
    NotFoundComponent,
    PluckOperatorComponent,
    FilterOperatorComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
