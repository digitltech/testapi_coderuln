import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsInformationComponent } from './cons-information.component';

describe('ConsInformationComponent', () => {
  let component: ConsInformationComponent;
  let fixture: ComponentFixture<ConsInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
