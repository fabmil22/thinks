import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpyalltestComponent } from './spyalltest.component';
import { DebugElement } from '@angular/core';
import { IncrementDecreService } from './increment-decre.service';
import { By } from '@angular/platform-browser';

describe('SpyalltestComponent', () => {
  let component: SpyalltestComponent;
  let fixture: ComponentFixture<SpyalltestComponent>;
  let service: IncrementDecreService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpyalltestComponent ],
      providers:[ IncrementDecreService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpyalltestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should be called hello', () => {
   expect(component.hello()).toBe('hello');
  });

  it('should be called world', () => {
    expect(component.world()).toBe('world');
  });

 /*  it('should be called world', () => {
    fixture.getall = jasmine.createSpy('nombre spy');
    component.getall();
    expect(component.getall).toHaveBeenCalled();
  }); */

});

describe('Evaluando las funciones de incrementar y disminuir', () => {

  let fixture: ComponentFixture<SpyalltestComponent>;
  let debugElement: DebugElement;
  let service: IncrementDecreService;
  let incrementoSpy;
  let decremenToSpy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpyalltestComponent ],
      providers: [ IncrementDecreService]
    }).compileComponents();

    fixture = TestBed.createComponent(SpyalltestComponent);
    debugElement = fixture.debugElement;

    service = debugElement.injector.get(IncrementDecreService);
    //llamada al servicio con spyon()
    incrementoSpy = spyOn(service, 'increment').and.callThrough();
    decremenToSpy = spyOn(service, 'decrement').and.callThrough();

  }));

  it('call increment on the service', () => {
    //simulame un click de este boton
    debugElement.query(By.css('button.increment')).triggerEventHandler('click', 'null');
    expect(service.value).toBe(1);
    expect(incrementoSpy).toHaveBeenCalled();
});

it('call increment on the service', () => {
  //simulame un click de este boton
  debugElement.query(By.css('button.decrement')).triggerEventHandler('click', '1');
  expect(service.value).toBe(0);
  expect(decremenToSpy).toHaveBeenCalled();
});

});
