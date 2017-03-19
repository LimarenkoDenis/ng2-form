import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class ReactiveService {

  public constructor(
    private _http: Http
  ) { }

  public getMonth(): Observable<string[]> {
    return this._http.get('assets/month.json').map((res: Response) => res.json());
  }
  public getCountries(): Observable<string[]> {
    return this._http.get('assets/countries.json').map((res: Response) => res.json());
  }
}
