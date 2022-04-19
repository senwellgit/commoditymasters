import { Component, OnInit } from '@angular/core';
import { registerables, Chart, ChartConfiguration } from 'chart.js'
import { MasterserviceService } from 'src/app/masterservice.service';
import { map } from "rxjs/operators";
import { __values } from 'tslib';
import { element } from 'protractor';
import { report } from 'process';
Chart.register(...registerables)

@Component({
  selector: 'app-monthly-cir-report',
  templateUrl: './monthly-cir-report.component.html',
  styleUrls: ['./monthly-cir-report.component.scss']
})



export class MonthlyCirReportComponent implements OnInit {
  fromHide: boolean = false
  chartType = ['line', 'bar', 'pie', 'doughnut','polarArea','radar'];
  data1 :any = []
  data2 = [40,30,25,15,52]
  chartData1 :any = [];
  chartData2 :any = [];
  chartData3 :any = [];
  chartData4 :any = [];
  monthData :any = [];
  chart!: Chart;
  column:Array<number>=[];
  type: any = 'line';
  colorsCode:Array<string> = ['#067c19','#eb1515','#28e8e9','#3e35ee','#ec35ee'];
  private _tableData$ = this.masterService.getData().pipe(
    map((res: any) => {
      console.log("main res===>", res);
      let chart_value = [];
      let table = [];
      this.column = res.column;


      for (let index=0;index<this.column.length;index++) {
        let chartData:any = [];
        res.materialData.forEach((ele:any)=>{
          if(ele.year.year == this.column[index]){
            chartData.push(ele.value);
          }
        });
        this.chartData1.push({year:this.column[index],data:chartData,colorCode:this.colorsCode[index]});
      }
      console.log("char data",this.chartData1);
      

      /*this is the data for chartjs on the year base*/
        // chart_value.push(res.materialData.map((element: any) => {
        //   let info = element.value;
        //  this.column.forEach(ele=>{

        //   // if (element.year.year === ele) {
        //   //   this.chartData1.push({ele:info})

        //   // }
        //   // if (element.year.year === 2020) {
        //   //   this.chartData2.push(info)

        //   // }
        //   // if (element.year.year === 2021) {
        //   //   this.chartData3.push(info)
        //   // }
        //   // if (element.year.year === 2022) {
        //   //   this.chartData4.push(info)
        //   // }
        //  })

        // }));
        console.log("************",this.chartData1);
        
      /* this is for table data based on month_id*/
      for (let i = 1; i <= 12; i++) {
        table.push(res.materialData.filter((ele: any) => {
          if (ele.month_id == i) {
            return true;
          } else {
            return false;
          }
        }));
      }
      this.showChart();
      console.log(table);
      
      return table;
    })
  );
  public get tableData$() {
    return this._tableData$;
  }
  public set tableData$(value) {
    this._tableData$ = value;
  }
  constructor(private masterService :MasterserviceService) { }

  ngOnInit() {
    // this.showChart()
  }

  onSubmit() {
    this.fromHide = true
  }
  showChart() {
    if (this.chart) {
      this.chart.destroy()
    }

    let dataset = this.chartData1.map((res:any)=>{
      return {
        label:res.year,
        borderColor : res.colorCode,
        backgroundColor: [
          '#ed05f4',
          '#d92b0d',
          '#1cd90d',
        ],
        data:res.data
      }
    });

    this.chart = new Chart('canvas', {
      type: this.type,
      data: {
        labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'],
        datasets:dataset
        
      },
      options : {
        scales :{

          x :{
            grid :{
              display : false
            }
          },
          y :{
            grid :{
              display : false
            }
          }
        }
      }

    });
  }
  onChange(selected_chart: any) {
    // this.type = selected_chart?.masterService?.value;
    this.type = selected_chart.target.value
    this.showChart();
  }

}
