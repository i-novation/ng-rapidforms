import { Validators, ValidatorFn } from '@angular/forms';
import { CustomValidator } from './CustomValidator';

/**
 * Used to validate an input field as an URL.
 * Based on the Yii 2 Framework Url validator rule.
 */
export class UrlValidator implements CustomValidator {
  message: string;
  rule: ValidatorFn;
  error: string;

  getFormattedMessage() {
    return this.message;
  }

  constructor(message?: string) {
    this.message = message || '{{attribute}} has to an URL.';
    this.rule = Validators.pattern('/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/');
    this.error = 'pattern';
  }
}
