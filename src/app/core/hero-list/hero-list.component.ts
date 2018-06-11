import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'

import { Hero } from '../shared/hero-model';
import { HeroService } from '../shared/hero.service';


@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
  }

  getHeros() {
    this.heroes = this.heroService.getHeroes();
  }

}
