import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Importing custom library
import { AmNgCopyModule } from 'am-ng-copy';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AmNgCopyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
