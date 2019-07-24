import { Validators, ValidatorFn } from '@angular/forms';
import { CustomValidator } from './CustomValidator';

/**
 * Used to validate an input field to be filled out.
 * Based on the Yii 2 Framework Required validator rule.
 */
export class RequiredValidator implements CustomValidator {
  message: string;
  rule: ValidatorFn;
  error: string;

  getFormattedMessage() {
    return this.message;
  }

  constructor(message?: string) {
    this.message = message || '{{attribute}} is a required field.';
    this.rule = Validators.required;
    this.error = 'required';
  }
}
