import { Component, ViewChild, TemplateRef, AfterViewInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import {
  DynamicFormRow,
  TextboxElement,
  DatePickerElement,
  DynamicformComponent,
  RequiredValidator,
  NumberElement,
  CheckboxElement,
  OptionElement,
  TemplateElement,
} from '@i-novation/ng-rapidforms';

import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'tst-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('templateTemplate')
  templateTemplate: TemplateRef<any> = null;

  // Last sent value for display in template
  sentValue: string;

  // Access to the FormGroup, templates, etc.
  private _dynamicform: DynamicformComponent;
  get dynamicform(): DynamicformComponent {
    return this._dynamicform;
  }
  set dynamicform(form: DynamicformComponent) {
    this._dynamicform = form;
    this.onFormChange();
  }

  templateElement = new TemplateElement({
    key: 'template',
    label: 'Template',
    value: 'testValue',
  }, { template: this.templateTemplate });

  // Descriptive array for the form-components
  rows: DynamicFormRow[] = [
    new TextboxElement({
      changed: this.logValChange.bind(this),
      key: 'address',
      label: 'Address',
      placeholder: 'Please enter something. Or not. I am a placeholder, not a cop.',
      validators: []
    }),
    new DatePickerElement<NgbDateStruct>({
      changed: this.logValChange.bind(this),
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
      changed: this.logValChange.bind(this),
      key: 'number',
      label: 'Just a number',
      // These have to match your locale
      decimalSeparator: '.',
      groupSeparator: ',',
      minIntegerDigits: 1,
      minFractionDigits: 3,
      maxFractionDigits: 6,
      value: 123.54
    }),
    new CheckboxElement({
      changed: this.logValChange.bind(this),
      key: 'check',
      label: 'Just a checkbox',
      description: 'Check me if you can, I am the checker, man',
      value: false,
    }),
    new OptionElement({
      changed: this.logValChange.bind(this),
      key: 'trueFalse',
      options: [
        { key: 'followtrueStat', value: 'The following statement is true.', selected: true },
        { key: 'prevFalseStat', value: 'The previous statement is false.' },
      ]
    }),
    this.templateElement
  ];

  ngAfterViewInit(): void {
    this.templateElement.setTemplate({ template: this.templateTemplate });
  }

  onFormChange(): void {
    this.dynamicform.formUpdated.subscribe(val => console.log('formGroup was updated', val));
  }

  logValChange(val: any) {
    console.log(val);
  }

  logElement(prefix: string, value: any): void {
    console.log(prefix, value);
  }

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
