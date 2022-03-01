import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListinformationComponent } from './listinformation.component';

describe('ListinformationComponent', () => {
  let component: ListinformationComponent;
  let fixture: ComponentFixture<ListinformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListinformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
