module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "http://localhost:3001/assets/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 25);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* unknown exports provided */
/* all exports used */
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/* unknown exports provided */
/* exports used: underscoredToCamelCase, title, preload, createHandler, action, stateConnector, head, IndexLink, Link, PRELOAD_STARTED, PRELOAD_FINISHED, PRELOAD_FAILED */
/*!******************************************!*\
  !*** external "react-isomorphic-render" ***!
  \******************************************/
/***/ (function(module, exports) {

module.exports = require("react-isomorphic-render");

/***/ }),
/* 2 */
/* unknown exports provided */
/* exports used: default */
/*!********************************!*\
  !*** external "react-styling" ***!
  \********************************/
/***/ (function(module, exports) {

module.exports = require("react-styling");

/***/ }),
/* 3 */
/* unknown exports provided */
/* exports used: connect */
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 4 */
/* exports provided: default */
/* exports used: default */
/*!**********************************************!*\
  !*** ./src/react-isomorphic-render-async.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_isomorphic_render__ = __webpack_require__(/*! react-isomorphic-render */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_isomorphic_render___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_isomorphic_render__);


var _default = {
  // When supplying `event` instead of `events`
  // as part of an asynchronous Redux action
  // this will generate `events` from `event`
  // using this function.
  asynchronousActionEventNaming: function asynchronousActionEventNaming(event) {
    return [event + '_PENDING', event + '_SUCCESS', event + '_ERROR'];
  },

  // When using `asynchronousActionHandler`
  // this function will generate a Redux state property name from an event name.
  // E.g. event `GET_USERS_ERROR` => state.`getUsersError`.
  asynchronousActionHandlerStatePropertyNaming: __WEBPACK_IMPORTED_MODULE_0_react_isomorphic_render__["underscoredToCamelCase"]
};
/* harmony default export */ __webpack_exports__["a"] = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/windfantasy/Develop/github-stars/webpack-react-redux-isomorphic-render-example/client/src/react-isomorphic-render-async.js');
}();

;

/***/ }),
/* 5 */
/* exports provided: get_users, add_user, delete_user, connector, default */
/* exports used: get_users, connector, add_user, delete_user, default */
/*!****************************!*\
  !*** ./src/redux/users.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_isomorphic_render__ = __webpack_require__(/*! react-isomorphic-render */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_isomorphic_render___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_isomorphic_render__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__react_isomorphic_render_async__ = __webpack_require__(/*! ../react-isomorphic-render-async */ 4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return get_users; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return add_user; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return delete_user; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return connector; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




var handler = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react_isomorphic_render__["createHandler"])(__WEBPACK_IMPORTED_MODULE_1__react_isomorphic_render_async__["a" /* default */]);

var get_users = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react_isomorphic_render__["action"])({
  namespace: 'USERS',
  event: 'GET_USERS',
  action: function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(http) {
      var user_ids;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return delay(1000);

            case 2:
              _context.next = 4;
              return http.get('/api/example/users');

            case 4:
              user_ids = _context.sent;
              _context.next = 7;
              return Promise.all(user_ids.map(function (id) {
                return http.get('/api/example/users/' + id);
              }));

            case 7:
              return _context.abrupt('return', _context.sent);

            case 8:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }));

    return function action(_x) {
      return _ref.apply(this, arguments);
    };
  }(),
  result: function result(state, _result) {
    return _extends({}, state, {
      users: _result
    });
  }
}, handler);


handler.addStateProperties('users');

var add_user = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react_isomorphic_render__["action"])({
  namespace: 'USERS',
  event: 'ADD_USER',
  action: function () {
    var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(user, http) {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return http.post('/api/example/users', user);

            case 2:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this);
    }));

    return function action(_x2, _x3) {
      return _ref2.apply(this, arguments);
    };
  }()
}, handler);

var delete_user = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react_isomorphic_render__["action"])({
  namespace: 'USERS',
  event: 'DELETE_USER',
  action: function () {
    var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(id, http) {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return http.delete('/api/example/users/' + id);

            case 2:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, _this);
    }));

    return function action(_x4, _x5) {
      return _ref3.apply(this, arguments);
    };
  }()
}, handler);

// // A developer can additionally handle any other custom events
// handler.handle('CUSTOM_EVENT', (state, action) =>
// ({
//   ...state,
//   customProperty: action.result
// }))

// A little helper for Redux `@connect()`
var connector = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react_isomorphic_render__["stateConnector"])(handler);

var initial_state = { users: [] };

// This is the Redux reducer which now
// handles the asynchronous actions defined above.

var _default = handler.reducer(initial_state);

/* harmony default export */ __webpack_exports__["e"] = _default;

// "Sleep" using `Promise`
function delay(delay) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, delay);
  });
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(handler, 'handler', '/Users/windfantasy/Develop/github-stars/webpack-react-redux-isomorphic-render-example/client/src/redux/users.js');

  __REACT_HOT_LOADER__.register(get_users, 'get_users', '/Users/windfantasy/Develop/github-stars/webpack-react-redux-isomorphic-render-example/client/src/redux/users.js');

  __REACT_HOT_LOADER__.register(add_user, 'add_user', '/Users/windfantasy/Develop/github-stars/webpack-react-redux-isomorphic-render-example/client/src/redux/users.js');

  __REACT_HOT_LOADER__.register(delete_user, 'delete_user', '/Users/windfantasy/Develop/github-stars/webpack-react-redux-isomorphic-render-example/client/src/redux/users.js');

  __REACT_HOT_LOADER__.register(connector, 'connector', '/Users/windfantasy/Develop/github-stars/webpack-react-redux-isomorphic-render-example/client/src/redux/users.js');

  __REACT_HOT_LOADER__.register(initial_state, 'initial_state', '/Users/windfantasy/Develop/github-stars/webpack-react-redux-isomorphic-render-example/client/src/redux/users.js');

  __REACT_HOT_LOADER__.register(delay, 'delay', '/Users/windfantasy/Develop/github-stars/webpack-react-redux-isomorphic-render-example/client/src/redux/users.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/windfantasy/Develop/github-stars/webpack-react-redux-isomorphic-render-example/client/src/redux/users.js');
}();

;

/***/ }),
/* 6 */
/* unknown exports provided */
/* exports used: Button, ActivityIndicator */
/*!**************************************!*\
  !*** external "react-responsive-ui" ***!
  \**************************************/
/***/ (function(module, exports) {

module.exports = require("react-responsive-ui");

/***/ }),
/* 7 */
/* exports provided: default */
/* all exports used */
/*!****************************************!*\
  !*** ./src/react-isomorphic-render.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__routes__ = __webpack_require__(/*! ./routes */ 20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reducer__ = __webpack_require__(/*! ./reducer */ 18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__react_isomorphic_render_async__ = __webpack_require__(/*! ./react-isomorphic-render-async */ 4);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





var _default = _extends({
  reducer: __WEBPACK_IMPORTED_MODULE_1__reducer__,
  routes: __WEBPACK_IMPORTED_MODULE_0__routes__["a" /* default */]
}, __WEBPACK_IMPORTED_MODULE_2__react_isomorphic_render_async__["a" /* default */]);

/* harmony default export */ __webpack_exports__["default"] = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/windfantasy/Develop/github-stars/webpack-react-redux-isomorphic-render-example/client/src/react-isomorphic-render.js');
}();

;

/***/ }),
/* 8 */
/* unknown exports provided */
/* all exports used */
/*!********************************!*\
  !*** ./assets/images/icon.png ***!
  \********************************/
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 9 */
/* unknown exports provided */
/* all exports used */
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 10 */
/* unknown exports provided */
/* all exports used */
/*!*************************************************!*\
  !*** external "react-isomorphic-render/server" ***!
  \*************************************************/
/***/ (function(module, exports) {

module.exports = require("react-isomorphic-render/server");

/***/ }),
/* 11 */
/* unknown exports provided */
/* all exports used */
/*!************************************!*\
  !*** external "universal-webpack" ***!
  \************************************/
/***/ (function(module, exports) {

module.exports = require("universal-webpack");

/***/ }),
/* 12 */
/* exports provided: default */
/* exports used: default */
/*!********************************!*\
  !*** ./src/components/menu.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(/*! react-dom */ 22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_isomorphic_render__ = __webpack_require__(/*! react-isomorphic-render */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_isomorphic_render___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_isomorphic_render__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_styling__ = __webpack_require__(/*! react-styling */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_styling___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_styling__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Menu; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n\tmenu\n\t\tmargin-top    : 0\n\t\tmargin-bottom : 0\n\n\t\tlist-style-type : none\n\t\tpadding         : 0\n\n\t\titem\n\t\t\tdisplay: inline-block\n\n\t\t\tlink\n\t\t\t\tdisplay         : inline-block\n\t\t\t\ttext-decoration : none\n'], ['\n\tmenu\n\t\tmargin-top    : 0\n\t\tmargin-bottom : 0\n\n\t\tlist-style-type : none\n\t\tpadding         : 0\n\n\t\titem\n\t\t\tdisplay: inline-block\n\n\t\t\tlink\n\t\t\t\tdisplay         : inline-block\n\t\t\t\ttext-decoration : none\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Menu = function (_Component) {
	_inherits(Menu, _Component);

	function Menu() {
		_classCallCheck(this, Menu);

		return _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).apply(this, arguments));
	}

	_createClass(Menu, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			var markup = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'ul',
				{ style: style.menu, className: 'menu' },
				this.props.items.map(function (item, i) {
					return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'li',
						{ key: i, style: style.menu.item },
						_this2.render_link(item)
					);
				})
			);

			return markup;
		}
	}, {
		key: 'render_link',
		value: function render_link(item) {
			var Link_component = item.link === '/' ? __WEBPACK_IMPORTED_MODULE_2_react_isomorphic_render__["IndexLink"] : __WEBPACK_IMPORTED_MODULE_2_react_isomorphic_render__["Link"];

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				Link_component,
				{
					to: item.link,
					style: style.menu.item.link,
					activeClassName: 'menu-item-selected',
					className: 'menu-item' },
				item.name
			);
		}
	}]);

	return Menu;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);




var style = __WEBPACK_IMPORTED_MODULE_3_react_styling___default()(_templateObject);
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(Menu, 'Menu', '/Users/windfantasy/Develop/github-stars/webpack-react-redux-isomorphic-render-example/client/src/components/menu.js');

	__REACT_HOT_LOADER__.register(style, 'style', '/Users/windfantasy/Develop/github-stars/webpack-react-redux-isomorphic-render-example/client/src/components/menu.js');
}();

;

/***/ }),
/* 13 */
/* exports provided: default */
/* exports used: default */
/*!**************************************!*\
  !*** ./src/components/preloading.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(/*! react-redux */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_responsive_ui__ = __webpack_require__(/*! react-responsive-ui */ 6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_responsive_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_responsive_ui__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Preloading; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Preloading = (_dec = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(function (state) {
  return { pending: state.preload.pending };
}), _dec(_class = function (_Component) {
  _inherits(Preloading, _Component);

  function Preloading() {
    _classCallCheck(this, Preloading);

    return _possibleConstructorReturn(this, (Preloading.__proto__ || Object.getPrototypeOf(Preloading)).apply(this, arguments));
  }

  _createClass(Preloading, [{
    key: 'render',
    value: function render() {
      var pending = this.props.pending;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'preloading ' + (pending ? 'preloading--shown' : '') },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_responsive_ui__["ActivityIndicator"], null)
      );
    }
  }]);

  return Preloading;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class);

;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Preloading, 'Preloading', '/Users/windfantasy/Develop/github-stars/webpack-react-redux-isomorphic-render-example/client/src/components/preloading.js');
}();

;

/***/ }),
/* 14 */
/* exports provided: default */
/* exports used: default */
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(/*! react-redux */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_styling__ = __webpack_require__(/*! react-styling */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_styling___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_styling__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_isomorphic_render__ = __webpack_require__(/*! react-isomorphic-render */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_isomorphic_render___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_isomorphic_render__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n\theader\n\t\ttext-align: center\n\n\timage\n\t\tdisplay: block\n\n\t\tmargin-left  : auto\n\t\tmargin-right : auto\n\n\t\tborder-width : 1px\n\t\tborder-style : solid\n\t\tborder-color : #7f7f7f\n\n\t\tborder-radius : 0.5em\n'], ['\n\theader\n\t\ttext-align: center\n\n\timage\n\t\tdisplay: block\n\n\t\tmargin-left  : auto\n\t\tmargin-right : auto\n\n\t\tborder-width : 1px\n\t\tborder-style : solid\n\t\tborder-color : #7f7f7f\n\n\t\tborder-radius : 0.5em\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Page = function (_Component) {
	_inherits(Page, _Component);

	function Page() {
		_classCallCheck(this, Page);

		return _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).apply(this, arguments));
	}

	_createClass(Page, [{
		key: 'render',
		value: function render() {
			var husky = __webpack_require__(/*! ../../assets/images/husky.jpg */ 21);

			var markup = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'section',
				{ className: 'content' },
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_isomorphic_render__["title"])("Home"),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'h1',
					{ style: style.header },
					'Husky'
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: husky, style: style.image })
			);

			return markup;
		}
	}]);

	return Page;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);




var style = __WEBPACK_IMPORTED_MODULE_2_react_styling___default()(_templateObject);
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(Page, 'Page', '/Users/windfantasy/Develop/github-stars/webpack-react-redux-isomorphic-render-example/client/src/pages/home.js');

	__REACT_HOT_LOADER__.register(style, 'style', '/Users/windfantasy/Develop/github-stars/webpack-react-redux-isomorphic-render-example/client/src/pages/home.js');
}();

;

/***/ }),
/* 15 */
/* exports provided: default */
/* exports used: default */
/*!*****************************!*\
  !*** ./src/pages/layout.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_styling__ = __webpack_require__(/*! react-styling */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_styling___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_styling__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_isomorphic_render__ = __webpack_require__(/*! react-isomorphic-render */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_isomorphic_render___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_isomorphic_render__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_menu__ = __webpack_require__(/*! ../components/menu */ 12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_preloading__ = __webpack_require__(/*! ../components/preloading */ 13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Layout; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var Layout = (_temp = _class = function (_Component) {
	_inherits(Layout, _Component);

	function Layout() {
		_classCallCheck(this, Layout);

		return _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).apply(this, arguments));
	}

	_createClass(Layout, [{
		key: 'render',
		value: function render() {
			var children = this.props.children;

			// Html document metadata

			var title = 'WebApp';
			var description = 'A generic web application boilerplate';

			var meta = [
			// <meta charset="utf-8"/>
			{ charset: 'utf-8' },

			// <meta name="..." content="..."/>
			{ name: 'viewport', content: 'width=device-width, initial-scale=1.0, user-scalable=no' },

			// <meta property="..." content="..."/>
			{ property: 'og:title', content: 'International Bodybuilders Club' }, { property: 'og:description', content: 'Do some push ups' }, { property: 'og:locale', content: 'ru-RU' }];

			var menu_items = [{
				name: 'Home',
				link: '/'
			}, {
				name: 'Users',
				link: '/users'
			}];

			var markup = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'div',
				{ className: 'content' },
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_isomorphic_render__["head"])(title, meta),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_preloading__["a" /* default */], null),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'header',
					null,
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_menu__["a" /* default */], { items: menu_items })
				),
				children,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('footer', null)
			);

			return markup;
		}
	}]);

	return Layout;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]), _class.propTypes = {
	children: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].node.isRequired
}, _temp);

;

var _temp2 = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(Layout, 'Layout', '/Users/windfantasy/Develop/github-stars/webpack-react-redux-isomorphic-render-example/client/src/pages/layout.js');
}();

;

/***/ }),
/* 16 */
/* exports provided: default */
/* exports used: default */
/*!********************************!*\
  !*** ./src/pages/not found.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_isomorphic_render__ = __webpack_require__(/*! react-isomorphic-render */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_isomorphic_render___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_isomorphic_render__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_styling__ = __webpack_require__(/*! react-styling */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_styling___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_styling__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Not_found; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n\theader\n\t\ttext-align: center\n'], ['\n\theader\n\t\ttext-align: center\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Not_found = function (_Component) {
	_inherits(Not_found, _Component);

	function Not_found() {
		_classCallCheck(this, Not_found);

		return _possibleConstructorReturn(this, (Not_found.__proto__ || Object.getPrototypeOf(Not_found)).apply(this, arguments));
	}

	_createClass(Not_found, [{
		key: 'render',
		value: function render() {
			var markup = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'div',
				null,
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_isomorphic_render__["title"])("Page not found"),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'h1',
					{ style: style.header },
					'Page not found'
				)
			);

			return markup;
		}
	}]);

	return Not_found;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);




var style = __WEBPACK_IMPORTED_MODULE_2_react_styling___default()(_templateObject);
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(Not_found, 'Not_found', '/Users/windfantasy/Develop/github-stars/webpack-react-redux-isomorphic-render-example/client/src/pages/not found.js');

	__REACT_HOT_LOADER__.register(style, 'style', '/Users/windfantasy/Develop/github-stars/webpack-react-redux-isomorphic-render-example/client/src/pages/not found.js');
}();

;

/***/ }),
/* 17 */
/* exports provided: default */
/* exports used: default */
/*!****************************!*\
  !*** ./src/pages/users.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(/*! react-redux */ 3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux__ = __webpack_require__(/*! redux */ 24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_responsive_ui__ = __webpack_require__(/*! react-responsive-ui */ 6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_responsive_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_responsive_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_isomorphic_render__ = __webpack_require__(/*! react-isomorphic-render */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_isomorphic_render___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_isomorphic_render__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_styling__ = __webpack_require__(/*! react-styling */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_styling___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_styling__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__redux_users__ = __webpack_require__(/*! ../redux/users */ 5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Users_page; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _dec, _dec2, _class;

var _templateObject = _taggedTemplateLiteral(['\n\tusers\n\t\tmargin-top : 2em\n\n\tlist\n\t\tdisplay         : inline-block\n\t\tlist-style-type : none\n\t\tpadding-left    : 1em\n\n\tbutton\n\t\tmargin-left : 1em\n\n\tid\n\t\tcolor : #9f9f9f\n\n\tname\n\t\tmargin-left : 0.3em\n'], ['\n\tusers\n\t\tmargin-top : 2em\n\n\tlist\n\t\tdisplay         : inline-block\n\t\tlist-style-type : none\n\t\tpadding-left    : 1em\n\n\tbutton\n\t\tmargin-left : 1em\n\n\tid\n\t\tcolor : #9f9f9f\n\n\tname\n\t\tmargin-left : 0.3em\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var Users_page = (_dec = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_react_isomorphic_render__["preload"])(function (_ref) {
	var dispatch = _ref.dispatch,
	    getState = _ref.getState;
	return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__redux_users__["a" /* get_users */])());
}), _dec2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(function (state) {
	return _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__redux_users__["b" /* connector */])(state.users));
}, { get_users: __WEBPACK_IMPORTED_MODULE_6__redux_users__["a" /* get_users */], add_user: __WEBPACK_IMPORTED_MODULE_6__redux_users__["c" /* add_user */], delete_user: __WEBPACK_IMPORTED_MODULE_6__redux_users__["d" /* delete_user */] }), _dec(_class = _dec2(_class = function (_Component) {
	_inherits(Users_page, _Component);

	function Users_page() {
		_classCallCheck(this, Users_page);

		var _this = _possibleConstructorReturn(this, (Users_page.__proto__ || Object.getPrototypeOf(Users_page)).call(this));

		_this.refresh = _this.refresh.bind(_this);
		_this.add_user = _this.add_user.bind(_this);
		_this.delete_user = _this.delete_user.bind(_this);
		return _this;
	}

	_createClass(Users_page, [{
		key: 'render',
		value: function render() {
			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'section',
				null,
				__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_react_isomorphic_render__["title"])("Simple REST API example"),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'div',
					null,
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'p',
						null,
						'This is an example of isomorphic REST API data querying'
					),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'div',
						{ style: style.users },
						this.render_users()
					)
				)
			);
		}
	}, {
		key: 'render_users',
		value: function render_users() {
			var _this2 = this;

			var _props = this.props,
			    users = _props.users,
			    getUsersPending = _props.getUsersPending,
			    getUsersError = _props.getUsersError,
			    addUserPending = _props.addUserPending,
			    addUserError = _props.addUserError,
			    deleteUserPending = _props.deleteUserPending,
			    deleteUserError = _props.deleteUserError;


			if (getUsersPending) {
				return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'div',
					{ style: style.users },
					'Loading users...'
				);
			}

			if (getUsersError) {
				return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'div',
					{ style: style.users },
					'Failed to load the list of users'
				);
			}

			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'div',
				{ style: style.users },
				users.length === 0 ? 'No users' : 'Users',
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_react_responsive_ui__["Button"],
					{
						action: this.add_user,
						style: style.button },
					'Add user'
				),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_3_react_responsive_ui__["Button"],
					{
						action: this.refresh,
						style: style.button },
					'Refresh'
				),
				users.length > 0 && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'div',
					null,
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
						'ul',
						{ style: style.list },
						users.map(function (user) {
							return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
								'li',
								{ key: user.id },
								__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
									'span',
									{ style: style.id },
									user.id
								),
								__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
									'span',
									{ style: style.name },
									user.name
								),
								__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
									__WEBPACK_IMPORTED_MODULE_3_react_responsive_ui__["Button"],
									{
										busy: deleteUserPending,
										action: function action() {
											return _this2.delete_user(user.id);
										},
										style: style.button },
									'delete user'
								)
							);
						})
					)
				)
			);
		}
	}, {
		key: 'refresh',
		value: function refresh() {
			return this.props.get_users();
		}
	}, {
		key: 'add_user',
		value: function () {
			var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
				var name;
				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								name = prompt('Enter user\'s name');

								if (name) {
									_context.next = 3;
									break;
								}

								return _context.abrupt('return');

							case 3:
								_context.next = 5;
								return this.props.add_user({ name: name });

							case 5:
								this.refresh();

							case 6:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function add_user() {
				return _ref2.apply(this, arguments);
			}

			return add_user;
		}()
	}, {
		key: 'delete_user',
		value: function () {
			var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(id) {
				return regeneratorRuntime.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								_context2.next = 2;
								return this.props.delete_user(id);

							case 2:
								this.refresh();

							case 3:
							case 'end':
								return _context2.stop();
						}
					}
				}, _callee2, this);
			}));

			function delete_user(_x) {
				return _ref3.apply(this, arguments);
			}

			return delete_user;
		}()
	}]);

	return Users_page;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])) || _class) || _class);



var style = __WEBPACK_IMPORTED_MODULE_5_react_styling___default()(_templateObject);
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(Users_page, 'Users_page', '/Users/windfantasy/Develop/github-stars/webpack-react-redux-isomorphic-render-example/client/src/pages/users.js');

	__REACT_HOT_LOADER__.register(style, 'style', '/Users/windfantasy/Develop/github-stars/webpack-react-redux-isomorphic-render-example/client/src/pages/users.js');
}();

;

/***/ }),
/* 18 */
/* exports provided: users, preload */
/* all exports used */
/*!************************!*\
  !*** ./src/reducer.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__redux_users__ = __webpack_require__(/*! ./redux/users */ 5);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "users", function() { return __WEBPACK_IMPORTED_MODULE_0__redux_users__["e"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__redux_preload__ = __webpack_require__(/*! ./redux/preload */ 19);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "preload", function() { return __WEBPACK_IMPORTED_MODULE_1__redux_preload__["a"]; });


;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),
/* 19 */
/* exports provided: default */
/* exports used: default */
/*!******************************!*\
  !*** ./src/redux/preload.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_isomorphic_render__ = __webpack_require__(/*! react-isomorphic-render */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_isomorphic_render___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_isomorphic_render__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_0_react_isomorphic_render__["PRELOAD_STARTED"]:
      return _extends({}, state, { pending: true, error: false });
    case __WEBPACK_IMPORTED_MODULE_0_react_isomorphic_render__["PRELOAD_FINISHED"]:
      return _extends({}, state, { pending: false });
    case __WEBPACK_IMPORTED_MODULE_0_react_isomorphic_render__["PRELOAD_FAILED"]:
      return _extends({}, state, { pending: false, error: action.error });
    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["a"] = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/windfantasy/Develop/github-stars/webpack-react-redux-isomorphic-render-example/client/src/redux/preload.js');
}();

;

/***/ }),
/* 20 */
/* exports provided: default */
/* exports used: default */
/*!***********************!*\
  !*** ./src/routes.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(/*! react-router */ 23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_layout__ = __webpack_require__(/*! ./pages/layout */ 15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_not_found__ = __webpack_require__(/*! ./pages/not found */ 16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_users__ = __webpack_require__(/*! ./pages/users */ 17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home__ = __webpack_require__(/*! ./pages/home */ 14);








var routes = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
	__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"],
	{ path: '/', component: __WEBPACK_IMPORTED_MODULE_2__pages_layout__["a" /* default */] },
	__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["IndexRoute"], { component: __WEBPACK_IMPORTED_MODULE_5__pages_home__["a" /* default */] }),
	__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: 'users', component: __WEBPACK_IMPORTED_MODULE_4__pages_users__["a" /* default */] }),
	__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: '*', component: __WEBPACK_IMPORTED_MODULE_3__pages_not_found__["a" /* default */], status: 404 })
);

var _default = routes;
/* harmony default export */ __webpack_exports__["a"] = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(routes, 'routes', '/Users/windfantasy/Develop/github-stars/webpack-react-redux-isomorphic-render-example/client/src/routes.js');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/windfantasy/Develop/github-stars/webpack-react-redux-isomorphic-render-example/client/src/routes.js');
}();

;

/***/ }),
/* 21 */
/* unknown exports provided */
/* all exports used */
/*!*********************************!*\
  !*** ./assets/images/husky.jpg ***!
  \*********************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9059f094ddb49c2b0fa6a254a6ebf2ad.jpg";

/***/ }),
/* 22 */
/* unknown exports provided */
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 23 */
/* unknown exports provided */
/* exports used: Route, IndexRoute */
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 24 */
/* unknown exports provided */
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 25 */
/* unknown exports provided */
/* all exports used */
/*!***********************************!*\
  !*** ./rendering-service/main.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (parameters) {
  // Starts webpage rendering server
  var server = (0, _server2.default)(_reactIsomorphicRender2.default, {
    // HTTP host and port for performing all AJAX requests
    // when rendering pages on server-side.
    // E.g. an AJAX request to `/items/5` will be transformed to
    // `http://${host}:${port}/items/5` during server-side rendering.
    // Specify `secure: true` flag to use `https` protocol instead of `http`.
    application: {
      host: 'localhost',
      port: WEB_SERVICE_PORT
      // secure: true
    },

    // Http Urls to javascripts and (optionally) CSS styles
    // which will be insterted into the <head/> element of the resulting Html webpage
    // (as <script src="..."/> and <link rel="style" href="..."/> respectively)
    //
    // Also a website "favicon".
    //
    assets: function assets(path) {
      // Retrieve asset chunk file names
      // (which are output by client side Webpack build)
      var result = _extends({}, parameters.chunks());

      // Webpack entry point (can be used for code splitting)
      result.entry = 'main';

      // // Clear Webpack require() cache for hot reload in development mode
      // // (this is not necessary)
      // if (process.env.NODE_ENV !== 'production') {
      //   delete require.cache[require.resolve('../assets/images/icon.png')]
      // }

      // Add "favicon"
      result.icon = __webpack_require__(/*! ../assets/images/icon.png */ 8);

      // Return assets
      return result;
    },


    html: {
      // Will be inserted into server rendered webpage <head/>
      // (this `head()` function is optional and is not required)
      // (its gonna work with or without this `head()` parameter)
      head: function head(path) {
        if (process.env.NODE_ENV !== 'production') {
          // `devtools` just tampers with CSS styles a bit.
          // It's not required for operation and can be omitted.
          // It just removes the "flash of unstyled content" in development mode.
          return '<script>' + (0, _universalWebpack.devtools)(_extends({}, parameters, { entry: 'main' })) + '</script>';
        }
      }
    }
  });

  // Start webpage rendering server
  server.listen(PAGE_SERVICE_PORT, function (error) {
    if (error) {
      console.error('Webpage rendering server shutdown due to an error');
      throw error;
    }

    console.log('Webpage server is listening at http://localhost:' + PAGE_SERVICE_PORT);
  });
};

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(/*! react-isomorphic-render/server */ 10);

var _server2 = _interopRequireDefault(_server);

var _universalWebpack = __webpack_require__(/*! universal-webpack */ 11);

var _path = __webpack_require__(/*! path */ 9);

var _path2 = _interopRequireDefault(_path);

var _reactIsomorphicRender = __webpack_require__(/*! ../src/react-isomorphic-render */ 7);

var _reactIsomorphicRender2 = _interopRequireDefault(_reactIsomorphicRender);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WEB_SERVICE_PORT = 3000;
var PAGE_SERVICE_PORT = 3002;

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map