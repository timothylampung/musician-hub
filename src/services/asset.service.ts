import {Injectable} from '@angular/core';
import {environment} from '../environments/environment';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import {HttpClient, HttpResponse} from '@angular/common/http';

@Injectable()
export class AssetService {

  constructor(private http: HttpClient) {
    // no op
  }

}
