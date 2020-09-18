import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatcherExamplesComponent } from './matcher-examples.component';
import { not } from '@angular/compiler/src/output/output_ast';

describe('MatcherExamplesComponent', () => {



beforeEach(()=>{
  TestBed.configureTestingModule({
    declarations:[MatcherExamplesComponent]
  });
});

// check whether component is created
it('should create the component',()=>{
  let fixture = TestBed.createComponent(MatcherExamplesComponent);
  let app = fixture.debugElement.componentInstance;
  expect(app).toBeTruthy();
});

// following two specs will check whether property is true or false
it('should check the property for true', () => {
  let fixture = TestBed.createComponent(MatcherExamplesComponent);
  let app = fixture.debugElement.componentInstance;
  expect(app.sampleTrueBoolean).toBeTrue();
} );

it('should check the property for false', () => {
  let fixture = TestBed.createComponent(MatcherExamplesComponent);
  let app = fixture.debugElement.componentInstance;
  expect(app.sampleFalseBoolean).not.toBeTrue();
});

// check whether value is equal 
it('should check the value equality', () => {
  let fixture =  TestBed.createComponent(MatcherExamplesComponent);
  let app = fixture.debugElement.componentInstance;
  expect(app.sampleNumericValue).toEqual(3.14);
});

it('should check the value less then given', () => {
  let fixture =  TestBed.createComponent(MatcherExamplesComponent);
  let app = fixture.debugElement.componentInstance;
  expect(app.sampleNumericValue).toBeLessThan(4);
});

it('should check the value greater then given', () => {
  let fixture =  TestBed.createComponent(MatcherExamplesComponent);
  let app = fixture.debugElement.componentInstance;
  expect(app.sampleNumericValue).toBeGreaterThan(3);
});

// to check whether string property of component has some keyword
// example for toContain
it('should scan the string for sample keyword',()=>{
  let fixture = TestBed.createComponent(MatcherExamplesComponent);
  let app = fixture.debugElement.componentInstance;
  expect(app.sampleString).toContain('sample');
});



});
