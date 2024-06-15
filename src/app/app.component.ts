import { Component, OnInit, OnChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnChanges {
  title = 'teja maddina';
  userName = ''
  password = ''

  ngOnInit() {
    console.log("test hello world teja" );
  }
  ngOnChanges() {
    console.log("data:", this.userName, this.password);
  }

  public login() : void {
    console.log("login values:", this.userName, this.password)
    
  }

}
