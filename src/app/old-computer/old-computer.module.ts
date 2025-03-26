import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {OldComputerComponent} from "./old-computer.component";

@NgModule({
  declarations: [
    OldComputerComponent
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
  exports: [
    OldComputerComponent
  ],
  bootstrap: [OldComputerComponent]
})
export class OldComputerModule {
}
