import { Validators, ValidatorFn } from '@angular/forms';
import { CustomValidator } from './CustomValidator';

/**
 * Used to validate an input field as a number (including seperator chars).
 * Based on the Yii 2 Framework number validator rule.
 */
export class NumberValidator implements CustomValidator {
  message: string;
  rule: ValidatorFn;
  error: string;
  decimalMark: string;
  thousandsMark: string;

  getFormattedMessage() {
    return this.message;
  }

  constructor(message?: string, decimalMark?: string, thousandsMark?: string) {
    this.message = message || '{{attribute}} has to be a valid number.';
    this.decimalMark = decimalMark || ',';
    this.thousandsMark = thousandsMark || '.';
    this.rule = Validators.pattern('[0-9][0-9]?[0-9]?((\\' +
      this.thousandsMark + '[0-9][0-9][0-9])*)(\\' +
      this.decimalMark + '[0-9][0-9]*)?');
    this.error = 'pattern';
  }
}
