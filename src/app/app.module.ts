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
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';

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
    RootStoreModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
