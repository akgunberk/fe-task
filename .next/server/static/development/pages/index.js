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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./data/movielist.json":
/*!*****************************!*\
  !*** ./data/movielist.json ***!
  \*****************************/
/*! exports provided: 0, 1, 2, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":\"0001\",\"year\":\"1994\",\"genres\":[\"Crime\",\"Drama\"],\"duration\":\"PT142M\",\"originalTitle\":\"The Shawshank Redemption\",\"imdbRating\":9.3,\"posterurl\":\"https://images-na.ssl-images-amazon.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SY500_CR0,0,336,500_AL_.jpg\"},{\"id\":\"0002\",\"year\":\"1972\",\"genres\":[\"Crime\",\"Drama\"],\"duration\":\"PT175M\",\"originalTitle\":\"The Godfather\",\"imdbRating\":9.2,\"posterurl\":\"https://images-na.ssl-images-amazon.com/images/M/MV5BZTRmNjQ1ZDYtNDgzMy00OGE0LWE4N2YtNTkzNWQ5ZDhlNGJmL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,352,500_AL_.jpg\"},{\"id\":\"0003\",\"year\":\"2008\",\"genres\":[\"Action\",\"Crime\",\"Drama\"],\"duration\":\"PT152M\",\"originalTitle\":\"The Dark Knight\",\"imdbRating\":5,\"posterurl\":\"https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY500_CR0,0,337,500_AL_.jpg\"}]");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-int */ "core-js/library/fn/parse-int");

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
        id: id,
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _movieDuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movieDuration */ "./pages/movieDuration.js");
/* harmony import */ var _progress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./progress */ "./pages/progress.js");
var _jsxFileName = "/Users/akgunberk/Desktop/DEV/armut/pages/movie.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





class Movie extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    };
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

  render() {
    return __jsx("div", {
      className: "movie",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, __jsx("div", {
      className: "bg_img_10px_blur",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, __jsx("div", {
      className: "img_container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, __jsx("img", {
      className: "img_poster",
      alt: this.props.data.originalTitle + ' Poster',
      src: this.props.data.posterurl,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    })), __jsx("div", {
      className: "gradient",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    })), __jsx("div", {
      className: "bg_content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, __jsx("div", {
      className: "name_movie",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, this.props.data.originalTitle), __jsx("div", {
      className: "info_movie",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, this.props.data.year, " \xB7 ", this.props.data.genres.join(', '), " \xB7 ", __jsx(_movieDuration__WEBPACK_IMPORTED_MODULE_2__["default"], {
      min: this.props.data.duration,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    })), __jsx("div", {
      className: "rating",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, this.props.data.imdbRating, __jsx("span", {
      className: "text-style-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, "/10")), __jsx(_progress__WEBPACK_IMPORTED_MODULE_3__["default"], {
      percent: this.props.data.imdbRating * 10,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }), __jsx("button", {
      className: "bg_button",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, __jsx("p", {
      className: "text_button",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, "MOVIE DETAILS"))));
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
  style: {
    width: '326px',
    margin: '35px auto 47px'
  },
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

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/akgunberk/Desktop/DEV/armut/pages/index.js */"./pages/index.js");


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