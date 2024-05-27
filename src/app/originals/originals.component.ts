import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, Renderer2 } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-originals',
  standalone: true,
  imports: [SlickCarouselModule,CommonModule,MatDialogModule],
  templateUrl: './originals.component.html',
  styleUrl: './originals.component.scss'
})
export class OriginalsComponent {

  @Input() id?:String;
  @Input() id2?:String;
  isopen?:boolean;

  slides =[
    {img:"assets/images/movies/the-little-mermaid.jpeg"},
    {img:"assets/images/movies/65.jpg"},
    {img:"assets/images/movies/the-covenant.jpg"},
    {img:"assets/images/movies/the-black-demon.jpg"},
    {img:"assets/images/movies/the-tank.jpeg"},
    {img:"assets/images/movies/salaar.jpg"}
  ];

   
slideConfig={
  "slidesToShow":4,
  "slidesToScroll":1,
  "autoplay":true,
  "autoplaySpeed":1500,
  "pauseOnHover":true,
  "infinite":true,
  "dots":false,
  "responsive":[
  {
    "breakpoint":992,
    "settings":{
    "arrows":true,
    "infinite":true,
    "slidesToShow":3,
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
  private overlayElement: HTMLElement|null =null;

  // constructor(public dialog: MatDialog) {}

  // openImagePopup(imageData: any): void {
  //   document.body.classList.add('no-scroll','dialog-container');
  //   const dialogConfig = new MatDialogConfig();
  //   dialogConfig.width = '400px';
  //   dialogConfig.data = imageData;
  //   dialogConfig.position = { left:'35vw',top:'40vh'}; // Center the dialog
  //   const dialogRef = this.dialog.open(PopupComponent, dialogConfig);
  //   dialogRef.afterClosed().subscribe(() => {
  //     document.body.classList.remove('no-scroll','dialog-container');
  //   });
  // };

  constructor(public dialog: MatDialog, private renderer: Renderer2, private el: ElementRef) {}
  

  openDialog(slide: any): void {
    document.body.style.overflow = 'hidden';  // Disable scrolling
    const dialogRef = this.dialog.open(PopupComponent, {
      data: slide,
      disableClose: false,  // Prevent closing by clicking outside
      panelClass: 'custom-dialog-container'
    });

    dialogRef.afterClosed().subscribe(() => {
      document.body.style.overflow = 'auto';  // Enable scrolling
    });
  }

  ngOnDestroy(): void {
    // Ensure the overlay element is removed if the component is destroyed
    if (this.overlayElement) {
      this.renderer.removeChild(this.el.nativeElement, this.overlayElement);
    }
    this.el.nativeElement.remove();
  }

  ngOnInit(){
    
      // move element to bottom of page (just before </body>) so it can be displayed above everything else
      document.body.appendChild(this.el.nativeElement);

      // close modal on background click
      // this.el.nativeElement.addEventListener('click', (el: any) => {
      //     if (el.target.className === 'carousel') {
      //         this.close();
      //     }});

  }

  // close():void{
  //   this.el.nativeElement.style.display='none';
  //   document.body.classList.remove("popUp-open");
  //   this.isopen=false;
  // }
}
  
  
  
  


