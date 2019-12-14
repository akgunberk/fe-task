webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _movieDuration__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./movieDuration */ "./pages/movieDuration.js");
/* harmony import */ var _progress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./progress */ "./pages/progress.js");






var _jsxFileName = "/Users/akgunberk/Desktop/DEV/armut/pages/movie.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;





var Movie =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Movie, _Component);

  function Movie(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Movie);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Movie).call(this, props));
    _this.state = {
      show: true
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Movie, [{
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
      }, this.props.data.year, " \xB7 ", this.props.data.genres.join(', '), " \xB7 ", __jsx(_movieDuration__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
      }, "/10")), __jsx(_progress__WEBPACK_IMPORTED_MODULE_9__["default"], {
        percent: this.props.data.imdbRating * 100,
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
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Movie);

/***/ })

})
//# sourceMappingURL=index.js.70b842c6984a363a2149.hot-update.js.map