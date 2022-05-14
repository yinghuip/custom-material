import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { VirtualScrollComponent } from './virtual-scroll/virtual-scroll.component';
import {MatCardModule} from '@angular/material/card';
import { VirtualScrollSampleComponent } from './virtual-scroll-sample/virtual-scroll-sample.component';
import { VirtualScrollSample2Component } from './virtual-scroll-sample2/virtual-scroll-sample2.component';
@NgModule({
  declarations: [
    AppComponent,
    VirtualScrollComponent,
    VirtualScrollSampleComponent,
    VirtualScrollSample2Component    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ScrollingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
