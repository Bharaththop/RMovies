import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { OriginalsComponent } from '../originals/originals.component';


@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [MatDialogModule,OriginalsComponent,SlickCarouselModule,CommonModule],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss'
})
export class PopupComponent {

  // constructor(public popUpService:PopUpServiceService) { }
  slideConfig={
    "slidesToShow":1,
    "slidesToScroll":1,
    "autoplay":true,
    "autoplaySpeed":1000,
    "pauseOnHover":true,
    "infinite":true,
    "dots":true,
    "responsive":[
    {
      "breakpoint":992,
      "settings":{
      "arrows":true,
      "infinite":true,
      "slidesToShow":1,
      "slidesToScroll":1
    }
    },
    {
      "breakpoint":768,
      "settings":{
      "arrows":true,
      "infinite":true,
      "slidesToShow":1,
      "slidesToScroll":1
    }
    }]
    }
  
  
  slides =[{img:""}];


  constructor(
    public dialogRef: MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { 
    if(data.img==="assets/images/movies/the-little-mermaid.jpeg"){
      this.slides=[{img:"assets/images/movies/the-little-mermaid.jpeg"},{img:"assets/images/the-little-mermaid-title.png"},{img:"assets/images/the-little-mermaid-title.png"}]

    }else if(data.img==="assets/images/movies/65.jpg"){
      this.slides=[{img:"assets/images/movies/65.jpg"},{img:"assets/images/the-65-title.png"},{img:"assets/images/the-65-title.png"}]
    }
    else if(data.img==="assets/images/movies/the-covenant.jpg"){
      this.slides=[{img:"assets/images/movies/the-covenant.jpg"},{img:"assets/images/the-covenant-title.png"},{img:"assets/images/the-covenant-title.png"}]

    }
    
    }

  



  close(): void {
    this.dialogRef.close();
  }

}
