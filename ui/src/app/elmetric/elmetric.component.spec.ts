import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElmetricComponent } from './elmetric.component';

describe('ElmetricComponent', () => {
  let component: ElmetricComponent;
  let fixture: ComponentFixture<ElmetricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElmetricComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElmetricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
