import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'Angular App';
  chart: any;
  canvas: any;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource: PeriodicElement[] = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  ];
  constructor(private elementRef: ElementRef) {
  }

  ngAfterViewInit() {
    this.canvas = document.getElementById('radarchart');
    const ctx = this.canvas.getContext('2d');
    this.chart = new Chart(ctx, {
      type: 'polarArea',
      data: {
        labels: ['Africa', 'Asia', 'Europe', 'Latin America', 'North America'],
        datasets: [
          {
            label: 'Population (millions)',
            backgroundColor: ['#3e95cd', '#8e5ea2', '#3cba9f', '#e8c3b9', '#c45850'],
            data: [2478, 5267, 734, 784, 433]
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Predicted world population (millions) in 2050'
        }
      }
  });
    //   type: 'radar',
    //   data: {
    //     labels: ['Africa', 'Asia', 'Europe', 'Latin America', 'North America'],
    //     datasets: [
    //       {
    //         label: '1950',
    //         fill: true,
    //         backgroundColor: 'rgba(179,181,198,0.2)',
    //         borderColor: 'rgba(179,181,198,1)',
    //         pointBorderColor: '#fff',
    //         pointBackgroundColor: 'rgba(179,181,198,1)',
    //         data: [8.77, 55.61, 21.69, 6.62, 6.82]
    //       }, {
    //         label: '2050',
    //         fill: true,
    //         backgroundColor: 'rgba(255,99,132,0.2)',
    //         borderColor: 'rgba(255,99,132,1)',
    //         pointBorderColor: '#fff',
    //         pointBackgroundColor: 'rgba(255,99,132,1)',
    //         // pointBorderColor: '#fff',
    //         data: [25.48, 54.16, 7.61, 8.06, 4.45]
    //       }
    //     ]
    //   },
    //   options: {
    //     title: {
    //       display: true,
    //       text: 'Distribution in % of world population'
    //     }
    //   }
    // });

  }


}
