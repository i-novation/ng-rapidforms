# ng-rapidforms

A framework to shrink down the effort that is needed to get a form up and running in angular.
It helps you to minimize your boilerplate code you would have to write for each form in your application.
Also there are templates provided to give your application a clean and uniform look as well as displaying the same error messages throughout all forms.

## What are the advantages?
 - minimized and clean code 
 - minimize effort
 - easy to use
 - uniform design & error messages
 - better maintainability
 - easy switch between bootstrap, spectre.css and angular material

## Whats's the point?

Rapidforms utilizes you to create fast and simple forms for a simple way to interchange data.
It is easy to use in new or existing projects. So you can use it besides known angular form techniques or completely rely on functions provided by this framework.

## Requirements

Tested for versions of Angular >= 8.0.
Compatible for npm >= 10

# Installation

The recommended way of installing Rapidforms is to use npm.
Therefore change to the root folder of your angular project and type

```shell
npm install @i-novation/ng-rapidforms
```

and you are ready to go.

> This will install the framework into the node_modules folder using the latest version published on npm.

# Usage

## First steps

These steps will show you how to get up and running with the framework.

### Import the module into your application

> You have to additionally import the module `RapidformsMaterialModule` if you plan to use the `@angular/material` package for styling
> The same goes for `@ng-bootstrap/ng-bootstrap` with `RapidformsBootstrapNgModule`

> app.module.ts
```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// Import the module
import { RapidformsBasicModule } from '@i-novation/ngx-rapidforms';
import { RapidformsMaterialModule } from '@i-novation/ngx-rapidforms/material';
import { RapidformsBootstrapNgModule } from '@i-novation/ngx-rapidforms/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // Add it to the imports
    RapidformsBasicModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### Setting up a basic form

1. Add a 'nrf-dynamic-form-bootstrap-4' element with styling to your desired Template file (e.g. app.component.html)

```html
<div>
    <nrf-dynamic-form-bootstrap-4></nrf-dynamic-form-bootstrap-4>
</div>
```
You can use four different predefined templates to match your styling:

- nrf-dynamic-form-bootstrap-4
- nrf-dynamic-form-bootstrap-3
- nrf-dynamic-form-spectre
- nrf-dynamic-form-material _(needs the `RapidformsMaterialModule`)_
- nrf-dynamic-form-bootstrap-ng _(needs the `RapidformsBoostrapNgModule`)_

2. Describe your form using an array
```typescript
formRows1: DynamicFormRow[] = [
    new TextboxElement({
        key: "email",
        label: "Email",
        description: "Hint: This is also your username"
    }),
    new PasswordElement({
        key: "password",
        label: "Password"
    })
];
```

3. Refer to the array in the HTML element
```html
<nrf-dynamic-form-bootstrap-4 [rows]="formRows1"></nrf-dynamic-form-bootstrap-4>
```

4. Add a action method
```typescript
public onSubmit(form: FormGroup) 
{
    console.log(form.controls.email.value);
}
```
> You can refer to the element via their name you gave them as a key.

5. Add that method to the HTML element
```html
<nrf-dynamic-form-bootstrap-4 [rows]="formRows1" [onSend]="onSubmit"></nrf-dynamic-form-bootstrap-4>
```

> Depending on wether you use arrow-functions or normal functions you may need to add `.bind(this)` to your function. This is to provide the correct context to your function when you are not using arrow functions.

### Additional options for the form

- `[showSendButton]` enables you to hide the submit button (default: `true`)
- `[submitOnEnter]` enables you to submit the form by pressing enter (default: `false`)

### Add some validators

The values of each field can be validated based on rules defined by validators. You can either use an already existing one, or write one yourself.

```typescript
formRows1: DynamicFormRow[] = [
    new TextboxElement({
        key: "email",
        label: "Email",
        description: "Hint: This is also your username",
        validators: [new EmailValidator()]
    }),
    new PasswordElement({
        key: "password",
        label: "Password",
        validators: [new RequiredValidator(), new MaxLengthValidator(30), new MinLengthValidator(8)]
    })
];
```

### Add options to configure the form _(optional)_

```typescript
//...
options1: DynamicFormOptions = new DynamicFormOptions({
    title: "Login",
    summarizedErrorMessage: false,
    placeholders: true,
    primaryButtonText: "Absenden"
});
//...
``` 

```html
<nrf-dynamic-form-bootstrap-4 [rows]="formRows1" [onSend]="onSubmit" [options]="options1"></nrf-dynamic-form-bootstrap-4>
```

# Field types

|component|class|usage|
|---|---|---|
|text box|TextboxElement.ts|a regular text field|
|radio button|RadioElement.ts|select one out of multiple values|
|password|PasswordElement.ts|spezialized field for passwords|
|textarea|TextareaElement.ts|multiline text field|
|drop-down|OptionElement.ts|select one out of multiple values|
|checkbox|CheckboxElement.ts|a regular checkbox|
|custom html|CustomElement.ts|can be used to insert custom html into the form|
|date picker|DatePickerElement.ts|a datepicker element (currently only supported in ng-bootstrap version)|
|number element|NumberElement.ts|a field for numeric inputs (only in ng-bootstrap and bootstrap-4 versions)|

## Structure and parameters
> Each predefined field has these attributes

|attribute|standard value|description|
|---|:---:|---|
|value||value of the field|
|key||unique key of the field (used to access values)|
|label|value of key|displayed text (label or placeholder)|
|controlType||sets the html element that is used to display the field|
|description|`''`|a descriptive text that is displayed near the field|
|classes|`''`|add custom css classes to the field|
|hasPlaceholders||decides wether the html element has a placeholder property or not|
|placeholder||overrides any set placeholder to this string|
|validators|`[]`|add validators to the field to check thier values against specific rules|

## Special attributes

- OptionElement.ts, `options: {key, value}`

```typescript
new OptionElement({
    key: "country",
    label: "Land",
    options: [
        { key: "germany", value: "Germany" },
        { key: "austria", value: "Austria" },
        { key: "switzerland", value: "Switzerland" }
    ]
})
```
- RadioElement.ts, `options: {key, value}`

```typescript
new RadioElement({
    key: "country",
    label: "Land",
    options: [
        { key: "germany", value: "Germany" },
        { key: "austria", value: "Austria" },
        { key: "switzerland", value: "Switzerland" }
    ]
})
```

# Arrangement / Columns

To place elements in one row, a DynamicFormElementGroup can be used. The correspondig css classes have to be added.
It can also be used to structure the form.

```typescript
new DynamicFormElementGroup({
  fields: [
    new TextboxElement({
      key: "username",
      label: "Nutzername"
    }),
    new PasswordElement({
      key: "password",
      label: "Passwort"
    })
  ]
});

```

# Validation

If a validator offers a dynamic attribute it can be used in the error message.

When creating a new Validator, some require parameters to operate, but all have to possibility to give them a more specialized error message.

```typescript
new TextboxElement({
    key: 'usernameKey',
    label: 'username',
    validators: [new RequiredValidator('A very important field. Please fill in this field')]
}),
new PasswordElement({
    key: 'passwordKey',
    label: 'password',
    validators: [new RequiredValidator('Make sure you won\'t forget this.')]
}),
```

> Each validator automatically has the dynamic attributes `{{attribute}}` (which contains the label you provided earlier) and `{{value}}` (which contains the value of the field).

| validator | dynamic attributes | usage |
| --- | :---: | --- |
|BooleanValidator.ts|`{{trueValue}}`, `{{falseValue}}`|validates if the value has one of two allowed values|
|EmailValidator.ts||checks an e-mail|
|IntegerValidator.ts||checks for an integer|
|IPValidator.ts||validates based on an IPv4 IP adress|
|MatchValidator.ts||compares the value to the value of the field in the parameter|
|MaxLengthValidator.ts|`{{maxLength}}`|checks if the value is longer than desired|
|MinLengthValidator.ts|`{{minLength}}`|checks if the value is shorter than desired|
|MaxValidator.ts|`{{max}}`|checks if the value is higher than desired|
|MinValidator.ts|`{{min}}`|checks if the value is lower than desired|
|NumberValidator.ts||checks a number (with seperators)|
|RequiredValidator.ts||checks if the field has a value|
|UrlValidator.ts||checks of the field is a formal valid URL|
|RegexValidator.ts|`{{regex}}`|checks the value based on the given regular expression|

# Configuration

## Overview of the configuration array

|value|standard value|description|
|---|:---:|---|
|title|`""`|set the title of the form|
|summarizedErrorMessage|`false`|should error messages be summarized|
|placeholders|`false`|should placeholders be displayed instead of labels|
|primaryButtonText|`"Save"`|sets the text of the submit button|
|primaryButtonClass|`""`|enables you to set classes to the primary button|
|primaryButtonMaterialColor|`"primary"`|sets the primary color for the submit button (only used in material design)|
|primaryButtonMaterialType|`"mat-button"`|sets the type of the primary button (only used in material design)|
|displaySummarizedErrorsPosition|`DynamicFormOptions.belowSubmit`|sets the position where the summarized error messages is placed (only useful if option summarizedErrorMessage is set to `true`)|

> Example:
```typescript
//...
options1: DynamicFormOptions = new DynamicFormOptions({
    title: "Check-Out",
    summarizedErrorMessage: false,
    placeholders: true,
    primaryButtonText: "Submit"
});
//...
```

## Global configuration

> A global configuration can be set which will be used for each form. If a option element is passed to a form, those values will overwrite the default values.
```typescript
  DynamicFormOptions.setDefaultOptions(this.options1);
```

# Templating

You can either customize an already defined template or write your own custom template to fit special needs.

## Customize a template

To customize a template you add the corresponding element as a child in the html view. You have to use an directive to tell the framework which component should use this template.

```html
<nrf-dynamic-form-spectre [rows]="formRows1Spectre" [options]="options1" [onSend]="onSubmit" [showSendButton]="true">

    <!-- Set a custom template for the primary button -->
    <ng-container *nrfPrimaryButton="let options = options;">
        <button type="submit"
            [ngClass]="'btn btn-primary' + (submitting ? 'loading' : '')">
            {{options.primaryButtonText}}
        </button>
    </ng-container>

    <!-- Set a custom template for the title-->
    <ng-container *nrfTitle="let options = options;">
        <h1>{{options.title}}</h1>
        <hr>
    </ng-container>

</nrf-dynamic-form-spectre>
```

## Write your own template

You can also write a completely new template in order to fit special needs. This is done by creating to components. One for the form and one for the form elements. 

> dynamicform-custom.component.ts
```typescript
import { Component } from '@angular/core';
import { DynamicformStyleable } from '../dynamicform-styleable';

@Component({
    selector: 'nrf-dynamic-form-custom',
    templateUrl: './dynamicform-custom.component.html',
})
export class DynamicformCustomComponent extends DynamicformStyleable {

}
```

> dynamicformelement-custom.component.ts
```typescript
import { Component } from '@angular/core';
import { DynamicformelementStyleable } from '../dynamicformelement-styleable';

@Component({
    selector: 'nrf-df-element-custom',
    templateUrl: './dynamicformelement-custom.component.html'
})
export class DynamicformelementCustomComponent extends DynamicformelementStyleable {

}
```

Now you can make the corresponding templates.

> dynamicform-custom.component.html
```html
<nrf-dynamic-form [rows]="rows" [options]="options" [onSend]="onSend" [showSendButton]="showSendButton" [submitting]="submitting">

    <!-- Template for the app title -->
    <ng-container *nrfTitle>
        <div class="container">
            <ng-container class="container" *ngIf="options.title !== ''">
                <h1>{{options.title}}</h1>
            </ng-container>
        </div>
    </ng-container>

    <!-- Template for the primary button -->
    <ng-container *nrfPrimaryButton>
        <div class="container">
            <div class="columns">
                <div class="column col-12">
                    <button type="submit" [ngClass]="'mt-2 btn btn-primary ' + (submitting ? 'loading' : '')">
                        {{options.primaryButtonText}}
                    </button>
                </div>
            </div>
        </div>
    </ng-container>

    //...//

    <!-- Template for a form row that consists of just on element -->
    <ng-container *nrfFormRow="let row; let form = form; let config = config;">
        <div class="container">
            <div class="columns">
                <div class="column col-12">
                    <div class="form-group">
                        <nrf-df-element-spectre [element]="dynamicform.asElement(row)" [form]="form" [options]="options"></nrf-df-element-spectre>
                    </div>
                </div>
            </div>
        </div>
    </ng-container>

    <!-- Template for a form row that consists of multiple elements -->
    <ng-container *nrfFormRowMultipleElements="let row; let form = form; let config = config;">
        <div class="container">
            <div class="columns">
                <div *ngFor="let field of dynamicform.asGroup(row).fields" class="column {{field.classes}}">
                    <nrf-df-element-spectre [element]="field" [form]="form" [options]="options"></nrf-df-element-spectre>
                </div>
            </div>
        </div>
    </ng-container>

</nrf-dynamic-form>
```

> dynamicformelement-custom.component.html
```html
<nrf-df-element [element]="element" [form]="form" [options]="options">

  <!-- Label for the element -->
  <ng-container *nrfLabel="let element;">
    <label [attr.for]="element.key" class="form-label">{{element.label}}</label>
  </ng-container>

  <!-- Textbox element -->
  <ng-container *nrfTextboxElement="let element; let config = config; let form = form;">
    <ng-container [formGroup]="form">
      <input [formControlName]="element.key" [id]="element.key" [type]="element.type" class="form-input"
        placeholder="{{options.placeholders ? element.label : '' }}" name="{{element.key}}"
        [ngClass]="{
          'is-success': dynamicformelement.isValid && !dynamicformelement.isPristine,
          'is-error': !dynamicformelement.isValid && !dynamicformelement.isPristine
        }">
    </ng-container>
  </ng-container>

    //...//

  <!-- Description for input field -->
  <ng-container *nrfDescription="let element; let config = config; let form = form;">
    <ng-container  *ngIf="!(element.controlType == 'checkbox')">
      {{element.description}}
    </ng-container>
  </ng-container>

  <!-- Error output for this specific field -->
  <ng-container *nrfErrorOutput="let element; let config = config; let form = form;">
    <ng-container *ngFor="let validator of element.validators">
      <span *ngIf="dynamicformelement.isInvalidForError(validator.error)" class="form-input-hint">
        {{dynamicformelement.replaceDynamicAttributes(validator.getFormattedMessage())}}
      </span>
    </ng-container>
  </ng-container>

</nrf-df-element>
```

### List of possible directives

> Note: if you are using a custom template, you have to define a template for all elements you plan on using.

- CheckboxElementDirective
- CustomElementDirective
- LabelDirective
- TitleDirective
- DescriptionDirective
- FormRowDirective
- FormRowMultipleElementsDirective
- GlobalErrorOutputDirective
- ErrorOutputDirective
- PrimaryButtonDirective
- OptionElementDirective
- PasswordElementDirective
- RadioElementDirective
- TextboxElementDirective
- DatePickerDirective
- NumberElementDirective

# License

The project is licensed under the MIT license.
