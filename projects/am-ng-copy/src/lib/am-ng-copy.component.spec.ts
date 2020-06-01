import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmNgCopyComponent } from './am-ng-copy.component';

describe('AmNgCopyComponent', () => {
  let component: AmNgCopyComponent;
  let fixture: ComponentFixture<AmNgCopyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmNgCopyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmNgCopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
