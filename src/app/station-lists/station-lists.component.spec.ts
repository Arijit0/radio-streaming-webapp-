import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationListsComponent } from './station-lists.component';

describe('StationListsComponent', () => {
  let component: StationListsComponent;
  let fixture: ComponentFixture<StationListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StationListsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StationListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
