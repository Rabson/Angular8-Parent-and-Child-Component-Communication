import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  message: string = "I am from Parent component";
  childmessage: string = "I am passed from Parent component to child component !!!!!"
  constructor() { }

  ngOnInit() {
  }
  displayVal(cnt) {
    console.log(cnt, 'value printed from parent component');
  }
}
