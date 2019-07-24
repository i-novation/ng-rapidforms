import { NgModule, ModuleWithProviders } from '@angular/core';
import {
  MatButtonModule,
  MatInputModule,
  MatCheckboxModule,
  MatSelectModule,
  MatRadioModule
} from '@angular/material';

import { RapidformsBasicModule } from '@i-novation/ng-rapidforms';

import { DynamicformMaterialComponent } from './templates/dynamicform/dynamicform-material.component';
import {
  DynamicformelementMaterialComponent
} from './templates/dynamicformelement/dynamicformelement-material.component';

@NgModule({
  imports: [
    RapidformsBasicModule,
    // Angular material
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatRadioModule,
  ],
  declarations: [
    // Material
    DynamicformMaterialComponent,
    DynamicformelementMaterialComponent,
  ],
  exports: [
    // Rapidforms basics
    RapidformsBasicModule,
    // Material
    DynamicformMaterialComponent,
    DynamicformelementMaterialComponent,
    // Angular material
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatRadioModule,
  ]
})
export class RapidformsMaterialModule extends RapidformsBasicModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: RapidformsMaterialModule,
      providers: []
    };
  }
}
