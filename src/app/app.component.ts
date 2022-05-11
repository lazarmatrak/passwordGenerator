import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

//Properties
  
  password = '';
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;


//Event Handlers

  onButtonClick(){
    this.password = 'MY PASSWORD';
  }

  onChangeUseLetters(){
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers(){
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols(){
    this.includeSymbols = !this.includeSymbols;
  }
}
