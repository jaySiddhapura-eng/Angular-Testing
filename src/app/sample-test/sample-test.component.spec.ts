import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleTestComponent } from './sample-test.component';
import { UserService } from './sample-test.service';

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
    expect(app.returnName()).toMatch('jay');
  });

  it('should check the service injection', () => {
    let fixture = TestBed.createComponent(SampleTestComponent);
    let app = fixture.debugElement.componentInstance;
    // obtain the service instance in test as follow
    let userServiceTest = fixture.debugElement.injector.get(UserService);
    fixture.detectChanges();
    expect(userServiceTest.user.name).toEqual(app.user.name);
  });

  it('should display the username if user is logged in', () => {
    let fixture = TestBed.createComponent(SampleTestComponent);
    let app = fixture.debugElement.componentInstance;
    app.isLoggedIn = true;
    fixture.detectChanges();
    // following way we can access the html dom element
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain(app.user.name);
  });

  it('should\'t display the username if user is not logged in', () => {
    let fixture = TestBed.createComponent(SampleTestComponent);
    let app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).not.toContain(app.user.name);
  })

});




// ## Test Life-cycle hooks

// ## Testing the TS file of component

// ## Testing the view (HTML) view of the component