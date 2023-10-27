import { CanActivateFn } from '@angular/router';

export function randomGuard(): CanActivateFn {
    return async () => {
        const random = Math.round(Math.random() * 100);
        const res = (await new Promise((res) => setTimeout(() => res(random), 3000))) as number;
        return res >= 50;
    };
}
