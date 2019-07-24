import { Validators, ValidatorFn } from '@angular/forms';
import { CustomValidator } from './CustomValidator';

/**
 * Used to validate an input field as an integer.
 * Based on the Yii 2 Framework Integer validator rule.
 */
export class IntegerValidator implements CustomValidator {
  message: string;
  rule: ValidatorFn;
  error: string;

  getFormattedMessage() {
    return this.message;
  }

  constructor(message?: string) {
    this.message = message || '{{attribute}} must be a valid integer.';
    this.rule = Validators.pattern('[0-9]+');
    this.error = 'pattern';
  }
}
