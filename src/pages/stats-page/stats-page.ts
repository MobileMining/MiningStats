import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
// import { TestProvider } from "../../providers/test-provider";

@Component({
  selector: 'stats-page',
  templateUrl: 'stats-page.html'
})
export class StatsPage {

  data: any;
  workers: any = [
    {
      name: "b1.r01",
      current: "240H/s",
      average: "230H/S",
      valid: "31",
      invalid: "1"
    },
    {
      name: "b2.r04",
      current: "720H/s",
      average: "719H/S",
      valid: "140",
      invalid: "7"
    }, {
      name: "b3.r05",
      current: "432H/s",
      average: "427H/S",
      valid: "61",
      invalid: "3"
    }, {
      name: "b4.r06",
      current: "590H/s",
      average: "478H/S",
      valid: "58",
      invalid: "3"
    }, {
      name: "b5.r10",
      current: "240H/s",
      average: "230H/S",
      valid: "31",
      invalid: "1"
    },
    {
      name: "b6.r20",
      current: "720H/s",
      average: "719H/S",
      valid: "140",
      invalid: "7"
    }, {
      name: "b7.r03",
      current: "432H/s",
      average: "427H/S",
      valid: "61",
      invalid: "3"
    }, {
      name: "b8.r04",
      current: "590H/s",
      average: "478H/S",
      valid: "58",
      invalid: "3"
    },{
      name: "b9.r07",
      current: "240H/s",
      average: "230H/S",
      valid: "31",
      invalid: "1"
    },
    {
      name: "b10.r10",
      current: "720H/s",
      average: "719H/S",
      valid: "140",
      invalid: "7"
    }, {
      name: "b11.r30",
      current: "432H/s",
      average: "427H/S",
      valid: "61",
      invalid: "3"
    }, {
      name: "b12.r04",
      current: "590H/s",
      average: "478H/S",
      valid: "58",
      invalid: "3"
    },{
      name: "b13.r05",
      current: "240H/s",
      average: "230H/S",
      valid: "31",
      invalid: "1"
    },
    {
      name: "b22.r20",
      current: "720H/s",
      average: "719H/S",
      valid: "140",
      invalid: "7"
    }, {
      name: "b31.r30",
      current: "432H/s",
      average: "427H/S",
      valid: "61",
      invalid: "3"
    }, {
      name: "b12.r80",
      current: "590H/s",
      average: "478H/S",
      valid: "58",
      invalid: "3"
    },{
      name: "b13.r70",
      current: "240H/s",
      average: "230H/S",
      valid: "31",
      invalid: "1"
    },
    {
      name: "b24.r90",
      current: "720H/s",
      average: "719H/S",
      valid: "140",
      invalid: "7"
    }, {
      name: "b35.r00",
      current: "432H/s",
      average: "427H/S",
      valid: "61",
      invalid: "3"
    }, {
      name: "b12.r10",
      current: "590H/s",
      average: "478H/S",
      valid: "58",
      invalid: "3"
    },


  ]
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {

  }

}
