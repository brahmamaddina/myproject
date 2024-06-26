import { CommonModule } from '@angular/common';
import { Component, OnInit, OnChanges } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'teja maddina';
  userName = '';
  password = '';
  name = '';
  number = '';
  city = '';
  textarea = '';
  formdata: any = '';
  isSubmitted : boolean = false;

  ngOnInit() {
    console.log("test hello world teja" );

    this.formdata = new FormGroup({
      name: new FormControl("Brahma teja"),
      number: new FormControl(8008229977),
      city: new FormControl("option"),
      address: new FormControl("Robert Robertson, 1234 NW Bobcat Lane, St. Robert, MO 65584-5678"),
      gender: new FormControl("male"),
   });
  }
  ngOnChanges() {
    console.log("data:", this.userName, this.password);
  }

  public login() : void {
    console.log("login values:", this.userName, this.password)
    
  }

  public mySubmit(value?: any) : void {
    console.log("submit values:", value)
    this.isSubmitted = true;
  }

}
