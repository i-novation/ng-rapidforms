import { Injectable } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn } from '@angular/forms';

import { DynamicFormRow } from '../models/DynamicFormRow';
import { DynamicFormElementGroup } from '../models/DynamicFormElementGroup';
import { DynamicFormElement } from '../models/DynamicFormElement';

/**
 * Converts a given form template into a angular form group with validators
 */
@Injectable()
export class DynamicFormElementControlService {
  constructor() { }

  /**
   * Converts the given rows into a form group
   * @param rows The rows that should be converted
   */
  toFormGroup(rows: DynamicFormRow[], formGroup?: FormGroup) {
    const group: FormControls = {};
    const controls = formGroup ? formGroup.controls : [];
    if (rows) {
      // Loop over each row of the form
      for (const row of rows) {
        // Is the row a group of multiple field?
        if (row.rowType === 'group') {
          const line = row as DynamicFormElementGroup;
          for (const element of line.fields) {
            this.setFormControlValidators(element, group, controls);
          }
          // Just one field
        } else if (row.rowType === 'element') {
          const element = row as DynamicFormElement<any>;
          this.setFormControlValidators(element, group, controls);
        }
      }
    }
    return new FormGroup(group);
  }

  /**
   * Helper method to set the validators for the form element
   * @param element The NRF Element
   * @param group The group of FormControls for already existing elements
   * @param controls The controls array used to create the form group
   */
  private setFormControlValidators(element: DynamicFormElement<any>, group: FormControls, controls: any): void {
    const validators: ValidatorFn[] = [];
    element.validators.forEach(validator => {
      validators.push(validator.rule);
    });
    const formControl = new FormControl(controls[element.key] ? controls[element.key].value : element.value, validators);
    if (element.changed) {
      formControl.valueChanges.subscribe(value => element.changed(value));
    }
    group[element.key] = formControl;
  }
}
interface FormControls { [key: string]: FormControl; }
