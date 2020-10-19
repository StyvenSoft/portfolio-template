import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  constructor( private http: HttpClient ) {
    // console.log('Service infoPage!');
    this.http.get('./assets/data/data.page.json')
      .subscribe(resp => {
        console.log(resp);
      })
   }
}
