import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotesStationsComponent } from './votes-stations.component';

describe('VotesStationsComponent', () => {
  let component: VotesStationsComponent;
  let fixture: ComponentFixture<VotesStationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VotesStationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VotesStationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
