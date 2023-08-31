import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExoFormsComponent } from './exo-forms/exo-forms.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ExoSubscriptionFormsComponent } from './exo-subscription-forms/exo-subscription-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    ExoFormsComponent,
    ReactiveFormComponent,
    ExoSubscriptionFormsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
