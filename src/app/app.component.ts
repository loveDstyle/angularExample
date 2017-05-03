import { Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
            <h1>{{title}}</h1>
            <nav>
               <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
               <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
               <a href="http://localhost:8080/heroes" routerLinkActive="active">TEST</a>
            </nav>
            <router-outlet></router-outlet>
            `,
  styleUrls:['./app.component.css']
})
export class AppComponent{
  title = 'List of Heroes';

}
