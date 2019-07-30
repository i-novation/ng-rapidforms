import { DynamicFormElement, DynamicFormElementOptions } from '../DynamicFormElement';

/**
 * Checkbox element
 */
export class CheckboxElement extends DynamicFormElement<boolean|any> {
    controlType = 'checkbox';
    constructor(options: DynamicFormElementOptions<boolean|any> = {}) {
        super(options);
    }
}
