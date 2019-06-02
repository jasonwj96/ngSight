import { Component, OnInit } from '@angular/core';
import { LINE_CHART_COLORS } from '../../../shared/chart.colors';

const SAMPLE_LINECHART_DATA: any[] = [
  {
    data: [25, 39, 60, 91, 56, 54, 30],
    label: 'Sentiment Analysis'
  },
  {
    data: [70, 19, 44, 53, 78, 20, 17],
    label: 'Image Recognition'
  },
  {
    data: [65, 59, 80, 81, 56, 54, 30],
    label: 'Forecasting'
  }
];

const SAMPLE_LINECHART_LABELS: string[] = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun'
];

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  constructor() {}

  lineChartData = SAMPLE_LINECHART_DATA;
  lineChartLabels = SAMPLE_LINECHART_LABELS;
  lineChartOptions: any = {
    responsive: true,
    maintainAspectRatio: false
  };
  lineChartLegend: true;

  lineChartColors = LINE_CHART_COLORS;
  lineChartType = 'line';

  ngOnInit() {}
}
