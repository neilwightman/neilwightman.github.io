(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-committee-committee-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/committee/committee.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/committee/committee.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" style=\"min-height: 90vh;\">\n    <div class=\"section\">\n        <div class=\"row\">\n            <div class=\"col s12 m6 offset-m3\">\n\n                <table class=\"bordered highlight striped responsive\">\n                    <thead>\n                    <tr>\n                        <th>Position</th>\n                        <th>Name</th>\n                    </tr>\n                    </thead>\n\n                    <tbody>\n                    <tr>\n                        <td>President</td>\n                        <td>John Agar</td>\n                    </tr>\n                    <tr>\n                        <td>Chairman</td>\n                        <td>Lee Savage</td>\n                    </tr>\n                    <tr>\n                        <td>Treasurer</td>\n                        <td>Mary Wightman</td>\n                    </tr>\n                    <tr>\n                        <td>Adult Team Secretary</td>\n                        <td>John Wightman</td>\n                    </tr>\n                    <tr>\n                        <td>Youth Team Secretary</td>\n                        <td>Sharon Franklin</td>\n                    </tr>\n                    <tr>\n                        <td> Committee Members</td>\n                        <td>\n                            <ul>\n                                <li>Liam Franklin</li>\n                                <li>Chris Basford</li>\n                                <li>Steve Buxton</li>\n                                <li>Lee Wightman</li>\n                                <li>Simon Laidler</li>\n                                <li>Maxine Abbott</li>\n                                <li>Darren Foulkes</li>\n                            </ul>\n                        </td>\n\n                    </tr>\n                    </tbody>\n                </table>\n            </div>\n\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/committee/committee-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/committee/committee-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: CommitteeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommitteeRoutingModule", function() { return CommitteeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _committee_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./committee.component */ "./src/app/committee/committee.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var committeeRoutes = [
    {
        path: '',
        component: _committee_component__WEBPACK_IMPORTED_MODULE_2__["CommitteeComponent"]
    },
];
var CommitteeRoutingModule = /** @class */ (function () {
    function CommitteeRoutingModule() {
    }
    CommitteeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(committeeRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ],
            providers: []
        })
    ], CommitteeRoutingModule);
    return CommitteeRoutingModule;
}());



/***/ }),

/***/ "./src/app/committee/committee.component.css":
/*!***************************************************!*\
  !*** ./src/app/committee/committee.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1pdHRlZS9jb21taXR0ZWUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/committee/committee.component.ts":
/*!**************************************************!*\
  !*** ./src/app/committee/committee.component.ts ***!
  \**************************************************/
/*! exports provided: CommitteeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommitteeComponent", function() { return CommitteeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
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

var CommitteeComponent = /** @class */ (function () {
    function CommitteeComponent() {
    }
    CommitteeComponent.prototype.ngOnInit = function () { };
    CommitteeComponent.ctorParameters = function () { return []; };
    CommitteeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __importDefault(__webpack_require__(/*! raw-loader!./committee.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/committee/committee.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./committee.component.css */ "./src/app/committee/committee.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], CommitteeComponent);
    return CommitteeComponent;
}());



/***/ }),

/***/ "./src/app/committee/committee.module.ts":
/*!***********************************************!*\
  !*** ./src/app/committee/committee.module.ts ***!
  \***********************************************/
/*! exports provided: CommitteeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommitteeModule", function() { return CommitteeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _committee_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./committee.component */ "./src/app/committee/committee.component.ts");
/* harmony import */ var _committee_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./committee-routing.module */ "./src/app/committee/committee-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CommitteeModule = /** @class */ (function () {
    function CommitteeModule() {
    }
    CommitteeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _committee_component__WEBPACK_IMPORTED_MODULE_1__["CommitteeComponent"]
            ],
            imports: [
                _committee_routing_module__WEBPACK_IMPORTED_MODULE_2__["CommitteeRoutingModule"]
            ],
            providers: [],
            bootstrap: [_committee_component__WEBPACK_IMPORTED_MODULE_1__["CommitteeComponent"]]
        })
    ], CommitteeModule);
    return CommitteeModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-committee-committee-module.js.map