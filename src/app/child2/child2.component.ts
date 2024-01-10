import { Component, OnInit } from '@angular/core';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  result: number = 0;
  constructor(private stringService: StringService) { }

  ngOnInit(): void {
    // Call CountCapital with a hardcoded value
    this.result = this.stringService.CountCapital('Hello World');
  }
}
