import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualScrollSampleComponent } from './virtual-scroll-sample.component';

describe('VirtualScrollSampleComponent', () => {
  let component: VirtualScrollSampleComponent;
  let fixture: ComponentFixture<VirtualScrollSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VirtualScrollSampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualScrollSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
