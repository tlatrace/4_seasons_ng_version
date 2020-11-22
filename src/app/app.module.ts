import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SeasonBlockComponent } from './season-block/season-block.component';
import { SeasonTitleComponent } from './season-block/season-title/season-title.component';
import { SeasonDateComponent } from './season-block/season-date/season-date.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { ImageZoneComponent } from './image-zone/image-zone.component';

@NgModule({
  declarations: [
    AppComponent,
    SeasonBlockComponent,
    SeasonTitleComponent,
    SeasonDateComponent,
    ToolBarComponent,
    ImageZoneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
