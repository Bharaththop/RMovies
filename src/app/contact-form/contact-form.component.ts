import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
// import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormData } from '../form-data';
import { PopupSuccessComponent } from '../popup-success/popup-success.component';



@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule,HttpClientModule,PopupSuccessComponent,CommonModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {


  formData1:FormData
  constructor(private http:HttpClient, private router: Router,private dialog: MatDialog) {

    this.formData1=new FormData("","","","","","");
  }

  isFormSubmitted:boolean=false;
  @ViewChild('submitted') scrollTarget!: ElementRef;
  formData:any={firstName:'',lastName:'',projectName:'',email:'',phoneNumber:'',description:''};
  // formData1:FormData=new FormData("","","");
 
  onSubmit(){

    // Send form data to the backend
    this.isFormSubmitted =true;
    // this.scrollTarget.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    if(this.formData.firstName!="" && this.formData.lastName!="" && this.formData.projectName!="" && this.formData.email!="" &&this.formData.phoneNumber!=""){
      this.openDialog();
    }
    this.formData1.firstName=this.formData.firstName;
    this.formData1.lastName=this.formData.lastName;
    this.formData1.email=this.formData.email;
    this.formData1.phoneNumber=this.formData.phoneNumber;
    this.formData1.projectName=this.formData.projectName;
    this.formData1.description=this.formData.description;
    
    this.http.post('https://rmovies-backend.onrender.com/sendMail', this.formData1)
      .subscribe(response => {
        console.log('Form submission successful', response);
        // Redirect to a success page after form submission
        this.router.navigate(['contact-form']);
      }, error => {
        console.error('Form submission failed', error);
      });
      
      // this._snackBar.open('Form submitted successfully', 'Close', {
      //   duration: 2000, // Duration in milliseconds
      // });
    
  }

  onCancel() {
    // Redirect to a home page or any other page on cancel
    this.router.navigate(['homepage']);
  }
  openDialog(): void {
    document.body.style.overflow = 'hidden'; 
    const dialogRef = this.dialog.open(PopupSuccessComponent, {
      width: '250px',
      data: { message: 'Form submitted successfully' },
      disableClose:false
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      document.body.style.overflow = 'auto';  // Enable scrolling
    });
  }

  

}
