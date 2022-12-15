import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RootStoreModule } from "@store/root-store.module";
import { CoreModule } from "src/app/core/core.module";
import { HomeModule } from "src/app/features/home/home.module";
import { SharedModule } from "src/app/shared/shared.module";
import { ShellModule } from "src/app/shell/shell.module";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    HomeModule,
    ShellModule,
    AppRoutingModule,
    RootStoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
