import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }
  trans: any = new BehaviorSubject('Hai');
}
