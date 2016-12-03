"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var jdf_calculator_classes_1 = require('./jdf-calculator.classes');
var jdf_calculator_service_1 = require('./jdf-calculator.service');
var JDFCalculator = (function () {
    function JDFCalculator(_calculatorService) {
        this._calculatorService = _calculatorService;
        this.loan = new jdf_calculator_classes_1.Loan;
    }
    JDFCalculator.prototype.calculateLoan = function () {
        if (this.loan.amount > 0 && this.loan.interest > 0 && this.loan.payments > 0) {
            if (this.loan.startDate === undefined) {
                this.loan.startDate = this._calculatorService.addMonthsUTC(new Date(), 1);
            }
            this.payments = this._calculatorService.calculate(this.loan);
        }
    };
    JDFCalculator.prototype.changeLoanAmount = function (value) {
        this.loan.amount = value;
        this.calculateLoan();
    };
    JDFCalculator.prototype.changeLoanInterest = function (value) {
        this.loan.interest = value / 100;
        this.calculateLoan();
    };
    JDFCalculator.prototype.changeLoanPayment = function (value) {
        this.loan.payments = value;
        this.calculateLoan();
    };
    JDFCalculator.prototype.changeStartDate = function (value) {
        var dateArray = value.split(/\D/);
        var date = new Date(parseInt(dateArray[0], 10), parseInt(dateArray[1], 10), parseInt(dateArray[2], 10));
        this.loan.startDate = date;
        this.calculateLoan();
    };
    JDFCalculator = __decorate([
        core_1.Component({
            selector: 'jdf-calculator',
            templateUrl: 'app/jdf-calculator-form.component.html'
        }), 
        __metadata('design:paramtypes', [jdf_calculator_service_1.JDFCalculatorService])
    ], JDFCalculator);
    return JDFCalculator;
}());
exports.JDFCalculator = JDFCalculator;
//# sourceMappingURL=jdf-calculator.component.js.map