import { DynamicFormElement, ElementOption, DynamicFormElementOptions } from '../DynamicFormElement';

/**
 * Drop-Down element with definable options
 */
export class OptionElement extends DynamicFormElement<string> {
  controlType = 'option';
  hasPlaceholders = true;
  options: ElementOption[] = [];

  constructor(options: DynamicFormElementOptions<string> = {}, changed?: (value: any) => any) {
    super(options);
    this.options = options.options || [];
    for (const option of this.options) {
      if (option.selected) {
        this.value = option.key;
      }
    }
    this.changed = changed || options.changed;
  }
}
