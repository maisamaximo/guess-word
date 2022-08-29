import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'guess-card',
  templateUrl: './guess-card.component.html',
  styleUrls: ['./guess-card.component.css']
})
export class GuessCardComponent implements OnInit {
  @Input() letter = '';

  constructor() { }

  ngOnInit(): void {
  }

}
