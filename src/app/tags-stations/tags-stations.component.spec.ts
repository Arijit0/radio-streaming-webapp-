import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsStationsComponent } from './tags-stations.component';

describe('TagsStationsComponent', () => {
  let component: TagsStationsComponent;
  let fixture: ComponentFixture<TagsStationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagsStationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagsStationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
