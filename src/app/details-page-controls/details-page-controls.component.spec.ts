import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPageControlsComponent } from './details-page-controls.component';

describe('DetailsPageControlsComponent', () => {
  let component: DetailsPageControlsComponent;
  let fixture: ComponentFixture<DetailsPageControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsPageControlsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsPageControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
