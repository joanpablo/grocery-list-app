import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './routes/app-routing.module';
import { AppRootComponent } from './components/app-root/app-root.component';

@NgModule({
  declarations: [AppRootComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppRootComponent],
})
export class AppModule {}
