import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryStationsComponent } from './country-stations.component';

describe('CountryStationsComponent', () => {
  let component: CountryStationsComponent;
  let fixture: ComponentFixture<CountryStationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryStationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryStationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
