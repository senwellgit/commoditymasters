import { Component, OnInit } from '@angular/core';

declare var require: any
const FileSaver = require('file-saver');

@Component({
  selector: 'app-lme-commodity-daily-price-updates',
  templateUrl: './lme-commodity-daily-price-updates.component.html',
  styleUrls: ['./lme-commodity-daily-price-updates.component.scss']
})
export class LmeCommodityDailyPriceUpdatesComponent implements OnInit {
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

show:boolean=false;
hide:boolean=true;



  constructor() { }

  ngOnInit(): void {
  }

filterData(){
  this.show=true;
  this.hide=false;
}

}
