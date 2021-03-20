import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDto } from 'src/app/models/dtos/carDto';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars: CarDto[] = [];
  colorId: number;
  brandId: number;
  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log(this.colorId);
    this.GetAllCarsWithDetails();
  }

  setCurrentIds(brandId: number, colorId: number) {
    this.colorId = colorId;
    this.brandId = brandId;
  }

  GetAllCarsWithDetails() {

    this.activatedRoute.params.subscribe(params => {

      console.log(params["colorId"]);
      console.log(params["brandId"]);


      this.carService.getAll(params["colorId"], params["brandId"]).subscribe(response => {
        this.cars = response.data;
      });

    });

  }

}
