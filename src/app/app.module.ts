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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShareModule } from 'ngx-sharebuttons';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { RatingModule } from 'primeng/rating';
import { NgxStripeModule } from 'ngx-stripe';
import { environments } from 'src/environments/environments';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
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
    RatingModule,
    ReactiveFormsModule,
    NgxStripeModule.forRoot(environments.stripe.publicKey)
  ],
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(environments.googleApiKey)
        },
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider(environments.faceBookKey)
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
