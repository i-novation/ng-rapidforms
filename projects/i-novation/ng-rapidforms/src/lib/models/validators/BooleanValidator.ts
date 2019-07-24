import { Validators, ValidatorFn } from '@angular/forms';
import { CustomValidator } from './CustomValidator';

/**
 * Used to validate an input field with two possible values.
 * Based on the Yii 2 Framework Boolean validator rule.
 */
export class BooleanValidator implements CustomValidator {
  message: string;
  rule: ValidatorFn;
  error: string;
  trueValue: string;
  falseValue: string;

  getFormattedMessage() {
    this.message = this.message.replace('{{trueValue}}', this.trueValue);
    this.message = this.message.replace('{{falseValue}}', this.falseValue);
    return this.message;
  }

  constructor(message?: string, trueValue?: string, falseValue?: string) {
    this.trueValue = trueValue || 'true';
    this.falseValue = falseValue || 'false';
    this.message = message || '{{attribute}} has to be {{trueValue}} or {{falseValue}}.';
    this.rule = Validators.pattern('(' + this.falseValue + '|' + this.trueValue + ')');
    this.error = 'pattern';
  }
}
