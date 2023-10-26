import { CanActivateFn } from '@angular/router';

export function randomGuard(): CanActivateFn {
    return async () => {
        console.log('Guard start...');
        const random = Math.round(Math.random() * 100);
        const res = (await new Promise((res) => setTimeout(() => res(random), 3000))) as number;
        console.log('Guard complete...', res);
        return res >= 50;
    };
}
