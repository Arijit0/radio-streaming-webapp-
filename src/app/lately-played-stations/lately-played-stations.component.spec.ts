import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatelyPlayedStationsComponent } from './lately-played-stations.component';

describe('LatelyPlayedStationsComponent', () => {
  let component: LatelyPlayedStationsComponent;
  let fixture: ComponentFixture<LatelyPlayedStationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatelyPlayedStationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatelyPlayedStationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
