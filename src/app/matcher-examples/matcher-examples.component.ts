import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matcher-examples',
  templateUrl: './matcher-examples.component.html',
  styleUrls: ['./matcher-examples.component.css']
})
export class MatcherExamplesComponent  {

  sampleTrueBoolean: Boolean = true;  
  sampleFalseBoolean: Boolean = false;
  sampleString:String = 'sample string';
  sampleNumericValue: Number = 3.14;

}
