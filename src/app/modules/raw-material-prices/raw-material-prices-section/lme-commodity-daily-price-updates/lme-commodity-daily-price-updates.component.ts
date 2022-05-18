import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

import { MasterserviceService } from "src/app/masterservice.service";
import { environment } from "src/environments/environment";
import { ThrowStmt } from '@angular/compiler';

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
  commodityType: any=[];
  commoditySelectedType !:string;
  dateArray: any;
  head_id: any;
  commodityHead:any=[];
  type_id: any;
  event: Event | undefined;
  // alldata: any=[];


  constructor(
    private masterService: MasterserviceService,
    private http: HttpClient
  ) {}
  
  ngOnInit(): void {
    this.getholedata();
    this.getHeadData();
    this.getdaily()
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
          // console.log("response onSubmit()=========>",   res);
          
          this.commoditySelectedType=this.dateArray.data[0]?.commodity_type.type
          console.log("type-------=======", this.dateArray);
        }); 

      }
  
  // if(data.type==)
/*
  years:any[]=[2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021];
  months:any[]=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November','December']


year_2011:any[]=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov','Dec']

yEAR2011 = [
  { name:'Jan',startPage: 1,path: '..//..//..//../../assets/rowmaterialPDF/largepreview-converted.pdf'},
  { name:'Feb',startPage: 1,path: '..//..//..//../../assets/rowmaterialPDF/largepreview (1)-converted.pdf'},
  { name:'Mar',startPage: 1,path: '..//..//..//../../assets/rowmaterialPDF/largepreview (1)-converted.pdf'},
  { name:'Apr',startPage: 1,path: '..//..//..//../../assets/rowmaterialPDF/largepreview (1)-converted.pdf'},
  { name:'May',startPage: 1,path: '..//..//..//../../assets/rowmaterialPDF/largepreview (1)-converted.pdf'},
  { name:'Jun',startPage: 1,path: '..//..//..//../../assets/rowmaterialPDF/largepreview (1)-converted.pdf'},
  { name:'Jul',startPage: 1,path: '..//..//..//../../assets/rowmaterialPDF/largepreview (1)-converted.pdf'},
  { name:'Aug',startPage: 1,path: '..//..//..//../../assets/rowmaterialPDF/largepreview (1)-converted.pdf'},
  { name:'Sep',startPage: 1,path: '..//..//..//../../assets/rowmaterialPDF/largepreview (1)-converted.pdf'},
  { name:'Oct',startPage: 1,path: '..//..//..//../../assets/rowmaterialPDF/largepreview (1)-converted.pdf'},
  { name:'Nov',startPage: 1,path: '..//..//..//../../assets/rowmaterialPDF/largepreview (1)-converted.pdf'},
  { name:'Dec',startPage: 1,path: '..//..//..//../../assets/rowmaterialPDF/largepreview (1)-converted.pdf'},
]

yEAR201:any[]=[];
data:any[]=[
  this.yEAR201 = [
    {
      name:'Jan',
      startPage: 1,
      path: '..//..//..//../../assets/rowmaterialPDF/largepreview-converted.pdf'
    },
    {
      name:'Feb',
      startPage: 2,
      path: '..//..//..//../../assets/rowmaterialPDF/largepreview (1)-converted.pdf'
    }
  ]
]

downloadPdf(pdfUrl: string, pdfName: string ) {
  //const pdfUrl = './assets/sample.pdf';
  //const pdfName = 'your_pdf_file';
  FileSaver.saveAs(pdfUrl, pdfName);
}

openDoc(pdfUrl: string, startPage: number ) {
  window.open(pdfUrl + '#page=' + startPage, '_blank', '');
}
 */
commodityData=[
  {nonFerrous_Metals:['Copper','Aluminium','Zinc','Brass','Nickel','Lead','Tin','Manganese','Steel']},
  {Ferrous_Metals:['MS flat','MS Angel','MS Channel','Pig Iron','Ingot Round','Ingot MG','Casting Scrap','Turning Scrap']},
  {Chemicals:['Nylon 6','Nylon 66','ABS','PE','PP(Homopolymer)','PP(Copolymer)','PC','PBT','PVC','Caprolactam']},
]

copperData=[
  { date:"10. February 2022",	CashSettlement:"10,220.50",	Copper3month:"10,181.00",	CopperStock:"76,325"},
  { date:"9. February 2022",	CashSettlement:"9,881.00",	Copper3month:"9,841.00",	CopperStock:"77,325"},
  { date:"8. February 2022",	CashSettlement:"9,760.00",	Copper3month:"9,718.00",	CopperStock:"79,925"},
  { date:"7. February 2022",	CashSettlement:"9,850.00",	Copper3month:"9,815.00",	CopperStock:"80,025"},
  { date:"4. February 2022",	CashSettlement:"9,875.00",	Copper3month:"9,835.00",	CopperStock:"82,225"},
  { date:"3. February 2022",	CashSettlement:"9,785.00",	Copper3month:"9,755.00",	CopperStock:"82,400"},
  { date:"2. February 2022",	CashSettlement:"9,880.00",	Copper3month:"9,845.00",	CopperStock:"84,875"},
  { date:"1. February 2022",	CashSettlement:"9,701.00",	Copper3month:"9,661.00",	CopperStock:"86,500"},		
]

lmeData=[
  { nonFerrous:"Copper",Settlement:"10,220.50",lme3month:"10,181.00"},
  { nonFerrous:"Aluminium",Settlement:"3,313.00",lme3month:"3,287.00"},
  { nonFerrous:"Zinc",Settlement:"3,738.00",lme3month:"3,730.00"},
  { nonFerrous:"Nickel",Settlement:"24,055.00",lme3month:"23,625.00"},
  { nonFerrous:"Lead",Settlement:"2300.00",lme3month:"2,285.00"},
  { nonFerrous:"Tin",Settlement:"44,445.00",lme3month:"44,300.00"},  

]


filterData(){
  this.show=true;
  this.hide=false;
}

filterable(){
  this.show=true;
  this.hide=true;
}


selectHead(event: any) {
  console.log("event.target.value", event.target.value);
  const data = event.target.value;
  this.masterService.gettypebyheadid(data).subscribe((res) => {
    this.commodityType = res;
    console.log("types>>>>>>>>>>>>>>", res);
  });
}
getdaily()
{
  this.masterService.getmonth().subscribe((res:any)=>{
    this.data=res.data
    console.log("all date",res);
  })
}
 formdata = new FormGroup({
    head: new FormControl("", [Validators.required]),
    type: new FormControl("", [Validators.required]),
    start_date: new FormControl("", [Validators.required]),
    end_date: new FormControl("", [Validators.required]),
  });

  getentireData() {
    this.masterService.getallData().subscribe((res)=>{
      this.entire_Data = res
    })
  }

 // onSubmit(data: any) {
  
  //   console.log("data data ==============>",data);
    
  //   this.masterService
  //     .getDay(data.head, data.type, data.start, data.end)
  //     .subscribe((res) => {
  //       this.dateArray = res;
  //       console.log("data-------=======", res);
  //       console.log();
  //     });
  }