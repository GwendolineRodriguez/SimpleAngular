import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showTable: Boolean = true;
  showChart: Boolean = true;

  ngOnInit() {
  }

  toggleTable() {
    if (this.showTable) {
      this.showTable = false;
    } else {
      this.showTable = true;
    }
  }

  toggleChart() {
    if (this.showChart) {
      this.showChart = false;
    } else {
      this.showChart = true;
    }
  }


}
