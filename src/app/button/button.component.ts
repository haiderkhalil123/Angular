import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import {
  MatButton,
  MatButtonModule,
  MatMiniFabButton,
} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

export interface MyCellParams {
  buttonText?: string;
}

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  template: `
    <button mat-button color="primary" (click)="onedit()">
      {{ buttonText }}
      <!-- Edit -->
    </button>
  `,
  // templateUrl:'./button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements ICellRendererAngularComp {
  buttonText: string = 'Default';

  agInit(params: ICellRendererParams & MyCellParams): void {
    this.buttonText = params.buttonText ?? 'Default';
  }
  refresh(params: ICellRendererParams & MyCellParams): boolean {
    return false;
  }

  onedit() {}
}
