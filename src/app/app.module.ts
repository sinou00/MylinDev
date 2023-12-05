import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { SingleToolComponent } from './single-tool/single-tool.component';
import { RouterModule } from '@angular/router';
import { SingleIdComponent } from './single-id/single-id.component';
import { SharedToolService } from './services/shared-tool.service';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    SingleToolComponent,
    SingleIdComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule, 
  ],
  bootstrap: [AppComponent, SingleToolComponent],
  providers: [SharedToolService],
})
export class AppModule { }