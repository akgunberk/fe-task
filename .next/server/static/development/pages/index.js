module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./data sync recursive ^\\.\\/.*\\.json$":
/*!**********************************!*\
  !*** ./data sync ^\.\/.*\.json$ ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./0001.json": "./data/0001.json",
	"./0002.json": "./data/0002.json",
	"./0003.json": "./data/0003.json",
	"./movielist.json": "./data/movielist.json"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./data sync recursive ^\\.\\/.*\\.json$";

/***/ }),

/***/ "./data/0001.json":
/*!************************!*\
  !*** ./data/0001.json ***!
  \************************/
/*! exports provided: id, year, genres, duration, originalTitle, imdbRating, actors, writers, directors, storyline, posterurl, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"id\":\"0001\",\"year\":\"1994\",\"genres\":[\"Crime\",\"Drama\"],\"duration\":\"PT142M\",\"originalTitle\":\"The Shawshank Redemption\",\"imdbRating\":9.3,\"actors\":[\"Tim Robbins\",\"Morgan Freeman\",\"Bob Gunton\"],\"writers\":[\"Stephen King\"],\"directors\":[\"Frank Darabont\"],\"storyline\":\"Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit. The film portrays the man's unique way of dealing with his new, torturous life; along the way he befriends a number of fellow prisoners, most notably a wise long-term inmate named Red.\",\"posterurl\":\"https://m.media-amazon.com/images/I/A19QAw-6IhL._AC_UY436_FMwebp_QL65_.jpg\"}");

/***/ }),

/***/ "./data/0002.json":
/*!************************!*\
  !*** ./data/0002.json ***!
  \************************/
/*! exports provided: id, year, genres, duration, originalTitle, imdbRating, actors, writers, directors, storyline, posterurl, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"id\":\"0002\",\"year\":\"1972\",\"genres\":[\"Crime\",\"Drama\"],\"duration\":\"PT175M\",\"originalTitle\":\"The Godfather\",\"imdbRating\":9.2,\"actors\":[\"Marlon Brando\",\"Al Pacino\",\"James Caan\"],\"writers\":[\"Mario Puzo\",\"Francis Ford Coppola\"],\"directors\":[\"Francis Ford Coppola\"],\"storyline\":\"When the aging head of a famous crime family decides to transfer his position to one of his subalterns, a series of unfortunate events start happening to the family, and a war begins between all the well-known families leading to insolence, deportation, murder and revenge, and ends with the favorable successor being finally chosen.                Written by\\nJ. S. Golden\",\"posterurl\":\"https://m.media-amazon.com/images/I/71UJP5Nw3GL._AC_UY436_FMwebp_QL65_.jpg\"}");

/***/ }),

/***/ "./data/0003.json":
/*!************************!*\
  !*** ./data/0003.json ***!
  \************************/
/*! exports provided: id, year, genres, duration, originalTitle, imdbRating, directors, writers, storyline, actors, posterurl, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"id\":\"0003\",\"year\":\"2008\",\"genres\":[\"Action\",\"Crime\",\"Drama\"],\"duration\":\"PT152M\",\"originalTitle\":\"The Dark Knight\",\"imdbRating\":5,\"directors\":[\"Christopher Nolan\"],\"writers\":[\"Jonathan Nolan\",\"Christopher Nolan\"],\"storyline\":\"Set within a year after the events of Batman Begins, Batman, Lieutenant James Gordon, and new district attorney Harvey Dent successfully begin to round up the criminals that plague Gotham City until a mysterious and sadistic criminal mastermind known only as the Joker appears in Gotham, creating a new wave of chaos. Batman's struggle against the Joker becomes deeply personal, forcing him to \\\"confront everything he believes\\\" and improve his technology to stop him. A love triangle develops between Bruce Wayne, Dent and Rachel Dawes.                Written by\\nLeon Lombardi\",\"actors\":[\"Christian Bale\",\"Heath Ledger\",\"Aaron Eckhart\",\"Berk Akgün\"],\"posterurl\":\"https://m.media-amazon.com/images/I/91zBlQ1iqoL._AC_UY436_FMwebp_QL65_.jpg\"}");

/***/ }),

/***/ "./data/movielist.json":
/*!*****************************!*\
  !*** ./data/movielist.json ***!
  \*****************************/
/*! exports provided: 0, 1, 2, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":\"0001\",\"year\":\"1994\",\"genres\":[\"Crime\",\"Drama\"],\"duration\":\"PT142M\",\"originalTitle\":\"The Shawshank Redemption\",\"imdbRating\":9.3,\"posterurl\":\"https://m.media-amazon.com/images/I/A19QAw-6IhL._AC_UY436_FMwebp_QL65_.jpg\"},{\"id\":\"0002\",\"year\":\"1972\",\"genres\":[\"Crime\",\"Drama\"],\"duration\":\"PT175M\",\"originalTitle\":\"The Godfather\",\"imdbRating\":9.2,\"posterurl\":\"https://m.media-amazon.com/images/I/71UJP5Nw3GL._AC_UY436_FMwebp_QL65_.jpg\"},{\"id\":\"0003\",\"year\":\"2008\",\"genres\":[\"Action\",\"Crime\",\"Drama\"],\"duration\":\"PT152M\",\"originalTitle\":\"The Dark Knight\",\"imdbRating\":5,\"posterurl\":\"https://m.media-amazon.com/images/I/91zBlQ1iqoL._AC_UY436_FMwebp_QL65_.jpg\"}]");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptors */ "core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-int */ "core-js/library/fn/parse-int");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _movie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movie */ "./pages/movie.js");
/* harmony import */ var _data_movielist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/movielist */ "./data/movielist.json");
var _data_movielist__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/movielist */ "./data/movielist.json", 1);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/style.scss */ "./styles/style.scss");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_style_scss__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/akgunberk/Desktop/DEV/armut/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





class App extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, __jsx("title", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, "Movie List - Front End Task"), __jsx("link", {
      rel: "stylesheet",
      href: "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    })), _data_movielist__WEBPACK_IMPORTED_MODULE_3__.map((element, id) => {
      return __jsx(_movie__WEBPACK_IMPORTED_MODULE_2__["default"], {
        key: id,
        data: element,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      });
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./pages/movie.js":
/*!************************!*\
  !*** ./pages/movie.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _movieDuration__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./movieDuration */ "./pages/movieDuration.js");
/* harmony import */ var _progress__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./progress */ "./pages/progress.js");







var _jsxFileName = "/Users/akgunberk/Desktop/DEV/armut/pages/movie.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }








class Movie extends react__WEBPACK_IMPORTED_MODULE_7__["Component"] {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "buttonChangeColor", color => document.getElementById(this.props.data.id + '_button_bg').style.backgroundColor = color);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "buttonChange", prop => {
      if (prop == 0) {
        this.setState({
          click: 1,
          sign: 'plus'
        });

        const watchlistButton = __jsx("p", {
          className: "text_button",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }, "+ ADD TO WATCHLIST");

        react_dom__WEBPACK_IMPORTED_MODULE_8___default.a.render(watchlistButton, document.getElementById(this.props.data.id + '_button'));
        document.getElementById(this.state.id).classList = 'movie_clicked';
      }

      if (prop == 1) {
        this.setState({
          click: 2,
          sign: 'minus'
        });

        const watchlistButton = __jsx("p", {
          className: "text_button",
          style: {
            letterSpacing: '0px'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        }, "- REMOVE FROM WATCHLIST");

        react_dom__WEBPACK_IMPORTED_MODULE_8___default.a.render(watchlistButton, document.getElementById(this.props.data.id + '_button'));
      } else {
        this.setState({
          click: 1,
          sign: 'plus'
        });

        const watchlistButton = __jsx("p", {
          className: "text_button",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        }, "+ ADD TO WATCHLIST");

        react_dom__WEBPACK_IMPORTED_MODULE_8___default.a.render(watchlistButton, document.getElementById(this.props.data.id + '_button'));
        document.getElementById(this.state.id).classList = 'movie_clicked';
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "handleClick", e => {
      //change button style
      this.buttonChange(this.state.click); //update state

      this.setState(prevState => _objectSpread({}, prevState, {
        visible: !prevState.visible,
        show: true,
        barStyle: {
          width: '212px',
          position: 'absolute',
          float: "right",
          right: '24px',
          top: '14px'
        }
      })); //change stylesheet

      document.getElementById(this.state.id).classList = 'movie_clicked';
    });

    this.state = {
      show: false,
      sign: 'plus',
      click: 0,
      details: null,
      id: this.props.data.id,
      barStyle: {
        width: "326px",
        margin: '35px auto 47px'
      },
      visible: true
    };
    this.handleClick = this.handleClick.bind(this);
    this.buttonChange = this.buttonChange.bind(this);
    this.buttonChangeColor = this.buttonChangeColor.bind(this);
  }

  static async getInitialProps() {
    // fetching movie poster
    const poster = await fetch(this.props.data.posterurl).then(res => res.blob()).then(blob => URL.createObjectURL(blob)).catch(error => {
      error;
    });
    return {
      posterurl: poster
    };
  }

  componentDidMount(props) {
    // fetching details of the movie
    var details = __webpack_require__("./data sync recursive ^\\.\\/.*\\.json$")(`./${this.props.data.id}.json`);

    this.setState({
      details: details
    });
  }

  render() {
    //        <Icon style={{position:'relative',right:'-32px',bottom:'-32px'}}  size='large' circular name={this.state.sign} inverted color='orange'/>
    //tiny plus button changes color and affect addButton on click
    const plusButton = this.state.show == true ? __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Button"], {
      onClick: this.handleClick,
      style: {
        position: 'absolute',
        zIndex: "999",
        backgroundColor: this.state.click == 2 ? '#f24545' : '#ff6000',
        borderRadius: '50%',
        borderColor: 'none',
        bottom: '-22px',
        right: '-22px',
        width: '44px',
        height: '44px'
      },
      circular: true,
      color: "black",
      size: "large",
      icon: this.state.sign,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }) : null; //movie details

    const movieDetails = this.state.show == true ? __jsx("div", {
      className: "content_movie",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }, __jsx("div", {
      id: this.props.data.id + '_content',
      className: "content_movie_storyline",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, " ", this.state.details.storyline, " "), __jsx("hr", {
      className: "content_movie_shapeline",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }), __jsx("div", {
      className: "content_movie_summary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    }, __jsx("div", {
      className: "content_movie_summary_definition",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }, this.state.details.directors.length < 3 ? __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }, " ", __jsx("span", {
      className: "content_movie_summary_header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }, " Director: "), " ", this.state.details.directors.slice(0, 3).join(', '), " ") : __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }, " ", __jsx("span", {
      className: "content_movie_summary_header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }, " Director: "), " ", this.state.details.directors.slice(0, 2).join(', '), " ", __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }, " ", this.state.details.directors.length - 2, " | more credits >>  ")), this.state.details.writers.length < 3 ? __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: this
    }, " ", __jsx("span", {
      style: {
        marginRight: '2px'
      },
      className: "content_movie_summary_header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: this
    }, " Writers: "), " ", this.state.details.writers.slice(0, 3).join(', '), " ") : __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: this
    }, " ", __jsx("span", {
      className: "content_movie_summary_header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: this
    }, " Writers: "), " ", this.state.details.writers.slice(0, 2).join(', '), " ", __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: this
    }, " ", this.state.details.writers.length - 2, " | more credits >>  ")), this.state.details.actors.length <= 3 ? __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      __self: this
    }, " ", __jsx("span", {
      style: {
        marginRight: '18px'
      },
      className: "content_movie_summary_header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      __self: this
    }, " Stars: "), " ", this.state.details.actors.slice(0, 3).join(', '), " ") : __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      },
      __self: this
    }, " ", __jsx("span", {
      className: "content_movie_summary_header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      },
      __self: this
    }, " Stars: "), " ", this.state.details.actors.slice(0, 3).join(', '), " ", __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      },
      __self: this
    }, " | See full cast and crew >>  "))))) : null;
    return __jsx("div", {
      id: this.props.data.id,
      className: "movie",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154
      },
      __self: this
    }, __jsx("div", {
      className: "img_container",
      id: this.props.data.id + "_img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156
      },
      __self: this
    }, __jsx("img", {
      className: "img_poster",
      alt: this.props.data.originalTitle + ' Poster',
      src: this.props.data.posterurl,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: this
    }), plusButton, __jsx("div", {
      className: "gradient",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: this
    }), __jsx("div", {
      className: "gradient_white",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164
      },
      __self: this
    })), __jsx("div", {
      className: "bg_content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168
      },
      __self: this
    }, __jsx("div", {
      className: "name_movie",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170
      },
      __self: this
    }, this.props.data.originalTitle), __jsx("div", {
      className: "info_movie",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172
      },
      __self: this
    }, this.props.data.year, " \xB7 ", this.props.data.genres.join(', '), " \xB7 ", __jsx(_movieDuration__WEBPACK_IMPORTED_MODULE_11__["default"], {
      min: this.props.data.duration,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172
      },
      __self: this
    }), "  "), __jsx("div", {
      className: "rating",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174
      },
      __self: this
    }, `${this.props.data.imdbRating}`.length == 1 ? this.props.data.imdbRating + '.0' : this.props.data.imdbRating, __jsx("span", {
      className: "text-style-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176
      },
      __self: this
    }, "/10")), __jsx(_progress__WEBPACK_IMPORTED_MODULE_12__["default"], {
      id: this.props.data.id + "_rate",
      percent: this.props.data.imdbRating * 10,
      barStyle: this.state.barStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179
      },
      __self: this
    }), movieDetails, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__["Transition"], {
      animation: 'bounce',
      duration: 200,
      visible: this.state.visible,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183
      },
      __self: this
    }, __jsx("button", {
      style: this.state.click == 2 ? {
        backgroundColor: '#f24545'
      } : {
        backgroundColor: '#ff6000'
      },
      className: "bg_button",
      onClick: this.handleClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189
      },
      __self: this
    }, __jsx("p", {
      id: this.props.data.id + "_button",
      className: "text_button",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191
      },
      __self: this
    }, " MOVIE DETAILS ")))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Movie);

/***/ }),

/***/ "./pages/movieDuration.js":
/*!********************************!*\
  !*** ./pages/movieDuration.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/Users/akgunberk/Desktop/DEV/armut/pages/movieDuration.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Duration = props => {
  const prop = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(props.min.slice(2, 5));

  const hour = (prop / 60).toFixed(1)[0];
  const minute = prop - hour * 60;
  return __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, hour, "h ", minute, "min");
};

/* harmony default export */ __webpack_exports__["default"] = (Duration);

/***/ }),

/***/ "./pages/progress.js":
/*!***************************!*\
  !*** ./pages/progress.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/akgunberk/Desktop/DEV/armut/pages/progress.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Rate = props => __jsx("div", {
  className: "ui-progress",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
  style: props.barStyle,
  size: "tiny",
  color: "orange",
  percent: props.percent,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (Rate);

/***/ }),

/***/ "./styles/style.scss":
/*!***************************!*\
  !*** ./styles/style.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/akgunberk/Desktop/DEV/armut/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptors":
/*!*************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptors" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/parse-int":
/*!***********************************************!*\
  !*** external "core-js/library/fn/parse-int" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map