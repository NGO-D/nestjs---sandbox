import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MockComponent } from './mock/mock.component';
import { MockService } from './services/mock.service';
import { AdminHeaderComponent } from './components/admin-component/admin-header/admin-header.component';
import { AdminEditComponent } from './components/admin-component/admin-component/admin-edit/admin-edit.component';
import { SignUpComponent } from './components/admin-component/auth/sign-up/sign-up.component';
import { LoginComponent } from './components/admin-component/auth/login/login.component';
import { AdminLandingComponent } from './components/admin-component/admin-landing/admin-landing.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    MockComponent,
    AdminHeaderComponent,
    AdminEditComponent,
    SignUpComponent,
    LoginComponent,
    AdminLandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ],
  providers: [MockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
