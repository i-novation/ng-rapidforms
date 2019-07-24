import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DynamicformComponent } from './components/dynamicform/dynamicform.component';
import { DynamicformelementComponent } from './components/dynamicformelement/dynamicformelement.component';
import { DynamicformBootstrap4Component } from './templates/bootstrap/v4/dynamicform-bootstrap-4.component';
import { DynamicformelementBootstrap4Component } from './templates/bootstrap/v4/dynamicformelement-bootstrap-4.component';
import { DynamicformBootstrap3Component } from './templates/bootstrap/v3/dynamicform-bootstrap-3.component';
import { DynamicformelementBootstrap3Component } from './templates/bootstrap/v3/dynamicformelement-bootstrap-3.component';
import { DynamicformSpectreComponent } from './templates/spectre/dynamicform-spectre.component';
import { DynamicformelementSpectreComponent } from './templates/spectre/dynamicformelement-spectre.component';
import { CheckboxElementDirective } from './directives/CheckboxElement.directive';
import { CustomElementDirective } from './directives/CustomElement.directive';
import { LabelDirective } from './directives/Label.directive';
import { TitleDirective } from './directives/Title.directive';
import { DescriptionDirective } from './directives/Description.directive';
import { FormRowDirective } from './directives/FormRow.directive';
import { FormRowMultipleElementsDirective } from './directives/FormRowMultipleElements';
import { GlobalErrorOutputDirective } from './directives/GlobalErrorOutput.directive';
import { ErrorOutputDirective } from './directives/ErrorOutput.directive';
import { PrimaryButtonDirective } from './directives/PrimaryButton.directive';
import { OptionElementDirective } from './directives/OptionElement.directive';
import { PasswordElementDirective } from './directives/PasswordElement.directive';
import { RadioElementDirective } from './directives/RadioElement.directive';
import { TextboxElementDirective } from './directives/TextboxElement.directive';
import { TextareaElementDirective } from './directives/TextareaElement.directive';
import { DatePickerElementDirective } from './directives/DatePickerElement.directive';
import { NumberElementDirective } from './directives/NumberElement.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    // Forms
    DynamicformComponent,
    DynamicformelementComponent,
    // Formstyles
    // BS 4
    DynamicformBootstrap4Component,
    DynamicformelementBootstrap4Component,
    // BS 3
    DynamicformBootstrap3Component,
    DynamicformelementBootstrap3Component,
    // Spectre
    DynamicformSpectreComponent,
    DynamicformelementSpectreComponent,
    // Directives
    CheckboxElementDirective,
    CustomElementDirective,
    LabelDirective,
    TitleDirective,
    DescriptionDirective,
    FormRowDirective,
    FormRowMultipleElementsDirective,
    GlobalErrorOutputDirective,
    ErrorOutputDirective,
    PrimaryButtonDirective,
    OptionElementDirective,
    PasswordElementDirective,
    RadioElementDirective,
    TextboxElementDirective,
    TextareaElementDirective,
    DatePickerElementDirective,
    NumberElementDirective,
  ],
  exports: [
    // Forms
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    // Rapidforms
    DynamicformComponent,
    DynamicformelementComponent,
    // Formstyles
    // BS 4
    DynamicformBootstrap4Component,
    DynamicformelementBootstrap4Component,
    // BS 3
    DynamicformBootstrap3Component,
    DynamicformelementBootstrap3Component,
    // Spectre
    DynamicformSpectreComponent,
    DynamicformelementSpectreComponent,
    // Directives
    CheckboxElementDirective,
    CustomElementDirective,
    LabelDirective,
    TitleDirective,
    DescriptionDirective,
    FormRowDirective,
    FormRowMultipleElementsDirective,
    GlobalErrorOutputDirective,
    ErrorOutputDirective,
    PrimaryButtonDirective,
    OptionElementDirective,
    PasswordElementDirective,
    RadioElementDirective,
    TextboxElementDirective,
    TextareaElementDirective,
    DatePickerElementDirective,
    NumberElementDirective,
  ]
})
export class RapidformsBasicModule {
}
