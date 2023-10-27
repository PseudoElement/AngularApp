import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class RandomBooleanResolver implements Resolve<boolean> {
    async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any> {
        const random = Math.round(Math.random() * 100);
        const res = await new Promise((res) => setTimeout(() => res(random), 1000));
        return res;
    }
}
