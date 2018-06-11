import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './core/hero-detail/hero-detail.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HeroListComponent } from './core/hero-list/hero-list.component';

import { HeroService } from './core/shared/hero.service';

import { NzInput } from './lib/input/index';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroListComponent,
    NzInput
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
