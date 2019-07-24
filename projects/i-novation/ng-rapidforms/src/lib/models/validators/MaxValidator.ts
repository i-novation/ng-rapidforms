import { Validators, ValidatorFn } from '@angular/forms';
import { CustomValidator } from './CustomValidator';

/**
 * Used to validate an input field for a given maximum length.
 */
export class MaxValidator implements CustomValidator {
  message: string;
  rule: ValidatorFn;
  error: string;
  max: number;

  getFormattedMessage() {
    this.message = this.message.replace('{{max}}', this.max.toString());
    return this.message;
  }

  constructor(max: number, message?: string) {
    this.message = message || '{{attribute}} has a maximum value of {{max}}.';
    this.max = max;
    this.rule = Validators.max(this.max);
    this.error = 'max';
  }
}
