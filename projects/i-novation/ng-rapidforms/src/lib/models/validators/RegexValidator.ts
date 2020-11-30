import { Validators, ValidatorFn } from '@angular/forms';
import { CustomValidator } from './CustomValidator';

/**
 * Used to validate an input field based on a regular expression.
 */
export class RegexValidator implements CustomValidator {
  message: string;
  rule: ValidatorFn;
  error: string;
  regex: string | RegExp;

  getFormattedMessage() {
    this.message = this.message.replace('{{regex}}', this.regex.toString());
    return this.message;
  }

  constructor(regex: string | RegExp, message?: string) {
    this.regex = regex;
    this.message = message || '{{attribute}} has to match the regular expression \'{{regex}}\'';
    this.rule = Validators.pattern(this.regex);
    this.error = 'pattern';
  }
}
