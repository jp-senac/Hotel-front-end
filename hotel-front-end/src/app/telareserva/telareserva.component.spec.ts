import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelareservaComponent } from './telareserva.component';

describe('TelareservaComponent', () => {
  let component: TelareservaComponent;
  let fixture: ComponentFixture<TelareservaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelareservaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelareservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
