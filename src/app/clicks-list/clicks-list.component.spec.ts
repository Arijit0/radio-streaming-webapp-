import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClicksListComponent } from './clicks-list.component';

describe('ClicksListComponent', () => {
  let component: ClicksListComponent;
  let fixture: ComponentFixture<ClicksListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClicksListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClicksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
