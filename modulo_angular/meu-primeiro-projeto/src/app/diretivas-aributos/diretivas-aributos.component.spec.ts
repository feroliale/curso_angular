import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivasAributosComponent } from './diretivas-aributos.component';

describe('DiretivasAributosComponent', () => {
  let component: DiretivasAributosComponent;
  let fixture: ComponentFixture<DiretivasAributosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiretivasAributosComponent]
    });
    fixture = TestBed.createComponent(DiretivasAributosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
