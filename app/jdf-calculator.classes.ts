export class Payment {
    paymentNumber: number;
    amount: number;
    principal: number;
    interest: number;
    balance: number;
    dueDate: Date;
    totalInterest: number = 0;

    round() {
        this.amount = Math.round(this.amount * 100) / 100;
        this.principal = Math.round(this.principal * 100) / 100;
        this.interest = Math.round(this.interest * 100) / 100;
        this.balance = Math.round(this.balance * 100) / 100;
        this.totalInterest = Math.round(this.totalInterest * 100) / 100;
    }

}

export class Loan {
    amount: number;
    interest: number;
    payments: number;
    startDate: Date;
}

export class PaymentData {
    payment: Payment;
    payments: Payment[];
}
