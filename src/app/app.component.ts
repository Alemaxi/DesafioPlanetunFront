import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormEsquerdoComponent } from './form-esquerdo/form-esquerdo.component';
import { GenerateTabuadaComponent } from './generate-tabuada/generate-tabuada.component';
import { TabuadaService } from './Services/tabuada.service';
import { TabuadaComponent } from './tabuada/tabuada.component';
import { HttpClientModule } from '@angular/common/http';
import { TabuadaDTO } from './DTO/TabuadaDTO';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatSidenavModule,
    FormEsquerdoComponent,
    GenerateTabuadaComponent,
    TabuadaComponent,
    HttpClientModule,
  ],
  providers: [TabuadaService],
})
export class AppComponent {
  constructor(protected tabuadaService: TabuadaService) {}
  
  title = 'DesafioPlanetunFront';
  
  selectedNumbers: number[] = [];
  
  tabuadas: TabuadaDTO[][] = [];
  
  LimparNumeros() {
    this.selectedNumbers = [];
  }

  GerarTabuadas() {
    this.tabuadaService.GerarTabuadas(this.selectedNumbers).subscribe({
      next: (tabuadas) => {
        this.tabuadas = tabuadas;
        this.LimparNumeros();
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  AddNumber($event: number) {
    if (this.selectedNumbers.includes($event)) return;
    this.selectedNumbers.push($event);
  }
}
