import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartsComponent } from './components/charts/charts.component';
import { LiveDataComponent } from './components/live-data/live-data.component';

const routes: Routes = [
  { path: '', component: LiveDataComponent },
   { path: 'charts', component: ChartsComponent },
   { path: 'live', component: LiveDataComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
