import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

import { Chart } from 'chart.js';
import 'rxjs/add/operator/map';
// import { TestProvider } from "../../providers/test-provider";

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  data: any;
  lineChart: any;
  zcashPrice: any = [40, 50, 55, 39, 69, 71, 98, 103, 106, 120, 80, 99];
  payouts: any = [
    {
      date: "7.05.2017",
      duration: "11.3",
      amount: "0.01241",
      usd: "5.13"
    },
    {
      date: "7.05.2017",
      duration: "9.7",
      amount: "0.02141",
      usd: "5.13"
    }, {
      date: "8.05.2017",
      duration: "12.6",
      amount: "0.02312",
      usd: "5.13"
    }, {
      date: "9.05.2017",
      duration: "11.5",
      amount: "0.01241",
      usd: "5.13"
    }, {
      date: "9.05.2017",
      duration: "9.8",
      amount: "0.02214",
      usd: "5.13"
    }, {
      date: "10.05.2017",
      duration: "15.2",
      amount: "0.02123",
      usd: "5.13"
    }, {
      date: "10.05.2017",
      duration: "13.0",
      amount: "0.02013",
      usd: "5.13"
    }, {
      date: "11.05.2017",
      duration: "10.3",
      amount: "0.02029",
      usd: "5.13"
    }, {
      date: "11.05.2017",
      duration: "11.8",
      amount: "0.02039",
      usd: "5.13"
    }, {
      date: "12.05.2017",
      duration: "12.6",
      amount: "0.02035",
      usd: "5.13"
    },
  ]
  @ViewChild('lineCanvas') lineCanvas;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {

    console.log("loaded?");
  }
  ionViewDidLoad() {
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {

      type: 'line',
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Dec"],
        datasets: [
          {
            label: "Zcash price for the last year",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: this.zcashPrice,
            spanGaps: false,
          }
        ]
      }

    });

  }
}

