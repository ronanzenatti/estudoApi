import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  private url = "http://apiadvisor.climatempo.com.br/api/v1/weather/locale";
  private apiKey = "6c047305b538c5c104b6fa170c4fe3ba";
  public cityID:number = 4386;

  constructor(private http: HttpClientModule) { }
}
