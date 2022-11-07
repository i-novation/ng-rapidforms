import { Component, OnInit, Input, EventEmitter, ContentChild, TemplateRef } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';

import { DynamicFormElementControlService } from '../../services/DynamicFormElementControl.service';
import { DynamicFormRow } from '../../models/DynamicFormRow';
import { DynamicFormOptions } from '../../models/DynamicFormOptions';
import { TitleDirective } from '../../directives/Title.directive';
import { PrimaryButtonDirective } from '../../directives/PrimaryButton.directive';
import { GlobalErrorOutputDirective } from '../../directives/GlobalErrorOutput.directive';
import { FormRowMultipleElementsDirective } from '../../directives/FormRowMultipleElements';
import { FormRowDirective } from '../../directives/FormRow.directive';
import { DynamicFormElement } from '../../models/DynamicFormElement';
import { DynamicFormElementGroup } from '../../models/DynamicFormElementGroup';

const READ_TEMPLATED_STATIC = false;

@Component({
  selector: 'nrf-dynamic-form',
  templateUrl: './dynamicform.component.html',
  providers: [DynamicFormElementControlService]
})
export class DynamicformComponent implements OnInit {

  // Rows of the Form
  private _rows: DynamicFormRow[];
  @Input('rows')
  public set rows(value: DynamicFormRow[]) {
    this._rows = value;
    this.rebuildFormGroup();
  }
  public get rows() {
    return this._rows;
  }

  @Input()
  options: DynamicFormOptions;
  @Input()
  onSend: (fg: UntypedFormGroup) => any;
  @Input()
  showSendButton = true;
  @Input()
  submitting = false;
  @Input()
  submitOnEnter = false;

  form: UntypedFormGroup;
  submit: EventEmitter<boolean> = new EventEmitter<boolean>();
  formUpdated: EventEmitter<UntypedFormGroup> = new EventEmitter<UntypedFormGroup>();

  /**
   * Templates and Directives
   */
  @ContentChild(TitleDirective, { static: READ_TEMPLATED_STATIC, read: TemplateRef })
  titleTemplate: TemplateRef<any>;
  @ContentChild(PrimaryButtonDirective, { static: READ_TEMPLATED_STATIC, read: TemplateRef })
  primaryButtonTemplate: TemplateRef<any>;
  @ContentChild(GlobalErrorOutputDirective, { static: READ_TEMPLATED_STATIC, read: TemplateRef })
  globalErrorOutputTemplate: TemplateRef<any>;
  @ContentChild(FormRowMultipleElementsDirective, { static: READ_TEMPLATED_STATIC, read: TemplateRef })
  formRowMultipleElementsTemplate: TemplateRef<any>;
  @ContentChild(FormRowDirective, { static: READ_TEMPLATED_STATIC, read: TemplateRef })
  formRowTemplate: TemplateRef<any>;

  constructor(private dfecs: DynamicFormElementControlService) {
    if (!this.options) {
      this.options = DynamicFormOptions.getDefaultOptions();
    }
    this.showSendButton = true;
  }

  /**
   * Function that is called on Initialisation
   */
  ngOnInit() {
    if (!this.options) {
      this.options = DynamicFormOptions.getDefaultOptions();
    }
  }

  /**
   * Function called when the form is submitted
   */
  onSubmit() {
    if (this.form.valid) {
      if (this.onSend) {
        this.onSend(this.form);
      }
    } else {
      Object.keys(this.form.controls).forEach(key => {
          this.form.get(key).markAsTouched();
      });
    }
  }

  /**
   * Function that is called when the user presses enter
   */
  onEnter() {
    if (this.submitOnEnter) {
      this.onSubmit();
    }
  }

  /**
   * Tests an element for an given error
   * @param error the error the element should be tested for
   * @param element the element that should be tested
   */
  isInvalidForError(error: string, element: any): any {
    if (!this.form.controls[element.key]) {
      return false;
    }
    if (this.form.controls[element.key].untouched && this.form.controls[element.key].pristine) {
      return false;
    }
    return this.form.controls[element.key].getError(error);
  }

  /**
   * Replaces the dynamic values for a error message
   * @param message The message whose attributes should be replaced
   * @param element The element the validation message is for
   */
  replaceDynamicAttributes(message: string, element: any) {
    message = message.replace('{{attribute}}', element.label);
    message = message.replace('{{value}}', this.form.controls[element.key].value);
    return message;
  }

  /**
   * Converts a Form Row into an element
   * @param element The input row
   */
  public asElement(element: DynamicFormRow) {
    return element as DynamicFormElement<any>;
  }

  /**
   * Converts a Form Row into an group
   * @param element The input row
   */
  public asGroup(element: DynamicFormRow) {
    return element as DynamicFormElementGroup;
  }

  public hasAnyErrors(): boolean {
    let error = false;
    this.rows.forEach((row) => {
      if (row.rowType === 'element') {
        this.asElement(row).validators.forEach((validator) => {
          if (this.isInvalidForError(validator.error, this.asElement(row))) {
            error = true;
            return error;
          }
        });
      } else {
        this.asGroup(row).fields.forEach((field) => {
          field.validators.forEach((validator) => {
            if (this.isInvalidForError(validator.error, field)) {
              error = true;
              return error;
            }
          });
        });
      }
    });
    return error;
  }

  public rebuildFormGroup(emitEvent = true): void {
    this.form = this.dfecs.toFormGroup(this._rows, this.form);
    if (emitEvent) {
      this.formUpdated.emit(this.form);
    }
  }
}
