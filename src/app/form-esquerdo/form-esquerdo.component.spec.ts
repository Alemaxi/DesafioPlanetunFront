import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEsquerdoComponent } from './form-esquerdo.component';

describe('FormEsquerdoComponent', () => {
  let component: FormEsquerdoComponent;
  let fixture: ComponentFixture<FormEsquerdoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormEsquerdoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormEsquerdoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
