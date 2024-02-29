import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateTabuadaComponent } from './generate-tabuada.component';

describe('GenerateTabuadaComponent', () => {
  let component: GenerateTabuadaComponent;
  let fixture: ComponentFixture<GenerateTabuadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerateTabuadaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenerateTabuadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
