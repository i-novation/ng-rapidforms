import { DynamicFormElement, DynamicFormElementOptions } from '../DynamicFormElement';

/**
 * Element to inject custom HTML into a form
 */
export class CustomElement extends DynamicFormElement<string> {
    controlType = 'custom';
    html: string;

    constructor(options: DynamicFormElementOptions<string> = {}, html?: string) {
        super(options);
        this.html = html || '';
    }
}
