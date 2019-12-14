webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-float.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-float.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-float */ "./node_modules/core-js/library/fn/parse-float.js");

/***/ }),

/***/ "./node_modules/core-js/library/fn/parse-float.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/fn/parse-float.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es6.parse-float */ "./node_modules/core-js/library/modules/es6.parse-float.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/library/modules/_core.js").parseFloat;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_parse-float.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_parse-float.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $parseFloat = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").parseFloat;
var $trim = __webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/library/modules/_string-trim.js").trim;

module.exports = 1 / $parseFloat(__webpack_require__(/*! ./_string-ws */ "./node_modules/core-js/library/modules/_string-ws.js") + '-0') !== -Infinity ? function parseFloat(str) {
  var string = $trim(String(str), 3);
  var result = $parseFloat(string);
  return result === 0 && string.charAt(0) == '-' ? -0 : result;
} : $parseFloat;


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.parse-float.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.parse-float.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var $parseFloat = __webpack_require__(/*! ./_parse-float */ "./node_modules/core-js/library/modules/_parse-float.js");
// 18.2.4 parseFloat(string)
$export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });


/***/ }),

/***/ "./pages/movie.js":
/*!************************!*\
  !*** ./pages/movie.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-float */ "./node_modules/@babel/runtime-corejs2/core-js/parse-float.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _movieDuration__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./movieDuration */ "./pages/movieDuration.js");
/* harmony import */ var _progress__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./progress */ "./pages/progress.js");







var _jsxFileName = "/Users/akgunberk/Desktop/DEV/armut/pages/movie.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;





var Movie =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Movie, _Component);

  function Movie(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Movie);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Movie).call(this, props));
    _this.state = {
      show: true
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Movie, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "movie",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, __jsx("div", {
        className: "bg_color_10px_blur",
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
          lineNumber: 52
        },
        __self: this
      }, __jsx("div", {
        className: "name_movie",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, this.props.data.originalTitle), __jsx("div", {
        className: "info_movie",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, this.props.data.year, " \xB7 ", this.props.data.genres.join(', '), " \xB7 ", __jsx(_movieDuration__WEBPACK_IMPORTED_MODULE_9__["default"], {
        min: this.props.data.duration,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      })), __jsx("div", {
        className: "rating",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, this.props.data.imdbRating, __jsx("span", {
        className: "text-style-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, "/10")), __jsx(_progress__WEBPACK_IMPORTED_MODULE_10__["default"], {
        percent: _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_1___default()(this.props.data.imdbRating) / 10,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }), __jsx("button", {
        className: "bg_button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, __jsx("p", {
        className: "text_button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "Movie Details"))));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps() {
      var poster;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getInitialProps$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch(this.props.data.posterurl).then(function (res) {
                return res.blob();
              }).then(function (blob) {
                return URL.createObjectURL(blob);
              })["catch"](function (error) {
                error;
              }));

            case 2:
              poster = _context.sent;
              return _context.abrupt("return", {
                posterurl: poster
              });

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
  }]);

  return Movie;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Movie);

/***/ })

})
//# sourceMappingURL=index.js.774e54727edd2085288a.hot-update.js.map