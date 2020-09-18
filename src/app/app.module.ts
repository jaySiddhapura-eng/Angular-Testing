import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleTestComponent } from './sample-test/sample-test.component';
import { MatcherExamplesComponent } from './matcher-examples/matcher-examples.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleTestComponent,
    MatcherExamplesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
