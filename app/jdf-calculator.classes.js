System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Payment, Loan;
    return {
        setters:[],
        execute: function() {
            Payment = (function () {
                function Payment() {
                    this.totalInterest = 0;
                }
                Payment.prototype.round = function () {
                    this.amount = Math.round(this.amount * 100) / 100;
                    this.principal = Math.round(this.principal * 100) / 100;
                    this.interest = Math.round(this.interest * 100) / 100;
                    this.balance = Math.round(this.balance * 100) / 100;
                    this.totalInterest = Math.round(this.totalInterest * 100) / 100;
                };
                return Payment;
            }());
            exports_1("Payment", Payment);
            Loan = (function () {
                function Loan() {
                }
                return Loan;
            }());
            exports_1("Loan", Loan);
        }
    }
});
//# sourceMappingURL=jdf-calculator.classes.js.map