import { DynamicFormElement, DynamicFormElementOptions } from '../DynamicFormElement';

/**
 * Checkbox element
 */
export class CheckboxElement extends DynamicFormElement<string> {
    controlType = 'checkbox';
    constructor(options: DynamicFormElementOptions<string> = {}) {
        super(options);
    }
}
