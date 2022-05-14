import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualScrollSample2Component } from './virtual-scroll-sample2.component';

describe('VirtualScrollSample2Component', () => {
  let component: VirtualScrollSample2Component;
  let fixture: ComponentFixture<VirtualScrollSample2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VirtualScrollSample2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualScrollSample2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
