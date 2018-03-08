import { DetailviewComponent } from './detailview.component';
import { CanDeactivate } from "@angular/router";

export class CanDeactivateDetail implements CanDeactivate<DetailviewComponent> {

  canDeactivate(component: DetailviewComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {


      if (!component.dirty) {
        return true;
      } else {
        return confirm('Are you sure you want to navigate away?');
      }
  }


}
