// import { Component, OnInit } from '@angular/core';
import {
  AfterViewInit,
  Component
} from "@angular/core";
import * as M from "materialize-css";
import { CarouselOptions } from "materialize-css";
import { ContactComponent } from "../contact/contact.component";

@Component({
  selector: 'app-otherslider',
  standalone: true,
  imports: [
    
    ContactComponent
  ],
  templateUrl: './otherslider.component.html',
  styleUrl: './otherslider.component.scss'
})
export class OthersliderComponent implements AfterViewInit {

  ngAfterViewInit(): void {const options: Partial<CarouselOptions> = {
      
    indicators: true,
    duration: 200,
    
    
  };
  // Load Materialize CSS script dynamically
  document.addEventListener('DOMContentLoaded', () => {
  var elems =document.querySelectorAll(".carousel");
  const instances = M.Carousel.init(elems,options);
  autoplay();
  function autoplay() {
    instances[0].next();
    // timeout(autoplay, 3000); // Change slide every 3 seconds
    setInterval(autoplay,1000);
  }


});

  

  
}



}
