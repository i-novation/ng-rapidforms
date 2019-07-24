import { Component, IterableDiffers } from '@angular/core';
import { DynamicformStyleable } from '../../../models/DynamicFormStyleable';

@Component({
    selector: 'nrf-dynamic-form-bootstrap-4',
    templateUrl: './dynamicform-bootstrap-4.component.html',
})
export class DynamicformBootstrap4Component extends DynamicformStyleable {

  constructor(
    _iterableDiffers: IterableDiffers
  ) {
    super(_iterableDiffers);
  }
}
