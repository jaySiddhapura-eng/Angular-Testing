import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleTestComponent } from './sample-test.component';

describe('SampleTestComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations:[SampleTestComponent]
    });
  })

  it('should create the app', () => {
    let fixture = TestBed.createComponent(SampleTestComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
