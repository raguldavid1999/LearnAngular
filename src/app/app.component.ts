import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  changeCommissionValue,
  decrement,
  increment,
  reset,
} from './states/counter.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent
  implements
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    OnChanges,
    AfterViewInit,
    AfterViewChecked
{
  constructor(private store: Store<any>, private el: ElementRef) {
    this.count$ = this.store.select('count');
    this.commisionValue$ = this.store.select('commission');
  }
  ngAfterViewChecked(): void {
    console.log('After view checked');
  }
  ngAfterViewInit(): void {
    console.log('After view Init');
  }
  name: any;
  hai: any = 'Haiiii';
  ngOnChanges(changes: SimpleChanges): void {
    console.log('On changes');
  }
  ngAfterContentChecked(): void {
    console.log('After content checked');
  }
  ngAfterContentInit(): void {
    console.log(this.hello, 'after content init');
  }
  @ViewChild('hello') hello: any;

  ngDoCheck(): void {
    console.log('Do check is called');
    console.log(this.el, 'element ref');
  }
  count$!: Observable<number>;
  commisionValue$!: Observable<number>;
  reset() {
    this.store.dispatch(reset());
  }
  decrement() {
    this.store.dispatch(decrement());
  }
  increment() {
    this.store.dispatch(increment());
  }
  onNameChange(event: any) {
    console.log(event);

    this.store.dispatch(changeCommissionValue());
  }
  ngOnInit(): void {
    console.log('On init');
    console.log(this.el, 'element ref');
  }
  title = 'angular15';
  options: string[] = ['One', 'Two', 'Three'];
  // formGroup: FormGroup = new FormGroup({
  //   name: new FormControl('', [this.customValidator()]),
  // });
  // customValidator(): ValidatorFn {
  //   return (control: AbstractControl): ValidationErrors | null => {
  //     console.log(control.value);

  //     if (control.value == 'Ragul') {
  //       return null;
  //     }
  //     return { custom: true };
  //   };
  // }
  // onSubmit() {
  //   console.log(this.formGroup.value);
  // }
}
