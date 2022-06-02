import { Component, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-yes-no-button-group',
  templateUrl: './yes-no-button-group.component.html',
  styleUrls: ['./yes-no-button-group.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef() => YesNoButtonGroupComponent
    }
  ]
})
export class YesNoButtonGroupComponent implements OnInit, ControlValueAccessor {
@Input() public value: string = null;
@Input() public label = '';
@Output() public valueChange = new EventEmitter<string>();
public options = YesNoButtonGroupOptions;
public onTouched() => {};

}

  constructor() { }

  ngOnInit(): void {
  }

  public activate(value: string): void {
    this.value = value;
    this.valueChange.emit(this.value);
  }

}

enum YesNoButtonGroupOptions{
  YES = 'yes',
  NO = 'no'
}
