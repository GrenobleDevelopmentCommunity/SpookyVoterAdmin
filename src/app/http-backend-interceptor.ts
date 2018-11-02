import {
  HTTP_INTERCEPTORS,
  HttpHandler, HttpHeaderResponse, HttpInterceptor, HttpProgressEvent, HttpRequest, HttpResponse,
  HttpSentEvent, HttpUserEvent
} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

const REST_API_URL = 'https://jsemkcwda0.execute-api.eu-central-1.amazonaws.com';

@Injectable()
class HttpBackendInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse |
    HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
    const apiReq = req.clone({
      url: `${REST_API_URL}${req.url}`,
    });
    return next.handle(apiReq);
  }

}

export let HttpBackendInter = {
  provide: HTTP_INTERCEPTORS,
  useClass: HttpBackendInterceptor,
  multi: true
};
