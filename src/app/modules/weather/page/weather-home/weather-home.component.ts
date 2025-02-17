import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Para usar diretivas como ngIf, ngFor, etc.
import { WeatherService } from '../../services/weather.service';
import { WeatherDatas } from '../../../../models/interface/WeatherData';
import { Subject, takeUntil } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-weather-home',
  standalone: true,
  templateUrl: './weather-home.component.html',
  imports: [CommonModule, FormsModule], // Importando CommonModule, se necessário
})
export class WeatherHomeComponent implements OnInit, OnDestroy {
  //assinatura que se inscreve em várias
  private readonly destroy$: Subject<void> = new Subject();
  constructor(private weatherService: WeatherService) {}
  initialCity = 'São Paulo';
  weatherDatas!: WeatherDatas;

  //OnInit
  ngOnInit(): void {
    this.getWheaterData(this.initialCity);
  }

  getWheaterData(cityName: string): void {
    this.weatherService
      .getWeatherData(cityName)
      .pipe(takeUntil(this.destroy$)) //se desisncreve automáticamente
      .subscribe({
        next: (response) => {
          response && (this.weatherDatas = response);
          console.log(this.weatherDatas.clouds);
        },
        error: (error) => console.log(error),
      });
  }

  onSubmit(): void {
    this.getWheaterData(this.initialCity);
    this.initialCity = '';
  }
  //onDestroy
  ngOnDestroy(): void {
    this.destroy$.next(), this.destroy$.complete();
  }
}
