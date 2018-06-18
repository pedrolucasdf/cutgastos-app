import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, DateTime } from 'ionic-angular';
import { Chart } from 'chart.js';
import { EletrodomesticoServiceProvider } from './../../providers/eletrodomestico-service/eletrodomestico-service';
import { Usuario } from '../../models/usuario';
import { JsonReturn } from './../../models/jsonReturn';
import { SessionProvider } from './../../providers/session/session';




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
  @ViewChild('barContas') barContas;

  barChart: any;
  lineChart: any;
  pieChart: any;
  barContasChart: any;
  maioresConsumidores: any;
  consumoAnual: any;
  consumoMensal:any;
  usuarioLogado : Usuario;
  myDate: String;
  myYear: String;


  //qty: any;

  constructor(
      public navCtrl: NavController,
      public eletrodomesticoService: EletrodomesticoServiceProvider,
      public loadingCtrl: LoadingController,
      public session: SessionProvider,

    ) {
        this.myDate = "2018-06";
        this.myYear = "2018";
  }

  refresh(){
    console.log("MYDATE >> " + this.myDate.substr(5, 6), + " << e " + " MYYEAR " + this.myYear);

        
       this.eletrodomesticoService.getMaioresConsumidores(this.usuarioLogado).subscribe((object : JsonReturn)=>{
        this.pieChart = new Chart(this.pieCanvas.nativeElement, {

            type: 'pie',
            data: {
                labels: object.data.labels,
                datasets: [{
                 // labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                    data: object.data.gastos, // DADOS = DOUBLE KWH
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
      });

      this.eletrodomesticoService.consumoMensal(this.usuarioLogado, this.myDate.substr(5, 6), this.myDate.substr(0, 3)).subscribe((object : JsonReturn)=>{
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
                        data: object.data, //DADOS = KWH DIARIOS
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
      });

      this.eletrodomesticoService.consumoAnual(this.usuarioLogado, this.myYear).subscribe((object : JsonReturn)=>{
        this.barChart = new Chart(this.barCanvas.nativeElement, {

            type: 'bar',
            data: {
                labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
                "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
                datasets: [{
                    label: 'kW',
                    data: object.data, // DADOS RECEBIDOS DO SERVIDOR DOUBLE KW/H MENSAIS
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
      });
  }
  ionViewDidEnter(){
    this.refresh();
}
  ionViewDidLoad() {

    this.session.get()
      .then(res => {
        this.usuarioLogado = Object.assign(new Usuario, res);
        this.refresh();
    });
      

  this.barContasChart = new Chart(this.barContas.nativeElement, {

        type: 'bar',
        data: {
            labels: ["Verde", "Amarelo", "Vermelho"],
            datasets: [{
                label: 'Preço',
                data: [12, 19, 25], // DADOS RECEBIDOS DO SERVIDOR DOUBLE KW/H MENSAIS
                backgroundColor: [
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                 
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
      

      

      
  }
}