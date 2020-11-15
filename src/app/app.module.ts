import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SeasonBlockComponent } from './season-block/season-block.component';
import { SeasonTitleComponent } from './season-block/season-title/season-title.component';
import { SeasonDateComponent } from './season-block/season-date/season-date.component';

@NgModule({
  declarations: [
    AppComponent,
    SeasonBlockComponent,
    SeasonTitleComponent,
    SeasonDateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
