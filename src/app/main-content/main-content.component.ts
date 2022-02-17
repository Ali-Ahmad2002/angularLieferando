import { Component, OnInit } from '@angular/core';
import { ArraysService } from '../arrays.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  theArrays: any = ArraysService;

  constructor(public arrays: ArraysService) { }

  ngOnInit(): void {
  }

  showFood(foods: string) {

  }

}
