import { Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { CustomValidator } from './CustomValidator';

/**
 * TEST VALIDATOR - Should be remove after testing
 */
export class TestValidator implements CustomValidator {
  message: string;
  rule: ValidatorFn;
  error: string;

  getFormattedMessage() {
    return this.message;
  }

  constructor(message?: string) {
    this.message = message || 'This is not valid.';
    this.rule = testValidator(1, 5);
    this.error = 'test';
  }
}

export function testValidator(minlength: number, maxlength: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    const rightLength = ((control.value) as string).length < maxlength && ((control.value) as string).length > minlength;
    return rightLength ? null : { test: { value: control.value } };
  };
}
