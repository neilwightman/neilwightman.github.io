(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" style=\"padding: 2em 0; min-height: 90vh;\">\n    <div class=\"row\">\n        <div class=\"col s12 m8 l6 offset-m2 offset-l3\">\n\n            <h5 class=\"orange-text center\">Please, login into your account</h5>\n            <div class=\"z-depth-1 grey lighten-4 row\" style=\"padding: 2em; border: 1px solid #EEE;\">\n\n                <form class=\"col s12\" [formGroup]=\"loginFormGroup\" (submit)=\"login()\">\n                    <div class=\"row\">\n                        <div class=\"input-field col s12\">\n                            <i class=\"material-icons prefix\">email</i>\n                            <input name=\"email\" id=\"email\" type=\"email\" formControlName=\"email\" required>\n                            <label for=\"email\">Email Address</label>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"input-field col s12\">\n                            <i class=\"material-icons prefix\">lock</i>\n                            <input type=\"password\" name=\"password\" id=\"password\" formControlName=\"password\" required>\n                            <label for=\"password\">Enter your password</label>\n                        </div>\n\n                        <p *ngIf=\"formErrors.email\" class=\"red-text\">\n                            {{ formErrors.email }}\n                        </p>\n\n                        <p *ngIf=\"formErrors.password\" class=\"red-text\">\n                            {{ formErrors.password }}\n                        </p>\n\n                        <p *ngFor=\"let error of apiErrors\" class=\"red-text\">\n                            {{ error }}\n                        </p>\n\n                        <label style=\"float: right;\">\n                            <a class=\"pink-text\"><b>Forgot Password?</b></a>\n                        </label>\n                    </div>\n\n                    <br/>\n                    <div class=\"row\">\n                        <button type=\"submit\" name=\"btn_login\" class=\"col s12 btn btn-large waves-effect\"\n                                style=\"background: #FF6F39;\">Login\n                        </button>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var loginRoutes = [
    {
        path: '',
        component: _login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    },
];
var LoginRoutingModule = /** @class */ (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(loginRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ],
            providers: []
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n.input-field .prefix {\n    top: 13px;\n}\n\n/* label color */\n\n.input-field label {\n    color: #000;\n}\n\n/* label focus color */\n\n.input-field input:focus + label,\n.input-field textarea:focus + label {\n    color: #FF6F39;\n}\n\n/* label underline focus color */\n\n.input-field input,\n.input-field textarea {\n    border-bottom: 2px solid #FF6F39;\n    box-shadow: none;\n}\n\n/* label underline focus color */\n\n.input-field input:focus,\n.input-field textarea:focus {\n    border-bottom: 2px solid #FF6F39;\n    box-shadow: none;\n}\n\n/* valid color */\n\n.input-field input.valid {\n    border-bottom: 2px solid #FF6F39;\n    box-shadow: none;\n}\n\n/* invalid color */\n\n.input-field input.invalid {\n    border-bottom: 2px solid #FF6F39;\n    box-shadow: none;\n}\n\n/* icon prefix focus color */\n\n.input-field .prefix.active {\n    color: #000;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBLGdCQUFnQjs7QUFDaEI7SUFDSSxXQUFXO0FBQ2Y7O0FBQ0Esc0JBQXNCOztBQUN0Qjs7SUFFSSxjQUFjO0FBQ2xCOztBQUNBLGdDQUFnQzs7QUFDaEM7O0lBRUksZ0NBQWdDO0lBQ2hDLGdCQUFnQjtBQUNwQjs7QUFDQSxnQ0FBZ0M7O0FBQ2hDOztJQUVJLGdDQUFnQztJQUNoQyxnQkFBZ0I7QUFDcEI7O0FBQ0EsZ0JBQWdCOztBQUNoQjtJQUNJLGdDQUFnQztJQUNoQyxnQkFBZ0I7QUFDcEI7O0FBQ0Esa0JBQWtCOztBQUNsQjtJQUNJLGdDQUFnQztJQUNoQyxnQkFBZ0I7QUFDcEI7O0FBQ0EsNEJBQTRCOztBQUM1QjtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLmlucHV0LWZpZWxkIC5wcmVmaXgge1xuICAgIHRvcDogMTNweDtcbn1cblxuLyogbGFiZWwgY29sb3IgKi9cbi5pbnB1dC1maWVsZCBsYWJlbCB7XG4gICAgY29sb3I6ICMwMDA7XG59XG4vKiBsYWJlbCBmb2N1cyBjb2xvciAqL1xuLmlucHV0LWZpZWxkIGlucHV0OmZvY3VzICsgbGFiZWwsXG4uaW5wdXQtZmllbGQgdGV4dGFyZWE6Zm9jdXMgKyBsYWJlbCB7XG4gICAgY29sb3I6ICNGRjZGMzk7XG59XG4vKiBsYWJlbCB1bmRlcmxpbmUgZm9jdXMgY29sb3IgKi9cbi5pbnB1dC1maWVsZCBpbnB1dCxcbi5pbnB1dC1maWVsZCB0ZXh0YXJlYSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNGRjZGMzk7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi8qIGxhYmVsIHVuZGVybGluZSBmb2N1cyBjb2xvciAqL1xuLmlucHV0LWZpZWxkIGlucHV0OmZvY3VzLFxuLmlucHV0LWZpZWxkIHRleHRhcmVhOmZvY3VzIHtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0ZGNkYzOTtcbiAgICBib3gtc2hhZG93OiBub25lO1xufVxuLyogdmFsaWQgY29sb3IgKi9cbi5pbnB1dC1maWVsZCBpbnB1dC52YWxpZCB7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNGRjZGMzk7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi8qIGludmFsaWQgY29sb3IgKi9cbi5pbnB1dC1maWVsZCBpbnB1dC5pbnZhbGlkIHtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0ZGNkYzOTtcbiAgICBib3gtc2hhZG93OiBub25lO1xufVxuLyogaWNvbiBwcmVmaXggZm9jdXMgY29sb3IgKi9cbi5pbnB1dC1maWVsZCAucHJlZml4LmFjdGl2ZSB7XG4gICAgY29sb3I6ICMwMDA7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(_authService, router, fb) {
        this._authService = _authService;
        this.router = router;
        this.fb = fb;
        this.loginForm = {
            email: undefined,
            password: undefined
        };
        this.isValid = false;
        this.apiErrors = [];
        this.formErrors = {
            'email': '',
            'password': ''
        };
        this.validationMessages = {
            'email': { 'required': 'Email is required.' },
            'password': { 'required': 'Password is required.' }
        };
        if (this._authService.isLoggedIn) {
            this._authService.logout();
        }
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    LoginComponent.prototype.buildForm = function () {
        var _this = this;
        this.loginFormGroup = this.fb.group({
            'email': [this.loginForm.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            'password': [this.loginForm.password, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
        this.loginFormGroup.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged(); // (re)set validation messages now
    };
    LoginComponent.prototype.onValueChanged = function (data) {
        var _this = this;
        if (!this.loginFormGroup) {
            return;
        }
        Object.keys(this.formErrors).forEach(function (field) {
            // clear previous error message (if any)
            _this.formErrors[field] = '';
            var control = _this.loginFormGroup.get(field);
            _this.isValid = _this.isValid || control.dirty;
            if (control && control.dirty && !control.valid) {
                var messages_1 = _this.validationMessages[field];
                Object.keys(control.errors).forEach(function (key) {
                    _this.formErrors[field] += messages_1[key] + ' ';
                });
            }
            else {
                _this.loginForm[field] = control.value;
            }
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.apiErrors = [];
        if (!this.isValid) {
            return;
        }
        this._authService.login(this.loginForm)
            .then(function (result) {
            var redirect = _this._authService.redirectUrl ? _this._authService.redirectUrl : '/home';
            _this.router.navigate([redirect]);
        })
            .catch(function (err) {
            var resJson = err;
            if (resJson.error) {
                _this.apiErrors.push(resJson.error);
            }
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
    ]; };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __importDefault(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _login_routing_module__WEBPACK_IMPORTED_MODULE_2__["LoginRoutingModule"]
            ],
            providers: [],
            bootstrap: [_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-login-login-module.js.map