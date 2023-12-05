import { NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Component,ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  constructor(
    public router: Router,
    private cd: ChangeDetectorRef
  )  {}





    seeTool(id: string) {

      this.router.navigate(['/tool']);
    } 

    goHome(){
      this.router.navigate(['/home'])
    }

}
