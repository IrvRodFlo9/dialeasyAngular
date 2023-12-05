import { Component } from '@angular/core';
import { EntryInfo } from '../../interfaces/entryInfo';

@Component({
  selector: 'app-consumption-page',
  templateUrl: './consumption-page.component.html',
  styleUrls: ['./../../styles/form.scss', './consumption-page.component.scss'],
})
export class ConsumptionPageComponent {
  public entriesInfo: EntryInfo = {
    leftLabel: 'Cantidad',
    rightLabel: 'Alimento',
    resultLabel: 'Agua',
  };
}
