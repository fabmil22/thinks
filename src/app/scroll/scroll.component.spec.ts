import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollComponent } from './scroll.component';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';

describe('ScrollComponent', () => {
  let component: ScrollComponent;
  let fixture: ComponentFixture<ScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollComponent ],
      imports: [
        NgxPageScrollCoreModule,
        NgxPageScrollModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should be reached', () => {
  //   const verificar = component.doSmth(true);
  //   expect( verificar).toHaveText('Yeah, we reached our destination');

  // });
});
