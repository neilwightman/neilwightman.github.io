(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-admin-admin-module~app-events-event-module"],{

/***/ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js ***!
  \****************************************************************************/
/*! exports provided: MAT_ERROR, MAT_FORM_FIELD, MAT_FORM_FIELD_DEFAULT_OPTIONS, MAT_PREFIX, MAT_SUFFIX, MatError, MatFormField, MatFormFieldControl, MatFormFieldModule, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix, _MAT_HINT, getMatFormFieldDuplicatedHintError, getMatFormFieldMissingControlError, getMatFormFieldPlaceholderConflictError, matFormFieldAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_ERROR", function() { return MAT_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_FORM_FIELD", function() { return MAT_FORM_FIELD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_FORM_FIELD_DEFAULT_OPTIONS", function() { return MAT_FORM_FIELD_DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_PREFIX", function() { return MAT_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SUFFIX", function() { return MAT_SUFFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatError", function() { return MatError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatFormField", function() { return MatFormField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatFormFieldControl", function() { return MatFormFieldControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatFormFieldModule", function() { return MatFormFieldModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatHint", function() { return MatHint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatLabel", function() { return MatLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatPlaceholder", function() { return MatPlaceholder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatPrefix", function() { return MatPrefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSuffix", function() { return MatSuffix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MAT_HINT", function() { return _MAT_HINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatFormFieldDuplicatedHintError", function() { return getMatFormFieldDuplicatedHintError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatFormFieldMissingControlError", function() { return getMatFormFieldMissingControlError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatFormFieldPlaceholderConflictError", function() { return getMatFormFieldPlaceholderConflictError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matFormFieldAnimations", function() { return matFormFieldAnimations; });
/* harmony import */ var _home_nwightma_homepage_abbey2_abbey_ui_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_nwightma_homepage_abbey2_abbey_ui_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_nwightma_homepage_abbey2_abbey_ui_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _home_nwightma_homepage_abbey2_abbey_ui_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/observers */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/observers.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/fesm2015/coercion.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");















/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */






var _c0 = ["underline"];
var _c1 = ["connectionContainer"];
var _c2 = ["inputContainer"];
var _c3 = ["label"];

function MatFormField_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
}

function MatFormField_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵprojection"](1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function MatFormField_label_9_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵprojection"](1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r10._control.placeholder);
  }
}

function MatFormField_label_9_ng_content_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵprojection"](0, 3, ["*ngSwitchCase", "true"]);
  }
}

function MatFormField_label_9_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function MatFormField_label_9_Template(rf, ctx) {
  if (rf & 1) {
    var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "label", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("cdkObserveContent", function MatFormField_label_9_Template_label_cdkObserveContent_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14);
      var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r13.updateOutlineGap();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, MatFormField_label_9_ng_container_2_Template, 4, 1, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, MatFormField_label_9_ng_content_3_Template, 1, 0, "ng-content", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, MatFormField_label_9_span_4_Template, 2, 0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("mat-empty", ctx_r4._control.empty && !ctx_r4._shouldAlwaysFloat())("mat-form-field-empty", ctx_r4._control.empty && !ctx_r4._shouldAlwaysFloat())("mat-accent", ctx_r4.color == "accent")("mat-warn", ctx_r4.color == "warn");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("cdkObserveContentDisabled", ctx_r4.appearance != "outline")("id", ctx_r4._labelId)("ngSwitch", ctx_r4._hasLabel());
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("for", ctx_r4._control.id)("aria-owns", ctx_r4._control.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r4.hideRequiredMarker && ctx_r4._control.required && !ctx_r4._control.disabled);
  }
}

function MatFormField_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵprojection"](1, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function MatFormField_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 25, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("mat-accent", ctx_r6.color == "accent")("mat-warn", ctx_r6.color == "warn");
  }
}

function MatFormField_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵprojection"](1, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("@transitionMessages", ctx_r7._subscriptAnimationState);
  }
}

function MatFormField_div_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("id", ctx_r16._hintLabelId);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r16.hintLabel);
  }
}

function MatFormField_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, MatFormField_div_14_div_1_Template, 2, 2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵprojection"](2, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵprojection"](4, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("@transitionMessages", ctx_r8._subscriptAnimationState);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r8.hintLabel);
  }
}

var _c4 = ["*", [["", "matPrefix", ""]], [["mat-placeholder"]], [["mat-label"]], [["", "matSuffix", ""]], [["mat-error"]], [["mat-hint", 3, "align", "end"]], [["mat-hint", "align", "end"]]];
var _c5 = ["*", "[matPrefix]", "mat-placeholder", "mat-label", "[matSuffix]", "mat-error", "mat-hint:not([align='end'])", "mat-hint[align='end']"];
var nextUniqueId = 0;
/**
 * Injection token that can be used to reference instances of `MatError`. It serves as
 * alternative token to the actual `MatError` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */

var MAT_ERROR = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["InjectionToken"]('MatError');
/** Single error message to be shown underneath the form field. */

var MatError = function MatError() {
  Object(_home_nwightma_homepage_abbey2_abbey_ui_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MatError);

  this.id = "mat-error-".concat(nextUniqueId++);
};

MatError.ɵfac = function MatError_Factory(t) {
  return new (t || MatError)();
};

MatError.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
  type: MatError,
  selectors: [["mat-error"]],
  hostAttrs: ["role", "alert", 1, "mat-error"],
  hostVars: 1,
  hostBindings: function MatError_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("id", ctx.id);
    }
  },
  inputs: {
    id: "id"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵProvidersFeature"]([{
    provide: MAT_ERROR,
    useExisting: MatError
  }])]
});
MatError.propDecorators = {
  id: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](MatError, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Directive"],
    args: [{
      selector: 'mat-error',
      host: {
        'class': 'mat-error',
        'role': 'alert',
        '[attr.id]': 'id'
      },
      providers: [{
        provide: MAT_ERROR,
        useExisting: MatError
      }]
    }]
  }], function () {
    return [];
  }, {
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Animations used by the MatFormField.
 * @docs-private
 */


var matFormFieldAnimations = {
  /** Animation that transitions the form field's error and hint messages. */
  transitionMessages: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["trigger"])('transitionMessages', [// TODO(mmalerba): Use angular animations for label animation as well.
  Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["state"])('enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["style"])({
    opacity: 1,
    transform: 'translateY(0%)'
  })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["transition"])('void => enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["style"])({
    opacity: 0,
    transform: 'translateY(-100%)'
  }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["animate"])('300ms cubic-bezier(0.55, 0, 0.55, 0.2)')])])
};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** An interface which allows a control to work inside of a `MatFormField`. */

var MatFormFieldControl = function MatFormFieldControl() {
  Object(_home_nwightma_homepage_abbey2_abbey_ui_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MatFormFieldControl);
};

MatFormFieldControl.ɵfac = function MatFormFieldControl_Factory(t) {
  return new (t || MatFormFieldControl)();
};

MatFormFieldControl.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
  type: MatFormFieldControl
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](MatFormFieldControl, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Directive"]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** @docs-private */


function getMatFormFieldPlaceholderConflictError() {
  return Error('Placeholder attribute and child element were both specified.');
}
/** @docs-private */


function getMatFormFieldDuplicatedHintError(align) {
  return Error("A hint was already declared for 'align=\"".concat(align, "\"'."));
}
/** @docs-private */


function getMatFormFieldMissingControlError() {
  return Error('mat-form-field must contain a MatFormFieldControl.');
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var nextUniqueId$1 = 0;
/**
 * Injection token that can be used to reference instances of `MatHint`. It serves as
 * alternative token to the actual `MatHint` class which could cause unnecessary
 * retention of the class and its directive metadata.
 *
 * *Note*: This is not part of the public API as the MDC-based form-field will not
 * need a lightweight token for `MatHint` and we want to reduce breaking changes.
 */

var _MAT_HINT = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["InjectionToken"]('MatHint');
/** Hint text to be shown underneath the form field control. */


var MatHint = function MatHint() {
  Object(_home_nwightma_homepage_abbey2_abbey_ui_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MatHint);

  /** Whether to align the hint label at the start or end of the line. */
  this.align = 'start';
  /** Unique ID for the hint. Used for the aria-describedby on the form field control. */

  this.id = "mat-hint-".concat(nextUniqueId$1++);
};

MatHint.ɵfac = function MatHint_Factory(t) {
  return new (t || MatHint)();
};

MatHint.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
  type: MatHint,
  selectors: [["mat-hint"]],
  hostAttrs: [1, "mat-hint"],
  hostVars: 4,
  hostBindings: function MatHint_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("id", ctx.id)("align", null);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("mat-right", ctx.align == "end");
    }
  },
  inputs: {
    align: "align",
    id: "id"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵProvidersFeature"]([{
    provide: _MAT_HINT,
    useExisting: MatHint
  }])]
});
MatHint.propDecorators = {
  align: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }],
  id: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](MatHint, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Directive"],
    args: [{
      selector: 'mat-hint',
      host: {
        'class': 'mat-hint',
        '[class.mat-right]': 'align == "end"',
        '[attr.id]': 'id',
        // Remove align attribute to prevent it from interfering with layout.
        '[attr.align]': 'null'
      },
      providers: [{
        provide: _MAT_HINT,
        useExisting: MatHint
      }]
    }]
  }], function () {
    return [];
  }, {
    align: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }],
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** The floating label for a `mat-form-field`. */


var MatLabel = function MatLabel() {
  Object(_home_nwightma_homepage_abbey2_abbey_ui_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MatLabel);
};

MatLabel.ɵfac = function MatLabel_Factory(t) {
  return new (t || MatLabel)();
};

MatLabel.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
  type: MatLabel,
  selectors: [["mat-label"]]
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](MatLabel, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Directive"],
    args: [{
      selector: 'mat-label'
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * The placeholder text for an `MatFormField`.
 * @deprecated Use `<mat-label>` to specify the label and the `placeholder` attribute to specify the
 *     placeholder.
 * @breaking-change 8.0.0
 */


var MatPlaceholder = function MatPlaceholder() {
  Object(_home_nwightma_homepage_abbey2_abbey_ui_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MatPlaceholder);
};

MatPlaceholder.ɵfac = function MatPlaceholder_Factory(t) {
  return new (t || MatPlaceholder)();
};

MatPlaceholder.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
  type: MatPlaceholder,
  selectors: [["mat-placeholder"]]
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](MatPlaceholder, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Directive"],
    args: [{
      selector: 'mat-placeholder'
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Injection token that can be used to reference instances of `MatPrefix`. It serves as
 * alternative token to the actual `MatPrefix` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */


var MAT_PREFIX = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["InjectionToken"]('MatPrefix');
/** Prefix to be placed in front of the form field. */

var MatPrefix = function MatPrefix() {
  Object(_home_nwightma_homepage_abbey2_abbey_ui_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MatPrefix);
};

MatPrefix.ɵfac = function MatPrefix_Factory(t) {
  return new (t || MatPrefix)();
};

MatPrefix.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
  type: MatPrefix,
  selectors: [["", "matPrefix", ""]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵProvidersFeature"]([{
    provide: MAT_PREFIX,
    useExisting: MatPrefix
  }])]
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](MatPrefix, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Directive"],
    args: [{
      selector: '[matPrefix]',
      providers: [{
        provide: MAT_PREFIX,
        useExisting: MatPrefix
      }]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Injection token that can be used to reference instances of `MatSuffix`. It serves as
 * alternative token to the actual `MatSuffix` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */


var MAT_SUFFIX = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["InjectionToken"]('MatSuffix');
/** Suffix to be placed at the end of the form field. */

var MatSuffix = function MatSuffix() {
  Object(_home_nwightma_homepage_abbey2_abbey_ui_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MatSuffix);
};

MatSuffix.ɵfac = function MatSuffix_Factory(t) {
  return new (t || MatSuffix)();
};

MatSuffix.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
  type: MatSuffix,
  selectors: [["", "matSuffix", ""]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵProvidersFeature"]([{
    provide: MAT_SUFFIX,
    useExisting: MatSuffix
  }])]
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](MatSuffix, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Directive"],
    args: [{
      selector: '[matSuffix]',
      providers: [{
        provide: MAT_SUFFIX,
        useExisting: MatSuffix
      }]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var nextUniqueId$2 = 0;
var floatingLabelScale = 0.75;
var outlineGapPadding = 5;
/**
 * Boilerplate for applying mixins to MatFormField.
 * @docs-private
 */

var MatFormFieldBase = function MatFormFieldBase(_elementRef) {
  Object(_home_nwightma_homepage_abbey2_abbey_ui_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MatFormFieldBase);

  this._elementRef = _elementRef;
};
/**
 * Base class to which we're applying the form field mixins.
 * @docs-private
 */


var _MatFormFieldMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_7__["mixinColor"])(MatFormFieldBase, 'primary');
/**
 * Injection token that can be used to configure the
 * default options for all form field within an app.
 */


var MAT_FORM_FIELD_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["InjectionToken"]('MAT_FORM_FIELD_DEFAULT_OPTIONS');
/**
 * Injection token that can be used to inject an instances of `MatFormField`. It serves
 * as alternative token to the actual `MatFormField` class which would cause unnecessary
 * retention of the `MatFormField` class and its component metadata.
 */

var MAT_FORM_FIELD = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["InjectionToken"]('MatFormField');
/** Container for form controls that applies Material Design styling and behavior. */

var MatFormField = /*#__PURE__*/function (_MatFormFieldMixinBas) {
  Object(_home_nwightma_homepage_abbey2_abbey_ui_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__["default"])(MatFormField, _MatFormFieldMixinBas);

  var _super = Object(_home_nwightma_homepage_abbey2_abbey_ui_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__["default"])(MatFormField);

  function MatFormField(_elementRef, _changeDetectorRef, labelOptions, _dir, _defaults, _platform, _ngZone, _animationMode) {
    var _this;

    Object(_home_nwightma_homepage_abbey2_abbey_ui_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MatFormField);

    _this = _super.call(this, _elementRef);
    _this._elementRef = _elementRef;
    _this._changeDetectorRef = _changeDetectorRef;
    _this._dir = _dir;
    _this._defaults = _defaults;
    _this._platform = _platform;
    _this._ngZone = _ngZone;
    /**
     * Whether the outline gap needs to be calculated
     * immediately on the next change detection run.
     */

    _this._outlineGapCalculationNeededImmediately = false;
    /** Whether the outline gap needs to be calculated next time the zone has stabilized. */

    _this._outlineGapCalculationNeededOnStable = false;
    _this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
    /** Override for the logic that disables the label animation in certain cases. */

    _this._showAlwaysAnimate = false;
    /** State of the mat-hint and mat-error animations. */

    _this._subscriptAnimationState = '';
    _this._hintLabel = ''; // Unique id for the hint label.

    _this._hintLabelId = "mat-hint-".concat(nextUniqueId$2++); // Unique id for the internal form field label.

    _this._labelId = "mat-form-field-label-".concat(nextUniqueId$2++);
    _this._labelOptions = labelOptions ? labelOptions : {};
    _this.floatLabel = _this._getDefaultFloatLabelState();
    _this._animationsEnabled = _animationMode !== 'NoopAnimations'; // Set the default through here so we invoke the setter on the first run.

    _this.appearance = _defaults && _defaults.appearance ? _defaults.appearance : 'legacy';
    _this._hideRequiredMarker = _defaults && _defaults.hideRequiredMarker != null ? _defaults.hideRequiredMarker : false;
    return _this;
  }
  /** The form-field appearance style. */


  Object(_home_nwightma_homepage_abbey2_abbey_ui_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(MatFormField, [{
    key: "_shouldAlwaysFloat",

    /** Whether the floating label should always float or not. */
    value: function _shouldAlwaysFloat() {
      return this.floatLabel === 'always' && !this._showAlwaysAnimate;
    }
    /** Whether the label can float or not. */

  }, {
    key: "_canLabelFloat",
    value: function _canLabelFloat() {
      return this.floatLabel !== 'never';
    }
    /** Text for the form field hint. */

  }, {
    key: "getConnectedOverlayOrigin",

    /**
     * Gets an ElementRef for the element that a overlay attached to the form-field should be
     * positioned relative to.
     */
    value: function getConnectedOverlayOrigin() {
      return this._connectionContainerRef || this._elementRef;
    }
  }, {
    key: "ngAfterContentInit",
    value: function ngAfterContentInit() {
      var _this2 = this;

      this._validateControlChild();

      var control = this._control;

      if (control.controlType) {
        this._elementRef.nativeElement.classList.add("mat-form-field-type-".concat(control.controlType));
      } // Subscribe to changes in the child control state in order to update the form field UI.


      control.stateChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["startWith"])(null)).subscribe(function () {
        _this2._validatePlaceholders();

        _this2._syncDescribedByIds();

        _this2._changeDetectorRef.markForCheck();
      }); // Run change detection if the value changes.

      if (control.ngControl && control.ngControl.valueChanges) {
        control.ngControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["takeUntil"])(this._destroyed)).subscribe(function () {
          return _this2._changeDetectorRef.markForCheck();
        });
      } // Note that we have to run outside of the `NgZone` explicitly,
      // in order to avoid throwing users into an infinite loop
      // if `zone-patch-rxjs` is included.


      this._ngZone.runOutsideAngular(function () {
        _this2._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["takeUntil"])(_this2._destroyed)).subscribe(function () {
          if (_this2._outlineGapCalculationNeededOnStable) {
            _this2.updateOutlineGap();
          }
        });
      }); // Run change detection and update the outline if the suffix or prefix changes.


      Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["merge"])(this._prefixChildren.changes, this._suffixChildren.changes).subscribe(function () {
        _this2._outlineGapCalculationNeededOnStable = true;

        _this2._changeDetectorRef.markForCheck();
      }); // Re-validate when the number of hints changes.

      this._hintChildren.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["startWith"])(null)).subscribe(function () {
        _this2._processHints();

        _this2._changeDetectorRef.markForCheck();
      }); // Update the aria-described by when the number of errors changes.


      this._errorChildren.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["startWith"])(null)).subscribe(function () {
        _this2._syncDescribedByIds();

        _this2._changeDetectorRef.markForCheck();
      });

      if (this._dir) {
        this._dir.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["takeUntil"])(this._destroyed)).subscribe(function () {
          if (typeof requestAnimationFrame === 'function') {
            _this2._ngZone.runOutsideAngular(function () {
              requestAnimationFrame(function () {
                return _this2.updateOutlineGap();
              });
            });
          } else {
            _this2.updateOutlineGap();
          }
        });
      }
    }
  }, {
    key: "ngAfterContentChecked",
    value: function ngAfterContentChecked() {
      this._validateControlChild();

      if (this._outlineGapCalculationNeededImmediately) {
        this.updateOutlineGap();
      }
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      // Avoid animations on load.
      this._subscriptAnimationState = 'enter';

      this._changeDetectorRef.detectChanges();
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._destroyed.next();

      this._destroyed.complete();
    }
    /** Determines whether a class from the NgControl should be forwarded to the host element. */

  }, {
    key: "_shouldForward",
    value: function _shouldForward(prop) {
      var ngControl = this._control ? this._control.ngControl : null;
      return ngControl && ngControl[prop];
    }
  }, {
    key: "_hasPlaceholder",
    value: function _hasPlaceholder() {
      return !!(this._control && this._control.placeholder || this._placeholderChild);
    }
  }, {
    key: "_hasLabel",
    value: function _hasLabel() {
      return !!(this._labelChildNonStatic || this._labelChildStatic);
    }
  }, {
    key: "_shouldLabelFloat",
    value: function _shouldLabelFloat() {
      return this._canLabelFloat() && (this._control && this._control.shouldLabelFloat || this._shouldAlwaysFloat());
    }
  }, {
    key: "_hideControlPlaceholder",
    value: function _hideControlPlaceholder() {
      // In the legacy appearance the placeholder is promoted to a label if no label is given.
      return this.appearance === 'legacy' && !this._hasLabel() || this._hasLabel() && !this._shouldLabelFloat();
    }
  }, {
    key: "_hasFloatingLabel",
    value: function _hasFloatingLabel() {
      // In the legacy appearance the placeholder is promoted to a label if no label is given.
      return this._hasLabel() || this.appearance === 'legacy' && this._hasPlaceholder();
    }
    /** Determines whether to display hints or errors. */

  }, {
    key: "_getDisplayedMessages",
    value: function _getDisplayedMessages() {
      return this._errorChildren && this._errorChildren.length > 0 && this._control.errorState ? 'error' : 'hint';
    }
    /** Animates the placeholder up and locks it in position. */

  }, {
    key: "_animateAndLockLabel",
    value: function _animateAndLockLabel() {
      var _this3 = this;

      if (this._hasFloatingLabel() && this._canLabelFloat()) {
        // If animations are disabled, we shouldn't go in here,
        // because the `transitionend` will never fire.
        if (this._animationsEnabled && this._label) {
          this._showAlwaysAnimate = true;
          Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["fromEvent"])(this._label.nativeElement, 'transitionend').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["take"])(1)).subscribe(function () {
            _this3._showAlwaysAnimate = false;
          });
        }

        this.floatLabel = 'always';

        this._changeDetectorRef.markForCheck();
      }
    }
    /**
     * Ensure that there is only one placeholder (either `placeholder` attribute on the child control
     * or child element with the `mat-placeholder` directive).
     */

  }, {
    key: "_validatePlaceholders",
    value: function _validatePlaceholders() {
      if (this._control.placeholder && this._placeholderChild) {
        throw getMatFormFieldPlaceholderConflictError();
      }
    }
    /** Does any extra processing that is required when handling the hints. */

  }, {
    key: "_processHints",
    value: function _processHints() {
      this._validateHints();

      this._syncDescribedByIds();
    }
    /**
     * Ensure that there is a maximum of one of each `<mat-hint>` alignment specified, with the
     * attribute being considered as `align="start"`.
     */

  }, {
    key: "_validateHints",
    value: function _validateHints() {
      var _this4 = this;

      if (this._hintChildren) {
        var startHint;
        var endHint;

        this._hintChildren.forEach(function (hint) {
          if (hint.align === 'start') {
            if (startHint || _this4.hintLabel) {
              throw getMatFormFieldDuplicatedHintError('start');
            }

            startHint = hint;
          } else if (hint.align === 'end') {
            if (endHint) {
              throw getMatFormFieldDuplicatedHintError('end');
            }

            endHint = hint;
          }
        });
      }
    }
    /** Gets the default float label state. */

  }, {
    key: "_getDefaultFloatLabelState",
    value: function _getDefaultFloatLabelState() {
      return this._defaults && this._defaults.floatLabel || this._labelOptions.float || 'auto';
    }
    /**
     * Sets the list of element IDs that describe the child control. This allows the control to update
     * its `aria-describedby` attribute accordingly.
     */

  }, {
    key: "_syncDescribedByIds",
    value: function _syncDescribedByIds() {
      if (this._control) {
        var ids = [];

        if (this._getDisplayedMessages() === 'hint') {
          var startHint = this._hintChildren ? this._hintChildren.find(function (hint) {
            return hint.align === 'start';
          }) : null;
          var endHint = this._hintChildren ? this._hintChildren.find(function (hint) {
            return hint.align === 'end';
          }) : null;

          if (startHint) {
            ids.push(startHint.id);
          } else if (this._hintLabel) {
            ids.push(this._hintLabelId);
          }

          if (endHint) {
            ids.push(endHint.id);
          }
        } else if (this._errorChildren) {
          ids = this._errorChildren.map(function (error) {
            return error.id;
          });
        }

        this._control.setDescribedByIds(ids);
      }
    }
    /** Throws an error if the form field's control is missing. */

  }, {
    key: "_validateControlChild",
    value: function _validateControlChild() {
      if (!this._control) {
        throw getMatFormFieldMissingControlError();
      }
    }
    /**
     * Updates the width and position of the gap in the outline. Only relevant for the outline
     * appearance.
     */

  }, {
    key: "updateOutlineGap",
    value: function updateOutlineGap() {
      var labelEl = this._label ? this._label.nativeElement : null;

      if (this.appearance !== 'outline' || !labelEl || !labelEl.children.length || !labelEl.textContent.trim()) {
        return;
      }

      if (!this._platform.isBrowser) {
        // getBoundingClientRect isn't available on the server.
        return;
      } // If the element is not present in the DOM, the outline gap will need to be calculated
      // the next time it is checked and in the DOM.


      if (!this._isAttachedToDOM()) {
        this._outlineGapCalculationNeededImmediately = true;
        return;
      }

      var startWidth = 0;
      var gapWidth = 0;
      var container = this._connectionContainerRef.nativeElement;
      var startEls = container.querySelectorAll('.mat-form-field-outline-start');
      var gapEls = container.querySelectorAll('.mat-form-field-outline-gap');

      if (this._label && this._label.nativeElement.children.length) {
        var containerRect = container.getBoundingClientRect(); // If the container's width and height are zero, it means that the element is
        // invisible and we can't calculate the outline gap. Mark the element as needing
        // to be checked the next time the zone stabilizes. We can't do this immediately
        // on the next change detection, because even if the element becomes visible,
        // the `ClientRect` won't be reclaculated immediately. We reset the
        // `_outlineGapCalculationNeededImmediately` flag some we don't run the checks twice.

        if (containerRect.width === 0 && containerRect.height === 0) {
          this._outlineGapCalculationNeededOnStable = true;
          this._outlineGapCalculationNeededImmediately = false;
          return;
        }

        var containerStart = this._getStartEnd(containerRect);

        var labelChildren = labelEl.children;

        var labelStart = this._getStartEnd(labelChildren[0].getBoundingClientRect());

        var labelWidth = 0;

        for (var i = 0; i < labelChildren.length; i++) {
          labelWidth += labelChildren[i].offsetWidth;
        }

        startWidth = Math.abs(labelStart - containerStart) - outlineGapPadding;
        gapWidth = labelWidth > 0 ? labelWidth * floatingLabelScale + outlineGapPadding * 2 : 0;
      }

      for (var _i = 0; _i < startEls.length; _i++) {
        startEls[_i].style.width = "".concat(startWidth, "px");
      }

      for (var _i2 = 0; _i2 < gapEls.length; _i2++) {
        gapEls[_i2].style.width = "".concat(gapWidth, "px");
      }

      this._outlineGapCalculationNeededOnStable = this._outlineGapCalculationNeededImmediately = false;
    }
    /** Gets the start end of the rect considering the current directionality. */

  }, {
    key: "_getStartEnd",
    value: function _getStartEnd(rect) {
      return this._dir && this._dir.value === 'rtl' ? rect.right : rect.left;
    }
    /** Checks whether the form field is attached to the DOM. */

  }, {
    key: "_isAttachedToDOM",
    value: function _isAttachedToDOM() {
      var element = this._elementRef.nativeElement;

      if (element.getRootNode) {
        var rootNode = element.getRootNode(); // If the element is inside the DOM the root node will be either the document
        // or the closest shadow root, otherwise it'll be the element itself.

        return rootNode && rootNode !== element;
      } // Otherwise fall back to checking if it's in the document. This doesn't account for
      // shadow DOM, however browser that support shadow DOM should support `getRootNode` as well.


      return document.documentElement.contains(element);
    }
  }, {
    key: "appearance",
    get: function get() {
      return this._appearance;
    },
    set: function set(value) {
      var oldValue = this._appearance;
      this._appearance = value || this._defaults && this._defaults.appearance || 'legacy';

      if (this._appearance === 'outline' && oldValue !== value) {
        this._outlineGapCalculationNeededOnStable = true;
      }
    }
    /** Whether the required marker should be hidden. */

  }, {
    key: "hideRequiredMarker",
    get: function get() {
      return this._hideRequiredMarker;
    },
    set: function set(value) {
      this._hideRequiredMarker = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_9__["coerceBooleanProperty"])(value);
    }
  }, {
    key: "hintLabel",
    get: function get() {
      return this._hintLabel;
    },
    set: function set(value) {
      this._hintLabel = value;

      this._processHints();
    }
    /**
     * Whether the label should always float, never float or float as the user types.
     *
     * Note: only the legacy appearance supports the `never` option. `never` was originally added as a
     * way to make the floating label emulate the behavior of a standard input placeholder. However
     * the form field now supports both floating labels and placeholders. Therefore in the non-legacy
     * appearances the `never` option has been disabled in favor of just using the placeholder.
     */

  }, {
    key: "floatLabel",
    get: function get() {
      return this.appearance !== 'legacy' && this._floatLabel === 'never' ? 'auto' : this._floatLabel;
    },
    set: function set(value) {
      if (value !== this._floatLabel) {
        this._floatLabel = value || this._getDefaultFloatLabelState();

        this._changeDetectorRef.markForCheck();
      }
    }
  }, {
    key: "_control",
    get: function get() {
      // TODO(crisbeto): we need this workaround in order to support both Ivy and ViewEngine.
      //  We should clean this up once Ivy is the default renderer.
      return this._explicitFormFieldControl || this._controlNonStatic || this._controlStatic;
    },
    set: function set(value) {
      this._explicitFormFieldControl = value;
    }
  }]);

  return MatFormField;
}(_MatFormFieldMixinBase);

MatFormField.ɵfac = function MatFormField_Factory(t) {
  return new (t || MatFormField)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MAT_LABEL_GLOBAL_OPTIONS"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](MAT_FORM_FIELD_DEFAULT_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["ANIMATION_MODULE_TYPE"], 8));
};

MatFormField.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: MatFormField,
  selectors: [["mat-form-field"]],
  contentQueries: function MatFormField_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵcontentQuery"](dirIndex, MatFormFieldControl, true);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstaticContentQuery"](dirIndex, MatFormFieldControl, true);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵcontentQuery"](dirIndex, MatLabel, true);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstaticContentQuery"](dirIndex, MatLabel, true);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵcontentQuery"](dirIndex, MatPlaceholder, true);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵcontentQuery"](dirIndex, MAT_ERROR, true);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵcontentQuery"](dirIndex, _MAT_HINT, true);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵcontentQuery"](dirIndex, MAT_PREFIX, true);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵcontentQuery"](dirIndex, MAT_SUFFIX, true);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx._controlNonStatic = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx._controlStatic = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx._labelChildNonStatic = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx._labelChildStatic = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx._placeholderChild = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx._errorChildren = _t);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx._hintChildren = _t);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx._prefixChildren = _t);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx._suffixChildren = _t);
    }
  },
  viewQuery: function MatFormField_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, true);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstaticViewQuery"](_c1, true);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c2, true);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c3, true);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.underlineRef = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx._connectionContainerRef = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx._inputContainerRef = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx._label = _t.first);
    }
  },
  hostAttrs: [1, "mat-form-field"],
  hostVars: 44,
  hostBindings: function MatFormField_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("mat-form-field-appearance-standard", ctx.appearance == "standard")("mat-form-field-appearance-fill", ctx.appearance == "fill")("mat-form-field-appearance-outline", ctx.appearance == "outline")("mat-form-field-appearance-legacy", ctx.appearance == "legacy")("mat-form-field-invalid", ctx._control.errorState)("mat-form-field-can-float", ctx._canLabelFloat())("mat-form-field-should-float", ctx._shouldLabelFloat())("mat-form-field-has-label", ctx._hasFloatingLabel())("mat-form-field-hide-placeholder", ctx._hideControlPlaceholder())("mat-form-field-disabled", ctx._control.disabled)("mat-form-field-autofilled", ctx._control.autofilled)("mat-focused", ctx._control.focused)("mat-accent", ctx.color == "accent")("mat-warn", ctx.color == "warn")("ng-untouched", ctx._shouldForward("untouched"))("ng-touched", ctx._shouldForward("touched"))("ng-pristine", ctx._shouldForward("pristine"))("ng-dirty", ctx._shouldForward("dirty"))("ng-valid", ctx._shouldForward("valid"))("ng-invalid", ctx._shouldForward("invalid"))("ng-pending", ctx._shouldForward("pending"))("_mat-animation-noopable", !ctx._animationsEnabled);
    }
  },
  inputs: {
    color: "color",
    floatLabel: "floatLabel",
    appearance: "appearance",
    hideRequiredMarker: "hideRequiredMarker",
    hintLabel: "hintLabel"
  },
  exportAs: ["matFormField"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵProvidersFeature"]([{
    provide: MAT_FORM_FIELD,
    useExisting: MatFormField
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c5,
  decls: 15,
  vars: 8,
  consts: [[1, "mat-form-field-wrapper"], [1, "mat-form-field-flex", 3, "click"], ["connectionContainer", ""], [4, "ngIf"], ["class", "mat-form-field-prefix", 4, "ngIf"], [1, "mat-form-field-infix"], ["inputContainer", ""], [1, "mat-form-field-label-wrapper"], ["class", "mat-form-field-label", 3, "cdkObserveContentDisabled", "id", "mat-empty", "mat-form-field-empty", "mat-accent", "mat-warn", "ngSwitch", "cdkObserveContent", 4, "ngIf"], ["class", "mat-form-field-suffix", 4, "ngIf"], ["class", "mat-form-field-underline", 4, "ngIf"], [1, "mat-form-field-subscript-wrapper", 3, "ngSwitch"], [4, "ngSwitchCase"], ["class", "mat-form-field-hint-wrapper", 4, "ngSwitchCase"], [1, "mat-form-field-outline"], [1, "mat-form-field-outline-start"], [1, "mat-form-field-outline-gap"], [1, "mat-form-field-outline-end"], [1, "mat-form-field-outline", "mat-form-field-outline-thick"], [1, "mat-form-field-prefix"], [1, "mat-form-field-label", 3, "cdkObserveContentDisabled", "id", "ngSwitch", "cdkObserveContent"], ["label", ""], ["class", "mat-placeholder-required mat-form-field-required-marker", "aria-hidden", "true", 4, "ngIf"], ["aria-hidden", "true", 1, "mat-placeholder-required", "mat-form-field-required-marker"], [1, "mat-form-field-suffix"], [1, "mat-form-field-underline"], ["underline", ""], [1, "mat-form-field-ripple"], [1, "mat-form-field-hint-wrapper"], ["class", "mat-hint", 3, "id", 4, "ngIf"], [1, "mat-form-field-hint-spacer"], [1, "mat-hint", 3, "id"]],
  template: function MatFormField_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵprojectionDef"](_c4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MatFormField_Template_div_click_1_listener($event) {
        return ctx._control.onContainerClick && ctx._control.onContainerClick($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, MatFormField_ng_container_3_Template, 9, 0, "ng-container", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, MatFormField_div_4_Template, 2, 0, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 5, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵprojection"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, MatFormField_label_9_Template, 5, 16, "label", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, MatFormField_div_10_Template, 2, 0, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, MatFormField_div_11_Template, 3, 4, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, MatFormField_div_13_Template, 2, 1, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, MatFormField_div_14_Template, 5, 2, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.appearance == "outline");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx._prefixChildren.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx._hasFloatingLabel());
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx._suffixChildren.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.appearance != "outline");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitch", ctx._getDisplayedMessages());
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", "error");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", "hint");
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitchCase"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_4__["CdkObserveContent"]],
  styles: [".mat-form-field{display:inline-block;position:relative;text-align:left}[dir=rtl] .mat-form-field{text-align:right}.mat-form-field-wrapper{position:relative}.mat-form-field-flex{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-prefix,.mat-form-field-suffix{white-space:nowrap;flex:none;position:relative}.mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:180px}.cdk-high-contrast-active .mat-form-field-infix{border-image:linear-gradient(transparent, transparent)}.mat-form-field-label-wrapper{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}[dir=rtl] .mat-form-field-label-wrapper{left:auto;right:0}.mat-form-field-label{position:absolute;left:0;font:inherit;pointer-events:none;width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;transform-origin:0 0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),width 400ms cubic-bezier(0.25, 0.8, 0.25, 1);display:none}[dir=rtl] .mat-form-field-label{transform-origin:100% 0;left:auto;right:0}.mat-form-field-empty.mat-form-field-label,.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{display:block}.mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:block;transition:none}.mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float .mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:block}.mat-form-field-label:not(.mat-form-field-empty){transition:none}.mat-form-field-underline{position:absolute;width:100%;pointer-events:none;transform:scale3d(1, 1.0001, 1)}.mat-form-field-ripple{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(0.5);opacity:0;transition:background-color 300ms cubic-bezier(0.55, 0, 0.55, 0.2)}.mat-form-field.mat-focused .mat-form-field-ripple,.mat-form-field.mat-form-field-invalid .mat-form-field-ripple{opacity:1;transform:scaleX(1);transition:transform 300ms cubic-bezier(0.25, 0.8, 0.25, 1),opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 300ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-subscript-wrapper{position:absolute;box-sizing:border-box;width:100%;overflow:hidden}.mat-form-field-subscript-wrapper .mat-icon,.mat-form-field-label-wrapper .mat-icon{width:1em;height:1em;font-size:inherit;vertical-align:baseline}.mat-form-field-hint-wrapper{display:flex}.mat-form-field-hint-spacer{flex:1 0 1em}.mat-error{display:block}.mat-form-field-control-wrapper{position:relative}.mat-form-field._mat-animation-noopable .mat-form-field-label,.mat-form-field._mat-animation-noopable .mat-form-field-ripple{transition:none}\n", ".mat-form-field-appearance-fill .mat-form-field-flex{border-radius:4px 4px 0 0;padding:.75em .75em 0 .75em}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-form-field-flex{outline:solid 1px}.mat-form-field-appearance-fill .mat-form-field-underline::before{content:\"\";display:block;position:absolute;bottom:0;height:1px;width:100%}.mat-form-field-appearance-fill .mat-form-field-ripple{bottom:0;height:2px}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-fill:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-fill._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}.mat-form-field-appearance-fill .mat-form-field-subscript-wrapper{padding:0 1em}\n", ".mat-input-element{font:inherit;background:transparent;color:currentColor;border:none;outline:none;padding:0;margin:0;width:100%;max-width:100%;vertical-align:bottom;text-align:inherit}.mat-input-element:-moz-ui-invalid{box-shadow:none}.mat-input-element::-ms-clear,.mat-input-element::-ms-reveal{display:none}.mat-input-element,.mat-input-element::-webkit-search-cancel-button,.mat-input-element::-webkit-search-decoration,.mat-input-element::-webkit-search-results-button,.mat-input-element::-webkit-search-results-decoration{-webkit-appearance:none}.mat-input-element::-webkit-contacts-auto-fill-button,.mat-input-element::-webkit-caps-lock-indicator,.mat-input-element::-webkit-credentials-auto-fill-button{visibility:hidden}.mat-input-element[type=date],.mat-input-element[type=datetime],.mat-input-element[type=datetime-local],.mat-input-element[type=month],.mat-input-element[type=week],.mat-input-element[type=time]{line-height:1}.mat-input-element[type=date]::after,.mat-input-element[type=datetime]::after,.mat-input-element[type=datetime-local]::after,.mat-input-element[type=month]::after,.mat-input-element[type=week]::after,.mat-input-element[type=time]::after{content:\" \";white-space:pre;width:1px}.mat-input-element::-webkit-inner-spin-button,.mat-input-element::-webkit-calendar-picker-indicator,.mat-input-element::-webkit-clear-button{font-size:.75em}.mat-input-element::placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-moz-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::-moz-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-webkit-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::-webkit-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element:-ms-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element:-ms-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-form-field-hide-placeholder .mat-input-element::placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-moz-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-webkit-input-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element:-ms-input-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}textarea.mat-input-element{resize:vertical;overflow:auto}textarea.mat-input-element.cdk-textarea-autosize{resize:none}textarea.mat-input-element{padding:2px 0;margin:-2px 0}select.mat-input-element{-moz-appearance:none;-webkit-appearance:none;position:relative;background-color:transparent;display:inline-flex;box-sizing:border-box;padding-top:1em;top:-1em;margin-bottom:-1em}select.mat-input-element::-ms-expand{display:none}select.mat-input-element::-moz-focus-inner{border:0}select.mat-input-element:not(:disabled){cursor:pointer}select.mat-input-element::-ms-value{color:inherit;background:none}.mat-focused .cdk-high-contrast-active select.mat-input-element::-ms-value{color:inherit}.mat-form-field-type-mat-native-select .mat-form-field-infix::after{content:\"\";width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;position:absolute;top:50%;right:0;margin-top:-2.5px;pointer-events:none}[dir=rtl] .mat-form-field-type-mat-native-select .mat-form-field-infix::after{right:auto;left:0}.mat-form-field-type-mat-native-select .mat-input-element{padding-right:15px}[dir=rtl] .mat-form-field-type-mat-native-select .mat-input-element{padding-right:0;padding-left:15px}.mat-form-field-type-mat-native-select .mat-form-field-label-wrapper{max-width:calc(100% - 10px)}.mat-form-field-type-mat-native-select.mat-form-field-appearance-outline .mat-form-field-infix::after{margin-top:-5px}.mat-form-field-type-mat-native-select.mat-form-field-appearance-fill .mat-form-field-infix::after{margin-top:-10px}\n", ".mat-form-field-appearance-legacy .mat-form-field-label{transform:perspective(100px);-ms-transform:none}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon{width:1em}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button{font:inherit;vertical-align:baseline}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button .mat-icon{font-size:inherit}.mat-form-field-appearance-legacy .mat-form-field-underline{height:1px}.cdk-high-contrast-active .mat-form-field-appearance-legacy .mat-form-field-underline{height:0;border-top:solid 1px}.mat-form-field-appearance-legacy .mat-form-field-ripple{top:0;height:2px;overflow:hidden}.cdk-high-contrast-active .mat-form-field-appearance-legacy .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}.cdk-high-contrast-active .mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}.mat-form-field-appearance-legacy.mat-form-field-invalid:not(.mat-focused) .mat-form-field-ripple{height:1px}\n", ".mat-form-field-appearance-outline .mat-form-field-wrapper{margin:.25em 0}.mat-form-field-appearance-outline .mat-form-field-flex{padding:0 .75em 0 .75em;margin-top:-0.25em;position:relative}.mat-form-field-appearance-outline .mat-form-field-prefix,.mat-form-field-appearance-outline .mat-form-field-suffix{top:.25em}.mat-form-field-appearance-outline .mat-form-field-outline{display:flex;position:absolute;top:.25em;left:0;right:0;bottom:0;pointer-events:none}.mat-form-field-appearance-outline .mat-form-field-outline-start,.mat-form-field-appearance-outline .mat-form-field-outline-end{border:1px solid currentColor;min-width:5px}.mat-form-field-appearance-outline .mat-form-field-outline-start{border-radius:5px 0 0 5px;border-right-style:none}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-start{border-right-style:solid;border-left-style:none;border-radius:0 5px 5px 0}.mat-form-field-appearance-outline .mat-form-field-outline-end{border-radius:0 5px 5px 0;border-left-style:none;flex-grow:1}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-end{border-left-style:solid;border-right-style:none;border-radius:5px 0 0 5px}.mat-form-field-appearance-outline .mat-form-field-outline-gap{border-radius:.000001px;border:1px solid currentColor;border-left-style:none;border-right-style:none}.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-outline-gap{border-top-color:transparent}.mat-form-field-appearance-outline .mat-form-field-outline-thick{opacity:0}.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-start,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-end,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-gap{border-width:2px}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline{opacity:0;transition:opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline{opacity:0;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline .mat-form-field-subscript-wrapper{padding:0 1em}.mat-form-field-appearance-outline._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-start,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-end,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-gap{transition:none}\n", ".mat-form-field-appearance-standard .mat-form-field-flex{padding-top:.75em}.mat-form-field-appearance-standard .mat-form-field-underline{height:1px}.cdk-high-contrast-active .mat-form-field-appearance-standard .mat-form-field-underline{height:0;border-top:solid 1px}.mat-form-field-appearance-standard .mat-form-field-ripple{bottom:0;height:2px}.cdk-high-contrast-active .mat-form-field-appearance-standard .mat-form-field-ripple{height:0;border-top:2px}.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}.cdk-high-contrast-active .mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}.mat-form-field-appearance-standard:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-standard._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}\n"],
  encapsulation: 2,
  data: {
    animation: [matFormFieldAnimations.transitionMessages]
  },
  changeDetection: 0
});

MatFormField.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ChangeDetectorRef"]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"],
      args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MAT_LABEL_GLOBAL_OPTIONS"]]
    }]
  }, {
    type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Optional"]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"],
      args: [MAT_FORM_FIELD_DEFAULT_OPTIONS]
    }]
  }, {
    type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgZone"]
  }, {
    type: String,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"],
      args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["ANIMATION_MODULE_TYPE"]]
    }]
  }];
};

MatFormField.propDecorators = {
  appearance: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }],
  hideRequiredMarker: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }],
  hintLabel: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }],
  floatLabel: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }],
  underlineRef: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"],
    args: ['underline']
  }],
  _connectionContainerRef: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"],
    args: ['connectionContainer', {
      static: true
    }]
  }],
  _inputContainerRef: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"],
    args: ['inputContainer']
  }],
  _label: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"],
    args: ['label']
  }],
  _controlNonStatic: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ContentChild"],
    args: [MatFormFieldControl]
  }],
  _controlStatic: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ContentChild"],
    args: [MatFormFieldControl, {
      static: true
    }]
  }],
  _labelChildNonStatic: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ContentChild"],
    args: [MatLabel]
  }],
  _labelChildStatic: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ContentChild"],
    args: [MatLabel, {
      static: true
    }]
  }],
  _placeholderChild: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ContentChild"],
    args: [MatPlaceholder]
  }],
  _errorChildren: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ContentChildren"],
    args: [MAT_ERROR, {
      descendants: true
    }]
  }],
  _hintChildren: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ContentChildren"],
    args: [_MAT_HINT, {
      descendants: true
    }]
  }],
  _prefixChildren: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ContentChildren"],
    args: [MAT_PREFIX, {
      descendants: true
    }]
  }],
  _suffixChildren: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ContentChildren"],
    args: [MAT_SUFFIX, {
      descendants: true
    }]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](MatFormField, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"],
    args: [{
      selector: 'mat-form-field',
      exportAs: 'matFormField',
      template: "<div class=\"mat-form-field-wrapper\">\n  <div class=\"mat-form-field-flex\" #connectionContainer\n       (click)=\"_control.onContainerClick && _control.onContainerClick($event)\">\n\n    <!-- Outline used for outline appearance. -->\n    <ng-container *ngIf=\"appearance == 'outline'\">\n      <div class=\"mat-form-field-outline\">\n        <div class=\"mat-form-field-outline-start\"></div>\n        <div class=\"mat-form-field-outline-gap\"></div>\n        <div class=\"mat-form-field-outline-end\"></div>\n      </div>\n      <div class=\"mat-form-field-outline mat-form-field-outline-thick\">\n        <div class=\"mat-form-field-outline-start\"></div>\n        <div class=\"mat-form-field-outline-gap\"></div>\n        <div class=\"mat-form-field-outline-end\"></div>\n      </div>\n    </ng-container>\n\n    <div class=\"mat-form-field-prefix\" *ngIf=\"_prefixChildren.length\">\n      <ng-content select=\"[matPrefix]\"></ng-content>\n    </div>\n\n    <div class=\"mat-form-field-infix\" #inputContainer>\n      <ng-content></ng-content>\n\n      <span class=\"mat-form-field-label-wrapper\">\n        <!-- We add aria-owns as a workaround for an issue in JAWS & NVDA where the label isn't\n             read if it comes before the control in the DOM. -->\n        <label class=\"mat-form-field-label\"\n               (cdkObserveContent)=\"updateOutlineGap()\"\n               [cdkObserveContentDisabled]=\"appearance != 'outline'\"\n               [id]=\"_labelId\"\n               [attr.for]=\"_control.id\"\n               [attr.aria-owns]=\"_control.id\"\n               [class.mat-empty]=\"_control.empty && !_shouldAlwaysFloat()\"\n               [class.mat-form-field-empty]=\"_control.empty && !_shouldAlwaysFloat()\"\n               [class.mat-accent]=\"color == 'accent'\"\n               [class.mat-warn]=\"color == 'warn'\"\n               #label\n               *ngIf=\"_hasFloatingLabel()\"\n               [ngSwitch]=\"_hasLabel()\">\n\n          <!-- @breaking-change 8.0.0 remove in favor of mat-label element an placeholder attr. -->\n          <ng-container *ngSwitchCase=\"false\">\n            <ng-content select=\"mat-placeholder\"></ng-content>\n            <span>{{_control.placeholder}}</span>\n          </ng-container>\n\n          <ng-content select=\"mat-label\" *ngSwitchCase=\"true\"></ng-content>\n\n          <!-- @breaking-change 8.0.0 remove `mat-placeholder-required` class -->\n          <span\n            class=\"mat-placeholder-required mat-form-field-required-marker\"\n            aria-hidden=\"true\"\n            *ngIf=\"!hideRequiredMarker && _control.required && !_control.disabled\">&#32;*</span>\n        </label>\n      </span>\n    </div>\n\n    <div class=\"mat-form-field-suffix\" *ngIf=\"_suffixChildren.length\">\n      <ng-content select=\"[matSuffix]\"></ng-content>\n    </div>\n  </div>\n\n  <!-- Underline used for legacy, standard, and box appearances. -->\n  <div class=\"mat-form-field-underline\" #underline\n       *ngIf=\"appearance != 'outline'\">\n    <span class=\"mat-form-field-ripple\"\n          [class.mat-accent]=\"color == 'accent'\"\n          [class.mat-warn]=\"color == 'warn'\"></span>\n  </div>\n\n  <div class=\"mat-form-field-subscript-wrapper\"\n       [ngSwitch]=\"_getDisplayedMessages()\">\n    <div *ngSwitchCase=\"'error'\" [@transitionMessages]=\"_subscriptAnimationState\">\n      <ng-content select=\"mat-error\"></ng-content>\n    </div>\n\n    <div class=\"mat-form-field-hint-wrapper\" *ngSwitchCase=\"'hint'\"\n      [@transitionMessages]=\"_subscriptAnimationState\">\n      <!-- TODO(mmalerba): use an actual <mat-hint> once all selectors are switched to mat-* -->\n      <div *ngIf=\"hintLabel\" [id]=\"_hintLabelId\" class=\"mat-hint\">{{hintLabel}}</div>\n      <ng-content select=\"mat-hint:not([align='end'])\"></ng-content>\n      <div class=\"mat-form-field-hint-spacer\"></div>\n      <ng-content select=\"mat-hint[align='end']\"></ng-content>\n    </div>\n  </div>\n</div>\n",
      animations: [matFormFieldAnimations.transitionMessages],
      host: {
        'class': 'mat-form-field',
        '[class.mat-form-field-appearance-standard]': 'appearance == "standard"',
        '[class.mat-form-field-appearance-fill]': 'appearance == "fill"',
        '[class.mat-form-field-appearance-outline]': 'appearance == "outline"',
        '[class.mat-form-field-appearance-legacy]': 'appearance == "legacy"',
        '[class.mat-form-field-invalid]': '_control.errorState',
        '[class.mat-form-field-can-float]': '_canLabelFloat()',
        '[class.mat-form-field-should-float]': '_shouldLabelFloat()',
        '[class.mat-form-field-has-label]': '_hasFloatingLabel()',
        '[class.mat-form-field-hide-placeholder]': '_hideControlPlaceholder()',
        '[class.mat-form-field-disabled]': '_control.disabled',
        '[class.mat-form-field-autofilled]': '_control.autofilled',
        '[class.mat-focused]': '_control.focused',
        '[class.mat-accent]': 'color == "accent"',
        '[class.mat-warn]': 'color == "warn"',
        '[class.ng-untouched]': '_shouldForward("untouched")',
        '[class.ng-touched]': '_shouldForward("touched")',
        '[class.ng-pristine]': '_shouldForward("pristine")',
        '[class.ng-dirty]': '_shouldForward("dirty")',
        '[class.ng-valid]': '_shouldForward("valid")',
        '[class.ng-invalid]': '_shouldForward("invalid")',
        '[class.ng-pending]': '_shouldForward("pending")',
        '[class._mat-animation-noopable]': '!_animationsEnabled'
      },
      inputs: ['color'],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewEncapsulation"].None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ChangeDetectionStrategy"].OnPush,
      providers: [{
        provide: MAT_FORM_FIELD,
        useExisting: MatFormField
      }],
      styles: [".mat-form-field{display:inline-block;position:relative;text-align:left}[dir=rtl] .mat-form-field{text-align:right}.mat-form-field-wrapper{position:relative}.mat-form-field-flex{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-prefix,.mat-form-field-suffix{white-space:nowrap;flex:none;position:relative}.mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:180px}.cdk-high-contrast-active .mat-form-field-infix{border-image:linear-gradient(transparent, transparent)}.mat-form-field-label-wrapper{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}[dir=rtl] .mat-form-field-label-wrapper{left:auto;right:0}.mat-form-field-label{position:absolute;left:0;font:inherit;pointer-events:none;width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;transform-origin:0 0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),width 400ms cubic-bezier(0.25, 0.8, 0.25, 1);display:none}[dir=rtl] .mat-form-field-label{transform-origin:100% 0;left:auto;right:0}.mat-form-field-empty.mat-form-field-label,.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{display:block}.mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:block;transition:none}.mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float .mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:block}.mat-form-field-label:not(.mat-form-field-empty){transition:none}.mat-form-field-underline{position:absolute;width:100%;pointer-events:none;transform:scale3d(1, 1.0001, 1)}.mat-form-field-ripple{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(0.5);opacity:0;transition:background-color 300ms cubic-bezier(0.55, 0, 0.55, 0.2)}.mat-form-field.mat-focused .mat-form-field-ripple,.mat-form-field.mat-form-field-invalid .mat-form-field-ripple{opacity:1;transform:scaleX(1);transition:transform 300ms cubic-bezier(0.25, 0.8, 0.25, 1),opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 300ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-subscript-wrapper{position:absolute;box-sizing:border-box;width:100%;overflow:hidden}.mat-form-field-subscript-wrapper .mat-icon,.mat-form-field-label-wrapper .mat-icon{width:1em;height:1em;font-size:inherit;vertical-align:baseline}.mat-form-field-hint-wrapper{display:flex}.mat-form-field-hint-spacer{flex:1 0 1em}.mat-error{display:block}.mat-form-field-control-wrapper{position:relative}.mat-form-field._mat-animation-noopable .mat-form-field-label,.mat-form-field._mat-animation-noopable .mat-form-field-ripple{transition:none}\n", ".mat-form-field-appearance-fill .mat-form-field-flex{border-radius:4px 4px 0 0;padding:.75em .75em 0 .75em}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-form-field-flex{outline:solid 1px}.mat-form-field-appearance-fill .mat-form-field-underline::before{content:\"\";display:block;position:absolute;bottom:0;height:1px;width:100%}.mat-form-field-appearance-fill .mat-form-field-ripple{bottom:0;height:2px}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-fill:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-fill._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}.mat-form-field-appearance-fill .mat-form-field-subscript-wrapper{padding:0 1em}\n", ".mat-input-element{font:inherit;background:transparent;color:currentColor;border:none;outline:none;padding:0;margin:0;width:100%;max-width:100%;vertical-align:bottom;text-align:inherit}.mat-input-element:-moz-ui-invalid{box-shadow:none}.mat-input-element::-ms-clear,.mat-input-element::-ms-reveal{display:none}.mat-input-element,.mat-input-element::-webkit-search-cancel-button,.mat-input-element::-webkit-search-decoration,.mat-input-element::-webkit-search-results-button,.mat-input-element::-webkit-search-results-decoration{-webkit-appearance:none}.mat-input-element::-webkit-contacts-auto-fill-button,.mat-input-element::-webkit-caps-lock-indicator,.mat-input-element::-webkit-credentials-auto-fill-button{visibility:hidden}.mat-input-element[type=date],.mat-input-element[type=datetime],.mat-input-element[type=datetime-local],.mat-input-element[type=month],.mat-input-element[type=week],.mat-input-element[type=time]{line-height:1}.mat-input-element[type=date]::after,.mat-input-element[type=datetime]::after,.mat-input-element[type=datetime-local]::after,.mat-input-element[type=month]::after,.mat-input-element[type=week]::after,.mat-input-element[type=time]::after{content:\" \";white-space:pre;width:1px}.mat-input-element::-webkit-inner-spin-button,.mat-input-element::-webkit-calendar-picker-indicator,.mat-input-element::-webkit-clear-button{font-size:.75em}.mat-input-element::placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-moz-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::-moz-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-webkit-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::-webkit-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element:-ms-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element:-ms-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-form-field-hide-placeholder .mat-input-element::placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-moz-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-webkit-input-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element:-ms-input-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}textarea.mat-input-element{resize:vertical;overflow:auto}textarea.mat-input-element.cdk-textarea-autosize{resize:none}textarea.mat-input-element{padding:2px 0;margin:-2px 0}select.mat-input-element{-moz-appearance:none;-webkit-appearance:none;position:relative;background-color:transparent;display:inline-flex;box-sizing:border-box;padding-top:1em;top:-1em;margin-bottom:-1em}select.mat-input-element::-ms-expand{display:none}select.mat-input-element::-moz-focus-inner{border:0}select.mat-input-element:not(:disabled){cursor:pointer}select.mat-input-element::-ms-value{color:inherit;background:none}.mat-focused .cdk-high-contrast-active select.mat-input-element::-ms-value{color:inherit}.mat-form-field-type-mat-native-select .mat-form-field-infix::after{content:\"\";width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;position:absolute;top:50%;right:0;margin-top:-2.5px;pointer-events:none}[dir=rtl] .mat-form-field-type-mat-native-select .mat-form-field-infix::after{right:auto;left:0}.mat-form-field-type-mat-native-select .mat-input-element{padding-right:15px}[dir=rtl] .mat-form-field-type-mat-native-select .mat-input-element{padding-right:0;padding-left:15px}.mat-form-field-type-mat-native-select .mat-form-field-label-wrapper{max-width:calc(100% - 10px)}.mat-form-field-type-mat-native-select.mat-form-field-appearance-outline .mat-form-field-infix::after{margin-top:-5px}.mat-form-field-type-mat-native-select.mat-form-field-appearance-fill .mat-form-field-infix::after{margin-top:-10px}\n", ".mat-form-field-appearance-legacy .mat-form-field-label{transform:perspective(100px);-ms-transform:none}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon{width:1em}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button{font:inherit;vertical-align:baseline}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button .mat-icon{font-size:inherit}.mat-form-field-appearance-legacy .mat-form-field-underline{height:1px}.cdk-high-contrast-active .mat-form-field-appearance-legacy .mat-form-field-underline{height:0;border-top:solid 1px}.mat-form-field-appearance-legacy .mat-form-field-ripple{top:0;height:2px;overflow:hidden}.cdk-high-contrast-active .mat-form-field-appearance-legacy .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}.cdk-high-contrast-active .mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}.mat-form-field-appearance-legacy.mat-form-field-invalid:not(.mat-focused) .mat-form-field-ripple{height:1px}\n", ".mat-form-field-appearance-outline .mat-form-field-wrapper{margin:.25em 0}.mat-form-field-appearance-outline .mat-form-field-flex{padding:0 .75em 0 .75em;margin-top:-0.25em;position:relative}.mat-form-field-appearance-outline .mat-form-field-prefix,.mat-form-field-appearance-outline .mat-form-field-suffix{top:.25em}.mat-form-field-appearance-outline .mat-form-field-outline{display:flex;position:absolute;top:.25em;left:0;right:0;bottom:0;pointer-events:none}.mat-form-field-appearance-outline .mat-form-field-outline-start,.mat-form-field-appearance-outline .mat-form-field-outline-end{border:1px solid currentColor;min-width:5px}.mat-form-field-appearance-outline .mat-form-field-outline-start{border-radius:5px 0 0 5px;border-right-style:none}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-start{border-right-style:solid;border-left-style:none;border-radius:0 5px 5px 0}.mat-form-field-appearance-outline .mat-form-field-outline-end{border-radius:0 5px 5px 0;border-left-style:none;flex-grow:1}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-end{border-left-style:solid;border-right-style:none;border-radius:5px 0 0 5px}.mat-form-field-appearance-outline .mat-form-field-outline-gap{border-radius:.000001px;border:1px solid currentColor;border-left-style:none;border-right-style:none}.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-outline-gap{border-top-color:transparent}.mat-form-field-appearance-outline .mat-form-field-outline-thick{opacity:0}.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-start,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-end,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-gap{border-width:2px}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline{opacity:0;transition:opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline{opacity:0;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline .mat-form-field-subscript-wrapper{padding:0 1em}.mat-form-field-appearance-outline._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-start,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-end,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-gap{transition:none}\n", ".mat-form-field-appearance-standard .mat-form-field-flex{padding-top:.75em}.mat-form-field-appearance-standard .mat-form-field-underline{height:1px}.cdk-high-contrast-active .mat-form-field-appearance-standard .mat-form-field-underline{height:0;border-top:solid 1px}.mat-form-field-appearance-standard .mat-form-field-ripple{bottom:0;height:2px}.cdk-high-contrast-active .mat-form-field-appearance-standard .mat-form-field-ripple{height:0;border-top:2px}.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}.cdk-high-contrast-active .mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}.mat-form-field-appearance-standard:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-standard._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ChangeDetectorRef"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"],
        args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MAT_LABEL_GLOBAL_OPTIONS"]]
      }]
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__["Directionality"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Optional"]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"],
        args: [MAT_FORM_FIELD_DEFAULT_OPTIONS]
      }]
    }, {
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgZone"]
    }, {
      type: String,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"],
        args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["ANIMATION_MODULE_TYPE"]]
      }]
    }];
  }, {
    floatLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }],
    appearance: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }],
    hideRequiredMarker: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }],
    hintLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }],
    underlineRef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"],
      args: ['underline']
    }],
    _connectionContainerRef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"],
      args: ['connectionContainer', {
        static: true
      }]
    }],
    _inputContainerRef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"],
      args: ['inputContainer']
    }],
    _label: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"],
      args: ['label']
    }],
    _controlNonStatic: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ContentChild"],
      args: [MatFormFieldControl]
    }],
    _controlStatic: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ContentChild"],
      args: [MatFormFieldControl, {
        static: true
      }]
    }],
    _labelChildNonStatic: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ContentChild"],
      args: [MatLabel]
    }],
    _labelChildStatic: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ContentChild"],
      args: [MatLabel, {
        static: true
      }]
    }],
    _placeholderChild: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ContentChild"],
      args: [MatPlaceholder]
    }],
    _errorChildren: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ContentChildren"],
      args: [MAT_ERROR, {
        descendants: true
      }]
    }],
    _hintChildren: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ContentChildren"],
      args: [_MAT_HINT, {
        descendants: true
      }]
    }],
    _prefixChildren: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ContentChildren"],
      args: [MAT_PREFIX, {
        descendants: true
      }]
    }],
    _suffixChildren: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ContentChildren"],
      args: [MAT_SUFFIX, {
        descendants: true
      }]
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var MatFormFieldModule = function MatFormFieldModule() {
  Object(_home_nwightma_homepage_abbey2_abbey_ui_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MatFormFieldModule);
};

MatFormFieldModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: MatFormFieldModule
});
MatFormFieldModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  factory: function MatFormFieldModule_Factory(t) {
    return new (t || MatFormFieldModule)();
  },
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_4__["ObserversModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](MatFormFieldModule, {
    declarations: function declarations() {
      return [MatError, MatFormField, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_4__["ObserversModule"]];
    },
    exports: function exports() {
      return [_angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"], MatError, MatFormField, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix];
    }
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](MatFormFieldModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"],
    args: [{
      declarations: [MatError, MatFormField, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_4__["ObserversModule"]],
      exports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"], MatError, MatFormField, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ })

}]);
//# sourceMappingURL=default~app-admin-admin-module~app-events-event-module.js.map