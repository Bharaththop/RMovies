import { Routes } from '@angular/router';
import { BelowNavBarComponent } from './below-nav-bar/below-nav-bar.component';
// import { FootersComponent } from './footers/footers.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FooterComponent } from './footer/footer.component';
import { HighlightersComponent } from './highlighters/highlighters.component';
import { MovingSliderContinuousComponent } from './moving-slider-continuous/moving-slider-continuous.component';
import { OriginalsComponent } from './originals/originals.component';
import { OthersliderComponent } from './otherslider/otherslider.component';
import { PopupComponent } from './popup/popup.component';
import { SliderComponent } from './slider/slider.component';

export const routes: Routes = [
{path:"home",component:OriginalsComponent},
{path:"homepage",component:SliderComponent},
{path:"popup",component:PopupComponent},
{path:"highlighters",component:HighlightersComponent},
{path:"movingslider",component:MovingSliderContinuousComponent},
{path:"navbar",component:BelowNavBarComponent},
{path:"otherSlider",component:OthersliderComponent},
// {path:"**",component:ContactComponent},
{path:"footer",component:FooterComponent},
{path:"contact-form",component:ContactFormComponent}
];
