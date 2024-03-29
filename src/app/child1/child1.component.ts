import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  result: boolean = false;

  constructor(private numberService: NumberService) { }

  ngOnInit(): void {
    // Call ChkPrime with a hardcoded value
    this.result = this.numberService.ChkPrime(7);
  }
}
