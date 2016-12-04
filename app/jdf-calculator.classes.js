"use strict";
var Payment = (function () {
    function Payment() {
        this.totalInterest = 0;
        this.beginningBalance = 0;
    }
    Payment.prototype.round = function () {
        this.amount = Math.round(this.amount * 100) / 100;
        this.principal = Math.round(this.principal * 100) / 100;
        this.interest = Math.round(this.interest * 100) / 100;
        this.balance = Math.round(this.balance * 100) / 100;
        this.totalInterest = Math.round(this.totalInterest * 100) / 100;
        this.beginningBalance = Math.round(this.beginningBalance * 100) / 100;
    };
    return Payment;
}());
exports.Payment = Payment;
var Loan = (function () {
    function Loan() {
    }
    return Loan;
}());
exports.Loan = Loan;
var PaymentData = (function () {
    function PaymentData() {
    }
    return PaymentData;
}());
exports.PaymentData = PaymentData;
//# sourceMappingURL=jdf-calculator.classes.js.map