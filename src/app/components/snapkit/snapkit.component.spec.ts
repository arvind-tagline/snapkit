import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnapkitComponent } from './snapkit.component';

describe('SnapkitComponent', () => {
  let component: SnapkitComponent;
  let fixture: ComponentFixture<SnapkitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnapkitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnapkitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
