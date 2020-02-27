import { NgModule, ModuleWithProviders } from '@angular/core';

import { RapidformsBasicModule } from '@i-novation/ng-rapidforms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DynamicformelementBootstrapNgComponent } from './templates/dynamicformelement/dynamicformelement-bootstrap-ng.component';
import { DynamicformBootstrapNgComponent } from './templates/dynamicform/dynamicform-bootstrap-ng.component';

@NgModule({
  imports: [
    RapidformsBasicModule,
    // Angular bootstrap
    NgbModule,
  ],
  declarations: [
    // Bootstrap
    DynamicformBootstrapNgComponent,
    DynamicformelementBootstrapNgComponent,
  ],
  exports: [
    // Rapidforms basics
    RapidformsBasicModule,
    // Bootstrap
    DynamicformBootstrapNgComponent,
    DynamicformelementBootstrapNgComponent,
    // Angular bootstrap
    NgbModule,
  ]
})
export class RapidformsBootstrapNgModule extends RapidformsBasicModule {
  static forRoot(): ModuleWithProviders<RapidformsBootstrapNgModule> {
    return {
      ngModule: RapidformsBootstrapNgModule,
      providers: []
    };
  }
}
