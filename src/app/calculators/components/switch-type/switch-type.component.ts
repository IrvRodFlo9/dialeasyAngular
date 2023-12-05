import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'calculators-switch-type',
  templateUrl: './switch-type.component.html',
  styleUrl: './switch-type.component.scss',
})
export class SwitchTypeComponent {
  @Input()
  public labelLeft: string = '';

  @Input()
  public labelRight: string = '';
}
