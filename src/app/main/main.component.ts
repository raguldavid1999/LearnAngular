import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from 'src/services/app.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  constructor(private appService: AppService) { }
  private subscription!: Subscription;
  ngOnInit(): void {
    this.subscription = this.appService.trans.subscribe((res: any) => {
      console.log(res);
      this.inputValue = res;
    })
  }
  inputValue: any = 'Name';
}
