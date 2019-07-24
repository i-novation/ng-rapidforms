import { ValidatorFn } from '@angular/forms';

/**
 * Each validator must implement this interface
 */
export interface CustomValidator {
  message: string;
  rule: ValidatorFn;
  error: string;

  getFormattedMessage(): any;
}
