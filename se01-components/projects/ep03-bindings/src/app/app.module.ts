import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropBindingChildComponent } from './prop-binding-child';
import { PropertiesComponent } from './properties/properties.component';
import { BackgroudColourDirective } from './backgroud-colour.directive';
import { AttributesComponent } from './attributes/attributes.component';
import { EventsComponent } from './events/events.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    PropertiesComponent,
    PropBindingChildComponent,
    BackgroudColourDirective,
    AttributesComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [BackgroudColourDirective]
})
export class AppModule { }
