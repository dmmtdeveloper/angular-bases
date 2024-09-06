import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public name: string = 'Ironman';
  public age: number = 45;

  get capitalizename(): string {
    return this.name.toUpperCase();
  }

  getheroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeAge(): void {
    this.age = 25;
  }

  changeHero(): void {
    this.name = 'Spiderman';
  }

  resetForm(): void {
    this.name = 'ironman';
    this.age = 35;
  }
}
