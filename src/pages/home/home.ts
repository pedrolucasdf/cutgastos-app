import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';


/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  @ViewChild('barCanvas') barCanvas;
  @ViewChild('lineCanvas') lineCanvas;
  @ViewChild('pieCanvas') pieCanvas;

  barChart: any;
  lineChart: any;
  pieChart: any;

  //qty: any;

  constructor(public navCtrl: NavController) {

  }
  
  ionViewDidLoad() {

      this.barChart = new Chart(this.barCanvas.nativeElement, {

          type: 'bar',
          data: {
              labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
              "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
              datasets: [{
                  label: 'kW',
                  data: [12, 19, 3, 5, 2, 3, 12, 19, 13, 15, 12, 3], // DADOS RECEBIDOS DO SERVIDOR DOUBLE KW/H MENSAIS
                  backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 206, 86, 0.2)',
                      'rgba(75, 192, 192, 0.2)',
                      'rgba(153, 102, 255, 0.2)',
                      'rgba(255, 159, 64, 0.2)',
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 206, 86, 0.2)',
                      'rgba(75, 192, 192, 0.2)',
                      'rgba(153, 102, 255, 0.2)',
                      'rgba(255, 159, 64, 0.2)'
                  ],
                  borderColor: [
                      'rgba(255,99,132,1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(153, 102, 255, 1)',
                      'rgba(255, 159, 64, 1)',
                      'rgba(255,99,132,1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(153, 102, 255, 1)',
                      'rgba(255, 159, 64, 1)'
                  ],
                  borderWidth: 1
              }]
          },
          options: {
              scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero:true
                      }
                  }]
              }
          }

      });

      this.pieChart = new Chart(this.pieCanvas.nativeElement, {

        type: 'pie',
        data: {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"], //DADOS = NOME DOS ELETRO, STRING
            datasets: [{
             // labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                data: [1, 2, 3, 4, 5, 6], // DADOS = DOUBLE KWH
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56",
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ]
            }]
        }

    });

      

      this.lineChart = new Chart(this.lineCanvas.nativeElement, {

          type: 'line',
          data: {
              labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
                16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
              datasets: [
                  {
                      label: "Consumo diário",
                      fontSize: 6,
                      fill: false,
                      lineTension: 0,
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
                      data: [65, 59, 80, 81, 56, 55, 65, 59, 80, 81, 56, 55, 65, 59, 80, 81, 56, 55, 
                        65, 59, 80, 81, 56, 55, 65, 59, 80, 81, 56, 55, 54, 54], //DADOS = KWH DIARIOS
                      spanGaps: false,
                  }
                  
              ]
          },
          options: {
            labels:{
                fontSize:6
            }
        }
    

      });
    
  }
}