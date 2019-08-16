import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, of } from 'rxjs';
import { map, tap, concatMap } from 'rxjs/operators';
import { Publisher } from './publisher';

@Injectable({
  providedIn: 'root'
})
export class PublisherService {
  publishersUrl = 'api/publishers';

  publishersWithMap$ = of(1,5,8)
  .pipe(
    map(id => this.http.get<Publisher>(`${this.publishersUrl}/${id}`))
  );

  publishersWithConcatMap$ = of(1,5,8)
  .pipe(
    tap(id => console.log('concatMap Source Observable', id)),
    concatMap(id => this.http.get<Publisher>(`${this.publishersUrl}/${id}`))
  );

  constructor(private http: HttpClient) { 
    // this.publishersWithMap$.subscribe(o => o.subscribe(
    //   item => console.log('map result', item)
    // ));
    this.publishersWithConcatMap$.subscribe(
      item => console.log('concatMap result', item)
    );
  }

  private handleError(err: any){
    let errorMessage: string;
    if(err.error instanceof ErrorEvent){
      errorMessage = `An error occurred: ${err.error.message}`;
    }else{
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
