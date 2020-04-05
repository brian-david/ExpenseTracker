import { ExpenseTypeService } from './../services/expense_types.service';
import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { InputDialogComponent } from './input-dialog/input-dialog.component';

@Component({
  selector: 'app-expense-type',
  templateUrl: './expense-types.component.html',
  styleUrls: ['expense-types.component.css']
})

export class ExpenseTypesModule implements OnInit{
  expenseTypes: any;
  currentExpenseType = null;
  currentIndex = -1;
  title = '';

  displayedColumns = ['name', 'comment'];

  constructor(private expenseTypesService: ExpenseTypeService) { }

  //constructor(private dialog: MatDialog) {}

  ngOnInit() {
    this.retrieveExpenseTypes();
  }

  retrieveExpenseTypes() {
    this.expenseTypesService.getAll()
      .subscribe(
        data => {
          this.expenseTypes = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  /*
  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    this.dialog.open(InputDialogComponent, dialogConfig);
  }

  addExpenseType(){
    alert('Add a new expense type');
  }
  */
}
