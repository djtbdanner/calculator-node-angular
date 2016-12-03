import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule, Validators  }   from '@angular/forms';
import { JDFCalculator }  from './jdf-calculator.component';
import { JDFCalculatorService } from './jdf-calculator.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule  ],
  declarations: [ JDFCalculator ],
  providers:    [ JDFCalculatorService ],
  bootstrap:    [ JDFCalculator ]
})
export class JDFCalculatorModule { }
