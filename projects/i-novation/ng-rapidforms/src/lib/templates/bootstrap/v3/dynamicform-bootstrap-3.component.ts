import { Component, IterableDiffers } from '@angular/core';
import { DynamicformStyleable } from '../../../models/DynamicFormStyleable';

@Component({
    selector: 'nrf-dynamic-form-bootstrap-3',
    templateUrl: './dynamicform-bootstrap-3.component.html',
})
export class DynamicformBootstrap3Component extends DynamicformStyleable {

  constructor(
    _iterableDiffers: IterableDiffers
  ) {
    super(_iterableDiffers);
  }
}
