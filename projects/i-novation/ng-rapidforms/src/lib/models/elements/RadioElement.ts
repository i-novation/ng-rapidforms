import { DynamicFormElement, ElementOption, DynamicFormElementOptions } from '../DynamicFormElement';

/**
 * Radio element with definable options
 */
export class RadioElement extends DynamicFormElement<string> {
    controlType = 'radio';
    options: ElementOption[] = [];

    constructor(options: DynamicFormElementOptions<string> = {}, ) {
        super(options);
        this.options = options['options'] || [];
    }
}
