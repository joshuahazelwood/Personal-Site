import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeComponent} from "./home.component";

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [
  ],
  exports: [],
  bootstrap: [HomeComponent]
})
export class HomeModule {
}
