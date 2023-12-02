import { Component, OnInit, ViewChild } from '@angular/core';
import { SocialAuthService } from "@abacritt/angularx-social-login";
import { FacebookLoginProvider } from "@abacritt/angularx-social-login";
import { GoogleLoginProvider } from "@abacritt/angularx-social-login";
import { IgxInputDirective, IgxSliderComponent } from 'igniteui-angular';
import {
  PaymentIntent,
  StripeCardElementOptions,
  StripeElementsOptions
} from '@stripe/stripe-js';
import { StripeCardComponent, StripeCardNumberComponent, StripeService } from 'ngx-stripe';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environments } from 'src/environments/environments';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild(StripeCardNumberComponent) card!: StripeCardNumberComponent;

  public cardOptions: StripeCardElementOptions = {
    style: {
      base: {
        fontWeight: 400,
        fontFamily: 'Circular',
        fontSize: '14px',
        iconColor: '#666EE8',
        color: '#002333',
        '::placeholder': {
          color: '#919191',
        },
      },
    },
  };

  public elementsOptions: StripeElementsOptions = {
    locale: 'en',
  };

  paymentForm: FormGroup = this.fb.group({
    name: ['John', [Validators.required]],
    email: ['john@gmail.com', [Validators.required]],
    amount: [100, [Validators.required]],
  });
  pay(): void {
    console.log(this.paymentForm.valid);

    if (this.paymentForm.valid) {
      this.createPaymentIntent(this.paymentForm?.get('amount')?.value)
        .pipe(
          switchMap((pi: any) =>
            this.stripeService.confirmCardPayment(pi.client_secret, {
              payment_method: {
                card: this.card.element,
                billing_details: {
                  name: this.paymentForm?.get('name')?.value,
                },
              },
            })
          )
        )
        .subscribe((result: any) => {
          if (result.error) {
            // Show error to your customer (e.g., insufficient funds)
            console.log(result.error.message);
          } else {
            // The payment has been processed!
            if (result.paymentIntent.status === 'succeeded') {
              // Show a success message to your customer
            }
          }
        });
    } else {
      console.log(this.paymentForm);
    }
  }

  createPaymentIntent(amount: number): Observable<PaymentIntent> {
    return this.http.post<PaymentIntent>(
      `${environments.apiUrl}/create-payment-intent`,
      { amount }
    );
  }

  stripeTest!: FormGroup;
  title = 'learnAngular';
  watchAd: boolean = false;
  constructor(private authService: SocialAuthService, private fb: FormBuilder, private stripeService: StripeService, private http: HttpClient) { }
  ngOnInit(): void {
    this.stripeTest = this.fb.group({
      name: ['', [Validators.required]]
    });
    let clickElement: any = document.querySelectorAll('.navigation-head')
    let slider: any = document.querySelector('.slider')

    clickElement.forEach((element: any) => {
      element.addEventListener("click", (event: any) => {
        console.log(event, slider?.style.left, 'event');
        slider.style.left = event.target.offsetLeft + 'px';
        console.log(event.clientX + 'px');
      });
    });
    let video: any = document.getElementById('video-id');
    // video.currentTime = 5;
    let adVideo: any = document.getElementById('ad-id');
    // video?.addEventListener('ended',()=>{
    //   console.log('ended');
    //   video.src = '../assets/videos/home_wwBS1691074889.mp4';
    //   video.currentTime = 5;
    //   video.play();
    // })
    video?.addEventListener('timeupdate', (event: any) => {
      console.log(event, 'playing');
      if (event.target.currentTime > 10 && !this.watchAd) {
        video?.pause();
        video.src = '../assets/videos/home_Wz7n1692194497.mp4'
        video?.play();
        this.watchAd = true;
        // adVideo.play();
      }
    })
    this.authService.authState.subscribe((res) => {
      console.log(res, 'login data');
    })
    this.dropdownList = [
      { id: 1, itemName: 'India' },
      { id: 2, itemName: 'Singapore' },
      { id: 3, itemName: 'Australia' },
      { id: 4, itemName: 'Canada' },
      { id: 5, itemName: 'South Korea' },
      { id: 6, itemName: 'Germany' },
      { id: 7, itemName: 'France' },
      { id: 8, itemName: 'Russia' },
      { id: 9, itemName: 'Italy' },
      { id: 10, itemName: 'Sweden' }
    ];
    this.selectedItems = [
      { id: 2, itemName: 'Singapore' },
      { id: 3, itemName: 'Australia' },
      { id: 4, itemName: 'Canada' },
      { id: 5, itemName: 'South Korea' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      text: 'Select Countries',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      classes: 'myclass custom-class'
    };
  }
  createToken(): void {
    const name = this.stripeTest?.get('name')?.value;
    this.stripeService
      .createToken(this.card.element, { name })
      .subscribe((result) => {
        if (result.token) {
          // Use the token
          console.log(result.token.id);
        } else if (result.error) {
          // Error creating the token
          console.log(result.error.message);
        }
      });
  }

  dropdownList: any = [];
  selectedItems: any = [];
  dropdownSettings = {};
  value: number = 3;
  onItemSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }
  OnItemDeSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  onDeSelectAll(items: any) {
    console.log(items);
  }
  signInWithGoogle(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
  onEnded(event: any) {
    console.log(event, 'ended');
    let video: any = document.getElementById('video-id');
    video.src = '../assets/videos/home_wwBS1691074889.mp4';
    video.currentTime = 10;
    video.play();
  }

  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return `${value}`;
  }
  // signOut(): void {
  //   this.authService.signOut();
  // }
}
