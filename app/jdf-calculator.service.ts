
import { Injectable } from '@angular/core';
import { Payment, Loan, PaymentData } from './jdf-calculator.classes';


@Injectable()
export class JDFCalculatorService {

    calculate(loan: Loan) {

        let rate = loan.interest / 12;

        let paymentAmount = loan.amount * (rate / (1 - Math.pow((1 + rate), -loan.payments)));

        let payments = new Array;
        let totalLoanAmt = loan.amount;
        let totalInterest = 0;

        for (let i = 0; i < loan.payments; i++) {
            let interest = (totalLoanAmt * loan.interest) / 12
            let principal = paymentAmount - interest;
            totalInterest = totalInterest + interest;
            totalLoanAmt = totalLoanAmt - principal;

            let payment = new Payment;
            payment.amount = paymentAmount;
            payment.interest = interest;
            payment.totalInterest = totalInterest;
            payment.principal = principal;
            payment.balance = totalLoanAmt;
            payment.paymentNumber = i + 1;
            payment.round();

            let date = new Date;
            payment.dueDate = this.addMonthsUTC(loan.startDate, i);
            payments.push(payment);
        }

        let paymentData = new PaymentData;
        paymentData.payments = payments;
        let p = new Payment;
        p.amount = paymentAmount;
        p.interest = totalInterest;
        p.round();
        paymentData.payment = p;
        return paymentData;
    }

    addMonthsUTC(date: Date, count: number) {
        if (date && count) {
            let d = (date = new Date(+date)).getUTCDate()

            date.setUTCMonth(date.getUTCMonth() + count, 1)
            let m = date.getUTCMonth()
            date.setUTCDate(d)
            if (date.getUTCMonth() !== m) date.setUTCDate(0)
        }
        return date
    }
}