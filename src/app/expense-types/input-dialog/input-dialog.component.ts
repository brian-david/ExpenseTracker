import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ExpenseTypeService } from 'src/app/services/expense_types.service';

@Component({
  selector: 'app-input-dialog',
  templateUrl: 'input-dialog.component.html',
})
export class InputDialogComponent {

  expenseType = {
    name: '',
    comment: ''
  };
  submitted = false;


  constructor(
    public dialogRef: MatDialogRef<InputDialogComponent>,
    private expenseService: ExpenseTypeService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveExpenseType() {
    const data = {
      name: this.expenseType.name,
      comment: this.expenseType.comment
    };

    this.expenseService.create(data).subscribe(response => {
      console.log(response);
       this.submitted = true;
     },
     error => {
      console.log(error);
    });
    this.dialogRef.close();
  }

}

export interface DialogData {
  name: string;
  comment: string;
}
