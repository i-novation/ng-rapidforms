import { Component, IterableDiffers } from '@angular/core';
import { DynamicformStyleable } from '@i-novation/ng-rapidforms';

@Component({
    selector: 'nrf-dynamic-form-bootstrap-ng',
    templateUrl: './dynamicform-bootstrap-ng.component.html',
})
export class DynamicformBootstrapNgComponent extends DynamicformStyleable {

  constructor(
    _iterableDiffers: IterableDiffers
  ) {
    super(_iterableDiffers);
  }
}
