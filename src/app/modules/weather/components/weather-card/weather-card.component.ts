import { Component, Input, OnInit } from '@angular/core';
import { WeatherDatas } from '../../../../models/interface/WeatherData';
import { CommonModule } from '@angular/common';
import {
  faDroplet,
  faTemperatureHalf,
  faWind,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-weather-card',
  standalone: true,
  templateUrl: './weather-card.component.html',
  imports: [CommonModule, FontAwesomeModule],
})
export class WeatherCardComponent implements OnInit {
  temperature = faTemperatureHalf;
  currentDate: Date = new Date();
  dayNumber: number = this.currentDate.getDay();
  dayOfTheMonth: number = this.currentDate.getDate();
  monthNumber: number = this.currentDate.getMonth();

  dayNames: string[] = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sabado',
  ];

  monthNames: string[] = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];
  dayName: string = this.dayNames[this.dayNumber];
  monthName: string = this.monthNames[this.monthNumber];

  dropIcon = faDroplet;
  windIcon = faWind;

  ngOnInit(): void {
    console.log('datas');
  }
  @Input()
  weatherDatasInput!: WeatherDatas;
}
