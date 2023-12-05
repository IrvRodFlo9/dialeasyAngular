import { Component, Input } from '@angular/core';
import { EntryInfo } from '../../interfaces/entryInfo';

@Component({
  selector: 'calculators-entry',
  templateUrl: './entry.component.html',
  styleUrl: './entry.component.scss',
})
export class EntryComponent {
  @Input()
  public entryInfo: EntryInfo = {
    leftLabel: '',
    rightLabel: '',
    resultLabel: '',
  };
}
