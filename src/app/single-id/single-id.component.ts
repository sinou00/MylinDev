import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedToolService } from '../services/shared-tool.service';

@Component({
  selector: 'app-single-id',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single-id.component.html',
  styleUrl: './single-id.component.css'
})
export class SingleIdComponent implements OnInit  {
  selectedToolId: string | null = null;
  selectedTool: any;

  constructor(private route: ActivatedRoute, private sharedToolService: SharedToolService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
    
      this.selectedToolId = params['id'] !== null ? params['id'] : null;
      
      this.selectedTool = this.getToolDetails(this.selectedToolId);
    });
  }

  private getToolDetails(id: string | null): any {
    if (id !== null) {
      // Logic to get tool details based on the ID from the shared service
      return this.sharedToolService.hasTools.find((tool) => tool.id === id);
    } else {
      return null;
    }
  }
}
