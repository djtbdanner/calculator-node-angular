System.register(['@angular/core', './jdf-calculator.classes'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, jdf_calculator_classes_1;
    var JDFCalculatorService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (jdf_calculator_classes_1_1) {
                jdf_calculator_classes_1 = jdf_calculator_classes_1_1;
            }],
        execute: function() {
            JDFCalculatorService = (function () {
                function JDFCalculatorService() {
                }
                JDFCalculatorService.prototype.calculate = function (loan) {
                    var rate = loan.interest / 12;
                    var paymentAmount = loan.amount * (rate / (1 - Math.pow((1 + rate), -loan.payments)));
                    var payments = new Array;
                    var totalLoanAmt = loan.amount;
                    var totalInterest = 0;
                    for (var i = 0; i < loan.payments; i++) {
                        var interest = (totalLoanAmt * loan.interest) / 12;
                        var principal = paymentAmount - interest;
                        totalInterest = totalInterest + interest;
                        totalLoanAmt = totalLoanAmt - principal;
                        var payment = new jdf_calculator_classes_1.Payment;
                        payment.amount = paymentAmount;
                        payment.interest = interest;
                        payment.totalInterest = totalInterest;
                        payment.principal = principal;
                        payment.balance = totalLoanAmt;
                        payment.paymentNumber = i + 1;
                        payment.round();
                        var date = new Date;
                        payment.dueDate = this.addMonthsUTC(loan.startDate, i);
                        payments.push(payment);
                    }
                    return payments;
                };
                JDFCalculatorService.prototype.addMonthsUTC = function (date, count) {
                    if (date && count) {
                        var d = (date = new Date(+date)).getUTCDate();
                        date.setUTCMonth(date.getUTCMonth() + count, 1);
                        var m = date.getUTCMonth();
                        date.setUTCDate(d);
                        if (date.getUTCMonth() !== m)
                            date.setUTCDate(0);
                    }
                    return date;
                };
                JDFCalculatorService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], JDFCalculatorService);
                return JDFCalculatorService;
            }());
            exports_1("JDFCalculatorService", JDFCalculatorService);
        }
    }
});
//# sourceMappingURL=jdf-calculator.service.js.map