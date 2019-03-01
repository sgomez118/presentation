import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from "@angular/material/input";
import { MatTableModule } from '@angular/material/table';
import { TableBasicExampleComponent } from './table-basic-example/table-basic-example.component';
import { TableFilteringExampleComponent } from './table-filtering-example/table-filtering-example.component';
import { TableExpandableRowsExampleComponent } from './table-expandable-rows-example/table-expandable-rows-example.component';

@NgModule({
  declarations: [
    AppComponent,
    TableBasicExampleComponent,
    TableFilteringExampleComponent,
    TableExpandableRowsExampleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
