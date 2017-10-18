import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http, Response, RequestOptionsArgs, RequestOptions, Headers } from '@angular/http';

@Injectable()
export class ConnectService {
    constructor(private http:Http) { } 
    deleteData(id) {
        return this.http.get('https://realestatesvc.herokuapp.com/remove/' + id)
          .map((res: Response) => res.json());
      }
    insertData(body) {
        console.log(body);
        return this.http.post('http://localhost/perl/add.pl', body)
            .map((res: Response) => res.json());
    }
    getAllData() {
        console.log("Now I am in getAllData()");
        return this.http.get('http://localhost/perl/getData.pl')
        .map((res: Response) => res.json());            
    }  
    searchByWord(body) {
        return this.http.post('http://localhost/perl/getDataByWord.pl',body)
        .map((res: Response) => res.json());
    }
      
}