import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./calculators/calculators.module').then(
        (m) => m.CalculatorsModule
      ),
  },
  {
    path: '**',
    redirectTo: 'calculators',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
