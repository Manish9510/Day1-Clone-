import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  if (localStorage.getItem('user')) {
    return true;
  } else {
    return router.createUrlTree(['/login']);
  }
};