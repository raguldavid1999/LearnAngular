import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnChanges, OnInit {
  constructor(private el: ElementRef) {}
  ngOnInit(): void {
    console.log(this.el, 'element ref');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes, 'Onchange child');
  }
  @Input() data: any;
}
