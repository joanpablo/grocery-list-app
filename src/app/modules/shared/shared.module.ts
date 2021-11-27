import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialUiModule } from '../material-ui/material-ui.module';
import { HttpClientModule } from '@angular/common/http';

/**
 * This is a module that exports common modules to be reused like Http, Material, and Common angular modules.
 */
@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule, MaterialUiModule],
  exports: [MaterialUiModule, HttpClientModule],
})
export class SharedModule {}
