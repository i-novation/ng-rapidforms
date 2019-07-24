import { DynamicFormElement, ElementOption, DynamicFormElementOptions } from '../DynamicFormElement';

/**
 * Drop-Down element with definable options
 */
export class OptionElement extends DynamicFormElement<string> {
  controlType = 'option';
  hasPlaceholders = true;
  options: ElementOption[] = [];
  changed: Function = null;

  constructor(options: DynamicFormElementOptions<string> = {}, changed?: Function) {
    super(options);
    this.options = options.options || [];
    this.changed = changed || null;
  }
}
