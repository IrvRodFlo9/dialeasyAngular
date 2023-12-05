import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ConsumptionPageComponent } from './pages/consumption-page/consumption-page.component';
import { IngestPageComponent } from './pages/ingest-page/ingest-page.component';
import { CalculatorsRoutingModule } from './calculators-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TitleComponent } from './components/title/title.component';
import { EntryComponent } from './components/entry/entry.component';
import { PairButtonsComponent } from './components/pair-buttons/pair-buttons.component';

@NgModule({
  declarations: [
    LayoutPageComponent,
    ConsumptionPageComponent,
    IngestPageComponent,
    TitleComponent,
    EntryComponent,
    PairButtonsComponent,
  ],
  imports: [CommonModule, CalculatorsRoutingModule, SharedModule],
})
export class CalculatorsModule {}
