import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableWorkersComponent } from './ui/table-workers/table-workers.component';
import { AddformWorkerComponent } from './ui/addform-worker/addform-worker.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TextMaskModule } from 'angular2-text-mask';
import { MyPipePipe } from './shared/pipes/my-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TableWorkersComponent,
    AddformWorkerComponent,
    MyPipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
