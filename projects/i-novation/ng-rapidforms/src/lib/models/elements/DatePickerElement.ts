import { DynamicFormElement, DynamicFormElementOptions } from '../DynamicFormElement';

/**
 * DatePicker element
 */
export class DatePickerElement<T> extends DynamicFormElement<T> {
    controlType = 'datepicker';
    hasPlaceholders = true;
    type = 'text';
    minDate: T;
    maxDate: T;
    markDisabled: boolean;

    constructor(options: DatePickerElementOptions<T> = {}) {
      super(options);
      this.controlType = options.controlType || 'datepicker';
      this.minDate = options.minDate;
      this.maxDate = options.maxDate;
      this.markDisabled = options.markDisabled;
    }
}

export interface DatePickerElementOptions<T> extends DynamicFormElementOptions<T> {
  minDate?: T;
  maxDate?: T;
  markDisabled?: boolean;
}
