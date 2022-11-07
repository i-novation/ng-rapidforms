import { Component, Input, ContentChild, TemplateRef, OnInit, ChangeDetectorRef } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';

import { DynamicFormElement } from '../../models/DynamicFormElement';
import { DynamicFormOptions } from '../../models/DynamicFormOptions';
import { TextboxElementDirective } from '../../directives/TextboxElement.directive';
import { TextareaElementDirective } from '../../directives/TextareaElement.directive';
import { CheckboxElementDirective } from '../../directives/CheckboxElement.directive';
import { CustomElementDirective } from '../../directives/CustomElement.directive';
import { OptionElementDirective } from '../../directives/OptionElement.directive';
import { PasswordElementDirective } from '../../directives/PasswordElement.directive';
import { RadioElementDirective } from '../../directives/RadioElement.directive';
import { DatePickerElementDirective } from '../../directives/DatePickerElement.directive';
import { DescriptionDirective } from '../../directives/Description.directive';
import { ErrorOutputDirective } from '../../directives/ErrorOutput.directive';
import { LabelDirective } from '../../directives/Label.directive';
import { NumberElementDirective } from '../../directives/NumberElement.directive';
import { TemplateElementDirective } from '../../directives/TemplateElement.directive';
import { TemplateElement, TemplateContext } from '../../models/elements/TemplateElement';

const READ_TEMPLATED_STATIC = false;

@Component({
  selector: 'nrf-df-element',
  templateUrl: './dynamicformelement.component.html'
})
export class DynamicformelementComponent implements OnInit {

  @Input() element: DynamicFormElement<any>;
  @Input() form: UntypedFormGroup;
  @Input() options: DynamicFormOptions;

  template: TemplateRef<any>;

  /**
   * Templates and Directives
   */
  @ContentChild(TextboxElementDirective, { static: READ_TEMPLATED_STATIC, read: TemplateRef })
  textboxElementTemplate: TemplateRef<any>;
  @ContentChild(TextareaElementDirective, { static: READ_TEMPLATED_STATIC, read: TemplateRef })
  textareaElementTemplate: TemplateRef<any>;
  @ContentChild(CheckboxElementDirective, { static: READ_TEMPLATED_STATIC, read: TemplateRef })
  checkboxElementTemplate: TemplateRef<any>;
  @ContentChild(CustomElementDirective, { static: READ_TEMPLATED_STATIC, read: TemplateRef })
  customElementTemplate: TemplateRef<any>;
  @ContentChild(OptionElementDirective, { static: READ_TEMPLATED_STATIC, read: TemplateRef })
  optionElementTemplate: TemplateRef<any>;
  @ContentChild(PasswordElementDirective, { static: READ_TEMPLATED_STATIC, read: TemplateRef })
  passwordElementTemplate: TemplateRef<any>;
  @ContentChild(RadioElementDirective, { static: READ_TEMPLATED_STATIC, read: TemplateRef })
  radioElementTemplate: TemplateRef<any>;
  @ContentChild(DatePickerElementDirective, { static: READ_TEMPLATED_STATIC, read: TemplateRef })
  datePickerElementTemplate: TemplateRef<any>;
  @ContentChild(NumberElementDirective, { static: READ_TEMPLATED_STATIC, read: TemplateRef })
  numberElementTemplate: TemplateRef<any>;
  @ContentChild(TemplateElementDirective, { static: READ_TEMPLATED_STATIC, read: TemplateRef })
  templateElementTemplate: TemplateRef<any>;

  @ContentChild(DescriptionDirective, { static: READ_TEMPLATED_STATIC, read: TemplateRef })
  descriptionTemplate: TemplateRef<any>;
  @ContentChild(ErrorOutputDirective, { static: READ_TEMPLATED_STATIC, read: TemplateRef })
  errorOutputTemplate: TemplateRef<any>;
  @ContentChild(LabelDirective, { static: READ_TEMPLATED_STATIC, read: TemplateRef })
  labelTemplate: TemplateRef<any>;

  constructor(private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    if (this.element instanceof TemplateElement) {
      this.element.templateUpdated.subscribe((value: TemplateContext ) => {
        this.template = value.template;
        this.cdRef.detectChanges();
      });
    }
  }

  /**
   * Returns wether the fields value is valid
   */
  get isValid() {
    return this.form.controls[this.element.key].valid;
  }

  /**
   * Returns wether the field is already touched
   */
  get isPristine() {
    return this.form.controls[this.element.key].untouched;
  }

  /**
   *  Tests the element for an given error
   * @param error The error the element should be tested for
   */
  isInvalidForError(error: string) {
    if (this.form.controls[this.element.key].untouched && this.form.controls[this.element.key].pristine) {
      return false;
    }
    return this.form.controls[this.element.key].getError(error);
  }

  /**
   * Replaces the dynamic values for a error message
   * @param message The element the validation message is for
   */
  replaceDynamicAttributes(message: string) {
    message = message.replace('{{attribute}}', this.element.label);
    message = message.replace('{{value}}', this.form.controls[this.element.key].value);
    return message;
  }
}
