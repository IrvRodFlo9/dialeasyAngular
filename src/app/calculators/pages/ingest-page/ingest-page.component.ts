import { Component } from '@angular/core';
import { EntryInfo } from '../../interfaces/entryInfo';

@Component({
  selector: 'app-ingest-page',
  templateUrl: './ingest-page.component.html',
  styleUrls: ['./../../styles/form.scss', './ingest-page.component.scss'],
})
export class IngestPageComponent {
  public entriesInfo: EntryInfo = {
    leftLabel: 'Entra (Infunde) mL',
    rightLabel: 'Sale (Drena) mL',
    resultLabel: 'Diferencia',
  };
}
