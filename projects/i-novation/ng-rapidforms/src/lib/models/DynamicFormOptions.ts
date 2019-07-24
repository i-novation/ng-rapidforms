export class DynamicFormOptions {

    static defaultOptions: DynamicFormOptions = DynamicFormOptions.getDefaultOptions();

    static aboveTitle = 'aboveTitle';
    static belowTitle = 'belowTitle';
    static aboveSubmit = 'aboveSubmit';
    static belowSubmit = 'belowSubmit';

    aboveTitle = DynamicFormOptions.aboveTitle;
    belowTitle = DynamicFormOptions.belowTitle;
    aboveSubmit = DynamicFormOptions.aboveSubmit;
    belowSubmit = DynamicFormOptions.belowSubmit;

    title = '';
    summarizedErrorMessage = false;
    placeholders = false;
    primaryButtonText = 'Save';
    primaryButtonClass = '';
    primaryButtonMaterialColor = 'primary';
    primaryButtonMaterialType: MaterialButtonType = 'mat-button';
    displaySummarizedErrorsPosition: string = this.belowSubmit;

    constructor(options: DynamicFormOptionsOptions = {}) {
        if (DynamicFormOptions.defaultOptions) {
          this.title = DynamicFormOptions.defaultOptions.title;
          this.summarizedErrorMessage = DynamicFormOptions.defaultOptions.summarizedErrorMessage;
          this.placeholders = DynamicFormOptions.defaultOptions.placeholders;
          this.primaryButtonText = DynamicFormOptions.defaultOptions.primaryButtonText;
          this.primaryButtonClass = DynamicFormOptions.defaultOptions.primaryButtonClass;
          this.primaryButtonMaterialColor = DynamicFormOptions.defaultOptions.primaryButtonMaterialColor;
          this.primaryButtonMaterialType = DynamicFormOptions.defaultOptions.primaryButtonMaterialType;
          this.displaySummarizedErrorsPosition = DynamicFormOptions.defaultOptions.displaySummarizedErrorsPosition;
        }

        this.title = !!options.title ? options.title : this.title;
        this.summarizedErrorMessage = !!options.summarizedErrorMessage ? options.summarizedErrorMessage : this.summarizedErrorMessage;
        this.placeholders = !!options.placeholders ? options.placeholders : this.placeholders;
        this.primaryButtonText = !!options.primaryButtonText ? options.primaryButtonText : this.primaryButtonText;
        this.primaryButtonClass = !!options.primaryButtonClass ? options.primaryButtonClass : this.primaryButtonClass;
        this.primaryButtonMaterialColor =
          !!options.primaryButtonMaterialColor ? options.primaryButtonMaterialColor : this.primaryButtonMaterialColor;
        this.primaryButtonMaterialType
          = !!options.primaryButtonMaterialType ? options.primaryButtonMaterialType : this.primaryButtonMaterialType;
        this.displaySummarizedErrorsPosition
          = !!options.displaySummarizedErrorsPosition ? options.displaySummarizedErrorsPosition : this.displaySummarizedErrorsPosition;
    }

  public static setDefaultOptions(options: DynamicFormOptions) {
    this.defaultOptions = options;
  }

  public static getDefaultOptions() {
    if (!DynamicFormOptions.defaultOptions) {
      this.defaultOptions = new DynamicFormOptions();
    }
    return DynamicFormOptions.defaultOptions;
  }
}
export type MaterialButtonType = 'mat-button' | 'mat-raised-button' | 'mat-stroked-button' | 'mat-flat-button';

export interface DynamicFormOptionsOptions {
  title?: string;
  summarizedErrorMessage?: boolean;
  placeholders?: boolean;
  primaryButtonText?: string;
  displaySummarizedErrorsPosition?: string;
  primaryButtonClass?: string;
  primaryButtonMaterialColor?: string;
  primaryButtonMaterialType?: MaterialButtonType;
}
