import { Component, IterableDiffers } from '@angular/core';
import { DynamicformStyleable } from '../../models/DynamicFormStyleable';

@Component({
    selector: 'nrf-dynamic-form-spectre',
    templateUrl: './dynamicform-spectre.component.html',
})
export class DynamicformSpectreComponent extends DynamicformStyleable {

  constructor(
    _iterableDiffers: IterableDiffers
  ) {
    super(_iterableDiffers);
  }
}
