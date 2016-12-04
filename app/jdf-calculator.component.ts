import { Component } from '@angular/core';
import { Payment, Loan, PaymentData } from './jdf-calculator.classes';
import { JDFCalculatorService } from './jdf-calculator.service';


@Component({
  selector: 'jdf-calculator',
  templateUrl: 'app/jdf-calculator-form.component.html'
})
export class JDFCalculator {

  payments: Payment[];
  loan: Loan;
  paymentData: PaymentData;

  constructor(private _calculatorService: JDFCalculatorService) {
    this.loan = new Loan; 
  } 

  calculateLoan() {
    if (this.loan.amount > 0 && this.loan.interest > 0 && this.loan.payments > 0) {
      if (this.loan.startDate === undefined) {
        this.loan.startDate = this._calculatorService.addMonthsUTC(new Date(), 1);
      }
      this.paymentData = this._calculatorService.calculate(this.loan);
      this.payments = this.paymentData.payments;
    } 
  }

  changeLoanAmount(value: number) {
    this.loan.amount = value;
    this.calculateLoan();
  }
  changeLoanInterest(value: number) {
    this.loan.interest = value / 100;
    this.calculateLoan();
  }
  changeLoanPayment(value: number) {
    this.loan.payments = value;
    this.calculateLoan();
  }

  changeStartDate(value: String) {
    let dateArray = value.split(/\D/);
    let date = new Date(parseInt(dateArray[0], 10), parseInt(dateArray[1], 10), parseInt(dateArray[2], 10));
    this.loan.startDate = date;
    this.calculateLoan();
  }

}