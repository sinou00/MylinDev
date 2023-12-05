
import { SingleToolComponent } from './single-tool/single-tool.component'; 
import { SingleIdComponent } from './single-id/single-id.component'; 
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { 
    path: '', // This is the default route
    redirectTo: '/tool', // Redirect to /tool by default
    pathMatch: 'full',
  },

  { path: 'tool', 
  component: SingleToolComponent ,
  children: [
    { path: 'single/:id', component: SingleIdComponent },
  ]
  },
  {
    path:'home',
    component: HomeComponent,
  },

];

 @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}) 


export class AppRoutingModule { } 



