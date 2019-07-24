import { Input, ViewChild, ContentChild, TemplateRef, AfterContentInit } from '@angular/core';

import { DynamicFormElement } from './DynamicFormElement';
import { FormGroup } from '@angular/forms';
import { DynamicFormOptions } from './DynamicFormOptions';
import { DynamicformelementComponent } from '../components/dynamicformelement/dynamicformelement.component';
import { TextboxElementDirective } from '../directives/TextboxElement.directive';
import { TextareaElementDirective } from '../directives/TextareaElement.directive';
import { CheckboxElementDirective } from '../directives/CheckboxElement.directive';
import { CustomElementDirective } from '../directives/CustomElement.directive';
import { OptionElementDirective } from '../directives/OptionElement.directive';
import { PasswordElementDirective } from '../directives/PasswordElement.directive';
import { RadioElementDirective } from '../directives/RadioElement.directive';
import { DescriptionDirective } from '../directives/Description.directive';
import { ErrorOutputDirective } from '../directives/ErrorOutput.directive';
import { LabelDirective } from '../directives/Label.directive';

const READ_TEMPLATED_STATIC = true;

export class DynamicformelementStyleable implements AfterContentInit {

  @Input() element: DynamicFormElement<any>;
  @Input() form: FormGroup;
  @Input() options: DynamicFormOptions;

  @ViewChild(DynamicformelementComponent, { static: READ_TEMPLATED_STATIC })
  public dynamicformelement: DynamicformelementComponent;

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
  @ContentChild(RadioElementDirective, { static: READ_TEMPLATED_STATIC, read: TemplateRef })
  datePickerElementTemplate: TemplateRef<any>;

  @ContentChild(DescriptionDirective, { static: READ_TEMPLATED_STATIC, read: TemplateRef })
  descriptionTemplate: TemplateRef<any>;
  @ContentChild(ErrorOutputDirective, { static: READ_TEMPLATED_STATIC, read: TemplateRef })
  errorOutputTemplate: TemplateRef<any>;
  @ContentChild(LabelDirective, { static: READ_TEMPLATED_STATIC, read: TemplateRef })
  labelTemplate: TemplateRef<any>;

  ngAfterContentInit(): void {
    if (this.textboxElementTemplate) {
      this.dynamicformelement.textboxElementTemplate = this.textboxElementTemplate;
    }
    if (this.textareaElementTemplate) {
      this.dynamicformelement.textareaElementTemplate = this.textareaElementTemplate;
    }
    if (this.checkboxElementTemplate) {
      this.dynamicformelement.checkboxElementTemplate = this.checkboxElementTemplate;
    }
    if (this.customElementTemplate) {
      this.dynamicformelement.customElementTemplate = this.customElementTemplate;
    }
    if (this.optionElementTemplate) {
      this.dynamicformelement.optionElementTemplate = this.optionElementTemplate;
    }
    if (this.passwordElementTemplate) {
      this.dynamicformelement.passwordElementTemplate = this.passwordElementTemplate;
    }
    if (this.radioElementTemplate) {
      this.dynamicformelement.radioElementTemplate = this.radioElementTemplate;
    }
    if (this.datePickerElementTemplate) {
      this.dynamicformelement.datePickerElementTemplate = this.datePickerElementTemplate;
    }

    if (this.descriptionTemplate) {
      this.dynamicformelement.descriptionTemplate = this.descriptionTemplate;
    }
    if (this.errorOutputTemplate) {
      this.dynamicformelement.errorOutputTemplate = this.errorOutputTemplate;
    }
    if (this.labelTemplate) {
      this.dynamicformelement.labelTemplate = this.labelTemplate;
    }
  }
}
