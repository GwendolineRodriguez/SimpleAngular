import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})

export class ChartComponent implements OnInit {
  chart: any;
  canvas: any;
  constructor() { }

  ngOnInit() {
    this.canvas = document.getElementById('radarchart');
    this.chart = new Chart(this.canvas, {
      type: 'radar',
      data: {
        labels: ['Africa', 'Asia', 'Europe', 'Latin America', 'North America'],
        datasets: [
          {
            label: '1950',
            fill: true,
            backgroundColor: 'rgba(179,181,198,0.2)',
            borderColor: 'rgba(179,181,198,1)',
            pointBorderColor: '#fff',
            pointBackgroundColor: 'rgba(179,181,198,1)',
            data: [8.77, 55.61, 21.69, 6.62, 6.82]
          }, {
            label: '2050',
            fill: true,
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            pointBorderColor: '#fff',
            pointBackgroundColor: 'rgba(255,99,132,1)',
            data: [25.48, 54.16, 7.61, 8.06, 4.45]
          }
        ]
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Distribution in % of world population'
        }
      }
    });
  }

}
