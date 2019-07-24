import { Validators, ValidatorFn } from '@angular/forms';
import { CustomValidator } from './CustomValidator';

/**
 * Used to validate an input field for a given minimum length.
 */
export class MinValidator implements CustomValidator {
  message: string;
  rule: ValidatorFn;
  error: string;
  min: number;

  getFormattedMessage() {
    this.message = this.message.replace('{{min}}', this.min.toString());
    return this.message;
  }

  constructor(min: number, message?: string) {
    this.message = message || '{{attribute}} has a minimum length of {{min}} characters.';
    this.min = min;
    this.rule = Validators.min(this.min);
    this.error = 'min';
  }
}
