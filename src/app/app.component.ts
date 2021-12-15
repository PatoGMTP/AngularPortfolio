import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routeTransitionAnimations } from './route-transition-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeTransitionAnimations]
})
export class AppComponent {
  title = 'AngularPortfolio';

  prepareRoute(outlet: RouterOutlet) {
    console.log("ANIMATE!")
    return outlet && 
      outlet.activatedRouteData && 
      outlet.activatedRouteData['animationState'];
   }
}
