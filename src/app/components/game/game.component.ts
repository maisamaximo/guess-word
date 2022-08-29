import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  public: any;
  letter= '*'
  word = 'APROVADA';
  wordArray: string[] = [];
  guessCount = 0;
  wrongGuesses: string[] = [];
  rightGuesses: string[] = [];
  formGroup!: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.guessCount = this.word.length * 2;
    this.wordArray = this.word.replace(/\w/g, '*').split('');
  }
  
  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      guess: [''],
    });
  }

  submit(): void {
    const letter = this.formGroup.get('guess')?.value.toUpperCase();
    if (
      !this.wrongGuesses.includes(letter) &&
      !this.rightGuesses.includes(letter)
    ) {
      this.guessCount--;
      if (this.word.split('').indexOf(letter) != -1) {
        this.rightGuesses.push(letter);
        const re = new RegExp(`[^${this.rightGuesses.join()}]`, 'g');
        this.wordArray = this.word.replace(re, '*').split('');
      } else {
        this.wrongGuesses.push(letter);
      }
    } else {
      alert('Ops... letra repetida. Inserir uma nova letra');
    }
    this.formGroup.get('guess')?.reset();
  }
}
