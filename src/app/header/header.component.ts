import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // @Input() title! : string;
  // @Output() titleChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  // handleTitleChange(input: HTMLInputElement){
  //     this.titleChange.emit(input.value);
  //     input.value = "";
  // }

}
