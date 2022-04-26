import { Component, OnInit } from "@angular/core";
import { registerables, Chart, ChartConfiguration } from "chart.js";
import { MasterserviceService } from "src/app/masterservice.service";
import { map } from "rxjs/operators";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AbsoluteSourceSpan } from "@angular/compiler";
import { $$ } from "protractor";

Chart.register(...registerables);

@Component({
  selector: "app-monthly-cir-report",
  templateUrl: "./monthly-cir-report.component.html",
  styleUrls: ["./monthly-cir-report.component.scss"],
})
export class MonthlyCirReportComponent implements OnInit {
  show: boolean = false;
  hide: boolean = true;
  commodityType: any;
  commodityHead: any;
  fromHide: boolean = false;
  chartType = ["line", "bar", "pie", "doughnut", "polarArea", "radar"];
  data1: any = [];
  data2 = [40, 30, 25, 15, 52];
  yearsData: any = [];
  chartData1: any = [];
  chartData2: any = [];
  chartData3: any = [];
  chartData4: any = [];
  monthData: any = [];
  chart!: Chart;
  column: Array<number> = [];
  type: any = "line";
  type2: any;
  colorsCode:Array<string> = ['#067c19','#eb1515','#00ffff','#ec35ee','#990000','#00cc00'];

  headId: any;
  typeId: any;
  commodity_type: any;
  method: any;
  commodityHead_commodityType: any;
  currency : string = '';

  _tableData$ = this.masterService.getData(2, 13).pipe(
    map((res: any) => {
      let table: any[] = [];
      this.column = res.column;
      console.log("materialdata",table);
      
      this.commodity_type = res.materialData[0].commodity_type.type;

      // all sorted years
      this.yearsData = this.column.sort();

      let years = [];

      for (let index = 0; index < this.yearsData.length; index++) {
        const element = this.yearsData[index];
        let yearData = res.materialData.filter((ele: any) => {
          if (ele.year.year == element) {
            return true;
          } else {
            return false;
          }
        });

        let sorted: Array<any> = yearData.sort(
          (a: any, b: any) => a.month.id - b.month.id
        );
        console.log("Year Data", sorted);
        this.currency =sorted[0].UOM;

        let i = 0;
        let array = [];
        for (let index = 0; index < this.months.length; index++) {
          const element = this.months[index];
          let flag = false;
          for (let j = 0; j < sorted.length; j++) {
            if (element == sorted[j]?.month?.month) {
              flag = true;
              break;
            } else {
              flag = false;
            }
          }

          if (flag) {
            array.push(sorted[index - i]);
          } else {
            i++;
            array.push(null);
          }
        }

        table.push(array);
      }

      for (let index = 0; index < this.column.length; index++) {
        let chartData: any = [];
        res.materialData.forEach((ele: any) => {
          if (ele.year.year == this.column[index]) {
            chartData.push(ele.value);
          }
        });
        this.chartData1.push({
          year: this.column[index],
          data: chartData,
          colorCode: this.colorsCode[index],
        });
      }
      this.showChart();
      return table;
    })
  );

  months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  public get tableData$() {
    return this._tableData$;
  }
  public set tableData$(value) {
    this._tableData$ = value;
  }

  constructor(private masterService: MasterserviceService) {}

  ngOnInit() {
    // this.showChart()
    this.getHeadData();
  }

  onSubmit() {
    this.fromHide = true;
  }
  showChart() {
    if (this.chart) {
      this.chart.destroy();
    }

    let dataset = this.chartData1.map((res: any) => {
      return {
        label: res.year,
        borderColor: res.colorCode,
        backgroundColor:res.colorCode,
        data: res.data,
        fill: false,
        tension :0.1
      };
    });

    this.chart = new Chart("canvas", {
      options: {
        maintainAspectRatio:false,
        pointRadius: 2,
        pointHoverRadius: 7,
         title: {
           display: true,
           text: "chart"
       },
        plugins: {
          legend: {
            display: true,
            position: "bottom",
          },
        },
        scales: {
          
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            grid: {
              display: false,
            },
          },
        },
      },
      type: this.type,
      data: {
        labels: [
          "JAN",
          "FEB",
          "MAR",
          "APR",
          "MAY",
          "JUN",
          "JUL",
          "AUG",
          "SEP",
          "OCT",
          "NOV",
          "DEC",
        ],
        datasets: dataset,
      },
    });
  }

  onChange(selected_chart: any) {
    this.type = selected_chart.target.value;
    this.showChart();
  }

  formdata = new FormGroup({
    head: new FormControl("", [Validators.required]),
    type: new FormControl("", [Validators.required]),
  });

  onSubmits(data: any) {
    this.commodityHead_commodityType = data;
    console.log("hello", data);
    this._tableData$ = this.masterService.getData(+data.head, +data.type).pipe(
      map((res: any) => {
        let table: any[] = [];
        this.column = res.column;
        this.commodity_type = res.materialData[0].commodity_type.type;
        // all sorted years
        this.yearsData = this.column.sort();

        for (let index = 0; index < this.yearsData.length; index++) {
          const element = this.yearsData[index];
          let yearData = res.materialData.filter((ele: any) => {
            if (ele.year.year == element) {
              return true;
            } else {
              return false;
            }
          });

          let sorted: Array<any> = yearData.sort(
            (a: any, b: any) => a.month.id - b.month.id
          );
          console.log("Year Data", sorted);

          let i = 0;
          let array = [];
          for (let index = 0; index < this.months.length; index++) {
            const element = this.months[index];
            let flag = false;
            for (let j = 0; j < sorted.length; j++) {
              let index = sorted.indexOf(sorted[j].value);
              sorted[index] = sorted[j].value.toFixed(2);
              sorted[j].value = parseFloat(sorted[index]);
              if (element == sorted[j]?.month?.month) {
                flag = true;
                break;
              } else {
                flag = false;
              }
            }

            if (flag) {
              array.push(sorted[index - i]);
            } else {
              i++;
              array.push(null);
            }
          }
          
          table.push(array);
          
          this.currency =sorted[0].UOM;
        }

        for (let index = 0; index < this.column.length; index++) {
          let chartData: any = [];
          res.materialData.forEach((ele: any) => {
            if (ele.year.year == this.column[index]) {
              chartData.push(ele.value);
            }
          });
          this.chartData1.push({
            year: this.column[index],
            data: chartData,
            colorCode: this.colorsCode[index],
          });
        }
        this.showChart();
        return table;
      })
    );
  }

  getHeadData() {
    this.masterService.getHead().subscribe((res) => {
      this.commodityHead = res;
    });
  }

  selectHead(event: any) {
    console.log("event.target.value", event.target.value);
    const data = event.target.value;
    this.masterService.gettypebyheadid(data).subscribe((res) => {
      this.commodityType = res;
    });
  }
  selectTypes(event:any){
    this.commodity_type = event.target.value;
  }
}
