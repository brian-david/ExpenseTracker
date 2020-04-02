import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-expense-type',
  templateUrl: './expense-types.component.html',
  styleUrls: ['expense-types.component.css']
})

export class ExpenseTypesModule{
  displayedColumns = ['name', 'comment'];
  dataSource = ELEMENT_DATA;

  addExpenseType(){
    alert('Add a new expense type');
  }
}

export interface PeriodicElement {
  name: string;
  comment: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Cloaths', comment: 'Cloathing items purchased'},
  {name: 'Electricity', comment: 'Money spent on electricity'},
  {name: 'Food', comment: 'Money spent on food'},
  {name: 'Petrol', comment: 'Money spent on petrol for car'},
];
