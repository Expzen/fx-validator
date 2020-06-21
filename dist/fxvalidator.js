(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["fxvalidator"] = factory();
	else
		root["fxvalidator"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: FxValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FxValidator\", function() { return FxValidator; });\n/* harmony import */ var _validationTarget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validationTarget */ \"./src/validationTarget.js\");\n/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messages */ \"./src/messages.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\n\n/**\r\n * Create a validation model.\r\n * @param {*} data Data to validate\r\n * @param {*} model Validation configs\r\n */\n\nfunction FxValidator(data, model) {\n  this.targets = {};\n  this.data = null;\n  this.validation = {};\n  this.bind(data, model);\n  Object.defineProperty(this, 'invalid', {\n    get: function get() {\n      for (var key in this.targets) {\n        if (Object.hasOwnProperty.call(this.targets, key)) {\n          var target = this.targets[key];\n\n          if (target.invalid) {\n            return true;\n          }\n        }\n      }\n\n      return false;\n    }\n  });\n}\n/**\r\n * Bind data source and validation model. Former model will be unbinded.\r\n * @param {*} data Data to validate\r\n * @param {*} model Validation configs\r\n */\n\n\nFxValidator.prototype.bind = function (data, model) {\n  if (_typeof(data) == 'object' || typeof data == 'function') {\n    switch (_typeof(data)) {\n      case 'object':\n        this.data = function () {\n          return data;\n        };\n\n        break;\n\n      case 'function':\n        this.data = data;\n        break;\n    }\n  } else if (this.data == undefined) {\n    return;\n  }\n\n  if (_typeof(model) == 'object') {\n    this.validation = model;\n  }\n\n  if (_typeof(this.validation) != 'object') {\n    return;\n  }\n\n  this.unbind();\n\n  for (var key in this.validation) {\n    if (Object.hasOwnProperty.call(this.validation, key) && key[0] != '$') {\n      var propModel = this.validation[key];\n      this.targets[key] = new _validationTarget__WEBPACK_IMPORTED_MODULE_0__[\"default\"](propModel, this.data, key);\n    }\n  }\n};\n/**\r\n * Unbind validation model\r\n */\n\n\nFxValidator.prototype.unbind = function () {\n  for (var key in this.targets) {\n    if (Object.hasOwnProperty.call(this.targets, key) && key[0] != '$') {\n      if (typeof this.targets[key].dispose == 'function') this.targets[key].dispose();\n      delete this.targets[key];\n    }\n  }\n};\n/**\r\n * Execute validate\r\n */\n\n\nFxValidator.prototype.validate = function () {\n  var invalid = false;\n\n  for (var key in this.targets) {\n    var target = this.targets[key];\n\n    if (target instanceof _validationTarget__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n      var targetResult = target.validate();\n      invalid = invalid || !targetResult;\n    }\n  }\n\n  this.validation.$invalid = invalid;\n  return !invalid;\n};\n/**\r\n * Clear all invalid messages\r\n */\n\n\nFxValidator.prototype.cleanMessage = function () {\n  for (var key in this.targets) {\n    var target = this.targets[key];\n\n    if (target instanceof _validationTarget__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n      target.cleanMessage();\n    }\n  }\n};\n/**\r\n * Default Validation messages\r\n */\n\n\nFxValidator.validationMessages = _messages__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n\n\n//# sourceURL=webpack://fxvalidator/./src/index.js?");

/***/ }),

/***/ "./src/messages.js":
/*!*************************!*\
  !*** ./src/messages.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\r\n * %k : name of validator\r\n * %v : validator value\r\n * %d : data to be validated\r\n */\nvar messages = {\n  'required': '必填欄位',\n  'maxlen': '不應長於 %v',\n  'minlen': '不應短於 %v',\n  'max': '應不大於 %v',\n  'min': '應不小於 %v',\n  'within': '該值不在可用範圍內',\n  'without': '該值不可在指定範圍內',\n  'default': '未通過 %k 驗證'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (messages);\n\n//# sourceURL=webpack://fxvalidator/./src/messages.js?");

/***/ }),

/***/ "./src/validationTarget.js":
/*!*********************************!*\
  !*** ./src/validationTarget.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validators */ \"./src/validators.js\");\n/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messages */ \"./src/messages.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\n\n/**\r\n * Create a field valid instance.\r\n * @param {*} model - Validation config object\r\n * @param {*} data - Object to validate\r\n * @param {string} key - Field of object to validate\r\n */\n\nfunction ValidationTarget(model, data, key) {\n  this.model = model;\n  this.key = key;\n  this.result = {\n    invalid: false,\n    messages: [],\n    validators: {}\n  };\n  Object.assign(this.model, {\n    result: this.result\n  });\n  var that = this;\n  Object.defineProperty(that, 'data', {\n    configurable: true,\n    get: function get() {\n      switch (_typeof(data)) {\n        case 'object':\n          return data[key];\n\n        case 'function':\n          return data()[key];\n\n        default:\n          return '';\n      }\n    },\n    set: function set(value) {\n      switch (_typeof(data)) {\n        case 'object':\n          data[key] = value;\n          this.validate();\n          break;\n\n        case 'function':\n          data()[key] = value;\n          this.validate();\n          break;\n      }\n    }\n  });\n}\n/**\r\n * Do validate.\r\n */\n\n\nValidationTarget.prototype.validate = function () {\n  var valid = true;\n  var that = this;\n  this.clearMessage();\n\n  for (var ruleKey in that.model.rules) {\n    var rule = that.model.rules[ruleKey];\n    var itemValid = true;\n    var ruleValue = typeof rule.value == 'function' ? rule.value() : rule.value;\n    var data = that.data;\n\n    if (_validators__WEBPACK_IMPORTED_MODULE_0__[\"default\"][ruleKey]) {\n      itemValid = _validators__WEBPACK_IMPORTED_MODULE_0__[\"default\"][ruleKey](data, ruleValue);\n      valid = valid && itemValid;\n    }\n\n    if (_typeof(that.result[ruleKey]) != 'object') {\n      Object.assign(that.result.validators, _defineProperty({}, ruleKey, {\n        invalid: false\n      }));\n    }\n\n    if (!itemValid) {\n      var msg = getInvalidMessage({\n        key: ruleKey,\n        value: ruleValue,\n        msg: rule.message,\n        data: data || ''\n      });\n      that.result.messages.push(msg);\n      that.result.validators[ruleKey].invalid = true;\n    } else {\n      that.result.validators[ruleKey].invalid = false;\n    }\n  }\n\n  this.result.invalid = !valid;\n  return valid;\n};\n/**\r\n * Clear all messages.\r\n */\n\n\nValidationTarget.prototype.clearMessage = function () {\n  this.result.messages.splice(0, this.result.messages.length);\n};\n/**\r\n * Destroy object\r\n */\n\n\nValidationTarget.prototype.dispose = function () {\n  delete this.model;\n  delete this.key;\n  delete this.data;\n};\n\nfunction getInvalidMessage(param) {\n  var ruleMsg = param.msg;\n\n  if (typeof ruleMsg != 'string') {\n    ruleMsg = _messages__WEBPACK_IMPORTED_MODULE_1__[\"default\"][param.key];\n  }\n\n  if (typeof ruleMsg == 'string') {\n    return ruleMsg.replace(/%v/g, param.value).replace(/%k/g, param.key).replace(/%d/g, param.data);\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ValidationTarget);\n\n//# sourceURL=webpack://fxvalidator/./src/validationTarget.js?");

/***/ }),

/***/ "./src/validators.js":
/*!***************************!*\
  !*** ./src/validators.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction required(data) {\n  if (data === null || data === '' || data === undefined) {\n    return false;\n  }\n\n  return true;\n}\n\nfunction maxlen(data, param) {\n  if (typeof data === 'string' || Array.isArray(data)) {\n    return data.length <= param;\n  }\n\n  return false;\n}\n\nfunction minlen(data, param) {\n  if (typeof data === 'string' || Array.isArray(data)) {\n    return data.length >= param;\n  }\n\n  return false;\n}\n\nfunction max(data, param) {\n  var num = Number(data);\n  var limit = Number(param);\n  return num <= limit;\n}\n\nfunction min(data, param) {\n  var num = Number(data);\n  var limit = Number(param);\n  return num >= limit;\n}\n\nfunction within(data, param) {\n  if (Array.isArray(param)) {\n    return param.findIndex(function (m) {\n      return m == data;\n    }) >= 0;\n  }\n\n  return false;\n}\n\nfunction without(data, param) {\n  if (Array.isArray(param)) {\n    return param.findIndex(function (m) {\n      return m == data;\n    }) < 0;\n  }\n\n  return true;\n}\n\nfunction regex(data, param) {\n  if (typeof param == 'string') {\n    param = RegExp(param);\n  }\n\n  if (param instanceof RegExp) {\n    return param.test(data);\n  }\n\n  console.error('Regular expression error, validator value is not a RegExp object or pattern string');\n  return false;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  required: required,\n  maxlen: maxlen,\n  minlen: minlen,\n  within: within,\n  max: max,\n  min: min,\n  without: without,\n  regex: regex\n});\n\n//# sourceURL=webpack://fxvalidator/./src/validators.js?");

/***/ })

/******/ });
});