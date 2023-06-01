(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-events-event-module"],{

/***/ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/text-field.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/text-field.js ***!
  \***********************************************************************/
/*! exports provided: AutofillMonitor, CdkAutofill, CdkTextareaAutosize, TextFieldModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutofillMonitor", function() { return AutofillMonitor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkAutofill", function() { return CdkAutofill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTextareaAutosize", function() { return CdkTextareaAutosize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextFieldModule", function() { return TextFieldModule; });
/* harmony import */ var _home_nwightma_homepage_abbey2_abbey_ui_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_nwightma_homepage_abbey2_abbey_ui_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/fesm2015/coercion.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Options to pass to the animationstart listener. */



var listenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["normalizePassiveListenerOptions"])({
  passive: true
});
/**
 * An injectable service that can be used to monitor the autofill state of an input.
 * Based on the following blog post:
 * https://medium.com/@brunn/detecting-autofilled-fields-in-javascript-aed598d25da7
 */

var AutofillMonitor = /*#__PURE__*/function () {
  function AutofillMonitor(_platform, _ngZone) {
    Object(_home_nwightma_homepage_abbey2_abbey_ui_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AutofillMonitor);

    this._platform = _platform;
    this._ngZone = _ngZone;
    this._monitoredElements = new Map();
  }

  Object(_home_nwightma_homepage_abbey2_abbey_ui_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AutofillMonitor, [{
    key: "monitor",
    value: function monitor(elementOrRef) {
      var _this = this;

      if (!this._platform.isBrowser) {
        return rxjs__WEBPACK_IMPORTED_MODULE_5__["EMPTY"];
      }

      var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(elementOrRef);

      var info = this._monitoredElements.get(element);

      if (info) {
        return info.subject.asObservable();
      }

      var result = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
      var cssClass = 'cdk-text-field-autofilled';

      var listener = function listener(event) {
        // Animation events fire on initial element render, we check for the presence of the autofill
        // CSS class to make sure this is a real change in state, not just the initial render before
        // we fire off events.
        if (event.animationName === 'cdk-text-field-autofill-start' && !element.classList.contains(cssClass)) {
          element.classList.add(cssClass);

          _this._ngZone.run(function () {
            return result.next({
              target: event.target,
              isAutofilled: true
            });
          });
        } else if (event.animationName === 'cdk-text-field-autofill-end' && element.classList.contains(cssClass)) {
          element.classList.remove(cssClass);

          _this._ngZone.run(function () {
            return result.next({
              target: event.target,
              isAutofilled: false
            });
          });
        }
      };

      this._ngZone.runOutsideAngular(function () {
        element.addEventListener('animationstart', listener, listenerOptions);
        element.classList.add('cdk-text-field-autofill-monitored');
      });

      this._monitoredElements.set(element, {
        subject: result,
        unlisten: function unlisten() {
          element.removeEventListener('animationstart', listener, listenerOptions);
        }
      });

      return result.asObservable();
    }
  }, {
    key: "stopMonitoring",
    value: function stopMonitoring(elementOrRef) {
      var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(elementOrRef);

      var info = this._monitoredElements.get(element);

      if (info) {
        info.unlisten();
        info.subject.complete();
        element.classList.remove('cdk-text-field-autofill-monitored');
        element.classList.remove('cdk-text-field-autofilled');

        this._monitoredElements.delete(element);
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      var _this2 = this;

      this._monitoredElements.forEach(function (_info, element) {
        return _this2.stopMonitoring(element);
      });
    }
  }]);

  return AutofillMonitor;
}();

AutofillMonitor.ɵfac = function AutofillMonitor_Factory(t) {
  return new (t || AutofillMonitor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]));
};

AutofillMonitor.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"])({
  factory: function AutofillMonitor_Factory() {
    return new AutofillMonitor(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]));
  },
  token: AutofillMonitor,
  providedIn: "root"
});

AutofillMonitor.ctorParameters = function () {
  return [{
    type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AutofillMonitor, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"],
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
    }];
  }, null);
})();
/** A directive that can be used to monitor the autofill state of an input. */


var CdkAutofill = /*#__PURE__*/function () {
  function CdkAutofill(_elementRef, _autofillMonitor) {
    Object(_home_nwightma_homepage_abbey2_abbey_ui_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CdkAutofill);

    this._elementRef = _elementRef;
    this._autofillMonitor = _autofillMonitor;
    /** Emits when the autofill state of the element changes. */

    this.cdkAutofill = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
  }

  Object(_home_nwightma_homepage_abbey2_abbey_ui_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CdkAutofill, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this3 = this;

      this._autofillMonitor.monitor(this._elementRef).subscribe(function (event) {
        return _this3.cdkAutofill.emit(event);
      });
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._autofillMonitor.stopMonitoring(this._elementRef);
    }
  }]);

  return CdkAutofill;
}();

CdkAutofill.ɵfac = function CdkAutofill_Factory(t) {
  return new (t || CdkAutofill)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](AutofillMonitor));
};

CdkAutofill.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: CdkAutofill,
  selectors: [["", "cdkAutofill", ""]],
  outputs: {
    cdkAutofill: "cdkAutofill"
  }
});

CdkAutofill.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
  }, {
    type: AutofillMonitor
  }];
};

CdkAutofill.propDecorators = {
  cdkAutofill: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkAutofill, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
    args: [{
      selector: '[cdkAutofill]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
    }, {
      type: AutofillMonitor
    }];
  }, {
    cdkAutofill: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
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

/** Directive to automatically resize a textarea to fit its content. */


var CdkTextareaAutosize = /*#__PURE__*/function () {
  function CdkTextareaAutosize(_elementRef, _platform, _ngZone,
  /** @breaking-change 11.0.0 make document required */
  document) {
    Object(_home_nwightma_homepage_abbey2_abbey_ui_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CdkTextareaAutosize);

    this._elementRef = _elementRef;
    this._platform = _platform;
    this._ngZone = _ngZone;
    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    this._enabled = true;
    /**
     * Value of minRows as of last resize. If the minRows has decreased, the
     * height of the textarea needs to be recomputed to reflect the new minimum. The maxHeight
     * does not have the same problem because it does not affect the textarea's scrollHeight.
     */

    this._previousMinRows = -1;
    this._document = document;
    this._textareaElement = this._elementRef.nativeElement;
    this._measuringClass = _platform.FIREFOX ? 'cdk-textarea-autosize-measuring-firefox' : 'cdk-textarea-autosize-measuring';
  }
  /** Minimum amount of rows in the textarea. */


  Object(_home_nwightma_homepage_abbey2_abbey_ui_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CdkTextareaAutosize, [{
    key: "_setMinHeight",

    /** Sets the minimum height of the textarea as determined by minRows. */
    value: function _setMinHeight() {
      var minHeight = this.minRows && this._cachedLineHeight ? "".concat(this.minRows * this._cachedLineHeight, "px") : null;

      if (minHeight) {
        this._textareaElement.style.minHeight = minHeight;
      }
    }
    /** Sets the maximum height of the textarea as determined by maxRows. */

  }, {
    key: "_setMaxHeight",
    value: function _setMaxHeight() {
      var maxHeight = this.maxRows && this._cachedLineHeight ? "".concat(this.maxRows * this._cachedLineHeight, "px") : null;

      if (maxHeight) {
        this._textareaElement.style.maxHeight = maxHeight;
      }
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this4 = this;

      if (this._platform.isBrowser) {
        // Remember the height which we started with in case autosizing is disabled
        this._initialHeight = this._textareaElement.style.height;
        this.resizeToFitContent();

        this._ngZone.runOutsideAngular(function () {
          var window = _this4._getWindow();

          Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(window, 'resize').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["auditTime"])(16), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(_this4._destroyed)).subscribe(function () {
            return _this4.resizeToFitContent(true);
          });
        });
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._destroyed.next();

      this._destroyed.complete();
    }
    /**
     * Cache the height of a single-row textarea if it has not already been cached.
     *
     * We need to know how large a single "row" of a textarea is in order to apply minRows and
     * maxRows. For the initial version, we will assume that the height of a single line in the
     * textarea does not ever change.
     */

  }, {
    key: "_cacheTextareaLineHeight",
    value: function _cacheTextareaLineHeight() {
      if (this._cachedLineHeight) {
        return;
      } // Use a clone element because we have to override some styles.


      var textareaClone = this._textareaElement.cloneNode(false);

      textareaClone.rows = 1; // Use `position: absolute` so that this doesn't cause a browser layout and use
      // `visibility: hidden` so that nothing is rendered. Clear any other styles that
      // would affect the height.

      textareaClone.style.position = 'absolute';
      textareaClone.style.visibility = 'hidden';
      textareaClone.style.border = 'none';
      textareaClone.style.padding = '0';
      textareaClone.style.height = '';
      textareaClone.style.minHeight = '';
      textareaClone.style.maxHeight = ''; // In Firefox it happens that textarea elements are always bigger than the specified amount
      // of rows. This is because Firefox tries to add extra space for the horizontal scrollbar.
      // As a workaround that removes the extra space for the scrollbar, we can just set overflow
      // to hidden. This ensures that there is no invalid calculation of the line height.
      // See Firefox bug report: https://bugzilla.mozilla.org/show_bug.cgi?id=33654

      textareaClone.style.overflow = 'hidden';

      this._textareaElement.parentNode.appendChild(textareaClone);

      this._cachedLineHeight = textareaClone.clientHeight;

      this._textareaElement.parentNode.removeChild(textareaClone); // Min and max heights have to be re-calculated if the cached line height changes


      this._setMinHeight();

      this._setMaxHeight();
    }
  }, {
    key: "ngDoCheck",
    value: function ngDoCheck() {
      if (this._platform.isBrowser) {
        this.resizeToFitContent();
      }
    }
    /**
     * Resize the textarea to fit its content.
     * @param force Whether to force a height recalculation. By default the height will be
     *    recalculated only if the value changed since the last call.
     */

  }, {
    key: "resizeToFitContent",
    value: function resizeToFitContent() {
      var _this5 = this;

      var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      // If autosizing is disabled, just skip everything else
      if (!this._enabled) {
        return;
      }

      this._cacheTextareaLineHeight(); // If we haven't determined the line-height yet, we know we're still hidden and there's no point
      // in checking the height of the textarea.


      if (!this._cachedLineHeight) {
        return;
      }

      var textarea = this._elementRef.nativeElement;
      var value = textarea.value; // Only resize if the value or minRows have changed since these calculations can be expensive.

      if (!force && this._minRows === this._previousMinRows && value === this._previousValue) {
        return;
      }

      var placeholderText = textarea.placeholder; // Reset the textarea height to auto in order to shrink back to its default size.
      // Also temporarily force overflow:hidden, so scroll bars do not interfere with calculations.
      // Long placeholders that are wider than the textarea width may lead to a bigger scrollHeight
      // value. To ensure that the scrollHeight is not bigger than the content, the placeholders
      // need to be removed temporarily.

      textarea.classList.add(this._measuringClass);
      textarea.placeholder = ''; // The measuring class includes a 2px padding to workaround an issue with Chrome,
      // so we account for that extra space here by subtracting 4 (2px top + 2px bottom).

      var height = textarea.scrollHeight - 4; // Use the scrollHeight to know how large the textarea *would* be if fit its entire value.

      textarea.style.height = "".concat(height, "px");
      textarea.classList.remove(this._measuringClass);
      textarea.placeholder = placeholderText;

      this._ngZone.runOutsideAngular(function () {
        if (typeof requestAnimationFrame !== 'undefined') {
          requestAnimationFrame(function () {
            return _this5._scrollToCaretPosition(textarea);
          });
        } else {
          setTimeout(function () {
            return _this5._scrollToCaretPosition(textarea);
          });
        }
      });

      this._previousValue = value;
      this._previousMinRows = this._minRows;
    }
    /**
     * Resets the textarea to its original size
     */

  }, {
    key: "reset",
    value: function reset() {
      // Do not try to change the textarea, if the initialHeight has not been determined yet
      // This might potentially remove styles when reset() is called before ngAfterViewInit
      if (this._initialHeight !== undefined) {
        this._textareaElement.style.height = this._initialHeight;
      }
    } // In Ivy the `host` metadata will be merged, whereas in ViewEngine it is overridden. In order
    // to avoid double event listeners, we need to use `HostListener`. Once Ivy is the default, we
    // can move this back into `host`.
    // tslint:disable:no-host-decorator-in-concrete

  }, {
    key: "_noopInputHandler",
    value: function _noopInputHandler() {// no-op handler that ensures we're running change detection on input events.
    }
    /** Access injected document if available or fallback to global document reference */

  }, {
    key: "_getDocument",
    value: function _getDocument() {
      return this._document || document;
    }
    /** Use defaultView of injected document if available or fallback to global window reference */

  }, {
    key: "_getWindow",
    value: function _getWindow() {
      var doc = this._getDocument();

      return doc.defaultView || window;
    }
    /**
     * Scrolls a textarea to the caret position. On Firefox resizing the textarea will
     * prevent it from scrolling to the caret position. We need to re-set the selection
     * in order for it to scroll to the proper position.
     */

  }, {
    key: "_scrollToCaretPosition",
    value: function _scrollToCaretPosition(textarea) {
      var selectionStart = textarea.selectionStart,
          selectionEnd = textarea.selectionEnd;

      var document = this._getDocument(); // IE will throw an "Unspecified error" if we try to set the selection range after the
      // element has been removed from the DOM. Assert that the directive hasn't been destroyed
      // between the time we requested the animation frame and when it was executed.
      // Also note that we have to assert that the textarea is focused before we set the
      // selection range. Setting the selection range on a non-focused textarea will cause
      // it to receive focus on IE and Edge.


      if (!this._destroyed.isStopped && document.activeElement === textarea) {
        textarea.setSelectionRange(selectionStart, selectionEnd);
      }
    }
  }, {
    key: "minRows",
    get: function get() {
      return this._minRows;
    },
    set: function set(value) {
      this._minRows = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceNumberProperty"])(value);

      this._setMinHeight();
    }
    /** Maximum amount of rows in the textarea. */

  }, {
    key: "maxRows",
    get: function get() {
      return this._maxRows;
    },
    set: function set(value) {
      this._maxRows = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceNumberProperty"])(value);

      this._setMaxHeight();
    }
    /** Whether autosizing is enabled or not */

  }, {
    key: "enabled",
    get: function get() {
      return this._enabled;
    },
    set: function set(value) {
      value = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value); // Only act if the actual value changed. This specifically helps to not run
      // resizeToFitContent too early (i.e. before ngAfterViewInit)

      if (this._enabled !== value) {
        (this._enabled = value) ? this.resizeToFitContent(true) : this.reset();
      }
    }
  }]);

  return CdkTextareaAutosize;
}();

CdkTextareaAutosize.ɵfac = function CdkTextareaAutosize_Factory(t) {
  return new (t || CdkTextareaAutosize)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"], 8));
};

CdkTextareaAutosize.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: CdkTextareaAutosize,
  selectors: [["textarea", "cdkTextareaAutosize", ""]],
  hostAttrs: ["rows", "1", 1, "cdk-textarea-autosize"],
  hostBindings: function CdkTextareaAutosize_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function CdkTextareaAutosize_input_HostBindingHandler() {
        return ctx._noopInputHandler();
      });
    }
  },
  inputs: {
    minRows: ["cdkAutosizeMinRows", "minRows"],
    maxRows: ["cdkAutosizeMaxRows", "maxRows"],
    enabled: ["cdkTextareaAutosize", "enabled"]
  },
  exportAs: ["cdkTextareaAutosize"]
});

CdkTextareaAutosize.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
  }, {
    type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"]]
    }]
  }];
};

CdkTextareaAutosize.propDecorators = {
  minRows: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
    args: ['cdkAutosizeMinRows']
  }],
  maxRows: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
    args: ['cdkAutosizeMaxRows']
  }],
  enabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
    args: ['cdkTextareaAutosize']
  }],
  _noopInputHandler: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
    args: ['input']
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkTextareaAutosize, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
    args: [{
      selector: 'textarea[cdkTextareaAutosize]',
      exportAs: 'cdkTextareaAutosize',
      host: {
        'class': 'cdk-textarea-autosize',
        // Textarea elements that have the directive applied should have a single row by default.
        // Browsers normally show two rows by default and therefore this limits the minRows binding.
        'rows': '1'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
    }, {
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"]]
      }]
    }];
  }, {
    minRows: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
      args: ['cdkAutosizeMinRows']
    }],
    maxRows: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
      args: ['cdkAutosizeMaxRows']
    }],
    enabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
      args: ['cdkTextareaAutosize']
    }],
    // In Ivy the `host` metadata will be merged, whereas in ViewEngine it is overridden. In order
    // to avoid double event listeners, we need to use `HostListener`. Once Ivy is the default, we
    // can move this back into `host`.
    // tslint:disable:no-host-decorator-in-concrete
    _noopInputHandler: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
      args: ['input']
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


var TextFieldModule = function TextFieldModule() {
  Object(_home_nwightma_homepage_abbey2_abbey_ui_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TextFieldModule);
};

TextFieldModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: TextFieldModule
});
TextFieldModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  factory: function TextFieldModule_Factory(t) {
    return new (t || TextFieldModule)();
  },
  imports: [[_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["PlatformModule"]]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](TextFieldModule, {
    declarations: function declarations() {
      return [CdkAutofill, CdkTextareaAutosize];
    },
    imports: function imports() {
      return [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["PlatformModule"]];
    },
    exports: function exports() {
      return [CdkAutofill, CdkTextareaAutosize];
    }
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](TextFieldModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
    args: [{
      declarations: [CdkAutofill, CdkTextareaAutosize],
      imports: [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["PlatformModule"]],
      exports: [CdkAutofill, CdkTextareaAutosize]
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




/***/ }),

/***/ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js ***!
  \***********************************************************************/
/*! exports provided: MAT_INPUT_VALUE_ACCESSOR, MatInput, MatInputModule, MatTextareaAutosize, getMatInputUnsupportedTypeError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_INPUT_VALUE_ACCESSOR", function() { return MAT_INPUT_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatInput", function() { return MatInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatInputModule", function() { return MatInputModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTextareaAutosize", function() { return MatTextareaAutosize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatInputUnsupportedTypeError", function() { return getMatInputUnsupportedTypeError; });
/* harmony import */ var _home_nwightma_homepage_abbey2_abbey_ui_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_nwightma_homepage_abbey2_abbey_ui_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _home_nwightma_homepage_abbey2_abbey_ui_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _home_nwightma_homepage_abbey2_abbey_ui_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/text-field */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/text-field.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/fesm2015/coercion.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");












/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Directive to automatically resize a textarea to fit its content.
 * @deprecated Use `cdkTextareaAutosize` from `@angular/cdk/text-field` instead.
 * @breaking-change 8.0.0
 */








var MatTextareaAutosize = /*#__PURE__*/function (_CdkTextareaAutosize) {
  Object(_home_nwightma_homepage_abbey2_abbey_ui_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(MatTextareaAutosize, _CdkTextareaAutosize);

  var _super = Object(_home_nwightma_homepage_abbey2_abbey_ui_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__["default"])(MatTextareaAutosize);

  function MatTextareaAutosize() {
    Object(_home_nwightma_homepage_abbey2_abbey_ui_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MatTextareaAutosize);

    return _super.apply(this, arguments);
  }

  Object(_home_nwightma_homepage_abbey2_abbey_ui_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MatTextareaAutosize, [{
    key: "matAutosizeMinRows",
    get: function get() {
      return this.minRows;
    },
    set: function set(value) {
      this.minRows = value;
    }
  }, {
    key: "matAutosizeMaxRows",
    get: function get() {
      return this.maxRows;
    },
    set: function set(value) {
      this.maxRows = value;
    }
  }, {
    key: "matAutosize",
    get: function get() {
      return this.enabled;
    },
    set: function set(value) {
      this.enabled = value;
    }
  }, {
    key: "matTextareaAutosize",
    get: function get() {
      return this.enabled;
    },
    set: function set(value) {
      this.enabled = value;
    }
  }]);

  return MatTextareaAutosize;
}(_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_4__["CdkTextareaAutosize"]);

MatTextareaAutosize.ɵfac = function MatTextareaAutosize_Factory(t) {
  return ɵMatTextareaAutosize_BaseFactory(t || MatTextareaAutosize);
};

MatTextareaAutosize.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({
  type: MatTextareaAutosize,
  selectors: [["textarea", "mat-autosize", ""], ["textarea", "matTextareaAutosize", ""]],
  hostAttrs: ["rows", "1", 1, "cdk-textarea-autosize", "mat-autosize"],
  inputs: {
    cdkAutosizeMinRows: "cdkAutosizeMinRows",
    cdkAutosizeMaxRows: "cdkAutosizeMaxRows",
    matAutosizeMinRows: "matAutosizeMinRows",
    matAutosizeMaxRows: "matAutosizeMaxRows",
    matAutosize: ["mat-autosize", "matAutosize"],
    matTextareaAutosize: "matTextareaAutosize"
  },
  exportAs: ["matTextareaAutosize"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]]
});
MatTextareaAutosize.propDecorators = {
  matAutosizeMinRows: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  matAutosizeMaxRows: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  matAutosize: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"],
    args: ['mat-autosize']
  }],
  matTextareaAutosize: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }]
};
var ɵMatTextareaAutosize_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetInheritedFactory"](MatTextareaAutosize);
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](MatTextareaAutosize, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Directive"],
    args: [{
      selector: 'textarea[mat-autosize], textarea[matTextareaAutosize]',
      exportAs: 'matTextareaAutosize',
      inputs: ['cdkAutosizeMinRows', 'cdkAutosizeMaxRows'],
      host: {
        'class': 'cdk-textarea-autosize mat-autosize',
        // Textarea elements that have the directive applied should have a single row by default.
        // Browsers normally show two rows by default and therefore this limits the minRows binding.
        'rows': '1'
      }
    }]
  }], null, {
    matAutosizeMinRows: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    matAutosizeMaxRows: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    matAutosize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"],
      args: ['mat-autosize']
    }],
    matTextareaAutosize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
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

/** @docs-private */


function getMatInputUnsupportedTypeError(type) {
  return Error("Input type \"".concat(type, "\" isn't supported by matInput."));
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * This token is used to inject the object whose value should be set into `MatInput`. If none is
 * provided, the native `HTMLInputElement` is used. Directives like `MatDatepickerInput` can provide
 * themselves for this token, in order to make `MatInput` delegate the getting and setting of the
 * value to them.
 */


var MAT_INPUT_VALUE_ACCESSOR = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["InjectionToken"]('MAT_INPUT_VALUE_ACCESSOR');
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Invalid input type. Using one of these will throw an MatInputUnsupportedTypeError.

var MAT_INPUT_INVALID_TYPES = ['button', 'checkbox', 'file', 'hidden', 'image', 'radio', 'range', 'reset', 'submit'];
var nextUniqueId = 0; // Boilerplate for applying mixins to MatInput.

/** @docs-private */

var MatInputBase = function MatInputBase(_defaultErrorStateMatcher, _parentForm, _parentFormGroup,
/** @docs-private */
ngControl) {
  Object(_home_nwightma_homepage_abbey2_abbey_ui_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MatInputBase);

  this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
  this._parentForm = _parentForm;
  this._parentFormGroup = _parentFormGroup;
  this.ngControl = ngControl;
};

var _MatInputMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_9__["mixinErrorState"])(MatInputBase);
/** Directive that allows a native input to work inside a `MatFormField`. */


var MatInput = /*#__PURE__*/function (_MatInputMixinBase2) {
  Object(_home_nwightma_homepage_abbey2_abbey_ui_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(MatInput, _MatInputMixinBase2);

  var _super2 = Object(_home_nwightma_homepage_abbey2_abbey_ui_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__["default"])(MatInput);

  function MatInput(_elementRef, _platform,
  /** @docs-private */
  ngControl, _parentForm, _parentFormGroup, _defaultErrorStateMatcher, inputValueAccessor, _autofillMonitor, ngZone, // @breaking-change 8.0.0 `_formField` parameter to be made required.
  _formField) {
    var _this;

    Object(_home_nwightma_homepage_abbey2_abbey_ui_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MatInput);

    _this = _super2.call(this, _defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl);
    _this._elementRef = _elementRef;
    _this._platform = _platform;
    _this.ngControl = ngControl;
    _this._autofillMonitor = _autofillMonitor;
    _this._formField = _formField;
    _this._uid = "mat-input-".concat(nextUniqueId++);
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */

    _this.focused = false;
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */

    _this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_11__["Subject"]();
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */

    _this.controlType = 'mat-input';
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */

    _this.autofilled = false;
    _this._disabled = false;
    _this._required = false;
    _this._type = 'text';
    _this._readonly = false;
    _this._neverEmptyInputTypes = ['date', 'datetime', 'datetime-local', 'month', 'time', 'week'].filter(function (t) {
      return Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["getSupportedInputTypes"])().has(t);
    });
    var element = _this._elementRef.nativeElement;
    var nodeName = element.nodeName.toLowerCase(); // If no input value accessor was explicitly specified, use the element as the input value
    // accessor.

    _this._inputValueAccessor = inputValueAccessor || element;
    _this._previousNativeValue = _this.value; // Force setter to be called in case id was not specified.

    _this.id = _this.id; // On some versions of iOS the caret gets stuck in the wrong place when holding down the delete
    // key. In order to get around this we need to "jiggle" the caret loose. Since this bug only
    // exists on iOS, we only bother to install the listener on iOS.

    if (_platform.IOS) {
      ngZone.runOutsideAngular(function () {
        _elementRef.nativeElement.addEventListener('keyup', function (event) {
          var el = event.target;

          if (!el.value && !el.selectionStart && !el.selectionEnd) {
            // Note: Just setting `0, 0` doesn't fix the issue. Setting
            // `1, 1` fixes it for the first time that you type text and
            // then hold delete. Toggling to `1, 1` and then back to
            // `0, 0` seems to completely fix it.
            el.setSelectionRange(1, 1);
            el.setSelectionRange(0, 0);
          }
        });
      });
    }

    _this._isServer = !_this._platform.isBrowser;
    _this._isNativeSelect = nodeName === 'select';
    _this._isTextarea = nodeName === 'textarea';

    if (_this._isNativeSelect) {
      _this.controlType = element.multiple ? 'mat-native-select-multiple' : 'mat-native-select';
    }

    return _this;
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */


  Object(_home_nwightma_homepage_abbey2_abbey_ui_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MatInput, [{
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this2 = this;

      if (this._platform.isBrowser) {
        this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(function (event) {
          _this2.autofilled = event.isAutofilled;

          _this2.stateChanges.next();
        });
      }
    }
  }, {
    key: "ngOnChanges",
    value: function ngOnChanges() {
      this.stateChanges.next();
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.stateChanges.complete();

      if (this._platform.isBrowser) {
        this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement);
      }
    }
  }, {
    key: "ngDoCheck",
    value: function ngDoCheck() {
      if (this.ngControl) {
        // We need to re-evaluate this on every change detection cycle, because there are some
        // error triggers that we can't subscribe to (e.g. parent form submissions). This means
        // that whatever logic is in here has to be super lean or we risk destroying the performance.
        this.updateErrorState();
      } // We need to dirty-check the native element's value, because there are some cases where
      // we won't be notified when it changes (e.g. the consumer isn't using forms or they're
      // updating the value using `emitEvent: false`).


      this._dirtyCheckNativeValue(); // We need to dirty-check and set the placeholder attribute ourselves, because whether it's
      // present or not depends on a query which is prone to "changed after checked" errors.


      this._dirtyCheckPlaceholder();
    }
    /** Focuses the input. */

  }, {
    key: "focus",
    value: function focus(options) {
      this._elementRef.nativeElement.focus(options);
    } // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.

    /** Callback for the cases where the focused state of the input changes. */
    // tslint:disable:no-host-decorator-in-concrete
    // tslint:enable:no-host-decorator-in-concrete

  }, {
    key: "_focusChanged",
    value: function _focusChanged(isFocused) {
      if (isFocused !== this.focused && (!this.readonly || !isFocused)) {
        this.focused = isFocused;
        this.stateChanges.next();
      }
    } // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete

  }, {
    key: "_onInput",
    value: function _onInput() {// This is a noop function and is used to let Angular know whenever the value changes.
      // Angular will run a new change detection each time the `input` event has been dispatched.
      // It's necessary that Angular recognizes the value change, because when floatingLabel
      // is set to false and Angular forms aren't used, the placeholder won't recognize the
      // value changes and will not disappear.
      // Listening to the input event wouldn't be necessary when the input is using the
      // FormsModule or ReactiveFormsModule, because Angular forms also listens to input events.
    }
    /** Does some manual dirty checking on the native input `placeholder` attribute. */

  }, {
    key: "_dirtyCheckPlaceholder",
    value: function _dirtyCheckPlaceholder() {
      // If we're hiding the native placeholder, it should also be cleared from the DOM, otherwise
      // screen readers will read it out twice: once from the label and once from the attribute.
      // TODO: can be removed once we get rid of the `legacy` style for the form field, because it's
      // the only one that supports promoting the placeholder to a label.
      var formField = this._formField;
      var placeholder = !formField || !formField._hideControlPlaceholder() ? this.placeholder : null;

      if (placeholder !== this._previousPlaceholder) {
        var element = this._elementRef.nativeElement;
        this._previousPlaceholder = placeholder;
        placeholder ? element.setAttribute('placeholder', placeholder) : element.removeAttribute('placeholder');
      }
    }
    /** Does some manual dirty checking on the native input `value` property. */

  }, {
    key: "_dirtyCheckNativeValue",
    value: function _dirtyCheckNativeValue() {
      var newValue = this._elementRef.nativeElement.value;

      if (this._previousNativeValue !== newValue) {
        this._previousNativeValue = newValue;
        this.stateChanges.next();
      }
    }
    /** Make sure the input is a supported type. */

  }, {
    key: "_validateType",
    value: function _validateType() {
      if (MAT_INPUT_INVALID_TYPES.indexOf(this._type) > -1) {
        throw getMatInputUnsupportedTypeError(this._type);
      }
    }
    /** Checks whether the input type is one of the types that are never empty. */

  }, {
    key: "_isNeverEmpty",
    value: function _isNeverEmpty() {
      return this._neverEmptyInputTypes.indexOf(this._type) > -1;
    }
    /** Checks whether the input is invalid based on the native validation. */

  }, {
    key: "_isBadInput",
    value: function _isBadInput() {
      // The `validity` property won't be present on platform-server.
      var validity = this._elementRef.nativeElement.validity;
      return validity && validity.badInput;
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */

  }, {
    key: "setDescribedByIds",

    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    value: function setDescribedByIds(ids) {
      this._ariaDescribedby = ids.join(' ');
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */

  }, {
    key: "onContainerClick",
    value: function onContainerClick() {
      // Do not re-focus the input element if the element is already focused. Otherwise it can happen
      // that someone clicks on a time input and the cursor resets to the "hours" field while the
      // "minutes" field was actually clicked. See: https://github.com/angular/components/issues/12849
      if (!this.focused) {
        this.focus();
      }
    }
  }, {
    key: "disabled",
    get: function get() {
      if (this.ngControl && this.ngControl.disabled !== null) {
        return this.ngControl.disabled;
      }

      return this._disabled;
    },
    set: function set(value) {
      this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__["coerceBooleanProperty"])(value); // Browsers may not fire the blur event if the input is disabled too quickly.
      // Reset from here to ensure that the element doesn't become stuck.

      if (this.focused) {
        this.focused = false;
        this.stateChanges.next();
      }
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */

  }, {
    key: "id",
    get: function get() {
      return this._id;
    },
    set: function set(value) {
      this._id = value || this._uid;
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */

  }, {
    key: "required",
    get: function get() {
      return this._required;
    },
    set: function set(value) {
      this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__["coerceBooleanProperty"])(value);
    }
    /** Input type of the element. */

  }, {
    key: "type",
    get: function get() {
      return this._type;
    },
    set: function set(value) {
      this._type = value || 'text';

      this._validateType(); // When using Angular inputs, developers are no longer able to set the properties on the native
      // input element. To ensure that bindings for `type` work, we need to sync the setter
      // with the native property. Textarea elements don't support the type property or attribute.


      if (!this._isTextarea && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["getSupportedInputTypes"])().has(this._type)) {
        this._elementRef.nativeElement.type = this._type;
      }
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */

  }, {
    key: "value",
    get: function get() {
      return this._inputValueAccessor.value;
    },
    set: function set(value) {
      if (value !== this.value) {
        this._inputValueAccessor.value = value;
        this.stateChanges.next();
      }
    }
    /** Whether the element is readonly. */

  }, {
    key: "readonly",
    get: function get() {
      return this._readonly;
    },
    set: function set(value) {
      this._readonly = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__["coerceBooleanProperty"])(value);
    }
  }, {
    key: "empty",
    get: function get() {
      return !this._isNeverEmpty() && !this._elementRef.nativeElement.value && !this._isBadInput() && !this.autofilled;
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */

  }, {
    key: "shouldLabelFloat",
    get: function get() {
      if (this._isNativeSelect) {
        // For a single-selection `<select>`, the label should float when the selected option has
        // a non-empty display value. For a `<select multiple>`, the label *always* floats to avoid
        // overlapping the label with the options.
        var selectElement = this._elementRef.nativeElement;
        var firstOption = selectElement.options[0]; // On most browsers the `selectedIndex` will always be 0, however on IE and Edge it'll be
        // -1 if the `value` is set to something, that isn't in the list of options, at a later point.

        return this.focused || selectElement.multiple || !this.empty || !!(selectElement.selectedIndex > -1 && firstOption && firstOption.label);
      } else {
        return this.focused || !this.empty;
      }
    }
  }]);

  return MatInput;
}(_MatInputMixinBase);

MatInput.ɵfac = function MatInput_Factory(t) {
  return new (t || MatInput)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControl"], 10), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroupDirective"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_9__["ErrorStateMatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](MAT_INPUT_VALUE_ACCESSOR, 10), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_4__["AutofillMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], 8));
};

MatInput.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineDirective"]({
  type: MatInput,
  selectors: [["input", "matInput", ""], ["textarea", "matInput", ""], ["select", "matNativeControl", ""], ["input", "matNativeControl", ""], ["textarea", "matNativeControl", ""]],
  hostAttrs: [1, "mat-input-element", "mat-form-field-autofill-control"],
  hostVars: 10,
  hostBindings: function MatInput_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("focus", function MatInput_focus_HostBindingHandler() {
        return ctx._focusChanged(true);
      })("blur", function MatInput_blur_HostBindingHandler() {
        return ctx._focusChanged(false);
      })("input", function MatInput_input_HostBindingHandler() {
        return ctx._onInput();
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵhostProperty"]("disabled", ctx.disabled)("required", ctx.required);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("id", ctx.id)("data-placeholder", ctx.placeholder)("readonly", ctx.readonly && !ctx._isNativeSelect || null)("aria-describedby", ctx._ariaDescribedby || null)("aria-invalid", ctx.errorState)("aria-required", ctx.required.toString());
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("mat-input-server", ctx._isServer);
    }
  },
  inputs: {
    id: "id",
    disabled: "disabled",
    required: "required",
    type: "type",
    value: "value",
    readonly: "readonly",
    placeholder: "placeholder",
    errorStateMatcher: "errorStateMatcher"
  },
  exportAs: ["matInput"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([{
    provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldControl"],
    useExisting: MatInput
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵNgOnChangesFeature"]]
});

MatInput.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"]
  }, {
    type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"]
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControl"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Self"]
    }]
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"]
    }]
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroupDirective"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"]
    }]
  }, {
    type: _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["ErrorStateMatcher"]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Self"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"],
      args: [MAT_INPUT_VALUE_ACCESSOR]
    }]
  }, {
    type: _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_4__["AutofillMonitor"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgZone"]
  }, {
    type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"]
    }]
  }];
};

MatInput.propDecorators = {
  disabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  id: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  placeholder: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  required: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  type: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  errorStateMatcher: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  value: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  readonly: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
  }],
  _focusChanged: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["HostListener"],
    args: ['focus', ['true']]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["HostListener"],
    args: ['blur', ['false']]
  }],
  _onInput: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["HostListener"],
    args: ['input']
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](MatInput, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Directive"],
    args: [{
      selector: "input[matInput], textarea[matInput], select[matNativeControl],\n      input[matNativeControl], textarea[matNativeControl]",
      exportAs: 'matInput',
      host: {
        /**
         * @breaking-change 8.0.0 remove .mat-form-field-autofill-control in favor of AutofillMonitor.
         */
        'class': 'mat-input-element mat-form-field-autofill-control',
        '[class.mat-input-server]': '_isServer',
        // Native input properties that are overwritten by Angular inputs need to be synced with
        // the native input element. Otherwise property bindings for those don't work.
        '[attr.id]': 'id',
        // At the time of writing, we have a lot of customer tests that look up the input based on its
        // placeholder. Since we sometimes omit the placeholder attribute from the DOM to prevent screen
        // readers from reading it twice, we have to keep it somewhere in the DOM for the lookup.
        '[attr.data-placeholder]': 'placeholder',
        '[disabled]': 'disabled',
        '[required]': 'required',
        '[attr.readonly]': 'readonly && !_isNativeSelect || null',
        '[attr.aria-describedby]': '_ariaDescribedby || null',
        '[attr.aria-invalid]': 'errorState',
        '[attr.aria-required]': 'required.toString()'
      },
      providers: [{
        provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldControl"],
        useExisting: MatInput
      }]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"]
    }, {
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControl"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Self"]
      }]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"]
      }]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroupDirective"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"]
      }]
    }, {
      type: _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["ErrorStateMatcher"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Self"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"],
        args: [MAT_INPUT_VALUE_ACCESSOR]
      }]
    }, {
      type: _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_4__["AutofillMonitor"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgZone"]
    }, {
      type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Optional"]
      }]
    }];
  }, {
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    required: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    type: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    readonly: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.

    /** Callback for the cases where the focused state of the input changes. */
    // tslint:disable:no-host-decorator-in-concrete
    // tslint:enable:no-host-decorator-in-concrete
    _focusChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["HostListener"],
      args: ['focus', ['true']]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["HostListener"],
      args: ['blur', ['false']]
    }],
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    _onInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["HostListener"],
      args: ['input']
    }],
    placeholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
    }],
    errorStateMatcher: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"]
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


var MatInputModule = function MatInputModule() {
  Object(_home_nwightma_homepage_abbey2_abbey_ui_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MatInputModule);
};

MatInputModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: MatInputModule
});
MatInputModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  factory: function MatInputModule_Factory(t) {
    return new (t || MatInputModule)();
  },
  providers: [_angular_material_core__WEBPACK_IMPORTED_MODULE_9__["ErrorStateMatcher"]],
  imports: [[_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_4__["TextFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"]], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_4__["TextFieldModule"], // We re-export the `MatFormFieldModule` since `MatInput` will almost always
  // be used together with `MatFormField`.
  _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](MatInputModule, {
    declarations: function declarations() {
      return [MatInput, MatTextareaAutosize];
    },
    imports: function imports() {
      return [_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_4__["TextFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"]];
    },
    exports: function exports() {
      return [_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_4__["TextFieldModule"], // We re-export the `MatFormFieldModule` since `MatInput` will almost always
      // be used together with `MatFormField`.
      _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], MatInput, MatTextareaAutosize];
    }
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](MatInputModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"],
    args: [{
      declarations: [MatInput, MatTextareaAutosize],
      imports: [_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_4__["TextFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"]],
      exports: [_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_4__["TextFieldModule"], // We re-export the `MatFormFieldModule` since `MatInput` will almost always
      // be used together with `MatFormField`.
      _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], MatInput, MatTextareaAutosize],
      providers: [_angular_material_core__WEBPACK_IMPORTED_MODULE_9__["ErrorStateMatcher"]]
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




/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/events/dialogs/new.event.dialog.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/events/dialogs/new.event.dialog.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col s12\">\n        <h1 mat-dialog-title>{{data.type}}</h1>\n\n        <div mat-dialog-content>\n            <div class=\"input-field\">\n                <input id=\"icon_email\" type=\"text\" placeholder=\"Title\" [(ngModel)]=\"newPost.title\">\n            </div>\n            <div class=\"input-field\">\n                <input type=\"date\" class=\"datepicker\" placeholder=\"Select date\" [(ngModel)]=\"newPost.dateString\">\n            </div>\n\n            <div id=\"editor\" [froalaEditor]=\"options\" [(froalaModel)]=\"newPost.editorContent\" style=\"min-height: 250px;\"></div>\n        </div>\n\n        <div mat-dialog-actions>\n            <div style=\"width: 100%;\">\n                <button class=\"waves-effect waves-light btn green right\" style=\"margin-left: 5px;\"\n                        (click)=\"save()\">\n                    <i class=\"material-icons left\">save</i>Save\n                </button>\n                <button class=\"waves-effect waves-light btn orange right\" (click)=\"dialogRef.close()\">\n                    <i class=\"material-icons left\">cancel</i>Cancel\n                </button>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"progress\" *ngIf=\"saving\">\n    <div class=\"indeterminate\"></div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/events/event.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/events/event.component.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" style=\"min-height: 90vh;\">\n    <div class=\"section\">\n        <div class=\"row\">\n            <div class=\"fixed-action-btn horizontal hide-on-small-only\" style=\"top: 90px;\" *ngIf=\"_authService.isLoggedIn\">\n                <a class=\"btn-floating btn-large red\">\n                    <i class=\"material-icons\">add</i>\n                </a>\n                <ul>\n                    <li (click)=\"openDialog('Event')\"><a class=\"btn waves-effect green\">Event</a></li>\n                </ul>\n            </div>\n\n            <div class=\"fixed-action-btn toolbar hide-on-med-and-up\" style=\"z-index: 999;\" *ngIf=\"_authService.isLoggedIn\">\n                <a class=\"btn-floating btn-large red\">\n                    <i class=\"large material-icons\">add</i>\n                </a>\n                <ul>\n                    <li (click)=\"openDialog('Event')\">\n                        <a class=\"waves-effect waves-light btn green\">Event</a>\n                    </li>\n                </ul>\n            </div>\n\n            <div class=\"col s12 m12 xl8 offset-xl2\">\n                <div class=\"card\" *ngFor=\"let event of events; let i = index;\" in-viewport (inViewport)=\"inView( i, $event )\">\n\n                        <div class=\"card-content\">\n                            <div class=\"card-title\" style=\"color: #FF4500; font-weight: 500;\">\n                                {{event._title}}\n                            </div>\n                            <div class=\"light event-content\"> <b>{{event._date | date:'mediumDate'}}</b> </div>\n                            <div class=\"light event-content\" [innerHTML]=\"event._content\"> </div>\n                        </div>\n\n                        <div class=\"card-action\">\n                            <div class=\"row\" style=\"margin-bottom: 0;\">\n                                <div class=\"col s12 m6\">\n                                    <small>Posted by {{event._user._first}} {{event._user._last}} at {{event._createdAt | date:'medium' }}</small>\n                                </div>\n                                <div class=\"col s12 m6\" *ngIf=\"_authService.isLoggedIn\">\n\n                                    <div class=\"fixed-action-btn horizontal hide-on-small-only\" style=\"position: absolute; top: 6px; right: 10px;\">\n                                        <a class=\"btn-floating btn\" style=\"position: absolute; right: 0;\">\n                                            <i class=\"material-icons\">more_vert</i>\n                                        </a>\n                                        <ul style=\"right: 30px;\">\n                                            <li style=\"margin-top: 3px;\" (click)=\"openDialog('Event', event)\">\n                                                <a class=\"waves-effect waves-light btn orange\"><i class=\"material-icons left\">edit</i>Edit</a>\n                                            </li>\n                                            <li style=\"margin: 0 30px 0 0;\" (click)=\"delete(event)\">\n                                                <a class=\"waves-effect waves-light btn red\"><i class=\"material-icons left\">delete</i>Delete</a>\n                                            </li>\n                                        </ul>\n                                    </div>\n\n                                    <div class=\"fixed-action-btn toolbar hide-on-med-and-up\" style=\"position: absolute; top: 0; right: 0;\">\n                                        <a class=\"btn-floating btn\" style=\"position: absolute; right: 10px; top: 5px;\">\n                                            <i class=\"large material-icons\">more_vert</i>\n                                        </a>\n                                        <ul>\n                                            <li class=\"waves-effect waves-light\" (click)=\"openDialog('Event', event)\">\n                                                <a class=\"waves-effect waves-light btn orange\"><i class=\"material-icons left\">edit</i>Edit</a>\n                                            </li>\n                                            <li class=\"waves-effect waves-light\" (click)=\"delete(event)\">\n                                                <a class=\"waves-effect waves-light btn red\"><i class=\"material-icons left\">delete</i>Delete</a>\n                                            </li>\n                                        </ul>\n                                    </div>\n\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"progress\" *ngIf=\"event.deleting\">\n                            <div class=\"indeterminate\"></div>\n                        </div>\n\n                    </div>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <mat-progress-spinner *ngIf=\"loading\" style=\"margin: 0 auto;\"\n                                 [mode]=\"'indeterminate'\">\n            </mat-progress-spinner>\n        </div>\n\n        <div class=\"row\" *ngIf=\"!loading && !events.length\">\n            <p class=\"light center\">No Events, please come back soon to check again</p>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/events/dialogs/new.event.dialog.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/events/dialogs/new.event.dialog.component.ts ***!
  \**************************************************************/
/*! exports provided: NewEventDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewEventDialogComponent", function() { return NewEventDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/event.service */ "./src/app/services/event.service.ts");
/* harmony import */ var _models_event_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/event.model */ "./src/app/models/event.model.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
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






var NewEventDialogComponent = /** @class */ (function () {
    function NewEventDialogComponent(dialogRef, data, _eventService, _authService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this._eventService = _eventService;
        this._authService = _authService;
        this.options = {
            placeholderText: 'Edit Your Content Here!',
            charCounterCount: false,
            immediateAngularModelUpdate: true,
            imageUploadURL: _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].urls.rest + 'api/upload',
            imageManagerDeleteURL: _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].urls.rest + 'api/upload',
            imageManagerDeleteMethod: 'DELETE'
        };
        this.newPost = {
            editorContent: null,
            title: null,
            createdAt: null,
            date: null,
            dateString: null
        };
        this.saving = false;
        this.options['requestHeaders'] = {
            Authorization: this._authService.token
        };
        if (data.event) {
            var date = new Date(data.event._date);
            this.newPost.editorContent = data.event._content;
            this.newPost.title = data.event._title;
            this.newPost.date = data.event._date;
            this.newPost.dateString = date.toDateString();
        }
    }
    NewEventDialogComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        $('.datepicker').pickadate({
            closeOnSelect: true,
            onSet: function (value) {
                var date = new Date(value.select);
                date.setHours(5);
                _this.newPost.date = date;
                _this.newPost.dateString = date.toDateString();
            }
        });
        $('#editor')
            .on('froalaEditor.image.removed', function (e, editor, $img) {
            $img.map(function (index, img) {
                var startPos = img.src.search('/upload');
                var imgName = img.src.substr(startPos + 1);
                _this._eventService.deleteImage(imgName);
            });
        });
    };
    NewEventDialogComponent.prototype.save = function () {
        var _this = this;
        this.saving = true;
        this.newPost.createdAt = new Date();
        if (this.data.event) { // editMode
            this._eventService.editEvent(this.data.event._id, this.newPost)
                .then(function (res) {
                _this.saving = false;
                _this.dialogRef.close(new _models_event_model__WEBPACK_IMPORTED_MODULE_2__["Event"](res));
            })
                .catch(function (err) {
                _this.saving = false;
                console.log(err);
            });
        }
        else { // create mode
            this._eventService.postEvent(this.newPost)
                .then(function (res) {
                _this.saving = false;
                _this.dialogRef.close(new _models_event_model__WEBPACK_IMPORTED_MODULE_2__["Event"](res));
            })
                .catch(function (err) {
                _this.saving = false;
                console.log(err);
            });
        }
    };
    NewEventDialogComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"],] }] },
        { type: _services_event_service__WEBPACK_IMPORTED_MODULE_1__["EventService"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
    ]; };
    NewEventDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-post-dialog',
            template: __importDefault(__webpack_require__(/*! raw-loader!./new.event.dialog.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/events/dialogs/new.event.dialog.html")).default,
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"], Object, _services_event_service__WEBPACK_IMPORTED_MODULE_1__["EventService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], NewEventDialogComponent);
    return NewEventDialogComponent;
}());



/***/ }),

/***/ "./src/app/events/event-routing.module.ts":
/*!************************************************!*\
  !*** ./src/app/events/event-routing.module.ts ***!
  \************************************************/
/*! exports provided: EventRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventRoutingModule", function() { return EventRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _event_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event.component */ "./src/app/events/event.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var eventsRoutes = [
    {
        path: '',
        component: _event_component__WEBPACK_IMPORTED_MODULE_2__["EventComponent"]
    },
];
var EventRoutingModule = /** @class */ (function () {
    function EventRoutingModule() {
    }
    EventRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(eventsRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ],
            providers: []
        })
    ], EventRoutingModule);
    return EventRoutingModule;
}());



/***/ }),

/***/ "./src/app/events/event.component.css":
/*!********************************************!*\
  !*** ./src/app/events/event.component.css ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-action .btn-floating {\n    background: #00b060;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXZlbnRzL2V2ZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9ldmVudHMvZXZlbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWFjdGlvbiAuYnRuLWZsb2F0aW5nIHtcbiAgICBiYWNrZ3JvdW5kOiAjMDBiMDYwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/events/event.component.ts":
/*!*******************************************!*\
  !*** ./src/app/events/event.component.ts ***!
  \*******************************************/
/*! exports provided: EventComponent, ConfirmationDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventComponent", function() { return EventComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationDialog", function() { return ConfirmationDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/event.service */ "./src/app/services/event.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _dialogs_new_event_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dialogs/new.event.dialog.component */ "./src/app/events/dialogs/new.event.dialog.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
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






var EventComponent = /** @class */ (function () {
    function EventComponent(_authService, _eventService, route, dialog) {
        this._authService = _authService;
        this._eventService = _eventService;
        this.route = route;
        this.dialog = dialog;
        this.events = [];
        this.loading = true;
        this.queryObj = {
            skip: 0,
            limit: 5
        };
    }
    EventComponent.prototype.openDialog = function (type, event) {
        var _this = this;
        if (event === void 0) { event = null; }
        var config = {
            disableClose: true,
            width: '',
            height: '80%',
            position: {
                top: '',
                bottom: '',
                left: '',
                right: ''
            },
            data: {
                type: type,
                event: event
            }
        };
        var dialogRef = this.dialog.open(_dialogs_new_event_dialog_component__WEBPACK_IMPORTED_MODULE_4__["NewEventDialogComponent"], config);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                var index = _this.events.findIndex(function (a) { return a._id === result._id; });
                if (index > -1) {
                    _this.events.splice(index, 1, result);
                }
                else {
                    _this.events.unshift(result);
                }
            }
        });
    };
    EventComponent.prototype.ngOnInit = function () {
        this.getEvents();
    };
    EventComponent.prototype.getEvents = function () {
        var _this = this;
        this._eventService.getEvents(this.queryObj)
            .subscribe(function (events) {
            _this.events = _this.events.concat(events);
            _this.loading = false;
        }, function (error) {
            _this.loading = false;
        });
    };
    EventComponent.prototype.delete = function (event) {
        var _this = this;
        var dialogRef = this.dialog.open(ConfirmationDialog);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result === true) {
                event.deleting = true;
                _this._eventService.deleteEvent(event)
                    .then(function () { return _this.events = _this.events.filter(function (a) { return a._id !== event._id; }); })
                    .catch(function (err) { return console.log(err); });
            }
        });
    };
    EventComponent.prototype.inView = function (index, event) {
        if (event.value && !this.loading) {
            if (index >= this.events.length - 1 && this.events.length === this.queryObj.skip + this.queryObj.limit) {
                this.loading = true;
                this.queryObj.skip += this.queryObj.limit;
                this.getEvents();
            }
        }
    };
    EventComponent.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] },
        { type: _services_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }
    ]; };
    EventComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __importDefault(__webpack_require__(/*! raw-loader!./event.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/events/event.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./event.component.css */ "./src/app/events/event.component.css")).default]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _services_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
    ], EventComponent);
    return EventComponent;
}());

var ConfirmationDialog = /** @class */ (function () {
    function ConfirmationDialog(dialogRef) {
        this.dialogRef = dialogRef;
    }
    ConfirmationDialog.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"] }
    ]; };
    ConfirmationDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dialog-result-example-dialog',
            template: '<h1 mat-dialog-title>Deleting event</h1>' +
                '<div mat-dialog-content>Are you sure?</div>' +
                '<div mat-dialog-actions>' +
                '  <button class="waves-effect waves-light btn orange" [mat-dialog-close]="false" style="margin-right: 0.5em;">Cancel</button>' +
                '  <button class="waves-effect waves-light btn green" mat-button [mat-dialog-close]="true">Confirm</button>' +
                '</div>',
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"]])
    ], ConfirmationDialog);
    return ConfirmationDialog;
}());



/***/ }),

/***/ "./src/app/events/event.module.ts":
/*!****************************************!*\
  !*** ./src/app/events/event.module.ts ***!
  \****************************************/
/*! exports provided: EventModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventModule", function() { return EventModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _event_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event.component */ "./src/app/events/event.component.ts");
/* harmony import */ var _event_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event-routing.module */ "./src/app/events/event-routing.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/event.service */ "./src/app/services/event.service.ts");
/* harmony import */ var _event_resolve__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./event.resolve */ "./src/app/events/event.resolve.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _dialogs_new_event_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dialogs/new.event.dialog.component */ "./src/app/events/dialogs/new.event.dialog.component.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var EventModule = /** @class */ (function () {
    function EventModule() {
    }
    EventModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _event_component__WEBPACK_IMPORTED_MODULE_1__["EventComponent"],
                _dialogs_new_event_dialog_component__WEBPACK_IMPORTED_MODULE_8__["NewEventDialogComponent"],
                _event_component__WEBPACK_IMPORTED_MODULE_1__["ConfirmationDialog"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _event_routing_module__WEBPACK_IMPORTED_MODULE_2__["EventRoutingModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
                _shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"]
            ],
            entryComponents: [
                _dialogs_new_event_dialog_component__WEBPACK_IMPORTED_MODULE_8__["NewEventDialogComponent"],
                _event_component__WEBPACK_IMPORTED_MODULE_1__["ConfirmationDialog"]
            ],
            providers: [_services_event_service__WEBPACK_IMPORTED_MODULE_4__["EventService"], _event_resolve__WEBPACK_IMPORTED_MODULE_5__["EventResolver"]],
            bootstrap: [_event_component__WEBPACK_IMPORTED_MODULE_1__["EventComponent"]]
        })
    ], EventModule);
    return EventModule;
}());



/***/ }),

/***/ "./src/app/events/event.resolve.ts":
/*!*****************************************!*\
  !*** ./src/app/events/event.resolve.ts ***!
  \*****************************************/
/*! exports provided: EventResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventResolver", function() { return EventResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_event_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/event.service */ "./src/app/services/event.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventResolver = /** @class */ (function () {
    function EventResolver(_eventService) {
        this._eventService = _eventService;
    }
    EventResolver.prototype.resolve = function (route, state) {
        return this._eventService.getEvents({});
    };
    EventResolver.ctorParameters = function () { return [
        { type: _services_event_service__WEBPACK_IMPORTED_MODULE_1__["EventService"] }
    ]; };
    EventResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_event_service__WEBPACK_IMPORTED_MODULE_1__["EventService"]])
    ], EventResolver);
    return EventResolver;
}());



/***/ })

}]);
//# sourceMappingURL=app-events-event-module.js.map