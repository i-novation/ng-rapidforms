import { NgModule, ModuleWithProviders } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';

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
  static forRoot(): ModuleWithProviders<RapidformsMaterialModule> {
    return {
      ngModule: RapidformsMaterialModule,
      providers: []
    };
  }
}
