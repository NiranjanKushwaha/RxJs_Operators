import { FilterOperatorComponent } from './Components/filter-operator/filter-operator.component';
import { PluckOperatorComponent } from './Components/pluck-operator/pluck-operator.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { MapOperatorComponent } from './Components/map-operator/map-operator.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'mapOperator', pathMatch: 'full' },
  {
    path: 'mapOperator',
    component: MapOperatorComponent,
  },
  {
    path: 'pluckOperator',
    component: PluckOperatorComponent,
  },
  {
    path: 'filterOperator',
    component: FilterOperatorComponent,
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
