import { DynamicFormRow } from './DynamicFormRow';
import { DynamicFormElement } from './DynamicFormElement';

export class DynamicFormElementGroup implements DynamicFormRow {

    public rowType = 'group';
    public fields: DynamicFormElement<any>[];

    constructor(options: DynamicFormElementGroupOptions = {}) {
        this.fields = options.fields;
    }
}

export interface DynamicFormElementGroupOptions {
  fields?: DynamicFormElement<any>[];
}
