import { Component, OnInit } from '@angular/core';
import { UserService } from './sample-test.service';

@Component({
  selector: 'app-sample-test',
  templateUrl: './sample-test.component.html',
  styleUrls: ['./sample-test.component.css'],
  providers:[UserService]
})
export class SampleTestComponent implements OnInit {



  property:String = 'from sample test component'

  user:{name:String};
  isLoggedIn = false;

  constructor(private  userService:UserService) { }

  ngOnInit(): void {
    this.user = this.userService.user;
  }

  public loginChange(){
    this.isLoggedIn = !this.isLoggedIn;
  }

  public returnName(){
    let namen = 'jay';
    return namen;
  }

}
