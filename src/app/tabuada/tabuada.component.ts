import { Component, Input,  } from '@angular/core';
import { TabuadaDTO } from '../DTO/TabuadaDTO';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-tabuada',
  standalone: true,
  imports: [
    MatCardModule
  ],
  templateUrl: './tabuada.component.html',
  styleUrl: './tabuada.component.scss'
})
export class TabuadaComponent {
  @Input() tabuada: TabuadaDTO[] = [];

  constructor() {
    console.log(this.tabuada);
  }
}
