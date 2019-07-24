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
        const group: any = {};
        let validators: ValidatorFn[];
        validators = new Array();

        const controls = formGroup ? formGroup.controls : [];

        if (rows) {
          // Loop over each row of the form
          rows.forEach(row => {
              // Is the row a group of multiple field?
              if (row.rowType === 'group') {
                  const line = row as DynamicFormElementGroup;
                  const elements = line.fields;
                  elements.forEach(element => {
                      element.validators.forEach(validator => {
                          validators.push(validator.rule);
                      });

                      group[element.key] = new FormControl(controls[element.key] ? controls[element.key].value : element.value, validators);
                      validators = new Array();
                  });
                  // Just one field
              } else if (row.rowType === 'element') {
                  const element = row as DynamicFormElement<any>;
                  element.validators.forEach(validator => {
                      validators.push(validator.rule);
                  });

                 group[element.key] = new FormControl(controls[element.key] ? controls[element.key].value : element.value, validators);

                 validators = new Array();
              }
          });
        }

        return new FormGroup(group);
    }
}
