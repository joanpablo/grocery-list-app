import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './routes/app-routing.module';
import { AppRootComponent } from './components/app-root/app-root.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppShellComponent } from './components/app-shell/app-shell.component';
import { SharedModule } from './modules/shared/shared.module';

@NgModule({
  declarations: [AppRootComponent, AppShellComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppRootComponent],
})
export class AppModule {}
