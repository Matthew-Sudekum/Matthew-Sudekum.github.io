import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgListItemComponent } from './org-list-item.component';

describe('OrgListItemComponent', () => {
  let component: OrgListItemComponent;
  let fixture: ComponentFixture<OrgListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
