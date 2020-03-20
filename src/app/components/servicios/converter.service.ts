import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { stringify } from 'querystring';

@Injectable()
export class ConverterService {

    constructor(private http: HttpClient){
        
    }
   
    public requestLease(){
       return  this.http.get('assets/test.txt', { responseType: 'text' })
        //   .subscribe(data => {
          
        //     console.log(data);
        //     return data;
        //   });
          
      }
    
      
      
      public  csvUpload(csvText){
        //Split all the text into seperate lines on new lines and carriage return feeds
        let allTextLines = csvText.split(/\r\n|\n/);
        //Split per line on tabs and commas
        let headers = allTextLines[0].split(/\t|,/);
        let lines = [];
        let locations = [];
    
        for (let i=0; i<allTextLines.length; i++) {
            let data = allTextLines[i].split(/\t|,/);
    
             if (data.length == headers.length) {
    
            let location = {"First":data[0], "Last":data[1], "id":data[2]};
            locations.push(location);
    
             }
    
         }
        console.log(locations);
        return locations;
    }
}