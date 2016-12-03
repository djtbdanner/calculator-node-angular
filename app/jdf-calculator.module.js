System.register(['@angular/core', '@angular/platform-browser', '@angular/forms', './jdf-calculator.component', './jdf-calculator.service'], function(exports_1, context_1) {
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
    var core_1, platform_browser_1, forms_1, jdf_calculator_component_1, jdf_calculator_service_1;
    var JDFCalculatorModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (jdf_calculator_component_1_1) {
                jdf_calculator_component_1 = jdf_calculator_component_1_1;
            },
            function (jdf_calculator_service_1_1) {
                jdf_calculator_service_1 = jdf_calculator_service_1_1;
            }],
        execute: function() {
            JDFCalculatorModule = (function () {
                function JDFCalculatorModule() {
                }
                JDFCalculatorModule = __decorate([
                    core_1.NgModule({
                        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, forms_1.ReactiveFormsModule],
                        declarations: [jdf_calculator_component_1.JDFCalculator],
                        providers: [jdf_calculator_service_1.JDFCalculatorService],
                        bootstrap: [jdf_calculator_component_1.JDFCalculator]
                    }), 
                    __metadata('design:paramtypes', [])
                ], JDFCalculatorModule);
                return JDFCalculatorModule;
            }());
            exports_1("JDFCalculatorModule", JDFCalculatorModule);
        }
    }
});
//# sourceMappingURL=jdf-calculator.module.js.map