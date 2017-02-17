webpackJsonp([0,3],{

/***/ 1019:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(572);


/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_app_modes__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModeService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppModeService = (function () {
    function AppModeService() {
        this.isMobildeView = false;
        this.isTabletView = false;
        this.isDesktopView = false;
        this.activeMode = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](__WEBPACK_IMPORTED_MODULE_1__models_app_modes__["a" /* AppMode */].DESKTOP);
        this.windowResize = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
        this.mobileRegex = /Mobile|Windows Phone|Lumia|Android|webOS|iPhone|iPod|Blackberry|PlayBook|BB10|Opera Mini|\bCrMo\/|Opera Mobi/i;
        this.tabletRegex = /Tablet|iPad/i;
        this.windowResize
            .debounceTime(200)
            .subscribe(this.checkActiveMode.bind(this));
        this.updateActiveMode();
    }
    AppModeService.prototype.updateActiveMode = function () {
        this.windowResize.next();
    };
    AppModeService.prototype.checkActiveMode = function () {
        this.resetModes();
        var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        var height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        if (width >= 768 && width <= 1024) {
            // navigator.userAgent.match(this.tabletRegex)
            this.isTabletView = true;
            this.activeMode.next(__WEBPACK_IMPORTED_MODULE_1__models_app_modes__["a" /* AppMode */].TABLET);
        }
        else if (width >= 320 && width < 768) {
            // navigator.userAgent.match(this.mobileRegex)
            this.isMobildeView = true;
            this.activeMode.next(__WEBPACK_IMPORTED_MODULE_1__models_app_modes__["a" /* AppMode */].MOBILE);
        }
        else {
            this.isDesktopView = true;
            this.activeMode.next(__WEBPACK_IMPORTED_MODULE_1__models_app_modes__["a" /* AppMode */].DESKTOP);
        }
    };
    AppModeService.prototype.resetModes = function () {
        this.isDesktopView = false;
        this.isTabletView = false;
        this.isDesktopView = false;
    };
    AppModeService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], AppModeService);
    return AppModeService;
}());
//# sourceMappingURL=D:/Workspace/JS-TS/ng2Tools/src/app-mode.service.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SERVER_MAP; });
var dataFoler = '/assets/mocks/app-configuration';
var SERVER_MAP = {
    "appSideMenu": dataFoler + '/app-side-menu.json',
    "components": {
        "autocomplete": dataFoler + "/api-documentation/autocomplete.json",
        "form": dataFoler + "/api-documentation/generic-form-api.json"
    },
    "form": {
        "definition": dataFoler + "/api-documentation/generic-form-definition.json",
        "validation": dataFoler + "/api-documentation/generic-form-validation.json",
        "static-links": dataFoler + "/api-documentation/generic-form-static-links.json",
        "runtime-links": dataFoler + "/api-documentation/generic-form-runtime-links.json",
    },
    "services": {
        "page-streams": dataFoler + "/api-documentation/page-streams.json",
        "searching": dataFoler + "/api-documentation/searching-service.json"
    },
    "formDefinitions": {
        "simpleExample": dataFoler + "/form-definitions/generic-form-simple-example.json",
        "definitionExample": dataFoler + "/form-definitions/generic-form-definition-example.json",
        "validationExample": dataFoler + "/form-definitions/generic-form-validation-example.json",
        "staticLinksExample": dataFoler + "/form-definitions/generic-form-static-links-example.json",
        "runtimeLinksExample": dataFoler + "/form-definitions/generic-form-runtime-links-example.json"
    }
};
//# sourceMappingURL=D:/Workspace/JS-TS/ng2Tools/src/server-map.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__validator_genators__ = __webpack_require__(744);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidatorHelper; });


/* Validations class*/
var ValidatorHelper = (function () {
    function ValidatorHelper() {
    }
    ValidatorHelper.getValidators = function (ngForm, validators) {
        // At this point the ngForm must be complete because we rely on his value to compose some validators
        if (!Array.isArray(validators)) {
            return __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose([]);
        }
        return __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].compose(validators.map(function (validator) { return ValidatorHelper.getValidator(ngForm, validator); }));
    };
    ValidatorHelper.getValidator = function (ngForm, v) {
        var validatorValue = v.validatorValue;
        if (typeof v.validatorValue === "string" && v.validatorValue.indexOf("{ngControlValue=") !== -1) {
            validatorValue = ngForm.controls[v.validatorValue.replace("{ngControlValue=", "").replace("}", "")].value;
            if (validatorValue === null || validatorValue === undefined || validatorValue === "") {
                return function (_) { return null; };
            }
        }
        return ValidatorHelper.getDefinedValidator(v.validator, validatorValue, v.errorToken, v.errorMessage);
    };
    ValidatorHelper.getDefinedValidator = function (validatorName, validatorValue, eToken, eMessage) {
        var newRegEx = null;
        try {
            newRegEx = new RegExp(validatorValue);
        }
        catch (e) { }
        switch (validatorName) {
            case 'required':
                return __WEBPACK_IMPORTED_MODULE_0__validator_genators__["a" /* ValidatorGenerator */].getAngularFormValidationFn(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, eToken);
            case 'minLength':
                return __WEBPACK_IMPORTED_MODULE_0__validator_genators__["a" /* ValidatorGenerator */].getFormValidationFn(__WEBPACK_IMPORTED_MODULE_0__validator_genators__["a" /* ValidatorGenerator */].minLength(Number(validatorValue)), eToken);
            case 'maxLength':
                return __WEBPACK_IMPORTED_MODULE_0__validator_genators__["a" /* ValidatorGenerator */].getAngularFormValidationFn(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].maxLength(Number(validatorValue)), eToken);
            case 'pattern':
                return __WEBPACK_IMPORTED_MODULE_0__validator_genators__["a" /* ValidatorGenerator */].getAngularFormValidationFn(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].pattern(newRegEx || validatorValue), eToken);
            case 'email':
                return __WEBPACK_IMPORTED_MODULE_0__validator_genators__["a" /* ValidatorGenerator */].getFormValidationFn(__WEBPACK_IMPORTED_MODULE_0__validator_genators__["a" /* ValidatorGenerator */].emailValidation, eToken);
            case 'text':
                return __WEBPACK_IMPORTED_MODULE_0__validator_genators__["a" /* ValidatorGenerator */].getFormValidationFn(__WEBPACK_IMPORTED_MODULE_0__validator_genators__["a" /* ValidatorGenerator */].textValidation, eToken);
            case 'number':
                return __WEBPACK_IMPORTED_MODULE_0__validator_genators__["a" /* ValidatorGenerator */].getFormValidationFn(__WEBPACK_IMPORTED_MODULE_0__validator_genators__["a" /* ValidatorGenerator */].numberValidation, eToken);
            case 'password':
                return __WEBPACK_IMPORTED_MODULE_0__validator_genators__["a" /* ValidatorGenerator */].getFormValidationFn(__WEBPACK_IMPORTED_MODULE_0__validator_genators__["a" /* ValidatorGenerator */].passwordValidation, eToken);
            case 'minValue':
                return __WEBPACK_IMPORTED_MODULE_0__validator_genators__["a" /* ValidatorGenerator */].getFormValidationFn(__WEBPACK_IMPORTED_MODULE_0__validator_genators__["a" /* ValidatorGenerator */].minValue(Number(validatorValue)), eToken);
            case 'maxValue':
                return __WEBPACK_IMPORTED_MODULE_0__validator_genators__["a" /* ValidatorGenerator */].getFormValidationFn(__WEBPACK_IMPORTED_MODULE_0__validator_genators__["a" /* ValidatorGenerator */].maxValue(Number(validatorValue)), eToken);
            case 'integer':
                return __WEBPACK_IMPORTED_MODULE_0__validator_genators__["a" /* ValidatorGenerator */].getFormValidationFn(__WEBPACK_IMPORTED_MODULE_0__validator_genators__["a" /* ValidatorGenerator */].integer, eToken);
            case 'maxDecimalLength':
                return __WEBPACK_IMPORTED_MODULE_0__validator_genators__["a" /* ValidatorGenerator */].getFormValidationFn(__WEBPACK_IMPORTED_MODULE_0__validator_genators__["a" /* ValidatorGenerator */].maxDecimalLength(Number(validatorValue)), eToken);
        }
        return function (_) { return null; };
    };
    return ValidatorHelper;
}());
//# sourceMappingURL=D:/Workspace/JS-TS/ng2Tools/src/validation.helper.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelperFunctionsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelperFunctionsService = (function () {
    function HelperFunctionsService() {
    }
    HelperFunctionsService.prototype.isEqualNullCustomized = function (object, objectToCompare) {
        var _this = this;
        return _.isEqualWith(object, objectToCompare, function (value, valueToCompare) {
            if (_this.isNullOrUndefined(value) && _this.isNullOrUndefined(valueToCompare)) {
                return true;
            }
        });
    };
    HelperFunctionsService.prototype.indexOf = function (array, item) {
        if (!array) {
            return -1;
        }
        for (var i = 0; i < array.length; i++) {
            if (_.isEqual(array[i], item)) {
                return i;
            }
        }
        return -1;
    };
    HelperFunctionsService.prototype.addUidPropToArrayModel = function (rows) {
        if (!rows) {
            return [];
        }
        for (var _i = 0, rows_1 = rows; _i < rows_1.length; _i++) {
            var o = rows_1[_i];
            if (o.rid) {
                continue;
            }
            o.rid = this.getUid();
        }
        return rows;
    };
    HelperFunctionsService.prototype.bindObjectToFunctions = function (object, functions) {
        for (var _i = 0, functions_1 = functions; _i < functions_1.length; _i++) {
            var func = functions_1[_i];
            if (object && object[func] && (object[func] instanceof Function)) {
                object[func].bind(object);
            }
        }
    };
    HelperFunctionsService.prototype.isNullOrUndefined = function (value) {
        return value === null || value === undefined;
    };
    HelperFunctionsService.prototype.clone = function (item) {
        return Object.assign({}, item);
    };
    HelperFunctionsService.prototype.cloneWithoutProps = function (data, removedProps) {
        var retVal = {};
        for (var key in data) {
            if (removedProps.indexOf(key) !== -1) {
                continue;
            }
            retVal[key] = data[key];
        }
        return retVal;
    };
    HelperFunctionsService.prototype.clonePropsToSource = function (source, data) {
        for (var key in data) {
            if (!source) {
                continue;
            }
            source[key] = data[key];
        }
        return source;
    };
    HelperFunctionsService.prototype.getUid = function () {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    };
    HelperFunctionsService.prototype.isKeyPressedNumeric = function (event) {
        var value = event && event.target && event.target.value ? event.target.value : '';
        var charCode = this.getCharCodeFromEvent(event);
        return this.isCharNumeric(String(value), event, charCode);
    };
    HelperFunctionsService.prototype.getCharCodeFromEvent = function (event) {
        event = event || window.event;
        return (typeof event.which === "undefined") ? event.keyCode : event.which;
    };
    /*
     * Allow only number or only one unit separator (.)
     * 48 to 57 keyboard number
     * 96 to 105 numpad number
     *
     */
    HelperFunctionsService.prototype.isCharNumeric = function (value, event, charCode) {
        var allowedKeyCodes = [8, 9, 45, 46, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57];
        if (charCode === 46 && value.toString().indexOf('.') !== -1) {
            return false;
        }
        if (charCode === 45 && ((event && event.target && event.target.selectionStart !== 0) || (value.toString().indexOf('-') !== -1))) {
            return false;
        }
        if (charCode === 48 && (event && event.target && event.target.selectionStart === 1) && value.toString().indexOf('-') !== -1) {
            return false;
        }
        if (allowedKeyCodes.indexOf(charCode) === -1) {
            return false;
        }
        return true;
    };
    HelperFunctionsService.prototype.stopEvent = function ($event) {
        if (!$event) {
            return;
        }
        $event.stopPropagation();
        $event.preventDefault();
    };
    HelperFunctionsService.prototype.sortByProperty = function (array, property, desc, useStringCompare) {
        var _this = this;
        if (desc === void 0) { desc = false; }
        if (useStringCompare === void 0) { useStringCompare = true; }
        array.sort(function (a, b) {
            if (!a) {
                a = {};
            }
            if (!b) {
                b = {};
            }
            if (useStringCompare) {
                return _this.compare(a[property].toString().toLowerCase(), b[property].toString().toLowerCase(), desc);
            }
            else {
                return _this.compare(a[property], b[property], desc);
            }
        });
    };
    HelperFunctionsService.prototype.compare = function (a, b, desc) {
        if (desc === void 0) { desc = false; }
        if (a < b) {
            return desc ? 1 : -1;
        }
        if (a > b) {
            return desc ? -1 : 1;
        }
        return 0;
    };
    HelperFunctionsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], HelperFunctionsService);
    return HelperFunctionsService;
}());
//# sourceMappingURL=D:/Workspace/JS-TS/ng2Tools/src/helper-functions.service.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggerService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoggerService = (function () {
    function LoggerService() {
    }
    LoggerService.prototype.logError = function (error) {
        if (process.env.ENV === 'production') {
            return;
        }
        console.log(error);
        console.log('ERROR STACK TRACE:');
        console.log(error.stack);
    };
    LoggerService.prototype.logWarning = function (warn) {
        if (process.env.ENV === 'production') {
            return;
        }
        console.warn(warn);
    };
    LoggerService.prototype.log = function (message) {
        if (process.env.ENV === 'production') {
            return;
        }
        console.log(message);
    };
    LoggerService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], LoggerService);
    return LoggerService;
}());
//# sourceMappingURL=D:/Workspace/JS-TS/ng2Tools/src/logger.service.js.map
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(551)))

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchingService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SearchStates; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchingService = (function () {
    function SearchingService() {
    }
    /**
     * @desc createSearchObservable - function which creates a BehaviorSubject<SearchState> which representes the SearchState
     * @param senderSubjectRef: Subject<any> a reference to a subject which emits search values
     * @param configuration: ISearchConfig a configuration for the search connection with the backed
     * @param backend: IBackend a backend connection implementation which will use the configuration to perform a search
     * @param customConfig: another configs which you might use in the performSearch implementation
     * @return BehaviorSubject<SearchState>
     */
    SearchingService.prototype.createSearchObservable = function (senderSubjectRef, configuration, backend) {
        var responseSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]({
            isQueryLengthValid: false,
            state: SearchStates.INITIAL,
            responseObject: [],
            searchQuery: ''
        });
        this.getSearchMechanism(senderSubjectRef, responseSubject, configuration, backend);
        return responseSubject;
    };
    /**
     * @desc getSearchMechanism - function which creates a BehaviorSubject<SearchState> which representes the SearchState
     * @param subjectRef: Subject<any> a reference to a subject which emits search values
     * @param responseSubject: BehaviorSubject<SearchState> which will represent the search states
     * @param configuration: ISearchConfig a configuration for the search connection with the backed
     * @param backend: IBackend a backend connection implementation which will use the configuration to perform a search
     * @param customConfig: another configs which you might use in the performSearch implementation
     * @return subjectRef subscription
     */
    SearchingService.prototype.getSearchMechanism = function (subjectRef, responseSubject, configuration, backend) {
        var _this = this;
        var searchQuery = '';
        return subjectRef.do(function (value) {
            searchQuery = value;
            _this.dispatchSearchState(configuration, responseSubject, SearchStates.TYPING, searchQuery);
        }).filter(function (value) {
            if (_this.isMinSearchQueryLengthValid(value, configuration)) {
                return true;
            }
            else {
                _this.dispatchSearchState(configuration, responseSubject, value ? SearchStates.TYPING : SearchStates.INITIAL, searchQuery);
                return false;
            }
        }).debounceTime(configuration.throttleTimer)
            .distinctUntilChanged(function (oldValue, newValue) {
            if (oldValue === newValue) {
                _this.dispatchSearchState(configuration, responseSubject, SearchStates.SEARCH_DONE, searchQuery);
                return true;
            }
            return false;
        })
            .switchMap(function () {
            _this.dispatchSearchState(configuration, responseSubject, SearchStates.SEARCHING, searchQuery);
            return backend.performSearch(configuration, searchQuery);
        }).catch(function () {
            _this.dispatchSearchState(configuration, responseSubject, SearchStates.SEARCH_DONE, searchQuery, [], false);
            return _this.getSearchMechanism(subjectRef, responseSubject, configuration, backend);
        }).subscribe(function (searchResult) {
            _this.dispatchSearchState(configuration, responseSubject, SearchStates.SEARCH_DONE, searchQuery, searchResult, false);
        }, function (error) {
            _this.dispatchSearchState(configuration, responseSubject, SearchStates.SEARCH_DONE, searchQuery, [], false);
        });
    };
    SearchingService.prototype.isMinSearchQueryLengthValid = function (value, configuration) {
        var newValueString = String(value);
        return value && newValueString.length >= configuration.minSearchQueryLength;
    };
    /**
     * @desc dispatchSearchState - helper to dispatch a new state in the subjectRef from getSearchMechanism
     */
    SearchingService.prototype.dispatchSearchState = function (config, subjectRef, // the subject reference
        state, // the current state for search
        searchQuery, // the last searchQuery
        responseObject, // the current response object
        useOldResponseValue) {
        if (searchQuery === void 0) { searchQuery = ''; }
        if (responseObject === void 0) { responseObject = []; }
        if (useOldResponseValue === void 0) { useOldResponseValue = true; }
        if (useOldResponseValue) {
            subjectRef.next({
                isQueryLengthValid: this.isMinSearchQueryLengthValid(searchQuery, config),
                state: state,
                responseObject: subjectRef.getValue().responseObject,
                searchQuery: searchQuery
            });
            return;
        }
        subjectRef.next({
            isQueryLengthValid: this.isMinSearchQueryLengthValid(searchQuery, config),
            state: state,
            responseObject: responseObject,
            searchQuery: searchQuery
        });
    };
    SearchingService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], SearchingService);
    return SearchingService;
}());
var SearchStates = (function () {
    function SearchStates() {
    }
    SearchStates.INITIAL = 'INITIAL';
    SearchStates.TYPING = 'TYPING';
    SearchStates.SEARCHING = 'SEARCHING';
    SearchStates.SEARCH_DONE = 'SEARCH_DONE';
    return SearchStates;
}());
//# sourceMappingURL=D:/Workspace/JS-TS/ng2Tools/src/searching.service.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared__ = __webpack_require__(732);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__shared__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_page__ = __webpack_require__(730);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__api_page__["a"]; });


//# sourceMappingURL=D:/Workspace/JS-TS/ng2Tools/src/index.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(92);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePageComponent = (function () {
    function HomePageComponent(backendService) {
        this.backendService = backendService;
        this.formDefinition = null;
        this.value = null;
        this.dataServices = {};
    }
    HomePageComponent.prototype.ngOnInit = function () { };
    HomePageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'home-page',
            template: __webpack_require__(959),
            styles: [__webpack_require__(907)],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* BackendService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* BackendService */]) === 'function' && _a) || Object])
    ], HomePageComponent);
    return HomePageComponent;
    var _a;
}());
//# sourceMappingURL=D:/Workspace/JS-TS/ng2Tools/src/home-page.component.js.map

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppCommunicationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppCommunicationService = (function () {
    function AppCommunicationService() {
        this.events = {};
    }
    AppCommunicationService.prototype.defineChannel = function (channelName) {
        if (this.events[channelName]) {
            return;
        }
        this.events[channelName] = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    };
    AppCommunicationService.prototype.getChannel = function (channelName) {
        if (!this.events[channelName]) {
            this.defineChannel(channelName);
        }
        return this.events[channelName];
    };
    AppCommunicationService.prototype.sendNotification = function (channelName, data) {
        if (!this.events[channelName]) {
            return;
        }
        this.events[channelName].emit(data);
    };
    AppCommunicationService.prototype.destroyChannel = function (channelName) {
        if (!this.events[channelName]) {
            return;
        }
        this.events[channelName].unsubscribe();
        this.events[channelName] = null;
    };
    AppCommunicationService.prototype.ngOnDestroy = function () {
        for (var prop in this.events) {
            if (!this.events.hasOwnProperty(prop)) {
                continue;
            }
            this.events[prop].unsubscribe();
            this.events[prop] = null;
        }
    };
    AppCommunicationService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], AppCommunicationService);
    return AppCommunicationService;
}());
//# sourceMappingURL=D:/Workspace/JS-TS/ng2Tools/src/app-communication.service.js.map

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__server_map__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_communication_service__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_services_app_mode_service__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(276);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenericLayoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GenericLayoutComponent = (function () {
    function GenericLayoutComponent(activatedRoute, appCommunicationService, appModeService, backend) {
        this.activatedRoute = activatedRoute;
        this.appCommunicationService = appCommunicationService;
        this.appModeService = appModeService;
        this.backend = backend;
        this._subscriptions = [];
        this._subscriptions.push(this.activatedRoute.params.subscribe(this.setHeaderValue.bind(this)), this.appModeService.activeMode.subscribe(this.setCurrentView.bind(this)));
    }
    GenericLayoutComponent.prototype.ngOnDestroy = function () {
        this._subscriptions.forEach(function (value) { value.unsubscribe(); });
        this._subscriptions = [];
    };
    GenericLayoutComponent.prototype.setHeaderValue = function (params) {
        this.headerGroup = params['group'] || "";
        this.headerOption = params['option'] || "";
        this.appCommunicationService.sendNotification("CLOSE_SIDE_MENU");
        this.getPageData(this.headerGroup, this.headerOption);
    };
    GenericLayoutComponent.prototype.getPageData = function (group, option) {
        var _this = this;
        this.backend.getConfiguration(__WEBPACK_IMPORTED_MODULE_0__server_map__["a" /* SERVER_MAP */][group][option])
            .subscribe(function (value) {
            _this.pageData = value;
        });
    };
    GenericLayoutComponent.prototype.openSideMenu = function () {
        this.appCommunicationService.sendNotification("OPEN_SIDE_MENU");
    };
    GenericLayoutComponent.prototype.setCurrentView = function (view) {
        this.currentView = view.toLowerCase();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["HostBinding"])('class'), 
        __metadata('design:type', Object)
    ], GenericLayoutComponent.prototype, "currentView", void 0);
    GenericLayoutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: 'generic-layout',
            template: __webpack_require__(967),
            styles: [__webpack_require__(914)],
            encapsulation: __WEBPACK_IMPORTED_MODULE_4__angular_core__["ViewEncapsulation"].None
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_communication_service__["a" /* AppCommunicationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__app_communication_service__["a" /* AppCommunicationService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__core_services_app_mode_service__["a" /* AppModeService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__core_services_app_mode_service__["a" /* AppModeService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* BackendService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* BackendService */]) === 'function' && _d) || Object])
    ], GenericLayoutComponent);
    return GenericLayoutComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=D:/Workspace/JS-TS/ng2Tools/src/generic-layout.component.js.map

/***/ }),

/***/ 469:
/***/ (function(module, exports) {

//# sourceMappingURL=D:/Workspace/JS-TS/ng2Tools/src/autocomplete-config.model.js.map

/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_core_overlay_position_viewport_ruler__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_searching_service__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_custom_value_accessor_builder__ = __webpack_require__(748);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__generic_form_generic_form_animations__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__autocomplete_config_model__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__autocomplete_config_model___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__autocomplete_config_model__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__autocomplete_overlay__ = __webpack_require__(472);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutocompleteComponent; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};









var AutocompleteComponent = (function (_super) {
    __extends(AutocompleteComponent, _super);
    function AutocompleteComponent(searchBuilder, _viewportRuler, _dir) {
        _super.call(this, _viewportRuler, _dir);
        this.searchBuilder = searchBuilder;
        /** Placeholder to be shown if no value has been selected. */
        this.iconType = ''; // 'prefix', 'suffix' or 'placeholder-prefix', 'placeholder-suffix'
        this.icon = '';
        this.errors = false;
        this.onSelectionChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onAutocompleteStateChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.blur = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.focus = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.searchState = null;
        /** Whether or not the overlay panel is open. */
        this._panelOpen = false;
        this._inputValue = '';
        this._focused = false;
        this._disabled = false;
        this.onModelChangeSubject = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.subscriptions = [];
        this.optionsSubscriptions = [];
    }
    Object.defineProperty(AutocompleteComponent.prototype, "hint", {
        set: function (value) {
            this._autocompleteHint = value || { align: "start", value: "" };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AutocompleteComponent.prototype, "placeholder", {
        get: function () { return this._placeholder; },
        set: function (value) { this._setPlaceholder(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AutocompleteComponent.prototype, "value", {
        get: function () { return this._inputValue; },
        set: function (value) { this._setInputValue(value); },
        enumerable: true,
        configurable: true
    });
    ;
    AutocompleteComponent.prototype.ngOnInit = function () {
        this.onSearchStateChange = this.searchBuilder
            .createSearchObservable(this.onModelChangeSubject, this.autocompleteConfigurtation.searchConfig, this.backend);
        this.setSearchStateChangeSubscription();
    };
    AutocompleteComponent.prototype.setSearchStateChangeSubscription = function () {
        var _this = this;
        this.subscriptions.push(this.onSearchStateChange.subscribe(function (newState) {
            _this.searchState = newState;
            _this.evaluateViewBasedOnSearchState();
            _this.onAutocompleteStateChange.emit(newState);
        }));
    };
    AutocompleteComponent.prototype.evaluateViewBasedOnSearchState = function () {
        this.setHintValueBasedOnState();
        if (this.searchState.state !== __WEBPACK_IMPORTED_MODULE_4__services_searching_service__["b" /* SearchStates */].SEARCH_DONE || !this.searchState.isQueryLengthValid) {
            this._panelOpen = false;
            return;
        }
        this.openPanelIfStateIsValid();
    };
    AutocompleteComponent.prototype.openPanelIfStateIsValid = function () {
        this._checkOverlayWithinViewport();
        this._placeholderState = this._isRtl() ? 'floating-rtl' : 'floating-ltr';
        if (!this._panelOpen) {
            this._panelOpen = true;
        }
    };
    AutocompleteComponent.prototype.onModelChange = function (inputValue) {
        this.value = inputValue;
        this._onChangeCallback(this.value);
        this._activateSearch(this.value);
    };
    AutocompleteComponent.prototype.setOptionsSubscriptions = function () {
        var _this = this;
        if (this.optionsSubscriptions) {
            this.optionsSubscriptions.forEach(function (e) { e.unsubscribe(); });
            this.optionsSubscriptions = [];
        }
        this.options.forEach(function (option, index) {
            var sub = option.onSelect.subscribe(function (event) {
                _this.onOptionSelect(_this.searchState.responseObject[index]);
                _this._panelOpen = false;
            });
            _this.optionsSubscriptions.push(sub);
        });
    };
    // From ControlValueAccessor interface
    // the ngModel init or form write value
    AutocompleteComponent.prototype.writeValue = function (value) {
        this.value = value;
    };
    // From ControlValueAccessor interface
    AutocompleteComponent.prototype.registerOnChange = function (fn) {
        this._onChangeCallback = fn;
    };
    // From ControlValueAccessor interface
    AutocompleteComponent.prototype.registerOnTouched = function (fn) {
        this._onTouchedCallback = fn;
    };
    AutocompleteComponent.prototype.setDisabledState = function (isDisabled) {
        this._disabled = isDisabled;
    };
    AutocompleteComponent.prototype.closePanel = function () {
        this._panelOpen = false;
        this.optionsSubscriptions.forEach(function (v) {
            v.unsubscribe();
        });
        this.optionsSubscriptions = [];
    };
    AutocompleteComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (val) { return val.unsubscribe(); });
        this.subscriptions = [];
        this.onModelChangeSubject.unsubscribe();
    };
    AutocompleteComponent.prototype.onOptionSelect = function (option) {
        this.value = option[this.autocompleteConfigurtation.listMapping.visibleField];
        this._onChangeCallback(this.value);
        this.onSelectionChange.emit(option);
    };
    AutocompleteComponent.prototype.keydown = function () {
        // TODO implement keyup settings
    };
    AutocompleteComponent.prototype._activateSearch = function (value) {
        if (this._disabled || !this.focus) {
            return;
        }
        this.onModelChangeSubject.next(value);
    };
    AutocompleteComponent.prototype._handleFocus = function ($event) {
        this._focused = true;
        if (this.autocompleteConfigurtation.activateOnFocus) {
            this._activateSearch(this.value);
        }
        this.focus.emit($event);
    };
    AutocompleteComponent.prototype._handleBlur = function (event) {
        // the pane will not close on blur since is causing problems with the selection
        this._focused = false;
        this._onTouchedCallback();
        this.blur.emit(event);
        if (this.isOptionClickEvent(event)) {
            this._panelOpen = false;
        }
    };
    AutocompleteComponent.prototype._isRtl = function () {
        return this._dir ? this._dir.value === 'rtl' : false;
    };
    AutocompleteComponent.prototype._setPlaceholder = function (value) {
        var _this = this;
        this._placeholder = value;
        // Must wait to record the trigger width to ensure placeholder width is included.
        Promise.resolve(null).then(function () {
            return _this._triggerWidth = _this._getTriggerRect().width - 32;
        });
    };
    AutocompleteComponent.prototype._setInputValue = function (value) {
        if (String(value) !== String(this._inputValue)) {
            this._inputValue = String(value);
        }
    };
    AutocompleteComponent.prototype.getFirstError = function (control) {
        return control.errors[Object.keys(control.errors)[0]];
    };
    AutocompleteComponent.prototype.setHintValueBasedOnState = function () {
        if (!this.autocompleteConfigurtation || !this.autocompleteConfigurtation.statesMessages) {
            return;
        }
        switch (this.searchState.state) {
            case __WEBPACK_IMPORTED_MODULE_4__services_searching_service__["b" /* SearchStates */].INITIAL:
                this._autocompleteHint.value = this.autocompleteConfigurtation.statesMessages.initialMessage || "";
                break;
            case __WEBPACK_IMPORTED_MODULE_4__services_searching_service__["b" /* SearchStates */].TYPING:
                this._autocompleteHint.value = this.autocompleteConfigurtation.statesMessages.typingMessage || "";
                break;
            case __WEBPACK_IMPORTED_MODULE_4__services_searching_service__["b" /* SearchStates */].SEARCHING:
                this._autocompleteHint.value = this.autocompleteConfigurtation.statesMessages.searchingMessage || "";
                break;
            case __WEBPACK_IMPORTED_MODULE_4__services_searching_service__["b" /* SearchStates */].SEARCH_DONE:
                this._autocompleteHint.value = !this.searchState.isQueryLengthValid
                    ? this.autocompleteConfigurtation.statesMessages.invalidSearchLengthMessage || ""
                    : this.autocompleteConfigurtation.statesMessages.initialMessage || "";
                break;
        }
    };
    AutocompleteComponent.prototype.isOptionClickEvent = function (event) {
        return event &&
            event['relatedTarget'] &&
            event['relatedTarget']['outerHTML'] &&
            String(event['relatedTarget']['outerHTML']).indexOf('md-option') === -1;
    };
    AutocompleteComponent.prototype._onChangeCallback = function (_) { };
    AutocompleteComponent.prototype._onTouchedCallback = function () { };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], AutocompleteComponent.prototype, "iconType", void 0);
    __decorate([
        // 'prefix', 'suffix' or 'placeholder-prefix', 'placeholder-suffix'
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], AutocompleteComponent.prototype, "icon", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], AutocompleteComponent.prototype, "hint", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Boolean)
    ], AutocompleteComponent.prototype, "errors", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], AutocompleteComponent.prototype, "placeholder", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7__autocomplete_config_model__["AutocompleteConfiguration"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__autocomplete_config_model__["AutocompleteConfiguration"]) === 'function' && _a) || Object)
    ], AutocompleteComponent.prototype, "autocompleteConfigurtation", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_searching_service__["IBackend"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_searching_service__["IBackend"]) === 'function' && _b) || Object)
    ], AutocompleteComponent.prototype, "backend", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["ConnectedOverlayDirective"]), 
        __metadata('design:type', (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["ConnectedOverlayDirective"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_material__["ConnectedOverlayDirective"]) === 'function' && _c) || Object)
    ], AutocompleteComponent.prototype, "overlayDir", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('triggerRef', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] }), 
        __metadata('design:type', (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _d) || Object)
    ], AutocompleteComponent.prototype, "trigger", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["MdOption"]), 
        __metadata('design:type', (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"]) === 'function' && _e) || Object)
    ], AutocompleteComponent.prototype, "options", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _f) || Object)
    ], AutocompleteComponent.prototype, "onSelectionChange", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _g) || Object)
    ], AutocompleteComponent.prototype, "onAutocompleteStateChange", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _h) || Object)
    ], AutocompleteComponent.prototype, "blur", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _j) || Object)
    ], AutocompleteComponent.prototype, "focus", void 0);
    AutocompleteComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngt-autocomplete',
            template: __webpack_require__(968),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            styles: [__webpack_require__(915)],
            providers: [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__models_custom_value_accessor_builder__["a" /* getValueAccessorProviders */])(AutocompleteComponent)
            ],
            animations: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["transformPlaceholder"],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["transformPanel"],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["fadeInContent"]
            ].concat(__WEBPACK_IMPORTED_MODULE_6__generic_form_generic_form_animations__["a" /* fieldHintAnimation */])
        }),
        __param(2, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), 
        __metadata('design:paramtypes', [(typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_4__services_searching_service__["a" /* SearchingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_searching_service__["a" /* SearchingService */]) === 'function' && _k) || Object, (typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material_core_overlay_position_viewport_ruler__["a" /* ViewportRuler */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_material_core_overlay_position_viewport_ruler__["a" /* ViewportRuler */]) === 'function' && _l) || Object, (typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["Dir"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_material__["Dir"]) === 'function' && _m) || Object])
    ], AutocompleteComponent);
    return AutocompleteComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
}(__WEBPACK_IMPORTED_MODULE_8__autocomplete_overlay__["a" /* AutocompleteOverlay */]));
//# sourceMappingURL=D:/Workspace/JS-TS/ng2Tools/src/autocomplete.component.js.map

/***/ }),

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SELECT_OPTION_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SELECT_PANEL_MAX_HEIGHT; });
/* unused harmony export SELECT_MAX_OPTIONS_DISPLAYED */
/* unused harmony export SELECT_TRIGGER_HEIGHT */
/* unused harmony export SELECT_OPTION_HEIGHT_ADJUSTMENT */
/* unused harmony export SELECT_PANEL_PADDING_X */
/* unused harmony export SELECT_PANEL_PADDING_Y */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SELECT_PANEL_VIEWPORT_PADDING; });
/* unused harmony export MAX_TRYES_TO_SET_CONTAINER_HEIGHT */
/**
 * The following style constants are necessary to save here in order
 * to properly calculate the alignment of the selected option over
 * the trigger element.
 */
/** The fixed height of every option element. */
var SELECT_OPTION_HEIGHT = 48;
/** The max height of the select's overlay panel */
var SELECT_PANEL_MAX_HEIGHT = 256;
/** The max number of options visible at once in the select panel. */
var SELECT_MAX_OPTIONS_DISPLAYED = 5;
/** The fixed height of the select's trigger element. */
var SELECT_TRIGGER_HEIGHT = 30;
/**
 * Must adjust for the difference in height between the option and the trigger,
 * so the text will align on the y axis.
 * (SELECT_OPTION_HEIGHT (48) - SELECT_TRIGGER_HEIGHT (30)) / 2 = 9
 */
var SELECT_OPTION_HEIGHT_ADJUSTMENT = 9;
/** The panel's padding on the x-axis */
var SELECT_PANEL_PADDING_X = 16;
/**
 * The panel's padding on the y-axis. This padding indicates there are more
 * options available if you scroll.
 */
var SELECT_PANEL_PADDING_Y = 16;
/**
 * The select panel will only "fit" inside the viewport if it is positioned at
 * this value or more away from the viewport boundary.
 */
var SELECT_PANEL_VIEWPORT_PADDING = 8;
var MAX_TRYES_TO_SET_CONTAINER_HEIGHT = 10;
//# sourceMappingURL=D:/Workspace/JS-TS/ng2Tools/src/autocomplete.consts.js.map

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__autocomplete_consts__ = __webpack_require__(471);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutocompleteOverlay; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var AutocompleteOverlay = (function () {
    function AutocompleteOverlay(_viewportRuler, _dir) {
        this._viewportRuler = _viewportRuler;
        this._dir = _dir;
        // Used to compute the overlay height
        this.searchState = null;
        /**
         * The x-offset of the overlay panel in relation to the trigger's top start corner.
         * This must be adjusted to align the selected option text over the trigger text when
         * the panel opens. Will change based on LTR or RTL text direction.
         */
        this._offsetX = 0;
        /**
         * The y-offset of the overlay panel in relation to the trigger's top start corner.
         * This must be adjusted to align the selected option text over the trigger text.
         * when the panel opens. Will change based on the y-position of the selected option.
         */
        this._offsetY = 0;
        /** The value of the select panel's transform-origin property. */
        // _transformOrigin: string = 'top';
        /** The animation state of the placeholder. */
        this._placeholderState = '';
        /**
         * This position config ensures that the top "start" corner of the overlay
         * is aligned with with the top "start" of the origin by default (overlapping
         * the trigger completely). If the panel cannot fit below the trigger, it
         * will fall back to a position above the trigger.
         */
        this._positions = [
            {
                originX: 'start',
                originY: 'top',
                overlayX: 'start',
                overlayY: 'top',
            },
            {
                originX: 'start',
                originY: 'bottom',
                overlayX: 'start',
                overlayY: 'bottom',
            },
        ];
        this.maxPanelHeight = __WEBPACK_IMPORTED_MODULE_2__autocomplete_consts__["a" /* SELECT_PANEL_MAX_HEIGHT */] + "px";
    }
    /**
     * Checks that the attempted overlay position will fit within the viewport.
     * If it will not fit, tries to adjust the scroll position and the associated
     * y-offset so the panel can open fully on-screen. If it still won't fit,
     * sets the offset back to 0 to allow the fallback position to take over.
     */
    AutocompleteOverlay.prototype._checkOverlayWithinViewport = function () {
        var viewportRect = this._viewportRuler.getViewportRect();
        var triggerRect = this._getTriggerRect();
        var topSpaceAvailable = triggerRect.top - __WEBPACK_IMPORTED_MODULE_2__autocomplete_consts__["b" /* SELECT_PANEL_VIEWPORT_PADDING */];
        var bottomSpaceAvailable = viewportRect.height -
            triggerRect.bottom -
            __WEBPACK_IMPORTED_MODULE_2__autocomplete_consts__["b" /* SELECT_PANEL_VIEWPORT_PADDING */];
        var panelHeightTop = Math.abs(this._offsetY);
        var totalPanelHeight = this._getTotalPanelHeight();
        var panelHeightBottom = totalPanelHeight - panelHeightTop; // - triggerRect.height;
        this._setPanelMaxHeight(__WEBPACK_IMPORTED_MODULE_2__autocomplete_consts__["a" /* SELECT_PANEL_MAX_HEIGHT */]);
        if (bottomSpaceAvailable >= totalPanelHeight) {
            this._offsetY = __WEBPACK_IMPORTED_MODULE_2__autocomplete_consts__["c" /* SELECT_OPTION_HEIGHT */];
        }
        else if (topSpaceAvailable >= totalPanelHeight) {
            this._offsetY = -1 * Math.abs(totalPanelHeight + __WEBPACK_IMPORTED_MODULE_2__autocomplete_consts__["b" /* SELECT_PANEL_VIEWPORT_PADDING */]);
        }
        else {
            this._ajustPanelToFitViewPort(triggerRect, topSpaceAvailable, bottomSpaceAvailable, totalPanelHeight);
        }
    };
    AutocompleteOverlay.prototype._getTriggerRect = function () {
        return this.trigger.nativeElement.getBoundingClientRect();
    };
    AutocompleteOverlay.prototype._ajustPanelToFitViewPort = function (triggerRect, topSpaceAvailable, bottomSpaceAvailable, totalPanelHeight) {
        if (bottomSpaceAvailable > topSpaceAvailable) {
            this._offsetY = 0;
            this._setPanelMaxHeight(bottomSpaceAvailable);
        }
        else {
            this._offsetY = -Math.abs(topSpaceAvailable + triggerRect.height + __WEBPACK_IMPORTED_MODULE_2__autocomplete_consts__["b" /* SELECT_PANEL_VIEWPORT_PADDING */]);
            this._setPanelMaxHeight(topSpaceAvailable);
        }
    };
    AutocompleteOverlay.prototype._getTotalPanelHeight = function () {
        var optionsLength = this.searchState &&
            this.searchState.responseObject.length &&
            this.searchState.responseObject.length > 0 ? this.searchState.responseObject.length : 1;
        return Math.min(optionsLength * __WEBPACK_IMPORTED_MODULE_2__autocomplete_consts__["c" /* SELECT_OPTION_HEIGHT */], __WEBPACK_IMPORTED_MODULE_2__autocomplete_consts__["a" /* SELECT_PANEL_MAX_HEIGHT */]);
    };
    AutocompleteOverlay.prototype._setPanelMaxHeight = function (value) {
        this.maxPanelHeight = value + "px";
    };
    AutocompleteOverlay = __decorate([
        __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), 
        __metadata('design:paramtypes', [(typeof (_a = typeof ViewportRuler !== 'undefined' && ViewportRuler) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["Dir"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_material__["Dir"]) === 'function' && _b) || Object])
    ], AutocompleteOverlay);
    return AutocompleteOverlay;
    var _a, _b;
}());
//# sourceMappingURL=D:/Workspace/JS-TS/ng2Tools/src/autocomplete.overlay.js.map

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LinkType; });
;
var LinkType = (function () {
    function LinkType() {
    }
    LinkType.RESET = 'RESET';
    LinkType.COPY_VALUE = 'COPY_VALUE';
    LinkType.DATA_INHERITANCE = 'DATA_INHERITANCE';
    return LinkType;
}());
;
//# sourceMappingURL=D:/Workspace/JS-TS/ng2Tools/src/generic-form-elemets.interfaces.js.map

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fieldHintAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return genericFormAnimations; });

var fieldHintAnimation = [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('fieldHintAnimation', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('* => void', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('100ms ease-in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translateY(-100%)' }))
        ]),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('void => *', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translateY(-100%)' }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('100ms ease-out')
        ])
    ])
];
var genericFormAnimations = fieldHintAnimation.slice();
//# sourceMappingURL=D:/Workspace/JS-TS/ng2Tools/src/generic-form.animations.js.map

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_helper_functions_service__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_generic_types__ = __webpack_require__(749);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_generic_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__models_generic_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__generic_form_service__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__generic_form_elemets_interfaces__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__validation_helper__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__generic_form_animations__ = __webpack_require__(474);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenericFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var GenericFormComponent = (function () {
    /**
     * Create a GenericFormComponent.
     * @param {GenericFormService} genericformService // a service which can generate a FormGroup using a definition
     * @param {HelperFunctionsService} helper // a service which contains functions like isNullOrUndefined
     */
    function GenericFormComponent(genericformService, helper) {
        this.genericformService = genericformService;
        this.helper = helper;
        this.resetFormOnValueChange = false;
        this.dataServices = {};
        this.useDefaultTheme = true;
        this.enableLogging = false;
        this.onFormReady = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onValueChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onFormSubmit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.genericFormDefinition = null;
        this.ngFormGroup = null;
        this.renderGenericForm = false;
        this.formButtonDisabledState = true;
        this.formIsNotChanged = true;
        this.staticLinksRelations = [];
        this.onFormDataChange = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.setDataChangeSubscription();
    }
    Object.defineProperty(GenericFormComponent.prototype, "formValue", {
        set: function (value) { this.onFormDataChange.next(value); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(GenericFormComponent.prototype, "formDefinition", {
        set: function (definition) { this.setFormDefinition(definition); },
        enumerable: true,
        configurable: true
    });
    ;
    /**
     * @desc setFormDefinition - this function builds the ng form metadata and sets the form to the last value provided in formValue input
     *                           this function will set a {Subscription} on ngFormGroup.valueChanges
     * @param {FormDefinition} definition - a specific set of rules which generates a ngForm
     */
    GenericFormComponent.prototype.setFormDefinition = function (definition) {
        if (this.helper.isNullOrUndefined(definition)) {
            return;
        }
        var formMetadata = this.genericformService.getGenericFormMetadata(definition);
        this.genericFormDefinition = formMetadata.formDefinition;
        this.ngFormGroup = formMetadata.ngForm;
        if (!this.initialValue) {
            this.initialValue = formMetadata.initialValue;
        }
        this.setValueChangeSubscription();
        this.setFormValue(this.onFormDataChange.getValue());
        this.removeStaticLinksBetweenFields();
        this.staticLinksRelations = this.genericformService.rezolveFormStaticLinks(this.genericFormDefinition, this.ngFormGroup);
    };
    /**
     * @desc setValueChangeSubscription - will set a {Subscription} on ngFormGroup.valueChanges
     * @param {FormDefinition} definition - a specific set of rules which generates a ngForm
     */
    GenericFormComponent.prototype.setValueChangeSubscription = function () {
        this.ngFormGroup.valueChanges
            .debounceTime(0)
            .distinctUntilChanged(this.helper.isEqualNullCustomized.bind(this.helper))
            .do(this.setResetState.bind(this))
            .subscribe(this.emitValueAndValidity.bind(this));
    };
    /**
     * @desc setFormValue - checks if the passed value is null and if the value is not null it will reset the form to the specified value
     * @param {Object} value - the value for the form
     */
    GenericFormComponent.prototype.setFormValue = function (value) {
        var _this = this;
        if (this.helper.isNullOrUndefined(this.ngFormGroup) || this.helper.isNullOrUndefined(value)) {
            return;
        }
        if (this.resetFormOnValueChange) {
            this.resetForm(value);
            return;
        }
        this.removeStaticLinksBetweenFields();
        this.ngFormGroup.setValue(value);
        setTimeout(function () {
            _this.staticLinksRelations = _this.genericformService.rezolveFormStaticLinks(_this.genericFormDefinition, _this.ngFormGroup);
        });
    };
    /**
     * @desc resetForm - Resets the form behavior to default values (validators, disabled, value)
     * @param {Object} value - the value for the new reseted form
     */
    GenericFormComponent.prototype.resetForm = function (value) {
        if (this.helper.isNullOrUndefined(this.ngFormGroup)) {
            // the ngFormIsNotRendered
            return;
        }
        this.genericformService.resetFormToInitialState(this.genericFormDefinition, this.ngFormGroup);
        this.resetFormValue(value);
        this.formIsNotChanged = true;
    };
    /**
     * @desc resetFormValue - removes the links between the fields to not trigger weird form changes
     *                        after the new value is set will rezolve the links between fields
     * @param {Object} value - the value for the new reseted form
     */
    GenericFormComponent.prototype.resetFormValue = function (value) {
        var _this = this;
        if (this.helper.isNullOrUndefined(this.ngFormGroup)) {
            // the ngFormIsNotRendered
            return;
        }
        // first remove all links to not trigger unexpected behavior
        this.removeStaticLinksBetweenFields();
        // If null is passed to the reset function this will fail
        this.ngFormGroup.reset(this.helper.isNullOrUndefined(value) ? undefined : value);
        setTimeout(function () {
            _this.staticLinksRelations = _this.genericformService.rezolveFormStaticLinks(_this.genericFormDefinition, _this.ngFormGroup);
        });
    };
    /**
     * @desc removeLinksBetweenFields - removes the links between the fields
     */
    GenericFormComponent.prototype.removeStaticLinksBetweenFields = function () {
        this.staticLinksRelations.forEach(function (v) {
            v.unsubscribe();
        });
        this.staticLinksRelations = [];
    };
    /**
     * @viewCallback
     * @desc select - TODO implement a select behavior
     * @param {} event
     */
    GenericFormComponent.prototype.select = function (field, selectedOption) {
        var _this = this;
        if (!field || !field.runtimelinks) {
            return;
        }
        // first remove all links to not trigger unexpected behavior
        // TODO establish if the links should stay intact
        field.runtimelinks.forEach(function (relation) {
            if (!_this.ngFormGroup.controls[relation.control]) {
                return;
            }
            if (relation.executeInSafeContext) {
                // The relation might trigger cascade changes and we don't want that
                _this.removeStaticLinksBetweenFields();
            }
            _this.ngFormGroup.controls[relation.control].validator =
                __WEBPACK_IMPORTED_MODULE_6__validation_helper__["a" /* ValidatorHelper */].getValidators(_this.ngFormGroup, relation.validation);
            if (Array.isArray(relation.disabled)) {
                relation.disabled.indexOf(selectedOption[field.valueField]) !== -1
                    ? _this.ngFormGroup.controls[relation.control].disable()
                    : _this.ngFormGroup.controls[relation.control].enable();
            }
            if (relation.fieldName && (selectedOption instanceof Object) && (selectedOption.hasOwnProperty(relation.fieldName))) {
                _this.ngFormGroup.controls[relation.control].setValue(selectedOption[relation.fieldName]);
            }
            if (relation.executeInSafeContext) {
                // Rebuild linked state so the next relation will have to deactivate it if needed
                _this.staticLinksRelations = _this.genericformService.rezolveFormStaticLinks(_this.genericFormDefinition, _this.ngFormGroup);
            }
        });
        this.ngFormGroup.updateValueAndValidity();
    };
    /**
     * @viewCallback
     * @desc select - TODO implement a select behavior
     * @param {} event
     */
    GenericFormComponent.prototype.getDisplayField = function (field, option) {
        var displayValue = '', i = 0;
        while (field.displayFields.length > i && displayValue === '') {
            displayValue = option[field.displayFields[i]] || '';
            i++;
        }
        return displayValue;
    };
    /**
     * @viewCallback
     * @desc onSubmit - if the key pressed is not numberic will stop the event
     * @param {BrowserEvent} event
     */
    GenericFormComponent.prototype.onSubmit = function (event) {
        this.onFormSubmit.emit({ event: event, value: this.ngFormGroup.value });
    };
    /**
     * @viewCallback
     * @desc onNumberFieldKeyPress - if the key pressed is not numberic will stop the event
     * @param {} event
     */
    GenericFormComponent.prototype.onNumberFieldKeyPress = function ($event) {
        if (!this.helper.isKeyPressedNumeric(event)) {
            this.helper.stopEvent($event);
        }
    };
    GenericFormComponent.prototype.ngOnDestroy = function () {
        this.removeStaticLinksBetweenFields();
    };
    GenericFormComponent.prototype.setInputAsTouched = function (field) {
        this.ngFormGroup.controls[field.name].markAsTouched();
    };
    GenericFormComponent.prototype.getTranslatedError = function (field, control) {
        if (control && control.errors && control.errors['errorToken']) {
            return this.translate(control.errors['errorToken']);
        }
        // TODO add this to debugging mode
        // console.warn(`No error token defined for ${field.name}`, field);
        return "";
    };
    GenericFormComponent.prototype.translate = function (token) {
        return token;
    };
    /**
     * @desc scheduleFormReadyEmit - sets onFormReady to be emited at the end of the call stack
     */
    GenericFormComponent.prototype.scheduleFormReadyEmit = function () {
        var _this = this;
        setTimeout(function () {
            _this.onFormReady.emit();
        });
    };
    /**
     * @desc emitValueAndValidity - handler for {ngFormGroup.valueChanges} subscription will emit a new form value and also the validity
     * @param {Object} newValue
     */
    GenericFormComponent.prototype.emitValueAndValidity = function (newValue) {
        this.onValueChange.emit({ valid: this.ngFormGroup.valid, value: newValue });
        if (!this.ngFormGroup.valid !== this.formButtonDisabledState) {
            this.formButtonDisabledState = !this.ngFormGroup.valid;
        }
    };
    GenericFormComponent.prototype.setResetState = function (newValue) {
        this.formIsNotChanged = this.helper.isEqualNullCustomized(newValue, this.initialValue);
    };
    /**
     * @desc setDataChangeSubscription - Function which sets a subscription to onFormDataChange,
     *                                   which means each time we set a form value we will pass through this filters and will execute the
     *                                   @function setFormValue with the new form value
     */
    GenericFormComponent.prototype.setDataChangeSubscription = function () {
        var _this = this;
        this.onFormDataChange
            .filter(function (v) { return !_this.helper.isNullOrUndefined(v); })
            .debounceTime(0)
            .distinctUntilChanged(this.helper.isEqualNullCustomized.bind(this.helper))
            .subscribe(this.setFormValue.bind(this));
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], GenericFormComponent.prototype, "color", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], GenericFormComponent.prototype, "initialValue", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Boolean)
    ], GenericFormComponent.prototype, "resetFormOnValueChange", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__models_generic_types__["Dictionary"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__models_generic_types__["Dictionary"]) === 'function' && _a) || Object)
    ], GenericFormComponent.prototype, "dataServices", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], GenericFormComponent.prototype, "formValue", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__generic_form_elemets_interfaces__["FormDefinition"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__generic_form_elemets_interfaces__["FormDefinition"]) === 'function' && _b) || Object), 
        __metadata('design:paramtypes', [(typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__generic_form_elemets_interfaces__["FormDefinition"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__generic_form_elemets_interfaces__["FormDefinition"]) === 'function' && _c) || Object])
    ], GenericFormComponent.prototype, "formDefinition", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Boolean)
    ], GenericFormComponent.prototype, "useDefaultTheme", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Boolean)
    ], GenericFormComponent.prototype, "enableLogging", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _d) || Object)
    ], GenericFormComponent.prototype, "onFormReady", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _e) || Object)
    ], GenericFormComponent.prototype, "onValueChange", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _f) || Object)
    ], GenericFormComponent.prototype, "onFormSubmit", void 0);
    GenericFormComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ngt-generic-form',
            template: __webpack_require__(969),
            styles: [__webpack_require__(916)],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            providers: [__WEBPACK_IMPORTED_MODULE_4__generic_form_service__["a" /* GenericFormService */]],
            animations: __WEBPACK_IMPORTED_MODULE_7__generic_form_animations__["b" /* genericFormAnimations */].slice()
        }), 
        __metadata('design:paramtypes', [(typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__generic_form_service__["a" /* GenericFormService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__generic_form_service__["a" /* GenericFormService */]) === 'function' && _g) || Object, (typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_2__services_helper_functions_service__["a" /* HelperFunctionsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_helper_functions_service__["a" /* HelperFunctionsService */]) === 'function' && _h) || Object])
    ], GenericFormComponent);
    return GenericFormComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());
//# sourceMappingURL=D:/Workspace/JS-TS/ng2Tools/src/generic-form.component.js.map

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__validation_helper__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__generic_form_elemets_interfaces__ = __webpack_require__(473);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenericFormService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GenericFormService = (function () {
    function GenericFormService() {
    }
    GenericFormService.prototype.getGenericFormMetadata = function (formDefinition) {
        var formMedatata = this.buildNgFormMetadata(formDefinition);
        return {
            formDefinition: formDefinition,
            ngForm: formMedatata.ngForm,
            initialValue: formMedatata.initialValue
        };
    };
    GenericFormService.prototype.buildNgFormMetadata = function (formDefinition) {
        var initialValue = {};
        var ngForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormGroup */]({});
        // First we create the form structure without validation
        for (var _i = 0, _a = formDefinition.rows; _i < _a.length; _i++) {
            var row = _a[_i];
            for (var _b = 0, _c = row.elements; _b < _c.length; _b++) {
                var element_1 = _c[_b];
                if (this.isFormControl(element_1)) {
                    ngForm.addControl(element_1.name, new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormControl */]({ value: element_1.value || "", disabled: element_1.disabled }));
                    initialValue[element_1.name] = element_1.value || "";
                    this.convertMinMaxValuesToDateObjects(ngForm, element_1);
                    // We evaluete validation at the end of the stack
                    this.evaluatePropertyAsync(ngForm, element_1);
                }
            }
        }
        return {
            ngForm: ngForm,
            initialValue: initialValue
        };
    };
    GenericFormService.prototype.evaluatePropertyAsync = function (ngForm, element) {
        /**
         * This function is runned at the end of the stack so we don't need to loop over the form elements again
         * if a property needs to be evaluated after all controls are defined
         */
        setTimeout(function () {
            ngForm.controls[element.name].validator = __WEBPACK_IMPORTED_MODULE_2__validation_helper__["a" /* ValidatorHelper */].getValidators(ngForm, element.validation);
            // This triggers links to run
            // ngForm.controls[element.name].updateValueAndValidity();
        });
    };
    GenericFormService.prototype.convertMinMaxValuesToDateObjects = function (ngForm, element) {
        if (['datepicker', 'timepicker', 'datetimepicker'].indexOf(element.type) === -1) {
            return;
        }
        if (element.maxDateTime && element.maxDateTime.indexOf("{ngControlValue=") === -1) {
            element.maxDateValue = new Date(element.maxDateTime);
        }
        if (element.minDateTime && element.minDateTime.indexOf("{ngControlValue=") === -1) {
            element.minDateValue = new Date(element.minDateTime);
        }
    };
    GenericFormService.prototype.resetFormToInitialState = function (formDefinition, ngForm) {
        var _this = this;
        var formElements = {};
        formDefinition.rows.forEach(function (row) {
            row['elements'].forEach(function (element) {
                if (_this.isFormControl(element)) {
                    ngForm.controls[element.name].validator = __WEBPACK_IMPORTED_MODULE_2__validation_helper__["a" /* ValidatorHelper */].getValidators(ngForm, element.validation);
                    element.disabled
                        ? ngForm.controls[element.name].disable()
                        : ngForm.controls[element.name].enable();
                }
            });
        });
    };
    GenericFormService.prototype.resetFormControlValidation = function (formDefinition, ngForm, controlName) {
        var formElements = {};
        var rowIndex = 0;
        while (rowIndex < formDefinition.rows.length) {
            var elementIndex = 0;
            while (elementIndex < formDefinition.rows[rowIndex].elements.length) {
                if (formDefinition.rows[rowIndex].elements[elementIndex].name === controlName &&
                    this.isFormControl(formDefinition.rows[rowIndex].elements[elementIndex])) {
                    ngForm.controls[controlName].validator =
                        __WEBPACK_IMPORTED_MODULE_2__validation_helper__["a" /* ValidatorHelper */].getValidators(ngForm, formDefinition.rows[rowIndex].elements[elementIndex].validation);
                    return true;
                }
                elementIndex++;
            }
            rowIndex++;
        }
        return false;
    };
    GenericFormService.prototype.rezolveFormStaticLinks = function (formDefinition, ngForm) {
        var _this = this;
        var linksSubscriptions = [];
        formDefinition.rows.forEach(function (row) {
            row['elements'].forEach(function (element) {
                if (!element.staticLinks || !_this.canUseLinkSubscription(element) || !ngForm.controls[element.name]) {
                    _this.setDateTimePickerSpecificLinks(linksSubscriptions, ngForm, element);
                    return;
                }
                linksSubscriptions.push(ngForm.controls[element.name].valueChanges
                    .debounceTime(0)
                    .distinctUntilChanged()
                    .subscribe(function (currentControlValue) {
                    element.staticLinks.forEach(function (link) {
                        if (!ngForm.controls[link.control]) {
                            return;
                        }
                        _this.setStaticLinkValidation(formDefinition, ngForm, link);
                        switch (link.type) {
                            case __WEBPACK_IMPORTED_MODULE_3__generic_form_elemets_interfaces__["b" /* LinkType */].RESET:
                                if (!currentControlValue) {
                                    return;
                                }
                                ngForm.controls[link.control].reset();
                                break;
                            case __WEBPACK_IMPORTED_MODULE_3__generic_form_elemets_interfaces__["b" /* LinkType */].COPY_VALUE:
                                ngForm.controls[link.control].reset(currentControlValue);
                                break;
                            case __WEBPACK_IMPORTED_MODULE_3__generic_form_elemets_interfaces__["b" /* LinkType */].DATA_INHERITANCE:
                                if (!(link.inheritanceObject instanceof Object) || !link.inheritanceObject[currentControlValue]) {
                                    ngForm.controls[link.control].reset();
                                    return;
                                }
                                ngForm.controls[link.control].setValue(link.inheritanceObject[currentControlValue]);
                                break;
                        }
                    });
                }));
            });
        });
        return linksSubscriptions;
    };
    GenericFormService.prototype.setStaticLinkValidation = function (formDefinition, ngForm, link) {
        if (!link.validation) {
            return;
        }
        ngForm.controls[link.control].validator = __WEBPACK_IMPORTED_MODULE_2__validation_helper__["a" /* ValidatorHelper */].getValidators(ngForm, link.validation);
        ngForm.controls[link.control].updateValueAndValidity();
    };
    GenericFormService.prototype.setDateTimePickerSpecificLinks = function (linksSubscriptions, ngForm, element) {
        if (['datepicker', 'timepicker', 'datetimepicker'].indexOf(element.type) === -1) {
            return;
        }
        if (element.maxDateTime && element.maxDateTime.indexOf("{ngControlValue=") !== -1) {
            linksSubscriptions.push(ngForm.controls[element.maxDateTime.replace("{ngControlValue=", "").replace("}", "")].valueChanges
                .subscribe(function (value) {
                element.maxDateValue = new Date(value);
                // the current datepicker is not resetting it's value
                var currentControlValue = new Date(ngForm.controls[element.name].value);
                if (currentControlValue.getTime() > element.maxDateValue.getTime()) {
                    ngForm.controls[element.name].setValue("");
                }
            }));
        }
        if (element.minDateTime && element.minDateTime.indexOf("{ngControlValue=") !== -1) {
            linksSubscriptions.push(ngForm.controls[element.minDateTime.replace("{ngControlValue=", "").replace("}", "")].valueChanges
                .subscribe(function (value) {
                element.minDateValue = new Date(value);
                // the current datepicker is not resetting it's value
                var currentControlValue = new Date(ngForm.controls[element.name].value);
                if (currentControlValue.getTime() < element.minDateValue.getTime()) {
                    ngForm.controls[element.name].setValue("");
                }
            }));
        }
    };
    GenericFormService.prototype.canUseLinkSubscription = function (element) {
        return element && element.type && element.type !== 'reset' && element.type !== 'submit'
            && element.type !== 'header'
            && element.type !== 'combobox'
            && element.type !== 'autocomplete';
    };
    GenericFormService.prototype.isFormControl = function (element) {
        return element && element.type && element.type !== 'reset' && element.type !== 'submit';
    };
    GenericFormService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], GenericFormService);
    return GenericFormService;
}());
//# sourceMappingURL=D:/Workspace/JS-TS/ng2Tools/src/generic-form.service.js.map

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HintContainerDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HintContainerDirective = (function () {
    function HintContainerDirective() {
    }
    HintContainerDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({ selector: '[ngt-hint-container]' }), 
        __metadata('design:paramtypes', [])
    ], HintContainerDirective);
    return HintContainerDirective;
}());
//# sourceMappingURL=D:/Workspace/JS-TS/ng2Tools/src/hint-container.directive.js.map

/***/ }),

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppMode; });
var AppMode = (function () {
    function AppMode() {
    }
    AppMode.MOBILE = "MOBILE";
    AppMode.TABLET = "TABLET";
    AppMode.DESKTOP = "DESKTOP";
    return AppMode;
}());
//# sourceMappingURL=D:/Workspace/JS-TS/ng2Tools/src/app-modes.js.map

/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_do__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_share__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_share___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_share__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operator_map__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_timeout__ = __webpack_require__(1008);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_interval__ = __webpack_require__(992);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_interval___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_interval__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_timeInterval__ = __webpack_require__(982);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_timeInterval___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_timeInterval__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_filter__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_debounce__ = __webpack_require__(974);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_debounce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_debounce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_debounceTime__ = __webpack_require__(975);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(977);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_switchMap__ = __webpack_require__(981);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_catch__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_delay__ = __webpack_require__(976);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_add_operator_retry__ = __webpack_require__(980);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_add_operator_retry___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_rxjs_add_operator_retry__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_rxjs_add_operator_merge__ = __webpack_require__(979);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_rxjs_add_operator_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_rxjs_add_operator_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_rxjs_add_observable_forkJoin__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_rxjs_add_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_rxjs_add_observable_forkJoin__);
















//# sourceMappingURL=D:/Workspace/JS-TS/ng2Tools/src/rx-extensions.js.map

/***/ }),

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logger_service__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_stream_model__ = __webpack_require__(750);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageStreamsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * @desc This service is used to keep data for mutiple components and provides a standard way to updata the data and checking for changes
 */
var PageStreamsService = (function () {
    function PageStreamsService(logger) {
        this.logger = logger;
        // A dictionary which contains a set of streams 
        this.pageStreams = {};
        // A dictionary which contains a set of streams with the same name of the streams from pageStreams
        this.pageErrorStreams = {};
        // A separate stream which reflects if at least one stream has changes
        this.changeStream = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](false);
    }
    /**
     * @desc returns a BehaviorSubject<boolean> which has the true value each time a stream has changes
     */
    PageStreamsService.prototype.getChangesStream = function () {
        return this.changeStream;
    };
    /**
     * @param streamNames: Array<IStream>
     * @desc it receives a list of IStream which must contain at least the stream names,
     *       setInitialState, detectStreamChanges, getStreamData are functions which you want to use when a stream is initialized,
     *       when you get data from the stream and and when the stream is chacked for changes
     */
    PageStreamsService.prototype.registerStreams = function (streamNames) {
        for (var _i = 0, streamNames_1 = streamNames; _i < streamNames_1.length; _i++) {
            var stream = streamNames_1[_i];
            this.registerStream(stream.name, stream.setInitialValue, stream.detectStreamChanges, stream.getStreamData, stream.resetStreamData);
        }
    };
    /**
     * @param name: string the name of the stream
     * @param setInitialState?: (context: StreamModel, data) => void
     *                          - a function which will replace the setInitialState from the stream model implementatio
     *                            it will be used inside the stream model implementation to set the data variable,
     *                            and also the initial values
     * @param detectStreamChanges?: (context: StreamModel, data) => void
     *                              - a function which will replace the detectStreamChanges from the stream model implementatio
     *                                it will be used inside the stream model implementation to set the changes variable
     * @param getStreamData?: (context: StreamModel, data) => void
     *                        - a function which will replace the setInitialState from the stream model implementatio
     *                          it will be used when you subscribe to this stream, to provide data on the subscription
     * @param resetStreamData?: (context: StreamModel, data) => void
     *                          - a function which will replace the setInitialState from the stream model implementatio
     *                            it will be used when you call resetData on the stream
     * @desc this function will create two streams one which contains a streamModel and one which will be used for errors
     */
    PageStreamsService.prototype.registerStream = function (name, setInitialValue, detectStreamChanges, getStreamData, resetStreamData) {
        if (this.pageStreams[name]) {
            this.logger.logWarning("Stream with name: " + name + " already exists.");
            return;
        }
        this.pageStreams[name] = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](new __WEBPACK_IMPORTED_MODULE_3__models_stream_model__["a" /* StreamModel */](name, null, setInitialValue, detectStreamChanges, getStreamData, resetStreamData));
        if (this.pageErrorStreams[name]) {
            return;
        }
        this.pageErrorStreams[name] = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](null);
    };
    /**
     * @param name: stream name
     * @desc This function will reset the stream to his initial value
     * @return resetedData the reseted data of the stream
     */
    PageStreamsService.prototype.resetStream = function (name) {
        if (!this.pageStreams[name]) {
            this.logger.logWarning("Stream with name: " + name + " does not exist, or it's not initialized.");
            return null;
        }
        var currentStremValue = this.pageStreams[name].getValue();
        var resetedData = currentStremValue.resetStreamData();
        this.pageStreams[name].next(currentStremValue);
        this.checkStreamsForChanges();
        return resetedData;
    };
    /**
     * @desc This function will reset all streams to initial values
     * @return void
     */
    PageStreamsService.prototype.resetStreams = function () {
        for (var prop in this.pageStreams) {
            if (!this.pageStreams.hasOwnProperty(prop)) {
                continue;
            }
            this.resetStream(prop);
        }
    };
    /**
     * @param name: stream name
     * @param data: the data for the stream
     * @desc This function will set the data for the stream and the initialValue
     *       it will also check all streams for changes
     */
    PageStreamsService.prototype.initializeStream = function (name, data) {
        if (!this.pageStreams[name]) {
            this.logger.logWarning("Stream with name: " + name + " does not exist, or it's not initialized.");
            return null;
        }
        var currentStremValue = this.pageStreams[name].getValue();
        currentStremValue.setInitialValue(data);
        this.pageStreams[name].next(currentStremValue);
        this.checkStreamsForChanges();
    };
    /**
     * @param name: stream name
     * @return will return an object which contains two streams
     *              stream will emit only the stream.getStreamData()
     *              streamErrors will emit the server errors
     */
    PageStreamsService.prototype.getStream = function (name) {
        if (!this.pageStreams[name]) {
            this.logger.logWarning("Stream with name: " + name + " does not exist, or it's not initialized.");
            return null;
        }
        return {
            stream: this.pageStreams[name].map(function (stream) { return stream.getStreamData(); }),
            streamErrors: this.pageErrorStreams[name]
        };
    };
    /**
     * @param name: stream name
     * @return will return a StreamModel
     */
    PageStreamsService.prototype.getStreamModel = function (name) {
        if (!this.pageStreams[name]) {
            this.logger.logWarning("Stream with name: " + name + " does not exist, or it's not initialized.");
            return null;
        }
        return this.pageStreams[name].getValue();
    };
    /**
     * @param name: stream name
     * @return will return a StreamModel
     */
    PageStreamsService.prototype.getStreamModelData = function (name) {
        if (!this.pageStreams[name]) {
            this.logger.logWarning("Stream with name: " + name + " does not exist, or it's not initialized.");
            return null;
        }
        var value = this.pageStreams[name].getValue();
        if (!value) {
            return null;
        }
        return value.getStreamData();
    };
    /**
     * @param name: stream name
     * @desc will emit an error on the stream
     */
    PageStreamsService.prototype.setErrorsOnStream = function (name, errors) {
        this.pageErrorStreams[name].next(errors);
    };
    /**
     * @param name: stream name
     * @param data: the data for the current stream
     * @desc this will use streamModel setData to update the current stream value
     *       this function will check all stream for changes
     */
    PageStreamsService.prototype.updateStream = function (name, data) {
        if (!this.pageStreams[name]) {
            this.logger.logWarning("Stream with name: " + name + " does not exist, or it's not initialized.");
            return null;
        }
        var currentStremValue = this.pageStreams[name].getValue();
        currentStremValue.setStreamData(data);
        this.pageStreams[name].next(currentStremValue);
        this.checkStreamsForChanges();
    };
    /**
     * @param name: stream name
     * @param data: the data for the current stream
     * @desc this will use streamModel inheritDataFrom this will inherit propertyes and values which are provided on your data
     *       this function will check all stream for changes
     */
    PageStreamsService.prototype.updateStreamUsingDataInheritance = function (name, data) {
        if (!this.pageStreams[name]) {
            this.logger.logWarning("Stream with name: " + name + " does not exist, or it's not initialized.");
            return null;
        }
        var currentStremValue = this.pageStreams[name].getValue();
        currentStremValue.inheritDataFrom(data);
        this.pageStreams[name].next(currentStremValue);
        this.checkStreamsForChanges();
    };
    /**
     * @param name: stream name
     * @desc for the provided streamName callse unsubscribe from rxjs
     */
    PageStreamsService.prototype.destroyStream = function (name) {
        if (this.pageStreams[name]) {
            this.pageStreams[name].unsubscribe();
            delete this.pageStreams[name];
        }
        if (this.pageErrorStreams[name]) {
            this.pageErrorStreams[name].unsubscribe();
            delete this.pageErrorStreams[name];
        }
    };
    /**
     * @desc destroys all streams from the service
     */
    PageStreamsService.prototype.destroyStreams = function () {
        for (var streamName in this.pageStreams) {
            if (!this.pageStreams.hasOwnProperty(streamName)) {
                continue;
            }
            this.destroyStream(streamName);
        }
    };
    /**
     * @param name: stream name
     * @param valid: boolean the valid state
     * @desc this will use streamModel setValidState which will set is valid property from stream model
     *       this function will check all stream for changes
     */
    PageStreamsService.prototype.setStreamValidState = function (name, valid) {
        if (!this.pageStreams[name]) {
            this.logger.logWarning("Stream with name: " + name + " does not exist, or it's not initialized.");
            return null;
        }
        var currentStremValue = this.pageStreams[name].getValue();
        currentStremValue.setValidState(valid);
        this.pageStreams[name].next(currentStremValue);
        this.checkStreamsForChanges();
    };
    /**
     * @desc returns the evaluated valid state
     */
    PageStreamsService.prototype.getValidState = function () {
        for (var name in this.pageStreams) {
            if (!this.pageStreams[name] || !this.pageStreams[name].getValue()) {
                continue;
            }
            if (!this.pageStreams[name].getValue().getValidState()) {
                return false;
            }
        }
        return true;
    };
    /**
     * @desc assumes that in streams are no changes, stops at first change and emits the current change value
     */
    PageStreamsService.prototype.checkStreamsForChanges = function () {
        var changes = false;
        for (var name in this.pageStreams) {
            if (!this.pageStreams[name] || !this.pageStreams[name].getValue()) {
                continue;
            }
            if (this.pageStreams[name].getValue().getChangesState()) {
                changes = true;
                break;
            }
        }
        this.changeStream.next(changes);
    };
    PageStreamsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__logger_service__["a" /* LoggerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__logger_service__["a" /* LoggerService */]) === 'function' && _a) || Object])
    ], PageStreamsService);
    return PageStreamsService;
    var _a;
}());
//# sourceMappingURL=D:/Workspace/JS-TS/ng2Tools/src/page-streams.service.js.map

/***/ }),

/***/ 571:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 571;


/***/ }),

/***/ 572:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(753);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_rx_extensions__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__ = __webpack_require__(700);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(752);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_app_module__ = __webpack_require__(735);






if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_5__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=D:/Workspace/JS-TS/ng2Tools/src/main.js.map

/***/ }),

/***/ 730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_server_map__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_service__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_models_app_modes__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_services_app_mode_service__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_app_communication_service__ = __webpack_require__(467);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ApiPageComponent = (function () {
    function ApiPageComponent(appModeService, appCommunicationService, backend) {
        this.appModeService = appModeService;
        this.appCommunicationService = appCommunicationService;
        this.backend = backend;
        this.sideNavOptions = {
            mode: 'side',
            opened: false
        };
        this._subscriptions = [];
        this._subscriptions.push(this.appModeService.activeMode.debounceTime(0).subscribe(this.setSideNaveMode.bind(this)), this.appCommunicationService.getChannel("OPEN_SIDE_MENU").subscribe(this.openSideMenu.bind(this)), this.appCommunicationService.getChannel("CLOSE_SIDE_MENU").subscribe(this.closeSideMenu.bind(this)));
    }
    ApiPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.backend.getConfiguration(__WEBPACK_IMPORTED_MODULE_2__shared_server_map__["a" /* SERVER_MAP */].appSideMenu).subscribe(function (menuItems) {
            _this.menuConfiguration = menuItems;
        });
    };
    ApiPageComponent.prototype.closeSideMenu = function () {
        if (!this.sideNavComponent || this.sideNavOptions.mode !== 'over') {
            return;
        }
        this.sideNavComponent.close();
    };
    ApiPageComponent.prototype.openSideMenu = function () {
        if (!this.sideNavComponent) {
            return;
        }
        this.sideNavComponent.open();
    };
    ApiPageComponent.prototype.onItemClicked = function () {
        if (this.sideNavOptions.mode === 'over') {
            this.sideNavComponent.close();
        }
    };
    ApiPageComponent.prototype.ngOnDestroy = function () {
        this._subscriptions.forEach(function (value) { value.unsubscribe(); });
        this._subscriptions = [];
    };
    ApiPageComponent.prototype.setSideNaveMode = function (mode) {
        switch (mode) {
            case __WEBPACK_IMPORTED_MODULE_4__core_models_app_modes__["a" /* AppMode */].TABLET:
            case __WEBPACK_IMPORTED_MODULE_4__core_models_app_modes__["a" /* AppMode */].MOBILE:
                this.sideNavOptions.mode = 'over';
                this.sideNavOptions.opened = false;
                break;
            default:
                this.sideNavOptions.mode = 'side';
                this.sideNavOptions.opened = true;
                break;
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("sidenav"), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["MdSidenav"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_material__["MdSidenav"]) === 'function' && _a) || Object)
    ], ApiPageComponent.prototype, "sideNavComponent", void 0);
    ApiPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'components-page',
            template: __webpack_require__(956),
            styles: [__webpack_require__(904)],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            providers: [__WEBPACK_IMPORTED_MODULE_6__shared_app_communication_service__["a" /* AppCommunicationService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__core_services_app_mode_service__["a" /* AppModeService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__core_services_app_mode_service__["a" /* AppModeService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__shared_app_communication_service__["a" /* AppCommunicationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__shared_app_communication_service__["a" /* AppCommunicationService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__app_service__["a" /* BackendService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__app_service__["a" /* BackendService */]) === 'function' && _d) || Object])
    ], ApiPageComponent);
    return ApiPageComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=D:/Workspace/JS-TS/ng2Tools/src/api-page.js.map

/***/ }),

/***/ 731:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(276);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsMenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ComponentsMenuComponent = (function () {
    function ComponentsMenuComponent(router) {
        var _this = this;
        this.router = router;
        this.onItemClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.viewMenuItems = [];
        this.router.events.subscribe(function (navigation) {
            if (navigation instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* NavigationEnd */]) {
                _this.markActiveItem();
            }
        });
    }
    Object.defineProperty(ComponentsMenuComponent.prototype, "menuItems", {
        set: function (items) {
            this.setCurrentItems(items);
        },
        enumerable: true,
        configurable: true
    });
    ;
    ComponentsMenuComponent.prototype.navigateToUrl = function (item) {
        this.onItemClicked.emit(item);
        this.router.navigate(item.url);
    };
    ComponentsMenuComponent.prototype.setCurrentItems = function (items) {
        if (!items) {
            return;
        }
        this.viewMenuItems = items;
        this.markActiveItem();
    };
    ComponentsMenuComponent.prototype.markActiveItem = function () {
        if (!this.viewMenuItems) {
            return;
        }
        this.viewMenuItems.forEach(function (element) {
            element.optionsList.forEach(function (listItem) {
                listItem.selected = ("" + location.href).indexOf(listItem.url) !== -1;
            });
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], ComponentsMenuComponent.prototype, "menuItems", null);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === 'function' && _a) || Object)
    ], ComponentsMenuComponent.prototype, "onItemClicked", void 0);
    ComponentsMenuComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'components-menu',
            template: __webpack_require__(957),
            styles: [__webpack_require__(905)],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === 'function' && _b) || Object])
    ], ComponentsMenuComponent);
    return ComponentsMenuComponent;
    var _a, _b;
}());
//# sourceMappingURL=D:/Workspace/JS-TS/ng2Tools/src/components-menu.component.js.map

/***/ }),

/***/ 732:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_menu_components_menu_component__ = __webpack_require__(731);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__components_menu_components_menu_component__["a"]; });

//# sourceMappingURL=D:/Workspace/JS-TS/ng2Tools/src/index.js.map

/***/ }),

/***/ 733:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_page_home_page_component__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_component_examples_autocomplete_example_autocomplete_example_component__ = __webpack_require__(742);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_page__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_generic_layout_generic_layout_component__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_api_component_presentation_api_component_presentation_component__ = __webpack_require__(738);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_api_reference_reader_api_reference_reader_component__ = __webpack_require__(741);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_api_class_renderer_api_class_renderer_component__ = __webpack_require__(737);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_api_list_renderer_api_list_renderer_component__ = __webpack_require__(740);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_api_description_renderer_api_description_renderer_component__ = __webpack_require__(739);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_component_examples_form_example_form_example_component__ = __webpack_require__(743);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_COMPONENTS; });










var APP_COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_0__home_page_home_page_component__["a" /* HomePageComponent */],
    __WEBPACK_IMPORTED_MODULE_1__shared_component_examples_autocomplete_example_autocomplete_example_component__["a" /* AutocompleteExampleComponent */],
    __WEBPACK_IMPORTED_MODULE_2__api_page__["a" /* ApiPageComponent */],
    __WEBPACK_IMPORTED_MODULE_2__api_page__["b" /* ComponentsMenuComponent */],
    __WEBPACK_IMPORTED_MODULE_3__shared_generic_layout_generic_layout_component__["a" /* GenericLayoutComponent */],
    __WEBPACK_IMPORTED_MODULE_4__shared_api_component_presentation_api_component_presentation_component__["a" /* ApiComponentPresentationComponent */],
    __WEBPACK_IMPORTED_MODULE_5__shared_api_reference_reader_api_reference_reader_component__["a" /* ApiReferenceReaderComponent */],
    __WEBPACK_IMPORTED_MODULE_6__shared_api_class_renderer_api_class_renderer_component__["a" /* ApiClassRendererComponent */],
    __WEBPACK_IMPORTED_MODULE_7__shared_api_list_renderer_api_list_renderer_component__["a" /* ApiListRendererComponent */],
    __WEBPACK_IMPORTED_MODULE_9__shared_component_examples_form_example_form_example_component__["a" /* FormExampleComponent */],
    __WEBPACK_IMPORTED_MODULE_8__shared_api_description_renderer_api_description_renderer_component__["a" /* ApiDescriptionRendererComponent */]
];
//# sourceMappingURL=D:/Workspace/JS-TS/ng2Tools/src/app-components.js.map

/***/ }),

/***/ 734:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_service__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_services_app_mode_service__ = __webpack_require__(123);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(appModeService) {
        this.appModeService = appModeService;
        this.title = 'app works!';
    }
    AppComponent.prototype.onWindowResize = function () {
        this.appModeService.updateActiveMode();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["HostListener"])('window:resize', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], AppComponent.prototype, "onWindowResize", null);
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(958),
            encapsulation: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewEncapsulation"].None,
            styles: [__webpack_require__(906)],
            providers: [
                __WEBPACK_IMPORTED_MODULE_0__app_service__["a" /* BackendService */]
            ]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__core_services_app_mode_service__["a" /* AppModeService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__core_services_app_mode_service__["a" /* AppModeService */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=D:/Workspace/JS-TS/ng2Tools/src/app.component.js.map

/***/ }),

/***/ 735:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_table_ng2_table__ = __webpack_require__(953);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_table_ng2_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_table_ng2_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_core_module__ = __webpack_require__(746);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routes__ = __webpack_require__(736);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_components__ = __webpack_require__(733);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(734);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]
            ].concat(__WEBPACK_IMPORTED_MODULE_7__app_components__["a" /* APP_COMPONENTS */]),
            imports: [
                __WEBPACK_IMPORTED_MODULE_4_ng2_table_ng2_table__["Ng2TableModule"],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__core_core_module__["a" /* CoreModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_routes__["a" /* APP_ROUTES */])
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=D:/Workspace/JS-TS/ng2Tools/src/app.module.js.map

/***/ }),

/***/ 736:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_generic_layout_generic_layout_component__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_page__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_page_home_page_component__ = __webpack_require__(466);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_ROUTES; });



var APP_ROUTES = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__home_page_home_page_component__["a" /* HomePageComponent */],
    },
    {
        path: 'api',
        component: __WEBPACK_IMPORTED_MODULE_1__api_page__["a" /* ApiPageComponent */],
        children: [
            {
                path: ':group/:option',
                component: __WEBPACK_IMPORTED_MODULE_0__shared_generic_layout_generic_layout_component__["a" /* GenericLayoutComponent */],
            }
        ]
    }
];
//# sourceMappingURL=D:/Workspace/JS-TS/ng2Tools/src/app.routes.js.map

/***/ }),

/***/ 737:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiClassRendererComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ApiClassRendererComponent = (function () {
    function ApiClassRendererComponent() {
    }
    ApiClassRendererComponent.prototype.getPropertyValue = function (value, splitterIndex) {
        if (!value) {
            return "";
        }
        value = "" + value;
        var splitter = this.getSplittedValue(value);
        if (splitter && splitter[splitterIndex]) {
            if (splitterIndex === 0) {
                var returnValue = splitter[0].split("//")[0];
                return returnValue && returnValue.trim().length > 0 ? returnValue + ":" : "";
            }
            return splitter[splitterIndex].split("//")[0];
        }
        return value.split("//")[0];
    };
    ApiClassRendererComponent.prototype.getComment = function (value) {
        if (!value) {
            return "";
        }
        value = "" + value;
        var splitter = value.split("//");
        if (splitter && splitter[1]) {
            return "//" + splitter[1];
        }
        return "";
    };
    ApiClassRendererComponent.prototype.getSplittedValue = function (value) {
        if (!value) {
            return "";
        }
        value = "" + value;
        var splitter = value.split(":");
        if (splitter.length > 2) {
            return [
                splitter.slice(0, splitter.length - 1).join(": "),
                splitter[splitter.length - 1]
            ];
        }
        return splitter;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], ApiClassRendererComponent.prototype, "classImplementation", void 0);
    ApiClassRendererComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'api-class-renderer',
            template: __webpack_require__(960),
            styles: [__webpack_require__(908)],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }), 
        __metadata('design:paramtypes', [])
    ], ApiClassRendererComponent);
    return ApiClassRendererComponent;
}());
//# sourceMappingURL=D:/Workspace/JS-TS/ng2Tools/src/api-class-renderer.component.js.map

/***/ }),

/***/ 738:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiComponentPresentationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ApiComponentPresentationComponent = (function () {
    function ApiComponentPresentationComponent() {
    }
    ApiComponentPresentationComponent.prototype.ngOnInit = function () { };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], ApiComponentPresentationComponent.prototype, "componentPresentationData", void 0);
    ApiComponentPresentationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'api-component-presentation',
            template: __webpack_require__(961),
            styles: [__webpack_require__(909)],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }), 
        __metadata('design:paramtypes', [])
    ], ApiComponentPresentationComponent);
    return ApiComponentPresentationComponent;
}());
//# sourceMappingURL=D:/Workspace/JS-TS/ng2Tools/src/api-component-presentation.component.js.map

/***/ }),

/***/ 739:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiDescriptionRendererComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ApiDescriptionRendererComponent = (function () {
    function ApiDescriptionRendererComponent() {
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], ApiDescriptionRendererComponent.prototype, "descriptionData", void 0);
    ApiDescriptionRendererComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'api-description-renderer',
            template: __webpack_require__(962),
            styles: [__webpack_require__(910)],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }), 
        __metadata('design:paramtypes', [])
    ], ApiDescriptionRendererComponent);
    return ApiDescriptionRendererComponent;
}());
//# sourceMappingURL=D:/Workspace/JS-TS/ng2Tools/src/api-description-renderer.component.js.map

/***/ }),

/***/ 740:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiListRendererComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ApiListRendererComponent = (function () {
    function ApiListRendererComponent() {
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], ApiListRendererComponent.prototype, "apiData", void 0);
    ApiListRendererComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'api-list-renderer',
            template: __webpack_require__(963),
            styles: [__webpack_require__(911)],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }), 
        __metadata('design:paramtypes', [])
    ], ApiListRendererComponent);
    return ApiListRendererComponent;
}());
//# sourceMappingURL=D:/Workspace/JS-TS/ng2Tools/src/api-list-renderer.component.js.map

/***/ }),

/***/ 741:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiReferenceReaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ApiReferenceReaderComponent = (function () {
    function ApiReferenceReaderComponent() {
        this.config = {
            className: ['table-striped', 'table-bordered']
        };
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], ApiReferenceReaderComponent.prototype, "data", void 0);
    ApiReferenceReaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'api-reference-reader',
            template: __webpack_require__(964),
            styles: [__webpack_require__(912)],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }), 
        __metadata('design:paramtypes', [])
    ], ApiReferenceReaderComponent);
    return ApiReferenceReaderComponent;
}());
//# sourceMappingURL=D:/Workspace/JS-TS/ng2Tools/src/api-reference-reader.component.js.map

/***/ }),

/***/ 742:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(92);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutocompleteExampleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AutocompleteExampleComponent = (function () {
    function AutocompleteExampleComponent(backendService) {
        this.backendService = backendService;
        this.autocompleteConfigurtation = {
            searchConfig: {
                searchingItemsMessage: "Loading data",
                throttleTimer: 300,
                minSearchQueryLength: 3,
            },
            activateOnFocus: true,
            listMapping: {
                valueField: "value",
                visibleField: "text"
            }
        };
        this.simpleHint = {
            align: 'start',
            value: 'Autocomplete test'
        };
    }
    AutocompleteExampleComponent.prototype.ngOnInit = function () { };
    AutocompleteExampleComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'autocomplete-example',
            template: __webpack_require__(965),
            styles: [__webpack_require__(913)],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* BackendService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* BackendService */]) === 'function' && _a) || Object])
    ], AutocompleteExampleComponent);
    return AutocompleteExampleComponent;
    var _a;
}());
//# sourceMappingURL=D:/Workspace/JS-TS/ng2Tools/src/autocomplete-example.component.js.map

/***/ }),

/***/ 743:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__server_map__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__(92);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormExampleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FormExampleComponent = (function () {
    function FormExampleComponent(backend) {
        this.backend = backend;
        this.formDefinition = null;
        this.dataServices = {};
    }
    Object.defineProperty(FormExampleComponent.prototype, "config", {
        set: function (data) {
            if (!data) {
                return;
            }
            this.getFormDefinition(data);
        },
        enumerable: true,
        configurable: true
    });
    FormExampleComponent.prototype.getFormDefinition = function (data) {
        var _this = this;
        this.backend.getConfiguration(__WEBPACK_IMPORTED_MODULE_1__server_map__["a" /* SERVER_MAP */].formDefinitions[data.serverMap])
            .subscribe(function (value) {
            if (value['rows']) {
                value['rows'].forEach(function (row) {
                    row["elements"].forEach(function (element) {
                        if (element.type === "autocomplete") {
                            _this.dataServices[element.name] = _this.backend;
                        }
                    });
                });
            }
            _this.formDefinition = value;
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], FormExampleComponent.prototype, "config", null);
    FormExampleComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'form-example',
            template: __webpack_require__(966),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            styles: ["form {\n\t\tmargin-bottom: 200px;\n\t}"]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* BackendService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* BackendService */]) === 'function' && _a) || Object])
    ], FormExampleComponent);
    return FormExampleComponent;
    var _a;
}());
//# sourceMappingURL=D:/Workspace/JS-TS/ng2Tools/src/form-example.component.js.map

/***/ }),

/***/ 744:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidatorGenerator; });
/* Validations class*/
var ValidatorGenerator = (function () {
    function ValidatorGenerator() {
    }
    ValidatorGenerator.getAngularFormValidationFn = function (validationFunction, eToken) {
        return function (c) {
            var validationResult = validationFunction(c);
            if (!validationResult) {
                return validationResult;
            }
            if (validationResult instanceof Object && eToken) {
                validationResult['errorToken'] = eToken;
            }
            return validationResult;
        };
    };
    ValidatorGenerator.getFormValidationFn = function (validationFunction, eToken) {
        return function (c) {
            var value = c.value;
            var validationResult = validationFunction(value);
            if (!validationResult) {
                return validationResult;
            }
            if (validationResult instanceof Object && eToken) {
                validationResult['errorToken'] = eToken;
            }
            return validationResult;
        };
    };
    ValidatorGenerator.minLength = function (minLengthValue) {
        return function (value) {
            var valueAsString = String(value);
            if (valueAsString.length < minLengthValue) {
                return {
                    minlength: {
                        "requiredLength": minLengthValue,
                        "actualLength": valueAsString.length
                    }
                };
            }
            return null;
        };
    };
    /**
     * Decimal Validator
     * @return {(control: AbstractControl): { [key: string]: any }} Validation function;
     */
    ValidatorGenerator.maxDecimalLength = function (decimalCount) {
        return function (value) {
            var valueAsString = String(value);
            if (value === null || value === undefined || valueAsString === "") {
                return null;
            }
            if (+decimalCount === 0 && valueAsString.indexOf(".") !== -1) {
                return { "maxDecimalLength": decimalCount };
            }
            var decimalStringValue = valueAsString.replace(new RegExp(/^([0-9]*.)/), "");
            return decimalStringValue !== "0" && decimalStringValue.length > decimalCount ? { "maxDecimalLength": decimalCount } : null;
        };
    };
    ValidatorGenerator.minValue = function (minValue) {
        return function (value) {
            if (value === null || value === undefined || value === "") {
                return null;
            }
            return Number(value) < Number(minValue) ? { 'minValue': { 'minValue': minValue, 'actualvalue': value } } : null;
        };
    };
    ValidatorGenerator.maxValue = function (maxValue) {
        return function (value) {
            if (value === null || value === undefined || value === "") {
                return null;
            }
            return Number(value) > Number(maxValue) ? { 'maxValue': { 'maxValue': maxValue, 'actualvalue': value } } : null;
        };
    };
    /**
     * Email validator.
     * @return {string} Error map.
     * @return {null} Validation has passed.
     */
    ValidatorGenerator.emailValidation = function (value) {
        // tslint:disable-next-line:max-line-length
        var email = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        if (value && value !== "" && !value.match(email)) {
            return { "email": true };
        }
        return null;
    };
    /**
     * Text validator.
     * @return {string} Error map.
     * @return {null} Validation has passed.
     */
    ValidatorGenerator.textValidation = function (value) {
        var textRegExp = /^[a-zA-Z ]*$/;
        if (value !== "" && !textRegExp.test(value)) {
            return { "text": true };
        }
        return null;
    };
    /**
     * Number validator.
     * @return {string} Error map.
     * @return {null} Validation has passed.
     */
    ValidatorGenerator.numberValidation = function (value) {
        var valueAsString = String(value);
        if (value !== undefined && value !== null && valueAsString !== "" &&
            (isNaN(value) ||
                valueAsString[0] === '.' ||
                valueAsString[valueAsString.length - 1] === '.')) {
            return { "number": true };
        }
        if (value !== undefined && value !== null && valueAsString !== "") {
            var indexOfDash = valueAsString.indexOf('-');
            var numberOfDashes = (valueAsString.match(/-/g) || []).length;
            var numberOfZerosAfterDash = (valueAsString.match(/-0[0]*/g) || []).length;
            var hasZeroAfterDash = numberOfZerosAfterDash > 0 && !(numberOfZerosAfterDash === 1 && valueAsString[2] === '.');
            if ((indexOfDash !== 0 && indexOfDash !== -1) ||
                numberOfDashes > 1 ||
                hasZeroAfterDash ||
                valueAsString.indexOf('.-') !== -1 ||
                valueAsString.indexOf('-.') !== -1) {
                return { "number": true };
            }
        }
        return null;
    };
    /**
     * Integer validation
     * @return {(control: AbstractControl): { [key: string]: any }} Validation function;
     */
    ValidatorGenerator.integer = function (value) {
        if (ValidatorGenerator.numberValidation(value) !== null) {
            return {
                'integer': true
            };
        }
        var zeroDecimalCount = ValidatorGenerator.maxDecimalLength(0);
        if (zeroDecimalCount(value) !== null) {
            return {
                'integer': true
            };
        }
        return null;
    };
    /**
     * Password validator.
     * @return {string} Error map.
     * @return {null} Validation has passed.
     */
    ValidatorGenerator.passwordValidation = function (value) {
        // {6,100}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        var passwordRegex = /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/;
        if (!value.match(passwordRegex)) {
            return { 'password': true };
        }
        return null;
    };
    return ValidatorGenerator;
}());
//# sourceMappingURL=D:/Workspace/JS-TS/ng2Tools/src/validator-genators.js.map

/***/ }),

/***/ 745:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__autocomplete_autocomplete_config_model__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__autocomplete_autocomplete_config_model___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__autocomplete_autocomplete_config_model__);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__autocomplete_autocomplete_consts__ = __webpack_require__(471);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__autocomplete_autocomplete_overlay__ = __webpack_require__(472);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__autocomplete_autocomplete_component__ = __webpack_require__(470);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__generic_form_generic_form_component__ = __webpack_require__(475);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__generic_form_generic_form_service__ = __webpack_require__(476);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__generic_form_validation_helper__ = __webpack_require__(281);
/* unused harmony namespace reexport */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CORE_COMPONENTS", function() { return CORE_COMPONENTS; });









var CORE_COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_4__generic_form_generic_form_component__["a" /* GenericFormComponent */],
    __WEBPACK_IMPORTED_MODULE_3__autocomplete_autocomplete_component__["a" /* AutocompleteComponent */]
];
//# sourceMappingURL=D:/Workspace/JS-TS/ng2Tools/src/index.js.map

/***/ }),

/***/ 746:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rx_extensions__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_md2__ = __webpack_require__(942);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components__ = __webpack_require__(745);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__directives__ = __webpack_require__(747);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services__ = __webpack_require__(751);
/* unused harmony export CoreRootModule */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CoreRootModule = (function () {
    function CoreRootModule() {
    }
    CoreRootModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_3__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["MaterialModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4_md2__["a" /* Md2MultiselectModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_4_md2__["b" /* Md2DatepickerModule */].forRoot()
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_3__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["MaterialModule"]].concat(__WEBPACK_IMPORTED_MODULE_6__components__["CORE_COMPONENTS"], __WEBPACK_IMPORTED_MODULE_7__directives__["a" /* CORE_DIRECTIVES */]),
            declarations: __WEBPACK_IMPORTED_MODULE_6__components__["CORE_COMPONENTS"].concat(__WEBPACK_IMPORTED_MODULE_7__directives__["a" /* CORE_DIRECTIVES */]),
        }), 
        __metadata('design:paramtypes', [])
    ], CoreRootModule);
    return CoreRootModule;
}());
// TODO fix Core Module to work without MaterialModule.forRoot()
var CoreModule = (function () {
    function CoreModule() {
    }
    CoreModule.forRoot = function () {
        return {
            ngModule: CoreRootModule,
            providers: __WEBPACK_IMPORTED_MODULE_8__services__["a" /* CORE_SERVICES */].slice()
        };
    };
    CoreModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_3__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["MaterialModule"],
                __WEBPACK_IMPORTED_MODULE_4_md2__["a" /* Md2MultiselectModule */], __WEBPACK_IMPORTED_MODULE_4_md2__["b" /* Md2DatepickerModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_3__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["MaterialModule"]].concat(__WEBPACK_IMPORTED_MODULE_6__components__["CORE_COMPONENTS"], __WEBPACK_IMPORTED_MODULE_7__directives__["a" /* CORE_DIRECTIVES */]),
            declarations: __WEBPACK_IMPORTED_MODULE_6__components__["CORE_COMPONENTS"].concat(__WEBPACK_IMPORTED_MODULE_7__directives__["a" /* CORE_DIRECTIVES */]),
            providers: __WEBPACK_IMPORTED_MODULE_8__services__["a" /* CORE_SERVICES */].slice(),
        }), 
        __metadata('design:paramtypes', [])
    ], CoreModule);
    return CoreModule;
}());
//# sourceMappingURL=D:/Workspace/JS-TS/ng2Tools/src/core.module.js.map

/***/ }),

/***/ 747:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hint_container_directive__ = __webpack_require__(477);
/* unused harmony namespace reexport */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CORE_DIRECTIVES; });


var CORE_DIRECTIVES = [
    __WEBPACK_IMPORTED_MODULE_0__hint_container_directive__["a" /* HintContainerDirective */]
];
//# sourceMappingURL=D:/Workspace/JS-TS/ng2Tools/src/index.js.map

/***/ }),

/***/ 748:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getValueAccessorProviders; });

var getValueAccessorProviders = function (type) {
    return {
        provide: __WEBPACK_IMPORTED_MODULE_0__angular_forms__["a" /* NG_VALUE_ACCESSOR */],
        useExisting: type,
        multi: true
    };
};
//# sourceMappingURL=D:/Workspace/JS-TS/ng2Tools/src/custom-value-accessor.builder.js.map

/***/ }),

/***/ 749:
/***/ (function(module, exports) {

//# sourceMappingURL=D:/Workspace/JS-TS/ng2Tools/src/generic-types.js.map

/***/ }),

/***/ 750:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(917);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StreamModel; });

/**
 * @desc Each stream has a name, and a data
 */
var StreamModel = (function () {
    /**
     * @desc when a new StreamModel is created we can provide implementations for
     *       setInitialState?: (context: StreamModel, data) => void
     *       detectStreamChanges?: (context: StreamModel) => void
     *       getStreamData?: (context: StreamModel) => any
     *       resetStreamData?: (context: StreamModel) => any
     */
    function StreamModel(name, data, setInitialValue, detectStreamChanges, getStreamData, resetStreamData) {
        if (data === void 0) { data = null; }
        this.changes = false;
        this.valid = true;
        this.name = name;
        this.customFunctions = {};
        if (setInitialValue) {
            this.customFunctions["setInitialState"] = setInitialValue;
        }
        if (detectStreamChanges) {
            this.customFunctions["detectStreamChanges"] = detectStreamChanges;
        }
        if (getStreamData) {
            this.customFunctions["getStreamData"] = getStreamData;
        }
        if (data) {
            this.setInitialValue(data);
        }
    }
    StreamModel.prototype.getInitialValue = function () {
        return this.initialValues;
    };
    /**
     * @param data
     * @desc it sets the initial state of the streamModel and sets the valid state to true and the changes to false
     */
    StreamModel.prototype.setInitialValue = function (data) {
        if (this.customFunctions["setInitialState"]) {
            this.customFunctions["setInitialState"](this, data);
            return;
        }
        this.changes = false;
        this.valid = true;
        this.data = __WEBPACK_IMPORTED_MODULE_0_lodash__["cloneDeep"](data);
        this.initialValues = __WEBPACK_IMPORTED_MODULE_0_lodash__["cloneDeep"](data);
    };
    /**
     * @desc sets the stream data from initial value and calls detectStreamChanges
     */
    StreamModel.prototype.resetStreamData = function () {
        if (this.customFunctions["resetStreamData"]) {
            this.customFunctions["resetStreamData"](this);
        }
        this.data = __WEBPACK_IMPORTED_MODULE_0_lodash__["cloneDeep"](this.initialValues);
        this.detectStreamChanges();
        return this.data;
    };
    /**
     * @param data an object
     * @desc inherits from data the propertyes and property values and calls detectStreamChanges
     */
    StreamModel.prototype.inheritDataFrom = function (data) {
        if (typeof data !== 'object') {
            console.log("Cannot inherit data from: k");
            console.log(data);
        }
        var sortedkeys = Object.keys(data).sort();
        for (var _i = 0, sortedkeys_1 = sortedkeys; _i < sortedkeys_1.length; _i++) {
            var key = sortedkeys_1[_i];
            if (!key) {
                continue;
            }
            this.data[key] = __WEBPACK_IMPORTED_MODULE_0_lodash__["cloneDeep"](data[key]);
        }
        this.detectStreamChanges();
    };
    /**
     * @param data
     * @desc clones the data into the internal data object and calls detectStreamChanges
     */
    StreamModel.prototype.setStreamData = function (data) {
        this.data = __WEBPACK_IMPORTED_MODULE_0_lodash__["cloneDeep"](data);
        this.detectStreamChanges();
    };
    /**
     * @returns the stream data or getStreamData provided in the constructor
     */
    StreamModel.prototype.getStreamData = function () {
        if (this.customFunctions["getStreamData"]) {
            return this.customFunctions["getStreamData"](this);
        }
        return this.data;
    };
    /**
     * @desc checks if the streams has the same value with the initial value or uses detectStreamChanges function to set the changes value
     */
    StreamModel.prototype.detectStreamChanges = function () {
        if (this.customFunctions["detectStreamChanges"]) {
            this.changes = this.customFunctions["detectStreamChanges"](this);
            return;
        }
        this.logInternalValues();
        this.changes = !__WEBPACK_IMPORTED_MODULE_0_lodash__["isEqual"](this.initialValues, this.data);
    };
    /**
     * @desc it sets the valid state of the streamModel
     */
    StreamModel.prototype.setValidState = function (valid) {
        this.valid = valid;
    };
    StreamModel.prototype.getValidState = function () {
        return this.valid;
    };
    StreamModel.prototype.getChangesState = function () {
        return this.changes;
    };
    StreamModel.prototype.logInternalValues = function () {
        if (this.initialValues && this.data) {
        }
    };
    return StreamModel;
}());
//# sourceMappingURL=D:/Workspace/JS-TS/ng2Tools/src/stream-model.js.map

/***/ }),

/***/ 751:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logger_service__ = __webpack_require__(283);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__page_streams_service__ = __webpack_require__(480);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__searching_service__ = __webpack_require__(284);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helper_functions_service__ = __webpack_require__(282);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_mode_service__ = __webpack_require__(123);
/* unused harmony namespace reexport */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CORE_SERVICES; });










var CORE_SERVICES = [
    __WEBPACK_IMPORTED_MODULE_0__logger_service__["a" /* LoggerService */],
    __WEBPACK_IMPORTED_MODULE_4__app_mode_service__["a" /* AppModeService */],
    __WEBPACK_IMPORTED_MODULE_1__page_streams_service__["a" /* PageStreamsService */],
    __WEBPACK_IMPORTED_MODULE_2__searching_service__["a" /* SearchingService */],
    __WEBPACK_IMPORTED_MODULE_3__helper_functions_service__["a" /* HelperFunctionsService */]
];
//# sourceMappingURL=D:/Workspace/JS-TS/ng2Tools/src/index.js.map

/***/ }),

/***/ 752:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=D:/Workspace/JS-TS/ng2Tools/src/environment.js.map

/***/ }),

/***/ 753:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(767);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(760);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(756);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(762);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(761);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(759);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(758);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(766);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(755);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(754);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(764);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(757);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(765);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(763);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(768);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(1018);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















// If you need to support the browsers/features below, uncomment the import
// and run `npm install import-name-here';
// Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
// Needed for: IE9
// import 'classlist.js';
// Animations
// Needed for: All but Chrome and Firefox, Not supported in IE9
// import 'web-animations-js';
// Date, currency, decimal and percent pipes
// Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
// import 'intl';
// NgClass on SVG elements
// Needed for: IE10, IE11
// import 'classlist.js';
//# sourceMappingURL=D:/Workspace/JS-TS/ng2Tools/src/polyfills.js.map

/***/ }),

/***/ 904:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)();
// imports


// module
exports.push([module.i, "components-page > .md-sidenav-container {\n  height: 100%; }\n  components-page > .md-sidenav-container components-menu {\n    display: inherit;\n    width: 240px; }\n\ncomponents-page .app-sidenav-content {\n  height: 100%;\n  max-height: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 905:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)();
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n.md-elevation-z0 {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z1 {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z2 {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z3 {\n  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z4 {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z5 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z6 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z7 {\n  box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z8 {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z9 {\n  box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z10 {\n  box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z11 {\n  box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z12 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z13 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z14 {\n  box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z15 {\n  box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z16 {\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z17 {\n  box-shadow: 0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z18 {\n  box-shadow: 0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z19 {\n  box-shadow: 0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z20 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z21 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z22 {\n  box-shadow: 0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z23 {\n  box-shadow: 0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z24 {\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12); }\n\n[md-ripple] {\n  overflow: hidden; }\n\n[md-ripple].mdRippleUnbounded {\n  overflow: visible; }\n\n.md-ripple-background {\n  background-color: rgba(0, 0, 0, 0.0588);\n  opacity: 0;\n  -webkit-transition: opacity 300ms linear;\n  transition: opacity 300ms linear;\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0; }\n\n.mdRippleUnbounded .md-ripple-background {\n  display: none; }\n\n.md-ripple-background.md-ripple-active {\n  opacity: 1; }\n\n.mdRippleFocused .md-ripple-background {\n  opacity: 1; }\n\n.md-ripple-foreground {\n  background-color: rgba(0, 0, 0, 0.0588);\n  border-radius: 50%;\n  pointer-events: none;\n  opacity: 0.25;\n  position: absolute;\n  -webkit-transition: opacity, -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity, -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1); }\n\n.md-ripple-foreground.md-ripple-fade-in {\n  opacity: 1; }\n\n.md-ripple-foreground.md-ripple-fade-out {\n  opacity: 0; }\n\n.cdk-visually-hidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  text-transform: none;\n  width: 1px; }\n\n.cdk-overlay-container, .cdk-global-overlay-wrapper {\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%; }\n\n.cdk-overlay-container {\n  position: fixed;\n  z-index: 1000; }\n\n.cdk-global-overlay-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: absolute;\n  z-index: 1000; }\n\n.cdk-overlay-pane {\n  position: absolute;\n  pointer-events: auto;\n  box-sizing: border-box;\n  z-index: 1000; }\n\n.cdk-overlay-backdrop {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  pointer-events: auto;\n  -webkit-transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  opacity: 0; }\n  .cdk-overlay-backdrop.cdk-overlay-backdrop-showing {\n    opacity: 0.48; }\n\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.6); }\n\n.cdk-overlay-transparent-backdrop {\n  background: none; }\n\n.app-light-theme .mdRippleFocused .md-ripple-background {\n  background-color: rgba(255, 64, 129, 0.1); }\n\n.app-light-theme [md-button].md-button-focus.md-primary .md-button-focus-overlay, .app-light-theme [md-icon-button].md-button-focus.md-primary .md-button-focus-overlay, .app-light-theme [md-raised-button].md-button-focus.md-primary .md-button-focus-overlay, .app-light-theme [md-fab].md-button-focus.md-primary .md-button-focus-overlay, .app-light-theme [md-mini-fab].md-button-focus.md-primary .md-button-focus-overlay {\n  background-color: rgba(63, 81, 181, 0.12); }\n\n.app-light-theme [md-button].md-button-focus.md-accent .md-button-focus-overlay, .app-light-theme [md-icon-button].md-button-focus.md-accent .md-button-focus-overlay, .app-light-theme [md-raised-button].md-button-focus.md-accent .md-button-focus-overlay, .app-light-theme [md-fab].md-button-focus.md-accent .md-button-focus-overlay, .app-light-theme [md-mini-fab].md-button-focus.md-accent .md-button-focus-overlay {\n  background-color: rgba(255, 64, 129, 0.12); }\n\n.app-light-theme [md-button].md-button-focus.md-warn .md-button-focus-overlay, .app-light-theme [md-icon-button].md-button-focus.md-warn .md-button-focus-overlay, .app-light-theme [md-raised-button].md-button-focus.md-warn .md-button-focus-overlay, .app-light-theme [md-fab].md-button-focus.md-warn .md-button-focus-overlay, .app-light-theme [md-mini-fab].md-button-focus.md-warn .md-button-focus-overlay {\n  background-color: rgba(244, 67, 54, 0.12); }\n\n.app-light-theme [md-button], .app-light-theme [md-icon-button] {\n  background: transparent; }\n  .app-light-theme [md-button].md-primary, .app-light-theme [md-icon-button].md-primary {\n    color: #3f51b5; }\n  .app-light-theme [md-button].md-accent, .app-light-theme [md-icon-button].md-accent {\n    color: #ff4081; }\n  .app-light-theme [md-button].md-warn, .app-light-theme [md-icon-button].md-warn {\n    color: #f44336; }\n  .app-light-theme [md-button].md-primary[disabled], .app-light-theme [md-button].md-accent[disabled], .app-light-theme [md-button].md-warn[disabled], .app-light-theme [md-button][disabled][disabled], .app-light-theme [md-icon-button].md-primary[disabled], .app-light-theme [md-icon-button].md-accent[disabled], .app-light-theme [md-icon-button].md-warn[disabled], .app-light-theme [md-icon-button][disabled][disabled] {\n    color: rgba(0, 0, 0, 0.38); }\n  .app-light-theme [md-button]:hover.md-primary .md-button-focus-overlay, .app-light-theme [md-icon-button]:hover.md-primary .md-button-focus-overlay {\n    background-color: rgba(63, 81, 181, 0.12); }\n  .app-light-theme [md-button]:hover.md-accent .md-button-focus-overlay, .app-light-theme [md-icon-button]:hover.md-accent .md-button-focus-overlay {\n    background-color: rgba(255, 64, 129, 0.12); }\n  .app-light-theme [md-button]:hover.md-warn .md-button-focus-overlay, .app-light-theme [md-icon-button]:hover.md-warn .md-button-focus-overlay {\n    background-color: rgba(244, 67, 54, 0.12); }\n\n.app-light-theme [md-raised-button], .app-light-theme [md-fab], .app-light-theme [md-mini-fab] {\n  background-color: #fafafa; }\n  .app-light-theme [md-raised-button].md-primary, .app-light-theme [md-fab].md-primary, .app-light-theme [md-mini-fab].md-primary {\n    color: rgba(255, 255, 255, 0.87); }\n  .app-light-theme [md-raised-button].md-accent, .app-light-theme [md-fab].md-accent, .app-light-theme [md-mini-fab].md-accent {\n    color: white; }\n  .app-light-theme [md-raised-button].md-warn, .app-light-theme [md-fab].md-warn, .app-light-theme [md-mini-fab].md-warn {\n    color: white; }\n  .app-light-theme [md-raised-button].md-primary[disabled], .app-light-theme [md-raised-button].md-accent[disabled], .app-light-theme [md-raised-button].md-warn[disabled], .app-light-theme [md-raised-button][disabled][disabled], .app-light-theme [md-fab].md-primary[disabled], .app-light-theme [md-fab].md-accent[disabled], .app-light-theme [md-fab].md-warn[disabled], .app-light-theme [md-fab][disabled][disabled], .app-light-theme [md-mini-fab].md-primary[disabled], .app-light-theme [md-mini-fab].md-accent[disabled], .app-light-theme [md-mini-fab].md-warn[disabled], .app-light-theme [md-mini-fab][disabled][disabled] {\n    color: rgba(0, 0, 0, 0.38); }\n  .app-light-theme [md-raised-button].md-primary, .app-light-theme [md-fab].md-primary, .app-light-theme [md-mini-fab].md-primary {\n    background-color: #3f51b5; }\n  .app-light-theme [md-raised-button].md-accent, .app-light-theme [md-fab].md-accent, .app-light-theme [md-mini-fab].md-accent {\n    background-color: #ff4081; }\n  .app-light-theme [md-raised-button].md-warn, .app-light-theme [md-fab].md-warn, .app-light-theme [md-mini-fab].md-warn {\n    background-color: #f44336; }\n  .app-light-theme [md-raised-button].md-primary[disabled], .app-light-theme [md-raised-button].md-accent[disabled], .app-light-theme [md-raised-button].md-warn[disabled], .app-light-theme [md-raised-button][disabled][disabled], .app-light-theme [md-fab].md-primary[disabled], .app-light-theme [md-fab].md-accent[disabled], .app-light-theme [md-fab].md-warn[disabled], .app-light-theme [md-fab][disabled][disabled], .app-light-theme [md-mini-fab].md-primary[disabled], .app-light-theme [md-mini-fab].md-accent[disabled], .app-light-theme [md-mini-fab].md-warn[disabled], .app-light-theme [md-mini-fab][disabled][disabled] {\n    background-color: rgba(0, 0, 0, 0.12); }\n\n.app-light-theme [md-fab], .app-light-theme [md-mini-fab] {\n  background-color: #ff4081;\n  color: white; }\n\n.app-light-theme .md-button-toggle-checked .md-button-toggle-label-content {\n  background-color: #e0e0e0; }\n\n.app-light-theme .md-button-toggle-disabled .md-button-toggle-label-content {\n  background-color: rgba(0, 0, 0, 0.38); }\n\n.app-light-theme md-card {\n  background: white;\n  color: black; }\n\n.app-light-theme md-card-subtitle {\n  color: rgba(0, 0, 0, 0.54); }\n\n.app-light-theme .md-checkbox-frame {\n  border-color: rgba(0, 0, 0, 0.54); }\n\n.app-light-theme .md-checkbox-checkmark {\n  fill: #fafafa; }\n\n.app-light-theme .md-checkbox-checkmark-path {\n  stroke: #fafafa !important; }\n\n.app-light-theme .md-checkbox-mixedmark {\n  background-color: #fafafa; }\n\n.app-light-theme .md-checkbox-indeterminate.md-primary .md-checkbox-background, .app-light-theme .md-checkbox-checked.md-primary .md-checkbox-background {\n  background-color: #3f51b5; }\n\n.app-light-theme .md-checkbox-indeterminate.md-accent .md-checkbox-background, .app-light-theme .md-checkbox-checked.md-accent .md-checkbox-background {\n  background-color: #e91e63; }\n\n.app-light-theme .md-checkbox-indeterminate.md-warn .md-checkbox-background, .app-light-theme .md-checkbox-checked.md-warn .md-checkbox-background {\n  background-color: #f44336; }\n\n.app-light-theme .md-checkbox-disabled.md-checkbox-checked .md-checkbox-background, .app-light-theme .md-checkbox-disabled.md-checkbox-indeterminate .md-checkbox-background {\n  background-color: #b0b0b0; }\n\n.app-light-theme .md-checkbox-disabled:not(.md-checkbox-checked) .md-checkbox-frame {\n  border-color: #b0b0b0; }\n\n.app-light-theme .md-checkbox:not(.md-checkbox-disabled).md-primary .md-checkbox-ripple .md-ripple-foreground {\n  background-color: rgba(63, 81, 181, 0.26); }\n\n.app-light-theme .md-checkbox:not(.md-checkbox-disabled).md-accent .md-checkbox-ripple .md-ripple-foreground {\n  background-color: rgba(255, 64, 129, 0.26); }\n\n.app-light-theme .md-checkbox:not(.md-checkbox-disabled).md-warn .md-checkbox-ripple .md-ripple-foreground {\n  background-color: rgba(244, 67, 54, 0.26); }\n\n.app-light-theme .md-chip:not(.md-basic-chip) {\n  background-color: #e0e0e0;\n  color: rgba(0, 0, 0, 0.87); }\n\n.app-light-theme .md-chip.md-chip-selected:not(.md-basic-chip) {\n  background-color: #808080;\n  color: rgba(255, 255, 255, 0.87); }\n  .app-light-theme .md-chip.md-chip-selected:not(.md-basic-chip).md-primary {\n    background-color: #3f51b5;\n    color: rgba(255, 255, 255, 0.87); }\n  .app-light-theme .md-chip.md-chip-selected:not(.md-basic-chip).md-accent {\n    background-color: #e91e63;\n    color: white; }\n  .app-light-theme .md-chip.md-chip-selected:not(.md-basic-chip).md-warn {\n    background-color: #f44336;\n    color: white; }\n\n.app-light-theme md-dialog-container {\n  background: white; }\n\n.app-light-theme md-icon.md-primary {\n  color: #3f51b5; }\n\n.app-light-theme md-icon.md-accent {\n  color: #ff4081; }\n\n.app-light-theme md-icon.md-warn {\n  color: #f44336; }\n\n.app-light-theme .md-input-placeholder {\n  color: rgba(0, 0, 0, 0.38); }\n  .app-light-theme .md-input-placeholder.md-focused {\n    color: #3f51b5; }\n    .app-light-theme .md-input-placeholder.md-focused.md-accent {\n      color: #ff4081; }\n    .app-light-theme .md-input-placeholder.md-focused.md-warn {\n      color: #f44336; }\n\n.app-light-theme input.md-input-element:-webkit-autofill + .md-input-placeholder .md-placeholder-required,\n.app-light-theme .md-input-placeholder.md-float.md-focused .md-placeholder-required {\n  color: #ff4081; }\n\n.app-light-theme .md-input-underline {\n  border-color: rgba(0, 0, 0, 0.12); }\n  .app-light-theme .md-input-underline .md-input-ripple {\n    background-color: #3f51b5; }\n    .app-light-theme .md-input-underline .md-input-ripple.md-accent {\n      background-color: #ff4081; }\n    .app-light-theme .md-input-underline .md-input-ripple.md-warn {\n      background-color: #f44336; }\n\n.app-light-theme md-list md-list-item, .app-light-theme md-list a[md-list-item], .app-light-theme md-nav-list md-list-item, .app-light-theme md-nav-list a[md-list-item] {\n  color: black; }\n\n.app-light-theme md-list [md-subheader], .app-light-theme md-nav-list [md-subheader] {\n  color: rgba(0, 0, 0, 0.54); }\n\n.app-light-theme md-divider {\n  border-top-color: rgba(0, 0, 0, 0.12); }\n\n.app-light-theme md-nav-list .md-list-item:hover, .app-light-theme md-nav-list .md-list-item.md-list-item-focus {\n  background: rgba(0, 0, 0, 0.04); }\n\n.app-light-theme .md-menu-content {\n  background: white; }\n\n.app-light-theme [md-menu-item] {\n  background: transparent;\n  color: rgba(0, 0, 0, 0.87); }\n  .app-light-theme [md-menu-item][disabled] {\n    color: rgba(0, 0, 0, 0.38); }\n  .app-light-theme [md-menu-item] md-icon {\n    color: rgba(0, 0, 0, 0.54); }\n  .app-light-theme [md-menu-item]:hover:not([disabled]), .app-light-theme [md-menu-item]:focus:not([disabled]) {\n    background: rgba(0, 0, 0, 0.04); }\n\n.app-light-theme .md-progress-bar-background {\n  background: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27#c5cae9%27%2F%3E%3C%2Fsvg%3E\"); }\n\n.app-light-theme .md-progress-bar-buffer {\n  background-color: #c5cae9; }\n\n.app-light-theme .md-progress-bar-fill::after {\n  background-color: #3949ab; }\n\n.app-light-theme md-progress-bar.md-accent .md-progress-bar-background {\n  background: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27#f8bbd0%27%2F%3E%3C%2Fsvg%3E\"); }\n\n.app-light-theme md-progress-bar.md-accent .md-progress-bar-buffer {\n  background-color: #f8bbd0; }\n\n.app-light-theme md-progress-bar.md-accent .md-progress-bar-fill::after {\n  background-color: #d81b60; }\n\n.app-light-theme md-progress-bar.md-warn .md-progress-bar-background {\n  background: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27#ffcdd2%27%2F%3E%3C%2Fsvg%3E\"); }\n\n.app-light-theme md-progress-bar.md-warn .md-progress-bar-buffer {\n  background-color: #ffcdd2; }\n\n.app-light-theme md-progress-bar.md-warn .md-progress-bar-fill::after {\n  background-color: #e53935; }\n\n.app-light-theme md-progress-spinner path, .app-light-theme md-progress-circle path, .app-light-theme md-spinner path {\n  stroke: #3949ab; }\n\n.app-light-theme md-progress-spinner.md-accent path, .app-light-theme md-progress-circle.md-accent path, .app-light-theme md-spinner.md-accent path {\n  stroke: #d81b60; }\n\n.app-light-theme md-progress-spinner.md-warn path, .app-light-theme md-progress-circle.md-warn path, .app-light-theme md-spinner.md-warn path {\n  stroke: #e53935; }\n\n.app-light-theme .md-radio-outer-circle {\n  border-color: rgba(0, 0, 0, 0.54); }\n  .md-radio-checked .app-light-theme .md-radio-outer-circle {\n    border-color: #ff4081; }\n  .md-radio-disabled .app-light-theme .md-radio-outer-circle {\n    border-color: rgba(0, 0, 0, 0.38); }\n\n.app-light-theme .md-radio-inner-circle {\n  background-color: #ff4081; }\n  .md-radio-disabled .app-light-theme .md-radio-inner-circle {\n    background-color: rgba(0, 0, 0, 0.38); }\n\n.app-light-theme .md-radio-ripple .md-ripple-foreground {\n  background-color: rgba(255, 64, 129, 0.26); }\n  .md-radio-disabled .app-light-theme .md-radio-ripple .md-ripple-foreground {\n    background-color: rgba(0, 0, 0, 0.38); }\n\n.app-light-theme .md-select-trigger {\n  color: rgba(0, 0, 0, 0.38);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n  md-select:focus:not(.md-select-disabled) .app-light-theme .md-select-trigger {\n    color: #3f51b5;\n    border-bottom: 1px solid #3f51b5; }\n  md-select.ng-invalid.ng-touched:not(.md-select-disabled) .app-light-theme .md-select-trigger {\n    color: #f44336;\n    border-bottom: 1px solid #f44336; }\n\n.app-light-theme .md-select-arrow {\n  color: rgba(0, 0, 0, 0.38); }\n  md-select:focus:not(.md-select-disabled) .app-light-theme .md-select-arrow {\n    color: #3f51b5; }\n  md-select.ng-invalid.ng-touched:not(.md-select-disabled) .app-light-theme .md-select-arrow {\n    color: #f44336; }\n\n.app-light-theme .md-select-content {\n  background: white; }\n\n.app-light-theme .md-select-value {\n  color: rgba(0, 0, 0, 0.87); }\n  .md-select-disabled .app-light-theme .md-select-value {\n    color: rgba(0, 0, 0, 0.38); }\n\n.app-light-theme md-option:hover:not(.md-option-disabled), .app-light-theme md-option:focus:not(.md-option-disabled) {\n  background: rgba(0, 0, 0, 0.04); }\n\n.app-light-theme md-option.md-selected {\n  background: rgba(0, 0, 0, 0.04);\n  color: #3f51b5; }\n\n.app-light-theme md-option.md-option-disabled {\n  color: rgba(0, 0, 0, 0.38); }\n\n.app-light-theme .md-sidenav-container {\n  background-color: #fafafa;\n  color: rgba(0, 0, 0, 0.87); }\n\n.app-light-theme md-sidenav {\n  background-color: white;\n  color: rgba(0, 0, 0, 0.87); }\n  .app-light-theme md-sidenav.md-sidenav-push {\n    background-color: white; }\n\n.app-light-theme .md-sidenav-backdrop.md-sidenav-shown {\n  background-color: rgba(0, 0, 0, 0.6); }\n\n.app-light-theme md-slide-toggle.md-checked:not(.md-disabled) .md-slide-toggle-thumb {\n  background-color: #e91e63; }\n\n.app-light-theme md-slide-toggle.md-checked:not(.md-disabled) .md-slide-toggle-bar {\n  background-color: rgba(233, 30, 99, 0.5); }\n\n.app-light-theme md-slide-toggle.md-slide-toggle-focused:not(.md-checked) .md-ink-ripple {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.app-light-theme md-slide-toggle.md-slide-toggle-focused .md-ink-ripple {\n  background-color: rgba(233, 30, 99, 0.26); }\n\n.app-light-theme md-slide-toggle.md-primary.md-checked:not(.md-disabled) .md-slide-toggle-thumb {\n  background-color: #3f51b5; }\n\n.app-light-theme md-slide-toggle.md-primary.md-checked:not(.md-disabled) .md-slide-toggle-bar {\n  background-color: rgba(63, 81, 181, 0.5); }\n\n.app-light-theme md-slide-toggle.md-primary.md-slide-toggle-focused:not(.md-checked) .md-ink-ripple {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.app-light-theme md-slide-toggle.md-primary.md-slide-toggle-focused .md-ink-ripple {\n  background-color: rgba(63, 81, 181, 0.26); }\n\n.app-light-theme md-slide-toggle.md-warn.md-checked:not(.md-disabled) .md-slide-toggle-thumb {\n  background-color: #f44336; }\n\n.app-light-theme md-slide-toggle.md-warn.md-checked:not(.md-disabled) .md-slide-toggle-bar {\n  background-color: rgba(244, 67, 54, 0.5); }\n\n.app-light-theme md-slide-toggle.md-warn.md-slide-toggle-focused:not(.md-checked) .md-ink-ripple {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.app-light-theme md-slide-toggle.md-warn.md-slide-toggle-focused .md-ink-ripple {\n  background-color: rgba(244, 67, 54, 0.26); }\n\n.app-light-theme .md-disabled .md-slide-toggle-thumb {\n  background-color: #bdbdbd; }\n\n.app-light-theme .md-disabled .md-slide-toggle-bar {\n  background-color: rgba(0, 0, 0, 0.1); }\n\n.app-light-theme .md-slide-toggle-thumb {\n  background-color: #fafafa; }\n\n.app-light-theme .md-slide-toggle-bar {\n  background-color: rgba(0, 0, 0, 0.38); }\n\n.app-light-theme .md-slider-track {\n  background-color: rgba(0, 0, 0, 0.26); }\n\n.app-light-theme .md-slider-track-fill {\n  background-color: #ff4081; }\n\n.app-light-theme .md-slider-thumb {\n  background-color: #ff4081; }\n\n.app-light-theme .md-slider-thumb-label {\n  background-color: #ff4081; }\n\n.app-light-theme .md-slider-thumb-label-text {\n  color: white; }\n\n.app-light-theme [md-tab-nav-bar],\n.app-light-theme .md-tab-header {\n  border-bottom: 1px solid #e0e0e0; }\n\n.app-light-theme .md-tab-label:focus {\n  background-color: rgba(197, 202, 233, 0.3); }\n\n.app-light-theme md-ink-bar {\n  background-color: #3f51b5; }\n\n.app-light-theme md-toolbar {\n  background: whitesmoke;\n  color: rgba(0, 0, 0, 0.87); }\n  .app-light-theme md-toolbar.md-primary {\n    background: #3f51b5;\n    color: rgba(255, 255, 255, 0.87); }\n  .app-light-theme md-toolbar.md-accent {\n    background: #ff4081;\n    color: white; }\n  .app-light-theme md-toolbar.md-warn {\n    background: #f44336;\n    color: white; }\n\n.app-light-theme .md-tooltip {\n  background: rgba(97, 97, 97, 0.9); }\n\ncomponents-menu .menu-subheader {\n  display: block;\n  box-sizing: border-box;\n  height: 48px;\n  padding: 16px;\n  margin: 0;\n  font-size: 14px;\n  font-weight: bold;\n  background-color: #E0E0E0;\n  font-family: Roboto,\"Helvetica Neue\",sans-serif;\n  color: #3f51b5; }\n\ncomponents-menu md-nav-list {\n  padding-top: 0px; }\n  components-menu md-nav-list div a.selected {\n    background: rgba(0, 0, 0, 0.04);\n    font-weight: bold; }\n    components-menu md-nav-list div a.selected .md-list-item {\n      color: #3f51b5; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 906:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)();
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n.md-elevation-z0 {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z1 {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z2 {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z3 {\n  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z4 {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z5 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z6 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z7 {\n  box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z8 {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z9 {\n  box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z10 {\n  box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z11 {\n  box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z12 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z13 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z14 {\n  box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z15 {\n  box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z16 {\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z17 {\n  box-shadow: 0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z18 {\n  box-shadow: 0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z19 {\n  box-shadow: 0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z20 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z21 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z22 {\n  box-shadow: 0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z23 {\n  box-shadow: 0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z24 {\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12); }\n\n[md-ripple] {\n  overflow: hidden; }\n\n[md-ripple].mdRippleUnbounded {\n  overflow: visible; }\n\n.md-ripple-background {\n  background-color: rgba(0, 0, 0, 0.0588);\n  opacity: 0;\n  -webkit-transition: opacity 300ms linear;\n  transition: opacity 300ms linear;\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0; }\n\n.mdRippleUnbounded .md-ripple-background {\n  display: none; }\n\n.md-ripple-background.md-ripple-active {\n  opacity: 1; }\n\n.mdRippleFocused .md-ripple-background {\n  opacity: 1; }\n\n.md-ripple-foreground {\n  background-color: rgba(0, 0, 0, 0.0588);\n  border-radius: 50%;\n  pointer-events: none;\n  opacity: 0.25;\n  position: absolute;\n  -webkit-transition: opacity, -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity, -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1); }\n\n.md-ripple-foreground.md-ripple-fade-in {\n  opacity: 1; }\n\n.md-ripple-foreground.md-ripple-fade-out {\n  opacity: 0; }\n\n.cdk-visually-hidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  text-transform: none;\n  width: 1px; }\n\n.cdk-overlay-container, .cdk-global-overlay-wrapper {\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%; }\n\n.cdk-overlay-container {\n  position: fixed;\n  z-index: 1000; }\n\n.cdk-global-overlay-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: absolute;\n  z-index: 1000; }\n\n.cdk-overlay-pane {\n  position: absolute;\n  pointer-events: auto;\n  box-sizing: border-box;\n  z-index: 1000; }\n\n.cdk-overlay-backdrop {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  pointer-events: auto;\n  -webkit-transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  opacity: 0; }\n  .cdk-overlay-backdrop.cdk-overlay-backdrop-showing {\n    opacity: 0.48; }\n\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.6); }\n\n.cdk-overlay-transparent-backdrop {\n  background: none; }\n\n.app-light-theme .mdRippleFocused .md-ripple-background {\n  background-color: rgba(255, 64, 129, 0.1); }\n\n.app-light-theme [md-button].md-button-focus.md-primary .md-button-focus-overlay, .app-light-theme [md-icon-button].md-button-focus.md-primary .md-button-focus-overlay, .app-light-theme [md-raised-button].md-button-focus.md-primary .md-button-focus-overlay, .app-light-theme [md-fab].md-button-focus.md-primary .md-button-focus-overlay, .app-light-theme [md-mini-fab].md-button-focus.md-primary .md-button-focus-overlay {\n  background-color: rgba(63, 81, 181, 0.12); }\n\n.app-light-theme [md-button].md-button-focus.md-accent .md-button-focus-overlay, .app-light-theme [md-icon-button].md-button-focus.md-accent .md-button-focus-overlay, .app-light-theme [md-raised-button].md-button-focus.md-accent .md-button-focus-overlay, .app-light-theme [md-fab].md-button-focus.md-accent .md-button-focus-overlay, .app-light-theme [md-mini-fab].md-button-focus.md-accent .md-button-focus-overlay {\n  background-color: rgba(255, 64, 129, 0.12); }\n\n.app-light-theme [md-button].md-button-focus.md-warn .md-button-focus-overlay, .app-light-theme [md-icon-button].md-button-focus.md-warn .md-button-focus-overlay, .app-light-theme [md-raised-button].md-button-focus.md-warn .md-button-focus-overlay, .app-light-theme [md-fab].md-button-focus.md-warn .md-button-focus-overlay, .app-light-theme [md-mini-fab].md-button-focus.md-warn .md-button-focus-overlay {\n  background-color: rgba(244, 67, 54, 0.12); }\n\n.app-light-theme [md-button], .app-light-theme [md-icon-button] {\n  background: transparent; }\n  .app-light-theme [md-button].md-primary, .app-light-theme [md-icon-button].md-primary {\n    color: #3f51b5; }\n  .app-light-theme [md-button].md-accent, .app-light-theme [md-icon-button].md-accent {\n    color: #ff4081; }\n  .app-light-theme [md-button].md-warn, .app-light-theme [md-icon-button].md-warn {\n    color: #f44336; }\n  .app-light-theme [md-button].md-primary[disabled], .app-light-theme [md-button].md-accent[disabled], .app-light-theme [md-button].md-warn[disabled], .app-light-theme [md-button][disabled][disabled], .app-light-theme [md-icon-button].md-primary[disabled], .app-light-theme [md-icon-button].md-accent[disabled], .app-light-theme [md-icon-button].md-warn[disabled], .app-light-theme [md-icon-button][disabled][disabled] {\n    color: rgba(0, 0, 0, 0.38); }\n  .app-light-theme [md-button]:hover.md-primary .md-button-focus-overlay, .app-light-theme [md-icon-button]:hover.md-primary .md-button-focus-overlay {\n    background-color: rgba(63, 81, 181, 0.12); }\n  .app-light-theme [md-button]:hover.md-accent .md-button-focus-overlay, .app-light-theme [md-icon-button]:hover.md-accent .md-button-focus-overlay {\n    background-color: rgba(255, 64, 129, 0.12); }\n  .app-light-theme [md-button]:hover.md-warn .md-button-focus-overlay, .app-light-theme [md-icon-button]:hover.md-warn .md-button-focus-overlay {\n    background-color: rgba(244, 67, 54, 0.12); }\n\n.app-light-theme [md-raised-button], .app-light-theme [md-fab], .app-light-theme [md-mini-fab] {\n  background-color: #fafafa; }\n  .app-light-theme [md-raised-button].md-primary, .app-light-theme [md-fab].md-primary, .app-light-theme [md-mini-fab].md-primary {\n    color: rgba(255, 255, 255, 0.87); }\n  .app-light-theme [md-raised-button].md-accent, .app-light-theme [md-fab].md-accent, .app-light-theme [md-mini-fab].md-accent {\n    color: white; }\n  .app-light-theme [md-raised-button].md-warn, .app-light-theme [md-fab].md-warn, .app-light-theme [md-mini-fab].md-warn {\n    color: white; }\n  .app-light-theme [md-raised-button].md-primary[disabled], .app-light-theme [md-raised-button].md-accent[disabled], .app-light-theme [md-raised-button].md-warn[disabled], .app-light-theme [md-raised-button][disabled][disabled], .app-light-theme [md-fab].md-primary[disabled], .app-light-theme [md-fab].md-accent[disabled], .app-light-theme [md-fab].md-warn[disabled], .app-light-theme [md-fab][disabled][disabled], .app-light-theme [md-mini-fab].md-primary[disabled], .app-light-theme [md-mini-fab].md-accent[disabled], .app-light-theme [md-mini-fab].md-warn[disabled], .app-light-theme [md-mini-fab][disabled][disabled] {\n    color: rgba(0, 0, 0, 0.38); }\n  .app-light-theme [md-raised-button].md-primary, .app-light-theme [md-fab].md-primary, .app-light-theme [md-mini-fab].md-primary {\n    background-color: #3f51b5; }\n  .app-light-theme [md-raised-button].md-accent, .app-light-theme [md-fab].md-accent, .app-light-theme [md-mini-fab].md-accent {\n    background-color: #ff4081; }\n  .app-light-theme [md-raised-button].md-warn, .app-light-theme [md-fab].md-warn, .app-light-theme [md-mini-fab].md-warn {\n    background-color: #f44336; }\n  .app-light-theme [md-raised-button].md-primary[disabled], .app-light-theme [md-raised-button].md-accent[disabled], .app-light-theme [md-raised-button].md-warn[disabled], .app-light-theme [md-raised-button][disabled][disabled], .app-light-theme [md-fab].md-primary[disabled], .app-light-theme [md-fab].md-accent[disabled], .app-light-theme [md-fab].md-warn[disabled], .app-light-theme [md-fab][disabled][disabled], .app-light-theme [md-mini-fab].md-primary[disabled], .app-light-theme [md-mini-fab].md-accent[disabled], .app-light-theme [md-mini-fab].md-warn[disabled], .app-light-theme [md-mini-fab][disabled][disabled] {\n    background-color: rgba(0, 0, 0, 0.12); }\n\n.app-light-theme [md-fab], .app-light-theme [md-mini-fab] {\n  background-color: #ff4081;\n  color: white; }\n\n.app-light-theme .md-button-toggle-checked .md-button-toggle-label-content {\n  background-color: #e0e0e0; }\n\n.app-light-theme .md-button-toggle-disabled .md-button-toggle-label-content {\n  background-color: rgba(0, 0, 0, 0.38); }\n\n.app-light-theme md-card {\n  background: white;\n  color: black; }\n\n.app-light-theme md-card-subtitle {\n  color: rgba(0, 0, 0, 0.54); }\n\n.app-light-theme .md-checkbox-frame {\n  border-color: rgba(0, 0, 0, 0.54); }\n\n.app-light-theme .md-checkbox-checkmark {\n  fill: #fafafa; }\n\n.app-light-theme .md-checkbox-checkmark-path {\n  stroke: #fafafa !important; }\n\n.app-light-theme .md-checkbox-mixedmark {\n  background-color: #fafafa; }\n\n.app-light-theme .md-checkbox-indeterminate.md-primary .md-checkbox-background, .app-light-theme .md-checkbox-checked.md-primary .md-checkbox-background {\n  background-color: #3f51b5; }\n\n.app-light-theme .md-checkbox-indeterminate.md-accent .md-checkbox-background, .app-light-theme .md-checkbox-checked.md-accent .md-checkbox-background {\n  background-color: #e91e63; }\n\n.app-light-theme .md-checkbox-indeterminate.md-warn .md-checkbox-background, .app-light-theme .md-checkbox-checked.md-warn .md-checkbox-background {\n  background-color: #f44336; }\n\n.app-light-theme .md-checkbox-disabled.md-checkbox-checked .md-checkbox-background, .app-light-theme .md-checkbox-disabled.md-checkbox-indeterminate .md-checkbox-background {\n  background-color: #b0b0b0; }\n\n.app-light-theme .md-checkbox-disabled:not(.md-checkbox-checked) .md-checkbox-frame {\n  border-color: #b0b0b0; }\n\n.app-light-theme .md-checkbox:not(.md-checkbox-disabled).md-primary .md-checkbox-ripple .md-ripple-foreground {\n  background-color: rgba(63, 81, 181, 0.26); }\n\n.app-light-theme .md-checkbox:not(.md-checkbox-disabled).md-accent .md-checkbox-ripple .md-ripple-foreground {\n  background-color: rgba(255, 64, 129, 0.26); }\n\n.app-light-theme .md-checkbox:not(.md-checkbox-disabled).md-warn .md-checkbox-ripple .md-ripple-foreground {\n  background-color: rgba(244, 67, 54, 0.26); }\n\n.app-light-theme .md-chip:not(.md-basic-chip) {\n  background-color: #e0e0e0;\n  color: rgba(0, 0, 0, 0.87); }\n\n.app-light-theme .md-chip.md-chip-selected:not(.md-basic-chip) {\n  background-color: #808080;\n  color: rgba(255, 255, 255, 0.87); }\n  .app-light-theme .md-chip.md-chip-selected:not(.md-basic-chip).md-primary {\n    background-color: #3f51b5;\n    color: rgba(255, 255, 255, 0.87); }\n  .app-light-theme .md-chip.md-chip-selected:not(.md-basic-chip).md-accent {\n    background-color: #e91e63;\n    color: white; }\n  .app-light-theme .md-chip.md-chip-selected:not(.md-basic-chip).md-warn {\n    background-color: #f44336;\n    color: white; }\n\n.app-light-theme md-dialog-container {\n  background: white; }\n\n.app-light-theme md-icon.md-primary {\n  color: #3f51b5; }\n\n.app-light-theme md-icon.md-accent {\n  color: #ff4081; }\n\n.app-light-theme md-icon.md-warn {\n  color: #f44336; }\n\n.app-light-theme .md-input-placeholder {\n  color: rgba(0, 0, 0, 0.38); }\n  .app-light-theme .md-input-placeholder.md-focused {\n    color: #3f51b5; }\n    .app-light-theme .md-input-placeholder.md-focused.md-accent {\n      color: #ff4081; }\n    .app-light-theme .md-input-placeholder.md-focused.md-warn {\n      color: #f44336; }\n\n.app-light-theme input.md-input-element:-webkit-autofill + .md-input-placeholder .md-placeholder-required,\n.app-light-theme .md-input-placeholder.md-float.md-focused .md-placeholder-required {\n  color: #ff4081; }\n\n.app-light-theme .md-input-underline {\n  border-color: rgba(0, 0, 0, 0.12); }\n  .app-light-theme .md-input-underline .md-input-ripple {\n    background-color: #3f51b5; }\n    .app-light-theme .md-input-underline .md-input-ripple.md-accent {\n      background-color: #ff4081; }\n    .app-light-theme .md-input-underline .md-input-ripple.md-warn {\n      background-color: #f44336; }\n\n.app-light-theme md-list md-list-item, .app-light-theme md-list a[md-list-item], .app-light-theme md-nav-list md-list-item, .app-light-theme md-nav-list a[md-list-item] {\n  color: black; }\n\n.app-light-theme md-list [md-subheader], .app-light-theme md-nav-list [md-subheader] {\n  color: rgba(0, 0, 0, 0.54); }\n\n.app-light-theme md-divider {\n  border-top-color: rgba(0, 0, 0, 0.12); }\n\n.app-light-theme md-nav-list .md-list-item:hover, .app-light-theme md-nav-list .md-list-item.md-list-item-focus {\n  background: rgba(0, 0, 0, 0.04); }\n\n.app-light-theme .md-menu-content {\n  background: white; }\n\n.app-light-theme [md-menu-item] {\n  background: transparent;\n  color: rgba(0, 0, 0, 0.87); }\n  .app-light-theme [md-menu-item][disabled] {\n    color: rgba(0, 0, 0, 0.38); }\n  .app-light-theme [md-menu-item] md-icon {\n    color: rgba(0, 0, 0, 0.54); }\n  .app-light-theme [md-menu-item]:hover:not([disabled]), .app-light-theme [md-menu-item]:focus:not([disabled]) {\n    background: rgba(0, 0, 0, 0.04); }\n\n.app-light-theme .md-progress-bar-background {\n  background: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27#c5cae9%27%2F%3E%3C%2Fsvg%3E\"); }\n\n.app-light-theme .md-progress-bar-buffer {\n  background-color: #c5cae9; }\n\n.app-light-theme .md-progress-bar-fill::after {\n  background-color: #3949ab; }\n\n.app-light-theme md-progress-bar.md-accent .md-progress-bar-background {\n  background: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27#f8bbd0%27%2F%3E%3C%2Fsvg%3E\"); }\n\n.app-light-theme md-progress-bar.md-accent .md-progress-bar-buffer {\n  background-color: #f8bbd0; }\n\n.app-light-theme md-progress-bar.md-accent .md-progress-bar-fill::after {\n  background-color: #d81b60; }\n\n.app-light-theme md-progress-bar.md-warn .md-progress-bar-background {\n  background: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27#ffcdd2%27%2F%3E%3C%2Fsvg%3E\"); }\n\n.app-light-theme md-progress-bar.md-warn .md-progress-bar-buffer {\n  background-color: #ffcdd2; }\n\n.app-light-theme md-progress-bar.md-warn .md-progress-bar-fill::after {\n  background-color: #e53935; }\n\n.app-light-theme md-progress-spinner path, .app-light-theme md-progress-circle path, .app-light-theme md-spinner path {\n  stroke: #3949ab; }\n\n.app-light-theme md-progress-spinner.md-accent path, .app-light-theme md-progress-circle.md-accent path, .app-light-theme md-spinner.md-accent path {\n  stroke: #d81b60; }\n\n.app-light-theme md-progress-spinner.md-warn path, .app-light-theme md-progress-circle.md-warn path, .app-light-theme md-spinner.md-warn path {\n  stroke: #e53935; }\n\n.app-light-theme .md-radio-outer-circle {\n  border-color: rgba(0, 0, 0, 0.54); }\n  .md-radio-checked .app-light-theme .md-radio-outer-circle {\n    border-color: #ff4081; }\n  .md-radio-disabled .app-light-theme .md-radio-outer-circle {\n    border-color: rgba(0, 0, 0, 0.38); }\n\n.app-light-theme .md-radio-inner-circle {\n  background-color: #ff4081; }\n  .md-radio-disabled .app-light-theme .md-radio-inner-circle {\n    background-color: rgba(0, 0, 0, 0.38); }\n\n.app-light-theme .md-radio-ripple .md-ripple-foreground {\n  background-color: rgba(255, 64, 129, 0.26); }\n  .md-radio-disabled .app-light-theme .md-radio-ripple .md-ripple-foreground {\n    background-color: rgba(0, 0, 0, 0.38); }\n\n.app-light-theme .md-select-trigger {\n  color: rgba(0, 0, 0, 0.38);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n  md-select:focus:not(.md-select-disabled) .app-light-theme .md-select-trigger {\n    color: #3f51b5;\n    border-bottom: 1px solid #3f51b5; }\n  md-select.ng-invalid.ng-touched:not(.md-select-disabled) .app-light-theme .md-select-trigger {\n    color: #f44336;\n    border-bottom: 1px solid #f44336; }\n\n.app-light-theme .md-select-arrow {\n  color: rgba(0, 0, 0, 0.38); }\n  md-select:focus:not(.md-select-disabled) .app-light-theme .md-select-arrow {\n    color: #3f51b5; }\n  md-select.ng-invalid.ng-touched:not(.md-select-disabled) .app-light-theme .md-select-arrow {\n    color: #f44336; }\n\n.app-light-theme .md-select-content {\n  background: white; }\n\n.app-light-theme .md-select-value {\n  color: rgba(0, 0, 0, 0.87); }\n  .md-select-disabled .app-light-theme .md-select-value {\n    color: rgba(0, 0, 0, 0.38); }\n\n.app-light-theme md-option:hover:not(.md-option-disabled), .app-light-theme md-option:focus:not(.md-option-disabled) {\n  background: rgba(0, 0, 0, 0.04); }\n\n.app-light-theme md-option.md-selected {\n  background: rgba(0, 0, 0, 0.04);\n  color: #3f51b5; }\n\n.app-light-theme md-option.md-option-disabled {\n  color: rgba(0, 0, 0, 0.38); }\n\n.app-light-theme .md-sidenav-container {\n  background-color: #fafafa;\n  color: rgba(0, 0, 0, 0.87); }\n\n.app-light-theme md-sidenav {\n  background-color: white;\n  color: rgba(0, 0, 0, 0.87); }\n  .app-light-theme md-sidenav.md-sidenav-push {\n    background-color: white; }\n\n.app-light-theme .md-sidenav-backdrop.md-sidenav-shown {\n  background-color: rgba(0, 0, 0, 0.6); }\n\n.app-light-theme md-slide-toggle.md-checked:not(.md-disabled) .md-slide-toggle-thumb {\n  background-color: #e91e63; }\n\n.app-light-theme md-slide-toggle.md-checked:not(.md-disabled) .md-slide-toggle-bar {\n  background-color: rgba(233, 30, 99, 0.5); }\n\n.app-light-theme md-slide-toggle.md-slide-toggle-focused:not(.md-checked) .md-ink-ripple {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.app-light-theme md-slide-toggle.md-slide-toggle-focused .md-ink-ripple {\n  background-color: rgba(233, 30, 99, 0.26); }\n\n.app-light-theme md-slide-toggle.md-primary.md-checked:not(.md-disabled) .md-slide-toggle-thumb {\n  background-color: #3f51b5; }\n\n.app-light-theme md-slide-toggle.md-primary.md-checked:not(.md-disabled) .md-slide-toggle-bar {\n  background-color: rgba(63, 81, 181, 0.5); }\n\n.app-light-theme md-slide-toggle.md-primary.md-slide-toggle-focused:not(.md-checked) .md-ink-ripple {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.app-light-theme md-slide-toggle.md-primary.md-slide-toggle-focused .md-ink-ripple {\n  background-color: rgba(63, 81, 181, 0.26); }\n\n.app-light-theme md-slide-toggle.md-warn.md-checked:not(.md-disabled) .md-slide-toggle-thumb {\n  background-color: #f44336; }\n\n.app-light-theme md-slide-toggle.md-warn.md-checked:not(.md-disabled) .md-slide-toggle-bar {\n  background-color: rgba(244, 67, 54, 0.5); }\n\n.app-light-theme md-slide-toggle.md-warn.md-slide-toggle-focused:not(.md-checked) .md-ink-ripple {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.app-light-theme md-slide-toggle.md-warn.md-slide-toggle-focused .md-ink-ripple {\n  background-color: rgba(244, 67, 54, 0.26); }\n\n.app-light-theme .md-disabled .md-slide-toggle-thumb {\n  background-color: #bdbdbd; }\n\n.app-light-theme .md-disabled .md-slide-toggle-bar {\n  background-color: rgba(0, 0, 0, 0.1); }\n\n.app-light-theme .md-slide-toggle-thumb {\n  background-color: #fafafa; }\n\n.app-light-theme .md-slide-toggle-bar {\n  background-color: rgba(0, 0, 0, 0.38); }\n\n.app-light-theme .md-slider-track {\n  background-color: rgba(0, 0, 0, 0.26); }\n\n.app-light-theme .md-slider-track-fill {\n  background-color: #ff4081; }\n\n.app-light-theme .md-slider-thumb {\n  background-color: #ff4081; }\n\n.app-light-theme .md-slider-thumb-label {\n  background-color: #ff4081; }\n\n.app-light-theme .md-slider-thumb-label-text {\n  color: white; }\n\n.app-light-theme [md-tab-nav-bar],\n.app-light-theme .md-tab-header {\n  border-bottom: 1px solid #e0e0e0; }\n\n.app-light-theme .md-tab-label:focus {\n  background-color: rgba(197, 202, 233, 0.3); }\n\n.app-light-theme md-ink-bar {\n  background-color: #3f51b5; }\n\n.app-light-theme md-toolbar {\n  background: whitesmoke;\n  color: rgba(0, 0, 0, 0.87); }\n  .app-light-theme md-toolbar.md-primary {\n    background: #3f51b5;\n    color: rgba(255, 255, 255, 0.87); }\n  .app-light-theme md-toolbar.md-accent {\n    background: #ff4081;\n    color: white; }\n  .app-light-theme md-toolbar.md-warn {\n    background: #f44336;\n    color: white; }\n\n.app-light-theme .md-tooltip {\n  background: rgba(97, 97, 97, 0.9); }\n\n/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n.md-elevation-z0 {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z1 {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z2 {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z3 {\n  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z4 {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z5 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z6 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z7 {\n  box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z8 {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z9 {\n  box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z10 {\n  box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z11 {\n  box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z12 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z13 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z14 {\n  box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z15 {\n  box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z16 {\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z17 {\n  box-shadow: 0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z18 {\n  box-shadow: 0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z19 {\n  box-shadow: 0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z20 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z21 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z22 {\n  box-shadow: 0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z23 {\n  box-shadow: 0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z24 {\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12); }\n\n[md-ripple] {\n  overflow: hidden; }\n\n[md-ripple].mdRippleUnbounded {\n  overflow: visible; }\n\n.md-ripple-background {\n  background-color: rgba(0, 0, 0, 0.0588);\n  opacity: 0;\n  -webkit-transition: opacity 300ms linear;\n  transition: opacity 300ms linear;\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0; }\n\n.mdRippleUnbounded .md-ripple-background {\n  display: none; }\n\n.md-ripple-background.md-ripple-active {\n  opacity: 1; }\n\n.mdRippleFocused .md-ripple-background {\n  opacity: 1; }\n\n.md-ripple-foreground {\n  background-color: rgba(0, 0, 0, 0.0588);\n  border-radius: 50%;\n  pointer-events: none;\n  opacity: 0.25;\n  position: absolute;\n  -webkit-transition: opacity, -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity, -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1); }\n\n.md-ripple-foreground.md-ripple-fade-in {\n  opacity: 1; }\n\n.md-ripple-foreground.md-ripple-fade-out {\n  opacity: 0; }\n\n.cdk-visually-hidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  text-transform: none;\n  width: 1px; }\n\n.cdk-overlay-container, .cdk-global-overlay-wrapper {\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%; }\n\n.cdk-overlay-container {\n  position: fixed;\n  z-index: 1000; }\n\n.cdk-global-overlay-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: absolute;\n  z-index: 1000; }\n\n.cdk-overlay-pane {\n  position: absolute;\n  pointer-events: auto;\n  box-sizing: border-box;\n  z-index: 1000; }\n\n.cdk-overlay-backdrop {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  pointer-events: auto;\n  -webkit-transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  opacity: 0; }\n  .cdk-overlay-backdrop.cdk-overlay-backdrop-showing {\n    opacity: 0.48; }\n\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.6); }\n\n.cdk-overlay-transparent-backdrop {\n  background: none; }\n\n.app-light-theme .mdRippleFocused .md-ripple-background {\n  background-color: rgba(255, 64, 129, 0.1); }\n\n.app-light-theme [md-button].md-button-focus.md-primary .md-button-focus-overlay, .app-light-theme [md-icon-button].md-button-focus.md-primary .md-button-focus-overlay, .app-light-theme [md-raised-button].md-button-focus.md-primary .md-button-focus-overlay, .app-light-theme [md-fab].md-button-focus.md-primary .md-button-focus-overlay, .app-light-theme [md-mini-fab].md-button-focus.md-primary .md-button-focus-overlay {\n  background-color: rgba(63, 81, 181, 0.12); }\n\n.app-light-theme [md-button].md-button-focus.md-accent .md-button-focus-overlay, .app-light-theme [md-icon-button].md-button-focus.md-accent .md-button-focus-overlay, .app-light-theme [md-raised-button].md-button-focus.md-accent .md-button-focus-overlay, .app-light-theme [md-fab].md-button-focus.md-accent .md-button-focus-overlay, .app-light-theme [md-mini-fab].md-button-focus.md-accent .md-button-focus-overlay {\n  background-color: rgba(255, 64, 129, 0.12); }\n\n.app-light-theme [md-button].md-button-focus.md-warn .md-button-focus-overlay, .app-light-theme [md-icon-button].md-button-focus.md-warn .md-button-focus-overlay, .app-light-theme [md-raised-button].md-button-focus.md-warn .md-button-focus-overlay, .app-light-theme [md-fab].md-button-focus.md-warn .md-button-focus-overlay, .app-light-theme [md-mini-fab].md-button-focus.md-warn .md-button-focus-overlay {\n  background-color: rgba(244, 67, 54, 0.12); }\n\n.app-light-theme [md-button], .app-light-theme [md-icon-button] {\n  background: transparent; }\n  .app-light-theme [md-button].md-primary, .app-light-theme [md-icon-button].md-primary {\n    color: #3f51b5; }\n  .app-light-theme [md-button].md-accent, .app-light-theme [md-icon-button].md-accent {\n    color: #ff4081; }\n  .app-light-theme [md-button].md-warn, .app-light-theme [md-icon-button].md-warn {\n    color: #f44336; }\n  .app-light-theme [md-button].md-primary[disabled], .app-light-theme [md-button].md-accent[disabled], .app-light-theme [md-button].md-warn[disabled], .app-light-theme [md-button][disabled][disabled], .app-light-theme [md-icon-button].md-primary[disabled], .app-light-theme [md-icon-button].md-accent[disabled], .app-light-theme [md-icon-button].md-warn[disabled], .app-light-theme [md-icon-button][disabled][disabled] {\n    color: rgba(0, 0, 0, 0.38); }\n  .app-light-theme [md-button]:hover.md-primary .md-button-focus-overlay, .app-light-theme [md-icon-button]:hover.md-primary .md-button-focus-overlay {\n    background-color: rgba(63, 81, 181, 0.12); }\n  .app-light-theme [md-button]:hover.md-accent .md-button-focus-overlay, .app-light-theme [md-icon-button]:hover.md-accent .md-button-focus-overlay {\n    background-color: rgba(255, 64, 129, 0.12); }\n  .app-light-theme [md-button]:hover.md-warn .md-button-focus-overlay, .app-light-theme [md-icon-button]:hover.md-warn .md-button-focus-overlay {\n    background-color: rgba(244, 67, 54, 0.12); }\n\n.app-light-theme [md-raised-button], .app-light-theme [md-fab], .app-light-theme [md-mini-fab] {\n  background-color: #fafafa; }\n  .app-light-theme [md-raised-button].md-primary, .app-light-theme [md-fab].md-primary, .app-light-theme [md-mini-fab].md-primary {\n    color: rgba(255, 255, 255, 0.87); }\n  .app-light-theme [md-raised-button].md-accent, .app-light-theme [md-fab].md-accent, .app-light-theme [md-mini-fab].md-accent {\n    color: white; }\n  .app-light-theme [md-raised-button].md-warn, .app-light-theme [md-fab].md-warn, .app-light-theme [md-mini-fab].md-warn {\n    color: white; }\n  .app-light-theme [md-raised-button].md-primary[disabled], .app-light-theme [md-raised-button].md-accent[disabled], .app-light-theme [md-raised-button].md-warn[disabled], .app-light-theme [md-raised-button][disabled][disabled], .app-light-theme [md-fab].md-primary[disabled], .app-light-theme [md-fab].md-accent[disabled], .app-light-theme [md-fab].md-warn[disabled], .app-light-theme [md-fab][disabled][disabled], .app-light-theme [md-mini-fab].md-primary[disabled], .app-light-theme [md-mini-fab].md-accent[disabled], .app-light-theme [md-mini-fab].md-warn[disabled], .app-light-theme [md-mini-fab][disabled][disabled] {\n    color: rgba(0, 0, 0, 0.38); }\n  .app-light-theme [md-raised-button].md-primary, .app-light-theme [md-fab].md-primary, .app-light-theme [md-mini-fab].md-primary {\n    background-color: #3f51b5; }\n  .app-light-theme [md-raised-button].md-accent, .app-light-theme [md-fab].md-accent, .app-light-theme [md-mini-fab].md-accent {\n    background-color: #ff4081; }\n  .app-light-theme [md-raised-button].md-warn, .app-light-theme [md-fab].md-warn, .app-light-theme [md-mini-fab].md-warn {\n    background-color: #f44336; }\n  .app-light-theme [md-raised-button].md-primary[disabled], .app-light-theme [md-raised-button].md-accent[disabled], .app-light-theme [md-raised-button].md-warn[disabled], .app-light-theme [md-raised-button][disabled][disabled], .app-light-theme [md-fab].md-primary[disabled], .app-light-theme [md-fab].md-accent[disabled], .app-light-theme [md-fab].md-warn[disabled], .app-light-theme [md-fab][disabled][disabled], .app-light-theme [md-mini-fab].md-primary[disabled], .app-light-theme [md-mini-fab].md-accent[disabled], .app-light-theme [md-mini-fab].md-warn[disabled], .app-light-theme [md-mini-fab][disabled][disabled] {\n    background-color: rgba(0, 0, 0, 0.12); }\n\n.app-light-theme [md-fab], .app-light-theme [md-mini-fab] {\n  background-color: #ff4081;\n  color: white; }\n\n.app-light-theme .md-button-toggle-checked .md-button-toggle-label-content {\n  background-color: #e0e0e0; }\n\n.app-light-theme .md-button-toggle-disabled .md-button-toggle-label-content {\n  background-color: rgba(0, 0, 0, 0.38); }\n\n.app-light-theme md-card {\n  background: white;\n  color: black; }\n\n.app-light-theme md-card-subtitle {\n  color: rgba(0, 0, 0, 0.54); }\n\n.app-light-theme .md-checkbox-frame {\n  border-color: rgba(0, 0, 0, 0.54); }\n\n.app-light-theme .md-checkbox-checkmark {\n  fill: #fafafa; }\n\n.app-light-theme .md-checkbox-checkmark-path {\n  stroke: #fafafa !important; }\n\n.app-light-theme .md-checkbox-mixedmark {\n  background-color: #fafafa; }\n\n.app-light-theme .md-checkbox-indeterminate.md-primary .md-checkbox-background, .app-light-theme .md-checkbox-checked.md-primary .md-checkbox-background {\n  background-color: #3f51b5; }\n\n.app-light-theme .md-checkbox-indeterminate.md-accent .md-checkbox-background, .app-light-theme .md-checkbox-checked.md-accent .md-checkbox-background {\n  background-color: #e91e63; }\n\n.app-light-theme .md-checkbox-indeterminate.md-warn .md-checkbox-background, .app-light-theme .md-checkbox-checked.md-warn .md-checkbox-background {\n  background-color: #f44336; }\n\n.app-light-theme .md-checkbox-disabled.md-checkbox-checked .md-checkbox-background, .app-light-theme .md-checkbox-disabled.md-checkbox-indeterminate .md-checkbox-background {\n  background-color: #b0b0b0; }\n\n.app-light-theme .md-checkbox-disabled:not(.md-checkbox-checked) .md-checkbox-frame {\n  border-color: #b0b0b0; }\n\n.app-light-theme .md-checkbox:not(.md-checkbox-disabled).md-primary .md-checkbox-ripple .md-ripple-foreground {\n  background-color: rgba(63, 81, 181, 0.26); }\n\n.app-light-theme .md-checkbox:not(.md-checkbox-disabled).md-accent .md-checkbox-ripple .md-ripple-foreground {\n  background-color: rgba(255, 64, 129, 0.26); }\n\n.app-light-theme .md-checkbox:not(.md-checkbox-disabled).md-warn .md-checkbox-ripple .md-ripple-foreground {\n  background-color: rgba(244, 67, 54, 0.26); }\n\n.app-light-theme .md-chip:not(.md-basic-chip) {\n  background-color: #e0e0e0;\n  color: rgba(0, 0, 0, 0.87); }\n\n.app-light-theme .md-chip.md-chip-selected:not(.md-basic-chip) {\n  background-color: #808080;\n  color: rgba(255, 255, 255, 0.87); }\n  .app-light-theme .md-chip.md-chip-selected:not(.md-basic-chip).md-primary {\n    background-color: #3f51b5;\n    color: rgba(255, 255, 255, 0.87); }\n  .app-light-theme .md-chip.md-chip-selected:not(.md-basic-chip).md-accent {\n    background-color: #e91e63;\n    color: white; }\n  .app-light-theme .md-chip.md-chip-selected:not(.md-basic-chip).md-warn {\n    background-color: #f44336;\n    color: white; }\n\n.app-light-theme md-dialog-container {\n  background: white; }\n\n.app-light-theme md-icon.md-primary {\n  color: #3f51b5; }\n\n.app-light-theme md-icon.md-accent {\n  color: #ff4081; }\n\n.app-light-theme md-icon.md-warn {\n  color: #f44336; }\n\n.app-light-theme .md-input-placeholder {\n  color: rgba(0, 0, 0, 0.38); }\n  .app-light-theme .md-input-placeholder.md-focused {\n    color: #3f51b5; }\n    .app-light-theme .md-input-placeholder.md-focused.md-accent {\n      color: #ff4081; }\n    .app-light-theme .md-input-placeholder.md-focused.md-warn {\n      color: #f44336; }\n\n.app-light-theme input.md-input-element:-webkit-autofill + .md-input-placeholder .md-placeholder-required,\n.app-light-theme .md-input-placeholder.md-float.md-focused .md-placeholder-required {\n  color: #ff4081; }\n\n.app-light-theme .md-input-underline {\n  border-color: rgba(0, 0, 0, 0.12); }\n  .app-light-theme .md-input-underline .md-input-ripple {\n    background-color: #3f51b5; }\n    .app-light-theme .md-input-underline .md-input-ripple.md-accent {\n      background-color: #ff4081; }\n    .app-light-theme .md-input-underline .md-input-ripple.md-warn {\n      background-color: #f44336; }\n\n.app-light-theme md-list md-list-item, .app-light-theme md-list a[md-list-item], .app-light-theme md-nav-list md-list-item, .app-light-theme md-nav-list a[md-list-item] {\n  color: black; }\n\n.app-light-theme md-list [md-subheader], .app-light-theme md-nav-list [md-subheader] {\n  color: rgba(0, 0, 0, 0.54); }\n\n.app-light-theme md-divider {\n  border-top-color: rgba(0, 0, 0, 0.12); }\n\n.app-light-theme md-nav-list .md-list-item:hover, .app-light-theme md-nav-list .md-list-item.md-list-item-focus {\n  background: rgba(0, 0, 0, 0.04); }\n\n.app-light-theme .md-menu-content {\n  background: white; }\n\n.app-light-theme [md-menu-item] {\n  background: transparent;\n  color: rgba(0, 0, 0, 0.87); }\n  .app-light-theme [md-menu-item][disabled] {\n    color: rgba(0, 0, 0, 0.38); }\n  .app-light-theme [md-menu-item] md-icon {\n    color: rgba(0, 0, 0, 0.54); }\n  .app-light-theme [md-menu-item]:hover:not([disabled]), .app-light-theme [md-menu-item]:focus:not([disabled]) {\n    background: rgba(0, 0, 0, 0.04); }\n\n.app-light-theme .md-progress-bar-background {\n  background: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27#c5cae9%27%2F%3E%3C%2Fsvg%3E\"); }\n\n.app-light-theme .md-progress-bar-buffer {\n  background-color: #c5cae9; }\n\n.app-light-theme .md-progress-bar-fill::after {\n  background-color: #3949ab; }\n\n.app-light-theme md-progress-bar.md-accent .md-progress-bar-background {\n  background: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27#f8bbd0%27%2F%3E%3C%2Fsvg%3E\"); }\n\n.app-light-theme md-progress-bar.md-accent .md-progress-bar-buffer {\n  background-color: #f8bbd0; }\n\n.app-light-theme md-progress-bar.md-accent .md-progress-bar-fill::after {\n  background-color: #d81b60; }\n\n.app-light-theme md-progress-bar.md-warn .md-progress-bar-background {\n  background: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27#ffcdd2%27%2F%3E%3C%2Fsvg%3E\"); }\n\n.app-light-theme md-progress-bar.md-warn .md-progress-bar-buffer {\n  background-color: #ffcdd2; }\n\n.app-light-theme md-progress-bar.md-warn .md-progress-bar-fill::after {\n  background-color: #e53935; }\n\n.app-light-theme md-progress-spinner path, .app-light-theme md-progress-circle path, .app-light-theme md-spinner path {\n  stroke: #3949ab; }\n\n.app-light-theme md-progress-spinner.md-accent path, .app-light-theme md-progress-circle.md-accent path, .app-light-theme md-spinner.md-accent path {\n  stroke: #d81b60; }\n\n.app-light-theme md-progress-spinner.md-warn path, .app-light-theme md-progress-circle.md-warn path, .app-light-theme md-spinner.md-warn path {\n  stroke: #e53935; }\n\n.app-light-theme .md-radio-outer-circle {\n  border-color: rgba(0, 0, 0, 0.54); }\n  .md-radio-checked .app-light-theme .md-radio-outer-circle {\n    border-color: #ff4081; }\n  .md-radio-disabled .app-light-theme .md-radio-outer-circle {\n    border-color: rgba(0, 0, 0, 0.38); }\n\n.app-light-theme .md-radio-inner-circle {\n  background-color: #ff4081; }\n  .md-radio-disabled .app-light-theme .md-radio-inner-circle {\n    background-color: rgba(0, 0, 0, 0.38); }\n\n.app-light-theme .md-radio-ripple .md-ripple-foreground {\n  background-color: rgba(255, 64, 129, 0.26); }\n  .md-radio-disabled .app-light-theme .md-radio-ripple .md-ripple-foreground {\n    background-color: rgba(0, 0, 0, 0.38); }\n\n.app-light-theme .md-select-trigger {\n  color: rgba(0, 0, 0, 0.38);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n  md-select:focus:not(.md-select-disabled) .app-light-theme .md-select-trigger {\n    color: #3f51b5;\n    border-bottom: 1px solid #3f51b5; }\n  md-select.ng-invalid.ng-touched:not(.md-select-disabled) .app-light-theme .md-select-trigger {\n    color: #f44336;\n    border-bottom: 1px solid #f44336; }\n\n.app-light-theme .md-select-arrow {\n  color: rgba(0, 0, 0, 0.38); }\n  md-select:focus:not(.md-select-disabled) .app-light-theme .md-select-arrow {\n    color: #3f51b5; }\n  md-select.ng-invalid.ng-touched:not(.md-select-disabled) .app-light-theme .md-select-arrow {\n    color: #f44336; }\n\n.app-light-theme .md-select-content {\n  background: white; }\n\n.app-light-theme .md-select-value {\n  color: rgba(0, 0, 0, 0.87); }\n  .md-select-disabled .app-light-theme .md-select-value {\n    color: rgba(0, 0, 0, 0.38); }\n\n.app-light-theme md-option:hover:not(.md-option-disabled), .app-light-theme md-option:focus:not(.md-option-disabled) {\n  background: rgba(0, 0, 0, 0.04); }\n\n.app-light-theme md-option.md-selected {\n  background: rgba(0, 0, 0, 0.04);\n  color: #3f51b5; }\n\n.app-light-theme md-option.md-option-disabled {\n  color: rgba(0, 0, 0, 0.38); }\n\n.app-light-theme .md-sidenav-container {\n  background-color: #fafafa;\n  color: rgba(0, 0, 0, 0.87); }\n\n.app-light-theme md-sidenav {\n  background-color: white;\n  color: rgba(0, 0, 0, 0.87); }\n  .app-light-theme md-sidenav.md-sidenav-push {\n    background-color: white; }\n\n.app-light-theme .md-sidenav-backdrop.md-sidenav-shown {\n  background-color: rgba(0, 0, 0, 0.6); }\n\n.app-light-theme md-slide-toggle.md-checked:not(.md-disabled) .md-slide-toggle-thumb {\n  background-color: #e91e63; }\n\n.app-light-theme md-slide-toggle.md-checked:not(.md-disabled) .md-slide-toggle-bar {\n  background-color: rgba(233, 30, 99, 0.5); }\n\n.app-light-theme md-slide-toggle.md-slide-toggle-focused:not(.md-checked) .md-ink-ripple {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.app-light-theme md-slide-toggle.md-slide-toggle-focused .md-ink-ripple {\n  background-color: rgba(233, 30, 99, 0.26); }\n\n.app-light-theme md-slide-toggle.md-primary.md-checked:not(.md-disabled) .md-slide-toggle-thumb {\n  background-color: #3f51b5; }\n\n.app-light-theme md-slide-toggle.md-primary.md-checked:not(.md-disabled) .md-slide-toggle-bar {\n  background-color: rgba(63, 81, 181, 0.5); }\n\n.app-light-theme md-slide-toggle.md-primary.md-slide-toggle-focused:not(.md-checked) .md-ink-ripple {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.app-light-theme md-slide-toggle.md-primary.md-slide-toggle-focused .md-ink-ripple {\n  background-color: rgba(63, 81, 181, 0.26); }\n\n.app-light-theme md-slide-toggle.md-warn.md-checked:not(.md-disabled) .md-slide-toggle-thumb {\n  background-color: #f44336; }\n\n.app-light-theme md-slide-toggle.md-warn.md-checked:not(.md-disabled) .md-slide-toggle-bar {\n  background-color: rgba(244, 67, 54, 0.5); }\n\n.app-light-theme md-slide-toggle.md-warn.md-slide-toggle-focused:not(.md-checked) .md-ink-ripple {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.app-light-theme md-slide-toggle.md-warn.md-slide-toggle-focused .md-ink-ripple {\n  background-color: rgba(244, 67, 54, 0.26); }\n\n.app-light-theme .md-disabled .md-slide-toggle-thumb {\n  background-color: #bdbdbd; }\n\n.app-light-theme .md-disabled .md-slide-toggle-bar {\n  background-color: rgba(0, 0, 0, 0.1); }\n\n.app-light-theme .md-slide-toggle-thumb {\n  background-color: #fafafa; }\n\n.app-light-theme .md-slide-toggle-bar {\n  background-color: rgba(0, 0, 0, 0.38); }\n\n.app-light-theme .md-slider-track {\n  background-color: rgba(0, 0, 0, 0.26); }\n\n.app-light-theme .md-slider-track-fill {\n  background-color: #ff4081; }\n\n.app-light-theme .md-slider-thumb {\n  background-color: #ff4081; }\n\n.app-light-theme .md-slider-thumb-label {\n  background-color: #ff4081; }\n\n.app-light-theme .md-slider-thumb-label-text {\n  color: white; }\n\n.app-light-theme [md-tab-nav-bar],\n.app-light-theme .md-tab-header {\n  border-bottom: 1px solid #e0e0e0; }\n\n.app-light-theme .md-tab-label:focus {\n  background-color: rgba(197, 202, 233, 0.3); }\n\n.app-light-theme md-ink-bar {\n  background-color: #3f51b5; }\n\n.app-light-theme md-toolbar {\n  background: whitesmoke;\n  color: rgba(0, 0, 0, 0.87); }\n  .app-light-theme md-toolbar.md-primary {\n    background: #3f51b5;\n    color: rgba(255, 255, 255, 0.87); }\n  .app-light-theme md-toolbar.md-accent {\n    background: #ff4081;\n    color: white; }\n  .app-light-theme md-toolbar.md-warn {\n    background: #f44336;\n    color: white; }\n\n.app-light-theme .md-tooltip {\n  background: rgba(97, 97, 97, 0.9); }\n\nbody * {\n  font-family: Roboto,\"Helvetica Neue\",sans-serif;\n  font-size: 1em; }\n\nmd-nav-list .md-list-item:hover {\n  color: #3f51b5; }\n\nbody {\n  overflow: hidden;\n  margin: 0;\n  width: 100vw;\n  height: 100vh; }\n\n.right {\n  margin-left: auto !important; }\n\napp-root {\n  display: inherit;\n  height: 100vh;\n  width: 100vw;\n  overflow: hidden; }\n  app-root .app-header a.header-title {\n    font-size: 20px;\n    font-weight: 400;\n    font-family: Roboto,\"Helvetica Neue\",sans-serif; }\n  app-root .app-header a:hover {\n    cursor: pointer; }\n  app-root .app-content {\n    display: inherit;\n    overflow-y: auto;\n    max-height: calc(100vh - 64px);\n    height: calc(100vh - 64px); }\n    app-root .app-content > *:not(router-outlet) {\n      display: inherit;\n      overflow-y: auto;\n      max-height: 100%;\n      height: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 907:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)();
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n.md-elevation-z0 {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z1 {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z2 {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z3 {\n  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z4 {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z5 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z6 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z7 {\n  box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z8 {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z9 {\n  box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z10 {\n  box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z11 {\n  box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z12 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z13 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z14 {\n  box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z15 {\n  box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z16 {\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z17 {\n  box-shadow: 0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z18 {\n  box-shadow: 0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z19 {\n  box-shadow: 0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z20 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z21 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z22 {\n  box-shadow: 0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z23 {\n  box-shadow: 0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z24 {\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12); }\n\n[md-ripple] {\n  overflow: hidden; }\n\n[md-ripple].mdRippleUnbounded {\n  overflow: visible; }\n\n.md-ripple-background {\n  background-color: rgba(0, 0, 0, 0.0588);\n  opacity: 0;\n  -webkit-transition: opacity 300ms linear;\n  transition: opacity 300ms linear;\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0; }\n\n.mdRippleUnbounded .md-ripple-background {\n  display: none; }\n\n.md-ripple-background.md-ripple-active {\n  opacity: 1; }\n\n.mdRippleFocused .md-ripple-background {\n  opacity: 1; }\n\n.md-ripple-foreground {\n  background-color: rgba(0, 0, 0, 0.0588);\n  border-radius: 50%;\n  pointer-events: none;\n  opacity: 0.25;\n  position: absolute;\n  -webkit-transition: opacity, -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity, -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1); }\n\n.md-ripple-foreground.md-ripple-fade-in {\n  opacity: 1; }\n\n.md-ripple-foreground.md-ripple-fade-out {\n  opacity: 0; }\n\n.cdk-visually-hidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  text-transform: none;\n  width: 1px; }\n\n.cdk-overlay-container, .cdk-global-overlay-wrapper {\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%; }\n\n.cdk-overlay-container {\n  position: fixed;\n  z-index: 1000; }\n\n.cdk-global-overlay-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: absolute;\n  z-index: 1000; }\n\n.cdk-overlay-pane {\n  position: absolute;\n  pointer-events: auto;\n  box-sizing: border-box;\n  z-index: 1000; }\n\n.cdk-overlay-backdrop {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  pointer-events: auto;\n  -webkit-transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  opacity: 0; }\n  .cdk-overlay-backdrop.cdk-overlay-backdrop-showing {\n    opacity: 0.48; }\n\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.6); }\n\n.cdk-overlay-transparent-backdrop {\n  background: none; }\n\n.app-light-theme .mdRippleFocused .md-ripple-background {\n  background-color: rgba(255, 64, 129, 0.1); }\n\n.app-light-theme [md-button].md-button-focus.md-primary .md-button-focus-overlay, .app-light-theme [md-icon-button].md-button-focus.md-primary .md-button-focus-overlay, .app-light-theme [md-raised-button].md-button-focus.md-primary .md-button-focus-overlay, .app-light-theme [md-fab].md-button-focus.md-primary .md-button-focus-overlay, .app-light-theme [md-mini-fab].md-button-focus.md-primary .md-button-focus-overlay {\n  background-color: rgba(63, 81, 181, 0.12); }\n\n.app-light-theme [md-button].md-button-focus.md-accent .md-button-focus-overlay, .app-light-theme [md-icon-button].md-button-focus.md-accent .md-button-focus-overlay, .app-light-theme [md-raised-button].md-button-focus.md-accent .md-button-focus-overlay, .app-light-theme [md-fab].md-button-focus.md-accent .md-button-focus-overlay, .app-light-theme [md-mini-fab].md-button-focus.md-accent .md-button-focus-overlay {\n  background-color: rgba(255, 64, 129, 0.12); }\n\n.app-light-theme [md-button].md-button-focus.md-warn .md-button-focus-overlay, .app-light-theme [md-icon-button].md-button-focus.md-warn .md-button-focus-overlay, .app-light-theme [md-raised-button].md-button-focus.md-warn .md-button-focus-overlay, .app-light-theme [md-fab].md-button-focus.md-warn .md-button-focus-overlay, .app-light-theme [md-mini-fab].md-button-focus.md-warn .md-button-focus-overlay {\n  background-color: rgba(244, 67, 54, 0.12); }\n\n.app-light-theme [md-button], .app-light-theme [md-icon-button] {\n  background: transparent; }\n  .app-light-theme [md-button].md-primary, .app-light-theme [md-icon-button].md-primary {\n    color: #3f51b5; }\n  .app-light-theme [md-button].md-accent, .app-light-theme [md-icon-button].md-accent {\n    color: #ff4081; }\n  .app-light-theme [md-button].md-warn, .app-light-theme [md-icon-button].md-warn {\n    color: #f44336; }\n  .app-light-theme [md-button].md-primary[disabled], .app-light-theme [md-button].md-accent[disabled], .app-light-theme [md-button].md-warn[disabled], .app-light-theme [md-button][disabled][disabled], .app-light-theme [md-icon-button].md-primary[disabled], .app-light-theme [md-icon-button].md-accent[disabled], .app-light-theme [md-icon-button].md-warn[disabled], .app-light-theme [md-icon-button][disabled][disabled] {\n    color: rgba(0, 0, 0, 0.38); }\n  .app-light-theme [md-button]:hover.md-primary .md-button-focus-overlay, .app-light-theme [md-icon-button]:hover.md-primary .md-button-focus-overlay {\n    background-color: rgba(63, 81, 181, 0.12); }\n  .app-light-theme [md-button]:hover.md-accent .md-button-focus-overlay, .app-light-theme [md-icon-button]:hover.md-accent .md-button-focus-overlay {\n    background-color: rgba(255, 64, 129, 0.12); }\n  .app-light-theme [md-button]:hover.md-warn .md-button-focus-overlay, .app-light-theme [md-icon-button]:hover.md-warn .md-button-focus-overlay {\n    background-color: rgba(244, 67, 54, 0.12); }\n\n.app-light-theme [md-raised-button], .app-light-theme [md-fab], .app-light-theme [md-mini-fab] {\n  background-color: #fafafa; }\n  .app-light-theme [md-raised-button].md-primary, .app-light-theme [md-fab].md-primary, .app-light-theme [md-mini-fab].md-primary {\n    color: rgba(255, 255, 255, 0.87); }\n  .app-light-theme [md-raised-button].md-accent, .app-light-theme [md-fab].md-accent, .app-light-theme [md-mini-fab].md-accent {\n    color: white; }\n  .app-light-theme [md-raised-button].md-warn, .app-light-theme [md-fab].md-warn, .app-light-theme [md-mini-fab].md-warn {\n    color: white; }\n  .app-light-theme [md-raised-button].md-primary[disabled], .app-light-theme [md-raised-button].md-accent[disabled], .app-light-theme [md-raised-button].md-warn[disabled], .app-light-theme [md-raised-button][disabled][disabled], .app-light-theme [md-fab].md-primary[disabled], .app-light-theme [md-fab].md-accent[disabled], .app-light-theme [md-fab].md-warn[disabled], .app-light-theme [md-fab][disabled][disabled], .app-light-theme [md-mini-fab].md-primary[disabled], .app-light-theme [md-mini-fab].md-accent[disabled], .app-light-theme [md-mini-fab].md-warn[disabled], .app-light-theme [md-mini-fab][disabled][disabled] {\n    color: rgba(0, 0, 0, 0.38); }\n  .app-light-theme [md-raised-button].md-primary, .app-light-theme [md-fab].md-primary, .app-light-theme [md-mini-fab].md-primary {\n    background-color: #3f51b5; }\n  .app-light-theme [md-raised-button].md-accent, .app-light-theme [md-fab].md-accent, .app-light-theme [md-mini-fab].md-accent {\n    background-color: #ff4081; }\n  .app-light-theme [md-raised-button].md-warn, .app-light-theme [md-fab].md-warn, .app-light-theme [md-mini-fab].md-warn {\n    background-color: #f44336; }\n  .app-light-theme [md-raised-button].md-primary[disabled], .app-light-theme [md-raised-button].md-accent[disabled], .app-light-theme [md-raised-button].md-warn[disabled], .app-light-theme [md-raised-button][disabled][disabled], .app-light-theme [md-fab].md-primary[disabled], .app-light-theme [md-fab].md-accent[disabled], .app-light-theme [md-fab].md-warn[disabled], .app-light-theme [md-fab][disabled][disabled], .app-light-theme [md-mini-fab].md-primary[disabled], .app-light-theme [md-mini-fab].md-accent[disabled], .app-light-theme [md-mini-fab].md-warn[disabled], .app-light-theme [md-mini-fab][disabled][disabled] {\n    background-color: rgba(0, 0, 0, 0.12); }\n\n.app-light-theme [md-fab], .app-light-theme [md-mini-fab] {\n  background-color: #ff4081;\n  color: white; }\n\n.app-light-theme .md-button-toggle-checked .md-button-toggle-label-content {\n  background-color: #e0e0e0; }\n\n.app-light-theme .md-button-toggle-disabled .md-button-toggle-label-content {\n  background-color: rgba(0, 0, 0, 0.38); }\n\n.app-light-theme md-card {\n  background: white;\n  color: black; }\n\n.app-light-theme md-card-subtitle {\n  color: rgba(0, 0, 0, 0.54); }\n\n.app-light-theme .md-checkbox-frame {\n  border-color: rgba(0, 0, 0, 0.54); }\n\n.app-light-theme .md-checkbox-checkmark {\n  fill: #fafafa; }\n\n.app-light-theme .md-checkbox-checkmark-path {\n  stroke: #fafafa !important; }\n\n.app-light-theme .md-checkbox-mixedmark {\n  background-color: #fafafa; }\n\n.app-light-theme .md-checkbox-indeterminate.md-primary .md-checkbox-background, .app-light-theme .md-checkbox-checked.md-primary .md-checkbox-background {\n  background-color: #3f51b5; }\n\n.app-light-theme .md-checkbox-indeterminate.md-accent .md-checkbox-background, .app-light-theme .md-checkbox-checked.md-accent .md-checkbox-background {\n  background-color: #e91e63; }\n\n.app-light-theme .md-checkbox-indeterminate.md-warn .md-checkbox-background, .app-light-theme .md-checkbox-checked.md-warn .md-checkbox-background {\n  background-color: #f44336; }\n\n.app-light-theme .md-checkbox-disabled.md-checkbox-checked .md-checkbox-background, .app-light-theme .md-checkbox-disabled.md-checkbox-indeterminate .md-checkbox-background {\n  background-color: #b0b0b0; }\n\n.app-light-theme .md-checkbox-disabled:not(.md-checkbox-checked) .md-checkbox-frame {\n  border-color: #b0b0b0; }\n\n.app-light-theme .md-checkbox:not(.md-checkbox-disabled).md-primary .md-checkbox-ripple .md-ripple-foreground {\n  background-color: rgba(63, 81, 181, 0.26); }\n\n.app-light-theme .md-checkbox:not(.md-checkbox-disabled).md-accent .md-checkbox-ripple .md-ripple-foreground {\n  background-color: rgba(255, 64, 129, 0.26); }\n\n.app-light-theme .md-checkbox:not(.md-checkbox-disabled).md-warn .md-checkbox-ripple .md-ripple-foreground {\n  background-color: rgba(244, 67, 54, 0.26); }\n\n.app-light-theme .md-chip:not(.md-basic-chip) {\n  background-color: #e0e0e0;\n  color: rgba(0, 0, 0, 0.87); }\n\n.app-light-theme .md-chip.md-chip-selected:not(.md-basic-chip) {\n  background-color: #808080;\n  color: rgba(255, 255, 255, 0.87); }\n  .app-light-theme .md-chip.md-chip-selected:not(.md-basic-chip).md-primary {\n    background-color: #3f51b5;\n    color: rgba(255, 255, 255, 0.87); }\n  .app-light-theme .md-chip.md-chip-selected:not(.md-basic-chip).md-accent {\n    background-color: #e91e63;\n    color: white; }\n  .app-light-theme .md-chip.md-chip-selected:not(.md-basic-chip).md-warn {\n    background-color: #f44336;\n    color: white; }\n\n.app-light-theme md-dialog-container {\n  background: white; }\n\n.app-light-theme md-icon.md-primary {\n  color: #3f51b5; }\n\n.app-light-theme md-icon.md-accent {\n  color: #ff4081; }\n\n.app-light-theme md-icon.md-warn {\n  color: #f44336; }\n\n.app-light-theme .md-input-placeholder {\n  color: rgba(0, 0, 0, 0.38); }\n  .app-light-theme .md-input-placeholder.md-focused {\n    color: #3f51b5; }\n    .app-light-theme .md-input-placeholder.md-focused.md-accent {\n      color: #ff4081; }\n    .app-light-theme .md-input-placeholder.md-focused.md-warn {\n      color: #f44336; }\n\n.app-light-theme input.md-input-element:-webkit-autofill + .md-input-placeholder .md-placeholder-required,\n.app-light-theme .md-input-placeholder.md-float.md-focused .md-placeholder-required {\n  color: #ff4081; }\n\n.app-light-theme .md-input-underline {\n  border-color: rgba(0, 0, 0, 0.12); }\n  .app-light-theme .md-input-underline .md-input-ripple {\n    background-color: #3f51b5; }\n    .app-light-theme .md-input-underline .md-input-ripple.md-accent {\n      background-color: #ff4081; }\n    .app-light-theme .md-input-underline .md-input-ripple.md-warn {\n      background-color: #f44336; }\n\n.app-light-theme md-list md-list-item, .app-light-theme md-list a[md-list-item], .app-light-theme md-nav-list md-list-item, .app-light-theme md-nav-list a[md-list-item] {\n  color: black; }\n\n.app-light-theme md-list [md-subheader], .app-light-theme md-nav-list [md-subheader] {\n  color: rgba(0, 0, 0, 0.54); }\n\n.app-light-theme md-divider {\n  border-top-color: rgba(0, 0, 0, 0.12); }\n\n.app-light-theme md-nav-list .md-list-item:hover, .app-light-theme md-nav-list .md-list-item.md-list-item-focus {\n  background: rgba(0, 0, 0, 0.04); }\n\n.app-light-theme .md-menu-content {\n  background: white; }\n\n.app-light-theme [md-menu-item] {\n  background: transparent;\n  color: rgba(0, 0, 0, 0.87); }\n  .app-light-theme [md-menu-item][disabled] {\n    color: rgba(0, 0, 0, 0.38); }\n  .app-light-theme [md-menu-item] md-icon {\n    color: rgba(0, 0, 0, 0.54); }\n  .app-light-theme [md-menu-item]:hover:not([disabled]), .app-light-theme [md-menu-item]:focus:not([disabled]) {\n    background: rgba(0, 0, 0, 0.04); }\n\n.app-light-theme .md-progress-bar-background {\n  background: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27#c5cae9%27%2F%3E%3C%2Fsvg%3E\"); }\n\n.app-light-theme .md-progress-bar-buffer {\n  background-color: #c5cae9; }\n\n.app-light-theme .md-progress-bar-fill::after {\n  background-color: #3949ab; }\n\n.app-light-theme md-progress-bar.md-accent .md-progress-bar-background {\n  background: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27#f8bbd0%27%2F%3E%3C%2Fsvg%3E\"); }\n\n.app-light-theme md-progress-bar.md-accent .md-progress-bar-buffer {\n  background-color: #f8bbd0; }\n\n.app-light-theme md-progress-bar.md-accent .md-progress-bar-fill::after {\n  background-color: #d81b60; }\n\n.app-light-theme md-progress-bar.md-warn .md-progress-bar-background {\n  background: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27#ffcdd2%27%2F%3E%3C%2Fsvg%3E\"); }\n\n.app-light-theme md-progress-bar.md-warn .md-progress-bar-buffer {\n  background-color: #ffcdd2; }\n\n.app-light-theme md-progress-bar.md-warn .md-progress-bar-fill::after {\n  background-color: #e53935; }\n\n.app-light-theme md-progress-spinner path, .app-light-theme md-progress-circle path, .app-light-theme md-spinner path {\n  stroke: #3949ab; }\n\n.app-light-theme md-progress-spinner.md-accent path, .app-light-theme md-progress-circle.md-accent path, .app-light-theme md-spinner.md-accent path {\n  stroke: #d81b60; }\n\n.app-light-theme md-progress-spinner.md-warn path, .app-light-theme md-progress-circle.md-warn path, .app-light-theme md-spinner.md-warn path {\n  stroke: #e53935; }\n\n.app-light-theme .md-radio-outer-circle {\n  border-color: rgba(0, 0, 0, 0.54); }\n  .md-radio-checked .app-light-theme .md-radio-outer-circle {\n    border-color: #ff4081; }\n  .md-radio-disabled .app-light-theme .md-radio-outer-circle {\n    border-color: rgba(0, 0, 0, 0.38); }\n\n.app-light-theme .md-radio-inner-circle {\n  background-color: #ff4081; }\n  .md-radio-disabled .app-light-theme .md-radio-inner-circle {\n    background-color: rgba(0, 0, 0, 0.38); }\n\n.app-light-theme .md-radio-ripple .md-ripple-foreground {\n  background-color: rgba(255, 64, 129, 0.26); }\n  .md-radio-disabled .app-light-theme .md-radio-ripple .md-ripple-foreground {\n    background-color: rgba(0, 0, 0, 0.38); }\n\n.app-light-theme .md-select-trigger {\n  color: rgba(0, 0, 0, 0.38);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n  md-select:focus:not(.md-select-disabled) .app-light-theme .md-select-trigger {\n    color: #3f51b5;\n    border-bottom: 1px solid #3f51b5; }\n  md-select.ng-invalid.ng-touched:not(.md-select-disabled) .app-light-theme .md-select-trigger {\n    color: #f44336;\n    border-bottom: 1px solid #f44336; }\n\n.app-light-theme .md-select-arrow {\n  color: rgba(0, 0, 0, 0.38); }\n  md-select:focus:not(.md-select-disabled) .app-light-theme .md-select-arrow {\n    color: #3f51b5; }\n  md-select.ng-invalid.ng-touched:not(.md-select-disabled) .app-light-theme .md-select-arrow {\n    color: #f44336; }\n\n.app-light-theme .md-select-content {\n  background: white; }\n\n.app-light-theme .md-select-value {\n  color: rgba(0, 0, 0, 0.87); }\n  .md-select-disabled .app-light-theme .md-select-value {\n    color: rgba(0, 0, 0, 0.38); }\n\n.app-light-theme md-option:hover:not(.md-option-disabled), .app-light-theme md-option:focus:not(.md-option-disabled) {\n  background: rgba(0, 0, 0, 0.04); }\n\n.app-light-theme md-option.md-selected {\n  background: rgba(0, 0, 0, 0.04);\n  color: #3f51b5; }\n\n.app-light-theme md-option.md-option-disabled {\n  color: rgba(0, 0, 0, 0.38); }\n\n.app-light-theme .md-sidenav-container {\n  background-color: #fafafa;\n  color: rgba(0, 0, 0, 0.87); }\n\n.app-light-theme md-sidenav {\n  background-color: white;\n  color: rgba(0, 0, 0, 0.87); }\n  .app-light-theme md-sidenav.md-sidenav-push {\n    background-color: white; }\n\n.app-light-theme .md-sidenav-backdrop.md-sidenav-shown {\n  background-color: rgba(0, 0, 0, 0.6); }\n\n.app-light-theme md-slide-toggle.md-checked:not(.md-disabled) .md-slide-toggle-thumb {\n  background-color: #e91e63; }\n\n.app-light-theme md-slide-toggle.md-checked:not(.md-disabled) .md-slide-toggle-bar {\n  background-color: rgba(233, 30, 99, 0.5); }\n\n.app-light-theme md-slide-toggle.md-slide-toggle-focused:not(.md-checked) .md-ink-ripple {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.app-light-theme md-slide-toggle.md-slide-toggle-focused .md-ink-ripple {\n  background-color: rgba(233, 30, 99, 0.26); }\n\n.app-light-theme md-slide-toggle.md-primary.md-checked:not(.md-disabled) .md-slide-toggle-thumb {\n  background-color: #3f51b5; }\n\n.app-light-theme md-slide-toggle.md-primary.md-checked:not(.md-disabled) .md-slide-toggle-bar {\n  background-color: rgba(63, 81, 181, 0.5); }\n\n.app-light-theme md-slide-toggle.md-primary.md-slide-toggle-focused:not(.md-checked) .md-ink-ripple {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.app-light-theme md-slide-toggle.md-primary.md-slide-toggle-focused .md-ink-ripple {\n  background-color: rgba(63, 81, 181, 0.26); }\n\n.app-light-theme md-slide-toggle.md-warn.md-checked:not(.md-disabled) .md-slide-toggle-thumb {\n  background-color: #f44336; }\n\n.app-light-theme md-slide-toggle.md-warn.md-checked:not(.md-disabled) .md-slide-toggle-bar {\n  background-color: rgba(244, 67, 54, 0.5); }\n\n.app-light-theme md-slide-toggle.md-warn.md-slide-toggle-focused:not(.md-checked) .md-ink-ripple {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.app-light-theme md-slide-toggle.md-warn.md-slide-toggle-focused .md-ink-ripple {\n  background-color: rgba(244, 67, 54, 0.26); }\n\n.app-light-theme .md-disabled .md-slide-toggle-thumb {\n  background-color: #bdbdbd; }\n\n.app-light-theme .md-disabled .md-slide-toggle-bar {\n  background-color: rgba(0, 0, 0, 0.1); }\n\n.app-light-theme .md-slide-toggle-thumb {\n  background-color: #fafafa; }\n\n.app-light-theme .md-slide-toggle-bar {\n  background-color: rgba(0, 0, 0, 0.38); }\n\n.app-light-theme .md-slider-track {\n  background-color: rgba(0, 0, 0, 0.26); }\n\n.app-light-theme .md-slider-track-fill {\n  background-color: #ff4081; }\n\n.app-light-theme .md-slider-thumb {\n  background-color: #ff4081; }\n\n.app-light-theme .md-slider-thumb-label {\n  background-color: #ff4081; }\n\n.app-light-theme .md-slider-thumb-label-text {\n  color: white; }\n\n.app-light-theme [md-tab-nav-bar],\n.app-light-theme .md-tab-header {\n  border-bottom: 1px solid #e0e0e0; }\n\n.app-light-theme .md-tab-label:focus {\n  background-color: rgba(197, 202, 233, 0.3); }\n\n.app-light-theme md-ink-bar {\n  background-color: #3f51b5; }\n\n.app-light-theme md-toolbar {\n  background: whitesmoke;\n  color: rgba(0, 0, 0, 0.87); }\n  .app-light-theme md-toolbar.md-primary {\n    background: #3f51b5;\n    color: rgba(255, 255, 255, 0.87); }\n  .app-light-theme md-toolbar.md-accent {\n    background: #ff4081;\n    color: white; }\n  .app-light-theme md-toolbar.md-warn {\n    background: #f44336;\n    color: white; }\n\n.app-light-theme .md-tooltip {\n  background: rgba(97, 97, 97, 0.9); }\n\n.home-page {\n  height: calc(100vh - 64px); }\n  .home-page .presentation-image {\n    height: 60%;\n    max-height: 60%;\n    background-color: #3f51b5; }\n  .home-page .get-started {\n    height: 40%;\n    max-height: 40%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n    .home-page .get-started > div {\n      padding-bottom: 10px; }\n    .home-page .get-started button {\n      height: 50px; }\n\n/* Portrait and Landscape */\n@media (max-device-width: 1280px) {\n  .home-page {\n    padding-left: 0 !important;\n    padding-right: 0 !important; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 908:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)();
// imports


// module
exports.push([module.i, "api-class-renderer .class-definition {\n  padding: 1em;\n  background-color: #424242;\n  color: white;\n  margin: 1em 0; }\n  api-class-renderer .class-definition .class-name .interface {\n    color: #569CD6; }\n  api-class-renderer .class-definition .class-name .interface-name {\n    color: #4EC9B0; }\n  api-class-renderer .class-definition .class-title {\n    padding-bottom: 0.5em;\n    font-size: 1.5em; }\n  api-class-renderer .class-definition .class-props {\n    padding-left: 2em;\n    padding-top: 0.3em;\n    padding-bottom: 0.3em; }\n    api-class-renderer .class-definition .class-props .class-prop {\n      color: #9CDCFE; }\n    api-class-renderer .class-definition .class-props .class-prop-interface {\n      color: #4EC9B0; }\n    api-class-renderer .class-definition .class-props .class-prop-comment {\n      color: #608B4E; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 909:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)();
// imports


// module
exports.push([module.i, "api-component-presentation .presentation {\n  padding-bottom: 2em;\n  overflow: hidden; }\n  api-component-presentation .presentation .short-title {\n    font-size: 2em;\n    padding: 1em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 910:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)();
// imports


// module
exports.push([module.i, "api-description-renderer .description-container {\n  padding: 1em;\n  background-color: #424242;\n  color: white; }\n  api-description-renderer .description-container .description-title {\n    font-size: 1.5em; }\n  api-description-renderer .description-container .description-body {\n    line-height: 1.3em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 911:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)();
// imports


// module
exports.push([module.i, "api-list-renderer .list-container {\n  padding-top: 1em;\n  padding-bottom: 1em;\n  padding-left: 1em;\n  background-color: #424242;\n  color: white;\n  margin: 1em 0; }\n  api-list-renderer .list-container .list-title {\n    font-size: 1.5em; }\n  api-list-renderer .list-container .list-item {\n    padding-left: 2em;\n    padding-top: 0.3em;\n    padding-bottom: 0.3em; }\n\n@media only screen and (min-device-width: 320px) and (max-device-width: 767px) {\n  api-list-renderer .list-container .list-title {\n    font-size: 1.2em; } }\n\n@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {\n  api-list-renderer .list-container {\n    font-size: 1.2em; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 912:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)();
// imports


// module
exports.push([module.i, ".api-reference-reader {\n  min-width: 400px; }\n  .api-reference-reader .header {\n    padding: 1em;\n    font-size: 2em; }\n  .api-reference-reader .table-container {\n    width: 100%;\n    padding-top: 1em; }\n  .api-reference-reader .api-details-container {\n    width: 100%;\n    padding: 1.5em 0; }\n\nng-table table {\n  margin: 0 auto;\n  clear: both;\n  border-collapse: separate;\n  border-spacing: 0;\n  border: 1px solid #eceeef; }\n\nng-table thead {\n  display: table-header-group;\n  vertical-align: middle;\n  border-color: inherit; }\n  ng-table thead tr {\n    display: table-row;\n    vertical-align: inherit;\n    border-color: inherit; }\n  ng-table thead th,\n  ng-table thead td {\n    padding: 10px 18px;\n    border-bottom: 1px solid #111;\n    font-weight: bold; }\n\nng-table tbody tr {\n  display: table-row;\n  vertical-align: inherit;\n  border-color: inherit;\n  background-color: #ffffff; }\n  ng-table tbody tr:nth-of-type(odd) {\n    background-color: #f9f9f9; }\n\nng-table td,\nng-table th {\n  border: 1px solid #eceeef;\n  font-size: 1em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 913:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)();
// imports


// module
exports.push([module.i, "autocomplete-example ngt-autocomplete {\n  width: 400px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 914:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)();
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n.md-elevation-z0 {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z1 {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z2 {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z3 {\n  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z4 {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z5 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z6 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z7 {\n  box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z8 {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z9 {\n  box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z10 {\n  box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z11 {\n  box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z12 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z13 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z14 {\n  box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z15 {\n  box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z16 {\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z17 {\n  box-shadow: 0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z18 {\n  box-shadow: 0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z19 {\n  box-shadow: 0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z20 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z21 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z22 {\n  box-shadow: 0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z23 {\n  box-shadow: 0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12); }\n\n.md-elevation-z24 {\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12); }\n\n[md-ripple] {\n  overflow: hidden; }\n\n[md-ripple].mdRippleUnbounded {\n  overflow: visible; }\n\n.md-ripple-background {\n  background-color: rgba(0, 0, 0, 0.0588);\n  opacity: 0;\n  -webkit-transition: opacity 300ms linear;\n  transition: opacity 300ms linear;\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0; }\n\n.mdRippleUnbounded .md-ripple-background {\n  display: none; }\n\n.md-ripple-background.md-ripple-active {\n  opacity: 1; }\n\n.mdRippleFocused .md-ripple-background {\n  opacity: 1; }\n\n.md-ripple-foreground {\n  background-color: rgba(0, 0, 0, 0.0588);\n  border-radius: 50%;\n  pointer-events: none;\n  opacity: 0.25;\n  position: absolute;\n  -webkit-transition: opacity, -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity, -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1); }\n\n.md-ripple-foreground.md-ripple-fade-in {\n  opacity: 1; }\n\n.md-ripple-foreground.md-ripple-fade-out {\n  opacity: 0; }\n\n.cdk-visually-hidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  text-transform: none;\n  width: 1px; }\n\n.cdk-overlay-container, .cdk-global-overlay-wrapper {\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%; }\n\n.cdk-overlay-container {\n  position: fixed;\n  z-index: 1000; }\n\n.cdk-global-overlay-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: absolute;\n  z-index: 1000; }\n\n.cdk-overlay-pane {\n  position: absolute;\n  pointer-events: auto;\n  box-sizing: border-box;\n  z-index: 1000; }\n\n.cdk-overlay-backdrop {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  pointer-events: auto;\n  -webkit-transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  opacity: 0; }\n  .cdk-overlay-backdrop.cdk-overlay-backdrop-showing {\n    opacity: 0.48; }\n\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.6); }\n\n.cdk-overlay-transparent-backdrop {\n  background: none; }\n\n.app-light-theme .mdRippleFocused .md-ripple-background {\n  background-color: rgba(255, 64, 129, 0.1); }\n\n.app-light-theme [md-button].md-button-focus.md-primary .md-button-focus-overlay, .app-light-theme [md-icon-button].md-button-focus.md-primary .md-button-focus-overlay, .app-light-theme [md-raised-button].md-button-focus.md-primary .md-button-focus-overlay, .app-light-theme [md-fab].md-button-focus.md-primary .md-button-focus-overlay, .app-light-theme [md-mini-fab].md-button-focus.md-primary .md-button-focus-overlay {\n  background-color: rgba(63, 81, 181, 0.12); }\n\n.app-light-theme [md-button].md-button-focus.md-accent .md-button-focus-overlay, .app-light-theme [md-icon-button].md-button-focus.md-accent .md-button-focus-overlay, .app-light-theme [md-raised-button].md-button-focus.md-accent .md-button-focus-overlay, .app-light-theme [md-fab].md-button-focus.md-accent .md-button-focus-overlay, .app-light-theme [md-mini-fab].md-button-focus.md-accent .md-button-focus-overlay {\n  background-color: rgba(255, 64, 129, 0.12); }\n\n.app-light-theme [md-button].md-button-focus.md-warn .md-button-focus-overlay, .app-light-theme [md-icon-button].md-button-focus.md-warn .md-button-focus-overlay, .app-light-theme [md-raised-button].md-button-focus.md-warn .md-button-focus-overlay, .app-light-theme [md-fab].md-button-focus.md-warn .md-button-focus-overlay, .app-light-theme [md-mini-fab].md-button-focus.md-warn .md-button-focus-overlay {\n  background-color: rgba(244, 67, 54, 0.12); }\n\n.app-light-theme [md-button], .app-light-theme [md-icon-button] {\n  background: transparent; }\n  .app-light-theme [md-button].md-primary, .app-light-theme [md-icon-button].md-primary {\n    color: #3f51b5; }\n  .app-light-theme [md-button].md-accent, .app-light-theme [md-icon-button].md-accent {\n    color: #ff4081; }\n  .app-light-theme [md-button].md-warn, .app-light-theme [md-icon-button].md-warn {\n    color: #f44336; }\n  .app-light-theme [md-button].md-primary[disabled], .app-light-theme [md-button].md-accent[disabled], .app-light-theme [md-button].md-warn[disabled], .app-light-theme [md-button][disabled][disabled], .app-light-theme [md-icon-button].md-primary[disabled], .app-light-theme [md-icon-button].md-accent[disabled], .app-light-theme [md-icon-button].md-warn[disabled], .app-light-theme [md-icon-button][disabled][disabled] {\n    color: rgba(0, 0, 0, 0.38); }\n  .app-light-theme [md-button]:hover.md-primary .md-button-focus-overlay, .app-light-theme [md-icon-button]:hover.md-primary .md-button-focus-overlay {\n    background-color: rgba(63, 81, 181, 0.12); }\n  .app-light-theme [md-button]:hover.md-accent .md-button-focus-overlay, .app-light-theme [md-icon-button]:hover.md-accent .md-button-focus-overlay {\n    background-color: rgba(255, 64, 129, 0.12); }\n  .app-light-theme [md-button]:hover.md-warn .md-button-focus-overlay, .app-light-theme [md-icon-button]:hover.md-warn .md-button-focus-overlay {\n    background-color: rgba(244, 67, 54, 0.12); }\n\n.app-light-theme [md-raised-button], .app-light-theme [md-fab], .app-light-theme [md-mini-fab] {\n  background-color: #fafafa; }\n  .app-light-theme [md-raised-button].md-primary, .app-light-theme [md-fab].md-primary, .app-light-theme [md-mini-fab].md-primary {\n    color: rgba(255, 255, 255, 0.87); }\n  .app-light-theme [md-raised-button].md-accent, .app-light-theme [md-fab].md-accent, .app-light-theme [md-mini-fab].md-accent {\n    color: white; }\n  .app-light-theme [md-raised-button].md-warn, .app-light-theme [md-fab].md-warn, .app-light-theme [md-mini-fab].md-warn {\n    color: white; }\n  .app-light-theme [md-raised-button].md-primary[disabled], .app-light-theme [md-raised-button].md-accent[disabled], .app-light-theme [md-raised-button].md-warn[disabled], .app-light-theme [md-raised-button][disabled][disabled], .app-light-theme [md-fab].md-primary[disabled], .app-light-theme [md-fab].md-accent[disabled], .app-light-theme [md-fab].md-warn[disabled], .app-light-theme [md-fab][disabled][disabled], .app-light-theme [md-mini-fab].md-primary[disabled], .app-light-theme [md-mini-fab].md-accent[disabled], .app-light-theme [md-mini-fab].md-warn[disabled], .app-light-theme [md-mini-fab][disabled][disabled] {\n    color: rgba(0, 0, 0, 0.38); }\n  .app-light-theme [md-raised-button].md-primary, .app-light-theme [md-fab].md-primary, .app-light-theme [md-mini-fab].md-primary {\n    background-color: #3f51b5; }\n  .app-light-theme [md-raised-button].md-accent, .app-light-theme [md-fab].md-accent, .app-light-theme [md-mini-fab].md-accent {\n    background-color: #ff4081; }\n  .app-light-theme [md-raised-button].md-warn, .app-light-theme [md-fab].md-warn, .app-light-theme [md-mini-fab].md-warn {\n    background-color: #f44336; }\n  .app-light-theme [md-raised-button].md-primary[disabled], .app-light-theme [md-raised-button].md-accent[disabled], .app-light-theme [md-raised-button].md-warn[disabled], .app-light-theme [md-raised-button][disabled][disabled], .app-light-theme [md-fab].md-primary[disabled], .app-light-theme [md-fab].md-accent[disabled], .app-light-theme [md-fab].md-warn[disabled], .app-light-theme [md-fab][disabled][disabled], .app-light-theme [md-mini-fab].md-primary[disabled], .app-light-theme [md-mini-fab].md-accent[disabled], .app-light-theme [md-mini-fab].md-warn[disabled], .app-light-theme [md-mini-fab][disabled][disabled] {\n    background-color: rgba(0, 0, 0, 0.12); }\n\n.app-light-theme [md-fab], .app-light-theme [md-mini-fab] {\n  background-color: #ff4081;\n  color: white; }\n\n.app-light-theme .md-button-toggle-checked .md-button-toggle-label-content {\n  background-color: #e0e0e0; }\n\n.app-light-theme .md-button-toggle-disabled .md-button-toggle-label-content {\n  background-color: rgba(0, 0, 0, 0.38); }\n\n.app-light-theme md-card {\n  background: white;\n  color: black; }\n\n.app-light-theme md-card-subtitle {\n  color: rgba(0, 0, 0, 0.54); }\n\n.app-light-theme .md-checkbox-frame {\n  border-color: rgba(0, 0, 0, 0.54); }\n\n.app-light-theme .md-checkbox-checkmark {\n  fill: #fafafa; }\n\n.app-light-theme .md-checkbox-checkmark-path {\n  stroke: #fafafa !important; }\n\n.app-light-theme .md-checkbox-mixedmark {\n  background-color: #fafafa; }\n\n.app-light-theme .md-checkbox-indeterminate.md-primary .md-checkbox-background, .app-light-theme .md-checkbox-checked.md-primary .md-checkbox-background {\n  background-color: #3f51b5; }\n\n.app-light-theme .md-checkbox-indeterminate.md-accent .md-checkbox-background, .app-light-theme .md-checkbox-checked.md-accent .md-checkbox-background {\n  background-color: #e91e63; }\n\n.app-light-theme .md-checkbox-indeterminate.md-warn .md-checkbox-background, .app-light-theme .md-checkbox-checked.md-warn .md-checkbox-background {\n  background-color: #f44336; }\n\n.app-light-theme .md-checkbox-disabled.md-checkbox-checked .md-checkbox-background, .app-light-theme .md-checkbox-disabled.md-checkbox-indeterminate .md-checkbox-background {\n  background-color: #b0b0b0; }\n\n.app-light-theme .md-checkbox-disabled:not(.md-checkbox-checked) .md-checkbox-frame {\n  border-color: #b0b0b0; }\n\n.app-light-theme .md-checkbox:not(.md-checkbox-disabled).md-primary .md-checkbox-ripple .md-ripple-foreground {\n  background-color: rgba(63, 81, 181, 0.26); }\n\n.app-light-theme .md-checkbox:not(.md-checkbox-disabled).md-accent .md-checkbox-ripple .md-ripple-foreground {\n  background-color: rgba(255, 64, 129, 0.26); }\n\n.app-light-theme .md-checkbox:not(.md-checkbox-disabled).md-warn .md-checkbox-ripple .md-ripple-foreground {\n  background-color: rgba(244, 67, 54, 0.26); }\n\n.app-light-theme .md-chip:not(.md-basic-chip) {\n  background-color: #e0e0e0;\n  color: rgba(0, 0, 0, 0.87); }\n\n.app-light-theme .md-chip.md-chip-selected:not(.md-basic-chip) {\n  background-color: #808080;\n  color: rgba(255, 255, 255, 0.87); }\n  .app-light-theme .md-chip.md-chip-selected:not(.md-basic-chip).md-primary {\n    background-color: #3f51b5;\n    color: rgba(255, 255, 255, 0.87); }\n  .app-light-theme .md-chip.md-chip-selected:not(.md-basic-chip).md-accent {\n    background-color: #e91e63;\n    color: white; }\n  .app-light-theme .md-chip.md-chip-selected:not(.md-basic-chip).md-warn {\n    background-color: #f44336;\n    color: white; }\n\n.app-light-theme md-dialog-container {\n  background: white; }\n\n.app-light-theme md-icon.md-primary {\n  color: #3f51b5; }\n\n.app-light-theme md-icon.md-accent {\n  color: #ff4081; }\n\n.app-light-theme md-icon.md-warn {\n  color: #f44336; }\n\n.app-light-theme .md-input-placeholder {\n  color: rgba(0, 0, 0, 0.38); }\n  .app-light-theme .md-input-placeholder.md-focused {\n    color: #3f51b5; }\n    .app-light-theme .md-input-placeholder.md-focused.md-accent {\n      color: #ff4081; }\n    .app-light-theme .md-input-placeholder.md-focused.md-warn {\n      color: #f44336; }\n\n.app-light-theme input.md-input-element:-webkit-autofill + .md-input-placeholder .md-placeholder-required,\n.app-light-theme .md-input-placeholder.md-float.md-focused .md-placeholder-required {\n  color: #ff4081; }\n\n.app-light-theme .md-input-underline {\n  border-color: rgba(0, 0, 0, 0.12); }\n  .app-light-theme .md-input-underline .md-input-ripple {\n    background-color: #3f51b5; }\n    .app-light-theme .md-input-underline .md-input-ripple.md-accent {\n      background-color: #ff4081; }\n    .app-light-theme .md-input-underline .md-input-ripple.md-warn {\n      background-color: #f44336; }\n\n.app-light-theme md-list md-list-item, .app-light-theme md-list a[md-list-item], .app-light-theme md-nav-list md-list-item, .app-light-theme md-nav-list a[md-list-item] {\n  color: black; }\n\n.app-light-theme md-list [md-subheader], .app-light-theme md-nav-list [md-subheader] {\n  color: rgba(0, 0, 0, 0.54); }\n\n.app-light-theme md-divider {\n  border-top-color: rgba(0, 0, 0, 0.12); }\n\n.app-light-theme md-nav-list .md-list-item:hover, .app-light-theme md-nav-list .md-list-item.md-list-item-focus {\n  background: rgba(0, 0, 0, 0.04); }\n\n.app-light-theme .md-menu-content {\n  background: white; }\n\n.app-light-theme [md-menu-item] {\n  background: transparent;\n  color: rgba(0, 0, 0, 0.87); }\n  .app-light-theme [md-menu-item][disabled] {\n    color: rgba(0, 0, 0, 0.38); }\n  .app-light-theme [md-menu-item] md-icon {\n    color: rgba(0, 0, 0, 0.54); }\n  .app-light-theme [md-menu-item]:hover:not([disabled]), .app-light-theme [md-menu-item]:focus:not([disabled]) {\n    background: rgba(0, 0, 0, 0.04); }\n\n.app-light-theme .md-progress-bar-background {\n  background: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27#c5cae9%27%2F%3E%3C%2Fsvg%3E\"); }\n\n.app-light-theme .md-progress-bar-buffer {\n  background-color: #c5cae9; }\n\n.app-light-theme .md-progress-bar-fill::after {\n  background-color: #3949ab; }\n\n.app-light-theme md-progress-bar.md-accent .md-progress-bar-background {\n  background: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27#f8bbd0%27%2F%3E%3C%2Fsvg%3E\"); }\n\n.app-light-theme md-progress-bar.md-accent .md-progress-bar-buffer {\n  background-color: #f8bbd0; }\n\n.app-light-theme md-progress-bar.md-accent .md-progress-bar-fill::after {\n  background-color: #d81b60; }\n\n.app-light-theme md-progress-bar.md-warn .md-progress-bar-background {\n  background: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27#ffcdd2%27%2F%3E%3C%2Fsvg%3E\"); }\n\n.app-light-theme md-progress-bar.md-warn .md-progress-bar-buffer {\n  background-color: #ffcdd2; }\n\n.app-light-theme md-progress-bar.md-warn .md-progress-bar-fill::after {\n  background-color: #e53935; }\n\n.app-light-theme md-progress-spinner path, .app-light-theme md-progress-circle path, .app-light-theme md-spinner path {\n  stroke: #3949ab; }\n\n.app-light-theme md-progress-spinner.md-accent path, .app-light-theme md-progress-circle.md-accent path, .app-light-theme md-spinner.md-accent path {\n  stroke: #d81b60; }\n\n.app-light-theme md-progress-spinner.md-warn path, .app-light-theme md-progress-circle.md-warn path, .app-light-theme md-spinner.md-warn path {\n  stroke: #e53935; }\n\n.app-light-theme .md-radio-outer-circle {\n  border-color: rgba(0, 0, 0, 0.54); }\n  .md-radio-checked .app-light-theme .md-radio-outer-circle {\n    border-color: #ff4081; }\n  .md-radio-disabled .app-light-theme .md-radio-outer-circle {\n    border-color: rgba(0, 0, 0, 0.38); }\n\n.app-light-theme .md-radio-inner-circle {\n  background-color: #ff4081; }\n  .md-radio-disabled .app-light-theme .md-radio-inner-circle {\n    background-color: rgba(0, 0, 0, 0.38); }\n\n.app-light-theme .md-radio-ripple .md-ripple-foreground {\n  background-color: rgba(255, 64, 129, 0.26); }\n  .md-radio-disabled .app-light-theme .md-radio-ripple .md-ripple-foreground {\n    background-color: rgba(0, 0, 0, 0.38); }\n\n.app-light-theme .md-select-trigger {\n  color: rgba(0, 0, 0, 0.38);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n  md-select:focus:not(.md-select-disabled) .app-light-theme .md-select-trigger {\n    color: #3f51b5;\n    border-bottom: 1px solid #3f51b5; }\n  md-select.ng-invalid.ng-touched:not(.md-select-disabled) .app-light-theme .md-select-trigger {\n    color: #f44336;\n    border-bottom: 1px solid #f44336; }\n\n.app-light-theme .md-select-arrow {\n  color: rgba(0, 0, 0, 0.38); }\n  md-select:focus:not(.md-select-disabled) .app-light-theme .md-select-arrow {\n    color: #3f51b5; }\n  md-select.ng-invalid.ng-touched:not(.md-select-disabled) .app-light-theme .md-select-arrow {\n    color: #f44336; }\n\n.app-light-theme .md-select-content {\n  background: white; }\n\n.app-light-theme .md-select-value {\n  color: rgba(0, 0, 0, 0.87); }\n  .md-select-disabled .app-light-theme .md-select-value {\n    color: rgba(0, 0, 0, 0.38); }\n\n.app-light-theme md-option:hover:not(.md-option-disabled), .app-light-theme md-option:focus:not(.md-option-disabled) {\n  background: rgba(0, 0, 0, 0.04); }\n\n.app-light-theme md-option.md-selected {\n  background: rgba(0, 0, 0, 0.04);\n  color: #3f51b5; }\n\n.app-light-theme md-option.md-option-disabled {\n  color: rgba(0, 0, 0, 0.38); }\n\n.app-light-theme .md-sidenav-container {\n  background-color: #fafafa;\n  color: rgba(0, 0, 0, 0.87); }\n\n.app-light-theme md-sidenav {\n  background-color: white;\n  color: rgba(0, 0, 0, 0.87); }\n  .app-light-theme md-sidenav.md-sidenav-push {\n    background-color: white; }\n\n.app-light-theme .md-sidenav-backdrop.md-sidenav-shown {\n  background-color: rgba(0, 0, 0, 0.6); }\n\n.app-light-theme md-slide-toggle.md-checked:not(.md-disabled) .md-slide-toggle-thumb {\n  background-color: #e91e63; }\n\n.app-light-theme md-slide-toggle.md-checked:not(.md-disabled) .md-slide-toggle-bar {\n  background-color: rgba(233, 30, 99, 0.5); }\n\n.app-light-theme md-slide-toggle.md-slide-toggle-focused:not(.md-checked) .md-ink-ripple {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.app-light-theme md-slide-toggle.md-slide-toggle-focused .md-ink-ripple {\n  background-color: rgba(233, 30, 99, 0.26); }\n\n.app-light-theme md-slide-toggle.md-primary.md-checked:not(.md-disabled) .md-slide-toggle-thumb {\n  background-color: #3f51b5; }\n\n.app-light-theme md-slide-toggle.md-primary.md-checked:not(.md-disabled) .md-slide-toggle-bar {\n  background-color: rgba(63, 81, 181, 0.5); }\n\n.app-light-theme md-slide-toggle.md-primary.md-slide-toggle-focused:not(.md-checked) .md-ink-ripple {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.app-light-theme md-slide-toggle.md-primary.md-slide-toggle-focused .md-ink-ripple {\n  background-color: rgba(63, 81, 181, 0.26); }\n\n.app-light-theme md-slide-toggle.md-warn.md-checked:not(.md-disabled) .md-slide-toggle-thumb {\n  background-color: #f44336; }\n\n.app-light-theme md-slide-toggle.md-warn.md-checked:not(.md-disabled) .md-slide-toggle-bar {\n  background-color: rgba(244, 67, 54, 0.5); }\n\n.app-light-theme md-slide-toggle.md-warn.md-slide-toggle-focused:not(.md-checked) .md-ink-ripple {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.app-light-theme md-slide-toggle.md-warn.md-slide-toggle-focused .md-ink-ripple {\n  background-color: rgba(244, 67, 54, 0.26); }\n\n.app-light-theme .md-disabled .md-slide-toggle-thumb {\n  background-color: #bdbdbd; }\n\n.app-light-theme .md-disabled .md-slide-toggle-bar {\n  background-color: rgba(0, 0, 0, 0.1); }\n\n.app-light-theme .md-slide-toggle-thumb {\n  background-color: #fafafa; }\n\n.app-light-theme .md-slide-toggle-bar {\n  background-color: rgba(0, 0, 0, 0.38); }\n\n.app-light-theme .md-slider-track {\n  background-color: rgba(0, 0, 0, 0.26); }\n\n.app-light-theme .md-slider-track-fill {\n  background-color: #ff4081; }\n\n.app-light-theme .md-slider-thumb {\n  background-color: #ff4081; }\n\n.app-light-theme .md-slider-thumb-label {\n  background-color: #ff4081; }\n\n.app-light-theme .md-slider-thumb-label-text {\n  color: white; }\n\n.app-light-theme [md-tab-nav-bar],\n.app-light-theme .md-tab-header {\n  border-bottom: 1px solid #e0e0e0; }\n\n.app-light-theme .md-tab-label:focus {\n  background-color: rgba(197, 202, 233, 0.3); }\n\n.app-light-theme md-ink-bar {\n  background-color: #3f51b5; }\n\n.app-light-theme md-toolbar {\n  background: whitesmoke;\n  color: rgba(0, 0, 0, 0.87); }\n  .app-light-theme md-toolbar.md-primary {\n    background: #3f51b5;\n    color: rgba(255, 255, 255, 0.87); }\n  .app-light-theme md-toolbar.md-accent {\n    background: #ff4081;\n    color: white; }\n  .app-light-theme md-toolbar.md-warn {\n    background: #f44336;\n    color: white; }\n\n.app-light-theme .md-tooltip {\n  background: rgba(97, 97, 97, 0.9); }\n\ngeneric-layout .layout-header {\n  padding: 50px 70px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background: #E0E0E0; }\n  generic-layout .layout-header .menu-button {\n    margin-right: 10px;\n    color: #3f51b5; }\n  generic-layout .layout-header .header-text {\n    font-size: 2em;\n    color: #3f51b5;\n    text-transform: capitalize; }\n\ngeneric-layout .layout-presentation {\n  padding: 50px; }\n  generic-layout .layout-presentation md-tab-group .md-tab-body-wrapper .md-tab-body-content {\n    overflow-x: auto;\n    padding-top: 1em; }\n    generic-layout .layout-presentation md-tab-group .md-tab-body-wrapper .md-tab-body-content .other-text {\n      font-size: 2em;\n      padding: 1em; }\n\ngeneric-layout.mobile .layout-header {\n  padding: 15px 20px; }\n  generic-layout.mobile .layout-header .header-text {\n    font-size: 1.2em; }\n\ngeneric-layout.mobile .layout-presentation {\n  padding: 10px; }\n\ngeneric-layout.tablet .layout-header {\n  padding: 25px; }\n\ngeneric-layout.tablet .layout-presentation {\n  padding: 25px 35px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 915:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)();
// imports


// module
exports.push([module.i, "ngt-autocomplete md-input {\n  width: 100%; }\n\n.cdk-overlay-container .unselectable-state {\n  overflow-x: hidden;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 48px;\n  padding: 0 16px;\n  font-size: 16px;\n  font-family: Roboto,\"Helvetica Neue\",sans-serif;\n  text-align: start;\n  text-decoration: none;\n  position: relative;\n  cursor: pointer;\n  outline: 0; }\n\n.cdk-overlay-container .md-select-panel {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  overflow: auto;\n  -webkit-overflow-scrolling: touch; }\n\n.md-select-content {\n  background: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 916:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)();
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n.default-theme .md-elevation-z0 {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12); }\n\n.default-theme .md-elevation-z1 {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); }\n\n.default-theme .md-elevation-z2 {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); }\n\n.default-theme .md-elevation-z3 {\n  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12); }\n\n.default-theme .md-elevation-z4 {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); }\n\n.default-theme .md-elevation-z5 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12); }\n\n.default-theme .md-elevation-z6 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12); }\n\n.default-theme .md-elevation-z7 {\n  box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12); }\n\n.default-theme .md-elevation-z8 {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n.default-theme .md-elevation-z9 {\n  box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12); }\n\n.default-theme .md-elevation-z10 {\n  box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12); }\n\n.default-theme .md-elevation-z11 {\n  box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12); }\n\n.default-theme .md-elevation-z12 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12); }\n\n.default-theme .md-elevation-z13 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12); }\n\n.default-theme .md-elevation-z14 {\n  box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12); }\n\n.default-theme .md-elevation-z15 {\n  box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12); }\n\n.default-theme .md-elevation-z16 {\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n\n.default-theme .md-elevation-z17 {\n  box-shadow: 0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12); }\n\n.default-theme .md-elevation-z18 {\n  box-shadow: 0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12); }\n\n.default-theme .md-elevation-z19 {\n  box-shadow: 0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12); }\n\n.default-theme .md-elevation-z20 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12); }\n\n.default-theme .md-elevation-z21 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12); }\n\n.default-theme .md-elevation-z22 {\n  box-shadow: 0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12); }\n\n.default-theme .md-elevation-z23 {\n  box-shadow: 0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12); }\n\n.default-theme .md-elevation-z24 {\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12); }\n\n.default-theme [md-ripple] {\n  overflow: hidden; }\n\n.default-theme [md-ripple].mdRippleUnbounded {\n  overflow: visible; }\n\n.default-theme .md-ripple-background {\n  background-color: rgba(0, 0, 0, 0.0588);\n  opacity: 0;\n  -webkit-transition: opacity 300ms linear;\n  transition: opacity 300ms linear;\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0; }\n\n.default-theme .mdRippleUnbounded .md-ripple-background {\n  display: none; }\n\n.default-theme .md-ripple-background.md-ripple-active {\n  opacity: 1; }\n\n.default-theme .mdRippleFocused .md-ripple-background {\n  opacity: 1; }\n\n.default-theme .md-ripple-foreground {\n  background-color: rgba(0, 0, 0, 0.0588);\n  border-radius: 50%;\n  pointer-events: none;\n  opacity: 0.25;\n  position: absolute;\n  -webkit-transition: opacity, -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity, -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1); }\n\n.default-theme .md-ripple-foreground.md-ripple-fade-in {\n  opacity: 1; }\n\n.default-theme .md-ripple-foreground.md-ripple-fade-out {\n  opacity: 0; }\n\n.default-theme .cdk-visually-hidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  text-transform: none;\n  width: 1px; }\n\n.default-theme .cdk-overlay-container, .default-theme .cdk-global-overlay-wrapper {\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%; }\n\n.default-theme .cdk-overlay-container {\n  position: fixed;\n  z-index: 1000; }\n\n.default-theme .cdk-global-overlay-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: absolute;\n  z-index: 1000; }\n\n.default-theme .cdk-overlay-pane {\n  position: absolute;\n  pointer-events: auto;\n  box-sizing: border-box;\n  z-index: 1000; }\n\n.default-theme .cdk-overlay-backdrop {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  pointer-events: auto;\n  -webkit-transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  opacity: 0; }\n  .default-theme .cdk-overlay-backdrop.cdk-overlay-backdrop-showing {\n    opacity: 0.48; }\n\n.default-theme .cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.6); }\n\n.default-theme .cdk-overlay-transparent-backdrop {\n  background: none; }\n\n.default-theme .mdRippleFocused .md-ripple-background {\n  background-color: rgba(255, 64, 129, 0.1); }\n\n.default-theme [md-button].md-button-focus.md-primary .md-button-focus-overlay, .default-theme [md-icon-button].md-button-focus.md-primary .md-button-focus-overlay, .default-theme [md-raised-button].md-button-focus.md-primary .md-button-focus-overlay, .default-theme [md-fab].md-button-focus.md-primary .md-button-focus-overlay, .default-theme [md-mini-fab].md-button-focus.md-primary .md-button-focus-overlay {\n  background-color: rgba(63, 81, 181, 0.12); }\n\n.default-theme [md-button].md-button-focus.md-accent .md-button-focus-overlay, .default-theme [md-icon-button].md-button-focus.md-accent .md-button-focus-overlay, .default-theme [md-raised-button].md-button-focus.md-accent .md-button-focus-overlay, .default-theme [md-fab].md-button-focus.md-accent .md-button-focus-overlay, .default-theme [md-mini-fab].md-button-focus.md-accent .md-button-focus-overlay {\n  background-color: rgba(255, 64, 129, 0.12); }\n\n.default-theme [md-button].md-button-focus.md-warn .md-button-focus-overlay, .default-theme [md-icon-button].md-button-focus.md-warn .md-button-focus-overlay, .default-theme [md-raised-button].md-button-focus.md-warn .md-button-focus-overlay, .default-theme [md-fab].md-button-focus.md-warn .md-button-focus-overlay, .default-theme [md-mini-fab].md-button-focus.md-warn .md-button-focus-overlay {\n  background-color: rgba(244, 67, 54, 0.12); }\n\n.default-theme [md-button], .default-theme [md-icon-button] {\n  background: transparent; }\n  .default-theme [md-button].md-primary, .default-theme [md-icon-button].md-primary {\n    color: #3f51b5; }\n  .default-theme [md-button].md-accent, .default-theme [md-icon-button].md-accent {\n    color: #ff4081; }\n  .default-theme [md-button].md-warn, .default-theme [md-icon-button].md-warn {\n    color: #f44336; }\n  .default-theme [md-button].md-primary[disabled], .default-theme [md-button].md-accent[disabled], .default-theme [md-button].md-warn[disabled], .default-theme [md-button][disabled][disabled], .default-theme [md-icon-button].md-primary[disabled], .default-theme [md-icon-button].md-accent[disabled], .default-theme [md-icon-button].md-warn[disabled], .default-theme [md-icon-button][disabled][disabled] {\n    color: rgba(0, 0, 0, 0.38); }\n  .default-theme [md-button]:hover.md-primary .md-button-focus-overlay, .default-theme [md-icon-button]:hover.md-primary .md-button-focus-overlay {\n    background-color: rgba(63, 81, 181, 0.12); }\n  .default-theme [md-button]:hover.md-accent .md-button-focus-overlay, .default-theme [md-icon-button]:hover.md-accent .md-button-focus-overlay {\n    background-color: rgba(255, 64, 129, 0.12); }\n  .default-theme [md-button]:hover.md-warn .md-button-focus-overlay, .default-theme [md-icon-button]:hover.md-warn .md-button-focus-overlay {\n    background-color: rgba(244, 67, 54, 0.12); }\n\n.default-theme [md-raised-button], .default-theme [md-fab], .default-theme [md-mini-fab] {\n  background-color: #fafafa; }\n  .default-theme [md-raised-button].md-primary, .default-theme [md-fab].md-primary, .default-theme [md-mini-fab].md-primary {\n    color: rgba(255, 255, 255, 0.87); }\n  .default-theme [md-raised-button].md-accent, .default-theme [md-fab].md-accent, .default-theme [md-mini-fab].md-accent {\n    color: white; }\n  .default-theme [md-raised-button].md-warn, .default-theme [md-fab].md-warn, .default-theme [md-mini-fab].md-warn {\n    color: white; }\n  .default-theme [md-raised-button].md-primary[disabled], .default-theme [md-raised-button].md-accent[disabled], .default-theme [md-raised-button].md-warn[disabled], .default-theme [md-raised-button][disabled][disabled], .default-theme [md-fab].md-primary[disabled], .default-theme [md-fab].md-accent[disabled], .default-theme [md-fab].md-warn[disabled], .default-theme [md-fab][disabled][disabled], .default-theme [md-mini-fab].md-primary[disabled], .default-theme [md-mini-fab].md-accent[disabled], .default-theme [md-mini-fab].md-warn[disabled], .default-theme [md-mini-fab][disabled][disabled] {\n    color: rgba(0, 0, 0, 0.38); }\n  .default-theme [md-raised-button].md-primary, .default-theme [md-fab].md-primary, .default-theme [md-mini-fab].md-primary {\n    background-color: #3f51b5; }\n  .default-theme [md-raised-button].md-accent, .default-theme [md-fab].md-accent, .default-theme [md-mini-fab].md-accent {\n    background-color: #ff4081; }\n  .default-theme [md-raised-button].md-warn, .default-theme [md-fab].md-warn, .default-theme [md-mini-fab].md-warn {\n    background-color: #f44336; }\n  .default-theme [md-raised-button].md-primary[disabled], .default-theme [md-raised-button].md-accent[disabled], .default-theme [md-raised-button].md-warn[disabled], .default-theme [md-raised-button][disabled][disabled], .default-theme [md-fab].md-primary[disabled], .default-theme [md-fab].md-accent[disabled], .default-theme [md-fab].md-warn[disabled], .default-theme [md-fab][disabled][disabled], .default-theme [md-mini-fab].md-primary[disabled], .default-theme [md-mini-fab].md-accent[disabled], .default-theme [md-mini-fab].md-warn[disabled], .default-theme [md-mini-fab][disabled][disabled] {\n    background-color: rgba(0, 0, 0, 0.12); }\n\n.default-theme [md-fab], .default-theme [md-mini-fab] {\n  background-color: #ff4081;\n  color: white; }\n\n.default-theme .md-button-toggle-checked .md-button-toggle-label-content {\n  background-color: #e0e0e0; }\n\n.default-theme .md-button-toggle-disabled .md-button-toggle-label-content {\n  background-color: rgba(0, 0, 0, 0.38); }\n\n.default-theme md-card {\n  background: white;\n  color: black; }\n\n.default-theme md-card-subtitle {\n  color: rgba(0, 0, 0, 0.54); }\n\n.default-theme .md-checkbox-frame {\n  border-color: rgba(0, 0, 0, 0.54); }\n\n.default-theme .md-checkbox-checkmark {\n  fill: #fafafa; }\n\n.default-theme .md-checkbox-checkmark-path {\n  stroke: #fafafa !important; }\n\n.default-theme .md-checkbox-mixedmark {\n  background-color: #fafafa; }\n\n.default-theme .md-checkbox-indeterminate.md-primary .md-checkbox-background, .default-theme .md-checkbox-checked.md-primary .md-checkbox-background {\n  background-color: #3f51b5; }\n\n.default-theme .md-checkbox-indeterminate.md-accent .md-checkbox-background, .default-theme .md-checkbox-checked.md-accent .md-checkbox-background {\n  background-color: #e91e63; }\n\n.default-theme .md-checkbox-indeterminate.md-warn .md-checkbox-background, .default-theme .md-checkbox-checked.md-warn .md-checkbox-background {\n  background-color: #f44336; }\n\n.default-theme .md-checkbox-disabled.md-checkbox-checked .md-checkbox-background, .default-theme .md-checkbox-disabled.md-checkbox-indeterminate .md-checkbox-background {\n  background-color: #b0b0b0; }\n\n.default-theme .md-checkbox-disabled:not(.md-checkbox-checked) .md-checkbox-frame {\n  border-color: #b0b0b0; }\n\n.default-theme .md-checkbox:not(.md-checkbox-disabled).md-primary .md-checkbox-ripple .md-ripple-foreground {\n  background-color: rgba(63, 81, 181, 0.26); }\n\n.default-theme .md-checkbox:not(.md-checkbox-disabled).md-accent .md-checkbox-ripple .md-ripple-foreground {\n  background-color: rgba(255, 64, 129, 0.26); }\n\n.default-theme .md-checkbox:not(.md-checkbox-disabled).md-warn .md-checkbox-ripple .md-ripple-foreground {\n  background-color: rgba(244, 67, 54, 0.26); }\n\n.default-theme .md-chip:not(.md-basic-chip) {\n  background-color: #e0e0e0;\n  color: rgba(0, 0, 0, 0.87); }\n\n.default-theme .md-chip.md-chip-selected:not(.md-basic-chip) {\n  background-color: #808080;\n  color: rgba(255, 255, 255, 0.87); }\n  .default-theme .md-chip.md-chip-selected:not(.md-basic-chip).md-primary {\n    background-color: #3f51b5;\n    color: rgba(255, 255, 255, 0.87); }\n  .default-theme .md-chip.md-chip-selected:not(.md-basic-chip).md-accent {\n    background-color: #e91e63;\n    color: white; }\n  .default-theme .md-chip.md-chip-selected:not(.md-basic-chip).md-warn {\n    background-color: #f44336;\n    color: white; }\n\n.default-theme md-dialog-container {\n  background: white; }\n\n.default-theme md-icon.md-primary {\n  color: #3f51b5; }\n\n.default-theme md-icon.md-accent {\n  color: #ff4081; }\n\n.default-theme md-icon.md-warn {\n  color: #f44336; }\n\n.default-theme .md-input-placeholder {\n  color: rgba(0, 0, 0, 0.38); }\n  .default-theme .md-input-placeholder.md-focused {\n    color: #3f51b5; }\n    .default-theme .md-input-placeholder.md-focused.md-accent {\n      color: #ff4081; }\n    .default-theme .md-input-placeholder.md-focused.md-warn {\n      color: #f44336; }\n\n.default-theme input.md-input-element:-webkit-autofill + .md-input-placeholder .md-placeholder-required,\n.default-theme .md-input-placeholder.md-float.md-focused .md-placeholder-required {\n  color: #ff4081; }\n\n.default-theme .md-input-underline {\n  border-color: rgba(0, 0, 0, 0.12); }\n  .default-theme .md-input-underline .md-input-ripple {\n    background-color: #3f51b5; }\n    .default-theme .md-input-underline .md-input-ripple.md-accent {\n      background-color: #ff4081; }\n    .default-theme .md-input-underline .md-input-ripple.md-warn {\n      background-color: #f44336; }\n\n.default-theme md-list md-list-item, .default-theme md-list a[md-list-item], .default-theme md-nav-list md-list-item, .default-theme md-nav-list a[md-list-item] {\n  color: black; }\n\n.default-theme md-list [md-subheader], .default-theme md-nav-list [md-subheader] {\n  color: rgba(0, 0, 0, 0.54); }\n\n.default-theme md-divider {\n  border-top-color: rgba(0, 0, 0, 0.12); }\n\n.default-theme md-nav-list .md-list-item:hover, .default-theme md-nav-list .md-list-item.md-list-item-focus {\n  background: rgba(0, 0, 0, 0.04); }\n\n.default-theme .md-menu-content {\n  background: white; }\n\n.default-theme [md-menu-item] {\n  background: transparent;\n  color: rgba(0, 0, 0, 0.87); }\n  .default-theme [md-menu-item][disabled] {\n    color: rgba(0, 0, 0, 0.38); }\n  .default-theme [md-menu-item] md-icon {\n    color: rgba(0, 0, 0, 0.54); }\n  .default-theme [md-menu-item]:hover:not([disabled]), .default-theme [md-menu-item]:focus:not([disabled]) {\n    background: rgba(0, 0, 0, 0.04); }\n\n.default-theme .md-progress-bar-background {\n  background: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27#c5cae9%27%2F%3E%3C%2Fsvg%3E\"); }\n\n.default-theme .md-progress-bar-buffer {\n  background-color: #c5cae9; }\n\n.default-theme .md-progress-bar-fill::after {\n  background-color: #3949ab; }\n\n.default-theme md-progress-bar.md-accent .md-progress-bar-background {\n  background: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27#f8bbd0%27%2F%3E%3C%2Fsvg%3E\"); }\n\n.default-theme md-progress-bar.md-accent .md-progress-bar-buffer {\n  background-color: #f8bbd0; }\n\n.default-theme md-progress-bar.md-accent .md-progress-bar-fill::after {\n  background-color: #d81b60; }\n\n.default-theme md-progress-bar.md-warn .md-progress-bar-background {\n  background: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27#ffcdd2%27%2F%3E%3C%2Fsvg%3E\"); }\n\n.default-theme md-progress-bar.md-warn .md-progress-bar-buffer {\n  background-color: #ffcdd2; }\n\n.default-theme md-progress-bar.md-warn .md-progress-bar-fill::after {\n  background-color: #e53935; }\n\n.default-theme md-progress-spinner path, .default-theme md-progress-circle path, .default-theme md-spinner path {\n  stroke: #3949ab; }\n\n.default-theme md-progress-spinner.md-accent path, .default-theme md-progress-circle.md-accent path, .default-theme md-spinner.md-accent path {\n  stroke: #d81b60; }\n\n.default-theme md-progress-spinner.md-warn path, .default-theme md-progress-circle.md-warn path, .default-theme md-spinner.md-warn path {\n  stroke: #e53935; }\n\n.default-theme .md-radio-outer-circle {\n  border-color: rgba(0, 0, 0, 0.54); }\n  .md-radio-checked .default-theme .md-radio-outer-circle {\n    border-color: #ff4081; }\n  .md-radio-disabled .default-theme .md-radio-outer-circle {\n    border-color: rgba(0, 0, 0, 0.38); }\n\n.default-theme .md-radio-inner-circle {\n  background-color: #ff4081; }\n  .md-radio-disabled .default-theme .md-radio-inner-circle {\n    background-color: rgba(0, 0, 0, 0.38); }\n\n.default-theme .md-radio-ripple .md-ripple-foreground {\n  background-color: rgba(255, 64, 129, 0.26); }\n  .md-radio-disabled .default-theme .md-radio-ripple .md-ripple-foreground {\n    background-color: rgba(0, 0, 0, 0.38); }\n\n.default-theme .md-select-trigger {\n  color: rgba(0, 0, 0, 0.38);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n  md-select:focus:not(.md-select-disabled) .default-theme .md-select-trigger {\n    color: #3f51b5;\n    border-bottom: 1px solid #3f51b5; }\n  md-select.ng-invalid.ng-touched:not(.md-select-disabled) .default-theme .md-select-trigger {\n    color: #f44336;\n    border-bottom: 1px solid #f44336; }\n\n.default-theme .md-select-arrow {\n  color: rgba(0, 0, 0, 0.38); }\n  md-select:focus:not(.md-select-disabled) .default-theme .md-select-arrow {\n    color: #3f51b5; }\n  md-select.ng-invalid.ng-touched:not(.md-select-disabled) .default-theme .md-select-arrow {\n    color: #f44336; }\n\n.default-theme .md-select-content {\n  background: white; }\n\n.default-theme .md-select-value {\n  color: rgba(0, 0, 0, 0.87); }\n  .md-select-disabled .default-theme .md-select-value {\n    color: rgba(0, 0, 0, 0.38); }\n\n.default-theme md-option:hover:not(.md-option-disabled), .default-theme md-option:focus:not(.md-option-disabled) {\n  background: rgba(0, 0, 0, 0.04); }\n\n.default-theme md-option.md-selected {\n  background: rgba(0, 0, 0, 0.04);\n  color: #3f51b5; }\n\n.default-theme md-option.md-option-disabled {\n  color: rgba(0, 0, 0, 0.38); }\n\n.default-theme .md-sidenav-container {\n  background-color: #fafafa;\n  color: rgba(0, 0, 0, 0.87); }\n\n.default-theme md-sidenav {\n  background-color: white;\n  color: rgba(0, 0, 0, 0.87); }\n  .default-theme md-sidenav.md-sidenav-push {\n    background-color: white; }\n\n.default-theme .md-sidenav-backdrop.md-sidenav-shown {\n  background-color: rgba(0, 0, 0, 0.6); }\n\n.default-theme md-slide-toggle.md-checked:not(.md-disabled) .md-slide-toggle-thumb {\n  background-color: #e91e63; }\n\n.default-theme md-slide-toggle.md-checked:not(.md-disabled) .md-slide-toggle-bar {\n  background-color: rgba(233, 30, 99, 0.5); }\n\n.default-theme md-slide-toggle.md-slide-toggle-focused:not(.md-checked) .md-ink-ripple {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.default-theme md-slide-toggle.md-slide-toggle-focused .md-ink-ripple {\n  background-color: rgba(233, 30, 99, 0.26); }\n\n.default-theme md-slide-toggle.md-primary.md-checked:not(.md-disabled) .md-slide-toggle-thumb {\n  background-color: #3f51b5; }\n\n.default-theme md-slide-toggle.md-primary.md-checked:not(.md-disabled) .md-slide-toggle-bar {\n  background-color: rgba(63, 81, 181, 0.5); }\n\n.default-theme md-slide-toggle.md-primary.md-slide-toggle-focused:not(.md-checked) .md-ink-ripple {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.default-theme md-slide-toggle.md-primary.md-slide-toggle-focused .md-ink-ripple {\n  background-color: rgba(63, 81, 181, 0.26); }\n\n.default-theme md-slide-toggle.md-warn.md-checked:not(.md-disabled) .md-slide-toggle-thumb {\n  background-color: #f44336; }\n\n.default-theme md-slide-toggle.md-warn.md-checked:not(.md-disabled) .md-slide-toggle-bar {\n  background-color: rgba(244, 67, 54, 0.5); }\n\n.default-theme md-slide-toggle.md-warn.md-slide-toggle-focused:not(.md-checked) .md-ink-ripple {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.default-theme md-slide-toggle.md-warn.md-slide-toggle-focused .md-ink-ripple {\n  background-color: rgba(244, 67, 54, 0.26); }\n\n.default-theme .md-disabled .md-slide-toggle-thumb {\n  background-color: #bdbdbd; }\n\n.default-theme .md-disabled .md-slide-toggle-bar {\n  background-color: rgba(0, 0, 0, 0.1); }\n\n.default-theme .md-slide-toggle-thumb {\n  background-color: #fafafa; }\n\n.default-theme .md-slide-toggle-bar {\n  background-color: rgba(0, 0, 0, 0.38); }\n\n.default-theme .md-slider-track {\n  background-color: rgba(0, 0, 0, 0.26); }\n\n.default-theme .md-slider-track-fill {\n  background-color: #ff4081; }\n\n.default-theme .md-slider-thumb {\n  background-color: #ff4081; }\n\n.default-theme .md-slider-thumb-label {\n  background-color: #ff4081; }\n\n.default-theme .md-slider-thumb-label-text {\n  color: white; }\n\n.default-theme [md-tab-nav-bar],\n.default-theme .md-tab-header {\n  border-bottom: 1px solid #e0e0e0; }\n\n.default-theme .md-tab-label:focus {\n  background-color: rgba(197, 202, 233, 0.3); }\n\n.default-theme md-ink-bar {\n  background-color: #3f51b5; }\n\n.default-theme md-toolbar {\n  background: whitesmoke;\n  color: rgba(0, 0, 0, 0.87); }\n  .default-theme md-toolbar.md-primary {\n    background: #3f51b5;\n    color: rgba(255, 255, 255, 0.87); }\n  .default-theme md-toolbar.md-accent {\n    background: #ff4081;\n    color: white; }\n  .default-theme md-toolbar.md-warn {\n    background: #f44336;\n    color: white; }\n\n.default-theme .md-tooltip {\n  background: rgba(97, 97, 97, 0.9); }\n\n.default-theme .form-row .form-element .default-header {\n  background-color: #3f51b5; }\n\n.default-theme .form-row .form-element md-hint,\n.default-theme .form-row .form-element .error-message {\n  font-size: 0.75em;\n  color: rgba(0, 0, 0, 0.38); }\n\n.default-theme .form-row .form-element .combobox-container.ng-touched.ng-invalid ~ .error-message {\n  color: #f44336; }\n\n.default-theme .form-row .form-element .datepicker-container md2-datepicker:focus .md2-datepicker-trigger .md2-datepicker-input {\n  border-bottom: 1px solid #3f51b5; }\n\n.default-theme .form-row .form-element .datepicker-container md2-datepicker:focus .md2-datepicker-trigger .md2-datepicker-placeholder {\n  color: #3f51b5; }\n\n.default-theme .form-row .form-element .datepicker-container md2-datepicker:focus .md2-datepicker-trigger svg path {\n  color: #3f51b5; }\n\n.default-theme .form-row .form-element .datepicker-container md2-datepicker .md2-datepicker-panel .md2-datepicker-header {\n  background: #3f51b5; }\n\n.default-theme .form-row .form-element .datepicker-container md2-datepicker .md2-datepicker-panel .md2-datepicker-content .md2-datepicker-actions .md2-button,\n.default-theme .form-row .form-element .datepicker-container md2-datepicker .md2-datepicker-panel .md2-datepicker-content .today {\n  color: #3f51b5; }\n\n.default-theme .form-row .form-element .datepicker-container md2-datepicker .md2-datepicker-panel .md2-datepicker-content .md2-calendar-years .md2-calendar-years-content .md2-calendar-year.selected {\n  color: #3f51b5; }\n\n.default-theme .form-row .form-element .datepicker-container md2-datepicker .md2-datepicker-panel .md2-datepicker-content .md2-datepicker-clock .md2-clock-hand svg g line {\n  stroke: #3f51b5; }\n\n.default-theme .form-row .form-element .datepicker-container md2-datepicker .md2-datepicker-panel .md2-datepicker-content .md2-datepicker-clock .md2-clock-hand svg g circle {\n  fill: #3f51b5;\n  opacity: 0.50;\n  filter: alpha(opacity=50); }\n\n.default-theme .form-row .form-element .datepicker-container md2-datepicker .md2-datepicker-panel .md2-datepicker-content .md2-datepicker-clock .md2-clock-hours .md2-clock-hour:hover, .default-theme .form-row .form-element .datepicker-container md2-datepicker .md2-datepicker-panel .md2-datepicker-content .md2-datepicker-clock .md2-clock-hours .md2-clock-minute:hover {\n  background: #3f51b5;\n  opacity: 0.50;\n  filter: alpha(opacity=50);\n  color: #fff; }\n\n.default-theme .form-row .form-element .datepicker-container md2-datepicker .md2-datepicker-panel .md2-datepicker-content .md2-datepicker-clock .md2-clock-minutes .md2-clock-minute:hover {\n  background: #3f51b5;\n  opacity: 0.50;\n  filter: alpha(opacity=50);\n  color: #fff; }\n\n.default-theme .form-row .form-element .datepicker-container md2-datepicker .md2-datepicker-panel .md2-datepicker-content .md2-calendar-day.selected {\n  color: #fff;\n  background: #3f51b5; }\n\n.default-theme .form-row .form-element .datepicker-container md2-datepicker .md2-datepicker-panel .md2-datepicker-content .md2-datepicker-actions {\n  display: none; }\n\n.default-theme .form-row .form-element .datepicker-container md2-datepicker.ng-touched.ng-invalid ~ .error-message {\n  color: #f44336; }\n\n.default-theme .form-row .form-element .multiselect-container md2-multiselect:focus .md2-multiselect-container {\n  border-bottom: 1px solid #3f51b5; }\n  .default-theme .form-row .form-element .multiselect-container md2-multiselect:focus .md2-multiselect-container .md2-multiselect-placeholder {\n    color: #3f51b5; }\n\n.default-theme .form-row .form-element .multiselect-container md2-multiselect .md2-multiselect-menu .md2-option.active {\n  color: #3f51b5; }\n  .default-theme .form-row .form-element .multiselect-container md2-multiselect .md2-multiselect-menu .md2-option.active .md2-option-icon {\n    border-color: #3f51b5; }\n\n.default-theme .form-row .form-element .multiselect-container md2-multiselect.ng-touched.ng-invalid ~ .error-message {\n  color: #f44336; }\n\n.default-theme .form-row .backend-error .md-input-underline,\n.default-theme .form-row .ng-touched.ng-invalid:not(form) .md-input-underline {\n  border-color: #f44336; }\n\n.default-theme .form-row .backend-error .md-input-placeholder,\n.default-theme .form-row .ng-touched.ng-invalid:not(form) .md-input-placeholder {\n  color: #f44336; }\n  .default-theme .form-row .backend-error .md-input-placeholder:not(.md-empty), .default-theme .form-row .backend-error .md-input-placeholder.md-focused,\n  .default-theme .form-row .ng-touched.ng-invalid:not(form) .md-input-placeholder:not(.md-empty),\n  .default-theme .form-row .ng-touched.ng-invalid:not(form) .md-input-placeholder.md-focused {\n    color: #f44336; }\n\n.default-theme .form-row .backend-error .md-input-ripple,\n.default-theme .form-row .backend-error md-ink-bar,\n.default-theme .form-row .ng-touched.ng-invalid:not(form) .md-input-ripple,\n.default-theme .form-row .ng-touched.ng-invalid:not(form) md-ink-bar {\n  background: #f44336; }\n\n.default-theme .form-row .backend-error .md2-datepicker-trigger .md2-datepicker-input .md2-datepicker-placeholder,\n.default-theme .form-row .ng-touched.ng-invalid:not(form) .md2-datepicker-trigger .md2-datepicker-input .md2-datepicker-placeholder {\n  color: #f44336; }\n\n.default-theme .form-row .backend-error .md2-datepicker-trigger .md2-datepicker-input svg path,\n.default-theme .form-row .ng-touched.ng-invalid:not(form) .md2-datepicker-trigger .md2-datepicker-input svg path {\n  color: #f44336; }\n\n.default-theme .form-row .backend-error .md2-datepicker-trigger .md2-datepicker-calendar-icon svg path,\n.default-theme .form-row .ng-touched.ng-invalid:not(form) .md2-datepicker-trigger .md2-datepicker-calendar-icon svg path {\n  color: #f44336; }\n\n.default-theme .form-row .backend-error .md2-multiselect-container,\n.default-theme .form-row .ng-touched.ng-invalid:not(form) .md2-multiselect-container {\n  border-bottom: 1px solid #f44336; }\n  .default-theme .form-row .backend-error .md2-multiselect-container .md2-multiselect-placeholder,\n  .default-theme .form-row .ng-touched.ng-invalid:not(form) .md2-multiselect-container .md2-multiselect-placeholder {\n    color: #f44336; }\n  .default-theme .form-row .backend-error .md2-multiselect-container svg path,\n  .default-theme .form-row .ng-touched.ng-invalid:not(form) .md2-multiselect-container svg path {\n    color: #f44336; }\n\n.default-theme .form-row .backend-error .error-message,\n.default-theme .form-row .backend-error .md-input-suffix,\n.default-theme .form-row .ng-touched.ng-invalid:not(form) .error-message,\n.default-theme .form-row .ng-touched.ng-invalid:not(form) .md-input-suffix {\n  color: #f44336; }\n\n.ngt-generic-form-layout .form-row {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  margin-bottom: 15px; }\n  .ngt-generic-form-layout .form-row .form-element > *:not(button) {\n    box-sizing: border-box;\n    width: calc(100% - 12px);\n    margin-left: 6px;\n    margin-right: 6px; }\n  .ngt-generic-form-layout .form-row .form-element.size1 {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1; }\n  .ngt-generic-form-layout .form-row .form-element.size2 {\n    -webkit-box-flex: 2;\n        -ms-flex: 2;\n            flex: 2; }\n  .ngt-generic-form-layout .form-row .form-element.size3 {\n    -webkit-box-flex: 3;\n        -ms-flex: 3;\n            flex: 3; }\n  .ngt-generic-form-layout .form-row .form-element.size4 {\n    -webkit-box-flex: 4;\n        -ms-flex: 4;\n            flex: 4; }\n  .ngt-generic-form-layout .form-row .form-element.size5 {\n    -webkit-box-flex: 5;\n        -ms-flex: 5;\n            flex: 5; }\n  .ngt-generic-form-layout .form-row .form-element.size6 {\n    -webkit-box-flex: 6;\n        -ms-flex: 6;\n            flex: 6; }\n  .ngt-generic-form-layout .form-row .form-element.size7 {\n    -webkit-box-flex: 7;\n        -ms-flex: 7;\n            flex: 7; }\n  .ngt-generic-form-layout .form-row .form-element.size8 {\n    -webkit-box-flex: 8;\n        -ms-flex: 8;\n            flex: 8; }\n  .ngt-generic-form-layout .form-row .form-element.size9 {\n    -webkit-box-flex: 9;\n        -ms-flex: 9;\n            flex: 9; }\n  .ngt-generic-form-layout .form-row .form-element.size10 {\n    -webkit-box-flex: 10;\n        -ms-flex: 10;\n            flex: 10; }\n  .ngt-generic-form-layout .form-row .form-element.size11 {\n    -webkit-box-flex: 11;\n        -ms-flex: 11;\n            flex: 11; }\n  .ngt-generic-form-layout .form-row .form-element.size12 {\n    -webkit-box-flex: 12;\n        -ms-flex: 12;\n            flex: 12; }\n  .ngt-generic-form-layout .form-row .form-element.size-1 {\n    display: none;\n    pointer-events: none; }\n  .ngt-generic-form-layout .form-row .form-element.center {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n  .ngt-generic-form-layout .form-row .form-element.left {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    margin-left: 6px; }\n  .ngt-generic-form-layout .form-row .form-element.right {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    margin-right: 6px; }\n  .ngt-generic-form-layout .form-row .form-element .default-header {\n    padding: 6px;\n    color: #FAFAFA; }\n    .ngt-generic-form-layout .form-row .form-element .default-header .md-input-wrapper .md-input-underline {\n      display: none; }\n  .ngt-generic-form-layout .form-row .form-element md-hint,\n  .ngt-generic-form-layout .form-row .form-element .error-message {\n    width: 100%;\n    font-size: 12px;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden; }\n  .ngt-generic-form-layout .form-row .form-element .combobox-container {\n    padding-top: 9px;\n    position: relative;\n    min-height: 50.4px; }\n    .ngt-generic-form-layout .form-row .form-element .combobox-container md-select {\n      position: absolute;\n      width: 100%; }\n      .ngt-generic-form-layout .form-row .form-element .combobox-container md-select .md-select-trigger {\n        min-width: 84px; }\n        .ngt-generic-form-layout .form-row .form-element .combobox-container md-select .md-select-trigger .md-select-placeholder,\n        .ngt-generic-form-layout .form-row .form-element .combobox-container md-select .md-select-trigger .md-select-value {\n          max-width: 75%; }\n    .ngt-generic-form-layout .form-row .form-element .combobox-container md-hint {\n      top: 43px; }\n  .ngt-generic-form-layout .form-row .form-element .datepicker-container {\n    position: relative; }\n    .ngt-generic-form-layout .form-row .form-element .datepicker-container md2-datepicker {\n      top: -10px;\n      width: 100%;\n      max-width: 100%;\n      margin: 0;\n      padding: 0;\n      font-family: Roboto,\"Helvetica Neue\",sans-serif;\n      line-height: normal;\n      text-align: left; }\n      .ngt-generic-form-layout .form-row .form-element .datepicker-container md2-datepicker .md2-datepicker-panel .md2-datepicker-content .md2-datepicker-actions {\n        display: none; }\n    .ngt-generic-form-layout .form-row .form-element .datepicker-container md-hint {\n      top: 43px; }\n  .ngt-generic-form-layout .form-row .form-element .multiselect-container {\n    position: relative; }\n    .ngt-generic-form-layout .form-row .form-element .multiselect-container md2-multiselect {\n      position: relative;\n      top: -3px;\n      font-family: Roboto,\"Helvetica Neue\",sans-serif;\n      line-height: normal;\n      text-align: left;\n      width: 100%;\n      margin: 0;\n      padding-bottom: 9px; }\n  .ngt-generic-form-layout .form-row .form-element .label {\n    pointer-events: none; }\n  .ngt-generic-form-layout .form-row .form-element ngt-autocomplete {\n    display: inherit; }\n  .ngt-generic-form-layout .form-row md-checkbox {\n    display: block; }\n  .ngt-generic-form-layout .form-row md-slide-toggle.md-disabled {\n    pointer-events: none; }\n\n@media only screen and (min-device-width: 320px) and (max-device-width: 767px) {\n  .ngt-generic-form-layout .form-row {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: column;\n            flex-flow: column;\n    margin-bottom: 0px; }\n    .ngt-generic-form-layout .form-row .form-element {\n      margin-bottom: 15px; }\n      .ngt-generic-form-layout .form-row .form-element .combobox-container {\n        padding-top: 20px;\n        position: relative;\n        padding-bottom: 20px; }\n        .ngt-generic-form-layout .form-row .form-element .combobox-container md-select {\n          position: relative;\n          width: 100%;\n          bottom: 0px; }\n        .ngt-generic-form-layout .form-row .form-element .combobox-container md-hint {\n          top: auto;\n          bottom: 0px; }\n      .ngt-generic-form-layout .form-row .form-element md2-datepicker.timepicker .md2-datepicker-panel, .ngt-generic-form-layout .form-row .form-element md2-datepicker.datepicker .md2-datepicker-panel, .ngt-generic-form-layout .form-row .form-element md2-datepicker.datetimepicker .md2-datepicker-panel {\n        width: 100%;\n        max-width: 300px; }\n        .ngt-generic-form-layout .form-row .form-element md2-datepicker.timepicker .md2-datepicker-panel .md2-datepicker-header .md2-datepicker-header-date-time, .ngt-generic-form-layout .form-row .form-element md2-datepicker.datepicker .md2-datepicker-panel .md2-datepicker-header .md2-datepicker-header-date-time, .ngt-generic-form-layout .form-row .form-element md2-datepicker.datetimepicker .md2-datepicker-panel .md2-datepicker-header .md2-datepicker-header-date-time {\n          font-size: 1.8em; } }\n\n@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {\n  .ngt-generic-form-layout .form-row .form-element md2-datepicker.timepicker .md2-datepicker-panel, .ngt-generic-form-layout .form-row .form-element md2-datepicker.datepicker .md2-datepicker-panel, .ngt-generic-form-layout .form-row .form-element md2-datepicker.datetimepicker .md2-datepicker-panel {\n    max-width: 300px;\n    position: absolute;\n    top: 0;\n    left: 0;\n    display: inline-block; }\n    .ngt-generic-form-layout .form-row .form-element md2-datepicker.timepicker .md2-datepicker-panel .md2-datepicker-header, .ngt-generic-form-layout .form-row .form-element md2-datepicker.datepicker .md2-datepicker-panel .md2-datepicker-header, .ngt-generic-form-layout .form-row .form-element md2-datepicker.datetimepicker .md2-datepicker-panel .md2-datepicker-header {\n      padding: 1em;\n      color: #fff;\n      font-weight: 500;\n      width: 100%;\n      white-space: nowrap;\n      box-sizing: border-box; }\n    .ngt-generic-form-layout .form-row .form-element md2-datepicker.timepicker .md2-datepicker-panel .md2-calendar-dates, .ngt-generic-form-layout .form-row .form-element md2-datepicker.datepicker .md2-datepicker-panel .md2-calendar-dates, .ngt-generic-form-layout .form-row .form-element md2-datepicker.datetimepicker .md2-datepicker-panel .md2-calendar-dates {\n      margin: 0 10px; } }\n\n@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {\n  .ngt-generic-form-layout .form-row .form-element:nth-child(n + 3):last-child .datepicker-container md2-datepicker.timepicker .md2-datepicker-panel, .ngt-generic-form-layout .form-row .form-element:nth-child(n + 3):last-child .datepicker-container md2-datepicker.datepicker .md2-datepicker-panel, .ngt-generic-form-layout .form-row .form-element:nth-child(n + 3):last-child .datepicker-container md2-datepicker.datetimepicker .md2-datepicker-panel {\n    left: -55px; } }\n\n.md-select-content {\n  background: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackendService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BackendService = (function () {
    function BackendService(http) {
        this.http = http;
    }
    BackendService.prototype.getConfiguration = function (url) {
        return this.http.get(url, this.getJsonHeaders())
            .map(function (r) { return r.json(); });
    };
    BackendService.prototype.performSearch = function (configuration, searchQuery, customConfig) {
        return this.http.get('/mocks/search-data.json', this.getJsonHeaders())
            .map(function (r) { return r.json(); })
            .map(function (response) {
            return response.filter(function (element) {
                return String(element.text).toLowerCase().indexOf(String(searchQuery).toLowerCase()) !== -1;
            });
        });
    };
    BackendService.prototype.getJsonHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('accept', 'application/json');
        return headers;
    };
    BackendService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], BackendService);
    return BackendService;
    var _a;
}());
//# sourceMappingURL=D:/Workspace/JS-TS/ng2Tools/src/app.service.js.map

/***/ }),

/***/ 956:
/***/ (function(module, exports) {

module.exports = "<md-sidenav-container>\r\n    <md-sidenav #sidenav [opened]=\"sideNavOptions.opened\" [mode]=\"sideNavOptions.mode\" class=\"app-sidenav\">\r\n        <components-menu\r\n            [menuItems]=\"menuConfiguration\"\r\n            (onItemClicked)=\"onItemClicked($event)\">\r\n        </components-menu>\r\n    </md-sidenav>\r\n    <div class=\"app-sidenav-content\">\r\n        <router-outlet></router-outlet>         \r\n    </div>\r\n</md-sidenav-container>\r\n"

/***/ }),

/***/ 957:
/***/ (function(module, exports) {

module.exports = "<md-nav-list *ngFor=\"let menuGroup of viewMenuItems\">\r\n    <span class=\"menu-subheader\">{{menuGroup.group}}</span>\r\n    <md-divider></md-divider>\r\n    <div *ngFor=\"let item of menuGroup.optionsList\">\r\n        <a md-list-item [routerLink]=\"item.url\" [class.selected]=\"item.selected\">\r\n            <md-icon>{{item.icon}}</md-icon> {{item.description}}\r\n        </a>\r\n        <md-divider></md-divider>\r\n    </div>\r\n</md-nav-list>\r\n"

/***/ }),

/***/ 958:
/***/ (function(module, exports) {

module.exports = "<md-toolbar class=\"app-header\" color=\"primary\">\r\n    <a class=\"header-title\" md-button routerLink=\"/\"><md-icon>developer_board</md-icon> Ng Tools</a>\r\n    <a class=\"header-title\" md-button routerLink=\"/api/components/autocomplete\">Api</a>\r\n    <a class=\"header-title\" md-button routerLink=\"/\">Contributing</a>\r\n</md-toolbar>\r\n<div class=\"app-content\">\r\n    <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ 959:
/***/ (function(module, exports) {

module.exports = "<div class=\"home-page\">\r\n    <div class=\"presentation-image\">\r\n        <!--<img src=\"/assets/images/globe-of-flags-1-black-white-line-art-tattoo-tatoo-svg-162104.png\">-->\r\n    </div>\r\n    <div class=\"get-started\">\r\n        <div>\r\n            Ng tools offers a generic form which is rendering using a json configuration, also an autocomplete component\r\n        </div>\r\n        <button md-raised-button routerLink=\"/api/components/autocomplete\">\r\n            GET STARTED\r\n        </button>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ 960:
/***/ (function(module, exports) {

module.exports = "<div class=\"class-definition\" *ngIf=\"classImplementation?.type === 'interface' || classImplementation?.type === 'class'\">\r\n    <div class=\"class-title\">\r\n        {{classImplementation?.title}}\r\n    </div>\r\n    <div class=\"class-name\">\r\n        <span class=\"interface\">\r\n            {{classImplementation?.type + ' '}}\r\n        </span> \r\n        <span class=\"interface-name\">\r\n            {{classImplementation?.classDefinition?.className}}\r\n        </span> {{' {'}}\r\n    </div>\r\n    <div class=\"class-props\" *ngFor=\"let prop of classImplementation?.classDefinition?.classProps\">\r\n        <span class=\"class-prop\">{{getPropertyValue(prop, 0)}}</span>\r\n        <span class=\"class-prop-interface\">{{getPropertyValue(prop, 1)}}</span>\r\n        <span class=\"class-prop-comment\">{{getComment(prop)}}</span>\r\n    </div>\r\n    <div class=\"class-ending\">\r\n        {{'}'}}\r\n    </div>\r\n</div>"

/***/ }),

/***/ 961:
/***/ (function(module, exports) {

module.exports = "<div class=\"presentation\">\r\n    <div class=\"short-title\">\r\n        <span>{{componentPresentationData?.shortDescription}}</span>\r\n    </div>\r\n    <div>\r\n        <div *ngIf=\"componentPresentationData?.componentType === 'autocomplete'\">\r\n            <autocomplete-example></autocomplete-example>\r\n        </div>\r\n        <div *ngIf=\"componentPresentationData?.componentType === 'genericForm'\">\r\n            <form-example [config]=\"componentPresentationData?.componentConfiguration\"></form-example>\r\n        </div>\r\n        <!--<ng-content select=\"ngt-component-exemple\"></ng-content>-->\r\n    </div>\r\n</div>"

/***/ }),

/***/ 962:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"descriptionData?.type === 'description'\" >     \r\n    <div class=\"description-container\">\r\n        <div class=\"description-title\">{{ descriptionData?.title }}</div>\r\n        <p class=\"description-body\">\r\n            {{ descriptionData?.bodyText?.join('\\r\\n') }}\r\n        </p>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 963:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"apiData?.type === 'list'\" >     \r\n    <div class=\"list-container\" *ngIf=\"apiData?.list\" >\r\n        <div class=\"list-title\">{{apiData?.title}}</div>\r\n        <div class=\"list-item\" *ngFor=\"let item of apiData?.list; let i = index\">\r\n            {{i+1}}. {{item}}\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 964:
/***/ (function(module, exports) {

module.exports = "<div class=\"api-reference-reader\"> \r\n    <div class=\"header\">\r\n        <span>{{data?.title}}</span>\r\n    </div>\r\n    <div class=\"table-container\" *ngIf=\"data?.apiPresentation\">\r\n        <ng-table \r\n          #ngTableReference\r\n          [config]=\"config\" \r\n          [columns]=\"data?.apiPresentation?.headerDefinition\"\r\n          [rows]=\"data?.apiPresentation?.tableDefinition\">\r\n        </ng-table>\r\n    </div>\r\n    <div class=\"api-details-container\"  *ngIf=\"data?.apiDetails\">\r\n        <div *ngFor=\"let item of data?.apiDetails\">\r\n            <api-class-renderer \r\n                *ngIf=\"item?.type === 'interface' || item?.type === 'class'\"\r\n                class=\"api-interface\"  \r\n                [classImplementation]=\"item\">\r\n            </api-class-renderer>\r\n            <api-list-renderer\r\n                *ngIf=\"item?.type === 'list'\"\r\n                class=\"api-list\" \r\n                [apiData]=\"item\">\r\n            </api-list-renderer>            \r\n            <api-description-renderer \r\n                *ngIf=\"item?.type === 'description'\"\r\n                class=\"api-description\"\r\n                [descriptionData]=\"item\">\r\n            </api-description-renderer>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ 965:
/***/ (function(module, exports) {

module.exports = "<ngt-autocomplete\r\n    [placeholder]=\"'Autocomplete test'\"\r\n    [backend]=\"backendService\"\r\n    [hint]=\"simpleHint\"\r\n    [autocompleteConfigurtation]=\"autocompleteConfigurtation\">\r\n    <span ngt-hint-container>\r\n        Test hint\r\n    </span>\r\n</ngt-autocomplete>"

/***/ }),

/***/ 966:
/***/ (function(module, exports) {

module.exports = "<ngt-generic-form\r\n    color=\"primary\"\r\n    [formDefinition]=\"formDefinition\"\r\n    [dataServices]=\"dataServices\">\r\n</ngt-generic-form>"

/***/ }),

/***/ 967:
/***/ (function(module, exports) {

module.exports = "<div class=\"layout-header\">\r\n    <button class=\"menu-button\" md-icon-button *ngIf=\"currentView === 'mobile' || currentView === 'tablet'\" (click)=\"openSideMenu()\">\r\n        <md-icon>menu</md-icon>\r\n    </button>\r\n    <span class=\"header-text\">{{headerGroup}}{{headerGroup ? ' - ' : ''}}{{headerOption}}</span>\r\n</div>\r\n<div class=\"layout-presentation\">\r\n    <md-tab-group>\r\n        <md-tab label=\"Example\">\r\n            <api-component-presentation [componentPresentationData]=\"pageData?.apiComponentPresentation\"></api-component-presentation>\r\n        </md-tab>\r\n        <md-tab label=\"Api reference\">\r\n            <api-reference-reader [data]=\"pageData?.apiReference\"></api-reference-reader>\r\n        </md-tab>\r\n        <md-tab label=\"Other exemples\">\r\n             <div class=\"other-text\">Some more tab content...</div>\r\n        </md-tab>\r\n    </md-tab-group>\r\n</div>"

/***/ }),

/***/ 968:
/***/ (function(module, exports) {

module.exports = "<md-input type=\"text\" \r\n    #triggerRef \r\n    #origin=\"cdkOverlayOrigin\"\r\n    cdk-overlay-origin \r\n    [disabled]=\"_disabled\" \r\n    [(ngModel)]=\"value\"\r\n    (blur)=\"_handleBlur($event)\"    \r\n    (focus)=\"_handleFocus($event)\"\r\n    (ngModelChange)=\"onModelChange($event)\">\r\n    <md-placeholder *ngIf=\"placeholder || ('' + iconType).indexOf('placeholder') !== -1\">\r\n\t\t<i class=\"material-icons app-input-icon\" *ngIf=\"iconType === 'placeholder-prefix'\">{{icon}}</i>\r\n\t\t{{placeholder}}\r\n\t\t<i class=\"material-icons app-input-icon\" *ngIf=\"iconType === 'placeholder-suffix'\">{{icon}}</i>\r\n\t</md-placeholder>\r\n\t<span md-prefix>\r\n\t\t<md-icon *ngIf=\"iconType === 'prefix'\">icon</md-icon>\r\n\t</span>\r\n\t<span md-suffix>\r\n\t\t<md-icon *ngIf=\"iconType === 'suffix'\">icon</md-icon>\r\n\t</span>\r\n    <md-hint [align]=\"_autocompleteHint?.align || 'start'\">\r\n        <span [@fieldHintAnimation] *ngIf=\"!errors\">{{_autocompleteHint?.value}}</span>\r\n        <ng-content *ngIf=\"errors\" select=\"[ngt-hint-container]\"></ng-content>\r\n\t</md-hint>\r\n</md-input>\r\n<template \r\n    cdk-connected-overlay \r\n    backdropClass=\"cdk-overlay-transparent-backdrop\" \r\n    [hasBackdrop]=\"true\"\r\n    [origin]=\"origin\" \r\n    [open]=\"_panelOpen\" \r\n    [positions]=\"_positions\" \r\n    [minWidth]=\"_triggerWidth\"\r\n    [offsetY]=\"_offsetY\" \r\n    [offsetX]=\"_offsetX\" \r\n    (backdropClick)=\"closePanel()\">\r\n    <div class=\"md-select-panel\" \r\n        [@transformPanel]=\"'showing'\" \r\n        [style.maxHeight]=\"maxPanelHeight\"\r\n        [class.md-select-panel-done-animating]=\"_panelDoneAnimating\"\r\n        (@transformPanel.done)=\"setOptionsSubscriptions()\"\r\n        (keydown)=\"keydown($event)\"> \r\n        <div class=\"md-select-content\" [@fadeInContent]=\"'showing'\">\r\n            <div *ngIf=\"searchState?.state === 'SEARCH_DONE'\">\r\n                <a class=\"unselectable-state\" *ngIf=\"searchState?.responseObject?.length === 0 || searchState?.searchQuery === ''\">\r\n\t\t\t\t    <span *ngIf=\"!searchState?.isQueryLengthValid\">\r\n                        {{ autocompleteConfigurtation?.statesMessages?.invalidSearchMessage }}\r\n                    </span>\r\n                    <span *ngIf=\"searchState?.isQueryLengthValid\">\r\n\t\t\t\t        {{ autocompleteConfigurtation?.statesMessages?.noResultsFoundMessage }}\r\n                    </span>\r\n                </a>\r\n                <div *ngIf=\"searchState?.responseObject?.length > 0 && searchState?.searchQuery !== ''\">\r\n                    <md-option *ngFor=\"let option of searchState?.responseObject\" \r\n\t\t\t \t    \t[value]=\"option[autocompleteConfigurtation?.listMapping?.valueField]\">\r\n                        {{ option[autocompleteConfigurtation?.listMapping?.visibleField] }}    \r\n                    </md-option>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</template>"

/***/ }),

/***/ 969:
/***/ (function(module, exports) {

module.exports = "<form novalidate *ngIf=\"ngFormGroup\" \r\n\tautocomplete=\"off\"\r\n\tclass=\"ngt-generic-form-layout {{genericFormDefinition.theme ? 'md-' + genericFormDefinition.theme + ' ' : ''}}\"\r\n\t[class.default-theme]=\"useDefaultTheme\"\r\n\t[name]=\"genericFormDefinition.name\" \r\n\t[formGroup]=\"ngFormGroup\"\r\n\t(ngSubmit)=\"onSubmit($event)\">\r\n\t<!--in case autocomplete=\"off\" is not working try to use autocomplete=\"nope\"-->\r\n\t<div *ngFor=\"let row of genericFormDefinition.rows\" class=\"form-row {{row.class || ''}}\">\r\n\t\t<div *ngFor=\"let field of row.elements\" class=\"form-element size{{field.width || 0}} {{field.position}}\" \r\n\t\t\t[ngSwitch]=\"field.type\">\r\n\r\n\t\t\t<template [ngSwitchCase]=\"'text'\">\r\n\t\t\t\t<md-input [type]=\"field.type\" \r\n\t\t\t\t\tclass=\"{{field?.class || ''}}\"\r\n\t\t\t\t\t[formControlName]=\"field.name\"\r\n\t\t\t\t\t[class.backend-error]=\"ngFormGroup?.controls[field.name]?.errors\">\r\n\t\t\t\t\t<md-placeholder *ngIf=\"field?.placeholder || ('' +field?.iconType).indexOf('placeholder') !== -1\">\r\n\t\t\t\t\t\t<i class=\"material-icons app-input-icon\" *ngIf=\"field?.iconType === 'placeholder-prefix'\">{{field.icon}}</i>\r\n\t\t\t\t\t\t{{field.placeholder}}\r\n\t\t\t\t\t\t<i class=\"material-icons app-input-icon\" *ngIf=\"field?.iconType === 'placeholder-suffix'\">{{field.icon}}</i>\r\n\t\t\t\t\t</md-placeholder>\r\n\t\t\t\t\t<span md-prefix>\r\n\t\t\t\t\t\t<md-icon *ngIf=\"field?.iconType === 'prefix'\">field.icon</md-icon>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t<span md-suffix>\r\n\t\t\t\t\t\t<md-icon *ngIf=\"field?.iconType === 'suffix'\">field.icon</md-icon>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t<md-hint [@fieldHintAnimation] *ngIf=\"field?.hint && !ngFormGroup?.controls[field?.name]?.errors\" [align]=\"field?.hint?.align || 'start'\">\r\n          \t\t\t\t{{field.hint.value}}\r\n        \t\t\t</md-hint>\r\n\t\t\t\t\t<md-hint [@fieldHintAnimation] class=\"error-message\" *ngIf=\"ngFormGroup?.controls[field?.name]?.errors\" [align]=\"'start'\">\r\n\t\t\t\t\t\t{{getTranslatedError(field, ngFormGroup.controls[field?.name])}}\r\n\t\t\t\t\t</md-hint>\r\n\t\t\t\t</md-input>\r\n\t\t\t</template>\r\n\r\n\t\t\t<template [ngSwitchCase]=\"'number'\">\r\n\t\t\t\t<md-input type=\"text\" \r\n\t\t\t\t\tclass=\"{{field.class || ''}}\" \t\t\t\t\r\n\t\t\t\t\t[formControlName]=\"field.name\"\r\n\t\t\t\t\t[class.backend-error]=\"ngFormGroup?.controls[field.name]?.errors\"\r\n\t\t\t\t\t(keypress)=\"onNumberFieldKeyPress($event)\" >\r\n\t\t\t\t\t<md-placeholder *ngIf=\"field?.placeholder || ('' +field?.iconType).indexOf('placeholder') !== -1\">\r\n\t\t\t\t\t\t<i class=\"material-icons app-input-icon\" *ngIf=\"field?.iconType === 'placeholder-prefix'\">{{field.icon}}</i>\r\n\t\t\t\t\t\t{{field.placeholder}}\r\n\t\t\t\t\t\t<i class=\"material-icons app-input-icon\" *ngIf=\"field?.iconType === 'placeholder-suffix'\">{{field.icon}}</i>\r\n\t\t\t\t\t</md-placeholder>\r\n\t\t\t\t\t<span md-prefix>\r\n\t\t\t\t\t\t<md-icon *ngIf=\"field?.iconType === 'prefix'\">field.icon</md-icon>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t<span md-suffix>\r\n\t\t\t\t\t\t<md-icon *ngIf=\"field?.iconType === 'suffix'\">field.icon</md-icon>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t<md-hint [@fieldHintAnimation] *ngIf=\"field?.hint && !ngFormGroup?.controls[field?.name]?.errors\" [align]=\"field?.hint?.align || 'start'\">\r\n\t\t\t\t\t\t{{field.hint.value}}\r\n\t\t\t\t\t</md-hint>\r\n\t\t\t\t\t<md-hint [@fieldHintAnimation] class=\"error-message\" *ngIf=\"ngFormGroup?.controls[field?.name]?.errors\" [align]=\"'start'\">\r\n\t\t\t\t\t\t{{getTranslatedError(field, ngFormGroup.controls[field?.name])}}\r\n\t\t\t\t\t</md-hint>\r\n\t\t\t\t</md-input>\r\n\t\t\t</template>\r\n\r\n\t\t\t<template [ngSwitchCase]=\"'email'\">\r\n\t\t\t\t<md-input [type]=\"field.type\"\r\n\t\t\t\t \tclass=\"{{field.class || ''}}\"\r\n\t\t\t\t\t[formControlName]=\"field.name\"\r\n\t\t\t\t\t[class.backend-error]=\"ngFormGroup?.controls[field.name]?.errors\">\r\n\t\t\t\t\t<md-placeholder *ngIf=\"field?.placeholder || ('' +field?.iconType).indexOf('placeholder') !== -1\">\r\n\t\t\t\t\t\t<i class=\"material-icons app-input-icon\" *ngIf=\"field?.iconType === 'placeholder-prefix'\">{{field.icon}}</i>\r\n\t\t\t\t\t\t{{field.placeholder}}\r\n\t\t\t\t\t\t<i class=\"material-icons app-input-icon\" *ngIf=\"field?.iconType === 'placeholder-suffix'\">{{field.icon}}</i>\r\n\t\t\t\t\t</md-placeholder>\r\n\t\t\t\t\t<span md-prefix>\r\n\t\t\t\t\t\t<md-icon *ngIf=\"field?.iconType === 'prefix'\">field.icon</md-icon>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t<span md-suffix>\r\n\t\t\t\t\t\t<md-icon *ngIf=\"field?.iconType === 'suffix'\">field.icon</md-icon>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t<md-hint [@fieldHintAnimation] *ngIf=\"field?.hint && !ngFormGroup?.controls[field?.name]?.errors\" [align]=\"field?.hint?.align || 'start'\">\r\n\t\t\t\t\t\t{{field.hint.value}}\r\n\t\t\t\t\t</md-hint>\r\n\t\t\t\t\t<md-hint [@fieldHintAnimation] class=\"error-message\" *ngIf=\"ngFormGroup?.controls[field?.name]?.errors\" [align]=\"'start'\">\r\n\t\t\t\t\t\t{{getTranslatedError(field, ngFormGroup.controls[field?.name])}}\r\n\t\t\t\t\t</md-hint>\r\n\t\t\t\t</md-input>\r\n\t\t\t</template>\r\n\r\n\t\t\t<template [ngSwitchCase]=\"'label'\">\r\n\t\t\t\t<md-input type=\"text\" \r\n\t\t\t\t\tclass=\"label {{field.class || ''}}\" \r\n\t\t\t\t\t[formControlName]=\"field.name\"\r\n\t\t\t\t\t[class.backend-error]=\"ngFormGroup?.controls[field.name]?.errors\">\r\n\t\t\t\t\t<md-placeholder *ngIf=\"field?.placeholder || ('' +field?.iconType).indexOf('placeholder') !== -1\">\r\n\t\t\t\t\t\t<i class=\"material-icons app-input-icon\" *ngIf=\"field?.iconType === 'placeholder-prefix'\">{{field.icon}}</i>\r\n\t\t\t\t\t\t{{field.placeholder}}\r\n\t\t\t\t\t\t<i class=\"material-icons app-input-icon\" *ngIf=\"field?.iconType === 'placeholder-suffix'\">{{field.icon}}</i>\r\n\t\t\t\t\t</md-placeholder>\r\n\t\t\t\t\t<span md-prefix>\r\n\t\t\t\t\t\t<md-icon *ngIf=\"field?.iconType === 'prefix'\">field.icon</md-icon>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t<span md-suffix>\r\n\t\t\t\t\t\t<md-icon *ngIf=\"field?.iconType === 'suffix'\">field.icon</md-icon>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t<md-hint [@fieldHintAnimation] *ngIf=\"field?.hint && !ngFormGroup?.controls[field?.name]?.errors\" [align]=\"field?.hint?.align || 'start'\">\r\n\t\t\t\t\t\t{{field.hint.value}}\r\n\t\t\t\t\t</md-hint>\r\n\t\t\t\t\t<md-hint [@fieldHintAnimation] class=\"error-message\" *ngIf=\"ngFormGroup?.controls[field?.name]?.errors\" [align]=\"'start'\">\r\n\t\t\t\t\t\t{{getTranslatedError(field, ngFormGroup.controls[field?.name])}}\r\n\t\t\t\t\t</md-hint>\r\n\t\t\t\t</md-input>\r\n\t\t\t</template>\r\n\r\n\t\t\t<template [ngSwitchCase]=\"'password'\">\r\n\t\t\t\t<md-input [type]=\"field.type\" \r\n\t\t\t\t\tclass=\"{{field.class || ''}}\" \r\n\t\t\t\t\t[formControlName]=\"field.name\"\r\n\t\t\t\t\t[class.backend-error]=\"ngFormGroup?.controls[field.name]?.errors\">\r\n\t\t\t\t\t<md-placeholder *ngIf=\"field?.placeholder || ('' +field?.iconType).indexOf('placeholder') !== -1\">\r\n\t\t\t\t\t\t<i class=\"material-icons app-input-icon\" *ngIf=\"field?.iconType === 'placeholder-prefix'\">{{field.icon}}</i>\r\n\t\t\t\t\t\t{{field.placeholder}}\r\n\t\t\t\t\t\t<i class=\"material-icons app-input-icon\" *ngIf=\"field?.iconType === 'placeholder-suffix'\">{{field.icon}}</i>\r\n\t\t\t\t\t</md-placeholder>\r\n\t\t\t\t\t<span md-prefix>\r\n\t\t\t\t\t\t<md-icon *ngIf=\"field?.iconType === 'prefix'\">field.icon</md-icon>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t<span md-suffix>\r\n\t\t\t\t\t\t<md-icon *ngIf=\"field?.iconType === 'suffix'\">field.icon</md-icon>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t<md-hint [@fieldHintAnimation] *ngIf=\"field?.hint && !ngFormGroup?.controls[field?.name]?.errors\" [align]=\"field?.hint?.align || 'start'\">\r\n\t\t\t\t\t\t{{field.hint.value}}\r\n\t\t\t\t\t</md-hint>\r\n\t\t\t\t\t<md-hint [@fieldHintAnimation] class=\"error-message\" *ngIf=\"ngFormGroup?.controls[field?.name]?.errors\" [align]=\"'start'\">\r\n\t\t\t\t\t\t{{getTranslatedError(field, ngFormGroup.controls[field?.name])}}\r\n\t\t\t\t\t</md-hint>\r\n\t\t\t\t</md-input>\r\n\t\t\t</template>\r\n\r\n\t\t\t<template [ngSwitchCase]=\"'checkbox'\">\r\n\t\t\t\t<md-checkbox \r\n\t\t\t\t\t[disabled]=\"field.disabled\" \r\n\t\t\t\t\t[name]=\"field.name\" \r\n\t\t\t\t\t[checked]=\"field.value === 'checked' ? true : false\" \r\n\t\t\t\t\t[formControlName]=\"field.name\"\r\n\t\t\t\t\t[class.backend-error]=\"ngFormGroup?.controls[field.name]?.errors\">\r\n\t\t\t\t\t{{field.placeholder}}\r\n\t\t\t\t</md-checkbox>\r\n\t\t\t\t<md-hint [@fieldHintAnimation] class=\"error-message\" *ngIf=\"ngFormGroup?.controls[field.name]?.errors\" [align]=\"'start'\">\r\n\t\t\t\t\t{{getTranslatedError(field, ngFormGroup.controls[field.name])}}\r\n\t\t\t\t</md-hint>\r\n\t\t\t\t<!--<error-message [name]=\"field.name\" [control]=\"ngFormGroup.controls[field.name]\" [error]=\"currentFormValue?.errors\"></error-message>-->\r\n\t\t\t</template>\r\n\r\n\t\t\t<template [ngSwitchCase]=\"'radiobox'\">\r\n\t\t\t\t<div class=\"selectbox {{field.class || ''}}\" [class.backend-error]=\"ngFormGroup?.controls[field.name]?.errors\">\r\n\t\t\t\t\t<md-radio-group [formControlName]=\"field.name\">\r\n\t\t\t\t\t\t<md-radio-button *ngFor=\"let radio of field.radioButtons; let i = index\" [value]=\"radio.value\"\r\n\t\t\t\t\t\t\t[checked]=\"radio.checked\" \r\n\t\t\t\t\t\t\t[class]=\"radio.class\" \r\n\t\t\t\t\t\t\t[name]=\"field.name\">\r\n\t\t\t\t\t\t\t{{radio.placeholder}}\r\n\t\t\t\t\t\t</md-radio-button>\r\n\t\t\t\t\t</md-radio-group>\r\n\t\t\t\t\t<md-hint [@fieldHintAnimation] class=\"error-message\" *ngIf=\"ngFormGroup?.controls[field.name]?.errors\" [align]=\"'start'\">\r\n\t\t\t\t\t\t{{getTranslatedError(field, ngFormGroup.controls[field.name])}}\r\n\t\t\t\t\t</md-hint>\r\n\t\t\t\t\t<!--<error-message [name]=\"field.name\" [control]=\"ngFormGroup.controls[field.name]\" [error]=\"currentFormValue?.errors\"></error-message>-->\r\n\t\t\t\t</div>\r\n\t\t\t</template>\r\n\r\n\t\t\t<template [ngSwitchCase]=\"'slider'\">\r\n\t\t\t\t<md-slide-toggle \r\n\t\t\t\t\tclass=\"md-{{color || ''}} {{field.class || ''}}\" \r\n\t\t\t\t\t[name]=\"field.name\" \r\n\t\t\t\t\t[attr.color]=\"color\" \r\n\t\t\t\t\t[formControlName]=\"field.name\"\r\n\t\t\t\t\t[class.backend-error]=\"ngFormGroup?.controls[field.name]?.errors\">\r\n\t\t\t\t\t{{field.placeholder}}\r\n\t\t\t\t</md-slide-toggle>\t\t\t\t\r\n\t\t\t\t<md-hint [@fieldHintAnimation] class=\"error-message\" *ngIf=\"ngFormGroup?.controls[field.name]?.errors\" [align]=\"'start'\">\r\n\t\t\t\t\t{{getTranslatedError(field, ngFormGroup.controls[field.name])}}\r\n\t\t\t\t</md-hint>\r\n\t\t\t\t<!--the class binding written like this class=\"{}\" overrides the color setting-->\r\n\t\t\t\t<!--<error-message [name]=\"field.name\" [control]=\"ngFormGroup.controls[field.name]\" [error]=\"currentFormValue?.errors\"></error-message>-->\r\n\t\t\t</template>\r\n\r\n\t\t\t<template [ngSwitchCase]=\"'textarea'\">\t\t\t\t\r\n\t\t\t\t<md-input [type]=\"field.type\" \r\n\t\t\t\t\tclass=\"{{field.class || ''}}\" \r\n\t\t\t\t\t[formControlName]=\"field.name\"\r\n\t\t\t\t\t[class.backend-error]=\"ngFormGroup?.controls[field.name]?.errors\">\r\n\t\t\t\t\t<md-placeholder *ngIf=\"field?.placeholder || ('' +field?.iconType).indexOf('placeholder') !== -1\">\r\n\t\t\t\t\t\t<i class=\"material-icons app-input-icon\" *ngIf=\"field?.iconType === 'placeholder-prefix'\">{{field.icon}}</i>\r\n\t\t\t\t\t\t{{field.placeholder}}\r\n\t\t\t\t\t\t<i class=\"material-icons app-input-icon\" *ngIf=\"field?.iconType === 'placeholder-suffix'\">{{field.icon}}</i>\r\n\t\t\t\t\t</md-placeholder>\r\n\t\t\t\t\t<span md-prefix>\r\n\t\t\t\t\t\t<md-icon *ngIf=\"field?.iconType === 'prefix'\">field.icon</md-icon>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t<span md-suffix>\r\n\t\t\t\t\t\t<md-icon *ngIf=\"field?.iconType === 'suffix'\">field.icon</md-icon>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t<md-hint [@fieldHintAnimation] *ngIf=\"field?.hint && !ngFormGroup?.controls[field?.name]?.errors\" [align]=\"field?.hint?.align || 'start'\">\r\n\t\t\t\t\t\t{{field.hint.value}}\r\n\t\t\t\t\t</md-hint>\r\n\t\t\t\t\t<md-hint [@fieldHintAnimation] class=\"error-message\" *ngIf=\"ngFormGroup?.controls[field?.name]?.errors\" [align]=\"'start'\">\r\n\t\t\t\t\t\t{{getTranslatedError(field, ngFormGroup.controls[field?.name])}}\r\n\t\t\t\t\t</md-hint>\r\n\t\t\t\t</md-input>\r\n\t\t\t\t<!--<error-message [name]=\"field.name\" [control]=\"ngFormGroup.controls[field.name]\" [error]=\"currentFormValue?.errors\"></error-message>-->\r\n\t\t\t</template>\r\n\r\n\t\t\t<template [ngSwitchCase]=\"'combobox'\">\r\n\t\t\t\t<div class=\"combobox-container\">\r\n\t\t\t\t\t<md-select class=\"{{field.class || ''}}\" \r\n\t\t\t\t\t\t[placeholder]=\"field.placeholder\" \r\n\t\t\t\t\t\t[formControlName]=\"field.name\"\r\n\t\t\t\t\t\t[class.backend-error]=\"ngFormGroup?.controls[field.name]?.errors\">\r\n   \t\t\t\t\t\t<md-option *ngFor=\"let option of field.dataSource\" \r\n\t\t\t\t\t\t   \t[value]=\"option[field.valueField]\"\r\n\t\t\t\t\t\t\t(click)=\"select(field, option)\">\r\n\t\t\t\t\t\t\t{{ getDisplayField(field, option) }}\r\n\t\t\t\t\t\t</md-option>\r\n\t\t\t\t\t</md-select>\r\n\t\t\t\t\t<md-hint [@fieldHintAnimation] *ngIf=\"field.hint && !ngFormGroup?.controls[field.name]?.errors\" [align]=\"field.hint.align || 'start'\">\r\n          \t\t\t\t{{field.hint.value}}\r\n        \t\t\t</md-hint>\r\n\t\t\t\t\t<md-hint [@fieldHintAnimation] class=\"error-message\" *ngIf=\"ngFormGroup?.controls[field.name]?.errors\" [align]=\"'start'\">\r\n\t\t\t\t\t\t{{getTranslatedError(field, ngFormGroup.controls[field.name])}}\r\n\t\t\t\t\t</md-hint>\r\n\t\t\t\t</div>\r\n\t\t\t</template>\r\n\t\t\t\r\n\t\t\t<template [ngSwitchCase]=\"'autocomplete'\">\r\n\t\t\t\t<ngt-autocomplete class=\"{{field.class || ''}}\" \r\n\t\t\t\t\t[placeholder]=\"field.placeholder\"\r\n\t\t\t\t\t[iconType]=\"field.iconType\"\r\n\t\t\t\t\t[icon]=\"field.icon\"\r\n\t\t\t\t\t[hint]=\"field.hint\"\r\n\t\t\t\t\t[errors]=\"!!ngFormGroup?.controls[field.name]?.errors\"\r\n        \t\t\t[backend]=\"dataServices[field.name]\"\r\n        \t\t\t[autocompleteConfigurtation]=\"field.config\"\r\n\t\t\t\t\t[formControlName]=\"field.name\"\r\n\t\t\t\t\t(onSelectionChange)=\"select(field, $event)\">\t\t\t\t\t\r\n\t\t\t\t\t<!--TODO hint message configuration to autocomplete configuration-->\r\n\t\t\t\t\t<span ngt-hint-container [@fieldHintAnimation] class=\"error-message\">{{getTranslatedError(field, ngFormGroup.controls[field.name])}}</span>\r\n\t\t\t\t</ngt-autocomplete>\r\n\t\t\t</template>\r\n\r\n\t\t\t<template [ngSwitchCase]=\"'selectWithSearch'\">\r\n\t\t\t</template>\r\n\r\n\t\t\t<template [ngSwitchCase]=\"'multiselect'\">\r\n\t\t\t\t<div class=\"multiselect-container\">\r\n\t\t\t\t\t<md2-multiselect [items]=\"field.dataSource\"\r\n\t\t\t\t\t\t[placeholder]=\"field.placeholder\"\t\r\n                \t \t[item-text]=\"field.visibleField\"\r\n                \t \t[item-value]=\"field.valueField\"\r\n                \t \t[formControlName]=\"field.name\"\r\n\t\t\t\t\t\t(blur)=\"setInputAsTouched(field)\"\r\n                \t \t(change)=\"select(field, $event)\">\r\n\t\t\t\t\t</md2-multiselect>\r\n\t\t\t\t\t<md-hint [@fieldHintAnimation] *ngIf=\"field.hint && !ngFormGroup?.controls[field.name]?.errors\" [align]=\"field.hint.align || 'start'\">\r\n          \t\t\t\t{{field.hint.value}}\r\n        \t\t\t</md-hint>\r\n\t\t\t\t\t<md-hint [@fieldHintAnimation] class=\"error-message\" *ngIf=\"ngFormGroup?.controls[field.name]?.errors\" [align]=\"'start'\">\r\n\t\t\t\t\t\t{{getTranslatedError(field, ngFormGroup.controls[field.name])}}\r\n\t\t\t\t\t</md-hint>\r\n\t\t\t\t</div>\r\n\t\t\t</template>\r\n\r\n\t\t\t<template [ngSwitchCase]=\"'multiselectWithSearch'\">\r\n\t\t\t</template>\r\n\r\n\t\t\t<template [ngSwitchCase]=\"'datepicker'\">\r\n\t\t\t\t<div class=\"datepicker-container\">\r\n\t\t\t\t\t<md2-datepicker \r\n\t\t\t\t\t \tclass=\"datepicker {{field.class || ''}}\" \r\n\t\t\t\t\t\ttype=\"date\"\r\n\t\t\t\t\t\t[readonly]=\"field.readonly\"\r\n\t\t\t\t\t\t[min]=\"field.minDateValue\"\r\n\t\t\t\t\t\t[max]=\"field.maxDateValue\"\r\n\t\t\t\t\t\t[placeholder]=\"field.placeholder\"\r\n\t\t\t\t\t\t[format]=\"field.format\"\r\n\t\t\t\t\t\t[formControlName]=\"field.name\">\r\n\t\t\t\t\t</md2-datepicker>\r\n\t\t\t\t\t<md-hint [@fieldHintAnimation] *ngIf=\"field.hint && !ngFormGroup?.controls[field.name]?.errors\" [align]=\"field.hint.align || 'start'\">\r\n          \t\t\t\t{{field.hint.value}}\r\n        \t\t\t</md-hint>\r\n\t\t\t\t\t<md-hint [@fieldHintAnimation] class=\"error-message\" *ngIf=\"ngFormGroup?.controls[field.name]?.errors\" [align]=\"'start'\">\r\n\t\t\t\t\t\t{{getTranslatedError(field, ngFormGroup.controls[field.name])}}\r\n\t\t\t\t\t</md-hint>\r\n\t\t\t\t</div>\r\n\t\t\t</template>\r\n\r\n\t\t\t<template [ngSwitchCase]=\"'timepicker'\">\r\n\t\t\t\t<div class=\"datepicker-container\">\r\n\t\t\t\t\t<md2-datepicker \r\n\t\t\t\t\t\tclass=\"timepicker {{field.class || ''}}\" \r\n\t\t\t\t\t\ttype=\"time\"\r\n\t\t\t\t\t\t[readonly]=\"field.readonly\"\r\n\t\t\t\t\t\t[min]=\"field.minDateValue\"\r\n\t\t\t\t\t\t[max]=\"field.maxDateValue\"\r\n\t\t\t\t\t\t[placeholder]=\"field.placeholder\"\r\n\t\t\t\t\t\t[format]=\"field.format\"\r\n\t\t\t\t\t\t[formControlName]=\"field.name\">\r\n\t\t\t\t\t</md2-datepicker>\t\t\t\t\t\r\n\t\t\t\t\t<md-hint [@fieldHintAnimation] *ngIf=\"field.hint && !ngFormGroup?.controls[field.name]?.errors\" [align]=\"field.hint.align || 'start'\">\r\n          \t\t\t\t{{field.hint.value}}\r\n        \t\t\t</md-hint>\r\n\t\t\t\t\t<md-hint [@fieldHintAnimation] class=\"error-message\" *ngIf=\"ngFormGroup?.controls[field.name]?.errors\" [align]=\"'start'\">\r\n\t\t\t\t\t\t{{getTranslatedError(field, ngFormGroup.controls[field.name])}}\r\n\t\t\t\t\t</md-hint>\r\n\t\t\t\t</div>\r\n\t\t\t</template>\r\n\r\n\t\t\t<template [ngSwitchCase]=\"'datetimepicker'\">\r\n\t\t\t\t<div class=\"datepicker-container\">\r\n\t\t\t\t\t<md2-datepicker \r\n\t\t\t\t\t\tclass=\"datetimepicker {{field.class || ''}}\" \r\n\t\t\t\t\t\ttype=\"datetime\"\r\n\t\t\t\t\t\t[readonly]=\"field.readonly\"\r\n\t\t\t\t\t\t[min]=\"field.minDateValue\"\r\n\t\t\t\t\t\t[max]=\"field.maxDateValue\"\r\n\t\t\t\t\t\t[placeholder]=\"field.placeholder\"\r\n\t\t\t\t\t\t[format]=\"field.format\"\r\n\t\t\t\t\t\t[formControlName]=\"field.name\">\r\n\t\t\t\t\t</md2-datepicker>\r\n\t\t\t\t\t<md-hint [@fieldHintAnimation] *ngIf=\"field.hint && !ngFormGroup?.controls[field.name]?.errors\" [align]=\"field.hint.align || 'start'\">\r\n          \t\t\t\t{{field.hint.value}}\r\n        \t\t\t</md-hint>\r\n\t\t\t\t\t<md-hint [@fieldHintAnimation] class=\"error-message\" *ngIf=\"ngFormGroup?.controls[field.name]?.errors\" [align]=\"'start'\">\r\n\t\t\t\t\t\t{{getTranslatedError(field, ngFormGroup.controls[field.name])}}\r\n\t\t\t\t\t</md-hint>\r\n\t\t\t\t</div>\r\n\t\t\t</template>\r\n\r\n\t\t\t<template [ngSwitchCase]=\"'header'\">\r\n\t\t\t\t<md-input type=\"text\"\r\n\t\t\t\t\tclass=\"label {{field.class || 'default-header'}}\"\r\n\t\t\t\t\tplaceholder=\"\"\r\n\t\t\t\t\treadonly\r\n\t\t\t\t\t[formControlName]=\"field.name\">\r\n\t\t\t\t</md-input>\r\n\t\t\t</template>\r\n\r\n\t\t\t<template [ngSwitchCase]=\"'submit'\">\r\n\t\t\t\t<template [ngIf]=\"field.buttonType === 'md-icon-button'\">\r\n\t\t\t\t\t<button md-icon-button [type]=\"field.type\"\r\n\t\t\t\t\t\tclass=\"{{color ? 'md-' + color + ' ' : ''}}{{field.class || ''}}\" \r\n\t\t\t\t\t\t[disabled]=\"formButtonDisabledState\"\r\n\t\t\t\t\t\t[attr.color]=\"color\">\r\n                    \t<md-icon>{{ field.icon }}</md-icon>\r\n                \t</button>\r\n\t\t\t\t</template>\r\n\t\t\t\t<template [ngIf]=\"field.buttonType === 'md-raised-button'\">\r\n\t\t\t\t\t<button md-raised-button [type]=\"field.type\"\r\n\t\t\t\t\t\tclass=\"{{color ? 'md-' + color + ' ' : ''}}{{field.class || ''}}\"\r\n\t\t\t\t\t\t[attr.color]=\"color\"\r\n\t\t\t\t\t\t[disabled]=\"formButtonDisabledState\">\r\n                    \t{{ field.value }}\r\n                \t</button>\r\n\t\t\t\t</template>\r\n\t\t\t</template>\r\n\r\n\t\t\t<template [ngSwitchCase]=\"'reset'\">\r\n\t\t\t\t<template [ngIf]=\"field.buttonType === 'md-icon-button'\">\r\n\t\t\t\t\t<button md-icon-button\r\n\t\t\t\t\t\tclass=\"{{color ? 'md-' + color + ' ' : ''}}{{field.class || ''}}\" \r\n\t\t\t\t\t\t[disabled]=\"formIsNotChanged\"\r\n\t\t\t\t\t\t[attr.color]=\"color\"\r\n\t\t\t\t\t\t(click)=\"resetForm(initialValue)\">\r\n                    \t<md-icon>{{ field.icon }}</md-icon>\r\n                \t</button>\r\n\t\t\t\t</template>\r\n\t\t\t\t<template [ngIf]=\"field.buttonType === 'md-raised-button'\">\r\n\t\t\t\t\t<button md-raised-button\r\n\t\t\t\t\t\tclass=\"{{color ? 'md-' + color + ' ' : ''}}{{field.class || ''}}\"\r\n\t\t\t\t\t\t[attr.color]=\"color\"\r\n\t\t\t\t\t\t[disabled]=\"formIsNotChanged\"\r\n\t\t\t\t\t\t(click)=\"resetForm(initialValue)\">\r\n                    \t{{ field.value }}\r\n                \t</button>\r\n\t\t\t\t</template>\r\n\t\t\t</template>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div *ngIf=\"enableLogging\">\r\n\t\tForm value\r\n\t\t<br>\r\n\t\t{{ ngFormGroup.value | json }}\r\n\t\t<br>\r\n\t\tInitial value\r\n\t\t<br>\r\n\t\t{{ initialValue | json }}\r\n\t</div>\r\n</form>"

/***/ })

},[1019]);
//# sourceMappingURL=main.bundle.js.map