import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popup-success',
  standalone: true,
  imports: [MatDialogModule,CommonModule],
  templateUrl: './popup-success.component.html',
  styleUrl: './popup-success.component.scss'
})
export class PopupSuccessComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { message: string },private router:Router) {}
  homePage() {
    // Redirect to a home page or any other page on cancel
    this.router.navigate(['homepage']);
  }

}
