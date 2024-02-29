import { Component, EventEmitter, Output } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form-esquerdo',
  standalone: true,
  imports: [MatInputModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './form-esquerdo.component.html',
  styleUrl: './form-esquerdo.component.scss',
})

export class FormEsquerdoComponent {
  @Output() selectedNumber = new EventEmitter<number>();

  tabuadaForm = new FormGroup({
    selectedNumber: new FormControl<number|null>(null,),
  });

  addNumber() {
    this.selectedNumber.emit(this.tabuadaForm.value.selectedNumber as number);
    this.tabuadaForm.reset();
  }
}


