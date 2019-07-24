import { Validators, ValidatorFn } from '@angular/forms';
import { CustomValidator } from './CustomValidator';

/**
 * Used for validation of emails, but it uses the angular built-in validator function that does not allow the field to be empty.
 */
export class EmailValidator implements CustomValidator {
  message: string;
  rule: ValidatorFn;
  error: string;

  getFormattedMessage() {
    return this.message;
  }

  constructor(message?: string) {
    this.message = message || '{{attribute}} has to be a valid email.';
    this.rule = Validators.email;
    this.error = 'email';
  }
}
