import { Validators, ValidatorFn } from '@angular/forms';
import { CustomValidator } from './CustomValidator';

/**
 * Used to validate an input field for a given minimum.
 */
export class MinLengthValidator implements CustomValidator {
  message: string;
  rule: ValidatorFn;
  error: string;
  minLength: number;

  getFormattedMessage() {
    this.message = this.message.replace('{{minLength}}', this.minLength.toString());
    return this.message;
  }

  constructor(minLength: number, message?: string) {
    this.message = message || '{{attribute}} has a minium length of {{min}} characters.';
    this.minLength = minLength;
    this.rule = Validators.minLength(this.minLength);
    this.error = 'minlength';
  }
}
