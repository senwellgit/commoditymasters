import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { type } from "os";
import { map } from "rxjs/operators";
import { MasterserviceService } from "src/app/masterservice.service";
import { environment } from "src/environments/environment";

declare var require: any;
const FileSaver = require("file-saver");

@Component({
  selector: "app-lme-commodity-daily-price-updates",
  templateUrl: "./lme-commodity-daily-price-updates.component.html",
  styleUrls: ["./lme-commodity-daily-price-updates.component.scss"],
})
export class LmeCommodityDailyPriceUpdatesComponent implements OnInit {
  [x: string]: any;
  exceldata: any = [];
  show: boolean = false;
  hide: boolean = true;
  commodityType: any;
  commoditySelectedType !:string;
  dateArray: any;
  head_id: any;
  commodityHead: any;
  type_id: any;
  event: Event | undefined;

  constructor(
    private masterService: MasterserviceService,
    private http: HttpClient
  ) {}
  
  ngOnInit(): void {
    this.getholedata();
    this.getHeadData();
    // let a=this.type_id;
  }
getholedata() {
    this.masterService.getData(1, 1).subscribe((data) => {
      this.exceldata.data;
      console.log(data);
    });
  }

getHeadData() {
    this.masterService.getHead().subscribe((res) => {
      this.commodityHead = res;
      console.log("***************API", res);
    });
  }

onSubmits(data: any) {
    this.commodityHead_commodityType = data.type;
    console.log("hello", this.commodityHead_commodityType);
    debugger
    this.masterService
        .getDay(data.head, data.type, data.start_date, data.end_date)
        .subscribe((res) => {
          this.dateArray = res;
          this.commoditySelectedType=this.dateArray.data[0]?.commodity_type.type
          console.log("type-------=======", this.dateArray);
        }); 
  
  // if(data.type==)
}
 formdata = new FormGroup({
    head: new FormControl("", [Validators.required]),
    type: new FormControl("", [Validators.required]),
    start_date: new FormControl("", [Validators.required]),
    end_date: new FormControl("", [Validators.required]),
  });

selectHead(event: any) {
    console.log("event.target.value", event.target.value);
    const data = event.target.value;
    this.masterService.gettypebyheadid(data).subscribe((res) => {
      this.commodityType = res;
      console.log("types>>>>>>>>>>>>>>", res);
    });
  }
  filterData() {
    this.show = true;
    this.hide = false;
    // console.log("data",this.formdata);
    
    // this.http
    //   .get(
    //     environment.base_url +
    //       "day?head_id=" +
    //       this.head_id +
    //       "&type_id=" +
    //       this.type_id
    //   )
    //   .subscribe((res) => {
      //    console.log(res);
      // });
  }
}
 // onSubmit(data: any) {
  //   debugger
  //   console.log("data data ==============>",data);
    
  //   this.masterService
  //     .getDay(data.head, data.type, data.start, data.end)
  //     .subscribe((res) => {
  //       this.dateArray = res;
  //       console.log("data-------=======", res);
  //       console.log();
  //     });
  // }