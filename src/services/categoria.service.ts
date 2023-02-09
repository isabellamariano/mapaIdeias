import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICategoria } from 'src/app/components/card-home/catergoria';


@Injectable({
    providedIn: 'root'
})
export class CategoriaService {

    constructor(
        private http: HttpClient
    ) { }

    getCategorias() {
        return this.http.get<ICategoria[]>('assets/jsonStatic/categoria.json').toPromise();
    }
}