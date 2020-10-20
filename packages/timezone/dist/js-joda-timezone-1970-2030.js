//! @version @js-joda/timezone-2.3.0-2020a-1970-2030
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

/***/ "./data/packed/latest-1970-2030.json":
/*!*******************************************!*\
  !*** ./data/packed/latest-1970-2030.json ***!
  \*******************************************/
/*! default exports */
/*! export links [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 0 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 1 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 10 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 100 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 101 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 102 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 103 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 104 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 105 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 106 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 107 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 108 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 109 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 11 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 110 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 111 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 112 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 113 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 114 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 115 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 116 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 117 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 118 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 119 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 12 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 120 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 121 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 122 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 123 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 124 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 125 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 126 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 127 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 128 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 129 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 13 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 130 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 131 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 132 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 133 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 134 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 135 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 136 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 137 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 138 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 139 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 14 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 140 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 141 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 142 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 143 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 144 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 145 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 146 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 147 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 148 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 149 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 15 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 150 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 151 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 152 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 153 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 154 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 155 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 156 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 157 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 158 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 159 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 16 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 160 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 161 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 162 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 163 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 164 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 165 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 166 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 167 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 168 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 169 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 17 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 170 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 171 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 172 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 173 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 174 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 175 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 176 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 177 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 178 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 179 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 18 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 180 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 181 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 182 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 183 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 184 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 185 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 186 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 187 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 188 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 189 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 19 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 190 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 191 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 192 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 193 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 194 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 195 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 196 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 197 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 198 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 199 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 2 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 20 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 200 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 201 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 202 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 203 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 204 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 205 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 206 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 207 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 208 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 209 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 21 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 210 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 211 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 212 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 213 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 214 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 215 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 216 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 217 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 218 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 219 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 22 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 220 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 221 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 222 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 223 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 224 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 225 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 226 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 227 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 228 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 229 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 23 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 230 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 231 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 232 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 233 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 234 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 235 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 236 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 237 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 238 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 239 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 24 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 240 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 241 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 242 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 243 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 244 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 245 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 246 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 247 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 248 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 249 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 25 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 250 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 251 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 252 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 253 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 254 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 255 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 256 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 257 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 258 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 259 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 26 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 260 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 27 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 28 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 29 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 3 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 30 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 31 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 32 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 33 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 34 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 35 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 36 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 37 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 38 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 39 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 4 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 40 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 41 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 42 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 43 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 44 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 45 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 46 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 47 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 48 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 49 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 5 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 50 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 51 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 52 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 53 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 54 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 55 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 56 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 57 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 58 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 59 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 6 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 60 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 61 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 62 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 63 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 64 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 65 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 66 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 67 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 68 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 69 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 7 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 70 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 71 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 72 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 73 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 74 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 75 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 76 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 77 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 78 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 79 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 8 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 80 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 81 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 82 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 83 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 84 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 85 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 86 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 87 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 88 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 89 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 9 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 90 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 91 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 92 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 93 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 94 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 95 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 96 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 97 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 98 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 99 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! export version [provided] [no usage info] [missing usage info prevents renaming] */
/*! export zones [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 0 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 1 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 10 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 100 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 101 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 102 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 103 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 104 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 105 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 106 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 107 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 108 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 109 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 11 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 110 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 111 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 112 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 113 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 114 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 115 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 116 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 117 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 118 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 119 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 12 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 120 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 121 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 122 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 123 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 124 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 125 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 126 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 127 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 128 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 129 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 13 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 130 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 131 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 132 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 133 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 134 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 135 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 136 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 137 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 138 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 139 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 14 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 140 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 141 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 142 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 143 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 144 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 145 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 146 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 147 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 148 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 149 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 15 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 150 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 151 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 152 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 153 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 154 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 155 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 156 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 157 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 158 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 159 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 16 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 160 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 161 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 162 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 163 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 164 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 165 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 166 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 167 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 168 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 169 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 17 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 170 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 171 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 172 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 173 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 174 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 175 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 176 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 177 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 178 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 179 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 18 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 180 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 181 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 182 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 183 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 184 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 185 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 186 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 187 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 188 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 189 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 19 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 190 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 191 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 192 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 193 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 194 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 195 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 196 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 197 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 198 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 199 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 2 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 20 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 200 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 201 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 202 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 203 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 204 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 205 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 206 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 207 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 208 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 209 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 21 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 210 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 211 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 212 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 213 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 214 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 215 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 216 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 217 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 218 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 219 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 22 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 220 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 221 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 222 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 223 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 224 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 225 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 226 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 227 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 228 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 229 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 23 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 230 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 231 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 232 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 233 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 234 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 235 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 236 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 237 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 238 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 239 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 24 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 240 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 241 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 242 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 243 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 244 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 245 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 246 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 247 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 248 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 249 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 25 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 250 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 251 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 252 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 253 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 254 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 255 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 256 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 257 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 258 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 259 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 26 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 260 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 261 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 262 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 263 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 264 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 265 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 266 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 267 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 268 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 269 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 27 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 270 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 271 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 272 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 273 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 274 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 275 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 276 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 277 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 278 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 279 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 28 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 280 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 281 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 282 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 283 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 284 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 285 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 286 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 287 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 288 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 289 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 29 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 290 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 291 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 292 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 293 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 294 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 295 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 296 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 297 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 298 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 299 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 3 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 30 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 300 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 301 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 302 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 303 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 304 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 305 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 306 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 307 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 308 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 309 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 31 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 310 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 311 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 312 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 313 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 314 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 315 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 316 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 317 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 318 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 319 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 32 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 320 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 321 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 322 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 323 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 324 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 325 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 326 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 327 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 328 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 329 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 33 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 330 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 331 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 332 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 34 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 35 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 36 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 37 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 38 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 39 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 4 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 40 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 41 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 42 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 43 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 44 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 45 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 46 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 47 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 48 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 49 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 5 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 50 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 51 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 52 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 53 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 54 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 55 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 56 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 57 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 58 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 59 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 6 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 60 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 61 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 62 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 63 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 64 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 65 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 66 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 67 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 68 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 69 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 7 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 70 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 71 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 72 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 73 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 74 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 75 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 76 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 77 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 78 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 79 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 8 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 80 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 81 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 82 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 83 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 84 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 85 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 86 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 87 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 88 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 89 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 9 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 90 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 91 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 92 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 93 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 94 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 95 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 96 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 97 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 98 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   export 99 [provided] [no usage info] [missing usage info prevents renaming] */
/*!   other exports [not provided] [no usage info] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = JSON.parse("{\"version\":\"2020a\",\"zones\":[\"Africa/Abidjan|GMT|0|0||48e5\",\"Africa/Nairobi|EAT|-30|0||47e5\",\"Africa/Algiers|WET WEST CET CEST|0 -10 -10 -20|01012320102|3bX0 11A0 dDd0 17b0 11B0 1cN0 2Dy0 1cN0 1fB0 1cL0|26e5\",\"Africa/Lagos|WAT|-10|0||17e6\",\"Africa/Bissau|-01 GMT|10 0|01|cap0|39e4\",\"Africa/Maputo|CAT|-20|0||26e5\",\"Africa/Cairo|EET EEST|-20 -30|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|LX0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1WL0 rd0 1Rz0 wp0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1qL0 Xd0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1ny0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 WL0 1qN0 Rb0 1wp0 On0 1zd0 Lz0 1EN0 Fb0 c10 8n0 8Nd0 gL0 e10 mn0|15e6\",\"Africa/Casablanca|+00 +01|0 -10|01010101010101010101010101010101010101010101010101010101010101010101010|aS00 rz0 43d0 AL0 1Nd0 XX0 1Cp0 pz0 dEp0 4mn0 SyN0 AL0 1Nd0 wn0 1FB0 Db0 1zd0 Lz0 1Nf0 wM0 co0 go0 1o00 s00 dA0 vc0 11A0 A00 e00 y00 11A0 uM0 e00 Dc0 11A0 s00 e00 IM0 WM0 mo0 gM0 LA0 WM0 jA0 e00 28M0 e00 2600 gM0 2600 e00 2600 gM0 2600 e00 28M0 e00 2600 gM0 2600 e00 28M0 e00 2600 gM0 2600 e00 2600 gM0 2600|32e5\",\"Africa/Ceuta|WET WEST CET CEST|0 -10 -10 -20|0101010102323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|aS00 rz0 43d0 AL0 1Nd0 XX0 1Cp0 pz0 dEp0 4VB0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|85e3\",\"Africa/El_Aaiun|-01 +00 +01|10 0 -10|01212121212121212121212121212121212121212121212121212121212121212121|fi10 6L0 AL0 1Nd0 XX0 1Cp0 pz0 1cBB0 AL0 1Nd0 wn0 1FB0 Db0 1zd0 Lz0 1Nf0 wM0 co0 go0 1o00 s00 dA0 vc0 11A0 A00 e00 y00 11A0 uM0 e00 Dc0 11A0 s00 e00 IM0 WM0 mo0 gM0 LA0 WM0 jA0 e00 28M0 e00 2600 gM0 2600 e00 2600 gM0 2600 e00 28M0 e00 2600 gM0 2600 e00 28M0 e00 2600 gM0 2600 e00 2600 gM0 2600|20e4\",\"Africa/Johannesburg|SAST|-20|0||84e5\",\"Africa/Juba|CAT CAST EAT|-20 -30 -30|0101010101010101010101010101010102|LW0 16L0 1iN0 17b0 1jd0 17b0 1ip0 17z0 1i10 17X0 1hB0 18n0 1hd0 19b0 1gp0 19z0 1iN0 17b0 1ip0 17z0 1i10 18n0 1hd0 18L0 1gN0 19b0 1gp0 19z0 1iN0 17z0 1i10 17X0 yGd0\",\"Africa/Khartoum|CAT CAST EAT|-20 -30 -30|01010101010101010101010101010101020|LW0 16L0 1iN0 17b0 1jd0 17b0 1ip0 17z0 1i10 17X0 1hB0 18n0 1hd0 19b0 1gp0 19z0 1iN0 17b0 1ip0 17z0 1i10 18n0 1hd0 18L0 1gN0 19b0 1gp0 19z0 1iN0 17z0 1i10 17X0 yGd0 HjL0|51e5\",\"Africa/Monrovia|MMT GMT|I.u 0|01|4SoI.u|11e5\",\"Africa/Ndjamena|WAT WAST|-10 -20|010|nNb0 Wn0|13e5\",\"Africa/Sao_Tome|GMT WAT|0 -10|010|1UQN0 2q00\",\"Africa/Tripoli|EET CET CEST|-20 -10 -20|0121212121212121210120120|tda0 A10 1db0 1cN0 1db0 1dd0 1db0 1eN0 1bb0 1e10 1cL0 1c10 1db0 1dd0 1db0 1cN0 1db0 1q10 fAn0 1ep0 1db0 AKq0 TA0 1o00|11e5\",\"Africa/Tunis|CET CEST|-10 -20|0101010101010101010|hOn0 WM0 1rA0 11c0 nwo0 Ko0 1cM0 1cM0 1rA0 10M0 zuM0 10N0 1aN0 1qM0 WM0 1qM0 11A0 1o00|20e5\",\"Africa/Windhoek|SAST CAT WAT|-20 -20 -10|01212121212121212121212121212121212121212121212121|Ndy0 9Io0 16P0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0|32e4\",\"America/Adak|BST BDT AHST HST HDT|b0 a0 a0 a0 90|0101010101010101010101010101234343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343|Kd0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cm0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|326\",\"America/Anchorage|AHST AHDT YST AKST AKDT|a0 90 90 90 80|0101010101010101010101010101234343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343|Kc0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cm0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|30e4\",\"America/Puerto_Rico|AST|40|0||24e5\",\"America/Araguaina|-03 -02|30 20|01010101010101010101010101010|CxD0 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 dMN0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 ny10 Lz0|14e4\",\"America/Argentina/Buenos_Aires|-03 -02|30 20|01010101010101010|9Rf0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wp0 Rb0 1wp0 TX0 A4p0 uL0 1qN0 WL0\",\"America/Argentina/Catamarca|-03 -02 -04|30 20 40|01010101210102010|9Rf0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 rlB0 7B0 8zb0 uL0\",\"America/Argentina/Cordoba|-03 -02 -04|30 20 40|01010101210101010|9Rf0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 A4p0 uL0 1qN0 WL0\",\"America/Argentina/Jujuy|-03 -02 -04|30 20 40|010101202101010|9Rf0 Db0 zvd0 Bz0 1tB0 TX0 1ze0 TX0 1ld0 WK0 1wp0 TX0 A4p0 uL0\",\"America/Argentina/La_Rioja|-03 -02 -04|30 20 40|010101012010102010|9Rf0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Qn0 qO0 16n0 Rb0 1wp0 TX0 rlB0 7B0 8zb0 uL0\",\"America/Argentina/Mendoza|-03 -02 -04|30 20 40|01010120202102010|9Rf0 Db0 zvd0 Bz0 1tB0 TX0 1u20 SL0 1vd0 Tb0 1wp0 TW0 ri10 Op0 7TX0 uL0\",\"America/Argentina/Rio_Gallegos|-03 -02 -04|30 20 40|01010101010102010|9Rf0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wp0 Rb0 1wp0 TX0 rlB0 7B0 8zb0 uL0\",\"America/Argentina/Salta|-03 -02 -04|30 20 40|010101012101010|9Rf0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 A4p0 uL0\",\"America/Argentina/San_Juan|-03 -02 -04|30 20 40|010101012010102010|9Rf0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Qn0 qO0 16n0 Rb0 1wp0 TX0 rld0 m10 8lb0 uL0\",\"America/Argentina/San_Luis|-03 -02 -04|30 20 40|010101202020102020|9Rf0 Db0 zvd0 Bz0 1tB0 XX0 1q20 SL0 AN0 vDb0 m10 8lb0 8L0 jd0 1qN0 WL0 1qN0\",\"America/Argentina/Tucuman|-03 -02 -04|30 20 40|0101010121010201010|9Rf0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 rlB0 4N0 8BX0 uL0 1qN0 WL0\",\"America/Argentina/Ushuaia|-03 -02 -04|30 20 40|01010101010102010|9Rf0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wp0 Rb0 1wp0 TX0 rkN0 8p0 8zb0 uL0\",\"America/Asuncion|-04 -03|40 30|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|6FE0 3CL0 3Dd0 10L0 1pB0 10n0 1pB0 10n0 1pB0 1cL0 1dd0 1db0 1dd0 1cL0 1dd0 1cL0 1dd0 1cL0 1dd0 1db0 1dd0 1cL0 1dd0 1cL0 1dd0 1cL0 1dd0 1db0 1dd0 1cL0 1lB0 14n0 1dd0 1cL0 1fd0 WL0 1rd0 1aL0 1dB0 Xz0 1qp0 Xb0 1qN0 10L0 1rB0 TX0 1tB0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 1cL0 WN0 1qL0 11B0 1nX0 1ip0 WL0 1qN0 WL0 1qN0 WL0 1tB0 TX0 1tB0 TX0 1tB0 19X0 1a10 1fz0 1a10 1fz0 1cN0 17b0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0|28e5\",\"America/Panama|EST|50|0||15e5\",\"America/Bahia_Banderas|PST MST MDT CDT CST|80 70 60 50 60|012121212121212121212121212121343434343434343434343434343434343434343434|80 13Vd0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nW0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0|84e3\",\"America/Bahia|-03 -02|30 20|010101010101010101010101010101010101010|CxD0 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 l5B0 Rb0|27e5\",\"America/Barbados|AST ADT|40 30|010101010|i7G0 IL0 1ip0 17b0 1ip0 17b0 1ld0 13b0|28e4\",\"America/Belem|-03 -02|30 20|0101010|CxD0 Rb0 1tB0 IL0 1Fd0 FX0|20e5\",\"America/Belize|CST CDT|60 50|01010|9xG0 qn0 lxB0 mn0|57e3\",\"America/Boa_Vista|-04 -03|40 30|01010101010|CxE0 Rb0 1tB0 IL0 1Fd0 FX0 smp0 WL0 1tB0 2L0|62e2\",\"America/Bogota|-05 -04|50 40|010|Snh0 2en0|90e5\",\"America/Boise|MST MDT|70 60|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|K90 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 Dd0 1Kn0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|21e4\",\"America/Cambridge_Bay|MST MDT CST CDT EST|70 60 60 50 50|01010101010101010101010101010101010101012342101010101010101010101010101010101010101010101010101010101010|p7J0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11A0 1nX0 2K0 WQ0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|15e2\",\"America/Campo_Grande|-04 -03|40 30|010101010101010101010101010101010101010101010101010101010101010101010|CxE0 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 1C10 Lz0 1Ip0 HX0 1zd0 On0 1HB0 IL0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1HB0 FX0|77e4\",\"America/Cancun|CST EST EDT CDT|60 50 40 50|012121230303030303030303030303030303030301|t9G0 yLB0 1lb0 14p0 1lb0 14p0 Lz0 xB0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 Dd0|63e4\",\"America/Caracas|-04 -0430|40 4u|010|1wmv0 kqo0|29e5\",\"America/Cayenne|-03|30|0||58e3\",\"America/Chicago|CST CDT|60 50|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|K80 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|92e5\",\"America/Chihuahua|CST CDT MDT MST|60 50 60 70|01010232323232323232323232323232323232323232323232323232323232323232323|13Vk0 1lb0 14p0 1lb0 14q0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0|81e4\",\"America/Costa_Rica|CST CDT|60 50|010101010|mgS0 Db0 1Kp0 Db0 pRB0 15b0 1kp0 mL0|12e5\",\"America/Phoenix|MST|70|0||42e5\",\"America/Cuiaba|-04 -03|40 30|0101010101010101010101010101010101010101010101010101010101010101010|CxE0 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 4a10 HX0 1zd0 On0 1HB0 IL0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1HB0 FX0|54e4\",\"America/Danmarkshavn|-03 -02 GMT|30 20 0|0101010101010101010101010101010102|oXh0 19U0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 DC0|8\",\"America/Dawson_Creek|PST PDT MST|80 70 70|0101012|Ka0 1cL0 1cN0 1fz0 1cN0 ML0|12e3\",\"America/Dawson|YST PST PDT MST|90 80 70 70|01212121212121212121212121212121212121212121212121212121212121212121212121212121213|9ix0 fNd0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0|13e2\",\"America/Denver|MST MDT|70 60|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|K90 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|26e5\",\"America/Detroit|EST EDT|50 40|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|85H0 1cL0 s10 1Vz0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|37e5\",\"America/Edmonton|MST MDT|70 60|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|5E90 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|10e5\",\"America/Eirunepe|-05 -04|50 40|01010101010|CxF0 Rb0 1tB0 IL0 1Fd0 FX0 dPB0 On0 yTd0 d5X0|31e3\",\"America/El_Salvador|CST CDT|60 50|01010|Gcu0 WL0 1qN0 WL0|11e5\",\"America/Tijuana|PST PDT|80 70|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|fmy0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 U10 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|20e5\",\"America/Fort_Nelson|PST PDT MST|80 70 70|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010102|Ka0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0|39e2\",\"America/Fort_Wayne|EST EDT|50 40|01010101010101010101010101010101010101010101010101010|K70 1cL0 1qhd0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0\",\"America/Fortaleza|-03 -02|30 20|01010101010101010|CxD0 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 nsp0 WL0 1tB0 5z0 2mN0 On0|34e5\",\"America/Glace_Bay|AST ADT|40 30|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|5E60 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|19e3\",\"America/Godthab|-03 -02|30 20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|oXh0 19U0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|17e3\",\"America/Goose_Bay|AST ADT ADDT|40 30 20|010101010101010101010101010101010101020101010101010101010101010101010101010101010101010101010101010101010101010101010101010|K60 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14n1 1lb0 14p0 1nW0 11C0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zcX Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|76e2\",\"America/Grand_Turk|EST EDT AST|50 40 40|01010101010101010101010101010101010101010101010101010101010101010101010101210101010101010101010101010|mG70 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 5Ip0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|37e2\",\"America/Guatemala|CST CDT|60 50|010101010|9tG0 An0 mtd0 Nz0 ifB0 17b0 zDB0 11z0|13e5\",\"America/Guayaquil|-05 -04|50 40|010|TKR0 rz0|27e5\",\"America/Guyana|-0345 -03 -04|3J 30 40|012|dyPJ Bxbf|80e4\",\"America/Halifax|AST ADT|40 30|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|K60 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|39e4\",\"America/Havana|CST CDT|50 40|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|K50 1cL0 1cN0 1fz0 1cN0 14n0 1ld0 14L0 1kN0 15b0 1kp0 1cL0 1cN0 1fz0 1a10 1fz0 1fB0 11z0 14p0 1nX0 11B0 1nX0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 14n0 1ld0 14n0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 1a10 1in0 1a10 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 17c0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 11A0 6i00 Rc0 1wo0 U00 1tA0 Rc0 1wo0 U00 1wo0 U00 1zc0 U00 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0|21e5\",\"America/Hermosillo|PST MST MDT|80 70 60|01212121|80 13Vd0 1lb0 14p0 1lb0 14p0 1lb0|64e4\",\"America/Indiana/Knox|CST CDT EST|60 50 50|01010101010101010101010101010101010101010101210101010101010101010101010101010101010101010101010|K80 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 z8o0 1o00 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0\",\"America/Indiana/Marengo|EST EDT CDT|50 40 50|010101010201010101010101010101010101010101010101010101010101010|K70 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1VA0 LA0 1BX0 1e6p0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0\",\"America/Indiana/Petersburg|CST CDT EST EDT|60 50 50 40|0101010101010101210123232323232323232323232323232323232323232323232|K80 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 19co0 1o00 Rd0 1zb0 Oo0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0\",\"America/Indiana/Tell_City|EST EDT CDT CST|50 40 50 60|01023232323232323232323232323232323232323232323232323|K70 1cL0 1qhd0 1o00 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0\",\"America/Indiana/Vevay|EST EDT|50 40|010101010101010101010101010101010101010101010101010101010|K70 1cL0 1cN0 1fz0 1cN0 1cL0 1lnd0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0\",\"America/Indiana/Vincennes|EST EDT CDT CST|50 40 50 60|01023201010101010101010101010101010101010101010101010|K70 1cL0 1qhd0 1o00 Rd0 1zb0 Oo0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0\",\"America/Indiana/Winamac|EST EDT CDT CST|50 40 50 60|01023101010101010101010101010101010101010101010101010|K70 1cL0 1qhd0 1o00 Rd0 1za0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0\",\"America/Inuvik|PST MST MDT|80 70 60|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|mGa0 2pz0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|35e2\",\"America/Iqaluit|EST EDT CST CDT|50 40 60 50|0101010101010101010101010101010101010101230101010101010101010101010101010101010101010101010101010101010|p7H0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11C0 1nX0 11A0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|67e2\",\"America/Jamaica|EST EDT|50 40|010101010101010101010|9Kv0 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0|94e4\",\"America/Juneau|PST PDT YDT YST AKST AKDT|80 70 80 90 90 80|0101010101010101010102010101345454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|Ka0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cM0 1cM0 1cL0 1cN0 1fz0 1a10 1fz0 co0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|33e3\",\"America/Kentucky/Louisville|EST EDT CDT|50 40 50|010101010201010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|K70 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1VA0 LA0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0\",\"America/Kentucky/Monticello|CST CDT EST EDT|60 50 50 40|010101010101010101010101010101010101010101010101010101010101012323232323232323232323232323232323232323232323232323232323232|K80 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11A0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0\",\"America/La_Paz|-04|40|0||19e5\",\"America/Lima|-05 -04|50 40|010101010|CVF0 zX0 1O10 zX0 6Gp0 zX0 98p0 zX0|11e6\",\"America/Los_Angeles|PST PDT|80 70|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|Ka0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|15e6\",\"America/Maceio|-03 -02|30 20|0101010101010101010|CxD0 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 dMN0 Lz0 8Q10 WL0 1tB0 5z0 2mN0 On0|93e4\",\"America/Managua|CST EST CDT|60 50 50|010202010102020|86u0 4mn0 9Up0 Dz0 1K10 Dz0 s3F0 1KH0 DB0 9In0 k8p0 19X0 1o30 11y0|22e5\",\"America/Manaus|-04 -03|40 30|010101010|CxE0 Rb0 1tB0 IL0 1Fd0 FX0 dPB0 On0|19e5\",\"America/Martinique|AST ADT|40 30|010|oXg0 19X0|39e4\",\"America/Matamoros|CST CDT|60 50|0101010101010101010101010101010101010101010101010101010101010101010101010|IqU0 1nX0 i6p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 U10 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|45e4\",\"America/Mazatlan|PST MST MDT|80 70 60|012121212121212121212121212121212121212121212121212121212121212121212121|80 13Vd0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0|44e4\",\"America/Menominee|EST CDT CST|50 50 60|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212|85H0 1cM0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|85e2\",\"America/Merida|CST EST CDT|60 50 50|0102020202020202020202020202020202020202020202020202020202020202020202020|t9G0 2hz0 wu30 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0|11e5\",\"America/Metlakatla|PST PDT AKST AKDT|80 70 90 80|0101010101010101010101010101023232302323232323232323232323232|Ka0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1hU10 Rd0 1zb0 Op0 1zb0 Op0 1zb0 uM0 jB0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|14e2\",\"America/Mexico_City|CST CDT|60 50|01010101010101010101010101010101010101010101010101010101010101010101010|13Vk0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0|20e6\",\"America/Miquelon|AST -03 -02|40 30 20|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|p9g0 gQ10 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|61e2\",\"America/Moncton|AST ADT|40 30|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|K60 1cL0 1cN0 1fz0 1cN0 1cL0 3Cp0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14n1 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 ReX 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|64e3\",\"America/Monterrey|CST CDT|60 50|0101010101010101010101010101010101010101010101010101010101010101010101010|IqU0 1nX0 i6p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0|41e5\",\"America/Montevideo|-03 -02 -0130 -0230|30 20 1u 2u|0101023010101010101010101010101010101010101010101010|JD0 jX0 4vB0 xz0 3Cp0 mmu 1a10 IMu Db0 4c10 uL0 1Nd0 An0 1SN0 uL0 mp0 28L0 iPB0 un0 1SN0 xz0 1zd0 Lz0 1zd0 Rb0 1zd0 On0 1wp0 Rb0 s8p0 1fB0 1ip0 11z0 1ld0 14n0 1o10 11z0 1o10 11z0 1o10 14n0 1ld0 14n0 1ld0 14n0 1o10 11z0 1o10 11z0 1o10 11z0|17e5\",\"America/Toronto|EST EDT|50 40|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|K70 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|65e5\",\"America/New_York|EST EDT|50 40|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|K70 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|21e6\",\"America/Nipigon|EST EDT|50 40|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|avj0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|16e2\",\"America/Nome|BST BDT YST AKST AKDT|b0 a0 90 90 80|0101010101010101010101010101234343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343|Kd0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cl0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|38e2\",\"America/Noronha|-02 -01|20 10|01010101010101010|CxC0 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 nsp0 WL0 1tB0 2L0 2pB0 On0|30e2\",\"America/North_Dakota/Beulah|MST MDT CST CDT|70 60 60 50|010101010101010101010101010101010101010101010101010101010101010101010101010101010123232323232323232323232323232323232323232|K90 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Oo0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0\",\"America/North_Dakota/Center|MST MDT CST CDT|70 60 60 50|010101010101010101010101010101010101010101010123232323232323232323232323232323232323232323232323232323232323232323232323232|K90 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14o0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0\",\"America/North_Dakota/New_Salem|MST MDT CST CDT|70 60 60 50|010101010101010101010101010101010101010101010101010101010101010101012323232323232323232323232323232323232323232323232323232|K90 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14o0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0\",\"America/Ojinaga|CST CDT MDT MST|60 50 60 70|01010232323232323232323232323232323232323232323232323232323232323232323|13Vk0 1lb0 14p0 1lb0 14q0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 U10 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|23e3\",\"America/Pangnirtung|AST ADT EDT EST CST CDT|40 30 40 50 60 50|0101010101010101010101010101010232323232453232323232323232323232323232323232323232323232323232323232323|p7G0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1o00 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11C0 1nX0 11A0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|14e2\",\"America/Paramaribo|-0330 -03|3u 30|01|zSPu|24e4\",\"America/Port-au-Prince|EST EDT|50 40|01010101010101010101010101010101010101010101010101010101010101010101010|wu50 19X0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14q0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 i6n0 1nX0 11B0 1nX0 d430 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 3iN0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|23e5\",\"America/Rio_Branco|-05 -04|50 40|010101010|CxF0 Rb0 1tB0 IL0 1Fd0 FX0 NBd0 d5X0|31e4\",\"America/Porto_Velho|-04 -03|40 30|0101010|CxE0 Rb0 1tB0 IL0 1Fd0 FX0|37e4\",\"America/Punta_Arenas|-03 -04|30 40|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|yP0 1ip0 11z0 1o10 11z0 1qN0 WL0 1ld0 14n0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 1cL0 1cN0 11z0 1o10 11z0 1qN0 WL0 1fB0 19X0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1ip0 1fz0 1fB0 11z0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1o10 19X0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0\",\"America/Rainy_River|CST CDT|60 50|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|avk0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|842\",\"America/Rankin_Inlet|CST CDT EST|60 50 50|0101010101010101010101010101010101010101012101010101010101010101010101010101010101010101010101010101010|p7I0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|26e2\",\"America/Recife|-03 -02|30 20|01010101010101010|CxD0 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 nsp0 WL0 1tB0 2L0 2pB0 On0|33e5\",\"America/Regina|CST|60|0||19e4\",\"America/Resolute|CST CDT EST|60 50 50|0101010101010101010101010101010101010101012101010101012101010101010101010101010101010101010101010101010|p7I0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|229\",\"America/Santarem|-04 -03|40 30|01010101|CxE0 Rb0 1tB0 IL0 1Fd0 FX0 NBd0|21e4\",\"America/Santiago|-03 -04|30 40|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|yP0 1ip0 11z0 1o10 11z0 1qN0 WL0 1ld0 14n0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 1cL0 1cN0 11z0 1o10 11z0 1qN0 WL0 1fB0 19X0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1ip0 1fz0 1fB0 11z0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1o10 19X0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1zb0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0|62e5\",\"America/Santo_Domingo|-0430 EST AST|4u 50 40|0101010101212|ksu 1Cou yLu 1RAu wLu 1QMu xzu 1Q0u xXu 1PAu 13jB0 e00|29e5\",\"America/Sao_Paulo|-03 -02|30 20|010101010101010101010101010101010101010101010101010101010101010101010|CxD0 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 1C10 Lz0 1Ip0 HX0 1zd0 On0 1HB0 IL0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1HB0 FX0|20e6\",\"America/Scoresbysund|-02 -01 +00|20 10 0|0102121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|oXg0 1a00 1cK0 1cL0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|452\",\"America/Sitka|PST PDT YST AKST AKDT|80 70 90 90 80|0101010101010101010101010101234343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343|Ka0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 co0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|90e2\",\"America/St_Johns|NST NDT NDDT|3u 2u 1u|010101010101010101010101010101010101020101010101010101010101010101010101010101010101010101010101010101010101010101010101010|K5u 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14n1 1lb0 14p0 1nW0 11C0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zcX Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|11e4\",\"America/Swift_Current|MST CST|70 60|01|5E90|16e3\",\"America/Tegucigalpa|CST CDT|60 50|0101010|Gcu0 WL0 1qN0 WL0 GRd0 AL0|11e5\",\"America/Thule|AST ADT|40 30|010101010101010101010101010101010101010101010101010101010101010101010101010101010|PHG0 1cL0 1cN0 1cL0 1fB0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|656\",\"America/Thunder_Bay|EST EDT|50 40|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|K70 1cL0 1cN0 1fz0 1cN0 1cL0 3Cp0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|11e4\",\"America/Vancouver|PST PDT|80 70|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|Ka0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|23e5\",\"America/Whitehorse|PST PDT MST|80 70 70|0101010101010101010101010101010101010101010101010101010101010101010101010101010102|p7K0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0|23e3\",\"America/Winnipeg|CST CDT|60 50|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|K80 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1a00 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1a00 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|66e4\",\"America/Yakutat|YST YDT AKST AKDT|90 80 90 80|0101010101010101010101010101023232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|Kb0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cn0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|642\",\"America/Yellowknife|MST MDT|70 60|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|p7J0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|19e3\",\"Antarctica/Casey|+08 +11|-80 -b0|0101010|1ARS0 T90 40P0 KL0 blz0 3m10|10\",\"Antarctica/Davis|+07 +05|-70 -50|01010|1ART0 VB0 3Wn0 KN0|70\",\"Pacific/Port_Moresby|+10|-a0|0||25e4\",\"Antarctica/Macquarie|AEDT AEST +11|-b0 -a0 -b0|0101010101010101010101010101010101010101010101010101010101010101010101010101010102|qg0 1wo0 U00 1wo0 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1qM0 WM0 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1wo0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 11A0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 11A0 1o00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1cM0 1cM0 1cM0|1\",\"Antarctica/Mawson|+06 +05|-60 -50|01|1ARU0|60\",\"Pacific/Auckland|NZST NZDT|-c0 -d0|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|bKC0 IM0 1C00 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1qM0 14o0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1io0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00|14e5\",\"Antarctica/Palmer|-03 -02 -04|30 20 40|01020202020202020202020202020202020202020202020202020202020202020202020|9Rf0 Db0 jsN0 14N0 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 1cL0 1cN0 11z0 1o10 11z0 1qN0 WL0 1fB0 19X0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1ip0 1fz0 1fB0 11z0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1o10 19X0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0|40\",\"Antarctica/Rothera|-00 -03|0 30|01|gOo0|130\",\"Asia/Riyadh|+03|-30|0||57e5\",\"Antarctica/Troll|-00 +00 +02|0 0 -20|012121212121212121212121212121212121212121212121212121|1puo0 hd0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|40\",\"Asia/Urumqi|+06|-60|0||32e5\",\"Europe/Berlin|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|oXd0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|41e5\",\"Asia/Almaty|+06 +07 +05|-60 -70 -50|0101010101010101010102010101010101010101010101010|rn60 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0|15e5\",\"Asia/Amman|EET EEST|-20 -30|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|8kK0 KL0 1oN0 11b0 1oN0 11b0 1pd0 1dz0 1cp0 11b0 1op0 11b0 fO10 1db0 1e10 1cL0 1cN0 1cL0 1cN0 1fz0 1pd0 10n0 1ld0 14n0 1hB0 15b0 1ip0 19X0 1cN0 1cL0 1cN0 17b0 1ld0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1So0 y00 1fc0 1dc0 1co0 1dc0 1cM0 1cM0 1cM0 1o00 11A0 1lc0 17c0 1cM0 1cM0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 4bX0 Dd0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00|25e5\",\"Asia/Anadyr|+13 +14 +12 +11|-d0 -e0 -c0 -b0|010202020202020202023202020202020202020202020202020202020232|rmX0 1db0 2q10 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 2sp0 WM0|13e3\",\"Asia/Aqtau|+05 +06 +04|-50 -60 -40|0101010101010101010201010120202020202020202020|sAj0 2pX0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0|15e4\",\"Asia/Aqtobe|+05 +06 +04|-50 -60 -40|01010101010101010102010101010101010101010101010|rn70 3Db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0|27e4\",\"Asia/Ashgabat|+05 +06 +04|-50 -60 -40|01010101010101010101020|rn70 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0|41e4\",\"Asia/Atyrau|+05 +06 +04|-50 -60 -40|010101010101010101020101010101010102020202020|sAj0 2pX0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 2sp0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0\",\"Asia/Baghdad|+03 +04|-30 -40|01010101010101010101010101010101010101010101010101010|u190 11b0 1cp0 1dz0 1dd0 1db0 1cN0 1cp0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1de0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0|66e5\",\"Asia/Qatar|+04 +03|-40 -30|01|5QI0|96e4\",\"Asia/Baku|+04 +05 +03|-40 -50 -30|010101010101010101010201010101010101010101010101010101010101010|rn80 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 1cM0 9Je0 1o00 11z0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00|27e5\",\"Asia/Bangkok|+07|-70|0||15e6\",\"Asia/Barnaul|+07 +08 +06|-70 -80 -60|01010101010101010101020101010102020202020202020202020202020202020|rn50 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 p90 LE0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3rd0\",\"Asia/Beirut|EET EEST|-20 -30|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|61a0 En0 1oN0 11b0 1oN0 11b0 1oN0 11b0 1pd0 11b0 1oN0 11b0 1op0 11b0 dA10 17b0 1iN0 17b0 1iN0 17b0 1iN0 17b0 1vB0 SL0 1mp0 13z0 1iN0 17b0 1iN0 17b0 1jd0 12n0 1a10 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0|22e5\",\"Asia/Bishkek|+06 +07 +05|-60 -70 -50|0101010101010101010102020202020202020202020202020|rn60 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2e00 1tX0 17b0 1ip0 17b0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1cPu 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0|87e4\",\"Asia/Brunei|+08|-80|0||42e4\",\"Asia/Kolkata|IST|-5u|0||15e6\",\"Asia/Chita|+09 +10 +08|-90 -a0 -80|0101010101010101010102010101010101010101010101010101010101010120|rn30 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3re0|33e4\",\"Asia/Choibalsan|+07 +08 +10 +09|-70 -80 -a0 -90|012323232323232323232323232323232323232323232313131|jsF0 cKn0 1da0 1dd0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 6hD0 11z0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 3Db0 h1f0 1cJ0 1cP0 1cJ0|38e3\",\"Asia/Shanghai|CST CDT|-80 -90|0101010101010|DKG0 Rb0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0|23e6\",\"Asia/Colombo|+0530 +0630 +06|-5u -6u -60|0120|14giu 11zu n3cu|22e5\",\"Asia/Dhaka|+06 +07|-60 -70|010|1A5R0 1i00|16e6\",\"Asia/Damascus|EET EEST|-20 -30|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|M00 11b0 1oN0 11b0 1pd0 11b0 1oN0 11b0 1oN0 11b0 1oN0 11b0 1pd0 11b0 1oN0 Nb0 1AN0 Nb0 bcp0 19X0 1gp0 19X0 3ld0 1xX0 Vd0 1Bz0 Sp0 1vX0 10p0 1dz0 1cN0 1cL0 1db0 1db0 1g10 1an0 1ap0 1db0 1fd0 1db0 1cN0 1db0 1dd0 1db0 1cp0 1dz0 1c10 1dX0 1cN0 1db0 1dd0 1db0 1cN0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1db0 1cN0 1db0 1cN0 19z0 1fB0 1qL0 11B0 1on0 Wp0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0|26e5\",\"Asia/Dili|+09 +08|-90 -80|010|fpr0 Xld0|19e4\",\"Asia/Dubai|+04|-40|0||39e5\",\"Asia/Dushanbe|+06 +07 +05|-60 -70 -50|0101010101010101010102|rn60 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2hB0|76e4\",\"Asia/Famagusta|EET EEST +03|-20 -30 -30|0101010101010101010101010101010101010101010101010101010101010101010101010101010101012010101010101010101010101010|cPa0 1cL0 1qp0 Xz0 19B0 19X0 1fB0 1db0 1cp0 1cL0 1fB0 19X0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1o30 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 15U0 2Ks0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00\",\"Asia/Gaza|IST IDT EET EEST|-20 -30 -20 -30|010101010101010101010101010101023232323232323232323232323232323232323232323232323232323232323232323232|aXa0 Db0 1fB0 Rb0 bXd0 gM0 8Q00 IM0 1wM0 11z0 1C10 IL0 1s10 10n0 1o10 WL0 1zd0 On0 1ld0 11z0 1o10 14n0 1o10 14n0 1nd0 12n0 1nd0 Xz0 1q10 12n0 M10 C00 17c0 1io0 17c0 1io0 17c0 1o00 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 17c0 1io0 18N0 1bz0 19z0 1gp0 1610 1iL0 11z0 1o10 14o0 1lA1 SKX 1xd1 MKX 1AN0 1a00 1fA0 1cL0 1cN0 1nX0 1210 1nz0 1220 1qL0 WN0 1qL0 WN0 1qL0 11c0 1oo0 11c0 1rc0 Wo0 1rc0 Wo0 1rc0 11c0 1oo0 11c0 1oo0 11c0 1oo0 11c0 1rc0 Wo0 1rc0 11c0 1oo0 11c0 1oo0 11c0 1oo0|18e5\",\"Asia/Hebron|IST IDT EET EEST|-20 -30 -20 -30|01010101010101010101010101010102323232323232323232323232323232323232323232323232323232323232323232323232|aXa0 Db0 1fB0 Rb0 bXd0 gM0 8Q00 IM0 1wM0 11z0 1C10 IL0 1s10 10n0 1o10 WL0 1zd0 On0 1ld0 11z0 1o10 14n0 1o10 14n0 1nd0 12n0 1nd0 Xz0 1q10 12n0 M10 C00 17c0 1io0 17c0 1io0 17c0 1o00 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 17c0 1io0 18N0 1bz0 19z0 1gp0 1610 1iL0 12L0 1mN0 14o0 1lc0 Tb0 1xd1 MKX bB0 cn0 1cN0 1a00 1fA0 1cL0 1cN0 1nX0 1210 1nz0 1220 1qL0 WN0 1qL0 WN0 1qL0 11c0 1oo0 11c0 1rc0 Wo0 1rc0 Wo0 1rc0 11c0 1oo0 11c0 1oo0 11c0 1oo0 11c0 1rc0 Wo0 1rc0 11c0 1oo0 11c0 1oo0 11c0 1oo0|25e4\",\"Asia/Ho_Chi_Minh|+08 +07|-80 -70|01|dfs0|90e5\",\"Asia/Hong_Kong|HKT HKST|-80 -90|01010101010101010|H7u 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 s10 1Vz0 1cN0 1cL0 1cN0 1cL0 6fd0 14n0|73e5\",\"Asia/Hovd|+06 +07 +08|-60 -70 -80|01212121212121212121212121212121212121212121212121|jsG0 cKn0 1db0 1dd0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 6hD0 11z0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 kEp0 1cJ0 1cP0 1cJ0|81e3\",\"Asia/Irkutsk|+08 +09 +07|-80 -90 -70|010101010101010101010201010101010101010101010101010101010101010|rn40 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|60e4\",\"Europe/Istanbul|EET EEST +03 +04|-20 -30 -30 -40|01010101010123201010101010101010101010101010101010101010101010101010101010101012|8jz0 11A0 WN0 1qL0 TB0 1tX0 U10 1tz0 11B0 1in0 17d0 z90 cne0 pb0 2Cp0 1800 14o0 1dc0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1a00 1fA0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WO0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 Xc0 1qo0 WM0 1qM0 11A0 1o00 1200 1nA0 11A0 1tA0 U00 15w0|13e6\",\"Asia/Jakarta|WIB|-70|0||31e6\",\"Asia/Jayapura|WIT|-90|0||26e4\",\"Asia/Jerusalem|IST IDT|-20 -30|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|aXa0 Db0 1fB0 Rb0 bXd0 gM0 8Q00 IM0 1wM0 11z0 1C10 IL0 1s10 10n0 1o10 WL0 1zd0 On0 1ld0 11z0 1o10 14n0 1o10 14n0 1nd0 12n0 1nd0 Xz0 1q10 12n0 1hB0 1dX0 1ep0 1aL0 1eN0 17X0 1nf0 11z0 1tB0 19W0 1e10 17b0 1ep0 1gL0 18N0 1fz0 1eN0 17b0 1gq0 1gn0 19d0 1dz0 1c10 17X0 1hB0 1gn0 19d0 1dz0 1c10 17X0 1kp0 1dz0 1c10 1aL0 1eN0 1oL0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0|81e4\",\"Asia/Kabul|+0430|-4u|0||46e5\",\"Asia/Kamchatka|+12 +13 +11|-c0 -d0 -b0|0101010101010101010102010101010101010101010101010101010101020|rn00 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 2sp0 WM0|18e4\",\"Asia/Karachi|+05 PKT PKST|-50 -50 -60|01212121|2Xv0 1fy00 1cL0 dK10 11b0 1610 1jX0|24e6\",\"Asia/Kathmandu|+0530 +0545|-5u -5J|01|CVuu|12e5\",\"Asia/Khandyga|+09 +10 +08 +11|-90 -a0 -80 -b0|01010101010101010101020101010101010101010101010131313131313131310|rn30 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 qK0 yN0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 17V0 7zD0|66e2\",\"Asia/Krasnoyarsk|+07 +08 +06|-70 -80 -60|010101010101010101010201010101010101010101010101010101010101010|rn50 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|10e5\",\"Asia/Kuala_Lumpur|+0730 +08|-7u -80|01|td4u|71e5\",\"Asia/Macau|CST CDT|-80 -90|01010101010101010|H7u 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 s10 1Vz0 1cN0 1cL0 1cN0 1cL0 6fd0 14n0|57e4\",\"Asia/Magadan|+11 +12 +10|-b0 -c0 -a0|0101010101010101010102010101010101010101010101010101010101010120|rn10 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3Cq0|95e3\",\"Asia/Makassar|WITA|-80|0||15e5\",\"Asia/Manila|PST PDT|-80 -90|010|k0E0 1db0|24e6\",\"Asia/Nicosia|EET EEST|-20 -30|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|cPa0 1cL0 1qp0 Xz0 19B0 19X0 1fB0 1db0 1cp0 1cL0 1fB0 19X0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1o30 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|32e4\",\"Asia/Novokuznetsk|+07 +08 +06|-70 -80 -60|0101010101010101010102010101010101010101010101010101010101020|rn50 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 2sp0 WM0|55e4\",\"Asia/Novosibirsk|+07 +08 +06|-70 -80 -60|01010101010101010101020101020202020202020202020202020202020202020|rn50 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 ml0 Os0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 4eN0|15e5\",\"Asia/Omsk|+06 +07 +05|-60 -70 -50|010101010101010101010201010101010101010101010101010101010101010|rn60 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|12e5\",\"Asia/Oral|+05 +06 +04|-50 -60 -40|010101010101010202020202020202020202020202020|rn70 3Db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 1cM0 1cM0 IM0 1EM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0|27e4\",\"Asia/Pontianak|WITA WIB|-80 -70|01|HNs0|23e4\",\"Asia/Pyongyang|KST KST|-90 -8u|010|1P4D0 6BA0|29e5\",\"Asia/Qostanay|+05 +06 +04|-50 -60 -40|0101010101010101010201010101010101010101010101|rn70 3Db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0\",\"Asia/Qyzylorda|+05 +06|-50 -60|010101010101010101010101010101010101010101010|rn70 3Db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 3ao0 1EM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 zQl0|73e4\",\"Asia/Rangoon|+0630|-6u|0||48e5\",\"Asia/Sakhalin|+11 +12 +10|-b0 -c0 -a0|010101010101010101010201010101010202020202020202020202020202020|rn10 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 2pB0 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3rd0|58e4\",\"Asia/Samarkand|+05 +06|-50 -60|010101010101010101010|rn70 3Db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0|36e4\",\"Asia/Seoul|KST KDT|-90 -a0|01010|Gf50 11A0 1o00 11A0|23e6\",\"Asia/Srednekolymsk|+11 +12 +10|-b0 -c0 -a0|010101010101010101010201010101010101010101010101010101010101010|rn10 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|35e2\",\"Asia/Taipei|CST CDT|-80 -90|0101010|akg0 1db0 1cN0 1db0 97B0 AL0|74e5\",\"Asia/Tashkent|+06 +07 +05|-60 -70 -50|0101010101010101010102|rn60 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0|23e5\",\"Asia/Tbilisi|+04 +05 +03|-40 -50 -30|01010101010101010101020202010101010101010101020|rn80 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 1cK0 1cL0 1cN0 1cL0 1cN0 2pz0 1cL0 1fB0 3Nz0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 An0 Os0 WM0|11e5\",\"Asia/Tehran|+0330 +04 +05 +0430|-3u -40 -50 -4u|0121030303030303030303030303030303030303030303030303030303030303030303030303030303030|j4ku TXu 1pz0 sN0 vAu 1cL0 1dB0 1en0 pNB0 UL0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 64p0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0|14e6\",\"Asia/Thimphu|+0530 +06|-5u -60|01|HcGu|79e3\",\"Asia/Tokyo|JST|-90|0||38e6\",\"Asia/Tomsk|+07 +08 +06|-70 -80 -60|01010101010101010101020101010101010101010101020202020202020202020|rn50 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 co0 1bB0 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3Qp0|10e5\",\"Asia/Ulaanbaatar|+07 +08 +09|-70 -80 -90|01212121212121212121212121212121212121212121212121|jsF0 cKn0 1db0 1dd0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 6hD0 11z0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 kEp0 1cJ0 1cP0 1cJ0|12e5\",\"Asia/Ust-Nera|+09 +12 +11 +10|-90 -c0 -b0 -a0|0121212121212121212123212121212121212121212121212121212121212123|rn30 1d90 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 17V0 7zD0|65e2\",\"Asia/Vladivostok|+10 +11 +09|-a0 -b0 -90|010101010101010101010201010101010101010101010101010101010101010|rn20 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|60e4\",\"Asia/Yakutsk|+09 +10 +08|-90 -a0 -80|010101010101010101010201010101010101010101010101010101010101010|rn30 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|28e4\",\"Asia/Yekaterinburg|+05 +06 +04|-50 -60 -40|010101010101010101010201010101010101010101010101010101010101010|rn70 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|14e5\",\"Asia/Yerevan|+04 +05 +03|-40 -50 -30|01010101010101010101020202020101010101010101010101010101010|rn80 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 4RX0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|13e5\",\"Atlantic/Azores|-01 +00 WET|10 0 0|0101010101010101010101010101010121010101010101010101010101010101010101010101010101010101010101010101010101010|hAN0 1cM0 1fA0 1cM0 1cM0 1cN0 1cL0 1cN0 1cM0 1cM0 1cM0 1cM0 1cN0 1cL0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cL0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|25e4\",\"Atlantic/Bermuda|AST ADT|40 30|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|avi0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|65e3\",\"Atlantic/Canary|WET WEST|0 -10|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|oXc0 1a10 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|54e4\",\"Atlantic/Cape_Verde|-02 -01|20 10|01|elE0|50e4\",\"Atlantic/Faroe|WET WEST|0 -10|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|rm10 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|49e3\",\"Atlantic/Madeira|WET WEST|0 -10|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|hAM0 1cM0 1fA0 1cM0 1cM0 1cN0 1cL0 1cN0 1cM0 1cM0 1cM0 1cM0 1cN0 1cL0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|27e4\",\"Atlantic/South_Georgia|-02|20|0||30\",\"Atlantic/Stanley|-04 -03 -02|40 30 20|01212101010101010101010101010101010101010101010101010101|wrg0 WL0 1qL0 U10 1tz0 2mN0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1tz0 U10 1tz0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1tz0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qN0 U10 1wn0 Rd0 1wn0 U10 1tz0 U10 1tz0 U10 1tz0 U10 1tz0 U10 1wn0 U10 1tz0 U10 1tz0 U10|21e2\",\"Australia/Sydney|AEST AEDT|-a0 -b0|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|4r40 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 14o0 1o00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1tA0 WM0 1tA0 U00 1tA0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 11A0 1o00 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0|40e5\",\"Australia/Adelaide|ACST ACDT|-9u -au|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|4r4u LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 Oo0 1zc0 WM0 1qM0 Rc0 1zc0 U00 1tA0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0|11e5\",\"Australia/Brisbane|AEST AEDT|-a0 -b0|010101010|4r40 LA0 H1A0 Oo0 1zc0 Oo0 1zc0 Oo0|20e5\",\"Australia/Broken_Hill|ACST ACDT|-9u -au|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|4r4u LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 14o0 1o00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1tA0 WM0 1tA0 U00 1tA0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0|18e3\",\"Australia/Currie|AEST AEDT|-a0 -b0|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|4r40 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1qM0 WM0 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1wo0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 11A0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 11A0 1o00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0|746\",\"Australia/Darwin|ACST|-9u|0||12e4\",\"Australia/Eucla|+0845 +0945|-8J -9J|0101010101010|bHRf Oo0 l5A0 Oo0 iJA0 G00 zU00 IM0 1qM0 11A0 1o00 11A0|368\",\"Australia/Hobart|AEDT AEST|-b0 -a0|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|qg0 1wo0 U00 1wo0 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1qM0 WM0 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1wo0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 11A0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 11A0 1o00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0|21e4\",\"Australia/Lord_Howe|AEST +1030 +1130 +11|-a0 -au -bu -b0|01212121213131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313|raC0 1zdu Rb0 1zd0 On0 1zd0 On0 1zd0 On0 1zd0 TXu 1qMu WLu 1tAu WLu 1tAu TXu 1tAu Onu 1zcu Onu 1zcu Onu 1zcu Rbu 1zcu Onu 1zcu Onu 1zcu 11zu 1o0u 11zu 1o0u 11zu 1o0u 11zu 1qMu WLu 11Au 1nXu 1qMu 11zu 1o0u 11zu 1o0u 11zu 1qMu WLu 1qMu 11zu 1o0u WLu 1qMu 14nu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1fzu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu|347\",\"Australia/Lindeman|AEST AEDT|-a0 -b0|0101010101010|4r40 LA0 H1A0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0|10\",\"Australia/Melbourne|AEST AEDT|-a0 -b0|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|4r40 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1qM0 11A0 1tA0 U00 1tA0 U00 1tA0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 11A0 1o00 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0|39e5\",\"Australia/Perth|AWST AWDT|-80 -90|0101010101010|bHS0 Oo0 l5A0 Oo0 iJA0 G00 zU00 IM0 1qM0 11A0 1o00 11A0|18e5\",\"Europe/Brussels|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|hDB0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|21e5\",\"Pacific/Easter|-06 -07 -05|60 70 50|010101010101010101010101020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202|yP0 1ip0 11z0 1o10 11z0 1qN0 WL0 1ld0 14n0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 2pA0 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 1cL0 1cN0 11z0 1o10 11z0 1qN0 WL0 1fB0 19X0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1ip0 1fz0 1fB0 11z0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1o10 19X0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1zb0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0|30e2\",\"EET|EET EEST|-20 -30|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|hDB0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00\",\"Europe/Dublin|IST GMT|-10 0|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|4re0 U00 1tA0 U00 1tA0 U00 1tA0 U00 1tA0 WM0 1qM0 WM0 1qM0 WM0 1tA0 U00 1tA0 U00 1tA0 11z0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 14o0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|12e5\",\"Etc/GMT-1|+01|-10|0|\",\"Pacific/Guadalcanal|+11|-b0|0||11e4\",\"Pacific/Tarawa|+12|-c0|0||29e3\",\"Etc/GMT-13|+13|-d0|0|\",\"Etc/GMT-14|+14|-e0|0|\",\"Etc/GMT-2|+02|-20|0|\",\"Indian/Maldives|+05|-50|0||35e4\",\"Pacific/Palau|+09|-90|0||21e3\",\"Etc/GMT+1|-01|10|0|\",\"Pacific/Tahiti|-10|a0|0||18e4\",\"Etc/GMT+11|-11|b0|0|\",\"Etc/GMT+12|-12|c0|0|\",\"Etc/GMT+5|-05|50|0|\",\"Etc/GMT+6|-06|60|0|\",\"Etc/GMT+7|-07|70|0|\",\"Etc/GMT+8|-08|80|0|\",\"Pacific/Gambier|-09|90|0||125\",\"Etc/UCT|UTC|0|0|\",\"Europe/Andorra|CET CEST|-10 -20|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|B7d0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|79e3\",\"Europe/Astrakhan|+04 +05 +03|-40 -50 -30|0101010101010101020202020202020202020202020202020202020202020|rn80 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 1cM0 3Co0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3rd0|10e5\",\"Europe/Athens|EET EEST|-20 -30|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|cOK0 1vc0 SO0 1cM0 1a00 1ao0 1fc0 1a10 1fG0 1cg0 1dX0 1bX0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|35e5\",\"Europe/London|BST GMT|-10 0|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|4re0 U00 1tA0 U00 1tA0 U00 1tA0 U00 1tA0 WM0 1qM0 WM0 1qM0 WM0 1tA0 U00 1tA0 U00 1tA0 11z0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 14o0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|10e6\",\"Europe/Belgrade|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|wdd0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|12e5\",\"Europe/Prague|CET CEST|-10 -20|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|muN0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|13e5\",\"Europe/Bucharest|EET EEST|-20 -30|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|mRa0 On0 1fA0 1a10 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cK0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cL0 1cN0 1cL0 1fB0 1nX0 11E0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|19e5\",\"Europe/Budapest|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|oXc0 1a10 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|17e5\",\"Europe/Zurich|CET CEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|rm10 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|38e4\",\"Europe/Chisinau|MSK MSD EEST EET|-30 -40 -30 -20|010101010101010101012323232323232323232323232323232323232323232323232323232323232323232323232323232323|rn90 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 gL0 WO0 1cM0 1cM0 1cK0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1nX0 11D0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|67e4\",\"Europe/Gibraltar|CET CEST|-10 -20|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|tLB0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|30e3\",\"Europe/Helsinki|EET EEST|-20 -30|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|rm00 1cM0 1cM0 1cM0 1cN0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|12e5\",\"Europe/Kaliningrad|MSK MSD EEST EET +03|-30 -40 -30 -20 -30|010101010101010102323232323232323232323232323232323232323232343|rn90 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|44e4\",\"Europe/Kiev|MSK MSD EEST EET|-30 -40 -30 -20|0101010101010101010123232323232323232323232323232323232323232323232323232323232323232323232323232323|rn90 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 Db0 3220 1cK0 1cL0 1cN0 1cL0 1cN0 1cL0 1cQ0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|34e5\",\"Europe/Kirov|+04 +05 +03|-40 -50 -30|010101010101010102020202020202020202020202020202020202020202|rn80 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 1cM0 3Co0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|48e4\",\"Europe/Lisbon|CET WET WEST CEST|-10 0 -10 -20|01212121212121212121212121212121203030302121212121212121212121212121212121212121212121212121212121212121212121|go00 1cM0 1cM0 1fA0 1cM0 1cM0 1cN0 1cL0 1cN0 1cM0 1cM0 1cM0 1cM0 1cN0 1cL0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|27e5\",\"Europe/Madrid|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|apy0 1a10 1fz0 1a10 19X0 1cN0 1fz0 1a10 1fC0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|62e5\",\"Europe/Malta|CET CEST|-10 -20|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|XX0 LA0 1zc0 Oo0 1C00 Oo0 1co0 1cM0 1lA0 Xc0 1qq0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1iN0 19z0 1fB0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|42e4\",\"Europe/Minsk|MSK MSD EEST EET +03|-30 -40 -30 -20 -30|010101010101010101023232323232323232323232323232323232323234|rn90 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 3Fc0 1cN0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0|19e5\",\"Europe/Paris|CET CEST|-10 -20|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|fbc0 1cL0 1fC0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|11e6\",\"Europe/Moscow|MSK MSD EEST EET MSK|-30 -40 -30 -20 -40|0101010101010101010102301010101010101010101010101010101010101040|rn90 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|16e6\",\"Europe/Riga|MSK MSD EEST EET|-30 -40 -30 -20|010101010101010102323232323232323232323232323232323232323232323232323232323232323232323232323232323|rn90 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 1o00 11A0 1o00 11A0 1qM0 3oo0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|64e4\",\"Europe/Rome|CET CEST|-10 -20|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|XX0 LA0 1zc0 Oo0 1C00 Oo0 1C00 LA0 1zc0 Oo0 1C00 LA0 1C00 LA0 1zc0 Oo0 1C00 Oo0 1zc0 Oo0 1fC0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|39e5\",\"Europe/Samara|+04 +05 +03|-40 -50 -30|01010101010101010202010101010101010101010101010101010101020|rn80 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 2y10 14m0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 2sp0 WM0|12e5\",\"Europe/Saratov|+04 +05 +03|-40 -50 -30|0101010101010102020202020202020202020202020202020202020202020|rn80 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1cM0 1cM0 1fA0 1cM0 3Co0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 5810\",\"Europe/Simferopol|MSK MSD EET EEST MSK|-30 -40 -20 -30 -40|0101010101010101010232323101010323232323232323232323232323232323240|rn90 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1Q00 4eL0 1cL0 1cN0 1cL0 1cN0 dX0 WL0 1cN0 1cL0 1fB0 1o30 11B0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11z0 1nW0|33e4\",\"Europe/Sofia|EET EEST|-20 -30|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|muJ0 1dd0 1fb0 1ap0 1fb0 1a20 1fy0 1a30 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cK0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1nX0 11E0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|12e5\",\"Europe/Tallinn|MSK MSD EEST EET|-30 -40 -30 -20|0101010101010101023232323232323232323232323232323232323232323232323232323232323232323232323232323|rn90 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o10 11A0 1qM0 5QM0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|41e4\",\"Europe/Tirane|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|axz0 10n0 1op0 11z0 1pd0 11z0 1qN0 WL0 1qp0 Xb0 1qp0 Xb0 1qp0 11z0 1lB0 11z0 1qN0 11z0 1iN0 16n0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|42e4\",\"Europe/Ulyanovsk|+04 +05 +03 +02|-40 -50 -30 -20|010101010101010102023202020202020202020202020202020202020202020|rn80 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3rd0|13e5\",\"Europe/Uzhgorod|MSK MSD CET EET EEST|-30 -40 -10 -20 -30|010101010101010101023434343434343434343434343434343434343434343434343434343434343434343434343434343|rn90 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1Q00 1Nf0 2pw0 1cL0 1cN0 1cL0 1cN0 1cL0 1cQ0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|11e4\",\"Europe/Vienna|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|oXb0 19X0 1cP0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|18e5\",\"Europe/Vilnius|MSK MSD EEST EET CEST CET|-30 -40 -30 -20 -20 -10|01010101010101010232323232323232323454323232323232323232323232323232323232323232323232323232323|rn90 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11B0 1o00 11A0 1qM0 8io0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|54e4\",\"Europe/Volgograd|+04 +05 +03|-40 -50 -30|0101010101010102020202020202020202020202020202020202020202020|rn80 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1cM0 1cM0 1fA0 1cM0 3Co0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 9Jd0|10e5\",\"Europe/Warsaw|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|hDA0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|17e5\",\"Europe/Zaporozhye|MSK MSD EEST EET|-30 -40 -30 -20|01010101010101010101023232323232323232323232323232323232323232323232323232323232323232323232323232323|rn90 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cK0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cQ0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00|77e4\",\"Pacific/Honolulu|HST|a0|0||37e4\",\"Indian/Chagos|+05 +06|-50 -60|01|13ij0|30e2\",\"Indian/Mauritius|+04 +05|-40 -50|01010|v5U0 14L0 12kr0 11z0|15e4\",\"Pacific/Kwajalein|-12 +12|c0 -c0|01|Vxo0|14e3\",\"MET|MET MEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|hDB0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00\",\"Pacific/Chatham|+1245 +1345|-cJ -dJ|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|bKC0 IM0 1C00 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1qM0 14o0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1io0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00|600\",\"Pacific/Apia|-11 -10 +14 +13|b0 a0 -e0 -d0|0101232323232323232323232323232323232323232|1Dbn0 1ff0 1a00 CI0 AQ0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00|37e3\",\"Pacific/Bougainville|+10 +11|-a0 -b0|01|1NwE0|18e4\",\"Pacific/Efate|+11 +12|-b0 -c0|010101010101010101010|xpN0 1cL0 1oN0 10L0 1fB0 19X0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 Lz0 1Nd0 An0|66e3\",\"Pacific/Enderbury|-12 -11 +13|c0 b0 -d0|012|nIc0 B7X0|1\",\"Pacific/Fakaofo|-11 +13|b0 -d0|01|1Gfn0|483\",\"Pacific/Fiji|+12 +13|-c0 -d0|010101010101010101010101010101010101010101010101|1ace0 LA0 1EM0 IM0 nJc0 LA0 1o00 Rc0 1wo0 Ao0 1Nc0 Ao0 1Q00 xz0 1SN0 uM0 1SM0 uM0 1VA0 s00 1VA0 s00 1VA0 s00 20o0 pc0 20o0 s00 20o0 pc0 20o0 pc0 20o0 pc0 20o0 pc0 20o0 s00 1VA0 s00 20o0 pc0 20o0 pc0 20o0 pc0 20o0|88e4\",\"Pacific/Galapagos|-05 -06|50 60|0101|CVF0 gNd0 rz0|25e3\",\"Pacific/Guam|GST GDT ChST|-a0 -b0 -a0|010101010102|JQ0 Rb0 1wp0 Rb0 5xd0 rX0 5sN0 zb1 1C0X On0 ULb0|17e4\",\"Pacific/Kiritimati|-1040 -10 +14|aE a0 -e0|012|nIaE B7Xk|51e2\",\"Pacific/Kosrae|+12 +11|-c0 -b0|01|1aAA0|66e2\",\"Pacific/Marquesas|-0930|9u|0||86e2\",\"Pacific/Pago_Pago|SST|b0|0||37e2\",\"Pacific/Nauru|+1130 +12|-bu -c0|01|maCu|10e3\",\"Pacific/Niue|-1130 -11|bu b0|01|libu|12e2\",\"Pacific/Norfolk|+1130 +1230 +11 +12|-bu -cu -b0 -c0|010232323232323232323232323|bHOu Oo0 1COo0 9Jcu 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0|25e4\",\"Pacific/Noumea|+11 +12|-b0 -c0|0101010|jhp0 xX0 1PB0 yn0 HeP0 Ao0|98e3\",\"Pacific/Pitcairn|-0830 -08|8u 80|01|18Vku|56\",\"Pacific/Rarotonga|-1030 -0930 -10|au 9u a0|012121212121212121212121212|lyWu IL0 1zcu Onu 1zcu Onu 1zcu Rbu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Rbu 1zcu Onu 1zcu Onu 1zcu Onu|13e3\",\"Pacific/Tongatapu|+13 +14|-d0 -e0|010101010|1csd0 15A0 1wo0 xz0 1Q10 xz0 zWN0 s00|75e3\",\"WET|WET WEST|0 -10|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|hDB0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00\"],\"links\":[\"Africa/Abidjan|Africa/Accra\",\"Africa/Abidjan|Africa/Bamako\",\"Africa/Abidjan|Africa/Banjul\",\"Africa/Abidjan|Africa/Conakry\",\"Africa/Abidjan|Africa/Dakar\",\"Africa/Abidjan|Africa/Freetown\",\"Africa/Abidjan|Africa/Lome\",\"Africa/Abidjan|Africa/Nouakchott\",\"Africa/Abidjan|Africa/Ouagadougou\",\"Africa/Abidjan|Africa/Timbuktu\",\"Africa/Abidjan|Atlantic/Reykjavik\",\"Africa/Abidjan|Atlantic/St_Helena\",\"Africa/Abidjan|Etc/GMT\",\"Africa/Abidjan|Etc/GMT+0\",\"Africa/Abidjan|Etc/GMT-0\",\"Africa/Abidjan|Etc/GMT0\",\"Africa/Abidjan|Etc/Greenwich\",\"Africa/Abidjan|GMT\",\"Africa/Abidjan|GMT+0\",\"Africa/Abidjan|GMT-0\",\"Africa/Abidjan|GMT0\",\"Africa/Abidjan|Greenwich\",\"Africa/Abidjan|Iceland\",\"Africa/Cairo|Egypt\",\"Africa/Johannesburg|Africa/Maseru\",\"Africa/Johannesburg|Africa/Mbabane\",\"Africa/Lagos|Africa/Bangui\",\"Africa/Lagos|Africa/Brazzaville\",\"Africa/Lagos|Africa/Douala\",\"Africa/Lagos|Africa/Kinshasa\",\"Africa/Lagos|Africa/Libreville\",\"Africa/Lagos|Africa/Luanda\",\"Africa/Lagos|Africa/Malabo\",\"Africa/Lagos|Africa/Niamey\",\"Africa/Lagos|Africa/Porto-Novo\",\"Africa/Maputo|Africa/Blantyre\",\"Africa/Maputo|Africa/Bujumbura\",\"Africa/Maputo|Africa/Gaborone\",\"Africa/Maputo|Africa/Harare\",\"Africa/Maputo|Africa/Kigali\",\"Africa/Maputo|Africa/Lubumbashi\",\"Africa/Maputo|Africa/Lusaka\",\"Africa/Nairobi|Africa/Addis_Ababa\",\"Africa/Nairobi|Africa/Asmara\",\"Africa/Nairobi|Africa/Asmera\",\"Africa/Nairobi|Africa/Dar_es_Salaam\",\"Africa/Nairobi|Africa/Djibouti\",\"Africa/Nairobi|Africa/Kampala\",\"Africa/Nairobi|Africa/Mogadishu\",\"Africa/Nairobi|Indian/Antananarivo\",\"Africa/Nairobi|Indian/Comoro\",\"Africa/Nairobi|Indian/Mayotte\",\"Africa/Tripoli|Libya\",\"America/Adak|America/Atka\",\"America/Adak|US/Aleutian\",\"America/Anchorage|US/Alaska\",\"America/Argentina/Buenos_Aires|America/Buenos_Aires\",\"America/Argentina/Catamarca|America/Argentina/ComodRivadavia\",\"America/Argentina/Catamarca|America/Catamarca\",\"America/Argentina/Cordoba|America/Cordoba\",\"America/Argentina/Cordoba|America/Rosario\",\"America/Argentina/Jujuy|America/Jujuy\",\"America/Argentina/Mendoza|America/Mendoza\",\"America/Cayenne|Etc/GMT+3\",\"America/Chicago|CST6CDT\",\"America/Chicago|US/Central\",\"America/Denver|America/Shiprock\",\"America/Denver|MST7MDT\",\"America/Denver|Navajo\",\"America/Denver|US/Mountain\",\"America/Detroit|US/Michigan\",\"America/Edmonton|Canada/Mountain\",\"America/Fort_Wayne|America/Indiana/Indianapolis\",\"America/Fort_Wayne|America/Indianapolis\",\"America/Fort_Wayne|US/East-Indiana\",\"America/Godthab|America/Nuuk\",\"America/Halifax|Canada/Atlantic\",\"America/Havana|Cuba\",\"America/Indiana/Knox|America/Knox_IN\",\"America/Indiana/Knox|US/Indiana-Starke\",\"America/Jamaica|Jamaica\",\"America/Kentucky/Louisville|America/Louisville\",\"America/La_Paz|Etc/GMT+4\",\"America/Los_Angeles|PST8PDT\",\"America/Los_Angeles|US/Pacific\",\"America/Los_Angeles|US/Pacific-New\",\"America/Manaus|Brazil/West\",\"America/Mazatlan|Mexico/BajaSur\",\"America/Mexico_City|Mexico/General\",\"America/New_York|EST5EDT\",\"America/New_York|US/Eastern\",\"America/Noronha|Brazil/DeNoronha\",\"America/Panama|America/Atikokan\",\"America/Panama|America/Cayman\",\"America/Panama|America/Coral_Harbour\",\"America/Panama|EST\",\"America/Phoenix|America/Creston\",\"America/Phoenix|MST\",\"America/Phoenix|US/Arizona\",\"America/Puerto_Rico|America/Anguilla\",\"America/Puerto_Rico|America/Antigua\",\"America/Puerto_Rico|America/Aruba\",\"America/Puerto_Rico|America/Blanc-Sablon\",\"America/Puerto_Rico|America/Curacao\",\"America/Puerto_Rico|America/Dominica\",\"America/Puerto_Rico|America/Grenada\",\"America/Puerto_Rico|America/Guadeloupe\",\"America/Puerto_Rico|America/Kralendijk\",\"America/Puerto_Rico|America/Lower_Princes\",\"America/Puerto_Rico|America/Marigot\",\"America/Puerto_Rico|America/Montserrat\",\"America/Puerto_Rico|America/Port_of_Spain\",\"America/Puerto_Rico|America/St_Barthelemy\",\"America/Puerto_Rico|America/St_Kitts\",\"America/Puerto_Rico|America/St_Lucia\",\"America/Puerto_Rico|America/St_Thomas\",\"America/Puerto_Rico|America/St_Vincent\",\"America/Puerto_Rico|America/Tortola\",\"America/Puerto_Rico|America/Virgin\",\"America/Regina|Canada/Saskatchewan\",\"America/Rio_Branco|America/Porto_Acre\",\"America/Rio_Branco|Brazil/Acre\",\"America/Santiago|Chile/Continental\",\"America/Sao_Paulo|Brazil/East\",\"America/St_Johns|Canada/Newfoundland\",\"America/Tijuana|America/Ensenada\",\"America/Tijuana|America/Santa_Isabel\",\"America/Tijuana|Mexico/BajaNorte\",\"America/Toronto|America/Montreal\",\"America/Toronto|America/Nassau\",\"America/Toronto|Canada/Eastern\",\"America/Vancouver|Canada/Pacific\",\"America/Whitehorse|Canada/Yukon\",\"America/Winnipeg|Canada/Central\",\"Asia/Ashgabat|Asia/Ashkhabad\",\"Asia/Bangkok|Asia/Phnom_Penh\",\"Asia/Bangkok|Asia/Vientiane\",\"Asia/Bangkok|Etc/GMT-7\",\"Asia/Bangkok|Indian/Christmas\",\"Asia/Brunei|Asia/Kuching\",\"Asia/Brunei|Etc/GMT-8\",\"Asia/Dhaka|Asia/Dacca\",\"Asia/Dubai|Asia/Muscat\",\"Asia/Dubai|Etc/GMT-4\",\"Asia/Dubai|Indian/Mahe\",\"Asia/Dubai|Indian/Reunion\",\"Asia/Ho_Chi_Minh|Asia/Saigon\",\"Asia/Hong_Kong|Hongkong\",\"Asia/Jerusalem|Asia/Tel_Aviv\",\"Asia/Jerusalem|Israel\",\"Asia/Kathmandu|Asia/Katmandu\",\"Asia/Kolkata|Asia/Calcutta\",\"Asia/Kuala_Lumpur|Asia/Singapore\",\"Asia/Kuala_Lumpur|Singapore\",\"Asia/Macau|Asia/Macao\",\"Asia/Makassar|Asia/Ujung_Pandang\",\"Asia/Nicosia|Europe/Nicosia\",\"Asia/Qatar|Asia/Bahrain\",\"Asia/Rangoon|Asia/Yangon\",\"Asia/Rangoon|Indian/Cocos\",\"Asia/Riyadh|Antarctica/Syowa\",\"Asia/Riyadh|Asia/Aden\",\"Asia/Riyadh|Asia/Kuwait\",\"Asia/Riyadh|Etc/GMT-3\",\"Asia/Seoul|ROK\",\"Asia/Shanghai|Asia/Chongqing\",\"Asia/Shanghai|Asia/Chungking\",\"Asia/Shanghai|Asia/Harbin\",\"Asia/Shanghai|PRC\",\"Asia/Taipei|ROC\",\"Asia/Tehran|Iran\",\"Asia/Thimphu|Asia/Thimbu\",\"Asia/Tokyo|Japan\",\"Asia/Ulaanbaatar|Asia/Ulan_Bator\",\"Asia/Urumqi|Antarctica/Vostok\",\"Asia/Urumqi|Asia/Kashgar\",\"Asia/Urumqi|Etc/GMT-6\",\"Atlantic/Faroe|Atlantic/Faeroe\",\"Atlantic/South_Georgia|Etc/GMT+2\",\"Australia/Adelaide|Australia/South\",\"Australia/Brisbane|Australia/Queensland\",\"Australia/Broken_Hill|Australia/Yancowinna\",\"Australia/Darwin|Australia/North\",\"Australia/Hobart|Australia/Tasmania\",\"Australia/Lord_Howe|Australia/LHI\",\"Australia/Melbourne|Australia/Victoria\",\"Australia/Perth|Australia/West\",\"Australia/Sydney|Australia/ACT\",\"Australia/Sydney|Australia/Canberra\",\"Australia/Sydney|Australia/NSW\",\"Etc/UCT|Etc/UTC\",\"Etc/UCT|Etc/Universal\",\"Etc/UCT|Etc/Zulu\",\"Etc/UCT|UCT\",\"Etc/UCT|UTC\",\"Etc/UCT|Universal\",\"Etc/UCT|Zulu\",\"Europe/Belgrade|Europe/Ljubljana\",\"Europe/Belgrade|Europe/Podgorica\",\"Europe/Belgrade|Europe/Sarajevo\",\"Europe/Belgrade|Europe/Skopje\",\"Europe/Belgrade|Europe/Zagreb\",\"Europe/Berlin|Arctic/Longyearbyen\",\"Europe/Berlin|Atlantic/Jan_Mayen\",\"Europe/Berlin|Europe/Copenhagen\",\"Europe/Berlin|Europe/Oslo\",\"Europe/Berlin|Europe/Stockholm\",\"Europe/Brussels|CET\",\"Europe/Brussels|Europe/Amsterdam\",\"Europe/Brussels|Europe/Luxembourg\",\"Europe/Chisinau|Europe/Tiraspol\",\"Europe/Dublin|Eire\",\"Europe/Helsinki|Europe/Mariehamn\",\"Europe/Istanbul|Asia/Istanbul\",\"Europe/Istanbul|Turkey\",\"Europe/Lisbon|Portugal\",\"Europe/London|Europe/Belfast\",\"Europe/London|Europe/Guernsey\",\"Europe/London|Europe/Isle_of_Man\",\"Europe/London|Europe/Jersey\",\"Europe/London|GB\",\"Europe/London|GB-Eire\",\"Europe/Moscow|W-SU\",\"Europe/Paris|Europe/Monaco\",\"Europe/Prague|Europe/Bratislava\",\"Europe/Rome|Europe/San_Marino\",\"Europe/Rome|Europe/Vatican\",\"Europe/Warsaw|Poland\",\"Europe/Zurich|Europe/Busingen\",\"Europe/Zurich|Europe/Vaduz\",\"Indian/Maldives|Etc/GMT-5\",\"Indian/Maldives|Indian/Kerguelen\",\"Pacific/Auckland|Antarctica/McMurdo\",\"Pacific/Auckland|Antarctica/South_Pole\",\"Pacific/Auckland|NZ\",\"Pacific/Chatham|NZ-CHAT\",\"Pacific/Easter|Chile/EasterIsland\",\"Pacific/Gambier|Etc/GMT+9\",\"Pacific/Guadalcanal|Etc/GMT-11\",\"Pacific/Guadalcanal|Pacific/Pohnpei\",\"Pacific/Guadalcanal|Pacific/Ponape\",\"Pacific/Guam|Pacific/Saipan\",\"Pacific/Honolulu|HST\",\"Pacific/Honolulu|Pacific/Johnston\",\"Pacific/Honolulu|US/Hawaii\",\"Pacific/Kwajalein|Kwajalein\",\"Pacific/Pago_Pago|Pacific/Midway\",\"Pacific/Pago_Pago|Pacific/Samoa\",\"Pacific/Pago_Pago|US/Samoa\",\"Pacific/Palau|Etc/GMT-9\",\"Pacific/Port_Moresby|Antarctica/DumontDUrville\",\"Pacific/Port_Moresby|Etc/GMT-10\",\"Pacific/Port_Moresby|Pacific/Chuuk\",\"Pacific/Port_Moresby|Pacific/Truk\",\"Pacific/Port_Moresby|Pacific/Yap\",\"Pacific/Tahiti|Etc/GMT+10\",\"Pacific/Tarawa|Etc/GMT-12\",\"Pacific/Tarawa|Pacific/Funafuti\",\"Pacific/Tarawa|Pacific/Majuro\",\"Pacific/Tarawa|Pacific/Wake\",\"Pacific/Tarawa|Pacific/Wallis\"]}");

/***/ }),

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

/***/ "./src/js-joda-timezone.js":
/*!*********************************!*\
  !*** ./src/js-joda-timezone.js ***!
  \*********************************/
/*! namespace exports */
/*! exports [not provided] [maybe used in main (runtime-defined)] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tzdbData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tzdbData */ "./src/tzdbData.js");
/* harmony import */ var _MomentZoneRulesProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MomentZoneRulesProvider */ "./src/MomentZoneRulesProvider.js");
/* harmony import */ var _auto_plug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auto-plug */ "./src/auto-plug.js");
/*
 * @copyright (c) 2016-present, Philipp Thürwächter, Pattrick Hüper
 * @license BSD-3-Clause (see LICENSE in the root directory of this source tree)
 */



_MomentZoneRulesProvider__WEBPACK_IMPORTED_MODULE_1__.MomentZoneRulesProvider.loadTzdbData(_tzdbData__WEBPACK_IMPORTED_MODULE_0__.default);
(0,_auto_plug__WEBPACK_IMPORTED_MODULE_2__.default)();

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

/***/ "./src/tzdbData.js":
/*!*************************!*\
  !*** ./src/tzdbData.js ***!
  \*************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _data_packed_latest_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/packed/latest.json */ "./data/packed/latest-1970-2030.json");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_data_packed_latest_json__WEBPACK_IMPORTED_MODULE_0__);

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
/******/ 	return __webpack_require__("./src/js-joda-timezone.js");
/******/ })()
;
});