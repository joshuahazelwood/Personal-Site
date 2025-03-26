import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from "./app-routing.module";
import {HomeModule} from "./home/home.module";
import {NavigationBarModuleModule} from "./navigation-bar/navigation-bar.module";
import {AboutModule} from "./about/about.module";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {ProjectsModule} from "./projects/projects.module";
import {OldComputerModule} from "./old-computer/old-computer.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    HomeModule,
    NavigationBarModuleModule,
    AboutModule,
    ProjectsModule,
    OldComputerModule
  ],
  providers: [

    provideAnimationsAsync()
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
