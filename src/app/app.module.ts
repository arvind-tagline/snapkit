import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SnapkitComponent } from './components/snapkit/snapkit.component';
import { HttpClientModule } from '@angular/common/http';
import { SafeHtmlPipe } from './service/safe-html.pipe';
import { ModifyDataComponent } from './components/modify-data/modify-data.component';


@NgModule({
  declarations: [
    AppComponent,
    SnapkitComponent,
    SafeHtmlPipe,
    ModifyDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
