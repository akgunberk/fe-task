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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+FdX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6BQ9");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Duration = props => {
  const prop = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(props.min.slice(2, 5));

  const hour = (prop / 60).toFixed(1)[0];
  const minute = prop - hour * 60;
  return __jsx("span", null, hour, "h ", minute, "min");
};

/* harmony default export */ __webpack_exports__["default"] = (Duration);

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("4C77");


/***/ }),

/***/ "2Eek":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ltjX");

/***/ }),

/***/ "4C77":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __webpack_require__("hfKm");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js
var define_properties = __webpack_require__("2Eek");
var define_properties_default = /*#__PURE__*/__webpack_require__.n(define_properties);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js
var get_own_property_descriptors = __webpack_require__("XoMD");
var get_own_property_descriptors_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptors);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js
var get_own_property_descriptor = __webpack_require__("Jo+v");
var get_own_property_descriptor_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptor);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js
var get_own_property_symbols = __webpack_require__("4mXO");
var get_own_property_symbols_default = /*#__PURE__*/__webpack_require__.n(get_own_property_symbols);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var object_keys = __webpack_require__("pLtp");
var keys_default = /*#__PURE__*/__webpack_require__.n(object_keys);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js

function _defineProperty(obj, key, value) {
  if (key in obj) {
    define_property_default()(obj, key, {
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
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__("faye");
var external_react_dom_default = /*#__PURE__*/__webpack_require__.n(external_react_dom_);

// EXTERNAL MODULE: external "isomorphic-fetch"
var external_isomorphic_fetch_ = __webpack_require__("W+0S");

// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__("FfxO");

// EXTERNAL MODULE: ./pages/movieDuration.js
var movieDuration = __webpack_require__("+FdX");

// EXTERNAL MODULE: ./pages/progress.js
var progress = __webpack_require__("XJ3o");

// CONCATENATED MODULE: ./pages/movie.js







var __jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = keys_default()(object); if (get_own_property_symbols_default.a) { var symbols = get_own_property_symbols_default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return get_own_property_descriptor_default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (get_own_property_descriptors_default.a) { define_properties_default()(target, get_own_property_descriptors_default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { define_property_default()(target, key, get_own_property_descriptor_default()(source, key)); }); } } return target; }








class movie_Movie extends external_react_["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "buttonChangeColor", color => document.getElementById(this.props.data.id + '_button_bg').style.backgroundColor = color);

    _defineProperty(this, "buttonChange", prop => {
      if (prop == 0) {
        this.setState({
          click: 1,
          sign: 'plus'
        });

        const watchlistButton = __jsx("p", {
          className: "text_button"
        }, "+ ADD TO WATCHLIST");

        external_react_dom_default.a.render(watchlistButton, document.getElementById(this.props.data.id + '_button'));
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
          }
        }, "- REMOVE FROM WATCHLIST");

        external_react_dom_default.a.render(watchlistButton, document.getElementById(this.props.data.id + '_button'));
      } else {
        this.setState({
          click: 1,
          sign: 'plus'
        });

        const watchlistButton = __jsx("p", {
          className: "text_button"
        }, "+ ADD TO WATCHLIST");

        external_react_dom_default.a.render(watchlistButton, document.getElementById(this.props.data.id + '_button'));
        document.getElementById(this.state.id).classList = 'movie_clicked';
      }
    });

    _defineProperty(this, "handleClick", e => {
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
    var details = __webpack_require__("TUgT")(`./${this.props.data.id}.json`);

    this.setState({
      details: details
    });
  }

  render() {
    //        <Icon style={{position:'relative',right:'-32px',bottom:'-32px'}}  size='large' circular name={this.state.sign} inverted color='orange'/>
    //tiny plus button changes color and affect addButton on click
    const plusButton = this.state.show == true ? __jsx(external_semantic_ui_react_["Button"], {
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
      icon: this.state.sign
    }) : null; //movie details

    const movieDetails = this.state.show == true ? __jsx("div", {
      className: "content_movie"
    }, __jsx("div", {
      id: this.props.data.id + '_content',
      className: "content_movie_storyline"
    }, " ", this.state.details.storyline, " "), __jsx("hr", {
      className: "content_movie_shapeline"
    }), __jsx("div", {
      className: "content_movie_summary"
    }, __jsx("div", {
      className: "content_movie_summary_definition"
    }, this.state.details.directors.length < 3 ? __jsx("p", null, " ", __jsx("span", {
      className: "content_movie_summary_header"
    }, " Director: "), " ", this.state.details.directors.slice(0, 3).join(', '), " ") : __jsx("p", null, " ", __jsx("span", {
      className: "content_movie_summary_header"
    }, " Director: "), " ", this.state.details.directors.slice(0, 2).join(', '), " ", __jsx("span", null, " ", this.state.details.directors.length - 2, " | more credits >>  ")), this.state.details.writers.length < 3 ? __jsx("p", null, " ", __jsx("span", {
      style: {
        marginRight: '2px'
      },
      className: "content_movie_summary_header"
    }, " Writers: "), " ", this.state.details.writers.slice(0, 3).join(', '), " ") : __jsx("p", null, " ", __jsx("span", {
      className: "content_movie_summary_header"
    }, " Writers: "), " ", this.state.details.writers.slice(0, 2).join(', '), " ", __jsx("span", null, " ", this.state.details.writers.length - 2, " | more credits >>  ")), this.state.details.actors.length <= 3 ? __jsx("p", null, " ", __jsx("span", {
      style: {
        marginRight: '18px'
      },
      className: "content_movie_summary_header"
    }, " Stars: "), " ", this.state.details.actors.slice(0, 3).join(', '), " ") : __jsx("p", null, " ", __jsx("span", {
      className: "content_movie_summary_header"
    }, " Stars: "), " ", this.state.details.actors.slice(0, 3).join(', '), " ", __jsx("span", null, " | See full cast and crew >>  "))))) : null;
    return __jsx("div", {
      id: this.props.data.id,
      className: "movie"
    }, __jsx("div", {
      className: "img_container",
      id: this.props.data.id + "_img"
    }, __jsx("img", {
      className: "img_poster",
      alt: this.props.data.originalTitle + ' Poster',
      src: this.props.data.posterurl
    }), plusButton, __jsx("div", {
      className: "gradient"
    }), __jsx("div", {
      className: "gradient_white"
    })), __jsx("div", {
      className: "bg_content"
    }, __jsx("div", {
      className: "name_movie"
    }, this.props.data.originalTitle), __jsx("div", {
      className: "info_movie"
    }, this.props.data.year, " \xB7 ", this.props.data.genres.join(', '), " \xB7 ", __jsx(movieDuration["default"], {
      min: this.props.data.duration
    }), "  "), __jsx("div", {
      className: "rating"
    }, `${this.props.data.imdbRating}`.length == 1 ? this.props.data.imdbRating + '.0' : this.props.data.imdbRating, __jsx("span", {
      className: "text-style-1"
    }, "/10")), __jsx(progress["default"], {
      id: this.props.data.id + "_rate",
      percent: this.props.data.imdbRating * 10,
      barStyle: this.state.barStyle
    }), movieDetails, __jsx(external_semantic_ui_react_["Transition"], {
      animation: 'bounce',
      duration: 200,
      visible: this.state.visible
    }, __jsx("button", {
      style: this.state.click == 2 ? {
        backgroundColor: '#f24545'
      } : {
        backgroundColor: '#ff6000'
      },
      className: "bg_button",
      onClick: this.handleClick
    }, __jsx("p", {
      id: this.props.data.id + "_button",
      className: "text_button"
    }, " MOVIE DETAILS ")))));
  }

}

/* harmony default export */ var movie = __webpack_exports__["default"] = (movie_Movie);

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "6BQ9":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("wa65");

/***/ }),

/***/ "FfxO":
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ "JZUw":
/***/ (function(module) {

module.exports = JSON.parse("{\"id\":\"0003\",\"year\":\"2008\",\"genres\":[\"Action\",\"Crime\",\"Drama\"],\"duration\":\"PT152M\",\"originalTitle\":\"The Dark Knight\",\"imdbRating\":5,\"directors\":[\"Christopher Nolan\"],\"writers\":[\"Jonathan Nolan\",\"Christopher Nolan\"],\"storyline\":\"Set within a year after the events of Batman Begins, Batman, Lieutenant James Gordon, and new district attorney Harvey Dent successfully begin to round up the criminals that plague Gotham City until a mysterious and sadistic criminal mastermind known only as the Joker appears in Gotham, creating a new wave of chaos. Batman's struggle against the Joker becomes deeply personal, forcing him to \\\"confront everything he believes\\\" and improve his technology to stop him. A love triangle develops between Bruce Wayne, Dent and Rachel Dawes.                Written by\\nLeon Lombardi\",\"actors\":[\"Christian Bale\",\"Heath Ledger\",\"Aaron Eckhart\",\"Berk Akgün\"],\"posterurl\":\"https://m.media-amazon.com/images/I/91zBlQ1iqoL._AC_UY436_FMwebp_QL65_.jpg\"}");

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "QTVn":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "TUgT":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./0001.json": "t7PK",
	"./0002.json": "enLV",
	"./0003.json": "JZUw",
	"./movielist.json": "rM5h"
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
webpackContext.id = "TUgT";

/***/ }),

/***/ "W+0S":
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "XJ3o":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("FfxO");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Rate = props => __jsx("div", {
  className: "ui-progress"
}, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
  style: props.barStyle,
  size: "tiny",
  color: "orange",
  percent: props.percent
}));

/* harmony default export */ __webpack_exports__["default"] = (Rate);

/***/ }),

/***/ "XoMD":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("QTVn");

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "enLV":
/***/ (function(module) {

module.exports = JSON.parse("{\"id\":\"0002\",\"year\":\"1972\",\"genres\":[\"Crime\",\"Drama\"],\"duration\":\"PT175M\",\"originalTitle\":\"The Godfather\",\"imdbRating\":9.2,\"actors\":[\"Marlon Brando\",\"Al Pacino\",\"James Caan\"],\"writers\":[\"Mario Puzo\",\"Francis Ford Coppola\"],\"directors\":[\"Francis Ford Coppola\"],\"storyline\":\"When the aging head of a famous crime family decides to transfer his position to one of his subalterns, a series of unfortunate events start happening to the family, and a war begins between all the well-known families leading to insolence, deportation, murder and revenge, and ends with the favorable successor being finally chosen.                Written by\\nJ. S. Golden\",\"posterurl\":\"https://m.media-amazon.com/images/I/71UJP5Nw3GL._AC_UY436_FMwebp_QL65_.jpg\"}");

/***/ }),

/***/ "faye":
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "ltjX":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "rM5h":
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":\"0001\",\"year\":\"1994\",\"genres\":[\"Crime\",\"Drama\"],\"duration\":\"PT142M\",\"originalTitle\":\"The Shawshank Redemption\",\"imdbRating\":9.3,\"posterurl\":\"https://m.media-amazon.com/images/I/A19QAw-6IhL._AC_UY436_FMwebp_QL65_.jpg\"},{\"id\":\"0002\",\"year\":\"1972\",\"genres\":[\"Crime\",\"Drama\"],\"duration\":\"PT175M\",\"originalTitle\":\"The Godfather\",\"imdbRating\":9.2,\"posterurl\":\"https://m.media-amazon.com/images/I/71UJP5Nw3GL._AC_UY436_FMwebp_QL65_.jpg\"},{\"id\":\"0003\",\"year\":\"2008\",\"genres\":[\"Action\",\"Crime\",\"Drama\"],\"duration\":\"PT152M\",\"originalTitle\":\"The Dark Knight\",\"imdbRating\":5,\"posterurl\":\"https://m.media-amazon.com/images/I/91zBlQ1iqoL._AC_UY436_FMwebp_QL65_.jpg\"}]");

/***/ }),

/***/ "t7PK":
/***/ (function(module) {

module.exports = JSON.parse("{\"id\":\"0001\",\"year\":\"1994\",\"genres\":[\"Crime\",\"Drama\"],\"duration\":\"PT142M\",\"originalTitle\":\"The Shawshank Redemption\",\"imdbRating\":9.3,\"actors\":[\"Tim Robbins\",\"Morgan Freeman\",\"Bob Gunton\"],\"writers\":[\"Stephen King\"],\"directors\":[\"Frank Darabont\"],\"storyline\":\"Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit. The film portrays the man's unique way of dealing with his new, torturous life; along the way he befriends a number of fellow prisoners, most notably a wise long-term inmate named Red.\",\"posterurl\":\"https://m.media-amazon.com/images/I/A19QAw-6IhL._AC_UY436_FMwebp_QL65_.jpg\"}");

/***/ }),

/***/ "wa65":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ })

/******/ });