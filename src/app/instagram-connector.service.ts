import { Injectable } from '@angular/core';
//import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

const access_token: string = '143682402.6bc3de3.50e48ef046bb491db87201bf8d08db5e';

@Injectable()
export class InstagramConnectorService {

  url_userInfo: string = '/v1/users/search/?q=arash&access_token=' + access_token;
  url_userInfo_1: string = 'https://api.instagram.com/v1/users/search?q=arash&access_token=143682402.6bc3de3.50e48ef046bb491db87201bf8d08db5e';
  url_userInfo_2: string = 'http://www.google.com';
  //httpOpt: RequestOptions;
  httpHeaders: HttpHeaders;
  htest = [{ 'Access-Control-Allow-Origin': '*' }, { 'Access-Control-Allow-Methods': 'POST,GET,PUT' }, { 'Access-Control-Allow-Headers': 'Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With' }];

  getUserInfo(): Promise<string> {
    let dt: string;

    let h = new HttpHeaders();
    h = h.set('Access-Control-Allow-Origin', '*');
    h = h.set('Access-Control-Allow-Methods', 'GET');
    h = h.set('Access-Control-Allow-Headers', 'Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With, Access-Control-Allow-Origin');
    h = h.set('Arash', 'bahal');

    this.http.get(this.url_userInfo_1, { responseType:'json',headers: h }).subscribe(resp => {
      console.log(resp as string);
      console.log("req");
      console.log(resp);
    },
      err => {
        console.log('Something went wrong!');
      });
    return Promise.resolve(dt);
  }

  constructor(private http: HttpClient) {
    let headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'POST,GET,PUT');
    headers.append('Access-Control-Allow-Headers', 'Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With');

    let h = new HttpHeaders();
    h.set('Access-Control-Allow-Origin', '*');
    h.set('Access-Control-Allow-Methods', 'POST,GET,PUT');
    h.set('Access-Control-Allow-Headers', 'Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With');
    h.set('Arash', 'bahal');
    this.httpHeaders = h;
    //let options = new RequestOptions({ headers: headers });
    //this.httpOpt = options;

  }

}
