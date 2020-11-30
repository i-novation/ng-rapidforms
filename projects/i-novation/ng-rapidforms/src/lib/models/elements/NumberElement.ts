import { formatNumber } from '@angular/common';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';

import { DynamicFormElement, DynamicFormElementOptions } from '../DynamicFormElement';
import { ErrorStateMatcher } from '@angular/material/core';

export class NumberElementErrorStateMatcher implements ErrorStateMatcher {
  constructor(private field: NumberElement) {}

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return !!(form.form.controls[this.field.key].errors);
  }
}

/**
 * Basic Textbox element for use with different types of input
 */
export class NumberElement extends DynamicFormElement<number> {
  controlType = 'numberbox';
  hasPlaceholders = true;
  type = 'text';
  numberInputValidationPattern = /[0-9\.\,]/;

  minIntegerDigits = 1;
  minFractionDigits = 2;
  maxFractionDigits = 2;
  decimalSeparator = '.';
  groupSeparator = ',';

  value: number;

  locale = 'en';

  matcher = new NumberElementErrorStateMatcher(this);

  constructor(options: NumberElementOptions = {}) {
    super(options);
    this.type = options.type || 'text';
    this.minIntegerDigits = options.minIntegerDigits || this.minIntegerDigits;
    this.minFractionDigits = options.minFractionDigits || this.minFractionDigits;
    this.maxFractionDigits = options.maxFractionDigits || this.maxFractionDigits;
    this.decimalSeparator = options.decimalSeparator || this.decimalSeparator;
    this.groupSeparator = options.groupSeparator || this.groupSeparator;
    this.numberInputValidationPattern = options.numberInputValidationPattern || this.numberInputValidationPattern;
    this.locale = options.locale || this.locale;
    this.value = options.value;
  }

  /**
   * Ignores invalid input characters in the quantity property
   */
  ignoreInvalidNumberInput = (e: any) => {
    const inputChar = String.fromCharCode(e.charCode);
    if (!this.numberInputValidationPattern.test(inputChar)) {
      e.preventDefault();
    }
  }

  /**
   * Parses a number string based in the provided seperators
   * @param input The string that should be converted
   * @param decimalSep The seperator for the decimals
   * @param groupSep The seperator for groups
   */
  parseNumberFromString(input: string, decimalSep: string, groupSep: string): number {
    const decimalSepRe = new RegExp('\\' + decimalSep, 'g');
    const groupSepRe = new RegExp('\\' + groupSep, 'g');
    return Math.floor(parseFloat(input.replace(groupSepRe, '').replace(decimalSepRe, '.')) * Math.pow(10, this.maxFractionDigits))
      / Math.pow(10, this.maxFractionDigits);
  }

  updateValue(formControl: FormControl, event): void {
    // Parse the input
    if (event.target.value) {
      this.value = this.parseNumberFromString(event.target.value, this.decimalSeparator, this.groupSeparator);
      formControl.setValue(this.value,
        { emitEvent: false });
    } else {
      this.value = null;
      formControl.setValue('', { emitEvent: false });
    }
    this.validate(formControl);
    if (this.changed) {
      this.changed(formControl.value);
    }
    event.target.value = formatNumber(this.value, this.locale,
      `${this.minIntegerDigits}.${this.minFractionDigits}-${this.maxFractionDigits}`);
  }

  validate(formControl: FormControl): void {
    formControl.markAsTouched();
  }
}

export interface NumberElementOptions extends DynamicFormElementOptions<number> {
  minIntegerDigits?: number;
  minFractionDigits?: number;
  maxFractionDigits?: number;
  decimalSeparator?: string;
  groupSeparator?: string;
  locale?: string;
  numberInputValidationPattern?: RegExp;
}
