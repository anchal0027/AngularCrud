   // import {Http, RequestOptionsArgs, RequestOptions, Response, Request, ConnectionBackend} from "@angular/http";
   //  import {Observable} from "rxjs/Observable";
   //  import "rxjs/add/operator/catch"; 
   //  import "rxjs/add/observable/throw";
   //  import "rxjs/add/observable/empty";
   //  import {Router} from "@angular/router";

   //  export class HttpInterceptor extends Http {
   //      constructor(backend: ConnectionBackend, defaultOptions: RequestOptions,    private _router: Router) {
   //          super(backend, defaultOptions);
   //      }

   //      request(url: string | Request, options?: RequestOptionsArgs):      Observable<Response> {
   //          return this.intercept(super.request(url, options));
   //      }

   //      get(url: string, options?: RequestOptionsArgs): Observable<Response> {
   //          return this.intercept(super.get(url,options));
   //      }

   //      post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
   //          return this.intercept(super.post(url, body, options));
   //      }

   //      put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
   //          return this.intercept(super.put(url, body, options));
   //      }

   //      delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
   //          return this.intercept(super.delete(url, options));
   //      }

   //      intercept(observable: Observable<Response>): Observable<Response> {
   //          return observable.catch((err, source) => {
   //          });
   //      }
   //  }