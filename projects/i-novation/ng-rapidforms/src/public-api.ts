// Export the core module
export * from './lib/ng-rapidforms.module';

// Export the components
export * from './lib/components/dynamicform/dynamicform.component';
export * from './lib/components/dynamicformelement/dynamicformelement.component';

// Export the different styles
// Bootstrap
// V3
export * from './lib/templates/bootstrap/v3/dynamicform-bootstrap-3.component';
export * from './lib/templates/bootstrap/v3/dynamicformelement-bootstrap-3.component';
// V4
export * from './lib/templates/bootstrap/v4/dynamicform-bootstrap-4.component';
export * from './lib/templates/bootstrap/v4/dynamicformelement-bootstrap-4.component';
// Spectre.css
export * from './lib/templates/spectre/dynamicform-spectre.component';
export * from './lib/templates/spectre/dynamicformelement-spectre.component';

// Export the models
export * from './lib/models/DynamicFormRow';
export * from './lib/models/DynamicFormOptions';
export * from './lib/models/DynamicFormElement';
export * from './lib/models/DynamicFormElementGroup';
export * from './lib/models/DynamicFormStyleable';
export * from './lib/models/DynamicFormElementStyleable';

// Export the elements
export * from './lib/models/elements/CheckboxElement';
export * from './lib/models/elements/CustomElement';
export * from './lib/models/elements/OptionElement';
export * from './lib/models/elements/PasswordElement';
export * from './lib/models/elements/RadioElement';
export * from './lib/models/elements/TextboxElement';
export * from './lib/models/elements/TextareaElement';
export * from './lib/models/elements/DatePickerElement';
export * from './lib/models/elements/NumberElement';
export * from './lib/models/elements/TemplateElement';

// Export the service
export * from './lib/services/DynamicFormElementControl.service';

// Export the validators
export * from './lib/models/validators/BooleanValidator';
export * from './lib/models/validators/CustomValidator';
export * from './lib/models/validators/EmailValidator';
export * from './lib/models/validators/IntegerValidator';
export * from './lib/models/validators/IpValidator';
export * from './lib/models/validators/MatchValidator';
export * from './lib/models/validators/MaxLengthValidator';
export * from './lib/models/validators/MinLengthValidator';
export * from './lib/models/validators/MaxValidator';
export * from './lib/models/validators/MinValidator';
export * from './lib/models/validators/NumberValidator';
export * from './lib/models/validators/RequiredValidator';
export * from './lib/models/validators/TestValidator';
export * from './lib/models/validators/UrlValidator';
export * from './lib/models/validators/RegexValidator';

// Export the directives
export * from './lib/directives/CheckboxElement.directive';
export * from './lib/directives/CustomElement.directive';
export * from './lib/directives/Description.directive';
export * from './lib/directives/ErrorOutput.directive';
export * from './lib/directives/FormRow.directive';
export * from './lib/directives/FormRowMultipleElements';
export * from './lib/directives/GlobalErrorOutput.directive';
export * from './lib/directives/Label.directive';
export * from './lib/directives/OptionElement.directive';
export * from './lib/directives/PasswordElement.directive';
export * from './lib/directives/PrimaryButton.directive';
export * from './lib/directives/RadioElement.directive';
export * from './lib/directives/TextboxElement.directive';
export * from './lib/directives/Title.directive';
export * from './lib/directives/TextareaElement.directive';
export * from './lib/directives/DatePickerElement.directive';
export * from './lib/directives/NumberElement.directive';
