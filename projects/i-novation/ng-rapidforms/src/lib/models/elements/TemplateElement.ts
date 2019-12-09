import { DynamicFormElement, DynamicFormElementOptions } from '../DynamicFormElement';
import { TemplateRef, EventEmitter } from '@angular/core';

/**
 * A control that can be rendered with its own template
 */
export class TemplateElement extends DynamicFormElement<string> {
  controlType = 'template';
  hasPlaceholders = true;
  type = 'text';
  template: TemplateContext;
  templateUpdated: EventEmitter<TemplateContext> = new EventEmitter();

  constructor(options: DynamicFormElementOptions<string> = {}, template?: TemplateContext) {
    super(options);
    this.type = options.type || 'text';
    if (template) {
      this.setTemplate(template);
    }
  }

  setTemplate(template: TemplateContext): void {
    this.template = template;
    this.templateUpdated.emit(this.template);
  }
}

export interface TemplateContext {
  template: TemplateRef<any>;
}
