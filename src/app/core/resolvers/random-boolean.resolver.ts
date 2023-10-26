import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class RandomBooleanResolver implements Resolve<boolean> {
    async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any> {
        console.log('route', route);
        console.log('state', state);
        const random = Math.round(Math.random() * 100);
        const res = await new Promise((res) => setTimeout(() => res(random), 3000));
        return res;
    }
}
