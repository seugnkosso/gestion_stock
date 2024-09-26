import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (request, next) => {
  const tok = localStorage.getItem('token') != undefined
  ? localStorage.getItem('token')
  : '';
  const req = request.clone({
    headers: request.headers.set('Authorization', `Bearer ${tok}`),
  });
  return next(req);
};
