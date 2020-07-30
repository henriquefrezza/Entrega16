import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DiretivaCustomizadaDirective } from './diretiva-customizada.directive';

@NgModule({
  declarations: [
    AppComponent,
    DiretivaCustomizadaDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
