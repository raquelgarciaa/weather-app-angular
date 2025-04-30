import { Component, Input, OnInit } from '@angular/core';
import { WeatherDatas } from '../../../../models/interface/WeatherData';
import { CommonModule } from '@angular/common';
import { faTemperatureHalf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-weather-card',
  standalone: true,
  templateUrl: './weather-card.component.html',
  imports: [CommonModule, FontAwesomeModule],
})
export class WeatherCardComponent implements OnInit {
  temperature = faTemperatureHalf;
  ngOnInit(): void {
    console.log('datas');
  }
  @Input()
  weatherDatasInput!: WeatherDatas;
}
