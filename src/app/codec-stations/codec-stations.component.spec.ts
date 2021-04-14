import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodecStationsComponent } from './codec-stations.component';

describe('CodecStationsComponent', () => {
  let component: CodecStationsComponent;
  let fixture: ComponentFixture<CodecStationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodecStationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodecStationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
