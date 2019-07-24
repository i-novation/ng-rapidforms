import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import {
  DynamicFormRow,
  TextboxElement,
  DatePickerElement,
  DynamicformComponent,
  RequiredValidator,
  NumberElement,
} from '@i-novation/ng-rapidforms';

import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'tst-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // Last sent value for display in template
  sentValue: string;

  // Access to the FormGroup, templates, etc.
  dynamicform: DynamicformComponent;

  // Descriptive array for the form-components
  rows: DynamicFormRow[] = [
    new TextboxElement({
      key: 'address',
      label: 'Address',
      placeholder: 'Please enter something. Or not. I am a placeholder, not a cop.',
      validators: []
    }),
    new DatePickerElement<NgbDateStruct>({
      key: 'date',
      label: 'Select a date',
      validators: [new RequiredValidator()],
      value: {
        year: 2018,
        month: 3,
        day: 15
      },
      minDate: {
        year: 2018,
        month: 3,
        day: 10
      },
      maxDate: {
        year: 2018,
        month: 3,
        day: 20
      }
    }),
    new NumberElement({
      key: 'number',
      label: 'Just a number',
      // These have to match your locale
      decimalSeparator: '.',
      groupSeparator: ',',
      minIntegerDigits: 1,
      minFractionDigits: 3,
      maxFractionDigits: 6,
      value: 123.54
    })
  ];

  // Function that is called when the form is valid and the user clicks on send
  onSend(formGroup: FormGroup): void {
    console.log(formGroup);
    this.sentValue = JSON.stringify(formGroup.value);
  }

  changeTitle(): void {
    this.dynamicform.options.title = 'Look, a title appeared.';
  }

  changeControlValue(): void {
    this.dynamicform.form.controls.address1.setValue('verySecrectInformation');
  }
}
