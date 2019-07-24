import { DynamicFormElement, DynamicFormElementOptions } from '../DynamicFormElement';

/**
 * Basic Textbox element for use with different types of input
 */
export class TextareaElement extends DynamicFormElement<string> {
    controlType = 'textarea';
    hasPlaceholders = true;
    rows: number;
    cols: number;
    type: string;

    constructor(options: DynamicFormElementOptions<string> = {}) {
        super(options);
        this.type = options.type || '';
        this.rows = options.rows;
        this.cols = options.cols;
    }
}
