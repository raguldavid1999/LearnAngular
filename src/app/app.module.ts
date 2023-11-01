import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from '@abacritt/angularx-social-login';
import { GoogleSigninButtonModule } from '@abacritt/angularx-social-login';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { HammerModule } from '@angular/platform-browser';
import { IgxSliderModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { ShareModule } from 'ngx-sharebuttons';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { RatingModule } from 'primeng/rating';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AngularMultiSelectModule,
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule,
    GoogleSigninButtonModule,
    BrowserAnimationsModule,
    MatSliderModule,
    HammerModule,
    IgxSliderModule,
    FormsModule,
    ShareModule,
    RatingModule
  ],
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider('943567520134-pinkp5dbuhf0bsu6plkqke04k6f3vdr2.apps.googleusercontent.com')
        },
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider('707917980899507')
        }
      ],
      onError: (err) => {
        console.error(err);
      }
    } as SocialAuthServiceConfig,
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
