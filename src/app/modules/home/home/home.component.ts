import { Component, OnInit } from "@angular/core";
import { filter } from "rxjs/operators";
import { MasterserviceService } from "src/app/masterservice.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  getdata: any;
  commodityHead: any;
  commodityType: any;
  alldata: any;

  constructor(private masterService: MasterserviceService) {}

  ngOnInit(): void {
    this.gettype();
    this.getHeadData();
    this.getAll();
  }

  gettype() {
    this.masterService.gettypebyheadid(1).subscribe((res) => {
      this.getdata = res;
      console.log("hello", res);
    });
  }
  getHeadData() {
    this.masterService.getHead().subscribe((res) => {
      this.commodityHead = res;
      console.log("headdata", res);
    });
  }
  getAll() {
    this.masterService.getty().subscribe((res) => {
     
      this.alldata = res;
      
      console.log("allldata", res);

    });
  }
}
