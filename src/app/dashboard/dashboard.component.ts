import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  lineChartData: any[] = [];
  lineChartLabels: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
  pieChartData: any[] = [];
  pieChartLabels: string[] = ['Stock', 'Bond', 'Real Estate'];

  lineChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  pieChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  constructor() {}

  ngOnInit(): void {
    this.lineChartData = [
      { data: [65, 59, 80, 81, 56], label: 'Portfolio Growth' },
    ];

    this.pieChartData = [{ data: [300, 500, 100], label: 'Asset Allocation' }];
  }
}
