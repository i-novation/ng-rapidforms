import {
  Input,
  ViewChild,
  ContentChild,
  TemplateRef,
  AfterContentInit,
  DoCheck,
  IterableDiffers,
  EventEmitter,
  Output,
  IterableDiffer
} from '@angular/core';

import { DynamicFormRow } from './DynamicFormRow';
import { DynamicFormOptions } from './DynamicFormOptions';
import { DynamicformComponent } from '../components/dynamicform/dynamicform.component';
import { TitleDirective } from '../directives/Title.directive';
import { PrimaryButtonDirective } from '../directives/PrimaryButton.directive';
import { GlobalErrorOutputDirective } from '../directives/GlobalErrorOutput.directive';
import { FormRowMultipleElementsDirective } from '../directives/FormRowMultipleElements';
import { FormRowDirective } from '../directives/FormRow.directive';
import { FormGroup } from '@angular/forms';

const READ_TEMPLATED_STATIC = true;

export class DynamicformStyleable implements AfterContentInit, DoCheck {

  @Input()
  public set rows(value: DynamicFormRow[]) {
    this._rows = value;
    if (this.dynamicform) {
      this.dynamicform.rebuildFormGroup();
    }
  }
  public get rows(): DynamicFormRow[] {
    return this._rows;
  }
  private _rows: DynamicFormRow[] = [];

  @Input()
  public options: DynamicFormOptions;
  @Input()
  public onSend: (form: FormGroup) => void;
  @Input()
  public showSendButton = true;
  @Input()
  public submitting = false;
  @Input()
  public submitOnEnter = false;

  public submit: EventEmitter<boolean> = new EventEmitter<boolean>();

  @ViewChild(DynamicformComponent, { static: READ_TEMPLATED_STATIC }) set dynamicform(value: DynamicformComponent) {
    this._dynamicform = value;
    this.formChange.emit(this._dynamicform);
  }
  get dynamicform(): DynamicformComponent {
    return this._dynamicform;
  }
  private _dynamicform: DynamicformComponent;

  @Input() form: DynamicformComponent;
  @Output() formChange: EventEmitter<DynamicformComponent> = new EventEmitter<DynamicformComponent>();

  /**
   * Templates
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

  private iterableDiffer: IterableDiffer<any>;

  constructor(
    private _iterableDiffers: IterableDiffers
  ) {
    this.iterableDiffer = _iterableDiffers.find([]).create(null);
    if (!this.options) {
      this.options = DynamicFormOptions.getDefaultOptions();
    }
    this.submit.subscribe(() => this.dynamicform.onSubmit());
  }

  ngAfterContentInit(): void {
    if (this.titleTemplate) {
      this.dynamicform.titleTemplate = this.titleTemplate;
    }
    if (this.primaryButtonTemplate) {
      this.dynamicform.primaryButtonTemplate = this.primaryButtonTemplate;
    }
    if (this.globalErrorOutputTemplate) {
      this.dynamicform.globalErrorOutputTemplate = this.globalErrorOutputTemplate;
    }
    if (this.formRowMultipleElementsTemplate) {
      this.dynamicform.formRowMultipleElementsTemplate = this.formRowMultipleElementsTemplate;
    }
    if (this.formRowTemplate) {
      this.dynamicform.formRowTemplate = this.formRowTemplate;
    }
  }

  ngDoCheck(): void {
    let changed = false;
    if (this.iterableDiffer.diff(this._rows)) {
      changed = true;
    }
    if (changed) {
      this.dynamicform.rebuildFormGroup();
    }
  }

  public rebuildForm() {
    this.dynamicform.rebuildFormGroup();
  }
}
