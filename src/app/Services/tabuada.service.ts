import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TabuadaDTO } from '../DTO/TabuadaDTO';

@Injectable({
  providedIn: 'root'
})
export class TabuadaService {

  url = "";

  constructor(
    protected http: HttpClient
  ) { 
    this.url = `${environment.ApiUrl}/tabuada`;
  }

  GerarTabuadas(numeros: number[]): Observable<TabuadaDTO[][]> {
    return this.http.post<TabuadaDTO[][]>(this.url, numeros);
  }
}
