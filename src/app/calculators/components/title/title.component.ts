import { Component, Input } from '@angular/core';

@Component({
  selector: 'calculators-title',
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss',
})
export class TitleComponent {
  @Input()
  public title: string = '';

  @Input()
  public subtitle: string = '';
}
