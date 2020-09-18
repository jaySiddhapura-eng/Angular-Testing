import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleTestComponent } from './sample-test.component';

describe('SampleTestComponent', () => {

  // following block will be executed before every it block execution 
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations:[SampleTestComponent]
    });
  });

  // following way you can check whether component created successfully 
  it('should create the app', () => {
    let fixture = TestBed.createComponent(SampleTestComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  // following way you can access the property of the component under test
  it('should check the login property', () =>{
    let fixture = TestBed.createComponent(SampleTestComponent);
    let app = fixture.debugElement.componentInstance;
    let login = app.isLoggedIn;
    expect(login).toBeFalse();
  });

  // following way you can access the method of the component
  it('should check the effect of method', () =>{
    let fixture = TestBed.createComponent(SampleTestComponent);
    let app = fixture.debugElement.componentInstance;
    let preLoginState = app.isLoggedIn;
    app.loginChange();
    expect(app.isLoggedIn).not.toEqual(preLoginState);
  });

  // testing the string return from the method
  it('should return the name', () =>{
    let fixture = TestBed.createComponent(SampleTestComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.returnName).toMatch('jay');
  });

});


// ## Accessing component in Spec block

// ## Test Life-cycle hooks

// ## Testing the TS file of component

// ## Testing the view (HTML) view of the component