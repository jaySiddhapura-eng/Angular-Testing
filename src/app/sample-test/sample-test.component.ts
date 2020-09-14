import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-test',
  templateUrl: './sample-test.component.html',
  styleUrls: ['./sample-test.component.css']
})
export class SampleTestComponent implements OnInit {

  property:String = 'from ts file';

  constructor() { }

  ngOnInit(): void {
  }

}
