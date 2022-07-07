import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalListItemComponent } from './animal-list-item.component';

describe('AnimalListItemComponent', () => {
  let component: AnimalListItemComponent;
  let fixture: ComponentFixture<AnimalListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
