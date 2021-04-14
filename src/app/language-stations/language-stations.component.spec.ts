import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageStationsComponent } from './language-stations.component';

describe('LanguageStationsComponent', () => {
  let component: LanguageStationsComponent;
  let fixture: ComponentFixture<LanguageStationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguageStationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageStationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
