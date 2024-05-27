import { AfterViewInit, Component } from '@angular/core';
import * as M from "materialize-css";
import { CarouselOptions } from 'materialize-css';
import { BelowNavBarComponent } from '../below-nav-bar/below-nav-bar.component';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { ContactComponent } from '../contact/contact.component';
import { FooterComponent } from '../footer/footer.component';
import { HighlightersComponent } from '../highlighters/highlighters.component';
import { MovingSliderContinuousComponent } from '../moving-slider-continuous/moving-slider-continuous.component';
import { NearlyfundedsliderComponent } from '../nearlyfundedslider/nearlyfundedslider.component';
import { OriginalsComponent } from '../originals/originals.component';
import { OthersliderComponent } from '../otherslider/otherslider.component';
@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [HighlightersComponent,MovingSliderContinuousComponent,BelowNavBarComponent
    ,NearlyfundedsliderComponent,OthersliderComponent,ContactComponent,FooterComponent,ContactFormComponent,OriginalsComponent],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent implements AfterViewInit {
  pauseTimeoutId:any;
  
  autoplayIntervalId: any;
  ngAfterViewInit(): void {
    const options: Partial<CarouselOptions> = {
      
      indicators: true,
      duration: 200,
      
    };
    // Load Materialize CSS script dynamically
    document.addEventListener('DOMContentLoaded', () => {
    var elems =document.querySelectorAll(".carousel");
    const instances = M.Carousel.init(elems,options);
    
    this.autoplay();
    });

    

    
  }
  autoplay() {

    clearInterval(this.autoplayIntervalId);
    this.autoplayIntervalId = setInterval(() => {
      const elems = document.querySelectorAll(".carousel");
      const instance = M.Carousel.getInstance(elems[0]);
      instance.next(); // Move to the next slide
      const activeSlideIndex = instance.center;
      const totalSlides = document.querySelectorAll(".carousel-item").length;

      // Calculate the next active slide index with wrapping
      let nextActiveSlideIndex = (activeSlideIndex + 2) % totalSlides;
        if (nextActiveSlideIndex === 0) {
            nextActiveSlideIndex = totalSlides; // Handle 0-based index
        }
      const activeSlide = document.querySelector(`.carousel-item:nth-child(${nextActiveSlideIndex})`);

      // Check if activeSlide is not null before accessing its properties
      if (activeSlide) {
        const imageElement = activeSlide.querySelector('img');
        if (imageElement) {
          const imageSrc = imageElement.getAttribute('src');
          console.log("Source of the image:", imageSrc);
          const banner = document.querySelector(".banner") as HTMLElement;
          if(banner){
            if(imageSrc=="assets/images/movies/the-little-mermaid.jpeg"){
              this.changeBg("bg-little-mermaid.jpg","the-little-mermaid");
              // banner.style.background = `Url("../assets/images/movies/bg-little-mermaid.jpg")`;
            }
            else if(imageSrc==="assets/images/movies/the-covenant.jpg"){
              this.changeBg("bg-the-covenant.jpeg","the-covenant");
              // banner.style.background = `Url("../assets/images/movies/bg-the-covenant.jpeg")`;
            }
            else if(imageSrc==="assets/images/movies/the-black-demon.jpg"){
              this.changeBg("bg-the-black-demon.jpeg","the-black-demon");
              // banner.style.background = `Url("../assets/images/movies/bg-the-black-demon.jpeg")`;
            }
            else if(imageSrc==="assets/images/movies/the-tank.jpeg"){
              this.changeBg("bg-the-tank.jpeg","the-tank");
              // banner.style.background = `Url("../assets/images/movies/bg-the-tank.jpeg")`;
            }
            }
        } else {
          console.log("No image found in the active slide");
        }
      } else {
        console.log("No active slide found");
      }
    }, 4500); // Adjust autoplay interval as needed
    
    
    // Clear interval when component is destroyed
    window.onbeforeunload = () => clearInterval(this.autoplayIntervalId);

    // Add click event listener to pause autoplay when clicked on an image
    const carouselElement = document.querySelector(".carousel");
    if(carouselElement){
    carouselElement.addEventListener("click", this.pauseAutoplay.bind(this));
    }
  }

  pauseAutoplay() { 
    clearInterval(this.autoplayIntervalId); // Stop autoplay interval

    // Restart autoplay after 20 seconds
    this.pauseTimeoutId = setTimeout(() => {
      this.autoplay();
      const carouselElement = document.querySelector(".carousel");
      if(carouselElement){
        carouselElement.addEventListener("click", this.pauseAutoplay.bind(this));
      };
    }, 20000); // 20 seconds pause

    

    // Clear the timeout if the user clicks on another image within the 20-second pause
    const carouselElement = document.querySelector(".carousel");
    if(carouselElement){
    carouselElement.removeEventListener("click", this.pauseAutoplay.bind(this));
    }
  }

  ngOnDestroy(): void {
    clearInterval(this.autoplayIntervalId); // Clear autoplay interval when component is destroyed
    clearTimeout(this.pauseTimeoutId); // Clear pause timeout when component is destroyed
  }

  


  

  toggleVideo() {
    const trailer = document.querySelector('.trailer') as HTMLElement;
    const video = document.querySelector('video') as HTMLVideoElement;
    video.pause();
    trailer.classList.toggle('active');
  }

  changeBg(bg: string, title: string ) {
    const banner = document.querySelector('.banner') as HTMLElement;
    const contents = document.querySelectorAll('.content') as NodeListOf<HTMLElement>;
    banner.style.background = `url("../assets/images/movies/${bg}")`;
    banner.style.backgroundSize = 'cover';
    banner.style.backgroundPosition = 'center';
    

  
    contents.forEach(content => {
      content.classList.remove('active');
      if (content.classList.contains(title)) {
        content.classList.add('active');
      }
    });


  
  }

}
