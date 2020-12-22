import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'//import becouse its need for the url


@Injectable({
  providedIn: 'root'
})
export class TrainService {
url = "http://localhost:3000/Train";
  
  constructor(private http: HttpClient) { }

  getList() {
    console.log('sir is doing some modification at here');
    return this.http.get(this.url)
  }
      putList(data)
      {
        console.warn(data);
         return this.http.post(this.url,data)
      }

              deleteTrain(id)
              {
                return this.http.delete(`${this.url}/${id}`)
              }   
    
}
