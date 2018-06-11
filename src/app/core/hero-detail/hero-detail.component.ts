import { Component, OnInit, Input } from '@angular/core';

import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { states, Address, Hero } from '../shared/hero-model';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {

  // name: FormControl = new FormControl();

  heroForm: FormGroup;

  hero: Hero;

  states = states;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.heroForm = this.fb.group({
      name: ['', Validators.required],
      address: this.fb.group(new Address()),
      power: '',
      sidekick: ''
    });
    // this.heroForm.setValue({
    //   name: this.hero.name,
    //   address: this.hero.addresses[0] || new Address
    // })
  }


}
