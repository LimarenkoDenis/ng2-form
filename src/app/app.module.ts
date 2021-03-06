import { ReactiveService } from './reactive/reactive.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';
import { AppComponent } from './app.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { FormComponent } from './form/form.component';
import { FileUploadModule } from 'ng2-file-upload';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    ReactiveComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    FileUploadModule,
    BrowserAnimationsModule
  ],
  providers: [ReactiveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
