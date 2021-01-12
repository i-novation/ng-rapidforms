import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

import { NumberElement } from '@i-novation/ng-rapidforms';

export class NumberElementErrorStateMatcher implements ErrorStateMatcher {
  constructor(private field: NumberElement) { }

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return !!(form.form.controls[this.field.key].errors);
  }
}

export class MaterialNumberElement extends NumberElement {
  matcher = new NumberElementErrorStateMatcher(this);
}
