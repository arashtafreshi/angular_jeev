import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

const access_token: string = '143682402.6bc3de3.50e48ef046bb491db87201bf8d08db5e';

@Injectable()
export class InstagramConnectorService {

  url_userInfo: string = '/v1/users/self/?access_token=' + access_token;
  httpOpt: RequestOptions;


  getUserInfo(): Promise<string> {
    let dt: string;
    this.http.get(this.url_userInfo, this.httpOpt).subscribe(response => {
      //dt = response.json()['data'][0]['id'] as string;
      console.log(response.json());
      console.log(response.status);
    });
    return Promise.resolve(dt);
  }

  constructor(private http: Http) {
    let headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'POST,GET,PUT');
    headers.append('Access-Control-Allow-Headers', 'Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With');

    let options = new RequestOptions({ headers: headers });
    this.httpOpt = options;
    
  }

}
