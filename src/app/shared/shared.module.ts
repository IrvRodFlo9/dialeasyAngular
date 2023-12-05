import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CalculatorsModule } from '../calculators/calculators.module';
import { CalculatorsRoutingModule } from '../calculators/calculators-routing.module';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  exports: [FooterComponent, HeaderComponent],
  imports: [CommonModule, CalculatorsRoutingModule],
})
export class SharedModule {}
