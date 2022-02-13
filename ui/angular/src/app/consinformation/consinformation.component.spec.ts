import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsinformationComponent } from './consinformation.component';

describe('ConsinformationComponent', () => {
  let component: ConsinformationComponent;
  let fixture: ComponentFixture<ConsinformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsinformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
