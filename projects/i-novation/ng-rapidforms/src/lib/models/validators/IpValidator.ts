import { Validators, ValidatorFn } from '@angular/forms';
import { CustomValidator } from './CustomValidator';

/**
 * Used to validate an input field as an IPv4 address.
 * Based on the Yii 2 Framework IP validator rule.
 */
export class IpValidator implements CustomValidator {
  message: string;
  rule: ValidatorFn;
  error: string;

  getFormattedMessage() {
    return this.message;
  }

  constructor(message?: string) {
    this.message = message || '{{attribute}} has to be a valid IP.';
    this.rule = Validators.pattern('/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/');
    this.error = 'pattern';
  }
}
