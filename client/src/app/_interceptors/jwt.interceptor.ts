import { HttpInterceptorFn } from '@angular/common/http';
import { AccountService } from '../_services/account.service';
import { inject } from '@angular/core';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  const accountSservice = inject(AccountService);

  if (accountSservice.currentUser()) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${accountSservice.currentUser()?.token}`
      }
    })
  }
  return next(req);
};
