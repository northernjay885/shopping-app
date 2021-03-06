import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AlertComponentComponent } from './alert-component/alert-component.component';
import { SuccessComponentComponent } from './success-component/success-component.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponentComponent,
    SuccessComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
