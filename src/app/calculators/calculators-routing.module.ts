import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsumptionPageComponent } from './pages/consumption-page/consumption-page.component';
import { IngestPageComponent } from './pages/ingest-page/ingest-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {
        path: 'consumption',
        component: ConsumptionPageComponent,
      },
      {
        path: 'ingest',
        component: IngestPageComponent,
      },
      {
        path: '**',
        redirectTo: 'consumption',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalculatorsRoutingModule {}
