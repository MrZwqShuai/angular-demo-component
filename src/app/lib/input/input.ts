import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { getSupportedInputTypes, Platform } from '@angular/cdk/platform';
import {FormGroupDirective, NgControl, NgForm} from '@angular/forms';
import {
  Component,
  DoCheck,
  ElementRef,
  Inject,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Optional,
  Self,
  NgZone,
} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'nz-input',
  templateUrl: 'input.html',
  styleUrls: ['input.scss'],
})

export class NzInput {
  text: boolean = false;
  icon: boolean = true;
  currentValue: any = "dsdasd";

  @Input('placeholder') placeholder: string = "请输入内容...";
  @Input('title') title: string = "title";

  OnInit() {
    console.log('input组件初始化...')
  }
}