import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HeaderModule } from './shared/components/header/header.module';
import { FooterComponent } from './shared/components/footer/footer.component';
import { FooterModule } from './shared/components/footer/footer.module';
import { EmployeeFormModule } from './shared/components/employee-form/employee-form.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    FooterModule,
    EmployeeFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
