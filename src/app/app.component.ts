import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterOutlet } from '@angular/router';
import { BelowNavBarComponent } from './below-nav-bar/below-nav-bar.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HighlightersComponent } from './highlighters/highlighters.component';
import { MovingSliderContinuousComponent } from './moving-slider-continuous/moving-slider-continuous.component';
import { NearlyfundedsliderComponent } from './nearlyfundedslider/nearlyfundedslider.component';
import { OriginalsComponent } from './originals/originals.component';
import { OthersliderComponent } from './otherslider/otherslider.component';
import { PopupComponent } from './popup/popup.component';
import { SliderComponent } from './slider/slider.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,OriginalsComponent,MatDialogModule,PopupComponent,SliderComponent,
    HighlightersComponent,MovingSliderContinuousComponent,BelowNavBarComponent
    ,NearlyfundedsliderComponent,OthersliderComponent,ContactComponent,FooterComponent,ContactFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cinema2';
}
