import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CarDto } from '../models/dtos/carDto';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  deger = 0;
  private apiUrl = environment.apiUrl + 'Cars/';
  query: string = "GetAllCarsWithDetails?";

  constructor(private httpClient: HttpClient) { }

  getAll(colorId: number, brandId: number): Observable<ListResponseModel<CarDto>> {


    if (colorId != null) {
      this.query = this.query + "colorId=" + colorId;
      this.deger = this.deger + 1;
    }
    if (brandId != null) {
      if (this.deger == 1) {
        this.query = this.query + "&"
      }
      this.query = this.query + "brandId=" + brandId;
    }
    console.log(this.apiUrl + this.query);
    return this.httpClient.get<ListResponseModel<CarDto>>(this.apiUrl + this.query);
  }
}
