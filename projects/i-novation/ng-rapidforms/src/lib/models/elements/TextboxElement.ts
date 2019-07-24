import { DynamicFormElement, DynamicFormElementOptions } from '../DynamicFormElement';

/**
 * Basic Textbox element for use with different types of input
 */
export class TextboxElement extends DynamicFormElement<string> {
    controlType = 'textbox';
    hasPlaceholders = true;
    type = 'text';

    constructor(options: DynamicFormElementOptions<string> = {}) {
        super(options);
        this.type = options.type || 'text';
    }
}
