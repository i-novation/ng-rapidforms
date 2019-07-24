import { DynamicFormElement, DynamicFormElementOptions } from '../DynamicFormElement';

/**
 * Password field with predefined control type
 */
export class PasswordElement extends DynamicFormElement<string> {
    controlType = 'password';
    hasPlaceholders = true;
    type = 'password';

    constructor(options: DynamicFormElementOptions<string> = {}) {
        super(options);
        this.type = options.type || 'password';
    }
}
