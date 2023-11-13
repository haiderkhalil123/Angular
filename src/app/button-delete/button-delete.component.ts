import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

export interface MyCellParams {
  buttontext?: string;
}

@Component({
  selector: 'app-button-delete',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  template: ` <button mat-button color="primary" matTooltip="Delete Row">
    {{ buttontext }}
  </button>`,
  styleUrls: ['./button-delete.component.scss'],
})
export class ButtonDeleteComponent implements ICellRendererAngularComp {
  buttontext: string = 'Default';

  agInit(params: ICellRendererParams & MyCellParams): void {
    this.buttontext = params.buttontext ?? 'Default';
  }
  refresh(params: ICellRendererParams & MyCellParams): boolean {
    return false;
  }
}
