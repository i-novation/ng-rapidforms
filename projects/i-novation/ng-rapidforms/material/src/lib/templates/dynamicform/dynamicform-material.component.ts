import { Component, IterableDiffers } from '@angular/core';
import { DynamicformStyleable } from '@i-novation/ng-rapidforms';

@Component({
  selector: 'nrf-dynamic-form-material',
  templateUrl: './dynamicform-material.component.html',
  styleUrls: ['./dynamicform-material.component.scss'],
})
export class DynamicformMaterialComponent extends DynamicformStyleable {

  constructor(
    _iterableDiffers: IterableDiffers
  ) {
    super(_iterableDiffers);
  }
}
