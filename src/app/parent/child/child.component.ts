import { Component, OnInit, Input, EventEmitter, Output  } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Output() newValue = new EventEmitter();
  counter = 0;


  _greetMessage: string;

  @Input() set greetMessage(message: string) {
    debugger
    this._greetMessage = message + " edited at child component";
  }

  get greetmessage() {
    return this._greetMessage;
  }
  constructor() { }


  ngOnInit() {
  }


  changedValue() {

    this.counter = this.counter + 1;
    this.newValue.emit(this.counter);
  }
}
