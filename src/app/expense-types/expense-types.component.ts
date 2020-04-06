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

  displayedColumns = ['name', 'comment', 'tools'];

  constructor(private expenseTypesService: ExpenseTypeService, private dialog: MatDialog) {
    dialog.afterAllClosed
    .subscribe(() => {
    // update a variable or call a function when the dialog closes
      this.refreshList();
    }
  );
  }

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

  deleteElement(id){
    console.log("DELETE ELEMENT WITH ID: "+id);
    this.expenseTypesService.delete(id).subscribe(response=>{
      console.log(response);
      this.refreshList();
    },
    error => {
      console.log(error);
    });

  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    //this.dialog.open(InputDialogComponent, dialogConfig);
    const dialogRef = this.dialog.open(InputDialogComponent, dialogConfig);
  }

openEditDialog(){
  const dialogConfig = new MatDialogConfig();

  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;

  dialogConfig.data = {
      id: 1,
      title: 'Angular For Beginners'
  };

  this.dialog.open(InputDialogComponent, dialogConfig);
}

  refreshList() {
    this.retrieveExpenseTypes();
    this.currentExpenseType = null;
    this.currentIndex = -1;
  }
/*
  editElement(id){
    console.log("edit element"+id);
    this.expenseTypesService.update(id).subscribe(response=>{
      console.log(response);
    });
  }
  */
}
