/* "Barrel" of Http Interceptors */
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthorizationInterceptor } from './authorization.interceptor';
import { BaseURLInterceptor } from './base-url.interceptor';

export const httpInterceptors = [
  { provide: HTTP_INTERCEPTORS, useClass: BaseURLInterceptor, multi: true },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthorizationInterceptor,
    multi: true,
  },
];
