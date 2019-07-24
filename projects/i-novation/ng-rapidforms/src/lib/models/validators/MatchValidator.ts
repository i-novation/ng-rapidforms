import { Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { CustomValidator } from './CustomValidator';

/**
 * Used to validate an input field depending on the value of another input field.
 * Based on the Yii 2 Framework Match validator rule.
 *
 * This validator uses a custom validation function in order to do that.
 */
export class MatchValidator implements CustomValidator {
  message: string;
  rule: ValidatorFn;
  error: string;
  compareFieldKey: string;

  getFormattedMessage() {
    return this.message;
  }

  constructor(compareFieldKey: string, message?: string) {
    this.message = message || `This field has to be identical to ${compareFieldKey}.`;
    this.rule = matchValidator(compareFieldKey);
    this.error = 'match';
  }
}

/**
 * Custom validator function to compare the input of the field with the field with the specified key.
 * @param key The key of the field the input field value should match.
 */
export function matchValidator(key: string): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    const group: any = control.parent;
    if (group) {
      const match = ((control.value) as string) === (group.controls[key].value as string);
      return match ? null : { 'match': { value: control.value } };
    } else {
      return { 'match': { value: control.value } };
    }
  };
}
