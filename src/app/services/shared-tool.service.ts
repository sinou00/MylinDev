// shared-tool.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedToolService {
  hasTools: any[] = []; // Update the type according to your data structure
  selectedToolId: string | null = null;
}