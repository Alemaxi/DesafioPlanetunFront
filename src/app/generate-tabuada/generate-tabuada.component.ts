import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-generate-tabuada',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './generate-tabuada.component.html',
  styleUrl: './generate-tabuada.component.scss',
})
export class GenerateTabuadaComponent {
  @Input() selectedNumbers: number[] = [];
  @Output() gerarTabuadasEvent = new EventEmitter<any>();
  @Output() limparNumerosEvent = new EventEmitter<any>();
  
  LimparNumeros() {
    this.limparNumerosEvent.emit();
  }
  
  GerarTabuadas() {
    if(this.selectedNumbers.length === 0) return;

    this.gerarTabuadasEvent.emit();
  }
}
