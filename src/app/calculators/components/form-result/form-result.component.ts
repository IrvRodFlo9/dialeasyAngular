import { Component, Input } from '@angular/core';

@Component({
  selector: 'calculators-form-result',
  templateUrl: './form-result.component.html',
  styleUrl: './form-result.component.scss',
})
export class FormResultComponent {
  @Input()
  public label: string = '';
}
