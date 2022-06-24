import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JogoComponent } from './jogo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [JogoComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class JogoModule {}
