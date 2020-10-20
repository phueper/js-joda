//! @version @js-joda/timezone-2.3.0
//! @copyright (c) 2015-present, Philipp Thürwächter, Pattrick Hüper & js-joda contributors
//! @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@js-joda/core"));
	else if(typeof define === 'function' && define.amd)
		define(["@js-joda/core"], factory);
	else if(typeof exports === 'object')
		exports["JSJodaTimezone"] = factory(require("@js-joda/core"));
	else
		root["JSJodaTimezone"] = factory(root["JSJoda"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__js_joda_core__) {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/MomentZoneRules.js":
/*!********************************!*\
  !*** ./src/MomentZoneRules.js ***!
  \********************************/
/*! namespace exports */
/*! export MomentZoneRules [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MomentZoneRules": () => /* binding */ MomentZoneRules
/* harmony export */ });
/* harmony import */ var _js_joda_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js-joda/core */ "@js-joda/core");
/* harmony import */ var _js_joda_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_joda_core__WEBPACK_IMPORTED_MODULE_0__);
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

/*
 * @copyright (c) 2016-present, Philipp Thürwächter, Pattrick Hüper
 * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
 * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
 */

var MomentZoneRules = function (_ZoneRules) {
  _inheritsLoose(MomentZoneRules, _ZoneRules);

  function MomentZoneRules(tzdbInfo) {
    var _this;

    _this = _ZoneRules.call(this) || this;
    _this._tzdbInfo = tzdbInfo;
    _this._ldtUntils = new LDTUntils(_this._tzdbInfo.untils, _this._tzdbInfo.offsets);
    return _this;
  }

  var _proto = MomentZoneRules.prototype;

  _proto.isFixedOffset = function isFixedOffset() {
    return this._tzdbInfo.offsets.length === 1;
  };

  _proto.offsetOfInstant = function offsetOfInstant(instant) {
    var epochMilli = instant.toEpochMilli();
    return this.offsetOfEpochMilli(epochMilli);
  };

  _proto.offsetOfEpochMilli = function offsetOfEpochMilli(epochMilli) {
    var index = binarySearch(this._tzdbInfo.untils, epochMilli);
    return _js_joda_core__WEBPACK_IMPORTED_MODULE_0__.ZoneOffset.ofTotalSeconds(this._offsetByIndexInSeconds(index));
  };

  _proto.offsetOfLocalDateTime = function offsetOfLocalDateTime(localDateTime) {
    var info = this._offsetInfo(localDateTime);

    if (info instanceof _js_joda_core__WEBPACK_IMPORTED_MODULE_0__.ZoneOffsetTransition) {
      return info.offsetBefore();
    }

    return info;
  };

  _proto._offsetInfo = function _offsetInfo(localDateTime) {
    var index = ldtBinarySearch(this._ldtUntils, localDateTime);
    var offsetIndex = index >> 1;

    if (index % 2 === 1) {
      var ldtBefore = this._ldtUntils.get(Math.max(index - 1, 0));

      var ldtAfter = this._ldtUntils.get(Math.min(index, this._ldtUntils.size - 1));

      var offsetBefore = _js_joda_core__WEBPACK_IMPORTED_MODULE_0__.ZoneOffset.ofTotalSeconds(this._offsetByIndexInSeconds(offsetIndex));
      var offsetAfter = _js_joda_core__WEBPACK_IMPORTED_MODULE_0__.ZoneOffset.ofTotalSeconds(this._offsetByIndexInSeconds(Math.min(offsetIndex + 1, this._tzdbInfo.offsets.length - 1)));

      if (offsetBefore.compareTo(offsetAfter) > 0) {
        return _js_joda_core__WEBPACK_IMPORTED_MODULE_0__.ZoneOffsetTransition.of(ldtBefore, offsetBefore, offsetAfter);
      } else {
        return _js_joda_core__WEBPACK_IMPORTED_MODULE_0__.ZoneOffsetTransition.of(ldtAfter, offsetBefore, offsetAfter);
      }
    }

    return _js_joda_core__WEBPACK_IMPORTED_MODULE_0__.ZoneOffset.ofTotalSeconds(this._offsetByIndexInSeconds(offsetIndex));
  };

  _proto._offsetByIndexInSeconds = function _offsetByIndexInSeconds(index) {
    return -offsetInSeconds(this._tzdbInfo.offsets[index]);
  };

  _proto.validOffsets = function validOffsets(localDateTime) {
    var info = this._offsetInfo(localDateTime);

    if (info instanceof _js_joda_core__WEBPACK_IMPORTED_MODULE_0__.ZoneOffsetTransition) {
      return info.validOffsets();
    }

    return [info];
  };

  _proto.transition = function transition(localDateTime) {
    var info = this._offsetInfo(localDateTime);

    if (info instanceof _js_joda_core__WEBPACK_IMPORTED_MODULE_0__.ZoneOffsetTransition) {
      return info;
    }

    return null;
  };

  _proto.standardOffset = function standardOffset(instant) {
    notSupported('ZoneRules.standardOffset');
  };

  _proto.daylightSavings = function daylightSavings(instant) {
    notSupported('ZoneRules.daylightSavings');
  };

  _proto.isDaylightSavings = function isDaylightSavings(instant) {
    notSupported('ZoneRules.isDaylightSavings');
  };

  _proto.isValidOffset = function isValidOffset(localDateTime, offset) {
    return this.validOffsets(localDateTime).some(function (o) {
      return o.equals(offset);
    });
  };

  _proto.nextTransition = function nextTransition(instant) {
    notSupported('ZoneRules.nextTransition');
  };

  _proto.previousTransition = function previousTransition(instant) {
    notSupported('ZoneRules.previousTransition');
  };

  _proto.transitions = function transitions() {
    notSupported('ZoneRules.transitions');
  };

  _proto.transitionRules = function transitionRules() {
    notSupported('ZoneRules.transitionRules');
  };

  _proto.equals = function equals(other) {
    if (this === other) {
      return true;
    }

    if (other instanceof MomentZoneRules) {
      return this._tzdbInfo === other._tzdbInfo;
    }

    return false;
  };

  _proto.toString = function toString() {
    return this._tzdbInfo.name;
  };

  return MomentZoneRules;
}(_js_joda_core__WEBPACK_IMPORTED_MODULE_0__.ZoneRules);

var LDTUntils = function () {
  function LDTUntils(_tzdbUntils, tzdbOffsets) {
    this._tzdbUntils = _tzdbUntils;
    this._tzdbOffsets = tzdbOffsets;
    this._ldtUntils = [];
    this.size = this._tzdbUntils.length * 2;
  }

  var _proto2 = LDTUntils.prototype;

  _proto2._generateTupple = function _generateTupple(index) {
    var epochMillis = this._tzdbUntils[index];

    if (epochMillis === Infinity) {
      return [_js_joda_core__WEBPACK_IMPORTED_MODULE_0__.LocalDateTime.MAX, _js_joda_core__WEBPACK_IMPORTED_MODULE_0__.LocalDateTime.MAX];
    }

    var instant = _js_joda_core__WEBPACK_IMPORTED_MODULE_0__.Instant.ofEpochMilli(epochMillis);
    var offset1 = offsetInSeconds(this._tzdbOffsets[index]);
    var zone1 = _js_joda_core__WEBPACK_IMPORTED_MODULE_0__.ZoneOffset.ofTotalSeconds(-offset1);
    var ldt1 = _js_joda_core__WEBPACK_IMPORTED_MODULE_0__.LocalDateTime.ofInstant(instant, zone1);
    var nextIndex = Math.min(index + 1, this._tzdbOffsets.length - 1);
    var offset2 = offsetInSeconds(this._tzdbOffsets[nextIndex]);
    var zone2 = _js_joda_core__WEBPACK_IMPORTED_MODULE_0__.ZoneOffset.ofTotalSeconds(-offset2);
    var ldt2 = _js_joda_core__WEBPACK_IMPORTED_MODULE_0__.LocalDateTime.ofInstant(instant, zone2);

    if (offset1 > offset2) {
      return [ldt1, ldt2];
    } else {
      return [ldt2, ldt1];
    }
  };

  _proto2._getTupple = function _getTupple(index) {
    if (this._ldtUntils[index] == null) {
      this._ldtUntils[index] = this._generateTupple(index);
    }

    return this._ldtUntils[index];
  };

  _proto2.get = function get(index) {
    var ldtTupple = this._getTupple(index >> 1);

    return ldtTupple[index % 2];
  };

  return LDTUntils;
}();

function ldtBinarySearch(array, value) {
  var hi = array.size - 1,
      lo = -1,
      mid;

  while (hi - lo > 1) {
    if (!value.isBefore(array.get(mid = hi + lo >> 1))) {
      lo = mid;
    } else {
      hi = mid;
    }
  }

  return hi;
}

function offsetInSeconds(tzdbOffset) {
  return roundDown(+tzdbOffset * 60);
}

function roundDown(r) {
  if (r < 0) {
    return Math.ceil(r);
  } else {
    return Math.floor(r);
  }
}

function binarySearch(array, value) {
  var hi = array.length - 1,
      lo = -1,
      mid;

  while (hi - lo > 1) {
    if (array[mid = hi + lo >> 1] <= value) {
      lo = mid;
    } else {
      hi = mid;
    }
  }

  return hi;
}

function notSupported(msg) {
  throw new Error('not supported: ' + msg);
}

/***/ }),

/***/ "./src/MomentZoneRulesProvider.js":
/*!****************************************!*\
  !*** ./src/MomentZoneRulesProvider.js ***!
  \****************************************/
/*! namespace exports */
/*! export MomentZoneRulesProvider [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MomentZoneRulesProvider": () => /* binding */ MomentZoneRulesProvider
/* harmony export */ });
/* harmony import */ var _js_joda_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js-joda/core */ "@js-joda/core");
/* harmony import */ var _js_joda_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_joda_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MomentZoneRules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MomentZoneRules */ "./src/MomentZoneRules.js");
/* harmony import */ var _unpack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unpack */ "./src/unpack.js");
function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } it = o[Symbol.iterator](); return it.next.bind(it); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

/*
 * @copyright (c) 2016-present, Philipp Thürwächter, Pattrick Hüper
 * @copyright (c) 2007-present, Stephen Colebourne & Michael Nascimento Santos
 * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
 */



var TZDB_DATA;
var TZDB_VERSION;
var AVAILABLE_ZONE_IDS = [];
var zones = {};
var links = {};
var MomentZoneRulesProvider = function (_ZoneRulesProvider) {
  _inheritsLoose(MomentZoneRulesProvider, _ZoneRulesProvider);

  function MomentZoneRulesProvider() {
    return _ZoneRulesProvider.apply(this, arguments) || this;
  }

  MomentZoneRulesProvider.getRules = function getRules(zoneId) {
    var tzdbZoneInfo = zones[links[zoneId]];

    if (tzdbZoneInfo == null) {
      throw new _js_joda_core__WEBPACK_IMPORTED_MODULE_0__.DateTimeException('Unknown time-zone ID: ' + zoneId);
    }

    return new _MomentZoneRules__WEBPACK_IMPORTED_MODULE_1__.MomentZoneRules(tzdbZoneInfo);
  };

  MomentZoneRulesProvider.getAvailableZoneIds = function getAvailableZoneIds() {
    return AVAILABLE_ZONE_IDS;
  };

  MomentZoneRulesProvider.getVersion = function getVersion() {
    return TZDB_VERSION;
  };

  MomentZoneRulesProvider.getTzdbData = function getTzdbData() {
    return TZDB_DATA;
  };

  MomentZoneRulesProvider.loadTzdbData = function loadTzdbData(packedJson) {
    TZDB_DATA = packedJson;
    TZDB_VERSION = packedJson.version;

    for (var _iterator = _createForOfIteratorHelperLoose(packedJson.zones), _step; !(_step = _iterator()).done;) {
      var packedZoneInfo = _step.value;
      var tzdbZoneInfo = (0,_unpack__WEBPACK_IMPORTED_MODULE_2__.unpack)(packedZoneInfo);
      AVAILABLE_ZONE_IDS.push(tzdbZoneInfo.name);
      zones[tzdbZoneInfo.name] = tzdbZoneInfo;
      links[tzdbZoneInfo.name] = tzdbZoneInfo.name;
    }

    for (var _iterator2 = _createForOfIteratorHelperLoose(packedJson.links), _step2; !(_step2 = _iterator2()).done;) {
      var packedLink = _step2.value;
      var link = packedLink.split('|');
      AVAILABLE_ZONE_IDS.push(link[1]);
      links[link[1]] = link[0];
    }
  };

  return MomentZoneRulesProvider;
}(_js_joda_core__WEBPACK_IMPORTED_MODULE_0__.ZoneRulesProvider);

/***/ }),

/***/ "./src/auto-plug.js":
/*!**************************!*\
  !*** ./src/auto-plug.js ***!
  \**************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ autoPlug
/* harmony export */ });
/* harmony import */ var _js_joda_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js-joda/core */ "@js-joda/core");
/* harmony import */ var _js_joda_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_joda_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _plug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plug */ "./src/plug.js");
/*
 * @copyright (c) 2016-present, Philipp Thürwächter, Pattrick Hüper
 * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
 */


function autoPlug() {
  (0,_js_joda_core__WEBPACK_IMPORTED_MODULE_0__.use)(_plug__WEBPACK_IMPORTED_MODULE_1__.default);
}

/***/ }),

/***/ "./src/js-joda-timezone-empty.js":
/*!***************************************!*\
  !*** ./src/js-joda-timezone-empty.js ***!
  \***************************************/
/*! namespace exports */
/*! exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auto_plug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auto-plug */ "./src/auto-plug.js");
/*
 * @copyright (c) 2016-present, Philipp Thürwächter, Pattrick Hüper
 * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
 */

(0,_auto_plug__WEBPACK_IMPORTED_MODULE_0__.default)();

/***/ }),

/***/ "./src/plug.js":
/*!*********************!*\
  !*** ./src/plug.js ***!
  \*********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _MomentZoneRulesProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MomentZoneRulesProvider */ "./src/MomentZoneRulesProvider.js");
/* harmony import */ var _system_default_zone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./system-default-zone */ "./src/system-default-zone.js");
/*
 * @copyright (c) 2016-present, Philipp Thürwächter, Pattrick Hüper
 * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
 */


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(jsJoda) {
  jsJoda.ZoneRulesProvider.getRules = _MomentZoneRulesProvider__WEBPACK_IMPORTED_MODULE_0__.MomentZoneRulesProvider.getRules;
  jsJoda.ZoneRulesProvider.getAvailableZoneIds = _MomentZoneRulesProvider__WEBPACK_IMPORTED_MODULE_0__.MomentZoneRulesProvider.getAvailableZoneIds;
  jsJoda.ZoneRulesProvider.getTzdbData = _MomentZoneRulesProvider__WEBPACK_IMPORTED_MODULE_0__.MomentZoneRulesProvider.getTzdbData;
  jsJoda.ZoneRulesProvider.loadTzdbData = _MomentZoneRulesProvider__WEBPACK_IMPORTED_MODULE_0__.MomentZoneRulesProvider.loadTzdbData;
  (0,_system_default_zone__WEBPACK_IMPORTED_MODULE_1__.default)(jsJoda.ZoneId);
  return jsJoda;
}

/***/ }),

/***/ "./src/system-default-zone.js":
/*!************************************!*\
  !*** ./src/system-default-zone.js ***!
  \************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ extendSystemDefaultZoneId
/* harmony export */ });
function getResolvedZoneId(ZoneId) {
  try {
    var resolvedTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return ZoneId.of(resolvedTimeZone);
  } catch (err) {}

  return null;
}

function extendSystemDefaultZoneId(ZoneId) {
  var resolvedZoneId = getResolvedZoneId(ZoneId);

  if (resolvedZoneId == null) {
    return;
  }

  ZoneId.systemDefault = function () {
    return resolvedZoneId;
  };
}

/***/ }),

/***/ "./src/unpack.js":
/*!***********************!*\
  !*** ./src/unpack.js ***!
  \***********************/
/*! namespace exports */
/*! export unpack [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "unpack": () => /* binding */ unpack
/* harmony export */ });
function charCodeToInt(charCode) {
  if (charCode > 96) {
    return charCode - 87;
  } else if (charCode > 64) {
    return charCode - 29;
  }

  return charCode - 48;
}

function unpackBase60(string) {
  var i = 0,
      parts = string.split('.'),
      whole = parts[0],
      fractional = parts[1] || '',
      multiplier = 1,
      num,
      out = 0,
      sign = 1;

  if (string.charCodeAt(0) === 45) {
    i = 1;
    sign = -1;
  }

  for (i; i < whole.length; i++) {
    num = charCodeToInt(whole.charCodeAt(i));
    out = 60 * out + num;
  }

  for (i = 0; i < fractional.length; i++) {
    multiplier = multiplier / 60;
    num = charCodeToInt(fractional.charCodeAt(i));
    out += num * multiplier;
  }

  return out * sign;
}

function arrayToInt(array) {
  for (var i = 0; i < array.length; i++) {
    array[i] = unpackBase60(array[i]);
  }
}

function intToUntil(array, length) {
  for (var i = 0; i < length; i++) {
    array[i] = Math.round((array[i - 1] || 0) + array[i] * 60000);
  }

  array[length - 1] = Infinity;
}

function mapIndices(source, indices) {
  var out = [],
      i;

  for (i = 0; i < indices.length; i++) {
    out[i] = source[indices[i]];
  }

  return out;
}

function unpack(string) {
  var data = string.split('|'),
      offsets = data[2].split(' '),
      indices = data[3].split(''),
      untils = data[4].split(' ');
  arrayToInt(offsets);
  arrayToInt(indices);
  arrayToInt(untils);
  intToUntil(untils, indices.length);
  return {
    name: data[0],
    abbrs: mapIndices(data[1].split(' '), indices),
    offsets: mapIndices(offsets, indices),
    untils: untils,
    population: data[5] | 0
  };
}

/***/ }),

/***/ "@js-joda/core":
/*!***************************************************************************************************************!*\
  !*** external {"amd":"@js-joda/core","commonjs":"@js-joda/core","commonjs2":"@js-joda/core","root":"JSJoda"} ***!
  \***************************************************************************************************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__js_joda_core__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/js-joda-timezone-empty.js");
/******/ })()
;
});