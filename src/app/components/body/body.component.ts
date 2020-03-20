import {Component,OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ConverterService } from '../servicios/converter.service';

@Component({
selector: 'app-body',
templateUrl: './body.component.html'  
})
export class BodyComponent implements OnInit{
   data:any[] = [];
    mostrar = true;
   frase: any = {
    mensaje: 'mensaje',
    autor: 'Parker'
};

   personajes: string[] = ['Spiderman' , 'Venom', 'Octopus'];
   constructor(
     private _converterService: ConverterService
)  { 
    }

ngOnInit(){
this._converterService.requestLease().subscribe(
    response => {
            console.log(response);
            this.data = this._converterService.csvUpload(response);
            console.log(this.data);

        //     return data;
    }
);

}

  



}


