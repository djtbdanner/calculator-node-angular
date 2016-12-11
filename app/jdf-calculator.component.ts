import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Payment, Loan, PaymentData } from './jdf-calculator.classes';
import { JDFCalculatorService } from './jdf-calculator.service';
import 'rxjs/add/operator/debounceTime';
import { enableProdMode } from '@angular/core';

enableProdMode();
@Component({
    selector: 'jdf-calculator',
    templateUrl: 'app/jdf-calculator-form.component.html'
})
export class JDFCalculator {

    payments: Payment[];
    loan: Loan;
    paymentData: PaymentData;
    loanItem: String;

    loanAmount = new FormControl();
    interestRate = new FormControl();
    numberOfPayments = new FormControl();
    startDate = new FormControl();
    addPayment = new FormControl();
    addPaymentDate = new FormControl();
    popUpProcess = new String();
    popUpMsg = new String();
    coverDiv = false;


    showPopup = false;
    showMainScreen = true;

    constructor(private _calculatorService: JDFCalculatorService) {
        this.loan = new Loan;
        this.loanItem = "";
    }

    clickPopUpMsg( msg : String,  process: String) {
        this.popUpMsg = msg;

        this.popUpProcess = process;
        this.coverDiv = true;
        this.showPopup = true;
     //   this.showMainScreen = false;
    }
    resetScreen() {
        this.showMainScreen = true;
        this.coverDiv = false;
        this.showPopup = false;
    }

    ngOnInit() {

        let dbTimeMillis = 750;
        this.loanAmount.valueChanges
            .debounceTime(dbTimeMillis)
            .subscribe(newValue => {
                this.loan.amount = newValue;
                this.calculateLoan();
            });
        this.interestRate.valueChanges
            .debounceTime(dbTimeMillis)
            .subscribe(newValue => {
                this.loan.interest = newValue;
                this.calculateLoan();
            });
        this.numberOfPayments.valueChanges
            .debounceTime(dbTimeMillis)
            .subscribe(newValue => {
                this.loan.payments = newValue;
                this.calculateLoan();
            });
        this.startDate.valueChanges
            .debounceTime(dbTimeMillis)
            .subscribe(newValue => {
                let dateArray = newValue.split(/\D/);
                let date = new Date(parseInt(dateArray[0], 10), parseInt(dateArray[1], 10), parseInt(dateArray[2], 10));
                this.loan.startDate = date;
                this.calculateLoan();
            });
        this.startDate.setValue(new Date().toISOString().substr(0, 10));
    }

    calculateLoan() {
        if (this.loan.amount > 0 && this.loan.interest >= 0 && this.loan.payments > 0) {
            if (this.loan.startDate === undefined) {
                this.loan.startDate = this._calculatorService.addMonthsUTC(new Date(), 1);
            }
            this.paymentData = this._calculatorService.calculate(this.loan);
            this.payments = this.paymentData.payments;
        }
    }

    clearSchedule() {
        this.paymentData = null;
    }

}