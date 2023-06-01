(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-news-news-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/news/dialogs/new.post.dialog.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/news/dialogs/new.post.dialog.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col s12\">\n        <h1 mat-dialog-title>{{data.type}}</h1>\n\n        <div id=\"dialogContent\" mat-dialog-content style=\"display: inline-table;\">\n            <div class=\"input-field\">\n                <input id=\"icon_email\" type=\"text\" placeholder=\"Title\" [(ngModel)]=\"newPost.title\">\n            </div>\n            <div class=\"input-field\">\n                <input type=\"date\" class=\"datepicker\" placeholder=\"Select date\" [(ngModel)]=\"newPost.dateString\">\n            </div>\n\n            <div id=\"editor\" [froalaEditor]=\"options\" [(froalaModel)]=\"newPost.editorContent\"\n                 style=\"min-height: 190px;\"></div>\n        </div>\n\n        <div mat-dialog-actions>\n            <div style=\"width: 100%;\">\n                <button class=\"waves-effect waves-light btn green right\" style=\"margin-left: 5px;\"\n                        (click)=\"save()\">\n                    <i class=\"material-icons left\">save</i>Save\n                </button>\n                <button class=\"waves-effect waves-light btn orange right\" (click)=\"dialogRef.close()\">\n                    <i class=\"material-icons left\">cancel</i>Cancel\n                </button>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"progress\" *ngIf=\"saving\">\n    <div class=\"indeterminate\"></div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/news/news.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/news/news.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" style=\"min-height: 90vh;\">\n    <div class=\"section\">\n        <div class=\"row\">\n            <div class=\"fixed-action-btn horizontal hide-on-small-only\" style=\"top: 90px;\" *ngIf=\"_authService.isLoggedIn\">\n                <a class=\"btn-floating btn-large red\">\n                    <i class=\"material-icons\">add</i>\n                </a>\n                <ul>\n                    <li (click)=\"openDialog('News')\"><a class=\"btn waves-effect green\">Article</a></li>\n                </ul>\n            </div>\n\n            <div class=\"fixed-action-btn toolbar hide-on-med-and-up\" style=\"z-index: 999;\" *ngIf=\"_authService.isLoggedIn\">\n                <a class=\"btn-floating btn-large red\">\n                    <i class=\"large material-icons\">add</i>\n                </a>\n                <ul>\n                    <li (click)=\"openDialog('News')\">\n                        <a class=\"waves-effect waves-light btn green\">Article</a>\n                    </li>\n                </ul>\n            </div>\n\n            <div class=\"col s12 m12 xl8 offset-xl2\">\n                {{error}}\n                <div class=\"card\" *ngFor=\"let article of news; let i = index;\" in-viewport (inViewport)=\"inView( i, $event )\">\n\n                        <div class=\"card-content\">\n                            <div class=\"card-title\" style=\"color: #FF4500; font-weight: 500;\">\n                                {{article._title}}\n                            </div>\n                            <div class=\"light event-content\"> <b>{{article._date | date:'mediumDate'}}</b> </div>\n                            <div class=\"light article-content\" [innerHTML]=\"article._content\">\n\n                            </div>\n                        </div>\n\n                        <div class=\"card-action\">\n                            <div class=\"row\" style=\"margin-bottom: 0;\">\n                                <div class=\"col s12 m6\">\n                                    <small>Posted by {{article._user._first}} {{article._user._last}} at {{article._createdAt | date:'medium' }}</small>\n                                </div>\n                                <div class=\"col s12 m6\" *ngIf=\"_authService.isLoggedIn\">\n\n                                    <div class=\"fixed-action-btn horizontal hide-on-small-only\" style=\"position: absolute; top: 6px; right: 10px;\">\n                                        <a class=\"btn-floating btn\" style=\"position: absolute; right: 0;\">\n                                            <i class=\"material-icons\">more_vert</i>\n                                        </a>\n                                        <ul style=\"right: 30px;\">\n                                            <li style=\"margin-top: 3px;\" (click)=\"openDialog('News', article)\">\n                                                <a class=\"waves-effect waves-light btn orange\"><i class=\"material-icons left\">edit</i>Edit</a>\n                                            </li>\n                                            <li style=\"margin: 0 30px 0 0;\" (click)=\"delete(article)\">\n                                                <a class=\"waves-effect waves-light btn red\"><i class=\"material-icons left\">delete</i>Delete</a>\n                                            </li>\n                                        </ul>\n                                    </div>\n\n                                    <div class=\"fixed-action-btn toolbar hide-on-med-and-up\" style=\"position: absolute; top: 0; right: 0;\">\n                                        <a class=\"btn-floating btn\" style=\"position: absolute; right: 10px; top: 5px;\">\n                                            <i class=\"large material-icons\">more_vert</i>\n                                        </a>\n                                        <ul>\n                                            <li class=\"waves-effect waves-light\" (click)=\"openDialog('News', article)\">\n                                                <a class=\"waves-effect waves-light btn orange\"><i class=\"material-icons left\">edit</i>Edit</a>\n                                            </li>\n                                            <li class=\"waves-effect waves-light\" (click)=\"delete(article)\">\n                                                <a class=\"waves-effect waves-light btn red\"><i class=\"material-icons left\">delete</i>Delete</a>\n                                            </li>\n                                        </ul>\n                                    </div>\n\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"progress\" *ngIf=\"article.deleting\">\n                            <div class=\"indeterminate\"></div>\n                        </div>\n\n                    </div>\n\n                <div class=\"card\" *ngIf=\"error\">\n\n                        <div class=\"card-content\">\n                            <div class=\"card-title\" style=\"color: #FF4500; font-weight: 500;\">\n                                An error has occurred\n                            </div>\n                            <div class=\"light event-content\"> <b>{{Date() | date:'mediumDate'}}</b> </div>\n                            <div class=\"light article-content\" [innerHTML]=\"error\">\n\n                            </div>\n                        </div>\n\n                    </div>\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <mat-progress-spinner *ngIf=\"loading\" style=\"margin: 0 auto;\"\n                                 [mode]=\"'indeterminate'\">\n            </mat-progress-spinner>\n        </div>\n\n        <div class=\"row\" *ngIf=\"!loading && !news.length\">\n            <p class=\"light center\">No Articles, please come back soon to check again</p>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/news/dialogs/new.post.dialog.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/news/dialogs/new.post.dialog.component.ts ***!
  \***********************************************************/
/*! exports provided: NewPostDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPostDialogComponent", function() { return NewPostDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_news_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/news.service */ "./src/app/services/news.service.ts");
/* harmony import */ var _models_news_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/news.model */ "./src/app/models/news.model.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
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






var NewPostDialogComponent = /** @class */ (function () {
    function NewPostDialogComponent(dialogRef, data, _newsService, _authService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this._newsService = _newsService;
        this._authService = _authService;
        this.options = {
            placeholderText: 'Edit Your Content Here!',
            charCounterCount: false,
            immediateAngularModelUpdate: true,
            imageUploadURL: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].urls.rest + 'api/upload',
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
        if (data.news) {
            var date = new Date(data.news._date);
            this.newPost.editorContent = data.news._content;
            this.newPost.title = data.news._title;
            this.newPost.date = data.news._date;
            this.newPost.dateString = date.toDateString();
        }
    }
    NewPostDialogComponent.prototype.ngAfterViewInit = function () {
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
                _this._newsService.deleteImage(imgName);
            });
        });
    };
    NewPostDialogComponent.prototype.save = function () {
        var _this = this;
        this.saving = true;
        this.newPost.createdAt = new Date();
        if (this.data.news) { // editMode
            this._newsService.editNews(this.data.news._id, this.newPost)
                .then(function (res) {
                _this.saving = false;
                _this.dialogRef.close(new _models_news_model__WEBPACK_IMPORTED_MODULE_2__["News"](res));
            })
                .catch(function (err) {
                _this.saving = false;
                console.log(err);
            });
        }
        else { // create mode
            this._newsService.postNews(this.newPost)
                .then(function (res) {
                _this.saving = false;
                _this.dialogRef.close(new _models_news_model__WEBPACK_IMPORTED_MODULE_2__["News"](res));
            })
                .catch(function (err) {
                _this.saving = false;
                console.log(err);
            });
        }
    };
    NewPostDialogComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"],] }] },
        { type: _services_news_service__WEBPACK_IMPORTED_MODULE_1__["NewsService"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
    ]; };
    NewPostDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-post-dialog',
            template: __importDefault(__webpack_require__(/*! raw-loader!./new.post.dialog.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/news/dialogs/new.post.dialog.html")).default,
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"], Object, _services_news_service__WEBPACK_IMPORTED_MODULE_1__["NewsService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], NewPostDialogComponent);
    return NewPostDialogComponent;
}());



/***/ }),

/***/ "./src/app/news/news-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/news/news-routing.module.ts ***!
  \*********************************************/
/*! exports provided: NewsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsRoutingModule", function() { return NewsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _news_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./news.component */ "./src/app/news/news.component.ts");
/* harmony import */ var _news_resolve__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./news.resolve */ "./src/app/news/news.resolve.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var newsRoutes = [
    {
        path: ':id',
        component: _news_component__WEBPACK_IMPORTED_MODULE_2__["NewsComponent"],
        resolve: {
            article: _news_resolve__WEBPACK_IMPORTED_MODULE_3__["NewsResolver"]
        }
    },
    {
        path: '',
        component: _news_component__WEBPACK_IMPORTED_MODULE_2__["NewsComponent"]
    }
];
var NewsRoutingModule = /** @class */ (function () {
    function NewsRoutingModule() {
    }
    NewsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(newsRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ],
            providers: []
        })
    ], NewsRoutingModule);
    return NewsRoutingModule;
}());



/***/ }),

/***/ "./src/app/news/news.component.css":
/*!*****************************************!*\
  !*** ./src/app/news/news.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-action .btn-floating {\n    background: #00b060;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3cy9uZXdzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9uZXdzL25ld3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWFjdGlvbiAuYnRuLWZsb2F0aW5nIHtcbiAgICBiYWNrZ3JvdW5kOiAjMDBiMDYwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/news/news.component.ts":
/*!****************************************!*\
  !*** ./src/app/news/news.component.ts ***!
  \****************************************/
/*! exports provided: NewsComponent, ConfirmationDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationDialog", function() { return ConfirmationDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_news_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/news.service */ "./src/app/services/news.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _dialogs_new_post_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dialogs/new.post.dialog.component */ "./src/app/news/dialogs/new.post.dialog.component.ts");
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






var NewsComponent = /** @class */ (function () {
    function NewsComponent(_authService, _newsService, route, dialog) {
        this._authService = _authService;
        this._newsService = _newsService;
        this.route = route;
        this.dialog = dialog;
        this.news = [];
        this.loading = true;
        this.queryObj = {
            skip: 0,
            limit: 5
        };
    }
    NewsComponent.prototype.openDialog = function (type, news) {
        var _this = this;
        if (news === void 0) { news = null; }
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
                news: news
            }
        };
        var dialogRef = this.dialog.open(_dialogs_new_post_dialog_component__WEBPACK_IMPORTED_MODULE_4__["NewPostDialogComponent"], config);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                var index = _this.news.findIndex(function (a) { return a._id === result._id; });
                if (index > -1) {
                    _this.news.splice(index, 1, result);
                }
                else {
                    _this.news.unshift(result);
                }
            }
        });
    };
    NewsComponent.prototype.ngOnInit = function () {
        if (!this.route.snapshot.params['id']) {
            return this.getNews();
        }
        if (this.route.snapshot.data.article) {
            this.news.push(this.route.snapshot.data.article);
            this.loading = false;
        }
        else {
            this.error = 'I\'m sorry, something has gone wrong, please contact us regarding this issue.';
        }
    };
    NewsComponent.prototype.getNews = function () {
        var _this = this;
        this._newsService.getNews(this.queryObj)
            .subscribe(function (news) {
            _this.news = _this.news.concat(news);
            _this.loading = false;
        });
    };
    NewsComponent.prototype.delete = function (news) {
        var _this = this;
        var dialogRef = this.dialog.open(ConfirmationDialog);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result === true) {
                news.deleting = true;
                _this._newsService.deleteNews(news)
                    .then(function () { return _this.news = _this.news.filter(function (a) { return a._id !== news._id; }); })
                    .catch(function (err) { return console.log(err); });
            }
        });
    };
    NewsComponent.prototype.inView = function (index, event) {
        if (event.value && !this.loading) {
            if (index >= this.news.length - 1 && this.news.length === this.queryObj.skip + this.queryObj.limit) {
                this.loading = true;
                this.queryObj.skip += this.queryObj.limit;
                this.getNews();
            }
        }
    };
    NewsComponent.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] },
        { type: _services_news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }
    ]; };
    NewsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __importDefault(__webpack_require__(/*! raw-loader!./news.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/news/news.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./news.component.css */ "./src/app/news/news.component.css")).default]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _services_news_service__WEBPACK_IMPORTED_MODULE_2__["NewsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
    ], NewsComponent);
    return NewsComponent;
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
            template: '<h1 mat-dialog-title>Deleting article</h1>' +
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

/***/ "./src/app/news/news.module.ts":
/*!*************************************!*\
  !*** ./src/app/news/news.module.ts ***!
  \*************************************/
/*! exports provided: NewsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsModule", function() { return NewsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _news_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./news.component */ "./src/app/news/news.component.ts");
/* harmony import */ var _news_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./news-routing.module */ "./src/app/news/news-routing.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _services_news_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/news.service */ "./src/app/services/news.service.ts");
/* harmony import */ var _news_resolve__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./news.resolve */ "./src/app/news/news.resolve.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _dialogs_new_post_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dialogs/new.post.dialog.component */ "./src/app/news/dialogs/new.post.dialog.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var NewsModule = /** @class */ (function () {
    function NewsModule() {
    }
    NewsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _news_component__WEBPACK_IMPORTED_MODULE_1__["NewsComponent"],
                _dialogs_new_post_dialog_component__WEBPACK_IMPORTED_MODULE_7__["NewPostDialogComponent"],
                _news_component__WEBPACK_IMPORTED_MODULE_1__["ConfirmationDialog"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _news_routing_module__WEBPACK_IMPORTED_MODULE_2__["NewsRoutingModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
                _shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
            ],
            entryComponents: [
                _dialogs_new_post_dialog_component__WEBPACK_IMPORTED_MODULE_7__["NewPostDialogComponent"],
                _news_component__WEBPACK_IMPORTED_MODULE_1__["ConfirmationDialog"]
            ],
            providers: [_services_news_service__WEBPACK_IMPORTED_MODULE_4__["NewsService"], _news_resolve__WEBPACK_IMPORTED_MODULE_5__["NewsResolver"]],
            bootstrap: [_news_component__WEBPACK_IMPORTED_MODULE_1__["NewsComponent"]]
        })
    ], NewsModule);
    return NewsModule;
}());



/***/ }),

/***/ "./src/app/news/news.resolve.ts":
/*!**************************************!*\
  !*** ./src/app/news/news.resolve.ts ***!
  \**************************************/
/*! exports provided: NewsResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsResolver", function() { return NewsResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_news_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/news.service */ "./src/app/services/news.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewsResolver = /** @class */ (function () {
    function NewsResolver(_newsService) {
        this._newsService = _newsService;
    }
    NewsResolver.prototype.resolve = function (route, state) {
        if (route.params.id) {
            return this._newsService.getNewsItem(route.params.id);
        }
    };
    NewsResolver.ctorParameters = function () { return [
        { type: _services_news_service__WEBPACK_IMPORTED_MODULE_1__["NewsService"] }
    ]; };
    NewsResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_news_service__WEBPACK_IMPORTED_MODULE_1__["NewsService"]])
    ], NewsResolver);
    return NewsResolver;
}());



/***/ })

}]);
//# sourceMappingURL=app-news-news-module.js.map