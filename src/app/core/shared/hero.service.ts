import { Hero, heroes } from '../shared/hero-model'; 

export class HeroService {
  getHeroes(): Hero[] {
    return heroes;
  }
}