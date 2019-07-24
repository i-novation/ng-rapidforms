import { DynamicFormRow } from './DynamicFormRow';
import { CustomValidator } from './validators/CustomValidator';

export class DynamicFormElement<T> implements DynamicFormRow {
    rowType = 'element';
    value: T;
    key: string;
    label: string;
    order: number;
    controlType: string;
    description: string;
    classes: string;
    hasPlaceholders: boolean;
    validators: CustomValidator[];
    placeholder: string;

    constructor(options: DynamicFormElementOptions<T> = {}) {
        this.value = options.value;
        this.key = options.key || '';
        this.label = options.label || this.capitalizeFirstLetter(this.key);
        this.order = options.order === undefined ? 1 : options.order;
        this.controlType = options.controlType;
        this.description = options.description || '';
        this.classes = options.classes || '';
        this.hasPlaceholders = options.hasPlaceholders;
        this.validators = options.validators || new Array<CustomValidator>();
        this.placeholder = options.placeholder || null;
    }

    private capitalizeFirstLetter = (string: String) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
}

export interface DynamicFormElementOptions<T> {
  value?: T;
  key?: string;
  label?: string;
  order?: number;
  controlType?: string;
  description?: string;
  classes?: string;
  hasPlaceholders?: boolean;
  validators?: CustomValidator[];
  options?: ElementOption[];
  type?: string;
  rows?: number;
  cols?: number;
  placeholder?: string;
}

export interface ElementOption {
  key: string;
  value: string;
  selected?: boolean;
}
