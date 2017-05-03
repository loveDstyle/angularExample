import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { RouterModule }  from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './herodetail.component';
import { HeroesComponent }  from './heroes.component';
import { DashboardComponent } from './dashboard.component';

import { HeroService }  from './hero.service';

@NgModule({
  imports:      [
            BrowserModule,
            FormsModule,
            HttpModule,
            AppRoutingModule
            ],
  declarations: [
            AppComponent,
            HeroDetailComponent,
            HeroesComponent,
            DashboardComponent
          ],
  providers: [HeroService],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
