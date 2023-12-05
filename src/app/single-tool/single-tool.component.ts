
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { SharedToolService } from '../services/shared-tool.service';

@Component({
  selector: 'app-single-tool',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FormsModule], 
  templateUrl: './single-tool.component.html',
  styleUrls: ['./single-tool.component.css']
})

export class SingleToolComponent implements OnInit {
  
  hasTools: any[]= [];
  selectedTool: any;

   constructor(
    public router: Router,
    private route: ActivatedRoute,
    private cd: ChangeDetectorRef,
    public sharedToolService: SharedToolService
  ) 
    {
      this.sharedToolService.hasTools  = [{nom:"Outil numéro 1 avec peu de visites", id:"asd12", visites: 1, enregistrements:123, partages:123, suivis:123, credibilite:123,efficacite:123,note:123},
                      {nom:"Outil numéro 2", id:"af2jhkhb", visites: 223, enregistrements:223, partages:223, suivis:223, credibilite:2213,efficacite:223,note:223},
                      {nom:"Outil numéro 3 fait par mr. X", id:"bfd97632gr",visites: 323, enregistrements:323, partages:323, suivis:323, credibilite:323,efficacite:323,note:1323},
                      {nom:"Outil numéro 4 pas de valeurs pour suivis", id:"345467fg",visites:424, enregistrements:432, partages:432, suivis:'NaN', credibilite:421, efficacite:412, note:412},
                      {nom:"Prochain outil", id:"gs54gf",visites: 5, enregistrements:523, partages:523, suivis:523, credibilite:523,efficacite:523,note:523},
                      {nom: "Outil 6", id:"gfsdg54hdf",visites: 62, enregistrements:623, partages:623, suivis:623, credibilite:623,efficacite:623,note:623},
                      {nom:"Dernier outils avec beaucoup de visites et un long titre", id:"fcafasdr32", visites: 105923, enregistrements:723, partages:723, suivis:723, credibilite:723,efficacite:723,note:723}]
  }

  ngOnInit() {
    // Observer les changements dans la route pour mettre à jour l'ID sélectionné
    this.route.params.subscribe(params => {
      console.log('Paramètres de la route :', params);
      this.sharedToolService.selectedToolId = params['id'];
    });
  }

  singleTool(id: string) {
    // Navigate to the child route
    this.router.navigate(['./single', id], { relativeTo: this.route });
  }

}



  

 


  


