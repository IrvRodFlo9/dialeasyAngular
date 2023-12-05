import { Component, Input } from '@angular/core';

@Component({
  selector: 'calculators-pair-buttons',
  templateUrl: './pair-buttons.component.html',
  styleUrl: './pair-buttons.component.scss',
})
export class PairButtonsComponent {
  @Input()
  public typeAdd: string = '';
}
