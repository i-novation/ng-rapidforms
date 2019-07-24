import { Validators, ValidatorFn } from '@angular/forms';
import { CustomValidator } from './CustomValidator';

/**
 * Used to validate an input field for a given maximum.
 */
export class MaxLengthValidator implements CustomValidator {
  message: string;
  rule: ValidatorFn;
  error: string;
  maxLength: number;

  getFormattedMessage() {
    this.message = this.message.replace('{{maxLength}}', this.maxLength.toString());
    return this.message;
  }

  constructor(maxLength: number, message?: string) {
    this.message = message || '{{attribute}} has a maximum length of {{maxLength}} characters.';
    this.maxLength = maxLength;
    this.rule = Validators.maxLength(this.maxLength);
    this.error = 'maxlength';
  }
}
