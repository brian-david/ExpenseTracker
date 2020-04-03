import { Component } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { InputDialogComponent } from './input-dialog/input-dialog.component';

@Component({
  selector: 'app-expense-type',
  templateUrl: './expense-types.component.html',
  styleUrls: ['expense-types.component.css']
})

export class ExpenseTypesModule{
  constructor(private dialog: MatDialog) {}
  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    this.dialog.open(InputDialogComponent, dialogConfig);
  }

  addExpenseType(){
    alert('Add a new expense type');
  }
}
