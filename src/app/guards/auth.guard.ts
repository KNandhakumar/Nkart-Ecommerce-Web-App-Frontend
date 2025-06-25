import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { getAuth } from 'firebase/auth';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const auth = getAuth();
  const user = auth.currentUser;

  if(user){
    return true; // allow access
  }
  else {
    alert('Please login first!');
    router.navigate(['/login']);
    return false; // block access
  }
};
