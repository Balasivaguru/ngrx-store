import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyCounterComponent } from './my-counter/my-counter.component';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
@NgModule({
  imports:      [ BrowserModule,StoreModule.forRoot({ count: counterReducer })],
  declarations: [ AppComponent,MyCounterComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
