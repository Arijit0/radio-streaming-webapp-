import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatelyChangedStationsComponent } from './lately-changed-stations.component';

describe('LatelyChangedStationsComponent', () => {
  let component: LatelyChangedStationsComponent;
  let fixture: ComponentFixture<LatelyChangedStationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatelyChangedStationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatelyChangedStationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
