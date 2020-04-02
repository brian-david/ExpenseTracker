import { Component, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { InputDialogComponent } from './input-dialog/input-dialog.component';

@Component({
  selector: 'app-expense-type',
  templateUrl: './expense-types.component.html',
  styleUrls: ['expense-types.component.css']
})

export class ExpenseTypesModule{
  displayedColumns = ['name', 'comment'];
  dataSource = ELEMENT_DATA;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(InputDialogComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  addExpenseType(){
    alert('Add a new expense type');
  }
}

export interface ExpenseType {
  name: string;
  comment: string;
}

const ELEMENT_DATA: ExpenseType[] = [
  {name: 'Cloaths', comment: 'Cloathing items purchased'},
  {name: 'Electricity', comment: 'Money spent on electricity'},
  {name: 'Food', comment: 'Money spent on food'},
  {name: 'Petrol', comment: 'Money spent on petrol for car'},
];


