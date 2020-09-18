import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-test',
  templateUrl: './sample-test.component.html',
  styleUrls: ['./sample-test.component.css']
})
export class SampleTestComponent implements OnInit {

  property:String = 'from sample test component'

  user:{name:String};
  isLoggedIn = false;

  constructor() { }

  ngOnInit(): void {
  }

  public loginChange(){
    this.isLoggedIn = !this.isLoggedIn;
  }

  public returnName(){
    let name = 'jay';
    return name;
  }

}
