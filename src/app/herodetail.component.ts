import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { HeroService } from './hero.service';
import { Hero } from './hero';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'hero-detail',
  template:`
      <div *ngIf="hero">
          <h2>{{hero.name}} details!</h2>
          <div><label>id: </label>{{hero.id}}</div>
        <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
        </div>
        <button (click)="goBack()">Back</button>
      </div>
            `,
  styleUrls: ['./herodetail.css']
})
export class HeroDetailComponent implements OnInit {
  constructor(
  private heroService: HeroService,
  private route: ActivatedRoute,
  private location: Location
) {}
goBack(): void {
  this.location.back();
}
  ngOnInit():void{
    this.route.params.switchMap((params: Params) => this.heroService.getHero(+params['id']))
        .subscribe(hero => this.hero = hero);
  }
    @Input() hero:Hero;
}
