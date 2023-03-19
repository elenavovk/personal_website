import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, WrapperComponent],
  imports: [CommonModule, RouterOutlet],
  exports: [WrapperComponent],
})
export class LayoutModule {}
