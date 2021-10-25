/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([267,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(0));
var styled_components_1 = __importStar(__webpack_require__(7));
var Theme_1 = __webpack_require__(8);
var StyledButton = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: ", ";\n  border: none;\n  color: ", ";\n  cursor: pointer;\n  font-size: ", ";\n  font-weight: ", ";\n  padding: ", ";\n  &:hover {\n    background: ", ";\n    border: none;\n    color: ", ";\n  }\n"], ["\n  background: ", ";\n  border: none;\n  color: ",
    ";\n  cursor: pointer;\n  font-size: ", ";\n  font-weight: ", ";\n  padding: ", ";\n  &:hover {\n    background: ", ";\n    border: none;\n    color: ",
    ";\n  }\n"])), function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return theme.color.background[variant].medium;
}, function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return (theme.color.text[variant === Theme_1.VARIANT.BASE ? 'dark' : 'light']);
}, Theme_1.fromTheme('font', 'body', 'size'), Theme_1.fromTheme('font', 'body', 'weight'), function (_a) {
    var theme = _a.theme;
    return (theme.ws.xsmall + " " + theme.ws.small);
}, function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return theme.color.background[variant].dark;
}, function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return (theme.color.text[variant === Theme_1.VARIANT.BASE ? 'dark' : 'light']);
});
StyledButton.defaultProps = {
    variant: Theme_1.VARIANT.BASE,
};
var Button = function (props) {
    var id = props.id, children = props.children, onClick = props.onClick, disabled = props.disabled, variant = props.variant, forwardRef = props.forwardRef, alt = props.alt, className = props.className;
    var theme = react_1.useContext(styled_components_1.ThemeContext);
    return (react_1.default.createElement(StyledButton, { id: id, onClick: onClick, theme: theme, disabled: disabled, variant: variant, ref: forwardRef, "aria-label": alt, className: className }, children));
};
Button.defaultProps = {
    children: '',
    className: null,
};
exports.default = Button;
var templateObject_1;


/***/ }),

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DropdownList_1 = __webpack_require__(150);
Object.defineProperty(exports, "DropdownList", { enumerable: true, get: function () { return DropdownList_1.default; } });
var DropdownListItem_1 = __webpack_require__(151);
Object.defineProperty(exports, "DropdownListItem", { enumerable: true, get: function () { return DropdownListItem_1.default; } });
var List_1 = __webpack_require__(152);
Object.defineProperty(exports, "List", { enumerable: true, get: function () { return List_1.default; } });
var ListItem_1 = __webpack_require__(153);
Object.defineProperty(exports, "ListItem", { enumerable: true, get: function () { return ListItem_1.default; } });


/***/ }),

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VALIGN = exports.ALIGN = void 0;
var styled_components_1 = __importDefault(__webpack_require__(7));
var Theme_1 = __webpack_require__(8);
var ALIGN;
(function (ALIGN) {
    ALIGN["LEFT"] = "left";
    ALIGN["RIGHT"] = "right";
    ALIGN["CENTER"] = "center";
})(ALIGN = exports.ALIGN || (exports.ALIGN = {}));
var VALIGN;
(function (VALIGN) {
    VALIGN["TOP"] = "top";
    VALIGN["BOTTOM"] = "bottom";
    VALIGN["CENTER"] = "center";
})(VALIGN = exports.VALIGN || (exports.VALIGN = {}));
var StyledCell = styled_components_1.default.td(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border-left: ", ";\n  border-right: ", ";\n  font-size:  ", ";\n  font-weight: ", ";\n  color: ", ";\n  padding: ", ";\n  text-align: ", ";\n  vertical-align: ", ";\n  background-color: ", ";\n"], ["\n  border-left: ", ";\n  border-right: ", ";\n  font-size:  ", ";\n  font-weight: ",
    ";\n  color: ",
    ";\n  padding: ", ";\n  text-align: ", ";\n  vertical-align: ", ";\n  background-color: ", ";\n"])), Theme_1.fromTheme('border', 'light'), Theme_1.fromTheme('border', 'light'), Theme_1.fromTheme('font', 'data', 'size'), function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return (theme.font[[Theme_1.TEXT_VARIANT.NEGATIVE, Theme_1.TEXT_VARIANT.MEDIUM]
        .includes(variant)
        ? 'bold' : 'data'].weight);
}, function (_a) {
    var theme = _a.theme, variant = _a.variant;
    if (variant === Theme_1.TEXT_VARIANT.NEGATIVE) {
        return theme.color.text.negative;
    }
    if (variant === Theme_1.TEXT_VARIANT.MEDIUM) {
        return theme.color.text.medium;
    }
    return theme.color.text.base;
}, Theme_1.fromTheme('ws', 'xsmall'), function (_a) {
    var alignment = _a.alignment;
    return alignment;
}, function (_a) {
    var verticalAlignment = _a.verticalAlignment;
    return verticalAlignment;
}, function (_a) {
    var backgroundColor = _a.backgroundColor;
    return backgroundColor;
});
StyledCell.defaultProps = {
    alignment: ALIGN.LEFT,
    verticalAlignment: VALIGN.CENTER,
    variant: Theme_1.TEXT_VARIANT.BASE,
};
var TableCell = StyledCell;
exports.default = TableCell;
var templateObject_1;


/***/ }),

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledTextInput = void 0;
var react_1 = __importStar(__webpack_require__(0));
var styled_components_1 = __importStar(__webpack_require__(7));
var Theme_1 = __webpack_require__(8);
var ValidationErrorMessage_1 = __importDefault(__webpack_require__(52));
var InputLabel_1 = __importStar(__webpack_require__(38));
exports.StyledTextInput = styled_components_1.default.input(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border: ", ";\n  width: 100%;\n  padding: ", ";\n  padding-right: ", ";\n  grid-area: i;\n"], ["\n  border: ", ";\n  width: 100%;\n  padding: ", ";\n  padding-right: ", ";\n  grid-area: i;\n"])), Theme_1.fromTheme('border', 'hairline'), Theme_1.fromTheme('ws', 'xsmall'), Theme_1.fromTheme('ws', 'zero'));
var TextInput = function (props) {
    var id = props.id, onChange = props.onChange, onClick = props.onClick, type = props.type, name = props.name, placeholder = props.placeholder, value = props.value, errorMessage = props.errorMessage, disabled = props.disabled, label = props.label, labelPosition = props.labelPosition, isLabelVisible = props.isLabelVisible, isRequired = props.isRequired, forwardRef = props.forwardRef, hideError = props.hideError;
    var theme = react_1.useContext(styled_components_1.ThemeContext);
    return (react_1.default.createElement(InputLabel_1.default, { htmlFor: id, label: label, labelPosition: labelPosition, isLabelVisible: isLabelVisible, isRequired: isRequired, hideError: hideError },
        react_1.default.createElement(exports.StyledTextInput, { onChange: onChange, onClick: onClick, id: id, name: name, placeholder: placeholder, type: type, theme: theme, value: value, disabled: disabled, label: label, "aria-errormessage": id + "-error", "aria-invalid": errorMessage ? true : null, "aria-required": isRequired, required: isRequired, ref: forwardRef }),
        errorMessage && !hideError
            && (react_1.default.createElement(ValidationErrorMessage_1.default, { id: id + "-error" }, errorMessage))));
};
TextInput.defaultProps = {
    type: 'text',
    disabled: false,
    labelPosition: InputLabel_1.POSITION.LEFT,
    isLabelVisible: true,
    hideError: false,
};
exports.default = TextInput;
var templateObject_1;


/***/ }),

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.hideFromDisplay = exports.ARIA_LIVE_VARIANT = void 0;
var ARIA_LIVE_VARIANT;
(function (ARIA_LIVE_VARIANT) {
    ARIA_LIVE_VARIANT["OFF"] = "off";
    ARIA_LIVE_VARIANT["ASSERTIVE"] = "assertive";
    ARIA_LIVE_VARIANT["POLITE"] = "polite";
})(ARIA_LIVE_VARIANT = exports.ARIA_LIVE_VARIANT || (exports.ARIA_LIVE_VARIANT = {}));
exports.hideFromDisplay = "\n  position: absolute;\n  overflow: hidden;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  width: 1px;\n  margin: -1px;\n  padding: 0;\n  border: 0;\n";


/***/ }),

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SPINNER_TEXT = void 0;
var react_1 = __importStar(__webpack_require__(0));
var styled_components_1 = __importStar(__webpack_require__(7));
var Theme_1 = __webpack_require__(8);
var SPINNER_TEXT;
(function (SPINNER_TEXT) {
    SPINNER_TEXT["LIGHT"] = "light";
    SPINNER_TEXT["DARK"] = "dark";
})(SPINNER_TEXT = exports.SPINNER_TEXT || (exports.SPINNER_TEXT = {}));
var StyledLoadSpinnerText = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: transparent;\n  color: ", "; \n  font-family: ", ";\n  font-weight: ", ";\n  font-size: ", ";\n  margin-top: ", ";\n"], ["\n  background: transparent;\n  color: ", "; \n  font-family: ", ";\n  font-weight: ", ";\n  font-size: ", ";\n  margin-top: ", ";\n"])), function (_a) {
    var color = _a.color, theme = _a.theme;
    return theme.color.text[color];
}, Theme_1.fromTheme('font', 'heading', 'family'), Theme_1.fromTheme('font', 'heading', 'weight'), Theme_1.fromTheme('font', 'heading', 'size'), Theme_1.fromTheme('ws', 'large'));
var LoadSpinnerText = function (props) {
    var children = props.children, color = props.color;
    var theme = react_1.useContext(styled_components_1.ThemeContext);
    return (react_1.default.createElement(StyledLoadSpinnerText, { theme: theme, color: color }, children));
};
LoadSpinnerText.defaultProps = {
    color: SPINNER_TEXT.DARK,
};
exports.default = LoadSpinnerText;
var templateObject_1;


/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __webpack_require__(7);
__webpack_require__(408);
__webpack_require__(430);
var utils_1 = __webpack_require__(243);
exports.default = styled_components_1.createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n   html, body {\n    background: ", ";\n    box-sizing: border-box;\n    color: ", " ;\n    font-family: ", ";\n    font-size: ", ";\n    font-weight: ", ";\n    height: 100%;\n    margin: 0;\n    padding: 0;\n    width: 100%;\n }\n*, *:before, *:after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n"], ["\n   html, body {\n    background: ", ";\n    box-sizing: border-box;\n    color: ", " ;\n    font-family: ", ";\n    font-size: ", ";\n    font-weight: ", ";\n    height: 100%;\n    margin: 0;\n    padding: 0;\n    width: 100%;\n }\n*, *:before, *:after {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n"])), utils_1.fromTheme('color', 'background', 'light'), utils_1.fromTheme('color', 'text', 'dark'), utils_1.fromTheme('font', 'base', 'family'), utils_1.fromTheme('font', 'base', 'size'), utils_1.fromTheme('font', 'base', 'weight'));
var templateObject_1;


/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(0));
var styled_components_1 = __importStar(__webpack_require__(7));
var Theme_1 = __webpack_require__(8);
var StyledBorderlessButton = styled_components_1.default.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: transparent;\n  border: none;\n  color: ", ";\n  cursor: pointer;\n  font-size: ", ";\n  font-weight: ", ";\n  padding: ", ";\n  &:hover {\n    background: transparent;\n    color: ", ";\n  }\n"], ["\n  background: transparent;\n  border: none;\n  color: ", ";\n  cursor: pointer;\n  font-size: ", ";\n  font-weight: ", ";\n  padding: ", ";\n  &:hover {\n    background: transparent;\n    color: ", ";\n  }\n"])), function (_a) {
    var variant = _a.variant, theme = _a.theme;
    return theme.color.background[variant].medium;
}, Theme_1.fromTheme('font', 'body', 'size'), Theme_1.fromTheme('font', 'body', 'weight'), function (_a) {
    var theme = _a.theme;
    return (theme.ws.xsmall + " " + theme.ws.small);
}, function (_a) {
    var variant = _a.variant, theme = _a.theme;
    return theme.color.background[variant].dark;
});
StyledBorderlessButton.defaultProps = {
    variant: Theme_1.VARIANT.BASE,
};
var BorderlessButton = function (props) {
    var id = props.id, onClick = props.onClick, children = props.children, disabled = props.disabled, variant = props.variant, forwardRef = props.forwardRef, alt = props.alt;
    var theme = react_1.useContext(styled_components_1.ThemeContext);
    return (react_1.default.createElement(StyledBorderlessButton, { id: id, onClick: onClick, theme: theme, disabled: disabled, variant: variant, ref: forwardRef, "aria-label": alt }, children));
};
exports.default = BorderlessButton;
var templateObject_1;


/***/ }),

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Button_1 = __webpack_require__(107);
Object.defineProperty(exports, "Button", { enumerable: true, get: function () { return Button_1.default; } });
var BorderlessButton_1 = __webpack_require__(147);
Object.defineProperty(exports, "BorderlessButton", { enumerable: true, get: function () { return BorderlessButton_1.default; } });
var ButtonDropdownMenu_1 = __webpack_require__(149);
Object.defineProperty(exports, "ButtonDropdownMenu", { enumerable: true, get: function () { return ButtonDropdownMenu_1.default; } });
var ButtonDropdownMenuItem_1 = __webpack_require__(154);
Object.defineProperty(exports, "ButtonDropdownMenuItem", { enumerable: true, get: function () { return ButtonDropdownMenuItem_1.default; } });


/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(0));
var Theme_1 = __webpack_require__(8);
var Button_1 = __importDefault(__webpack_require__(107));
var Lists_1 = __webpack_require__(108);
var ButtonDropdownMenu = function (props) {
    var id = props.id, label = props.label, forwardRef = props.forwardRef, alt = props.alt, variant = props.variant, children = props.children;
    var _a = react_1.useState(false), isMenuVisible = _a[0], setMenuVisible = _a[1];
    var handleDocumentBodyClick = react_1.useCallback(function () {
        setMenuVisible(false);
    }, [setMenuVisible]);
    react_1.useEffect(function () {
        if (isMenuVisible) {
            document.addEventListener('click', handleDocumentBodyClick);
        }
        else {
            document.removeEventListener('click', handleDocumentBodyClick);
        }
    }, [isMenuVisible, handleDocumentBodyClick]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Button_1.default, { id: id, onClick: function () {
                setMenuVisible(!isMenuVisible);
            }, forwardRef: forwardRef, alt: alt, variant: variant }, label),
        isMenuVisible && (react_1.default.createElement(Lists_1.DropdownList, null, children))));
};
ButtonDropdownMenu.defaultProps = {
    variant: Theme_1.VARIANT.BASE,
};
exports.default = ButtonDropdownMenu;


/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(148), exports);
__exportStar(__webpack_require__(889), exports);
__exportStar(__webpack_require__(890), exports);
__exportStar(__webpack_require__(8), exports);
__exportStar(__webpack_require__(891), exports);
__exportStar(__webpack_require__(892), exports);
__exportStar(__webpack_require__(893), exports);
__exportStar(__webpack_require__(174), exports);
__exportStar(__webpack_require__(897), exports);
__exportStar(__webpack_require__(898), exports);
__exportStar(__webpack_require__(108), exports);
__exportStar(__webpack_require__(900), exports);
__exportStar(__webpack_require__(111), exports);


/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(__webpack_require__(7));
var Theme_1 = __webpack_require__(8);
var DropdownList = styled_components_1.default.ul(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: ", ";\n  border: ", ";\n  min-height: 3em;\n  min-width: 6em;\n  position: absolute;\n  transform: translate3d(0em, 0.1em, 0em);\n  z-index: 100;\n  list-style-type: none;\n"], ["\n  background: ", ";\n  border: ", ";\n  min-height: 3em;\n  min-width: 6em;\n  position: absolute;\n  transform: translate3d(0em, 0.1em, 0em);\n  z-index: 100;\n  list-style-type: none;\n"])), Theme_1.fromTheme('color', 'background', 'light'), Theme_1.fromTheme('border', 'hairline'));
exports.default = DropdownList;
var templateObject_1;


/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(__webpack_require__(7));
var Theme_1 = __webpack_require__(8);
var DropdownListItem = styled_components_1.default.li(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: ", ";\n"], ["\n  padding: ", ";\n"])), Theme_1.fromTheme('ws', 'small'));
exports.default = DropdownListItem;
var templateObject_1;


/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(__webpack_require__(7));
var Theme_1 = __webpack_require__(8);
var List = styled_components_1.default.ol.attrs(function (_a) {
    var ordered = _a.ordered;
    return ({
        as: ordered ? 'ol' : 'ul',
    });
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  list-style: none;\n  > li {\n    border-top: ", ";\n    &:first-child {\n      border-top: none;\n    }\n  }\n"], ["\n  list-style: none;\n  > li {\n    border-top: ", ";\n    &:first-child {\n      border-top: none;\n    }\n  }\n"])), Theme_1.fromTheme('border', 'hairline'));
List.defaultProps = {
    ordered: false,
};
exports.default = List;
var templateObject_1;


/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(__webpack_require__(7));
var Theme_1 = __webpack_require__(8);
var ListItem = styled_components_1.default.li(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: ", " 0px;\n"], ["\n  padding: ", " 0px;\n"])), Theme_1.fromTheme('ws', 'small'));
exports.default = ListItem;
var templateObject_1;


/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(0));
var styled_components_1 = __importDefault(__webpack_require__(7));
var Theme_1 = __webpack_require__(8);
var Lists_1 = __webpack_require__(108);
var StyledMenuListItem = styled_components_1.default(Lists_1.DropdownListItem)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  &:hover {\n    background: ", ";\n    cursor: pointer;\n  }\n"], ["\n  &:hover {\n    background: ", ";\n    cursor: pointer;\n  }\n"])), Theme_1.fromTheme('color', 'background', 'medium'));
var StyledMenuButton = styled_components_1.default.button(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background: transparent;\n  border: none;\n  padding: ", ";\n  width: 100%;\n  &:hover {\n    background: ", ";\n    cursor: pointer;\n  }\n"], ["\n  background: transparent;\n  border: none;\n  padding: ", ";\n  width: 100%;\n  &:hover {\n    background: ", ";\n    cursor: pointer;\n  }\n"])), Theme_1.fromTheme('ws', 'small'), Theme_1.fromTheme('color', 'background', 'medium'));
var ButtonDropdownMenuItem = function (props) {
    var onClick = props.onClick, children = props.children;
    return (react_1.default.createElement(StyledMenuListItem, null,
        react_1.default.createElement(StyledMenuButton, { onClick: onClick }, children)));
};
exports.default = ButtonDropdownMenuItem;
var templateObject_1, templateObject_2;


/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importStar(__webpack_require__(7));
var Header = styled_components_1.default.header(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  align-items: baseline;\n  background-color: ", ";\n  display: flex;\n  justify-content: ", ";\n  padding: ", ";\n  width: 100%;\n"], ["\n  align-items: baseline;\n  background-color: ", ";\n  display: flex;\n  justify-content: ", ";\n  padding: ", ";\n  width: 100%;\n"])), function (_a) {
    var background = _a.background;
    return background;
}, function (_a) {
    var justify = _a.justify;
    return justify;
}, function (_a) {
    var theme = _a.theme;
    return theme.ws.medium + " " + theme.ws.small;
});
Header.defaultProps = {
    background: 'transparent',
    justify: 'space-between',
};
exports.default = styled_components_1.withTheme(Header);
var templateObject_1;


/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importStar(__webpack_require__(7));
var Logo = styled_components_1.default.a(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  align-self: stretch;\n  background-image: url(", ");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  color: transparent;\n  display: inline-block;\n  font-size: 0;\n  line-height: 0;\n  margin: ", ";\n  width: ", ";\n  min-width: 100px;\n  height: ", ";\n"], ["\n  align-self: stretch;\n  background-image: url(", ");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  color: transparent;\n  display: inline-block;\n  font-size: 0;\n  line-height: 0;\n  margin: ", ";\n  width: ", ";\n  min-width: 100px;\n  height: ", ";\n"])), function (_a) {
    var image = _a.image;
    return image;
}, function (_a) {
    var theme = _a.theme;
    return theme.ws.zero + " " + theme.ws.small;
}, function (_a) {
    var width = _a.width;
    return width;
}, function (_a) {
    var height = _a.height;
    return height;
});
Logo.defaultProps = {
    href: '',
    image: '',
    width: '175px',
    height: '50px',
};
exports.default = styled_components_1.withTheme(Logo);
var templateObject_1;


/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importStar(__webpack_require__(7));
var Theme_1 = __webpack_require__(8);
var PageBody = styled_components_1.default.main(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin: ", ";\n"], ["\n  margin: ", ";\n"])), Theme_1.fromTheme('ws', 'small'));
exports.default = styled_components_1.withTheme(PageBody);
var templateObject_1;


/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importStar(__webpack_require__(7));
var Theme_1 = __webpack_require__(8);
var TabList = styled_components_1.default.ul(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: transparent;\n  border-bottom: ", ";\n  border-collapse: collapse;\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n"], ["\n  background-color: transparent;\n  border-bottom: ", ";\n  border-collapse: collapse;\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n"])), Theme_1.fromTheme('border', 'hairline'));
exports.default = styled_components_1.withTheme(TabList);
var templateObject_1;


/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(0));
var styled_components_1 = __importStar(__webpack_require__(7));
var Theme_1 = __webpack_require__(8);
var TabListItemBox = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: ", ";\n  border: ", ";\n  border-bottom: ", ";\n  color: ", ";\n  display: inline-block;\n  padding: 0.5rem 1rem;\n  &:hover {\n    border: ", ";\n    border-bottom: ", ";\n    color: ", ";\n  }\n"], ["\n  background: ", ";\n  border: ", ";\n  border-bottom: ", ";\n  color: ", ";\n  display: inline-block;\n  padding: 0.5rem 1rem;\n  &:hover {\n    border: ", ";\n    border-bottom: ", ";\n    color: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme, isActive = _a.isActive;
    return (isActive ? theme.color.background.light : 'transparent');
}, function (_a) {
    var theme = _a.theme, isActive = _a.isActive;
    return (isActive ? theme.border.hairline : '1px solid transparent');
}, function (_a) {
    var isActive = _a.isActive;
    return (isActive ? '1px solid transparent' : 'none');
}, Theme_1.fromTheme('color', 'text', 'dark'), Theme_1.fromTheme('border', 'hairline'), function (_a) {
    var isActive = _a.isActive;
    return (isActive ? '1px solid transparent' : 'none');
}, Theme_1.fromTheme('color', 'text', 'dark'));
var TabListItemWrapper = styled_components_1.default.li(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-bottom: -1px;\n  padding: 0 1em;\n"], ["\n  margin-bottom: -1px;\n  padding: 0 1em;\n"])));
var TabListItem = function (props) {
    var children = props.children, isActive = props.isActive;
    var theme = react_1.useContext(styled_components_1.ThemeContext);
    return (react_1.default.createElement(TabListItemWrapper, null,
        react_1.default.createElement(TabListItemBox, { theme: theme, isActive: isActive }, children)));
};
TabListItemBox.defaultProps = {
    isActive: false,
};
exports.default = TabListItem;
var templateObject_1, templateObject_2;


/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(__webpack_require__(7));
var StyledTable = styled_components_1.default.table(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    border-collapse: collapse;\n    padding: ", ";\n    width: 100%;\n"], ["\n    border-collapse: collapse;\n    padding: ", ";\n    width: 100%;\n"])), function (_a) {
    var theme = _a.theme;
    return (theme.ws.xsmall + ' ' + theme.ws.small);
});
var Table = StyledTable;
exports.default = Table;
var templateObject_1;


/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(__webpack_require__(7));
var TableCellList = styled_components_1.default.ol(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  list-style: none;\n"], ["\n  list-style: none;\n"])));
exports.default = TableCellList;
var templateObject_1;


/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(__webpack_require__(7));
var Theme_1 = __webpack_require__(8);
var TableCellListItem = styled_components_1.default.li(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border-top: ", ";\n  padding: ", " 0px;\n  &:first-child {\n    border-top: none;\n  }\n"], ["\n  border-top: ", ";\n  padding: ", " 0px;\n  &:first-child {\n    border-top: none;\n  }\n"])), Theme_1.fromTheme('border', 'hairline'), Theme_1.fromTheme('ws', 'small'));
exports.default = TableCellListItem;
var templateObject_1;


/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(__webpack_require__(7));
var StyledTableRow = styled_components_1.default.tr(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: ", ";\n  &:hover {\n    background: ", ";\n  }\n"], ["\n  background: ",
    ";\n  &:hover {\n    background: ",
    ";\n  }\n"])), function (_a) {
    var theme = _a.theme, isStriped = _a.isStriped;
    return (isStriped
        ? theme.color.background.subtle
        : theme.color.background.light);
}, function (_a) {
    var theme = _a.theme, noHighlight = _a.noHighlight;
    return (noHighlight
        ? null
        : theme.color.background.medium);
});
StyledTableRow.defaultProps = {
    isStriped: false,
};
var TableRow = StyledTableRow;
exports.default = TableRow;
var templateObject_1;


/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(__webpack_require__(7));
var Theme_1 = __webpack_require__(8);
var StyledTableHead = styled_components_1.default.thead(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: ", ";\n"], ["\n  background-color: ", ";\n"])), Theme_1.fromTheme('color', 'background', 'medium'));
var TableHead = StyledTableHead;
exports.default = TableHead;
var templateObject_1;


/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(__webpack_require__(7));
var Theme_1 = __webpack_require__(8);
var StyledTableHeadingCell = styled_components_1.default.th(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: ", ";\n  border: ", ";\n  font-weight: ", ";\n  text-align: 'center';\n"], ["\n  background-color: ",
    ";\n  border: ", ";\n  font-weight: ", ";\n  text-align: 'center';\n"])), function (_a) {
    var theme = _a.theme, backgroundColor = _a.backgroundColor;
    return (backgroundColor || theme.color.background.medium);
}, Theme_1.fromTheme('border', 'light'), Theme_1.fromTheme('font', 'bold', 'weight'));
var TableHeadingCell = StyledTableHeadingCell;
exports.default = TableHeadingCell;
var templateObject_1;


/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(__webpack_require__(7));
var TableHeadingSpacer = styled_components_1.default.td(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: none;\n  border: none;\n  color: transparent;\n  &:hover {\n    background-color: none;\n  }\n"], ["\n  background-color: none;\n  border: none;\n  color: transparent;\n  &:hover {\n    background-color: none;\n  }\n"])));
exports.default = TableHeadingSpacer;
var templateObject_1;


/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(__webpack_require__(7));
var Theme_1 = __webpack_require__(8);
var StyledTableBody = styled_components_1.default.tbody(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border: ", ";\n  overflow: ", ";\n"], ["\n  border: ", ";\n  overflow: ", ";\n"])), Theme_1.fromTheme('border', 'light'), function (_a) {
    var isScrollable = _a.isScrollable;
    return (isScrollable ? 'scroll' : 'visible');
});
var TableBody = StyledTableBody;
TableBody.defaultProps = {
    isScrollable: false,
};
exports.default = TableBody;
var templateObject_1;


/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(__webpack_require__(7));
var TableCell_1 = __webpack_require__(109);
var Theme_1 = __webpack_require__(8);
var StyledTableRowHeadingCell = styled_components_1.default.th(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border-left: ", ";\n  border-right: ", ";\n  font-weight: ", ";\n  font-size: ", ";\n  text-align: ", ";\n  vertical-align: ", ";\n  background-color: ", ";\n"], ["\n  border-left: ", ";\n  border-right: ", ";\n  font-weight: ", ";\n  font-size: ", ";\n  text-align: ", ";\n  vertical-align: ", ";\n  background-color: ", ";\n"])), Theme_1.fromTheme('border', 'light'), Theme_1.fromTheme('border', 'light'), Theme_1.fromTheme('font', 'data', 'weight'), Theme_1.fromTheme('font', 'data', 'size'), function (_a) {
    var alignment = _a.alignment;
    return alignment;
}, function (_a) {
    var verticalAlignment = _a.verticalAlignment;
    return verticalAlignment;
}, function (_a) {
    var backgroundColor = _a.backgroundColor;
    return backgroundColor;
});
StyledTableRowHeadingCell.defaultProps = {
    alignment: TableCell_1.ALIGN.LEFT,
    verticalAlignment: TableCell_1.VALIGN.CENTER,
};
var TableRowHeadingCell = StyledTableRowHeadingCell;
exports.default = TableRowHeadingCell;
var templateObject_1;


/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(0));
var styled_components_1 = __importStar(__webpack_require__(7));
var Theme_1 = __webpack_require__(8);
var StyledIconLink = styled_components_1.default.a(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: transparent;\n  color: ", ";\n  &:hover {\n    color: ", ";\n    cursor: pointer;\n  }\n  display: inline-block;\n"], ["\n  background: transparent;\n  color: ", ";\n  &:hover {\n    color: ", ";\n    cursor: pointer;\n  }\n  display: inline-block;\n"])), Theme_1.fromTheme('color', 'background', 'medium'), Theme_1.fromTheme('color', 'background', 'dark'));
var IconLink = function (props) {
    var clickHandler = props.clickHandler, href = props.href, title = props.title, alt = props.alt, children = props.children;
    var theme = react_1.useContext(styled_components_1.ThemeContext);
    return (react_1.default.createElement(StyledIconLink, { onClick: clickHandler, href: href, title: title, theme: theme, "aria-label": alt, role: "link" }, children));
};
exports.default = IconLink;
var templateObject_1;


/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(0));
var styled_components_1 = __importStar(__webpack_require__(7));
var Theme_1 = __webpack_require__(8);
var ValidationErrorMessage_1 = __importDefault(__webpack_require__(52));
var InputLabel_1 = __importStar(__webpack_require__(38));
var StyledDropdown = styled_components_1.default.select(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: ", ";\n  width: 100%;\n  grid-area: i;\n"], ["\n  color: ", ";\n  width: 100%;\n  grid-area: i;\n"])), Theme_1.fromTheme('color', 'text', 'dark'));
var Dropdown = function (props) {
    var id = props.id, onChange = props.onChange, onClick = props.onClick, name = props.name, options = props.options, value = props.value, defaultValue = props.defaultValue, isRequired = props.isRequired, errorMessage = props.errorMessage, label = props.label, labelPosition = props.labelPosition, isLabelVisible = props.isLabelVisible, forwardRef = props.forwardRef, hideError = props.hideError, disabled = props.disabled;
    var theme = react_1.useContext(styled_components_1.ThemeContext);
    return (react_1.default.createElement(InputLabel_1.default, { htmlFor: id, label: label, labelPosition: labelPosition, isLabelVisible: isLabelVisible, isRequired: isRequired, hideError: hideError },
        react_1.default.createElement(StyledDropdown, { id: id, onChange: onChange, onClick: onClick, theme: theme, name: name, value: value, defaultValue: defaultValue, "aria-errormessage": id + "-error", "aria-invalid": errorMessage ? true : null, "aria-required": isRequired, required: isRequired, ref: forwardRef, disabled: disabled }, options.map(function (option) { return (react_1.default.createElement("option", { value: option.value, key: option.value, disabled: option.disabled }, option.label)); })),
        errorMessage && !hideError
            && (react_1.default.createElement(ValidationErrorMessage_1.default, { id: id + "-error" }, errorMessage))));
};
Dropdown.defaultProps = {
    labelPosition: InputLabel_1.POSITION.TOP,
    isLabelVisible: true,
    hideError: false,
};
exports.default = Dropdown;
var templateObject_1;


/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(0));
var styled_components_1 = __importStar(__webpack_require__(7));
var Theme_1 = __webpack_require__(8);
var CheckLabel_1 = __importDefault(__webpack_require__(75));
var InputLabel_1 = __webpack_require__(38);
var ValidationErrorMessage_1 = __importDefault(__webpack_require__(52));
var Checkmark = styled_components_1.default.svg(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  fill: none;\n  stroke: ", ";\n  stroke-width: 0.5em;\n"], ["\n  fill: none;\n  stroke: ",
    ";\n  stroke-width: 0.5em;\n"])), function (_a) {
    var checked = _a.checked, disabled = _a.disabled, theme = _a.theme;
    if (checked && disabled) {
        return "" + theme.color.text.medium;
    }
    if (checked) {
        return "" + theme.color.text.dark;
    }
    return 'none';
});
var CustomCheckbox = styled_components_1.default.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: inline-block;\n  border: ", ";\n  grid-area: i;\n  width: 1.25em;\n  height: 1.25em;\n  cursor: ", ";\n  box-shadow: ", ";\n  margin-right: ", ";\n  align-self: center;\n  justify-self: ", ";\n"], ["\n  display: inline-block;\n  border: ",
    ";\n  grid-area: i;\n  width: 1.25em;\n  height: 1.25em;\n  cursor: ",
    ";\n  box-shadow: ", ";\n  margin-right: ", ";\n  align-self: center;\n  justify-self: ",
    ";\n"])), function (_a) {
    var theme = _a.theme, disabled = _a.disabled;
    return (disabled
        ? "" + theme.border.light
        : "2px solid " + theme.color.text.base);
}, function (_a) {
    var disabled = _a.disabled;
    return (disabled
        ? 'default'
        : 'pointer');
}, function (_a) {
    var checked = _a.checked, theme = _a.theme;
    return checked && "0 0px 8px " + theme.color.background.dark;
}, Theme_1.fromTheme('ws', 'xsmall'), function (_a) {
    var labelPosition = _a.labelPosition;
    return (labelPosition === InputLabel_1.POSITION.RIGHT
        ? 'end'
        : 'start');
});
var NativeCheckbox = styled_components_1.default.input(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  opacity: 0;\n  height: 0;\n  width: 0;\n"], ["\n  opacity: 0;\n  height: 0;\n  width: 0;\n"])));
var Checkbox = function (props) {
    var id = props.id, label = props.label, value = props.value, name = props.name, disabled = props.disabled, checked = props.checked, onChange = props.onChange, isLabelVisible = props.isLabelVisible, labelPosition = props.labelPosition, isRequired = props.isRequired, errorMessage = props.errorMessage, forwardRef = props.forwardRef, hideError = props.hideError;
    var theme = react_1.useContext(styled_components_1.ThemeContext);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(CheckLabel_1.default, { htmlFor: id, label: label, labelPosition: labelPosition, isLabelVisible: isLabelVisible, isRequired: isRequired, disabled: disabled, hideError: hideError },
            react_1.default.createElement(NativeCheckbox, { id: id, type: "checkbox", value: value, name: name, "aria-required": isRequired, required: isRequired, onChange: onChange, disabled: disabled, ref: forwardRef, theme: theme, checked: checked }),
            react_1.default.createElement(CustomCheckbox, { role: "checkbox", checked: checked, disabled: disabled, labelPosition: labelPosition, hideError: hideError },
                react_1.default.createElement(Checkmark, { viewBox: "0 0 60 60", checked: checked, disabled: disabled },
                    react_1.default.createElement("polyline", { points: "10 25 25 40 50 7" }))),
            errorMessage && !hideError
                && (react_1.default.createElement(ValidationErrorMessage_1.default, null, errorMessage)))));
};
Checkbox.defaultProps = {
    disabled: false,
    isLabelVisible: true,
    labelPosition: InputLabel_1.POSITION.RIGHT,
    checked: false,
    hideError: false,
};
exports.default = Checkbox;
var templateObject_1, templateObject_2, templateObject_3;


/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(0));
var downshift_1 = __webpack_require__(998);
var react_fontawesome_1 = __webpack_require__(56);
var free_solid_svg_icons_1 = __webpack_require__(57);
var styled_components_1 = __importDefault(__webpack_require__(7));
var InputLabel_1 = __webpack_require__(38);
var ValidationErrorMessage_1 = __importDefault(__webpack_require__(52));
var TextInput_1 = __webpack_require__(110);
var Buttons_1 = __webpack_require__(148);
var Lists_1 = __webpack_require__(108);
var Theme_1 = __webpack_require__(8);
var const_1 = __webpack_require__(111);
var ComboboxWrapper = styled_components_1.default(InputLabel_1.StyledInputLabel).attrs({
    as: 'div',
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  align-items: baseline;\n  width: 100%;\n"], ["\n  align-items: baseline;\n  width: 100%;\n"])));
var ComboboxLabel = styled_components_1.default(InputLabel_1.StyledInputLabelText).attrs({
    as: 'label',
})(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  grid-area: l; \n"], ["\n  grid-area: l; \n"])));
var InputWrapper = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: relative;\n  grid-area: i;\n  display: flex;\n  flex-direction: row;\n"], ["\n  position: relative;\n  grid-area: i;\n  display: flex;\n  flex-direction: row;\n"])));
var ComboboxMenu = styled_components_1.default(Lists_1.DropdownList)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  top: 1.8em;\n  width: 100%;\n  max-height: 16em;\n  overflow-y: scroll;\n  ", ";\n"], ["\n  top: 1.8em;\n  width: 100%;\n  max-height: 16em;\n  overflow-y: scroll;\n  ", ";\n"])), function (_a) {
    var isOpen = _a.isOpen;
    return (isOpen ? '' : const_1.hideFromDisplay);
});
var ComboboxMenuItem = styled_components_1.default(Lists_1.DropdownListItem)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  background: ", ";\n"], ["\n  background: ",
    ";\n"])), function (_a) {
    var highlight = _a.highlight, theme = _a.theme;
    return (highlight
        ? theme.color.background.info.light
        : null);
});
var ComboboxNoResultsItem = styled_components_1.default(Lists_1.DropdownListItem)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  font-style: italic;\n  text-align: right;\n  color: ", ";\n"], ["\n  font-style: italic;\n  text-align: right;\n  color: ", ";\n"])), Theme_1.fromTheme('color', 'text', 'medium'));
var ComboboxButton = styled_components_1.default(Buttons_1.Button)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  border: ", ";\n  border-left: none;\n  &:hover {\n    border: ", ";\n    border-left: none;\n  }\n"], ["\n  border: ", ";\n  border-left: none;\n  &:hover {\n    border: ", ";\n    border-left: none;\n  }\n"])), Theme_1.fromTheme('border', 'hairline'), Theme_1.fromTheme('border', 'hairline'));
var Combobox = function (_a) {
    var currentValue = _a.currentValue, errorMessage = _a.errorMessage, filterFunction = _a.filterFunction, forwardRef = _a.forwardRef, hideError = _a.hideError, isLabelVisible = _a.isLabelVisible, isRequired = _a.isRequired, label = _a.label, labelPosition = _a.labelPosition, onOptionSelected = _a.onOptionSelected, options = _a.options, placeholder = _a.placeholder;
    var _b = react_1.useState(options), filteredOptions = _b[0], setFilteredOptions = _b[1];
    var _c = downshift_1.useCombobox({
        items: filteredOptions,
        itemToString: function (item) { return (item ? item.label : ''); },
        onSelectedItemChange: onOptionSelected,
        onInputValueChange: function (_a) {
            var inputValue = _a.inputValue;
            setFilteredOptions(options.filter(function (option) { return (filterFunction(option, inputValue)); }));
        },
        selectedItem: currentValue,
    }), getComboboxProps = _c.getComboboxProps, getItemProps = _c.getItemProps, getInputProps = _c.getInputProps, getLabelProps = _c.getLabelProps, getMenuProps = _c.getMenuProps, getToggleButtonProps = _c.getToggleButtonProps, highlightedIndex = _c.highlightedIndex, isOpen = _c.isOpen;
    var _d = getInputProps(), inputId = _d.id, inputValue = _d.value;
    return (react_1.default.createElement(ComboboxWrapper, { labelPosition: labelPosition, isLabelVisible: isLabelVisible, hideError: hideError },
        react_1.default.createElement(ComboboxLabel, __assign({ isLabelVisible: isLabelVisible, labelPosition: labelPosition }, getLabelProps()),
            label,
            isRequired && react_1.default.createElement(InputLabel_1.RequiredSymbol, null, "*")),
        react_1.default.createElement(InputWrapper, __assign({}, getComboboxProps()),
            react_1.default.createElement(TextInput_1.StyledTextInput, __assign({}, getInputProps({ ref: forwardRef }), { placeholder: placeholder })),
            react_1.default.createElement(ComboboxMenu, __assign({ isOpen: isOpen }, getMenuProps({ refKey: 'ref' })), filteredOptions.length > 0
                ? filteredOptions.map(function (item, index) { return (react_1.default.createElement(ComboboxMenuItem, __assign({ key: item.value, highlight: highlightedIndex === index }, getItemProps({ item: item, index: index })), item.label)); })
                : (react_1.default.createElement(ComboboxNoResultsItem, null, "No results for \"" + inputValue + "\""))),
            react_1.default.createElement(ComboboxButton, __assign({ alt: "Show all options for " + label }, getToggleButtonProps({ refKey: 'forwardRef' })),
                react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faChevronDown }))),
        errorMessage && !hideError
            && (react_1.default.createElement(ValidationErrorMessage_1.default, { id: inputId + "-error" }, errorMessage))));
};
Combobox.defaultProps = {
    filterFunction: function (option, inputValue) { return (option.label
        .toLowerCase()
        .startsWith(inputValue.toLowerCase())); },
    hideError: false,
    isLabelVisible: true,
    isRequired: false,
    placeholder: '',
};
exports.default = Combobox;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;


/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(0));
var styled_components_1 = __importStar(__webpack_require__(7));
var Theme_1 = __webpack_require__(8);
var Typography_1 = __webpack_require__(174);
var ValidationErrorMessage_1 = __importDefault(__webpack_require__(52));
var InputLabel_1 = __webpack_require__(38);
var StyledFieldset = styled_components_1.default.fieldset(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: block;\n  border: ", ";\n  padding-inline-start: ", ";\n  padding-inline-end: 0.75em;\n  min-inline-size: min-content;\n  & > * {\n    margin-top: ", ";\n    margin-bottom: ", ";\n  }\n"], ["\n  display: block;\n  border: ",
    ";\n  padding-inline-start: ",
    ";\n  padding-inline-end: 0.75em;\n  min-inline-size: min-content;\n  & > * {\n    margin-top: ", ";\n    margin-bottom: ", ";\n  }\n"])), function (_a) {
    var isBorderVisible = _a.isBorderVisible, theme = _a.theme;
    return (isBorderVisible
        ? "" + theme.border.light
        : 'none');
}, function (_a) {
    var isBorderVisible = _a.isBorderVisible, isLegendVisible = _a.isLegendVisible;
    return (!isBorderVisible && !isLegendVisible
        ? null
        : '0.75em');
}, Theme_1.fromTheme('ws', 'small'), Theme_1.fromTheme('ws', 'small'));
var StyledLegend = styled_components_1.default.legend(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  padding: ", ";\n  position: ", ";\n  left: ", ";\n"], ["\n  padding: ",
    ";\n  position: ",
    ";\n  left: ",
    ";\n"])), function (_a) {
    var isBorderVisible = _a.isBorderVisible;
    return (isBorderVisible
        ? '0.25em'
        : null);
}, function (_a) {
    var isLegendVisible = _a.isLegendVisible;
    return (isLegendVisible
        ? null
        : 'absolute');
}, function (_a) {
    var isLegendVisible = _a.isLegendVisible;
    return (isLegendVisible
        ? null
        : '-100vw');
});
var Fieldset = function (props) {
    var legend = props.legend, form = props.form, children = props.children, legendDescription = props.legendDescription, errorMessage = props.errorMessage, isBorderVisible = props.isBorderVisible, isLegendVisible = props.isLegendVisible, isRequired = props.isRequired;
    var theme = react_1.useContext(styled_components_1.ThemeContext);
    return (react_1.default.createElement(StyledFieldset, { form: form, theme: theme, isBorderVisible: isBorderVisible },
        react_1.default.createElement(StyledLegend, { isLegendVisible: isLegendVisible, "aria-required": isRequired }, isRequired
            ? (react_1.default.createElement(react_1.default.Fragment, null,
                legend,
                react_1.default.createElement(InputLabel_1.RequiredSymbol, null, "*")))
            : legend),
        legendDescription
            && (react_1.default.createElement(Typography_1.NoteText, null, legendDescription)),
        children,
        errorMessage
            && (react_1.default.createElement(ValidationErrorMessage_1.default, null, errorMessage))));
};
Fieldset.defaultProps = {
    isBorderVisible: true,
    isLegendVisible: true,
};
exports.default = Fieldset;
var templateObject_1, templateObject_2;


/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PageTitle_1 = __webpack_require__(175);
Object.defineProperty(exports, "PageTitle", { enumerable: true, get: function () { return PageTitle_1.default; } });
var SectionHeading_1 = __webpack_require__(176);
Object.defineProperty(exports, "SectionHeading", { enumerable: true, get: function () { return SectionHeading_1.default; } });
var NoteText_1 = __webpack_require__(177);
Object.defineProperty(exports, "NoteText", { enumerable: true, get: function () { return NoteText_1.default; } });


/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(0));
var styled_components_1 = __importStar(__webpack_require__(7));
var Heading = styled_components_1.default.h1(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-family: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  color: ", ";\n"], ["\n  font-family: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.font.title.family;
}, function (_a) {
    var theme = _a.theme;
    return theme.font.title.size;
}, function (_a) {
    var theme = _a.theme;
    return theme.font.title.weight;
}, function (_a) {
    var theme = _a.theme;
    return theme.font.title.color;
});
var PageTitle = function (props) {
    var children = props.children;
    var theme = react_1.useContext(styled_components_1.ThemeContext);
    return (react_1.default.createElement(Heading, { theme: theme }, children));
};
PageTitle.defaultProps = {
    children: '',
};
exports.default = PageTitle;
var templateObject_1;


/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importStar(__webpack_require__(7));
var StyledSectionHeading = styled_components_1.default.h2(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border-bottom: ", ";\n  color: ", ";\n  font-family: ", "; \n  font-size: ", ";\n  font-weight: ", "; \n  width: 100%;\n"], ["\n  border-bottom: ", ";\n  color: ", ";\n  font-family: ", "; \n  font-size: ", ";\n  font-weight: ", "; \n  width: 100%;\n"])), function (_a) {
    var theme = _a.theme;
    return (theme.border.hairline);
}, function (_a) {
    var theme = _a.theme;
    return (theme.color.text.dark);
}, function (_a) {
    var theme = _a.theme;
    return (theme.font.heading.family);
}, function (_a) {
    var theme = _a.theme;
    return (theme.font.heading.size);
}, function (_a) {
    var theme = _a.theme;
    return (theme.font.heading.weight);
});
exports.default = styled_components_1.withTheme(StyledSectionHeading);
var templateObject_1;


/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(0));
var styled_components_1 = __importStar(__webpack_require__(7));
var StyledNoteText = styled_components_1.default.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: ", ";\n  font-family: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n"], ["\n  color: ", ";\n  font-family: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return (theme.font.note.color);
}, function (_a) {
    var theme = _a.theme;
    return (theme.font.note.family);
}, function (_a) {
    var theme = _a.theme;
    return (theme.font.note.size);
}, function (_a) {
    var theme = _a.theme;
    return (theme.font.note.weight);
});
var NoteText = function (props) {
    var children = props.children;
    var theme = react_1.useContext(styled_components_1.ThemeContext);
    return (react_1.default.createElement(StyledNoteText, { theme: theme }, children));
};
exports.default = NoteText;
var templateObject_1;


/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(0));
var styled_components_1 = __importStar(__webpack_require__(7));
var Theme_1 = __webpack_require__(8);
var CheckLabel_1 = __importDefault(__webpack_require__(75));
var InputLabel_1 = __webpack_require__(38);
var SelectMark = styled_components_1.default.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border: ", ";\n  border-radius: 50%;\n  position: absolute;\n  transition: opacity 0.2s ease-in-out;\n  align-self: center;\n  justify-self: center;\n"], ["\n  border: ",
    ";\n  border-radius: 50%;\n  position: absolute;\n  transition: opacity 0.2s ease-in-out;\n  align-self: center;\n  justify-self: center;\n"])), function (_a) {
    var theme = _a.theme, disabled = _a.disabled;
    return (disabled
        ? "6px solid " + theme.color.text.medium
        : "6px solid " + theme.color.text.base);
});
var SelectMarkContainer = styled_components_1.default.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  display: grid;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n"], ["\n  position: absolute;\n  display: grid;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n"])));
var CustomRadioButton = styled_components_1.default.span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: inline-block;\n  grid-area: i;\n  height: 1.25em;\n  width: 1.25em;\n  border: ", ";\n  border-radius: 50%;\n  margin-right: ", ";\n  align-self: center;\n  cursor: ", ";\n  box-shadow: ", ";\n  justify-self: ", ";\n  position: relative;\n"], ["\n  display: inline-block;\n  grid-area: i;\n  height: 1.25em;\n  width: 1.25em;\n  border: ",
    ";\n  border-radius: 50%;\n  margin-right: ", ";\n  align-self: center;\n  cursor: ",
    ";\n  box-shadow: ", ";\n  justify-self: ",
    ";\n  position: relative;\n"])), function (_a) {
    var theme = _a.theme, disabled = _a.disabled;
    return (disabled
        ? "" + theme.border.light
        : "2px solid " + theme.color.text.base);
}, Theme_1.fromTheme('ws', 'xsmall'), function (_a) {
    var disabled = _a.disabled;
    return (disabled
        ? 'default'
        : 'pointer');
}, function (_a) {
    var checked = _a.checked, theme = _a.theme;
    return checked && "0 0px 10px " + theme.color.background.darker;
}, function (_a) {
    var labelPosition = _a.labelPosition;
    return (labelPosition === InputLabel_1.POSITION.RIGHT
        ? 'end'
        : 'start');
});
var NativeRadioButton = styled_components_1.default.input(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  opacity: 0;\n  height: 0;\n  width: 0;\n"], ["\n  opacity: 0;\n  height: 0;\n  width: 0;\n"])));
var RadioButton = function (props) {
    var id = props.id, value = props.value, name = props.name, label = props.label, labelPosition = props.labelPosition, checked = props.checked, disabled = props.disabled, onChange = props.onChange, isRequired = props.isRequired, forwardRef = props.forwardRef;
    var theme = react_1.useContext(styled_components_1.ThemeContext);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(CheckLabel_1.default, { htmlFor: id, label: label, labelPosition: labelPosition, isRequired: isRequired, disabled: disabled },
            react_1.default.createElement(NativeRadioButton, { type: "radio", id: id, label: label, value: value, name: name, onChange: onChange, "aria-required": isRequired, required: isRequired, ref: forwardRef, theme: theme, checked: checked, disabled: disabled }),
            react_1.default.createElement(CustomRadioButton, { role: "radio", labelPosition: labelPosition, checked: checked, disabled: disabled }, checked
                && (react_1.default.createElement(SelectMarkContainer, null,
                    react_1.default.createElement(SelectMark, { disabled: disabled })))))));
};
RadioButton.defaultProps = {
    labelPosition: InputLabel_1.POSITION.RIGHT,
};
exports.default = RadioButton;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;


/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(__webpack_require__(7));
var Theme_1 = __webpack_require__(8);
var Form = styled_components_1.default.form.attrs(function (props) { return ({
    id: props.id,
    'aria-label': props.label,
}); })(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  & > * {\n    margin: ", ";\n  }\n"], ["\n  & > * {\n    margin: ", ";\n  }\n"])), Theme_1.fromTheme('ws', 'small'));
exports.default = Form;
var templateObject_1;


/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(0));
var react_transition_group_1 = __webpack_require__(996);
var react_dom_1 = __webpack_require__(32);
var styled_components_1 = __importStar(__webpack_require__(7));
var FADE_TIME = 250;
var ModalBackdrop = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.75);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  visibility: hidden;\n  &.modal-fade-appear {\n    opacity: 0;\n    visibility: hidden;\n  }\n  &.modal-fade-appear-active {\n    opacity: 1;\n    visibility: visible;\n    transition: opacity ", "ms;\n  }\n  &.modal-fade-appear-done {\n    visibility: visible;\n    opacity: 1;\n  }\n  &.modal-fade-enter {\n    opacity: 0;\n    visibility: hidden;\n  }\n  &.modal-fade-enter-active {\n    opacity: 1;\n    visibility: visible;\n    transition: opacity ", "ms;\n  }\n  &.modal-fade-enter-done {\n    visibility: visible;\n    opacity: 1;\n  }\n  &.modal-fade-exit {\n    opacity: 1;\n    visibility: visible;\n  }\n  &.modal-fade-exit-active {\n    opacity: 0;\n    visibility: visible;\n    transition: opacity ", "ms;\n  }\n  &.modal-fade-exit-done {\n    visibility: hidden;\n    opacity: 0;\n  }\n"], ["\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.75);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  visibility: hidden;\n  &.modal-fade-appear {\n    opacity: 0;\n    visibility: hidden;\n  }\n  &.modal-fade-appear-active {\n    opacity: 1;\n    visibility: visible;\n    transition: opacity ", "ms;\n  }\n  &.modal-fade-appear-done {\n    visibility: visible;\n    opacity: 1;\n  }\n  &.modal-fade-enter {\n    opacity: 0;\n    visibility: hidden;\n  }\n  &.modal-fade-enter-active {\n    opacity: 1;\n    visibility: visible;\n    transition: opacity ", "ms;\n  }\n  &.modal-fade-enter-done {\n    visibility: visible;\n    opacity: 1;\n  }\n  &.modal-fade-exit {\n    opacity: 1;\n    visibility: visible;\n  }\n  &.modal-fade-exit-active {\n    opacity: 0;\n    visibility: visible;\n    transition: opacity ", "ms;\n  }\n  &.modal-fade-exit-done {\n    visibility: hidden;\n    opacity: 0;\n  }\n"])), FADE_TIME, FADE_TIME, FADE_TIME);
var StyledModal = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background-color: ", ";\n  border: ", ";\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  min-width: 40em;\n  max-height: 100%;\n  visibility: inherit;\n"], ["\n  background-color: ", ";\n  border: ", ";\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  min-width: 40em;\n  max-height: 100%;\n  visibility: inherit;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.color.background.light;
}, function (_a) {
    var theme = _a.theme;
    return theme.border.light;
});
var Modal = function (_a) {
    var isVisible = _a.isVisible, children = _a.children, closeHandler = _a.closeHandler, ariaLabelledBy = _a.ariaLabelledBy, forwardRef = _a.forwardRef;
    var theme = react_1.useContext(styled_components_1.ThemeContext);
    var backupRef = react_1.useRef(null);
    var finalForwardRef = forwardRef != null ? forwardRef : backupRef;
    var focusables = 'button, [href], input, select, textarea,'
        + ' [tabindex]:not([tabindex="-1"])';
    react_1.useEffect(function () {
        var listener = function (event) {
            if (!finalForwardRef.current)
                return;
            var modal = finalForwardRef.current;
            if (!modal.contains(event.target)) {
                var firstFocusable = modal.querySelector(focusables);
                if (firstFocusable != null) {
                    firstFocusable.focus();
                }
            }
        };
        if (isVisible) {
            document.body.style.overflow = 'hidden';
            document.body.addEventListener('focus', listener, true);
        }
        return function () {
            document.body.style.overflow = '';
            document.body.removeEventListener('focus', listener);
        };
    }, [finalForwardRef, focusables, isVisible]);
    return react_dom_1.createPortal((react_1.default.createElement(react_transition_group_1.CSSTransition, { appear: true, classNames: "modal-fade", in: isVisible, timeout: FADE_TIME },
        react_1.default.createElement(ModalBackdrop, { key: "modal-backdrop", onClick: function (evt) {
                closeHandler();
                evt.stopPropagation();
            } }, isVisible && (react_1.default.createElement(StyledModal, { role: "dialog", "aria-labelledby": ariaLabelledBy, "aria-modal": "true", onClick: function (evt) { evt.stopPropagation(); }, theme: theme, ref: finalForwardRef }, children))))), document.body);
};
exports.default = Modal;
var templateObject_1, templateObject_2;


/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importStar(__webpack_require__(7));
var StyledModalBody = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: ", ";\n  overflow: auto;\n"], ["\n  padding: ", ";\n  overflow: auto;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.ws.medium;
});
exports.default = styled_components_1.withTheme(StyledModalBody);
var templateObject_1;


/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importStar(__webpack_require__(7));
var styledModalFooter = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: space-between;\n  padding: ", ";\n  width: 100%;\n"], ["\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: space-between;\n  padding: ", ";\n  width: 100%;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.ws.small + " " + theme.ws.medium;
});
exports.default = styled_components_1.withTheme(styledModalFooter);
var templateObject_1;


/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(0));
var styled_components_1 = __importStar(__webpack_require__(7));
var react_fontawesome_1 = __webpack_require__(56);
var free_solid_svg_icons_1 = __webpack_require__(57);
var Buttons_1 = __webpack_require__(148);
var Theme_1 = __webpack_require__(8);
var Typography_1 = __webpack_require__(174);
var ModalTitle = styled_components_1.default(Typography_1.SectionHeading)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border-bottom: none;\n"], ["\n  border-bottom: none;\n"])));
var StyledModalHeader = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background-color: ", ";\n  border-bottom: ", ";\n  display: flex;\n  justify-content: space-between;\n  padding: ", ";\n  width: 100%;\n"], ["\n  background-color: ", ";\n  border-bottom: ", ";\n  display: flex;\n  justify-content: space-between;\n  padding: ", ";\n  width: 100%;\n"])), function (_a) {
    var theme = _a.theme;
    return (theme.color.background.subtle);
}, function (_a) {
    var theme = _a.theme;
    return (theme.border.light);
}, function (_a) {
    var theme = _a.theme;
    return theme.ws.small + " " + theme.ws.medium;
});
var ModalHeader = function (_a) {
    var closeButtonHandler = _a.closeButtonHandler, children = _a.children, forwardRef = _a.forwardRef, tabIndex = _a.tabIndex;
    var markOneTheme = react_1.useContext(styled_components_1.ThemeContext);
    return (react_1.default.createElement(StyledModalHeader, { theme: markOneTheme, ref: forwardRef, tabIndex: tabIndex },
        react_1.default.createElement(ModalTitle, null, children),
        closeButtonHandler
            && (react_1.default.createElement(Buttons_1.BorderlessButton, { variant: Theme_1.VARIANT.NEGATIVE, onClick: closeButtonHandler },
                react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { title: "Close Modal", icon: free_solid_svg_icons_1.faTimes })))));
};
exports.default = ModalHeader;
var templateObject_1, templateObject_2;


/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(0));
var styled_components_1 = __importStar(__webpack_require__(7));
var const_1 = __webpack_require__(111);
var Theme_1 = __webpack_require__(8);
var StyledModalMessage = styled_components_1.default.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: ", ";\n  color: ", ";\n  padding: ", ";\n"], ["\n  background: ", ";\n  color: ",
    ";\n  padding: ", ";\n"])), function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return theme.color.background[variant].medium;
}, function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return (theme.color.text[variant === Theme_1.VARIANT.BASE ? 'dark' : 'light']);
}, Theme_1.fromTheme('ws', 'small'));
var ModalMessage = function (props) {
    var id = props.id, children = props.children, variant = props.variant, role = props.role, ariaLive = props.ariaLive;
    var theme = react_1.useContext(styled_components_1.ThemeContext);
    return (react_1.default.createElement(StyledModalMessage, { id: id, variant: variant, theme: theme, role: role, "aria-live": ariaLive }, children));
};
ModalMessage.defaultProps = {
    variant: Theme_1.VARIANT.BASE,
    role: 'alert',
    ariaLive: const_1.ARIA_LIVE_VARIANT.ASSERTIVE,
};
exports.default = ModalMessage;
var templateObject_1;


/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(0));
var styled_components_1 = __importStar(__webpack_require__(7));
var react_router_dom_1 = __webpack_require__(249);
var Theme_1 = __webpack_require__(8);
var StyledLink = styled_components_1.default(react_router_dom_1.Link)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  text-decoration: none;\n  color: ", ";\n  &:hover {\n    text-decoration: underline;\n    color: ", ";\n  }\n  &:visited {\n    text-decoration: none;\n    color: ", ";\n  }\n"], ["\n  text-decoration: none;\n  color: ", ";\n  &:hover {\n    text-decoration: underline;\n    color: ", ";\n  }\n  &:visited {\n    text-decoration: none;\n    color: ", ";\n  }\n"])), Theme_1.fromTheme('color', 'background', Theme_1.VARIANT.INFO, 'medium'), Theme_1.fromTheme('color', 'background', Theme_1.VARIANT.INFO, 'dark'), Theme_1.fromTheme('color', 'background', Theme_1.VARIANT.INFO, 'medium'));
var Link = function (props) {
    var children = props.children, to = props.to;
    var theme = react_1.useContext(styled_components_1.ThemeContext);
    return (react_1.default.createElement(StyledLink, { to: to, theme: theme }, children));
};
exports.default = Link;
var templateObject_1;


/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(__webpack_require__(7));
var Theme_1 = __webpack_require__(8);
exports.default = styled_components_1.default.a(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  text-decoration: none;\n  color: ", ";\n  &:hover {\n    text-decoration: underline;\n    color: ", ";\n  }\n  &:visited {\n    text-decoration: none;\n    color: ", ";\n  }\n"], ["\n  text-decoration: none;\n  color: ", ";\n  &:hover {\n    text-decoration: underline;\n    color: ", ";\n  }\n  &:visited {\n    text-decoration: none;\n    color: ", ";\n  }\n"])), Theme_1.fromTheme('color', 'background', Theme_1.VARIANT.INFO, 'medium'), Theme_1.fromTheme('color', 'background', Theme_1.VARIANT.INFO, 'dark'), Theme_1.fromTheme('color', 'background', Theme_1.VARIANT.INFO, 'medium'));
var templateObject_1;


/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(0));
var styled_components_1 = __importStar(__webpack_require__(7));
var react_fontawesome_1 = __webpack_require__(56);
var free_solid_svg_icons_1 = __webpack_require__(57);
var Theme_1 = __webpack_require__(8);
var LoadSpinnerText_1 = __importDefault(__webpack_require__(112));
var StyledLoadSpinner = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: transparent;\n  color: ", ";\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  width:100%;\n"], ["\n  background: transparent;\n  color: ", ";\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  width:100%;\n"])), Theme_1.fromTheme('color', 'background', Theme_1.VARIANT.INFO, 'medium'));
var LoadSpinner = function (props) {
    var children = props.children, textColor = props.textColor;
    var theme = react_1.useContext(styled_components_1.ThemeContext);
    return (react_1.default.createElement(StyledLoadSpinner, { role: "alert", theme: theme },
        react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faCircleNotch, size: "8x", spin: true }),
        react_1.default.createElement(LoadSpinnerText_1.default, { color: textColor }, children)));
};
exports.default = LoadSpinner;
var templateObject_1;


/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TEXT_VARIANT = exports.VARIANT = exports.fromTheme = void 0;
function getRecursiveProp(theme, key, next) {
    var nextValue = theme[key];
    if (next.length > 0) {
        var thirdLevel = next.shift();
        return getRecursiveProp(nextValue, thirdLevel, next);
    }
    if (typeof nextValue === 'string') {
        return nextValue;
    }
    return null;
}
function fromTheme(key, next, more, last) {
    return function (_a) {
        var theme = _a.theme;
        if (more) {
            if (last) {
                return getRecursiveProp(theme, key, [next, more, last]);
            }
            return getRecursiveProp(theme, key, [next, more]);
        }
        return getRecursiveProp(theme, key, [next]);
    };
}
exports.fromTheme = fromTheme;
var VARIANT;
(function (VARIANT) {
    VARIANT["BASE"] = "base";
    VARIANT["INFO"] = "info";
    VARIANT["POSITIVE"] = "positive";
    VARIANT["PRIMARY"] = "positive";
    VARIANT["NEGATIVE"] = "negative";
    VARIANT["SECONDARY"] = "base";
    VARIANT["DANGER"] = "negative";
    VARIANT["DEFAULT"] = "base";
})(VARIANT = exports.VARIANT || (exports.VARIANT = {}));
var TEXT_VARIANT;
(function (TEXT_VARIANT) {
    TEXT_VARIANT["MEDIUM"] = "medium";
    TEXT_VARIANT["NEGATIVE"] = "negative";
    TEXT_VARIANT["BASE"] = "base";
})(TEXT_VARIANT = exports.TEXT_VARIANT || (exports.TEXT_VARIANT = {}));


/***/ }),

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "53adae7e04b94384b103e6884cbad7ab.svg";

/***/ }),

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(995);


/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequiredSymbol = exports.StyledInputLabelText = exports.StyledInputLabel = exports.POSITION = void 0;
var react_1 = __importStar(__webpack_require__(0));
var styled_components_1 = __importStar(__webpack_require__(7));
var const_1 = __webpack_require__(111);
var Theme_1 = __webpack_require__(8);
var POSITION;
(function (POSITION) {
    POSITION["TOP"] = "top";
    POSITION["LEFT"] = "left";
    POSITION["RIGHT"] = "right";
})(POSITION = exports.POSITION || (exports.POSITION = {}));
var generateGrid = function (labelPosition, isLabelVisible) {
    if (!isLabelVisible) {
        return "\"i i i\"\n            \"e e e\"";
    }
    if (labelPosition === POSITION.TOP) {
        return "\"l l l\"\n            \"i i i\"\n            \"e e e\"";
    }
    return "\"l i i\"\n          \". e e\"";
};
exports.StyledInputLabel = styled_components_1.default.label(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: ", ";\n  grid-template-areas: ", ";\n  align-items: baseline;\n  gap: ", ";\n"], ["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: ",
    ";\n  grid-template-areas: ",
    ";\n  align-items: baseline;\n  gap: ",
    ";\n"])), function (_a) {
    var hideError = _a.hideError;
    return ((hideError)
        ? '1fr'
        : '1fr minmax(1em, max-content)');
}, function (_a) {
    var labelPosition = _a.labelPosition, isLabelVisible = _a.isLabelVisible;
    return (generateGrid(labelPosition, isLabelVisible));
}, function (_a) {
    var hideError = _a.hideError, isLabelVisible = _a.isLabelVisible, theme = _a.theme;
    return ((!isLabelVisible && hideError)
        ? '0px'
        : (theme.ws.xsmall) + ' ' + (theme.ws.xsmall));
});
exports.StyledInputLabelText = styled_components_1.default.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", ";\n  grid-area: l;\n  justify-self: ", ";\n  color: ", ";\n"], ["\n  ", ";\n  grid-area: l;\n  justify-self: ",
    ";\n  color: ",
    ";\n"])), function (_a) {
    var isLabelVisible = _a.isLabelVisible;
    return (isLabelVisible ? '' : const_1.hideFromDisplay);
}, function (_a) {
    var labelPosition = _a.labelPosition;
    return (labelPosition === POSITION.TOP
        ? 'start'
        : 'end');
}, function (_a) {
    var theme = _a.theme, disabled = _a.disabled;
    return ((disabled)
        ? "" + theme.color.text.medium
        : "" + theme.color.text.dark);
});
exports.RequiredSymbol = styled_components_1.default.span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    color: ", ";\n"], ["\n    color: ", ";\n"])), Theme_1.fromTheme('color', 'text', 'negative'));
var InputLabel = function (props) {
    var htmlFor = props.htmlFor, label = props.label, labelPosition = props.labelPosition, isLabelVisible = props.isLabelVisible, children = props.children, isRequired = props.isRequired, disabled = props.disabled, hideError = props.hideError;
    var theme = react_1.useContext(styled_components_1.ThemeContext);
    return (react_1.default.createElement(exports.StyledInputLabel, { htmlFor: htmlFor, labelPosition: labelPosition, theme: theme, isLabelVisible: isLabelVisible, hideError: hideError },
        react_1.default.createElement(exports.StyledInputLabelText, { isLabelVisible: isLabelVisible, labelPosition: labelPosition, disabled: disabled },
            react_1.default.createElement(react_1.default.Fragment, null,
                label,
                isRequired && react_1.default.createElement(exports.RequiredSymbol, null, "*"))),
        children));
};
InputLabel.defaultProps = {
    labelPosition: POSITION.LEFT,
    isLabelVisible: true,
    disabled: false,
    hideError: false,
};
exports.StyledInputLabel.defaultProps = {
    labelPosition: POSITION.LEFT,
    isLabelVisible: true,
    hideError: false,
};
exports.default = InputLabel;
var templateObject_1, templateObject_2, templateObject_3;


/***/ }),

/***/ 452:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var polished_1 = __webpack_require__(997);
var FONT;
(function (FONT) {
    FONT["SANS"] = "\"Open Sans\", sans-serif";
    FONT["MONO"] = "\"Roboto Mono\", monospace";
})(FONT || (FONT = {}));
var WEIGHT;
(function (WEIGHT) {
    WEIGHT["LIGHT"] = "300";
    WEIGHT["MEDIUM"] = "400";
    WEIGHT["BOLD"] = "600";
})(WEIGHT || (WEIGHT = {}));
var WHITE = '#fefefe';
var BLACK = '#181818';
var MarkOneTheme = {
    color: {
        background: {
            light: WHITE,
            subtle: '#f2f2f2',
            medium: '#e8e8e8',
            dark: '#93a1ad',
            darker: polished_1.darken(0.75, WHITE),
            accent: '#a51c30',
            base: {
                light: WHITE,
                medium: polished_1.darken(0.175, WHITE),
                dark: '#93a1ad',
            },
            info: {
                light: '#95b5df',
                medium: '#4e88c7',
                dark: '#084161',
            },
            positive: {
                light: '#81e981',
                medium: '#4db848',
                dark: '#178717',
            },
            negative: {
                light: '#ff8f9c',
                medium: '#ff4040',
                dark: '#ed1b2a',
            },
        },
        text: {
            base: BLACK,
            light: polished_1.lighten(0.9, BLACK),
            medium: '#575757',
            dark: BLACK,
            info: '#4e88c7',
            positive: '#4db848',
            negative: '#bd0f24',
        },
        area: {
            acs: '#da373e',
            am: '#4eadab',
            ap: '#cedb51',
            be: '#f0b643',
            cs: '#6797db',
            ee: '#f9df57',
            ese: '#75c3d5',
            general: '#95b5df',
            'mat & me': '#b18cbb',
            mde: '#c0c0c0',
            msmba: '#946eb7',
            sem: '#ec8f9c',
        },
    },
    font: {
        base: {
            family: FONT.SANS,
            size: '16px',
            weight: WEIGHT.MEDIUM,
        },
        body: {
            family: FONT.SANS,
            size: '1em',
            weight: WEIGHT.MEDIUM,
        },
        data: {
            family: FONT.MONO,
            size: '0.9em',
            weight: WEIGHT.MEDIUM,
        },
        note: {
            family: FONT.SANS,
            size: '0.8em',
            weight: WEIGHT.MEDIUM,
            color: polished_1.lighten(0.35, BLACK),
        },
        bold: {
            family: FONT.SANS,
            size: '1em',
            weight: WEIGHT.BOLD,
        },
        title: {
            family: FONT.SANS,
            size: '1.66em',
            weight: WEIGHT.MEDIUM,
            color: polished_1.lighten(0.35, BLACK),
        },
        heading: {
            family: FONT.SANS,
            size: '1.33em',
            weight: WEIGHT.LIGHT,
        },
        error: {
            family: FONT.SANS,
            size: '0.7em',
            weight: WEIGHT.BOLD,
        },
    },
    shadow: {
        xlight: '0 2px 4px rgba(0,0,0,0.24)',
        light: '0 4px 8px rgba(0,0,0,0.28)',
        medium: '0 4px 16px 2px rgba(0,0,0,0.24)',
    },
    border: {
        hairline: "1px solid " + BLACK,
        light: "2px solid " + polished_1.lighten(0.5, BLACK),
        heavy: "6px solid " + polished_1.lighten(0.3, BLACK),
    },
    ws: {
        zero: '0px',
        xsmall: '5px',
        small: '10px',
        medium: '15px',
        large: '25px',
        xlarge: '40px',
    },
};
exports.default = MarkOneTheme;


/***/ }),

/***/ 464:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Binary_Property/ASCII.js": 465,
	"./Binary_Property/ASCII_Hex_Digit.js": 466,
	"./Binary_Property/Alphabetic.js": 467,
	"./Binary_Property/Any.js": 468,
	"./Binary_Property/Assigned.js": 469,
	"./Binary_Property/Bidi_Control.js": 470,
	"./Binary_Property/Bidi_Mirrored.js": 471,
	"./Binary_Property/Case_Ignorable.js": 472,
	"./Binary_Property/Cased.js": 473,
	"./Binary_Property/Changes_When_Casefolded.js": 474,
	"./Binary_Property/Changes_When_Casemapped.js": 475,
	"./Binary_Property/Changes_When_Lowercased.js": 476,
	"./Binary_Property/Changes_When_NFKC_Casefolded.js": 477,
	"./Binary_Property/Changes_When_Titlecased.js": 478,
	"./Binary_Property/Changes_When_Uppercased.js": 479,
	"./Binary_Property/Dash.js": 480,
	"./Binary_Property/Default_Ignorable_Code_Point.js": 481,
	"./Binary_Property/Deprecated.js": 482,
	"./Binary_Property/Diacritic.js": 483,
	"./Binary_Property/Emoji.js": 484,
	"./Binary_Property/Emoji_Component.js": 485,
	"./Binary_Property/Emoji_Modifier.js": 486,
	"./Binary_Property/Emoji_Modifier_Base.js": 487,
	"./Binary_Property/Emoji_Presentation.js": 488,
	"./Binary_Property/Extended_Pictographic.js": 489,
	"./Binary_Property/Extender.js": 490,
	"./Binary_Property/Grapheme_Base.js": 491,
	"./Binary_Property/Grapheme_Extend.js": 492,
	"./Binary_Property/Hex_Digit.js": 493,
	"./Binary_Property/IDS_Binary_Operator.js": 494,
	"./Binary_Property/IDS_Trinary_Operator.js": 495,
	"./Binary_Property/ID_Continue.js": 496,
	"./Binary_Property/ID_Start.js": 497,
	"./Binary_Property/Ideographic.js": 498,
	"./Binary_Property/Join_Control.js": 499,
	"./Binary_Property/Logical_Order_Exception.js": 500,
	"./Binary_Property/Lowercase.js": 501,
	"./Binary_Property/Math.js": 502,
	"./Binary_Property/Noncharacter_Code_Point.js": 503,
	"./Binary_Property/Pattern_Syntax.js": 504,
	"./Binary_Property/Pattern_White_Space.js": 505,
	"./Binary_Property/Quotation_Mark.js": 506,
	"./Binary_Property/Radical.js": 507,
	"./Binary_Property/Regional_Indicator.js": 508,
	"./Binary_Property/Sentence_Terminal.js": 509,
	"./Binary_Property/Soft_Dotted.js": 510,
	"./Binary_Property/Terminal_Punctuation.js": 511,
	"./Binary_Property/Unified_Ideograph.js": 512,
	"./Binary_Property/Uppercase.js": 513,
	"./Binary_Property/Variation_Selector.js": 514,
	"./Binary_Property/White_Space.js": 515,
	"./Binary_Property/XID_Continue.js": 516,
	"./Binary_Property/XID_Start.js": 517,
	"./General_Category/Cased_Letter.js": 518,
	"./General_Category/Close_Punctuation.js": 519,
	"./General_Category/Connector_Punctuation.js": 520,
	"./General_Category/Control.js": 521,
	"./General_Category/Currency_Symbol.js": 522,
	"./General_Category/Dash_Punctuation.js": 523,
	"./General_Category/Decimal_Number.js": 524,
	"./General_Category/Enclosing_Mark.js": 525,
	"./General_Category/Final_Punctuation.js": 526,
	"./General_Category/Format.js": 527,
	"./General_Category/Initial_Punctuation.js": 528,
	"./General_Category/Letter.js": 529,
	"./General_Category/Letter_Number.js": 530,
	"./General_Category/Line_Separator.js": 531,
	"./General_Category/Lowercase_Letter.js": 532,
	"./General_Category/Mark.js": 533,
	"./General_Category/Math_Symbol.js": 534,
	"./General_Category/Modifier_Letter.js": 535,
	"./General_Category/Modifier_Symbol.js": 536,
	"./General_Category/Nonspacing_Mark.js": 537,
	"./General_Category/Number.js": 538,
	"./General_Category/Open_Punctuation.js": 539,
	"./General_Category/Other.js": 540,
	"./General_Category/Other_Letter.js": 541,
	"./General_Category/Other_Number.js": 542,
	"./General_Category/Other_Punctuation.js": 543,
	"./General_Category/Other_Symbol.js": 544,
	"./General_Category/Paragraph_Separator.js": 545,
	"./General_Category/Private_Use.js": 546,
	"./General_Category/Punctuation.js": 547,
	"./General_Category/Separator.js": 548,
	"./General_Category/Space_Separator.js": 549,
	"./General_Category/Spacing_Mark.js": 550,
	"./General_Category/Surrogate.js": 551,
	"./General_Category/Symbol.js": 552,
	"./General_Category/Titlecase_Letter.js": 553,
	"./General_Category/Unassigned.js": 554,
	"./General_Category/Uppercase_Letter.js": 555,
	"./Script/Adlam.js": 556,
	"./Script/Ahom.js": 557,
	"./Script/Anatolian_Hieroglyphs.js": 558,
	"./Script/Arabic.js": 559,
	"./Script/Armenian.js": 560,
	"./Script/Avestan.js": 561,
	"./Script/Balinese.js": 562,
	"./Script/Bamum.js": 563,
	"./Script/Bassa_Vah.js": 564,
	"./Script/Batak.js": 565,
	"./Script/Bengali.js": 566,
	"./Script/Bhaiksuki.js": 567,
	"./Script/Bopomofo.js": 568,
	"./Script/Brahmi.js": 569,
	"./Script/Braille.js": 570,
	"./Script/Buginese.js": 571,
	"./Script/Buhid.js": 572,
	"./Script/Canadian_Aboriginal.js": 573,
	"./Script/Carian.js": 574,
	"./Script/Caucasian_Albanian.js": 575,
	"./Script/Chakma.js": 576,
	"./Script/Cham.js": 577,
	"./Script/Cherokee.js": 578,
	"./Script/Chorasmian.js": 579,
	"./Script/Common.js": 580,
	"./Script/Coptic.js": 581,
	"./Script/Cuneiform.js": 582,
	"./Script/Cypriot.js": 583,
	"./Script/Cyrillic.js": 584,
	"./Script/Deseret.js": 585,
	"./Script/Devanagari.js": 586,
	"./Script/Dives_Akuru.js": 587,
	"./Script/Dogra.js": 588,
	"./Script/Duployan.js": 589,
	"./Script/Egyptian_Hieroglyphs.js": 590,
	"./Script/Elbasan.js": 591,
	"./Script/Elymaic.js": 592,
	"./Script/Ethiopic.js": 593,
	"./Script/Georgian.js": 594,
	"./Script/Glagolitic.js": 595,
	"./Script/Gothic.js": 596,
	"./Script/Grantha.js": 597,
	"./Script/Greek.js": 598,
	"./Script/Gujarati.js": 599,
	"./Script/Gunjala_Gondi.js": 600,
	"./Script/Gurmukhi.js": 601,
	"./Script/Han.js": 602,
	"./Script/Hangul.js": 603,
	"./Script/Hanifi_Rohingya.js": 604,
	"./Script/Hanunoo.js": 605,
	"./Script/Hatran.js": 606,
	"./Script/Hebrew.js": 607,
	"./Script/Hiragana.js": 608,
	"./Script/Imperial_Aramaic.js": 609,
	"./Script/Inherited.js": 610,
	"./Script/Inscriptional_Pahlavi.js": 611,
	"./Script/Inscriptional_Parthian.js": 612,
	"./Script/Javanese.js": 613,
	"./Script/Kaithi.js": 614,
	"./Script/Kannada.js": 615,
	"./Script/Katakana.js": 616,
	"./Script/Kayah_Li.js": 617,
	"./Script/Kharoshthi.js": 618,
	"./Script/Khitan_Small_Script.js": 619,
	"./Script/Khmer.js": 620,
	"./Script/Khojki.js": 621,
	"./Script/Khudawadi.js": 622,
	"./Script/Lao.js": 623,
	"./Script/Latin.js": 624,
	"./Script/Lepcha.js": 625,
	"./Script/Limbu.js": 626,
	"./Script/Linear_A.js": 627,
	"./Script/Linear_B.js": 628,
	"./Script/Lisu.js": 629,
	"./Script/Lycian.js": 630,
	"./Script/Lydian.js": 631,
	"./Script/Mahajani.js": 632,
	"./Script/Makasar.js": 633,
	"./Script/Malayalam.js": 634,
	"./Script/Mandaic.js": 635,
	"./Script/Manichaean.js": 636,
	"./Script/Marchen.js": 637,
	"./Script/Masaram_Gondi.js": 638,
	"./Script/Medefaidrin.js": 639,
	"./Script/Meetei_Mayek.js": 640,
	"./Script/Mende_Kikakui.js": 641,
	"./Script/Meroitic_Cursive.js": 642,
	"./Script/Meroitic_Hieroglyphs.js": 643,
	"./Script/Miao.js": 644,
	"./Script/Modi.js": 645,
	"./Script/Mongolian.js": 646,
	"./Script/Mro.js": 647,
	"./Script/Multani.js": 648,
	"./Script/Myanmar.js": 649,
	"./Script/Nabataean.js": 650,
	"./Script/Nandinagari.js": 651,
	"./Script/New_Tai_Lue.js": 652,
	"./Script/Newa.js": 653,
	"./Script/Nko.js": 654,
	"./Script/Nushu.js": 655,
	"./Script/Nyiakeng_Puachue_Hmong.js": 656,
	"./Script/Ogham.js": 657,
	"./Script/Ol_Chiki.js": 658,
	"./Script/Old_Hungarian.js": 659,
	"./Script/Old_Italic.js": 660,
	"./Script/Old_North_Arabian.js": 661,
	"./Script/Old_Permic.js": 662,
	"./Script/Old_Persian.js": 663,
	"./Script/Old_Sogdian.js": 664,
	"./Script/Old_South_Arabian.js": 665,
	"./Script/Old_Turkic.js": 666,
	"./Script/Oriya.js": 667,
	"./Script/Osage.js": 668,
	"./Script/Osmanya.js": 669,
	"./Script/Pahawh_Hmong.js": 670,
	"./Script/Palmyrene.js": 671,
	"./Script/Pau_Cin_Hau.js": 672,
	"./Script/Phags_Pa.js": 673,
	"./Script/Phoenician.js": 674,
	"./Script/Psalter_Pahlavi.js": 675,
	"./Script/Rejang.js": 676,
	"./Script/Runic.js": 677,
	"./Script/Samaritan.js": 678,
	"./Script/Saurashtra.js": 679,
	"./Script/Sharada.js": 680,
	"./Script/Shavian.js": 681,
	"./Script/Siddham.js": 682,
	"./Script/SignWriting.js": 683,
	"./Script/Sinhala.js": 684,
	"./Script/Sogdian.js": 685,
	"./Script/Sora_Sompeng.js": 686,
	"./Script/Soyombo.js": 687,
	"./Script/Sundanese.js": 688,
	"./Script/Syloti_Nagri.js": 689,
	"./Script/Syriac.js": 690,
	"./Script/Tagalog.js": 691,
	"./Script/Tagbanwa.js": 692,
	"./Script/Tai_Le.js": 693,
	"./Script/Tai_Tham.js": 694,
	"./Script/Tai_Viet.js": 695,
	"./Script/Takri.js": 696,
	"./Script/Tamil.js": 697,
	"./Script/Tangut.js": 698,
	"./Script/Telugu.js": 699,
	"./Script/Thaana.js": 700,
	"./Script/Thai.js": 701,
	"./Script/Tibetan.js": 702,
	"./Script/Tifinagh.js": 703,
	"./Script/Tirhuta.js": 704,
	"./Script/Ugaritic.js": 705,
	"./Script/Vai.js": 706,
	"./Script/Wancho.js": 707,
	"./Script/Warang_Citi.js": 708,
	"./Script/Yezidi.js": 709,
	"./Script/Yi.js": 710,
	"./Script/Zanabazar_Square.js": 711,
	"./Script_Extensions/Adlam.js": 712,
	"./Script_Extensions/Ahom.js": 713,
	"./Script_Extensions/Anatolian_Hieroglyphs.js": 714,
	"./Script_Extensions/Arabic.js": 715,
	"./Script_Extensions/Armenian.js": 716,
	"./Script_Extensions/Avestan.js": 717,
	"./Script_Extensions/Balinese.js": 718,
	"./Script_Extensions/Bamum.js": 719,
	"./Script_Extensions/Bassa_Vah.js": 720,
	"./Script_Extensions/Batak.js": 721,
	"./Script_Extensions/Bengali.js": 722,
	"./Script_Extensions/Bhaiksuki.js": 723,
	"./Script_Extensions/Bopomofo.js": 724,
	"./Script_Extensions/Brahmi.js": 725,
	"./Script_Extensions/Braille.js": 726,
	"./Script_Extensions/Buginese.js": 727,
	"./Script_Extensions/Buhid.js": 728,
	"./Script_Extensions/Canadian_Aboriginal.js": 729,
	"./Script_Extensions/Carian.js": 730,
	"./Script_Extensions/Caucasian_Albanian.js": 731,
	"./Script_Extensions/Chakma.js": 732,
	"./Script_Extensions/Cham.js": 733,
	"./Script_Extensions/Cherokee.js": 734,
	"./Script_Extensions/Chorasmian.js": 735,
	"./Script_Extensions/Common.js": 736,
	"./Script_Extensions/Coptic.js": 737,
	"./Script_Extensions/Cuneiform.js": 738,
	"./Script_Extensions/Cypriot.js": 739,
	"./Script_Extensions/Cyrillic.js": 740,
	"./Script_Extensions/Deseret.js": 741,
	"./Script_Extensions/Devanagari.js": 742,
	"./Script_Extensions/Dives_Akuru.js": 743,
	"./Script_Extensions/Dogra.js": 744,
	"./Script_Extensions/Duployan.js": 745,
	"./Script_Extensions/Egyptian_Hieroglyphs.js": 746,
	"./Script_Extensions/Elbasan.js": 747,
	"./Script_Extensions/Elymaic.js": 748,
	"./Script_Extensions/Ethiopic.js": 749,
	"./Script_Extensions/Georgian.js": 750,
	"./Script_Extensions/Glagolitic.js": 751,
	"./Script_Extensions/Gothic.js": 752,
	"./Script_Extensions/Grantha.js": 753,
	"./Script_Extensions/Greek.js": 754,
	"./Script_Extensions/Gujarati.js": 755,
	"./Script_Extensions/Gunjala_Gondi.js": 756,
	"./Script_Extensions/Gurmukhi.js": 757,
	"./Script_Extensions/Han.js": 758,
	"./Script_Extensions/Hangul.js": 759,
	"./Script_Extensions/Hanifi_Rohingya.js": 760,
	"./Script_Extensions/Hanunoo.js": 761,
	"./Script_Extensions/Hatran.js": 762,
	"./Script_Extensions/Hebrew.js": 763,
	"./Script_Extensions/Hiragana.js": 764,
	"./Script_Extensions/Imperial_Aramaic.js": 765,
	"./Script_Extensions/Inherited.js": 766,
	"./Script_Extensions/Inscriptional_Pahlavi.js": 767,
	"./Script_Extensions/Inscriptional_Parthian.js": 768,
	"./Script_Extensions/Javanese.js": 769,
	"./Script_Extensions/Kaithi.js": 770,
	"./Script_Extensions/Kannada.js": 771,
	"./Script_Extensions/Katakana.js": 772,
	"./Script_Extensions/Kayah_Li.js": 773,
	"./Script_Extensions/Kharoshthi.js": 774,
	"./Script_Extensions/Khitan_Small_Script.js": 775,
	"./Script_Extensions/Khmer.js": 776,
	"./Script_Extensions/Khojki.js": 777,
	"./Script_Extensions/Khudawadi.js": 778,
	"./Script_Extensions/Lao.js": 779,
	"./Script_Extensions/Latin.js": 780,
	"./Script_Extensions/Lepcha.js": 781,
	"./Script_Extensions/Limbu.js": 782,
	"./Script_Extensions/Linear_A.js": 783,
	"./Script_Extensions/Linear_B.js": 784,
	"./Script_Extensions/Lisu.js": 785,
	"./Script_Extensions/Lycian.js": 786,
	"./Script_Extensions/Lydian.js": 787,
	"./Script_Extensions/Mahajani.js": 788,
	"./Script_Extensions/Makasar.js": 789,
	"./Script_Extensions/Malayalam.js": 790,
	"./Script_Extensions/Mandaic.js": 791,
	"./Script_Extensions/Manichaean.js": 792,
	"./Script_Extensions/Marchen.js": 793,
	"./Script_Extensions/Masaram_Gondi.js": 794,
	"./Script_Extensions/Medefaidrin.js": 795,
	"./Script_Extensions/Meetei_Mayek.js": 796,
	"./Script_Extensions/Mende_Kikakui.js": 797,
	"./Script_Extensions/Meroitic_Cursive.js": 798,
	"./Script_Extensions/Meroitic_Hieroglyphs.js": 799,
	"./Script_Extensions/Miao.js": 800,
	"./Script_Extensions/Modi.js": 801,
	"./Script_Extensions/Mongolian.js": 802,
	"./Script_Extensions/Mro.js": 803,
	"./Script_Extensions/Multani.js": 804,
	"./Script_Extensions/Myanmar.js": 805,
	"./Script_Extensions/Nabataean.js": 806,
	"./Script_Extensions/Nandinagari.js": 807,
	"./Script_Extensions/New_Tai_Lue.js": 808,
	"./Script_Extensions/Newa.js": 809,
	"./Script_Extensions/Nko.js": 810,
	"./Script_Extensions/Nushu.js": 811,
	"./Script_Extensions/Nyiakeng_Puachue_Hmong.js": 812,
	"./Script_Extensions/Ogham.js": 813,
	"./Script_Extensions/Ol_Chiki.js": 814,
	"./Script_Extensions/Old_Hungarian.js": 815,
	"./Script_Extensions/Old_Italic.js": 816,
	"./Script_Extensions/Old_North_Arabian.js": 817,
	"./Script_Extensions/Old_Permic.js": 818,
	"./Script_Extensions/Old_Persian.js": 819,
	"./Script_Extensions/Old_Sogdian.js": 820,
	"./Script_Extensions/Old_South_Arabian.js": 821,
	"./Script_Extensions/Old_Turkic.js": 822,
	"./Script_Extensions/Oriya.js": 823,
	"./Script_Extensions/Osage.js": 824,
	"./Script_Extensions/Osmanya.js": 825,
	"./Script_Extensions/Pahawh_Hmong.js": 826,
	"./Script_Extensions/Palmyrene.js": 827,
	"./Script_Extensions/Pau_Cin_Hau.js": 828,
	"./Script_Extensions/Phags_Pa.js": 829,
	"./Script_Extensions/Phoenician.js": 830,
	"./Script_Extensions/Psalter_Pahlavi.js": 831,
	"./Script_Extensions/Rejang.js": 832,
	"./Script_Extensions/Runic.js": 833,
	"./Script_Extensions/Samaritan.js": 834,
	"./Script_Extensions/Saurashtra.js": 835,
	"./Script_Extensions/Sharada.js": 836,
	"./Script_Extensions/Shavian.js": 837,
	"./Script_Extensions/Siddham.js": 838,
	"./Script_Extensions/SignWriting.js": 839,
	"./Script_Extensions/Sinhala.js": 840,
	"./Script_Extensions/Sogdian.js": 841,
	"./Script_Extensions/Sora_Sompeng.js": 842,
	"./Script_Extensions/Soyombo.js": 843,
	"./Script_Extensions/Sundanese.js": 844,
	"./Script_Extensions/Syloti_Nagri.js": 845,
	"./Script_Extensions/Syriac.js": 846,
	"./Script_Extensions/Tagalog.js": 847,
	"./Script_Extensions/Tagbanwa.js": 848,
	"./Script_Extensions/Tai_Le.js": 849,
	"./Script_Extensions/Tai_Tham.js": 850,
	"./Script_Extensions/Tai_Viet.js": 851,
	"./Script_Extensions/Takri.js": 852,
	"./Script_Extensions/Tamil.js": 853,
	"./Script_Extensions/Tangut.js": 854,
	"./Script_Extensions/Telugu.js": 855,
	"./Script_Extensions/Thaana.js": 856,
	"./Script_Extensions/Thai.js": 857,
	"./Script_Extensions/Tibetan.js": 858,
	"./Script_Extensions/Tifinagh.js": 859,
	"./Script_Extensions/Tirhuta.js": 860,
	"./Script_Extensions/Ugaritic.js": 861,
	"./Script_Extensions/Vai.js": 862,
	"./Script_Extensions/Wancho.js": 863,
	"./Script_Extensions/Warang_Citi.js": 864,
	"./Script_Extensions/Yezidi.js": 865,
	"./Script_Extensions/Yi.js": 866,
	"./Script_Extensions/Zanabazar_Square.js": 867,
	"./index.js": 868,
	"./unicode-version.js": 869
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
webpackContext.id = 464;

/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(0));
var styled_components_1 = __importStar(__webpack_require__(7));
var Theme_1 = __webpack_require__(8);
var StyledValidationErrorMessage = styled_components_1.default.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: ", ";\n  font-family: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  grid-area: e;\n"], ["\n  color: ", ";\n  font-family: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  grid-area: e;\n"])), Theme_1.fromTheme('color', 'text', 'negative'), Theme_1.fromTheme('font', 'error', 'family'), Theme_1.fromTheme('font', 'error', 'size'), Theme_1.fromTheme('font', 'error', 'weight'));
var ValidationErrorMessage = function (props) {
    var id = props.id, children = props.children;
    var theme = react_1.useContext(styled_components_1.ThemeContext);
    return (react_1.default.createElement(StyledValidationErrorMessage, { id: id, theme: theme, role: "alert", "aria-live": "assertive" }, children));
};
exports.default = ValidationErrorMessage;
var templateObject_1;


/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(0));
var styled_components_1 = __importStar(__webpack_require__(7));
var InputLabel_1 = __webpack_require__(38);
var generateGrid = function (labelPosition, isLabelVisible) {
    if (!isLabelVisible) {
        return "\"i i i\"\n            \"e e e\"";
    }
    if (labelPosition === InputLabel_1.POSITION.RIGHT) {
        return "\"i l l\"\n            \". e e\"";
    }
    return "\"l i i\"\n          \". e e\"";
};
var StyledCheckLabel = styled_components_1.default.label(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: ", ";\n  grid-template-rows: ", ";\n  grid-template-areas: ", ";\n  align-items: baseline;\n  gap: ", ";\n"], ["\n  display: grid;\n  grid-template-columns: ",
    ";\n  grid-template-rows: ",
    ";\n  grid-template-areas: ",
    ";\n  align-items: baseline;\n  gap: ", ";\n"])), function (_a) {
    var labelPosition = _a.labelPosition;
    return (labelPosition === InputLabel_1.POSITION.RIGHT
        ? 'auto minmax(0, 1fr)'
        : 'repeat(3, 1fr)');
}, function (_a) {
    var hideError = _a.hideError;
    return ((hideError)
        ? '1fr'
        : '1fr minmax(1em, max-content)');
}, function (_a) {
    var labelPosition = _a.labelPosition, isLabelVisible = _a.isLabelVisible;
    return (generateGrid(labelPosition, isLabelVisible));
}, function (_a) {
    var theme = _a.theme;
    return (theme.ws.xsmall) + ' ' + (theme.ws.xsmall);
});
var StyledCheckLabelText = styled_components_1.default.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: ", ";\n  grid-area: l;\n  justify-self: ", ";\n  color: ", ";\n"], ["\n  display: ", ";\n  grid-area: l;\n  justify-self: ",
    ";\n  color: ",
    ";\n"])), function (_a) {
    var isLabelVisible = _a.isLabelVisible;
    return (isLabelVisible ? 'inline' : 'none');
}, function (_a) {
    var labelPosition = _a.labelPosition;
    return (labelPosition === InputLabel_1.POSITION.RIGHT
        ? 'start'
        : 'end');
}, function (_a) {
    var theme = _a.theme, disabled = _a.disabled;
    return ((disabled)
        ? "" + theme.color.text.medium
        : "" + theme.color.text.dark);
});
var CheckLabel = function (props) {
    var htmlFor = props.htmlFor, label = props.label, labelPosition = props.labelPosition, isLabelVisible = props.isLabelVisible, children = props.children, isRequired = props.isRequired, disabled = props.disabled, hideError = props.hideError;
    var theme = react_1.useContext(styled_components_1.ThemeContext);
    return (react_1.default.createElement(StyledCheckLabel, { htmlFor: htmlFor, labelPosition: labelPosition, theme: theme, isLabelVisible: isLabelVisible, hideError: hideError },
        react_1.default.createElement(StyledCheckLabelText, { isLabelVisible: isLabelVisible, labelPosition: labelPosition, disabled: disabled },
            react_1.default.createElement(react_1.default.Fragment, null,
                label,
                isRequired && react_1.default.createElement(InputLabel_1.RequiredSymbol, null, "*"))),
        children));
};
CheckLabel.defaultProps = {
    labelPosition: InputLabel_1.POSITION.LEFT,
    isLabelVisible: true,
    disabled: false,
    hideError: false,
};
StyledCheckLabel.defaultProps = {
    labelPosition: InputLabel_1.POSITION.LEFT,
    isLabelVisible: true,
    hideError: false,
};
exports.default = CheckLabel;
var templateObject_1, templateObject_2;


/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(0));
var styled_components_1 = __webpack_require__(7);
var GlobalCSS_1 = __importDefault(__webpack_require__(143));
var MarkOneTheme_1 = __importDefault(__webpack_require__(452));
var MarkOneWrapper = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement(styled_components_1.ThemeProvider, { theme: MarkOneTheme_1.default },
        react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(GlobalCSS_1.default, null),
            children)));
};
exports.default = MarkOneWrapper;


/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
var MarkOneWrapper_1 = __webpack_require__(76);
Object.defineProperty(exports, "MarkOneWrapper", { enumerable: true, get: function () { return MarkOneWrapper_1.default; } });
Object.defineProperty(exports, "MarkOneProps", { enumerable: true, get: function () { return MarkOneWrapper_1.MarkOneProps; } });
__exportStar(__webpack_require__(243), exports);


/***/ }),

/***/ 884:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = { 'react': __webpack_require__(0) };
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);", requireInRuntime);

module.exports = [{
        'type': 'markdown',
        'content': '# Adding Components to the Library\n\n## Code Style\n\nEach file should contain only one component, and that component should be the default export of the file.\n\nComponents should be re-exported from the `index.ts` file in its directory.\n\nPrefer functional components wherever possible, using [hooks](https://reactjs.org/docs/hooks-reference.html) to manage state if necessary.\n\nAll components should conform to eslint rules defined in `.eslintrc.json`. Check code with `npm run lint`.\n\n## Styled Components\n\nWe\'re using [`styled-components`](https://www.styled-components.com/) to apply css styles to components.\n\nValues for colors, spacing, text sizes/styles, etc. should be defined as part of [the global theme](https://www.styled-components.com/docs/advanced#theming) in `src/Theme/BaseTheme.ts`\n\n## Typescript\n\nAll components in the library should be written in Typescript with the `.tsx` extension.\n\nProps for each component should be defined in an interface, which should be a named export alongside the component.\n\nYou can check your typing by running `npm run typecheck`\n\n## Testing\n\nWe\'re using [`mocha`](https://mochajs.org/) and [`testing-library/react`](https://testing-library.com/docs/react-testing-library/intro) to test components. \n\n-   `npm run test` will run the test suite once and print a coverage report.\n-   `npm run test:watch` will watch the src directory and re-run tests on changes, without a coverage report.\n\nComponent tests should ensure that any conditional rendering logic works as expected, and that handlers/behaviors run in the expected situations.\n\nTests should be written in a file called `__tests__/Component.test.tsx` within the same subdirectory as the component.\n\n## Documentation\n\n[React Styleguidist](https://react-styleguidist.js.org) is used to create documentation.\n\n-   `npm run start` will bring up a hot-reloading dev server during development.\n\n-   `npm run build` will generate static html documentation.\n\nIn your component file, you can add additional context to your props interface by adding `/** jsdoc-style comments */` above the fields.\n\nAdditional details about the component should be added above the component definition in a docblock. For example:\n\n```tsx\n<span class="token comment">// src/demo/Test.tsx</span>\n\n<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span>ReactChildren<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">ITestProps</span> <span class="token punctuation">{</span>\n  <span class="token comment">/** Text to display in the div */</span>\n  children<span class="token operator">:</span> ReactChildren<span class="token punctuation">;</span>\n  <span class="token comment">/** background color of the div */</span>\n  color<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n  \n<span class="token comment">/**\n * Test div\n **/</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">Test</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">props<span class="token operator">:</span> ITestProps</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>background<span class="token operator">:</span> props<span class="token punctuation">.</span>color<span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>children<span class="token punctuation">}</span><span class="token plain-text">\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> Test<span class="token punctuation">;</span>\n```\n\n## Component Examples\n\nStyleguidist will also render usage examples for components, which can be helpful during development. \n\nYou\'ll need to create an example file under the top-level `examples` directory for each component under `src`. This file should replicate the sub-directory structure of the `src` directory, with a `.md` extension. (e.g. `src/buttons/TestButton.tsx` would have an example file of `src/buttons/TestButton.md`)\n\nThe example file can use any valid markdown, and fenced code blocks with a `jsx` type will render as a modifiable component in the documentation.\n\n````markdown\n// examples/demo/Test.md\n\nRenders the children in a div, with an optional background color\n\n<span class="token code"><span class="token punctuation">```</span><span class="token code-language"> jsx</span>\n<span class="token code-block language-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Test</span></span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#abcabc<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Testing Color #abcabc</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Test</span></span><span class="token punctuation">></span></span></span>\n<span class="token punctuation">```</span></span>\n\nTesting another color\n\n<span class="token code"><span class="token punctuation">```</span><span class="token code-language"> jsx</span>\n<span class="token code-block language-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Test</span></span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#fafafa<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Testing color #fafafa</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Test</span></span><span class="token punctuation">></span></span></span>\n<span class="token punctuation">```</span></span>\n````\n\n## Folder Structure\n\nAfter adding your component, tests, and examples, your should have the following in your folder structure:\n\n```markdown\nmark-one/\n\u251C\u2500\u2500 examples/\n\u2502   \u2514\u2500\u2500 demo/\n\u2502       \u2514\u2500\u2500TestComponent.md\n\u2514\u2500\u2500 src/\n    \u251C\u2500\u2500 demo/\n    \u2502   \u251C\u2500\u2500 <span class="token bold"><span class="token punctuation">__</span><span class="token content">tests</span><span class="token punctuation">__</span></span>/\n    |   \u2502   \u2514\u2500\u2500TestComponent.test.tsx\n    \u2502   \u251C\u2500\u2500index.ts\n    \u2502   \u2514\u2500\u2500TestComponent.tsx\n    \u2514\u2500\u2500index.ts\n```'
    }]
	

/***/ }),

/***/ 885:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = { 'react': __webpack_require__(0) };
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);", requireInRuntime);

module.exports = [{
        'type': 'markdown',
        'content': '# Mark One\n\n[![Travis](https://img.shields.io/travis/com/seas-computing/mark-one.svg)](https://travis-ci.com/seas-computing/mark-one)\n[![Codecov](https://img.shields.io/codecov/c/gh/seas-computing/mark-one.svg)](https://codecov.io/gh/seas-computing/mark-one)\n[![Styleguidist](https://img.shields.io/badge/docs-Styleguidist-red.svg)](https://seas-computing.github.io/mark-one/)\n![GitHub top language](https://img.shields.io/github/languages/top/seas-computing/mark-one.svg)\n[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v1.4%20adopted-ff69b4.svg)](code-of-conduct.md)\n![BSD License](https://img.shields.io/github/license/seas-computing/mark-one)\n\nA React UI library in development at the Harvard John A. Paulson School of Engineering and Applied Sciences.\n\n## Installing\n\n> This project is currently under development, and all components are liable to change significantly between version. You should not use this in a production app unless you know what you\'re doing.\n\nMark One can be installed from NPM:\n\n```bash\n<span class="token function">npm</span> <span class="token function">install</span> mark-one\n```\n\nComponents can be imported and used individually in projects.\n\n```tsx\n<span class="token keyword">import</span> <span class="token punctuation">{</span> BasicButton <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'mark-one\'</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">BasicButton</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    Click Me!\n  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">BasicButton</span></span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span>\n```\n\n## Structure\n\nAll components are defined under the `./src` directory, divided into subdirectories by category. Tests live alongside the code in `__tests__` directories.\n\n### Buttons\n\nDefines standard `Button` along with variants for confirm/deny actions, toggled labels, Icon-only buttons, and others.\n\n### Forms\n\nComponents for handling the layout and behavior of forms, such as field sets, collapsible panels, etc.\n\n### Inputs\n\nText fields, checkboxes, radio buttons, text areas, select boxes, etc.\n\n### Indicators\n\nElements to indicate whether an asynchronous process is in progress, such as a data upload or fetch from the server.\n\n### Layout\n\nHigh-level page structure components, including headers, modals, etc.\n\n## Adding Components\n\nGuidelines for adding components are defined in [`CONTRIBUTING.md`](CONTRIBUTING.md)\n\n## Documentation\n\nWe\'re using [React Styleguidist](https://react-styleguidist.js.org/) to generate our documentation.'
    }]
	

/***/ }),

/***/ 886:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = { 'react': __webpack_require__(0) };
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);", requireInRuntime);

module.exports = [{
        'type': 'markdown',
        'content': 'This is a dummy page to be filled with details about user interaction.'
    }]
	

/***/ }),

/***/ 887:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'BorderlessButton',
    'description': '',
    'methods': [],
    'props': [
        {
            'defaultValue': null,
            'description': 'Function to call on click event',
            'name': 'onClick',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Buttons/BorderlessButton.tsx',
                'name': 'BorderlessButtonProps'
            },
            'required': true,
            'type': { 'name': '(event: MouseEvent<Element, MouseEvent>) => void' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'Specifies the alt text for screen readers',
            'name': 'alt',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Theme/MarkOneWrapper.tsx',
                'name': 'MarkOneProps'
            },
            'required': false,
            'type': { 'name': 'string' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'Specifies the Font Awesome Icon(s)',
            'name': 'children',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Buttons/BorderlessButton.tsx',
                'name': 'BorderlessButtonProps'
            },
            'required': false,
            'type': { 'name': 'string | number | boolean | {} | ReactElement<any, string | ((props: any) => ReactElement<any, string | ... | (new (props: any) => Component<any, any, any>)>) | (new (props: any) => Component<...>)> | ReactNodeArray | ReactPortal | ReactElement<...>' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'If true, button won\'t fire',
            'name': 'disabled',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Buttons/BorderlessButton.tsx',
                'name': 'BorderlessButtonProps'
            },
            'required': false,
            'type': { 'name': 'boolean' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'Specifies the ref of the element',
            'name': 'forwardRef',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Theme/MarkOneWrapper.tsx',
                'name': 'MarkOneProps'
            },
            'required': false,
            'type': { 'name': 'Ref<HTMLButtonElement>' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'The id of the button',
            'name': 'id',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Buttons/BorderlessButton.tsx',
                'name': 'BorderlessButtonProps'
            },
            'required': false,
            'type': { 'name': 'string' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'Corresponds to HTML attribute tabindex',
            'name': 'tabIndex',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Theme/MarkOneWrapper.tsx',
                'name': 'MarkOneProps'
            },
            'required': false,
            'type': { 'name': 'number' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': 'VARIANT.BASE' },
            'description': 'Allows you to pass in a variant property from the VARIANT enum',
            'name': 'variant',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Buttons/BorderlessButton.tsx',
                'name': 'BorderlessButtonProps'
            },
            'required': false,
            'type': { 'name': 'VARIANT' },
            'tags': {}
        }
    ],
    'examples': __webpack_require__(888)
}
	

/***/ }),

/***/ 888:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'mark-one': __webpack_require__(15),
    '@fortawesome/react-fontawesome': __webpack_require__(56),
    '@fortawesome/free-solid-svg-icons': __webpack_require__(57),
    'react': __webpack_require__(0),
    './../../src/Buttons/BorderlessButton.tsx': __webpack_require__(147)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst BorderlessButton$0 = require('./../../src/Buttons/BorderlessButton.tsx');\nconst BorderlessButton = BorderlessButton$0.default || (BorderlessButton$0['BorderlessButton'] || BorderlessButton$0);", requireInRuntime);

module.exports = [
    {
        'type': 'markdown',
        'content': 'The following is an example of a borderless button in which the `variant` property defaults to the enum value `VARIANT.BASE`.'
    },
    {
        'type': 'code',
        'content': 'import { VARIANT } from \'mark-one\';\nimport { FontAwesomeIcon } from \'@fortawesome/react-fontawesome\';\nimport { faArrowUp } from \'@fortawesome/free-solid-svg-icons\';\n\n<BorderlessButton\n  onClick={function() {\n    alert(\'You clicked the borderless button in which variant equals VARIANT.BASE\')\n  }}\n  variant={VARIANT.BASE}\n>\n  <FontAwesomeIcon icon={faArrowUp} size="lg" />\n</BorderlessButton>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'The following is an example of a borderless button in which the `variant` property is set to the enum value `VARIANT.PRIMARY`.'
    },
    {
        'type': 'code',
        'content': 'import { VARIANT } from \'mark-one\';\nimport { FontAwesomeIcon } from \'@fortawesome/react-fontawesome\';\nimport { faEnvelope } from \'@fortawesome/free-solid-svg-icons\';\n\n<BorderlessButton\n  onClick={function() {\n    alert(\'You clicked the borderless button in which variant equals VARIANT.PRIMARY\')\n  }}\n  variant={VARIANT.PRIMARY}\n>\n  <FontAwesomeIcon icon={faEnvelope} size="lg" />\n</BorderlessButton>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'The following is an example of a borderless button in which the `variant` property is set to the enum value `VARIANT.SECONDARY`.'
    },
    {
        'type': 'code',
        'content': 'import { VARIANT } from \'mark-one\';\nimport { FontAwesomeIcon } from \'@fortawesome/react-fontawesome\';\nimport { faTimes } from \'@fortawesome/free-solid-svg-icons\';\n\n<BorderlessButton\n  onClick={function() {\n    alert(\'You clicked the borderless button in which variant equals VARIANT.SECONDARY\')\n  }}\n  variant={VARIANT.SECONDARY}\n>\n  <FontAwesomeIcon icon={faTimes} size="lg" />\n</BorderlessButton>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'The following is an example of a borderless button in which the `variant` property is set to the enum value `VARIANT.INFO`.'
    },
    {
        'type': 'code',
        'content': 'import { VARIANT } from \'mark-one\';\nimport { FontAwesomeIcon } from \'@fortawesome/react-fontawesome\';\nimport { faQuestion } from \'@fortawesome/free-solid-svg-icons\';\n\n<BorderlessButton\n  onClick={function() {\n    alert(\'You clicked the borderless button in which variant equals VARIANT.INFO\')\n  }}\n  variant={VARIANT.INFO}\n>\n  <FontAwesomeIcon icon={faQuestion} size="lg" />\n</BorderlessButton>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'The following is an example of a borderless button in which the `variant` property is set to the enum value `VARIANT.DANGER`.'
    },
    {
        'type': 'code',
        'content': 'import { VARIANT } from \'mark-one\';\nimport { FontAwesomeIcon } from \'@fortawesome/react-fontawesome\';\nimport { faTrash } from \'@fortawesome/free-solid-svg-icons\';\n\n<BorderlessButton\n  onClick={function() {\n    alert(\'You clicked the borderless button in which variant equals VARIANT.DANGER\')\n  }}\n  variant={VARIANT.DANGER}\n>\n  <FontAwesomeIcon icon={faTrash} size="lg" />\n</BorderlessButton>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': '### With the `forwardRef`\n\nRef example: The optional `forwardRef` property is set. When the primary themed button is clicked, the focus shifts to the borderless button.'
    },
    {
        'type': 'code',
        'content': 'import {\n  useState,\n  useRef,\n} from \'react\';\nimport {\n  Button,\n  VARIANT,\n  } from \'mark-one\';\nimport { FontAwesomeIcon } from \'@fortawesome/react-fontawesome\';\nimport { faTrash } from \'@fortawesome/free-solid-svg-icons\';\n\nconst BorderlessButtonRefExample = () => {\n  const ref = useRef(null);\n  const [value, setValue] = useState(\'\');\n  const onButtonClick = () => {\n    ref.current.focus();\n  }\n  return (\n    <>\n    <Button\n      onClick={onButtonClick}\n      variant={VARIANT.PRIMARY}\n    >\n      Focus the Borderless Button\n    </Button>\n    <BorderlessButton\n      onClick={function() {\n        alert(\'You clicked the borderless button in which variant equals VARIANT.DANGER\')\n      }}\n      variant={VARIANT.DANGER}\n      forwardRef={ref}\n      alt="testing delete"\n    >\n      <FontAwesomeIcon icon={faTrash} size="lg" />\n    </BorderlessButton>\n    </>\n  );\n};\n<BorderlessButtonRefExample />',
        'settings': {},
        'evalInContext': evalInContext
    }
]
	

/***/ }),

/***/ 889:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Header_1 = __webpack_require__(155);
Object.defineProperty(exports, "Header", { enumerable: true, get: function () { return Header_1.default; } });
var Logo_1 = __webpack_require__(156);
Object.defineProperty(exports, "Logo", { enumerable: true, get: function () { return Logo_1.default; } });
var PageBody_1 = __webpack_require__(157);
Object.defineProperty(exports, "PageBody", { enumerable: true, get: function () { return PageBody_1.default; } });


/***/ }),

/***/ 890:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TabList_1 = __webpack_require__(158);
Object.defineProperty(exports, "TabList", { enumerable: true, get: function () { return TabList_1.default; } });
var TabListItem_1 = __webpack_require__(159);
Object.defineProperty(exports, "TabListItem", { enumerable: true, get: function () { return TabListItem_1.default; } });


/***/ }),

/***/ 891:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Table_1 = __webpack_require__(160);
Object.defineProperty(exports, "Table", { enumerable: true, get: function () { return Table_1.default; } });
var TableCell_1 = __webpack_require__(109);
Object.defineProperty(exports, "TableCell", { enumerable: true, get: function () { return TableCell_1.default; } });
Object.defineProperty(exports, "ALIGN", { enumerable: true, get: function () { return TableCell_1.ALIGN; } });
Object.defineProperty(exports, "VALIGN", { enumerable: true, get: function () { return TableCell_1.VALIGN; } });
var TableCellList_1 = __webpack_require__(161);
Object.defineProperty(exports, "TableCellList", { enumerable: true, get: function () { return TableCellList_1.default; } });
var TableCellListItem_1 = __webpack_require__(162);
Object.defineProperty(exports, "TableCellListItem", { enumerable: true, get: function () { return TableCellListItem_1.default; } });
var TableRow_1 = __webpack_require__(163);
Object.defineProperty(exports, "TableRow", { enumerable: true, get: function () { return TableRow_1.default; } });
var TableHead_1 = __webpack_require__(164);
Object.defineProperty(exports, "TableHead", { enumerable: true, get: function () { return TableHead_1.default; } });
var TableHeadingCell_1 = __webpack_require__(165);
Object.defineProperty(exports, "TableHeadingCell", { enumerable: true, get: function () { return TableHeadingCell_1.default; } });
var TableHeadingSpacer_1 = __webpack_require__(166);
Object.defineProperty(exports, "TableHeadingSpacer", { enumerable: true, get: function () { return TableHeadingSpacer_1.default; } });
var TableBody_1 = __webpack_require__(167);
Object.defineProperty(exports, "TableBody", { enumerable: true, get: function () { return TableBody_1.default; } });
var TableRowHeadingCell_1 = __webpack_require__(168);
Object.defineProperty(exports, "TableRowHeadingCell", { enumerable: true, get: function () { return TableRowHeadingCell_1.default; } });


/***/ }),

/***/ 892:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var IconLink_1 = __webpack_require__(169);
Object.defineProperty(exports, "IconLink", { enumerable: true, get: function () { return IconLink_1.default; } });


/***/ }),

/***/ 893:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ValidationErrorMessage_1 = __webpack_require__(52);
Object.defineProperty(exports, "ValidationErrorMessage", { enumerable: true, get: function () { return ValidationErrorMessage_1.default; } });
var TextInput_1 = __webpack_require__(110);
Object.defineProperty(exports, "TextInput", { enumerable: true, get: function () { return TextInput_1.default; } });
var Dropdown_1 = __webpack_require__(170);
Object.defineProperty(exports, "Dropdown", { enumerable: true, get: function () { return Dropdown_1.default; } });
var Checkbox_1 = __webpack_require__(171);
Object.defineProperty(exports, "Checkbox", { enumerable: true, get: function () { return Checkbox_1.default; } });
var Combobox_1 = __webpack_require__(172);
Object.defineProperty(exports, "Combobox", { enumerable: true, get: function () { return Combobox_1.default; } });
var InputLabel_1 = __webpack_require__(38);
Object.defineProperty(exports, "InputLabel", { enumerable: true, get: function () { return InputLabel_1.default; } });
Object.defineProperty(exports, "POSITION", { enumerable: true, get: function () { return InputLabel_1.POSITION; } });
var CheckLabel_1 = __webpack_require__(75);
Object.defineProperty(exports, "CheckLabel", { enumerable: true, get: function () { return CheckLabel_1.default; } });
var Fieldset_1 = __webpack_require__(173);
Object.defineProperty(exports, "Fieldset", { enumerable: true, get: function () { return Fieldset_1.default; } });
var RadioButton_1 = __webpack_require__(178);
Object.defineProperty(exports, "RadioButton", { enumerable: true, get: function () { return RadioButton_1.default; } });
var Form_1 = __webpack_require__(179);
Object.defineProperty(exports, "Form", { enumerable: true, get: function () { return Form_1.default; } });


/***/ }),

/***/ 897:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Modal_1 = __webpack_require__(180);
Object.defineProperty(exports, "Modal", { enumerable: true, get: function () { return Modal_1.default; } });
var ModalBody_1 = __webpack_require__(181);
Object.defineProperty(exports, "ModalBody", { enumerable: true, get: function () { return ModalBody_1.default; } });
var ModalFooter_1 = __webpack_require__(182);
Object.defineProperty(exports, "ModalFooter", { enumerable: true, get: function () { return ModalFooter_1.default; } });
var ModalHeader_1 = __webpack_require__(183);
Object.defineProperty(exports, "ModalHeader", { enumerable: true, get: function () { return ModalHeader_1.default; } });
var ModalMessage_1 = __webpack_require__(184);
Object.defineProperty(exports, "ModalMessage", { enumerable: true, get: function () { return ModalMessage_1.default; } });


/***/ }),

/***/ 898:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Link_1 = __webpack_require__(185);
Object.defineProperty(exports, "Link", { enumerable: true, get: function () { return Link_1.default; } });
var ExternalLink_1 = __webpack_require__(186);
Object.defineProperty(exports, "ExternalLink", { enumerable: true, get: function () { return ExternalLink_1.default; } });


/***/ }),

/***/ 900:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LoadSpinner_1 = __webpack_require__(187);
Object.defineProperty(exports, "LoadSpinner", { enumerable: true, get: function () { return LoadSpinner_1.default; } });
var LoadSpinnerText_1 = __webpack_require__(112);
Object.defineProperty(exports, "SPINNER_TEXT", { enumerable: true, get: function () { return LoadSpinnerText_1.SPINNER_TEXT; } });


/***/ }),

/***/ 901:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'Button',
    'description': '',
    'methods': [],
    'props': [
        {
            'defaultValue': null,
            'description': 'Function to call on click event',
            'name': 'onClick',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Buttons/Button.tsx',
                'name': 'ButtonProps'
            },
            'required': true,
            'type': { 'name': '(event: MouseEvent<Element, MouseEvent>) => void' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'Specifies the alt text for screen readers',
            'name': 'alt',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Theme/MarkOneWrapper.tsx',
                'name': 'MarkOneProps'
            },
            'required': false,
            'type': { 'name': 'string' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': '' },
            'description': 'Text or components to be displayed on the button',
            'name': 'children',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Buttons/Button.tsx',
                'name': 'ButtonProps'
            },
            'required': false,
            'type': { 'name': 'ReactNode' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': null },
            'description': 'Pass through the className to allow wrapping with styled()',
            'name': 'className',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Buttons/Button.tsx',
                'name': 'ButtonProps'
            },
            'required': false,
            'type': { 'name': 'string' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'If true, button won\'t fire',
            'name': 'disabled',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Buttons/Button.tsx',
                'name': 'ButtonProps'
            },
            'required': false,
            'type': { 'name': 'boolean' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'Specifies the ref of the element',
            'name': 'forwardRef',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Theme/MarkOneWrapper.tsx',
                'name': 'MarkOneProps'
            },
            'required': false,
            'type': { 'name': 'Ref<HTMLButtonElement>' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'The id of the button',
            'name': 'id',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Buttons/Button.tsx',
                'name': 'ButtonProps'
            },
            'required': false,
            'type': { 'name': 'string' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'Corresponds to HTML attribute tabindex',
            'name': 'tabIndex',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Theme/MarkOneWrapper.tsx',
                'name': 'MarkOneProps'
            },
            'required': false,
            'type': { 'name': 'number' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': 'VARIANT.BASE' },
            'description': 'Allows you to pass in a variant property from the VARIANT enum',
            'name': 'variant',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Buttons/Button.tsx',
                'name': 'ButtonProps'
            },
            'required': false,
            'type': { 'name': 'VARIANT' },
            'tags': {}
        }
    ],
    'examples': __webpack_require__(902)
}
	

/***/ }),

/***/ 902:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'mark-one': __webpack_require__(15),
    'react': __webpack_require__(0),
    './../../src/Buttons/Button.tsx': __webpack_require__(107)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst Button$0 = require('./../../src/Buttons/Button.tsx');\nconst Button = Button$0.default || (Button$0['Button'] || Button$0);", requireInRuntime);

module.exports = [
    {
        'type': 'markdown',
        'content': 'The following is an example of a basic button in which the `variant` property defaults to the enum value `VARIANT.BASE`.'
    },
    {
        'type': 'code',
        'content': 'import { VARIANT } from \'mark-one\';\n\n<Button\n  onClick={function() {\n    alert(\'You clicked the button\')\n  }}\n  variant={VARIANT.BASE}\n>\n  Click Me!\n</Button>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'The following is an example of a primary button in which the `variant` property is set to `VARIANT.PRIMARY`.'
    },
    {
        'type': 'code',
        'content': 'import { VARIANT } from \'mark-one\';\n\n<Button\n  onClick={function() {\n    alert(\'You clicked the primary button\')\n  }}\n  variant={VARIANT.PRIMARY}\n>\n  Click Me!\n</Button>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'The following is an example of a secondary button in which the `variant` property is set to `VARIANT.SECONDARY`.'
    },
    {
        'type': 'code',
        'content': 'import { VARIANT } from \'mark-one\';\n\n<Button\n  onClick={function() {\n    alert(\'You clicked the secondary button\')\n  }}\n  variant={VARIANT.SECONDARY}\n>\n  Click Me!\n</Button>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'The following is an example of an info button in which the `variant` property is set to `VARIANT.INFO`.'
    },
    {
        'type': 'code',
        'content': 'import { VARIANT } from \'mark-one\';\n\n<Button\n  onClick={function() {\n    alert(\'You clicked the info button\')\n  }}\n  variant={VARIANT.INFO}\n>\n  Click Me!\n</Button>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'The following is an example of a danger button in which the `variant` property is set to `VARIANT.DANGER`.'
    },
    {
        'type': 'code',
        'content': 'import { VARIANT } from \'mark-one\';\n\n<Button\n  onClick={function() {\n    alert(\'You clicked the danger button\')\n  }}\n  variant={VARIANT.DANGER}\n>\n  Click Me!\n</Button>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': '### With the `forwardRef`\n\nRef example: The optional `forwardRef` property is set. When the primary themed button is clicked, the focus shifts to the borderless button.'
    },
    {
        'type': 'code',
        'content': 'import {\n  useState,\n  useRef,\n} from \'react\';\nimport { VARIANT } from \'mark-one\';\n\nconst ButtonRefExample = () => {\n  const ref = useRef(null);\n  const onButtonClick = () => {\n    ref.current.focus();\n  }\n  return (\n    <>\n    <div>\n    <Button\n      onClick={onButtonClick}\n      variant={VARIANT.PRIMARY}\n    >\n      Focus the Other Button\n    </Button>\n    </div>\n    <div>\n    <Button\n      onClick={function() {\n        alert(\'You clicked the button in which variant equals VARIANT.DANGER\')\n      }}\n      variant={VARIANT.DANGER}\n      forwardRef={ref}\n    >\n      Other Button\n    </Button>\n    </div>\n    </>\n  );\n};\n<ButtonRefExample />',
        'settings': {},
        'evalInContext': evalInContext
    }
]
	

/***/ }),

/***/ 903:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'ButtonDropdownMenu',
    'description': 'A component that allows users to specify a Font Awesome icon to be displayed\nin the button and options within the dropdown. When an option is clicked, the\nvalue that was selected is passed to the onChange function and the dropdown\nmenu collapses.\n',
    'methods': [],
    'props': [
        {
            'defaultValue': null,
            'description': 'Specifies the alt text for screen readers',
            'name': 'alt',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Buttons/ButtonDropdownMenu.tsx',
                'name': 'ButtonDropdownProps'
            },
            'required': true,
            'type': { 'name': 'string' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'Specifies the text or Font Awesome Icon displayed on the button',
            'name': 'label',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Buttons/ButtonDropdownMenu.tsx',
                'name': 'ButtonDropdownProps'
            },
            'required': true,
            'type': { 'name': 'ReactNode' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'Our ButtonDropdownMenuItem functional component serves as the children for ButtonDropdownMenu',
            'name': 'children',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Buttons/ButtonDropdownMenu.tsx',
                'name': 'ButtonDropdownProps'
            },
            'required': false,
            'type': { 'name': 'string | number | boolean | {} | ReactElement<any, string | ((props: any) => ReactElement<any, string | ... | (new (props: any) => Component<any, any, any>)>) | (new (props: any) => Component<...>)> | ReactNodeArray | ReactPortal | ButtonDropdownMenuItem | ButtonDropdownMenuItem[]' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'Specifies the ref of the element',
            'name': 'forwardRef',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Buttons/ButtonDropdownMenu.tsx',
                'name': 'ButtonDropdownProps'
            },
            'required': false,
            'type': { 'name': 'Ref<HTMLButtonElement>' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'The id of the button',
            'name': 'id',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Buttons/ButtonDropdownMenu.tsx',
                'name': 'ButtonDropdownProps'
            },
            'required': false,
            'type': { 'name': 'string' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': 'VARIANT.BASE' },
            'description': 'Allows user to pass in a variant property from the VARIANT enum',
            'name': 'variant',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Buttons/ButtonDropdownMenu.tsx',
                'name': 'ButtonDropdownProps'
            },
            'required': false,
            'type': { 'name': 'VARIANT' },
            'tags': {}
        }
    ],
    'tags': {},
    'examples': __webpack_require__(904)
}
	

/***/ }),

/***/ 904:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'react': __webpack_require__(0),
    '@fortawesome/react-fontawesome': __webpack_require__(56),
    '@fortawesome/free-solid-svg-icons': __webpack_require__(57),
    'mark-one': __webpack_require__(15),
    './../../src/Buttons/ButtonDropdownMenu.tsx': __webpack_require__(149)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst ButtonDropdownMenu$0 = require('./../../src/Buttons/ButtonDropdownMenu.tsx');\nconst ButtonDropdownMenu = ButtonDropdownMenu$0.default || (ButtonDropdownMenu$0['ButtonDropdownMenu'] || ButtonDropdownMenu$0);", requireInRuntime);

module.exports = [
    {
        'type': 'markdown',
        'content': 'The following is an example of the `ButtonDropdownMenu` component being used to outline timeslots. When the user clicks the button, a menu dropdown appears containing timeslot options. If the user clicks outside the menu, selects an item in the menu, or clicks the button that opened the menu a second time, the menu will minimize. Users can determine behavior when an option in the dropdown is selected.'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\nimport { FontAwesomeIcon } from \'@fortawesome/react-fontawesome\';\nimport { faClock } from \'@fortawesome/free-solid-svg-icons\';\nimport { ButtonDropdownMenuItem } from \'mark-one\';\n\nconst times = [\n  { \n    startTime: \'09:00\',\n    endTime: \'10:00\',\n    value: \'09:00-10:00\',\n    label: \'9:00AM-10:00AM\',\n  },\n  {\n    startTime: \'10:00\',\n    endTime: \'11:00\',\n    value: \'10:00-11:00\',\n    label: \'10:00AM-11:00AM\',\n  },\n  {\n    startTime: \'11:00\',\n    endTime: \'12:00\',\n    value: \'11:00-12:00\',\n    label: \'11:00AM-12:00PM\',\n  },\n  {\n    startTime: \'12:00\',\n    endTime: \'13:00\',\n    value: \'12:00-13:00\',\n    label: \'12:00PM-1:00PM\',\n  },\n  {\n    startTime: \'13:00\',\n    endTime: \'14:00\',\n    value: \'13:00-14:00\',\n    label: \'1:00PM-2:00PM\',\n  },\n  ];\n\n<ButtonDropdownMenu\n  alt="Timeslot button dropdown"\n  label={<FontAwesomeIcon icon={faClock} size="sm" />}\n>\n  {times.map(({ label, startTime, endTime }) => (\n    <ButtonDropdownMenuItem\n      onClick={function () {\n        alert(\'You chose \' + startTime + \'-\' + endTime);\n      }}\n      key={label}\n    >\n      {label}\n    </ButtonDropdownMenuItem>\n  ))}\n</ButtonDropdownMenu>',
        'settings': {},
        'evalInContext': evalInContext
    }
]
	

/***/ }),

/***/ 905:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'ButtonDropdownMenuItem',
    'description': '',
    'methods': [],
    'props': [{
            'defaultValue': null,
            'description': 'Function to call on click event',
            'name': 'onClick',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Buttons/ButtonDropdownMenuItem.tsx',
                'name': 'ButtonDropdownMenuItemProps'
            },
            'required': true,
            'type': { 'name': '(event: MouseEvent<Element, MouseEvent>) => void' },
            'tags': {}
        }],
    'examples': __webpack_require__(906)
}
	

/***/ }),

/***/ 906:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'react': __webpack_require__(0),
    './../src/Buttons/ButtonDropdownMenuItem.tsx': __webpack_require__(154)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst ButtonDropdownMenuItem$0 = require('./../src/Buttons/ButtonDropdownMenuItem.tsx');\nconst ButtonDropdownMenuItem = ButtonDropdownMenuItem$0.default || (ButtonDropdownMenuItem$0['ButtonDropdownMenuItem'] || ButtonDropdownMenuItem$0);", requireInRuntime);

module.exports = [{
        'type': 'markdown',
        'content': '> This component does not have a usage example'
    }]
	

/***/ }),

/***/ 907:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'Checkbox',
    'description': '',
    'methods': [],
    'props': [
        {
            'defaultValue': null,
            'description': 'Specifies the label text',
            'name': 'label',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Checkbox.tsx',
                'name': 'CheckboxProps'
            },
            'required': true,
            'type': { 'name': 'string' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': false },
            'description': 'Specifies whether box is checked',
            'name': 'checked',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Checkbox.tsx',
                'name': 'NativeCheckboxProps'
            },
            'required': false,
            'type': { 'name': 'boolean' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': false },
            'description': 'If true, checkbox will be disabled',
            'name': 'disabled',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Checkbox.tsx',
                'name': 'NativeCheckboxProps'
            },
            'required': false,
            'type': { 'name': 'boolean' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'The body of the error message, if applicable',
            'name': 'errorMessage',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Checkbox.tsx',
                'name': 'CheckboxProps'
            },
            'required': false,
            'type': { 'name': 'string' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'Specifies the ref of the checkbox',
            'name': 'forwardRef',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Checkbox.tsx',
                'name': 'CheckboxProps'
            },
            'required': false,
            'type': { 'name': 'Ref<HTMLInputElement>' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': false },
            'description': 'If true, omit the space for the error field',
            'name': 'hideError',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Checkbox.tsx',
                'name': 'CheckboxProps'
            },
            'required': false,
            'type': { 'name': 'boolean' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'The id of the label tied to the checkbox',
            'name': 'id',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Checkbox.tsx',
                'name': 'NativeCheckboxProps'
            },
            'required': false,
            'type': { 'name': 'string' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': true },
            'description': 'If true, label will be visible',
            'name': 'isLabelVisible',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Checkbox.tsx',
                'name': 'CheckboxProps'
            },
            'required': false,
            'type': { 'name': 'boolean' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'If true, the checkbox is required to submit the form',
            'name': 'isRequired',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Checkbox.tsx',
                'name': 'CheckboxProps'
            },
            'required': false,
            'type': { 'name': 'boolean' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': 'POSITION.RIGHT' },
            'description': 'Allows you to pass in a label position property from the POSITION enum',
            'name': 'labelPosition',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Checkbox.tsx',
                'name': 'CheckboxProps'
            },
            'required': false,
            'type': { 'name': 'CheckLabelPosition' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'The name of the checkbox',
            'name': 'name',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Checkbox.tsx',
                'name': 'NativeCheckboxProps'
            },
            'required': false,
            'type': { 'name': 'string' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'Function to call on change event',
            'name': 'onChange',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Checkbox.tsx',
                'name': 'NativeCheckboxProps'
            },
            'required': false,
            'type': { 'name': '(event: ChangeEvent<Element>) => void' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'Represents the value of the checkbox',
            'name': 'value',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Checkbox.tsx',
                'name': 'NativeCheckboxProps'
            },
            'required': false,
            'type': { 'name': 'string' },
            'tags': {}
        }
    ],
    'examples': __webpack_require__(908)
}
	

/***/ }),

/***/ 908:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'react': __webpack_require__(0),
    'mark-one': __webpack_require__(15),
    './../../src/Forms/Checkbox.tsx': __webpack_require__(171)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst Checkbox$0 = require('./../../src/Forms/Checkbox.tsx');\nconst Checkbox = Checkbox$0.default || (Checkbox$0['Checkbox'] || Checkbox$0);", requireInRuntime);

module.exports = [
    {
        'type': 'markdown',
        'content': 'The `Fieldset` component should be used in conjunction with the `Checkbox` component for accessibility. The following `Checkbox` examples include non visible `Fieldset` components.\n\nLabel Position example: The optional `labelPosition` prop defaults to `POSITION.RIGHT.`'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\nimport { Fieldset } from \'mark-one\';\n\nconst [value, setValue] = useState(false);\n\n<>\n  <Fieldset\n    legend="Fieldset Legend"\n    isBorderVisible={false}\n    isLegendVisible={false}\n  >\n    <Checkbox\n    checked={value}\n    label="Undergraduate"\n    onChange={(event) => {\n      setValue(!value);\n    }}\n    />\n  </Fieldset>\n</>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Label Position example: The optional `labelPosition` prop is set to `POSITION.LEFT.`'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\nimport { Fieldset, POSITION } from \'mark-one\';\n\nconst [value, setValue] = useState(false);\n\n<>\n  <Fieldset\n    legend="Fieldset Legend"\n    isBorderVisible={false}\n    isLegendVisible={false}\n  >\n    <Checkbox\n    checked={value}\n    label="Undergraduate"\n    labelPosition={POSITION.LEFT}\n    onChange={(event) => {\n      setValue(!value);\n    }}\n    />\n  </Fieldset>\n</>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Error Message and Required selection example: The `errorMessage` prop is set, and the `isRequired` prop is set to true, which causes a red asterisk indicating a required field to appear next to the label. The optional `labelPosition` prop defaults to `POSITION.RIGHT.`'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\nimport { Fieldset } from \'mark-one\';\n\nconst [value, setValue] = useState(false);\n\n<>\n  <Fieldset\n    legend="Fieldset Legend"\n    isBorderVisible={false}\n    isLegendVisible={false}\n  >\n    <Checkbox\n    checked={value}\n    label="I agree to the terms and conditions."\n    onChange={(event) => {\n      setValue(!value);\n    }}\n    errorMessage="Please select this checkbox before proceeding."\n    isRequired\n    />\n  </Fieldset>\n</>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Error Message and Required selection example: The `errorMessage` prop is set, and the `isRequired` prop is set to true, which causes a red asterisk indicating a required field to appear next to the label. The optional `labelPosition` prop is set to `POSITION.LEFT.`'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\nimport { Fieldset, POSITION } from \'mark-one\';\n\nconst [value, setValue] = useState(false);\n\n<>\n  <Fieldset\n    legend="Fieldset Legend"\n    isBorderVisible={false}\n    isLegendVisible={false}\n  >\n    <Checkbox\n    checked={value}\n    label="I agree to the terms and conditions."\n    labelPosition={POSITION.LEFT}\n    onChange={(event) => {\n      setValue(!value);\n    }}\n    errorMessage="Please select this checkbox before proceeding."\n    isRequired\n    />\n  </Fieldset>\n</>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Disabled example: The optional `disabled` prop is set to true.'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\nimport { Fieldset } from \'mark-one\';\n\n<>\n  <Fieldset\n    legend="Fieldset Legend"\n    isBorderVisible={false}\n    isLegendVisible={false}\n  >\n    <Checkbox\n    label="Undergraduate"\n    disabled\n    />\n  </Fieldset>\n</>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Disabled and Checked example: The optional `disabled` and `checked` props are set to true.'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\nimport { Fieldset } from \'mark-one\';\n\n<>\n  <Fieldset\n    legend="Fieldset Legend"\n    isBorderVisible={false}\n    isLegendVisible={false}\n  >\n    <Checkbox\n    label="Undergraduate"\n    disabled\n    checked\n    />\n  </Fieldset>\n</>',
        'settings': {},
        'evalInContext': evalInContext
    }
]
	

/***/ }),

/***/ 909:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'CheckLabel',
    'description': '',
    'methods': [],
    'props': [
        {
            'defaultValue': null,
            'description': 'The id of the field tied to this label',
            'name': 'htmlFor',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/CheckLabel.tsx',
                'name': 'LabelProps'
            },
            'required': true,
            'type': { 'name': 'string' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'Specifies the label text',
            'name': 'label',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/CheckLabel.tsx',
                'name': 'LabelProps'
            },
            'required': true,
            'type': { 'name': 'string' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': false },
            'description': 'Used to style label text in a different style if disabled is true',
            'name': 'disabled',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/CheckLabel.tsx',
                'name': 'LabelProps'
            },
            'required': false,
            'type': { 'name': 'boolean' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': false },
            'description': 'If true, hide the space allocated for the error message',
            'name': 'hideError',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/CheckLabel.tsx',
                'name': 'LabelProps'
            },
            'required': false,
            'type': { 'name': 'boolean' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': true },
            'description': 'If true, label will be visible',
            'name': 'isLabelVisible',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/CheckLabel.tsx',
                'name': 'LabelProps'
            },
            'required': false,
            'type': { 'name': 'boolean' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'If true, the label will be styled to indicate that it labels a required field',
            'name': 'isRequired',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/CheckLabel.tsx',
                'name': 'LabelProps'
            },
            'required': false,
            'type': { 'name': 'boolean' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': 'POSITION.LEFT' },
            'description': 'Allows you to pass in a label position property from the POSITION enum',
            'name': 'labelPosition',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/CheckLabel.tsx',
                'name': 'LabelProps'
            },
            'required': false,
            'type': { 'name': 'CheckLabelPosition' },
            'tags': {}
        }
    ],
    'examples': __webpack_require__(910)
}
	

/***/ }),

/***/ 910:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'react': __webpack_require__(0),
    'mark-one': __webpack_require__(15),
    './../../src/Forms/CheckLabel.tsx': __webpack_require__(75)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst CheckLabel$0 = require('./../../src/Forms/CheckLabel.tsx');\nconst CheckLabel = CheckLabel$0.default || (CheckLabel$0['CheckLabel'] || CheckLabel$0);", requireInRuntime);

module.exports = [
    {
        'type': 'markdown',
        'content': 'The `CheckLabel` component is used by the `RadioButton` and `Checkbox` components, while the `InputLabel` component is used by the `TextInput` and `Dropdown` components. These label variations were created to align input fields when using various form elements in tandem.\n\nAligning `RadioButton` and `Dropdown` fields example: The labelPosition for `RadioButton` is `POSITION.RIGHT`, and the `labelPosition` for the `Dropdown` is `POSITION.TOP`.'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\nimport { Fieldset, RadioButton, Dropdown, POSITION } from \'mark-one\';\n\nconst [checkedValue, setCheckedValue] = useState(\'\');\nconst [value, setValue] = useState(\'fall\');\n\n<>\n  <Fieldset\n    legend="Fieldset Legend"\n    isBorderVisible={false}\n    isLegendVisible={false}\n  >\n    <RadioButton\n      label="Foo"\n      value="foo"\n      name="nonVisibleFieldsetTest"\n      checked={checkedValue === \'foo\'}\n      onChange={(event) => setCheckedValue(event.target.value)}\n      labelPosition={POSITION.RIGHT}\n    />\n    <RadioButton\n      label="Bar"\n      value="bar"\n      name="nonVisibleFieldsetTest"\n      checked={checkedValue === \'bar\'}\n      onChange={(event) => setCheckedValue(event.target.value)}\n      labelPosition={POSITION.RIGHT}\n    />\n    <Dropdown\n      options={[\n        {\n          value: \'all\',\n          label: \'All\',\n        },\n        {\n          value: \'fall\',\n          label: \'Fall\',\n        },\n        {\n          value: \'spring\',\n          label: \'Spring\',\n        },\n      ]}\n      value={value}\n      id="semesters"\n      name="semesters"\n      onChange={function(event){\n        setValue(event.target.value);\n        alert(\'You changed the selection to \' + event.target.value);\n      }}\n      label="Semester"\n      labelPosition={POSITION.TOP}\n    />\n  </Fieldset>\n</>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Aligning `RadioButton` and `Dropdown` fields example: The labelPosition for `RadioButton` and `Dropdown` is `POSITION.LEFT`.'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\nimport { Fieldset, RadioButton, Dropdown, POSITION } from \'mark-one\';\n\nconst [checkedValue, setCheckedValue] = useState(\'\');\nconst [value, setValue] = useState(\'fall\');\n\n<>\n  <Fieldset\n    legend="Fieldset Legend"\n    isBorderVisible={false}\n    isLegendVisible={false}\n  >\n    <RadioButton\n      label="Foo"\n      value="foo"\n      name="nonVisibleFieldsetTest"\n      checked={checkedValue === \'foo\'}\n      onChange={(event) => setCheckedValue(event.target.value)}\n      labelPosition={POSITION.LEFT}\n    />\n    <RadioButton\n      label="Bar"\n      value="bar"\n      name="nonVisibleFieldsetTest"\n      checked={checkedValue === \'bar\'}\n      onChange={(event) => setCheckedValue(event.target.value)}\n      labelPosition={POSITION.LEFT}\n    />\n    <Dropdown\n      options={[\n        {\n          value: \'all\',\n          label: \'All\',\n        },\n        {\n          value: \'fall\',\n          label: \'Fall\',\n        },\n        {\n          value: \'spring\',\n          label: \'Spring\',\n        },\n      ]}\n      value={value}\n      id="semesters"\n      name="semesters"\n      onChange={function(event){\n        setValue(event.target.value);\n        alert(\'You changed the selection to \' + event.target.value);\n      }}\n      label="Semester"\n      labelPosition={POSITION.LEFT}\n    />\n  </Fieldset>\n</>',
        'settings': {},
        'evalInContext': evalInContext
    }
]
	

/***/ }),

/***/ 911:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'Combobox',
    'description': 'An autocompleting typeahead search box that allows the user to choose one\nentry from a list of options\n\nThe list of options will be filtered by the user\'s input, and will appear in\nthe dropdown box when the user starts typing. One of the options can be\nselected with the arrows/enter key, or by clicking with a mouse. The user\ncan also choose a value directly by clicking on the menu button, bypassing\nthe need to type\n\nThis is intended to be used as a controlled component, where the selected\noption will be stored in an external state value. Only a value selected from\nthe list will be passed to that state value; users cannot enter arbitrary\nvalues\n\nThe internal state and many of the accessibility features are implemented\nwith the downshift library\n',
    'methods': [],
    'props': [
        {
            'defaultValue': null,
            'description': 'The option selected by the user. This is intended to be used as a\ncontrolled component, where this value will be provided by an external\nstate',
            'name': 'currentValue',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Combobox.tsx',
                'name': 'ComboboxProps'
            },
            'required': true,
            'type': { 'name': 'ComboboxOption' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'A description of the input. This is required for accessibility reasons,\nbut if you don\'t want it displayed visually you can set the isLabelVisible\nvalue to false',
            'name': 'label',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Combobox.tsx',
                'name': 'ComboboxProps'
            },
            'required': true,
            'type': { 'name': 'string' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'A handler to be called when the user selects an option. This is intended\nto be used as a controlled component, so this function should update the\nexternal state passed into currentValue',
            'name': 'onOptionSelected',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Combobox.tsx',
                'name': 'ComboboxProps'
            },
            'required': true,
            'type': { 'name': '(changes: UseComboboxStateChange<ComboboxOption>) => void' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'The list of items that should be selectable in the combobox',
            'name': 'options',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Combobox.tsx',
                'name': 'ComboboxProps'
            },
            'required': true,
            'type': { 'name': 'ComboboxOption[]' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'A validation message displayed under the input',
            'name': 'errorMessage',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Combobox.tsx',
                'name': 'ComboboxProps'
            },
            'required': false,
            'type': { 'name': 'string' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': '(option, inputValue) => (option.label\n    .toLowerCase()\n    .startsWith(\n      inputValue.toLowerCase()\n    ))' },
            'description': 'The function used to filter the list of results based on the user input.\nBy default, it will perform a case-insensitive match of the user input\nagainst the beginning of the option\'s "label" value\n\nThe function passed here will be called inside of a `Array.filter()` call\non the complete list of options, so it should return true if the option\nshould be included as a valid result, and false if not',
            'name': 'filterFunction',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Combobox.tsx',
                'name': 'ComboboxProps'
            },
            'required': false,
            'type': { 'name': '(option: ComboboxOption, inputValue: string) => boolean' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'Specifies the ref applied to the text input',
            'name': 'forwardRef',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Combobox.tsx',
                'name': 'ComboboxProps'
            },
            'required': false,
            'type': { 'name': 'Ref<HTMLInputElement>' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': false },
            'description': 'Whether space for a validation error should be rendered, even if there is\nno value in errorMessage',
            'name': 'hideError',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Combobox.tsx',
                'name': 'ComboboxProps'
            },
            'required': false,
            'type': { 'name': 'boolean' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': true },
            'description': 'If false, hide the visual label but keep it rendered in the DOM for\naccessibility',
            'name': 'isLabelVisible',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Combobox.tsx',
                'name': 'ComboboxProps'
            },
            'required': false,
            'type': { 'name': 'boolean' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': false },
            'description': 'Whether to the mark the form element as a required field',
            'name': 'isRequired',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Combobox.tsx',
                'name': 'ComboboxProps'
            },
            'required': false,
            'type': { 'name': 'boolean' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'Whether to render the label to the left of the input, or above',
            'name': 'labelPosition',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Combobox.tsx',
                'name': 'ComboboxProps'
            },
            'required': false,
            'type': { 'name': 'InputLabelPosition' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': '' },
            'description': 'Temporary text that will be displayed in the input before the user types\nanything',
            'name': 'placeholder',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Combobox.tsx',
                'name': 'ComboboxProps'
            },
            'required': false,
            'type': { 'name': 'string' },
            'tags': {}
        }
    ],
    'tags': {},
    'examples': __webpack_require__(912)
}
	

/***/ }),

/***/ 912:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'react': __webpack_require__(0),
    'mark-one': __webpack_require__(15),
    './../../src/Forms/Combobox.tsx': __webpack_require__(172)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst Combobox$0 = require('./../../src/Forms/Combobox.tsx');\nconst Combobox = Combobox$0.default || (Combobox$0['Combobox'] || Combobox$0);", requireInRuntime);

module.exports = [
    {
        'type': 'markdown',
        'content': 'The `Combobox` is a typeahead-style autocomplete input, where the user can choose from among a number of different options by either clicking a button to show the whole list, or by starting to type the value they want and letting the autocomplete take over. The actual value stored in state will only update with one of the defined options; it does not allow for specifying arbitrary values.\n\nUnder the hood we\'re using [the Downshift library][downshift], which handles the state updates and accessibility features out of the box. However, we\'re intending it to be used as a controlled component, so the `currentValue` needs to be managed by a parent-level state value.\n\n[downshift]: https://www.downshift-js.com/\n\n### The standard Combobox'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\n\nconst options = [\n  {\n    label: \'Apples\',\n    value: \'a\',\n  },\n  {\n    label: \'Bananas\',\n    value: \'b\',\n  },\n  {\n    label: \'Cucumbers\',\n    value: \'c\',\n  },\n  {\n    label: \'Donuts\',\n    value: \'d\',\n  }\n];\n\nconst [valueOne, setValueOne] = useState(null);\n\n<div>\n  <Combobox\n    isLabelVisible={true}\n    options={options}\n    label="Food"\n    currentValue={valueOne}\n    onOptionSelected={({ selectedItem }) => {setValueOne(selectedItem)}}\n  />\n  <p>\n    You chose: <strong>{valueOne ? valueOne.label : \'\'}</strong>\n  </p>\n</div>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': '### With the label above the box:'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\nimport { POSITION } from \'mark-one\';\n\nconst options = [\n  {\n    label: \'Apples\',\n    value: \'a\',\n  },\n  {\n    label: \'Bananas\',\n    value: \'b\',\n  },\n  {\n    label: \'Cucumbers\',\n    value: \'c\',\n  },\n  {\n    label: \'Donuts\',\n    value: \'d\',\n  }\n];\n\nconst [valueTwo, setValueTwo] = useState(null);\n\n<div>\n  <Combobox\n    labelPosition={POSITION.TOP}\n    options={options}\n    label="Food"\n    currentValue={valueTwo}\n    onOptionSelected={({ selectedItem }) => {setValueTwo(selectedItem)}}\n  />\n\n  <p>\n    You chose: <strong>{valueTwo ? valueTwo.label : \'\'}</strong>\n  </p>\n</div>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': '### With the label and error hidden'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\n\nconst options = [\n  {\n    label: \'Apples\',\n    value: \'a\',\n  },\n  {\n    label: \'Bananas\',\n    value: \'b\',\n  },\n  {\n    label: \'Cucumbers\',\n    value: \'c\',\n  },\n  {\n    label: \'Donuts\',\n    value: \'d\',\n  }\n];\n\nconst [valueThree, setValueThree] = useState(null);\n\n<div>\n  <Combobox\n    isLabelVisible={false}\n    hideError={true}\n    options={options}\n    label="Food"\n    placeholder="Choose a Food"\n    currentValue={valueThree}\n    onOptionSelected={({ selectedItem }) => {setValueThree(selectedItem)}}\n  />\n  <p>\n    You chose: <strong>{valueThree ? valueThree.label : \'\'}</strong>\n  </p>\n</div>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': '### With an error message'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\nimport { POSITION } from \'mark-one\';\n\nconst options = [\n  {\n    label: \'Apples\',\n    value: \'a\',\n  },\n  {\n    label: \'Bananas\',\n    value: \'b\',\n  },\n  {\n    label: \'Cucumbers\',\n    value: \'c\',\n  },\n  {\n    label: \'Donuts\',\n    value: \'d\',\n  }\n];\n\nconst [valueFour, setValueFour] = useState(null);\n\n<div>\n  <Combobox\n    options={options}\n    label="Food"\n    isRequired\n    errorMessage={!valueFour ? \'You must select a valid option\' : null}\n    currentValue={valueFour}\n    onOptionSelected={({ selectedItem }) => {setValueFour(selectedItem)}}\n  />\n\n  <p>\n    You chose: <strong>{valueFour ? valueFour.label : \'\'}</strong>\n  </p>\n</div>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': '### Customizing the filter function\n\nBy default, the Combobox will perform a case-insensitive match of the user\'s input against the beginning of the `"label"` value for each option in the list. This can be customized with the `filterFunction` prop, which accepts a function that takes an option object and search string, and returns true if that option should be shown in the dropdown menu.\n\nNote that this function will only affect the options _shown in the menu_, it has no direct impact on the value _selected by the user_.'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\nimport { POSITION } from \'mark-one\';\n\nconst options = [\n  {\n    label: \'Apples\',\n    value: \'a\',\n  },\n  {\n    label: \'Granny Smith Apples\',\n    value: \'g\',\n  },\n  {\n    label: \'Honeycrisp Apples\',\n    value: \'h\',\n  },\n  {\n    label: \'Macoun Apples\',\n    value: \'m\',\n  },\n  {\n    label: \'Red Delicious Apples\',\n    value: \'r\',\n  },\n  {\n    label: \'Bananas\',\n    value: \'b\',\n  },\n  {\n    label: \'Cucumbers\',\n    value: \'c\',\n  },\n  {\n    label: \'Donuts\',\n    value: \'d\',\n  },\n];\n\nconst [valueFive, setValueFive] = useState(null);\nconst [valueSix, setValueSix] = useState(null);\n\n<div>\n  <div>\n    <Combobox\n      options={options}\n      label="Food (Default Search)"\n      currentValue={valueFive}\n      onOptionSelected={({ selectedItem }) => {setValueOne(selectedItem)}}\n    />\n\n    <p>\n      You chose: <strong>{valueFive ? valueFive.label : \'\'}</strong>\n    </p>\n  </div>\n  <div>\n    <Combobox\n      options={options}\n      label="Food (Custom Regex Search)"\n      currentValue={valueSix}\n      onOptionSelected={({ selectedItem }) => {setValueOne(selectedItem)}}\n      filterFunction={(option, inputValue) => {\n        const re = new RegExp(inputValue, \'i\');\n        return re.test(option.label);\n      }}\n    />\n\n    <p>\n      You chose: <strong>{valueSix ? valueSix.label : \'\'}</strong>\n    </p>\n  </div>\n</div>',
        'settings': {},
        'evalInContext': evalInContext
    }
]
	

/***/ }),

/***/ 913:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'Dropdown',
    'description': '',
    'methods': [],
    'props': [
        {
            'defaultValue': null,
            'description': 'The id tied to this dropdown field',
            'name': 'id',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Dropdown.tsx',
                'name': 'DropdownProps'
            },
            'required': true,
            'type': { 'name': 'string' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'Specifies the label text',
            'name': 'label',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Dropdown.tsx',
                'name': 'DropdownProps'
            },
            'required': true,
            'type': { 'name': 'string' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'The name of the dropdown',
            'name': 'name',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Dropdown.tsx',
                'name': 'DropdownProps'
            },
            'required': true,
            'type': { 'name': 'string' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'Function to call on change event',
            'name': 'onChange',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Dropdown.tsx',
                'name': 'DropdownProps'
            },
            'required': true,
            'type': { 'name': '(event: ChangeEvent<Element>) => void' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'An array of objects with the properties specified through DropdownOptions',
            'name': 'options',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Dropdown.tsx',
                'name': 'DropdownProps'
            },
            'required': true,
            'type': { 'name': 'DropdownOptionProps[]' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'The dropdown value selected by default',
            'name': 'defaultValue',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Dropdown.tsx',
                'name': 'DropdownProps'
            },
            'required': false,
            'type': { 'name': 'string' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'Specifies whether the dropdown is disabled',
            'name': 'disabled',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Dropdown.tsx',
                'name': 'DropdownProps'
            },
            'required': false,
            'type': { 'name': 'boolean' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'The body of the error message, if applicable',
            'name': 'errorMessage',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Dropdown.tsx',
                'name': 'DropdownProps'
            },
            'required': false,
            'type': { 'name': 'string' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'Specifies the ref of the dropdown',
            'name': 'forwardRef',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Dropdown.tsx',
                'name': 'DropdownProps'
            },
            'required': false,
            'type': { 'name': 'Ref<HTMLSelectElement>' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': false },
            'description': 'If true, hide the error msg and its style',
            'name': 'hideError',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Dropdown.tsx',
                'name': 'DropdownProps'
            },
            'required': false,
            'type': { 'name': 'boolean' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': true },
            'description': 'If true, label will be visible',
            'name': 'isLabelVisible',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Dropdown.tsx',
                'name': 'DropdownProps'
            },
            'required': false,
            'type': { 'name': 'boolean' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'If true, the dropdown is required to submit the form',
            'name': 'isRequired',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Dropdown.tsx',
                'name': 'DropdownProps'
            },
            'required': false,
            'type': { 'name': 'boolean' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': 'POSITION.TOP' },
            'description': 'Allows you to pass in a label position property from the POSITION enum',
            'name': 'labelPosition',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Dropdown.tsx',
                'name': 'DropdownProps'
            },
            'required': false,
            'type': { 'name': 'InputLabelPosition' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'Function to call on click event',
            'name': 'onClick',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Dropdown.tsx',
                'name': 'DropdownProps'
            },
            'required': false,
            'type': { 'name': '(event: MouseEvent<Element, MouseEvent>) => void' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'The currently selected dropdown value',
            'name': 'value',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Dropdown.tsx',
                'name': 'DropdownProps'
            },
            'required': false,
            'type': { 'name': 'string' },
            'tags': {}
        }
    ],
    'examples': __webpack_require__(914)
}
	

/***/ }),

/***/ 914:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'react': __webpack_require__(0),
    'mark-one': __webpack_require__(15),
    './../../src/Forms/Dropdown.tsx': __webpack_require__(170)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst Dropdown$0 = require('./../../src/Forms/Dropdown.tsx');\nconst Dropdown = Dropdown$0.default || (Dropdown$0['Dropdown'] || Dropdown$0);", requireInRuntime);

module.exports = [
    {
        'type': 'markdown',
        'content': 'Label example: The optional prop `labelPosition` defaults to `POSITION.TOP.`'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\n\nconst [value, setValue] = useState(\'fall\');\n\n<Dropdown\n  options={[\n    {\n      value: \'all\',\n      label: \'All\',\n    },\n    {\n      value: \'fall\',\n      label: \'Fall\',\n    },\n    {\n      value: \'spring\',\n      label: \'Spring\',\n    },\n  ]}\n  value={value}\n  id="semesters"\n  name="semesters"\n  onChange={function(event){\n    setValue(event.target.value);\n    alert(\'You changed the selection to \' + event.target.value);\n  }}\n  label="Semester"\n/>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Label example: The prop `labelPosition` is set to `POSITION.TOP.`'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\nimport { POSITION } from \'mark-one\';\n\nconst [value, setValue] = useState(\'fall\');\n\n<Dropdown\n  options={[\n    {\n      value: \'all\',\n      label: \'All\',\n    },\n    {\n      value: \'fall\',\n      label: \'Fall\',\n    },\n    {\n      value: \'spring\',\n      label: \'Spring\',\n    },\n  ]}\n  value={value}\n  id="semesters"\n  name="semesters"\n  onChange={function(event){\n    setValue(event.target.value);\n    alert(\'You changed the selection to \' + event.target.value);\n  }}\n  label="Semester"\n  labelPosition={POSITION.TOP}\n/>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Label example: The prop `labelPosition` is set to `POSITION.LEFT.`'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\nimport { POSITION } from \'mark-one\';\n\nconst [value, setValue] = useState(\'fall\');\n\n<Dropdown\n  options={[\n    {\n      value: \'all\',\n      label: \'All\',\n    },\n    {\n      value: \'fall\',\n      label: \'Fall\',\n    },\n    {\n      value: \'spring\',\n      label: \'Spring\',\n    },\n  ]}\n  value={value}\n  id="semesters"\n  name="semesters"\n  onChange={function(event){\n    setValue(event.target.value);\n    alert(\'You changed the selection to \' + event.target.value);\n  }}\n  label="Semester"\n  labelPosition={POSITION.LEFT}\n/>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Label example: The `isLabelVisible` prop is set to `false.`'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\n\nconst [value, setValue] = useState(\'fall\');\n\n<Dropdown\n  options={[\n    {\n      value: \'all\',\n      label: \'All\',\n    },\n    {\n      value: \'fall\',\n      label: \'Fall\',\n    },\n    {\n      value: \'spring\',\n      label: \'Spring\',\n    },\n  ]}\n  value={value}\n  id="isLabelVisibleDropExample"\n  name="isLabelVisibleDropExample"\n  onChange={function(event){\n    setValue(event.target.value);\n    alert(\'You changed the selection to \' + event.target.value);\n  }}\n  label="Semester"\n  isLabelVisible={false}\n/>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Disabled property example: The \'Summer\' selection is disabled. The optional `labelPosition` prop defaults to `POSITION.TOP.`'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\n\nconst [value, setValue] = useState(\'fall\');\n\n<Dropdown\n  options={[\n    {\n      value: \'all\',\n      label: \'All\',\n    },\n    {\n      value: \'fall\',\n      label: \'Fall\',\n    },\n    {\n      value: \'spring\',\n      label: \'Spring\',\n    },\n    {\n      value: \'summer\',\n      label: \'Summer\',\n      disabled: true,\n    },\n  ]}\n  value={value}\n  id="semesters"\n  name="semesters"\n  onChange={function(event){\n    setValue(event.target.value);\n    alert(\'You changed the selection to \' + event.target.value);\n  }}\n  label="Semester"\n/>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Error Message example: The optional `errorMessage` prop is not set.'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\n\nconst [value, setValue] = useState(\'fall\');\nimport { POSITION } from \'mark-one\';\n\n<Dropdown\n  options={[\n    {\n      value: \'all\',\n      label: \'All\',\n    },\n    {\n      value: \'fall\',\n      label: \'Fall\',\n    },\n    {\n      value: \'spring\',\n      label: \'Spring\',\n    },\n  ]}\n  value={value}\n  id="semesters"\n  name="semesters"\n  onChange={function(event){\n    setValue(event.target.value);\n    alert(\'You changed the selection to \' + event.target.value);\n  }}\n  label="Semester"\n  labelPosition={POSITION.TOP}\n/>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Error Message example: The optional `errorMessage` prop is set, and the `labelPosition` prop defaults to `POSITION.TOP.`'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\n\nconst [value, setValue] = useState(\'fall\');\n\n<Dropdown\n  options={[\n    {\n      value: \'all\',\n      label: \'All\',\n    },\n    {\n      value: \'fall\',\n      label: \'Fall\',\n    },\n    {\n      value: \'spring\',\n      label: \'Spring\',\n    },\n  ]}\n  value={value}\n  id="semesters"\n  name="semesters"\n  onChange={function(event){\n    setValue(event.target.value);\n    alert(\'You changed the selection to \' + event.target.value);\n  }}\n  label="Semester"\n  errorMessage="Error: Please select a semester."\n/>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Error Message example: The optional `errorMessage` prop is set, and the `labelPosition` prop is set to `POSITION.LEFT.`'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\n\nconst [value, setValue] = useState(\'fall\');\nimport { POSITION } from \'mark-one\';\n\n<Dropdown\n  options={[\n    {\n      value: \'all\',\n      label: \'All\',\n    },\n    {\n      value: \'fall\',\n      label: \'Fall\',\n    },\n    {\n      value: \'spring\',\n      label: \'Spring\',\n    },\n  ]}\n  value={value}\n  id="semesters"\n  name="semesters"\n  onChange={function(event){\n    setValue(event.target.value);\n    alert(\'You changed the selection to \' + event.target.value);\n  }}\n  label="Semester"\n  labelPosition={POSITION.LEFT}\n  errorMessage="Error: Please select a semester."\n/>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Error message example: The optional `errorMessage` prop is set, and the \n`hideError` prop is set while `isLabelVisible` is set to `false`, \nwhich removes the errorMessage and its style.'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\n\nconst [value, setValue] = useState(\'fall\');\n\n<Dropdown\n  options={[\n    {\n      value: \'all\',\n      label: \'All\',\n    },\n    {\n      value: \'fall\',\n      label: \'Fall\',\n    },\n    {\n      value: \'spring\',\n      label: \'Spring\',\n    },\n  ]}\n  value={value}\n  id="hideErrorDropExample"\n  name="hideErrorDropExample"\n  onChange={function(event){\n    setValue(event.target.value);\n    alert(\'You changed the selection to \' + event.target.value);\n  }}\n  label="Semester"\n  hideError={true}\n  isLabelVisible={false}\n/>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Required selection example: The optional `isRequired` property is set, which causes an asterisk denoting that the field is required appears next to the label. The `labelPosition` prop defaults to `POSITION.TOP.`'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\n\nconst [value, setValue] = useState(\'fall\');\n\n<Dropdown\n  options={[\n    {\n      value: \'all\',\n      label: \'All\',\n    },\n    {\n      value: \'fall\',\n      label: \'Fall\',\n    },\n    {\n      value: \'spring\',\n      label: \'Spring\',\n    },\n  ]}\n  value={value}\n  id="semesters"\n  name="semesters"\n  onChange={function(event){\n    setValue(event.target.value);\n    alert(\'You changed the selection to \' + event.target.value);\n  }}\n  label="Semester"\n  isRequired\n/>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Required selection example: The optional `isRequired` property is set, which causes an asterisk denoting that the field is required appears next to the label. The `labelPosition` prop is set to `POSITION.LEFT.`'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\n\nconst [value, setValue] = useState(\'fall\');\nimport { POSITION } from \'mark-one\';\n\n<Dropdown\n  options={[\n    {\n      value: \'all\',\n      label: \'All\',\n    },\n    {\n      value: \'fall\',\n      label: \'Fall\',\n    },\n    {\n      value: \'spring\',\n      label: \'Spring\',\n    },\n  ]}\n  value={value}\n  id="semesters"\n  name="semesters"\n  onChange={function(event){\n    setValue(event.target.value);\n    alert(\'You changed the selection to \' + event.target.value);\n  }}\n  label="Semester"\n  labelPosition={POSITION.LEFT}\n  isRequired\n/>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Ref example: The optional `forwardRef` property is set. When the test button is clicked, the focus shifts to the dropdown.'
    },
    {
        'type': 'code',
        'content': 'import { useState, useRef } from \'react\';\nimport { Button, VARIANT } from \'mark-one\';\n\nconst ref = useRef(null);\nconst [value, setValue] = useState(\'\');\nconst onButtonClick = () => {\n  ref.current.focus();\n}\n\n<>\n  <Button\n    onClick={onButtonClick}\n    variant={VARIANT.INFO}\n  >\n    Focus the input\n  </Button>\n  <Dropdown\n    options={[\n      {\n        value: \'all\',\n        label: \'All\',\n      },\n      {\n        value: \'fall\',\n        label: \'Fall\',\n      },\n      {\n        value: \'spring\',\n        label: \'Spring\',\n      },\n    ]}\n    value={value}\n    id="semesters"\n    name="semesters"\n    onChange={function(event){\n      setValue(event.target.value);\n      alert(\'You changed the selection to \' + event.target.value);\n    }}\n    label="Semester"\n    forwardRef={ref}\n  />\n</>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Ref example: The optional `forwardRef` property is set. When the test button is clicked, the focus shifts to the dropdown in the modal.'
    },
    {
        'type': 'code',
        'content': 'import { useState, useRef, } from \'react\';\nimport { Button, Modal, ModalBody, VARIANT } from \'mark-one\';\n\nconst ref = useRef(null);\nconst [value, setValue] = useState(\'\');\nconst [modalVisible, setModalVisible] = useState(false);\nconst onButtonClick = () => {\n  setModalVisible(true);\n  /* Since modal may not have been rendered in DOM, wait for it to be\n  rendered by letting next task of event queue run first */\n  setTimeout(() => ref.current.focus(), 0);\n}\n\n<>\n  <Button\n    onClick={onButtonClick}\n    variant={VARIANT.INFO}\n  >\n    Focus the input\n  </Button>\n  <Modal\n    ariaLabelledBy="testButton"\n    closeHandler={() => {setModalVisible(false)}}\n    isVisible={modalVisible}\n  >\n    <ModalBody>\n      <Dropdown\n        options={[\n          {\n            value: \'all\',\n            label: \'All\',\n          },\n          {\n            value: \'fall\',\n            label: \'Fall\',\n          },\n          {\n            value: \'spring\',\n            label: \'Spring\',\n          },\n        ]}\n        value={value}\n        id="semesters"\n        name="semesters"\n        onChange={function(event){\n          setValue(event.target.value);\n          alert(\'You changed the selection to \' + event.target.value);\n        }}\n        label="Semester"\n        forwardRef={ref}\n      />\n      <Button\n        onClick={() => setModalVisible(false)}\n        variant={VARIANT.BASE}\n      >\n        Close Modal\n      </Button>\n    </ModalBody>\n  </Modal>\n</>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Disabled dropdown example: The `disabled` property is set to `true` on the dropdown.'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\n\nconst [value, setValue] = useState(\'fall\');\n\n<Dropdown\n  options={[\n    {\n      value: \'all\',\n      label: \'All\',\n    },\n    {\n      value: \'fall\',\n      label: \'Fall\',\n    },\n    {\n      value: \'spring\',\n      label: \'Spring\',\n    },\n  ]}\n  value={value}\n  id="semesters"\n  name="semesters"\n  onChange={function(event){\n    setValue(event.target.value);\n    alert(\'You changed the selection to \' + event.target.value);\n  }}\n  label="Semester"\n  disabled={true}\n/>',
        'settings': {},
        'evalInContext': evalInContext
    }
]
	

/***/ }),

/***/ 915:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'Fieldset',
    'description': '',
    'methods': [],
    'props': [
        {
            'defaultValue': null,
            'description': 'Describes the elements within the fieldset',
            'name': 'legend',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Fieldset.tsx',
                'name': 'FieldsetProps'
            },
            'required': true,
            'type': { 'name': 'string' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'The form elements in the fieldset',
            'name': 'children',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Fieldset.tsx',
                'name': 'FieldsetProps'
            },
            'required': false,
            'type': { 'name': 'ReactNode' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'The error message for the overall form',
            'name': 'errorMessage',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Fieldset.tsx',
                'name': 'FieldsetProps'
            },
            'required': false,
            'type': { 'name': 'string' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'Specifies the id of the associated form',
            'name': 'form',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Fieldset.tsx',
                'name': 'FieldsetProps'
            },
            'required': false,
            'type': { 'name': 'string' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': true },
            'description': 'Specifies whether the border of fieldset is visible',
            'name': 'isBorderVisible',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Fieldset.tsx',
                'name': 'FieldsetProps'
            },
            'required': false,
            'type': { 'name': 'boolean' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': true },
            'description': 'Specifies whether the legend of the fieldset is visible',
            'name': 'isLegendVisible',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Fieldset.tsx',
                'name': 'FieldsetProps'
            },
            'required': false,
            'type': { 'name': 'boolean' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'If true, a choice within the fieldset is required',
            'name': 'isRequired',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Fieldset.tsx',
                'name': 'FieldsetProps'
            },
            'required': false,
            'type': { 'name': 'boolean' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'Text within the fieldset that describes symbol(s) (e.g. *) used to denote required fields',
            'name': 'legendDescription',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Fieldset.tsx',
                'name': 'FieldsetProps'
            },
            'required': false,
            'type': { 'name': 'string' },
            'tags': {}
        }
    ],
    'examples': __webpack_require__(916)
}
	

/***/ }),

/***/ 916:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'react': __webpack_require__(0),
    'mark-one': __webpack_require__(15),
    './../../src/Forms/Fieldset.tsx': __webpack_require__(173)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst Fieldset$0 = require('./../../src/Forms/Fieldset.tsx');\nconst Fieldset = Fieldset$0.default || (Fieldset$0['Fieldset'] || Fieldset$0);", requireInRuntime);

module.exports = [
    {
        'type': 'markdown',
        'content': 'Fieldset Legend and Error message example: The `legend` property is set to "Fieldset Legend," the `isRequired` property is set to `true,` and the `errorMessage` property is set. Two of the fieldset children, required checkboxes, also have their individual error messages.'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\nimport { Checkbox } from \'mark-one\';\n\nconst [requiredCheckbox, setRequiredCheckbox] = useState(false);\nconst [anotherRequiredCheckbox, setAnotherRequiredCheckbox] = useState(false);\nconst [nonRequiredCheckbox, setNonRequiredCheckbox] = useState(false);\n\n<Fieldset\n  legend="Fieldset Legend"\n  legendDescription="Note: * denoted required information"\n  errorMessage="Error: Please fill in the required fields in the form."\n  isRequired\n>\n  <Checkbox\n    checked={requiredCheckbox}\n    label="Required Checkbox"\n    onChange={(event) => {\n      setRequiredCheckbox(!requiredCheckbox);\n    }}\n    errorMessage="Please select this checkbox before proceeding."\n    isRequired\n  />\n  <Checkbox\n    checked={anotherRequiredCheckbox}\n    label="Another Required Checkbox"\n    onChange={(event) => {\n      setAnotherRequiredCheckbox(!anotherRequiredCheckbox);\n    }}\n    errorMessage="Please select this checkbox before proceeding."\n    isRequired\n  />\n  <Checkbox\n    checked={nonRequiredCheckbox}\n    label="Non-Required Checkbox"\n    onChange={(event) => {\n      setNonRequiredCheckbox(!nonRequiredCheckbox);\n  }}\n  />\n</Fieldset>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Non Visible Border example: The `isBorderVisible` property is set to `false,` and the `isRequired` property is set to `true.`'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\nimport { Checkbox } from \'mark-one\';\n\nconst [requiredCheckbox, setRequiredCheckbox] = useState(false);\nconst [nonRequiredCheckbox, setNonRequiredCheckbox] = useState(false);\n\n<Fieldset\n  legend="Fieldset Legend"\n  legendDescription="Note: * denoted required information"\n  isBorderVisible={false}\n  isRequired\n>\n  <Checkbox\n    checked={requiredCheckbox}\n    label="Required Checkbox"\n    onChange={(event) => {\n      setRequiredCheckbox(!requiredCheckbox);\n    }}\n    isRequired\n  />\n  <Checkbox\n    checked={nonRequiredCheckbox}\n    label="Non-Required Checkbox"\n    onChange={(event) => {\n      setNonRequiredCheckbox(!nonRequiredCheckbox);\n    }}\n  />\n</Fieldset>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Non Visible Border and Non Visible Legend example: The `isBorderVisible` property is set to `false,` the `legend` property is set to "Fieldset Legend," the `isLegendVisible` property is set to `false,` and the `isRequired` property is set to `true.`'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\nimport { Checkbox } from \'mark-one\';\n\nconst [requiredCheckbox, setRequiredCheckbox] = useState(false);\nconst [nonRequiredCheckbox, setNonRequiredCheckbox] = useState(false);\n\n<Fieldset\n  legend="Fieldset Legend"\n  legendDescription="Note: * denoted required information"\n  isBorderVisible={false}\n  isLegendVisible={false}\n  isRequired\n>\n  <Checkbox\n    checked={requiredCheckbox}\n    label="Required Checkbox"\n    onChange={(event) => {\n      setRequiredCheckbox(!requiredCheckbox);\n    }}\n    isRequired\n  />\n  <Checkbox\n    checked={nonRequiredCheckbox}\n    label="Non-Required Checkbox"\n    onChange={(event) => {\n      setNonRequiredCheckbox(!nonRequiredCheckbox);\n    }}\n  />\n</Fieldset>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Visible Border and Non Visible Legend example: The `legend` property is set to "Fieldset Legend," and the `isLegendVisible` property is set to `false,` and the `isRequired` property is set to `true.`'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\nimport { Checkbox } from \'mark-one\';\n\nconst [requiredCheckbox, setRequiredCheckbox] = useState(false);\nconst [nonRequiredCheckbox, setNonRequiredCheckbox] = useState(false);\n\n<Fieldset\n  legend="Fieldset Legend"\n  legendDescription="Note: * denoted required information"\n  isLegendVisible={false}\n  isRequired\n>\n  <Checkbox\n    checked={requiredCheckbox}\n    label="Required Checkbox"\n    onChange={(event) => {\n      setRequiredCheckbox(!requiredCheckbox);\n    }}\n    isRequired\n  />\n  <Checkbox\n    checked={nonRequiredCheckbox}\n    label="Non-Required Checkbox"\n    onChange={(event) => {\n      setNonRequiredCheckbox(!nonRequiredCheckbox);\n    }}\n  />\n</Fieldset>',
        'settings': {},
        'evalInContext': evalInContext
    }
]
	

/***/ }),

/***/ 917:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'Form',
    'description': '',
    'methods': [],
    'props': [
        {
            'defaultValue': null,
            'description': 'A label that specifies the purpose of the form',
            'name': 'label',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Form.tsx',
                'name': 'FormProps'
            },
            'required': true,
            'type': { 'name': 'string' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'The id of the form',
            'name': 'id',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/Form.tsx',
                'name': 'FormProps'
            },
            'required': false,
            'type': { 'name': 'string' },
            'tags': {}
        }
    ],
    'examples': __webpack_require__(918)
}
	

/***/ }),

/***/ 918:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'mark-one': __webpack_require__(15),
    'react': __webpack_require__(0),
    './../../src/Forms/Form.tsx': __webpack_require__(179)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst Form$0 = require('./../../src/Forms/Form.tsx');\nconst Form = Form$0.default || (Form$0['Form'] || Form$0);", requireInRuntime);

module.exports = [
    {
        'type': 'markdown',
        'content': 'This Form component adds a margin to each of its direct children.'
    },
    {
        'type': 'code',
        'content': 'import {\n  TextInput,\n  Fieldset,\n  Checkbox,\n  Button,\n  Dropdown,\n  RadioButton,\n  VARIANT,\n  POSITION\n} from \'mark-one\';\nimport { useState } from \'react\';\n\nconst [requiredCheckbox, setRequiredCheckbox] = useState(false);\nconst [undergraduateCheckbox, setUndergraduateCheckbox] = useState(false);\nconst [checkboxValue, setCheckboxValue] = useState(\'fall\');\nconst [radioCheckedValue, setRadioCheckedValue] = useState(\'\');\nconst [notesValue, setNotesValue] = useState(\'\');\n\n<Form\n  id="testForm"\n  label="New Student Registration Form"\n>\n  <Fieldset\n    legend="Appointment Time Preference"\n    isBorderVisible\n    isLegendVisible\n  >\n    <RadioButton\n      label="Morning"\n      value="morning"\n      name="visibleFieldsetTest"\n      checked={radioCheckedValue === \'morning\'}\n      onChange={(event) => setRadioCheckedValue(event.target.value)}\n    />\n    <RadioButton\n      label="Noon"\n      value="noon"\n      name="visibleFieldsetTest"\n      checked={radioCheckedValue === \'noon\'}\n      onChange={(event) => setRadioCheckedValue(event.target.value)}\n    />\n    <RadioButton\n      label="Evening"\n      value="evening"\n      name="visibleFieldsetTest"\n      checked={radioCheckedValue === \'evening\'}\n      onChange={(event) => setRadioCheckedValue(event.target.value)}\n    />\n  </Fieldset>\n  <Fieldset\n    legend="Class Level Information"\n    isBorderVisible={false}\n    isLegendVisible={false}\n  >\n    <Checkbox\n      checked={undergraduateCheckbox}\n      label="Undergraduate"\n      onChange={(event) => {\n        setUndergraduateCheckbox(!undergraduateCheckbox);\n      }}\n      hideError\n    />\n  </Fieldset>\n  <Dropdown\n    options={[\n      {\n        value: \'all\',\n        label: \'All\',\n      },\n      {\n        value: \'fall\',\n        label: \'Fall\',\n      },\n      {\n        value: \'spring\',\n        label: \'Spring\',\n      },\n    ]}\n    value={checkboxValue}\n    id="testSemestersDropdown"\n    name="semesters"\n    onChange={function(event){\n      setCheckboxValue(event.target.value);\n    }}\n    label="Semester"\n    labelPosition={POSITION.TOP}\n  />\n  <TextInput\n    id="testNotes"\n    name="notes"\n    value={notesValue}\n    labelPosition={POSITION.TOP}\n    label="Notes"\n    onChange={(event) => {\n    setNotesValue(event.target.value);\n  }}\n  />\n  <Button\n    onClick={() => {\n      alert(\'You clicked the primary button\')\n    }}\n    variant={VARIANT.PRIMARY}\n  >\n    Submit\n  </Button>\n</Form>',
        'settings': {},
        'evalInContext': evalInContext
    }
]
	

/***/ }),

/***/ 919:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'InputLabel',
    'description': '',
    'methods': [],
    'props': [
        {
            'defaultValue': null,
            'description': '',
            'name': 'as',
            'parent': void 0,
            'required': false,
            'type': { 'name': 'never' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': '',
            'name': 'forwardedAs',
            'parent': void 0,
            'required': false,
            'type': { 'name': 'never' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': false },
            'description': 'If true, hide the error Msg and change the style StyledLabelProps',
            'name': 'hideError',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/InputLabel.tsx',
                'name': 'StyledInputLabelProps'
            },
            'required': false,
            'type': { 'name': 'boolean' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': true },
            'description': 'If true, label will be visible',
            'name': 'isLabelVisible',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/InputLabel.tsx',
                'name': 'StyledInputLabelProps'
            },
            'required': false,
            'type': { 'name': 'boolean' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': 'POSITION.LEFT' },
            'description': 'Allows you to pass in a label position property from the POSITION enum',
            'name': 'labelPosition',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/InputLabel.tsx',
                'name': 'StyledInputLabelProps'
            },
            'required': false,
            'type': { 'name': 'InputLabelPosition' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': '',
            'name': 'ref',
            'parent': void 0,
            'required': false,
            'type': { 'name': '((instance: HTMLLabelElement) => void) | RefObject<HTMLLabelElement>' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': '',
            'name': 'theme',
            'parent': void 0,
            'required': false,
            'type': { 'name': 'any' },
            'tags': {}
        }
    ],
    'examples': __webpack_require__(920)
}
	

/***/ }),

/***/ 920:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'react': __webpack_require__(0),
    'mark-one': __webpack_require__(15),
    './../../src/Forms/InputLabel.tsx': __webpack_require__(38)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst InputLabel$0 = require('./../../src/Forms/InputLabel.tsx');\nconst InputLabel = InputLabel$0.default || (InputLabel$0['InputLabel'] || InputLabel$0);", requireInRuntime);

module.exports = [
    {
        'type': 'markdown',
        'content': 'The `InputLabel` component is used by the `TextInput` and `Dropdown` components, while the `CheckLabel` component is used by the `RadioButton` and `Checkbox` components. These label variations were created to align input fields when using various form elements in tandem.\n\nAligning `TextInput` and `Checkbox` fields example: The labelPosition for `TextInput` is `POSITION.TOP`, and the `labelPosition` for the `Checkbox` is `POSITION.RIGHT`.'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\nimport { Fieldset, TextInput, Checkbox, POSITION } from \'mark-one\';\n\nconst [checkValue, setCheckValue] = useState(false);\nconst [textValue, setTextValue] = useState(\'Some valid input\');\n<>\n  <Fieldset\n    legend="Fieldset Legend"\n    isBorderVisible={false}\n    isLegendVisible={false}\n  >\n    <Checkbox\n      checked={checkValue}\n      label="Undergraduate"\n      labelPosition={POSITION.RIGHT}\n      onChange={(event) => {\n        setCheckValue(!checkValue);\n      }}\n    />\n    <TextInput\n      name="example"\n      id="example"\n      value={textValue}\n      label="Description"\n      labelPosition={POSITION.TOP}\n      onChange={(event) => {\n      setTextValue(event.target.value);\n      }}\n    />\n  </Fieldset>\n</>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Aligning `TextInput` and `Checkbox` fields example: The `labelPosition` for the `TextInput` and `Checkbox` is `POSITION.LEFT.`'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\nimport { Fieldset, TextInput, Checkbox, POSITION } from \'mark-one\';\n\nconst [checkValue, setCheckValue] = useState(false);\nconst [textValue, setTextValue] = useState(\'Some valid input\');\n<>\n  <Fieldset\n    legend="Fieldset Legend"\n    isBorderVisible={false}\n    isLegendVisible={false}\n  >\n    <Checkbox\n      checked={checkValue}\n      label="Undergraduate"\n      labelPosition={POSITION.LEFT}\n      onChange={(event) => {\n        setCheckValue(!checkValue);\n      }}\n    />\n    <TextInput\n      name="example"\n      id="example"\n      value={textValue}\n      label="Description"\n      labelPosition={POSITION.LEFT}\n      onChange={(event) => {\n      setTextValue(event.target.value);\n      }}\n    />\n  </Fieldset>\n</>',
        'settings': {},
        'evalInContext': evalInContext
    }
]
	

/***/ }),

/***/ 921:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'RadioButton',
    'description': '',
    'methods': [],
    'props': [
        {
            'defaultValue': null,
            'description': 'Specifies the label text',
            'name': 'label',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/RadioButton.tsx',
                'name': 'NativeRadioButtonProps'
            },
            'required': true,
            'type': { 'name': 'string' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'The name of the radio button',
            'name': 'name',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/RadioButton.tsx',
                'name': 'NativeRadioButtonProps'
            },
            'required': true,
            'type': { 'name': 'string' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'The value of the radio button',
            'name': 'value',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/RadioButton.tsx',
                'name': 'NativeRadioButtonProps'
            },
            'required': true,
            'type': { 'name': 'string' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'Specifies whether button is checked',
            'name': 'checked',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/RadioButton.tsx',
                'name': 'NativeRadioButtonProps'
            },
            'required': false,
            'type': { 'name': 'boolean' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'If true, radio button will be disabled',
            'name': 'disabled',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/RadioButton.tsx',
                'name': 'NativeRadioButtonProps'
            },
            'required': false,
            'type': { 'name': 'boolean' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'Specifies the ref of the radio button',
            'name': 'forwardRef',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/RadioButton.tsx',
                'name': 'RadioButtonProps'
            },
            'required': false,
            'type': { 'name': 'Ref<HTMLInputElement>' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'The id tied to the radio button',
            'name': 'id',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/RadioButton.tsx',
                'name': 'NativeRadioButtonProps'
            },
            'required': false,
            'type': { 'name': 'string' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'If true, the radio button is required to submit the form',
            'name': 'isRequired',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/RadioButton.tsx',
                'name': 'RadioButtonProps'
            },
            'required': false,
            'type': { 'name': 'boolean' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': 'POSITION.RIGHT' },
            'description': 'Allows you to pass in a label position property from the POSITION enum',
            'name': 'labelPosition',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/RadioButton.tsx',
                'name': 'RadioButtonProps'
            },
            'required': false,
            'type': { 'name': 'CheckLabelPosition' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'Function to call on change event',
            'name': 'onChange',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/RadioButton.tsx',
                'name': 'NativeRadioButtonProps'
            },
            'required': false,
            'type': { 'name': '(event: ChangeEvent<Element>) => void' },
            'tags': {}
        }
    ],
    'examples': __webpack_require__(922)
}
	

/***/ }),

/***/ 922:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'react': __webpack_require__(0),
    'mark-one': __webpack_require__(15),
    './../../src/Forms/RadioButton.tsx': __webpack_require__(178)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst RadioButton$0 = require('./../../src/Forms/RadioButton.tsx');\nconst RadioButton = RadioButton$0.default || (RadioButton$0['RadioButton'] || RadioButton$0);", requireInRuntime);

module.exports = [
    {
        'type': 'markdown',
        'content': 'Non Visible Fieldset example: A radio button group should be wrapped with the `Fieldset` component for accessibility purposes. The following example includes a `Fieldset` in which is `isBorderVisible` and `isLegendVisible` props are set to `false.`'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\nimport { Fieldset } from \'mark-one\';\n\nconst [checkedValue, setCheckedValue] = useState(\'\');\n\n<>\n  <Fieldset\n    legend="Fieldset Legend"\n    isBorderVisible={false}\n    isLegendVisible={false}\n  >\n    <RadioButton\n      label="Foo"\n      value="foo"\n      name="nonVisibleFieldsetTest"\n      checked={checkedValue === \'foo\'}\n      onChange={(event) => setCheckedValue(event.target.value)}\n    />\n    <RadioButton\n      label="Bar"\n      value="bar"\n      name="nonVisibleFieldsetTest"\n      checked={checkedValue === \'bar\'}\n      onChange={(event) => setCheckedValue(event.target.value)}\n    />\n    <RadioButton\n      label="Baz"\n      value="baz"\n      name="nonVisibleFieldsetTest"\n      checked={checkedValue === \'baz\'}\n      onChange={(event) => setCheckedValue(event.target.value)}\n    />\n  </Fieldset>\n</>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Visible Fieldset example: A radio button group should be wrapped with the `Fieldset` component for accessibility purposes. The following example includes a `Fieldset` in which is `isBorderVisible` and `isLegendVisible` props are set to `true.`'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\nimport { Fieldset } from \'mark-one\';\n\nconst [checkedValue, setCheckedValue] = useState(\'\');\n\n<>\n  <Fieldset\n    legend="Appointment Time Preference"\n    isBorderVisible\n    isLegendVisible\n  >\n    <RadioButton\n      label="Morning"\n      value="morning"\n      name="visibleFieldsetTest"\n      checked={checkedValue === \'morning\'}\n      onChange={(event) => setCheckedValue(event.target.value)}\n    />\n    <RadioButton\n      label="Noon"\n      value="noon"\n      name="visibleFieldsetTest"\n      checked={checkedValue === \'noon\'}\n      onChange={(event) => setCheckedValue(event.target.value)}\n    />\n    <RadioButton\n      label="Evening"\n      value="evening"\n      name="visibleFieldsetTest"\n      checked={checkedValue === \'evening\'}\n      onChange={(event) => setCheckedValue(event.target.value)}\n    />\n  </Fieldset>\n</>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Disabled example: The `disabled` property is `true` for the last radio button.'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\nimport { Fieldset } from \'mark-one\';\n\nconst [checkedValue, setCheckedValue] = useState(\'\');\n\n<>\n  <Fieldset\n    legend="Fieldset Legend"\n    isBorderVisible={false}\n    isLegendVisible={false}\n  >\n    <RadioButton\n      label="One"\n      value="one"\n      name="quantity"\n      checked={checkedValue === \'one\'}\n      onChange={(event) => setCheckedValue(event.target.value)}\n    />\n    <RadioButton\n      label="Two"\n      value="two"\n      name="quantity"\n      checked={checkedValue === \'two\'}\n      onChange={(event) => setCheckedValue(event.target.value)}\n    />\n    <RadioButton\n      label="Three"\n      value="three"\n      name="quantity"\n      checked={checkedValue === \'three\'}\n      disabled\n      onChange={(event) => setCheckedValue(event.target.value)}\n    />\n  </Fieldset>\n</>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Required example: The `isRequired` prop is present.'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\nimport { Fieldset } from \'mark-one\';\n\nconst [checkedValue, setCheckedValue] = useState(\'\');\n\n<>\n  <Fieldset\n    legend="Terms and Conditions"\n    isBorderVisible={false}\n    isLegendVisible={false}\n    legendDescription="Note: * denoted required information"\n  >\n    <RadioButton\n      label="I accept the terms and conditions."\n      value="agree"\n      name="terms"\n      checked={checkedValue === \'agree\'}\n      isRequired\n      onChange={(event) => setCheckedValue(event.target.value)}\n    />\n    <RadioButton\n      label="I do not accept the terms and conditions."\n      value="disagree"\n      name="terms"\n      checked={checkedValue === \'disagree\'}\n      onChange={(event) => setCheckedValue(event.target.value)}\n    />\n  </Fieldset>\n</>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Error Message example: The `errorMessage` property of the Fieldset wrapping the radio buttons is set.'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\nimport { Fieldset } from \'mark-one\';\n\nconst [checkedValue, setCheckedValue] = useState(\'\');\n\n<>\n  <Fieldset\n    legend="Terms and Conditions"\n    isBorderVisible\n    isLegendVisible\n    legendDescription="Note: * denoted required information"\n    errorMessage="Error: Please make a selection before proceeding."\n  >\n    <RadioButton\n      label="I accept the terms and conditions."\n      value="accept"\n      name="conditions"\n      checked={checkedValue === \'accept\'}\n      isRequired\n      onChange={(event) => setCheckedValue(event.target.value)}\n    />\n    <RadioButton\n      label="I do not accept the terms and conditions."\n      value="decline"\n      name="conditions"\n      checked={checkedValue === \'decline\'}\n      onChange={(event) => setCheckedValue(event.target.value)}\n    />\n  </Fieldset>\n</>',
        'settings': {},
        'evalInContext': evalInContext
    }
]
	

/***/ }),

/***/ 923:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'TextInput',
    'description': '',
    'methods': [],
    'props': [
        {
            'defaultValue': null,
            'description': 'Specifies the label text',
            'name': 'label',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/TextInput.tsx',
                'name': 'TextInputProps'
            },
            'required': true,
            'type': { 'name': 'string' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': '',
            'name': 'as',
            'parent': void 0,
            'required': false,
            'type': { 'name': 'never' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'The body of the error message, if applicable',
            'name': 'errorMessage',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/TextInput.tsx',
                'name': 'TextInputProps'
            },
            'required': false,
            'type': { 'name': 'string' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'Specifies the size of the font for the text in the input field',
            'name': 'fontSize',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/TextInput.tsx',
                'name': 'TextInputProps'
            },
            'required': false,
            'type': { 'name': 'string' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'Specifies the ref of the text input',
            'name': 'forwardRef',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/TextInput.tsx',
                'name': 'TextInputProps'
            },
            'required': false,
            'type': { 'name': '((instance: HTMLInputElement) => void) | RefObject<HTMLInputElement>' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': '',
            'name': 'forwardedAs',
            'parent': void 0,
            'required': false,
            'type': { 'name': 'never' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': false },
            'description': 'If true, omit the margin style in label',
            'name': 'hideError',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/TextInput.tsx',
                'name': 'TextInputProps'
            },
            'required': false,
            'type': { 'name': 'boolean' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': true },
            'description': 'If true, label will be visible',
            'name': 'isLabelVisible',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/TextInput.tsx',
                'name': 'TextInputProps'
            },
            'required': false,
            'type': { 'name': 'boolean' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'If true, the input for the text field is required to submit the form',
            'name': 'isRequired',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/TextInput.tsx',
                'name': 'TextInputProps'
            },
            'required': false,
            'type': { 'name': 'boolean' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': 'POSITION.LEFT' },
            'description': 'Allows you to pass in a label position property from the POSITION enum',
            'name': 'labelPosition',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/TextInput.tsx',
                'name': 'TextInputProps'
            },
            'required': false,
            'type': { 'name': 'InputLabelPosition' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': '',
            'name': 'ref',
            'parent': void 0,
            'required': false,
            'type': { 'name': '((instance: HTMLInputElement) => void) | RefObject<HTMLInputElement>' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': '',
            'name': 'theme',
            'parent': void 0,
            'required': false,
            'type': { 'name': 'any' },
            'tags': {}
        }
    ],
    'examples': __webpack_require__(924)
}
	

/***/ }),

/***/ 924:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'react': __webpack_require__(0),
    'mark-one': __webpack_require__(15),
    './../../src/Forms/TextInput.tsx': __webpack_require__(110)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst TextInput$0 = require('./../../src/Forms/TextInput.tsx');\nconst TextInput = TextInput$0.default || (TextInput$0['TextInput'] || TextInput$0);", requireInRuntime);

module.exports = [
    {
        'type': 'markdown',
        'content': 'Label example: The optional `labelPosition` prop defaults to `POSITION.LEFT.`'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\n\nconst [value, setValue] = useState(\'Some valid input\');\n\n<TextInput\n  value={value}\n  name="example"\n  id="example"\n  label="Description:"\n  onChange={(event) => {\n    setValue(event.target.value);\n  }}\n/>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Label example: The prop `labelPosition` is set to `POSITION.LEFT.`'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\nimport { POSITION } from \'mark-one\';\n\nconst [value, setValue] = useState(\'Some valid input\');\n\n<TextInput\n  value={value}\n  name="example"\n  id="example"\n  label="Description:"\n  labelPosition={POSITION.LEFT}\n  onChange={(event) => {\n    setValue(event.target.value);\n  }}\n/>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Label example: The prop `labelPosition` is set to `POSITION.TOP.`'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\nimport { POSITION } from \'mark-one\';\n\nconst [value, setValue] = useState(\'Some valid input\');\n\n<TextInput\n  value={value}\n  name="example"\n  id="example"\n  label="Description:"\n  labelPosition={POSITION.TOP}\n  onChange={(event) => {\n    setValue(event.target.value);\n  }}\n/>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Label example: The `isLabelVisible` prop is set to `false.`'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\n\nconst [value, setValue] = useState(\'Some valid input\');\n\n<TextInput\n  value={value}\n  name="isLabelVisibleTextExample"\n  id="isLabelVisibleTextExample"\n  label="Description:"\n  isLabelVisible={false}\n  onChange={(event) => {\n    setValue(event.target.value);\n  }}\n/>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Text Input example: The `disabled` prop set to `true.`'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\n\nconst [value, setValue] = useState(\'Some valid input\');\n\n<TextInput\n  value={value}\n  name="example"\n  id="example"\n  label="Description:"\n  disabled="disabled"\n  onChange={(event) => {\n    setValue(event.target.value);\n  }}\n/>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Error Message example: The optional `errorMessage` prop is not set.'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\n\nconst [value, setValue] = useState(\'Some valid input\');\n\n<TextInput\n  value={value}\n  name="example"\n  id="example"\n  label="Description:"\n  onChange={(event) => {\n    setValue(event.target.value);\n  }}\n/>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Error Message example: The optional `errorMessage` property is set, and the `labelPosition` prop defaults to `POSITION.LEFT.`'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\n\nconst [value, setValue] = useState(\'Invalid value\');\n\n<TextInput\n  value={value}\n  name="example"\n  id="example"\n  errorMessage="Error: Please enter a valid ID"\n  label="Description:"\n  onChange={(event) => {\n    setValue(event.target.value);\n  }}\n/>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Error Message example: The optional `errorMessage` property is set, and the `labelPosition` prop is set to `POSITION.TOP.`'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\nimport { POSITION } from \'mark-one\';\n\nconst [value, setValue] = useState(\'Invalid value\');\n\n<TextInput\n  value={value}\n  name="example"\n  id="example"\n  errorMessage="Error: Please enter a valid ID"\n  label="Description:"\n  labelPosition={POSITION.TOP}\n  onChange={(event) => {\n    setValue(event.target.value);\n  }}\n/>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Error Message example: The optional `errorMessage` prop is not set, and the \n`hideError` prop is set to `true`, which changes the errorMessage style.'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\n\nconst [value, setValue] = useState(\'Some valid input\');\n\n<TextInput\n  value={value}\n  name="example"\n  id="example"\n  label="Description:"\n  hideError={true}\n  onChange={(event) => {\n    setValue(event.target.value);\n  }}\n/>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Error Message example: The optional `errorMessage` and `hideError` props \nare set to `true`, while `isLabelVisible` prop is set to false which removes \nthe errorMessage and its style.'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\n\nconst [value, setValue] = useState(\'Some valid input\');\n\n<TextInput\n  value={value}\n  name="hideErrorTextExample"\n  id="hideErrorTextExample"\n  label="Description:"\n  errorMessage="Error: Please enter a valid ID"\n  hideError={true}\n  isLabelVisible={false}\n  onChange={(event) => {\n    setValue(event.target.value);\n  }}\n/>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Required selection example: The optional `isRequired` property is set, which causes an asterisk denoting that the field is required appears next to the label. The `labelPosition` prop is set to `POSITION.TOP.`'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\nimport { POSITION } from \'mark-one\';\n\nconst [value, setValue] = useState(\'Some valid input\');\n\n<TextInput\n  value={value}\n  name="example"\n  id="example"\n  label="Description"\n  onChange={(event) => {\n    setValue(event.target.value);\n  }}\n  labelPosition={POSITION.TOP}\n  isRequired\n/>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Required selection example: The optional `isRequired` property is set, which causes an asterisk denoting that the field is required appears next to the label. The `labelPosition` prop is set to `POSITION.LEFT.`'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\nimport { POSITION } from \'mark-one\';\n\n\nconst [value, setValue] = useState(\'Some valid input\');\n\n<TextInput\n  value={value}\n  name="example"\n  id="example"\n  label="Description"\n  onChange={(event) => {\n    setValue(event.target.value);\n  }}\n  labelPosition={POSITION.LEFT}\n  isRequired\n/>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'onClick example: The optional `onClick` property is set.'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\nimport { POSITION } from \'mark-one\';\n\n\nconst [value, setValue] = useState(\'Some valid input\');\n\n<TextInput\n  value={value}\n  name="example"\n  id="example"\n  label="Description"\n  onChange={(event) => {\n    setValue(event.target.value);\n  }}\n  onClick={() => {\n    alert(\'You clicked the text input component.\');\n  }}\n  labelPosition={POSITION.LEFT}\n  isLabelVisible={false}\n/>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Ref example: The optional `forwardRef` property is set. When the test button is clicked, the focus shifts from the button itself to the text input field.'
    },
    {
        'type': 'code',
        'content': 'import { useState, useRef } from \'react\';\nimport { Button, VARIANT } from \'mark-one\';\n\nconst ref = useRef(null);\nconst [value, setValue] = useState(\'\');\nconst onButtonClick = () => {\n  ref.current.focus();\n}\n\n<>\n  <Button\n    onClick={onButtonClick}\n    variant={VARIANT.INFO}\n  >\n    Focus the input\n  </Button>\n  <TextInput\n    id="example"\n    value={value}\n    name="example"\n    label="Description:"\n    onChange={(event) => {\n      setValue(event.target.value);\n    }}\n    forwardRef={ref}\n  />\n</>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Ref example: The optional `forwardRef` property is set. When the button is clicked, the focus shifts from the button itself to the text input field inside a modal.'
    },
    {
        'type': 'code',
        'content': 'import { useState, useRef } from \'react\';\nimport { Button, Modal, ModalBody, VARIANT } from \'mark-one\';\n\nconst ref = useRef(null);\nconst [value, setValue] = useState(\'\');\nconst [modalVisible, setModalVisible] = useState(false);\nconst onButtonClick = () => {\n  setModalVisible(true);\n  /* Since modal may not have been rendered in DOM, wait for it to be\n  rendered by letting next task of event queue run first */\n  setTimeout(() => ref.current.focus(), 0);\n}\n\n<>\n  <Button\n    onClick={onButtonClick}\n    variant={VARIANT.INFO}\n  >\n    Focus the input\n  </Button>\n  <Modal\n    ariaLabelledBy="testButton"\n    closeHandler={() => {setModalVisible(false)}}\n    isVisible={modalVisible}\n  >\n    <ModalBody>\n      <TextInput\n        value={value}\n        name="example"\n        label="Description:"\n        onChange={(event) => {\n          setValue(event.target.value);\n        }}\n        forwardRef={ref}\n      />\n      <Button\n        onClick={() => setModalVisible(false)}\n        variant={VARIANT.BASE}\n      >\n        Close Modal\n      </Button>\n    </ModalBody>\n  </Modal>\n</>',
        'settings': {},
        'evalInContext': evalInContext
    }
]
	

/***/ }),

/***/ 925:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'ValidationErrorMessage',
    'description': '',
    'methods': [],
    'props': [
        {
            'defaultValue': null,
            'description': 'Text or components to be displayed',
            'name': 'children',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/ValidationErrorMessage.tsx',
                'name': 'ValidationErrorMessageProps'
            },
            'required': false,
            'type': { 'name': 'ReactNode' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'An html id used by the parent Input component to associate the error',
            'name': 'id',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Forms/ValidationErrorMessage.tsx',
                'name': 'ValidationErrorMessageProps'
            },
            'required': false,
            'type': { 'name': 'string' },
            'tags': {}
        }
    ],
    'examples': __webpack_require__(926)
}
	

/***/ }),

/***/ 926:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'react': __webpack_require__(0),
    './../../src/Forms/ValidationErrorMessage.tsx': __webpack_require__(52)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst ValidationErrorMessage$0 = require('./../../src/Forms/ValidationErrorMessage.tsx');\nconst ValidationErrorMessage = ValidationErrorMessage$0.default || (ValidationErrorMessage$0['ValidationErrorMessage'] || ValidationErrorMessage$0);", requireInRuntime);

module.exports = [
    {
        'type': 'markdown',
        'content': 'Used for displaying information related to validation errors in a form.'
    },
    {
        'type': 'code',
        'content': '<ValidationErrorMessage>\n  Error: This entry may only contain numbers.\n</ValidationErrorMessage>',
        'settings': {},
        'evalInContext': evalInContext
    }
]
	

/***/ }),

/***/ 927:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'IconLink',
    'description': '',
    'methods': [],
    'props': [
        {
            'defaultValue': null,
            'description': 'Specifies the alt text for screen readers',
            'name': 'alt',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Icons/IconLink.tsx',
                'name': 'IconLinkProps'
            },
            'required': true,
            'type': { 'name': 'string' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'Specifies the tooltip text',
            'name': 'title',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Icons/IconLink.tsx',
                'name': 'IconLinkProps'
            },
            'required': true,
            'type': { 'name': 'string' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'Specifies the Font Awesome Icon(s)',
            'name': 'children',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Icons/IconLink.tsx',
                'name': 'IconLinkProps'
            },
            'required': false,
            'type': { 'name': 'string | number | boolean | {} | ReactElement<any, string | ((props: any) => ReactElement<any, string | ... | (new (props: any) => Component<any, any, any>)>) | (new (props: any) => Component<...>)> | ReactNodeArray | ReactPortal | ReactElement<...>' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'Function to call on click event',
            'name': 'clickHandler',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Icons/IconLink.tsx',
                'name': 'IconLinkProps'
            },
            'required': false,
            'type': { 'name': '(event: MouseEvent<Element, MouseEvent>) => void' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'Specifies the URL the user will be directed to when the link is clicked',
            'name': 'href',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Icons/IconLink.tsx',
                'name': 'IconLinkProps'
            },
            'required': false,
            'type': { 'name': 'string' },
            'tags': {}
        }
    ],
    'examples': __webpack_require__(928)
}
	

/***/ }),

/***/ 928:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    '@fortawesome/react-fontawesome': __webpack_require__(56),
    '@fortawesome/free-solid-svg-icons': __webpack_require__(57),
    'react': __webpack_require__(0),
    './../../src/Icons/IconLink.tsx': __webpack_require__(169)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst IconLink$0 = require('./../../src/Icons/IconLink.tsx');\nconst IconLink = IconLink$0.default || (IconLink$0['IconLink'] || IconLink$0);", requireInRuntime);

module.exports = [
    {
        'type': 'markdown',
        'content': 'A specialized component for displaying icons as links.'
    },
    {
        'type': 'code',
        'content': 'import { FontAwesomeIcon } from \'@fortawesome/react-fontawesome\';\nimport { faEdit } from \'@fortawesome/free-solid-svg-icons\';\n\n<IconLink\n  title="Edit account information"\n  alt="Edit account information"\n  clickHandler={() => {alert(\'You clicked the icon!\')}}\n>\n  <FontAwesomeIcon icon={faEdit} size="small" />\n</IconLink>',
        'settings': {},
        'evalInContext': evalInContext
    }
]
	

/***/ }),

/***/ 929:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'Header',
    'description': '',
    'methods': [],
    'props': [{
            'defaultValue': null,
            'description': '',
            'name': 'theme',
            'parent': void 0,
            'required': false,
            'type': { 'name': 'any' },
            'tags': {}
        }],
    'examples': __webpack_require__(930)
}
	

/***/ }),

/***/ 930:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    './H_SEAS_logo_RGB.svg': __webpack_require__(248),
    'mark-one': __webpack_require__(15),
    'react': __webpack_require__(0),
    './../../src/Layout/Header.tsx': __webpack_require__(155)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst Header$0 = require('./../../src/Layout/Header.tsx');\nconst Header = Header$0.default || (Header$0['Header'] || Header$0);", requireInRuntime);

module.exports = [
    {
        'type': 'markdown',
        'content': 'The Header uses flexbox for positioning, and accepts a `justify` prop that controls the layout. The default value is `space-between`, which works well for multiple items:'
    },
    {
        'type': 'code',
        'content': 'import logo from \'./H_SEAS_logo_RGB.svg\';\nimport { Logo, PageTitle } from \'mark-one\';\n\n<Header>\n  <Logo\n    image={logo}\n    width="175px"\n    href="#"\n  >\n    The Link Description\n  </Logo>\n  <PageTitle>Application Title</PageTitle>\n  <div>three</div>\n  <div>menu</div>\n  <div>items</div>\n</Header>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'A value of `center` be used to position content around the center. (See [MDN\'s docs](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content) for all supported values).'
    },
    {
        'type': 'code',
        'content': 'import { PageTitle } from \'mark-one\';\n\n<Header justify="center">\n  <PageTitle>Centered Title</PageTitle>\n</Header>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'You can also pass in a custom `background` prop to replace the default transparent background'
    },
    {
        'type': 'code',
        'content': 'import { PageTitle } from \'mark-one\';\n\n<Header justify="center" background="#eafeaf">\n  <PageTitle>Custom Background</PageTitle>\n</Header>',
        'settings': {},
        'evalInContext': evalInContext
    }
]
	

/***/ }),

/***/ 931:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'Logo',
    'description': '',
    'methods': [],
    'props': [{
            'defaultValue': null,
            'description': '',
            'name': 'theme',
            'parent': void 0,
            'required': false,
            'type': { 'name': 'any' },
            'tags': {}
        }],
    'examples': __webpack_require__(932)
}
	

/***/ }),

/***/ 932:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    './H_SEAS_logo_RGB.svg': __webpack_require__(248),
    'react': __webpack_require__(0),
    './../../src/Layout/Logo.tsx': __webpack_require__(156)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst Logo$0 = require('./../../src/Layout/Logo.tsx');\nconst Logo = Logo$0.default || (Logo$0['Logo'] || Logo$0);", requireInRuntime);

module.exports = [
    {
        'type': 'markdown',
        'content': 'Used for rendering an image link with screen-reader compatible text:'
    },
    {
        'type': 'code',
        'content': 'import logo from \'./H_SEAS_logo_RGB.svg\';\n\n<Logo image={logo} width="500px" height="150px" href="#SEAS">\n  This text is not visible, but is in the DOM\n</Logo>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'By default, it will render at `175px` x `50px`:'
    },
    {
        'type': 'code',
        'content': 'import logo from \'./H_SEAS_logo_RGB.svg\';\n\n<Logo image={logo} href="#SEAS">\n  This text is not visible, but is in the DOM\n</Logo>',
        'settings': {},
        'evalInContext': evalInContext
    }
]
	

/***/ }),

/***/ 933:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'PageBody',
    'description': '',
    'methods': [],
    'props': [{
            'defaultValue': null,
            'description': '',
            'name': 'theme',
            'parent': void 0,
            'required': false,
            'type': { 'name': 'any' },
            'tags': {}
        }],
    'examples': __webpack_require__(934)
}
	

/***/ }),

/***/ 934:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'mark-one': __webpack_require__(15),
    'react': __webpack_require__(0),
    './../../src/Layout/PageBody.tsx': __webpack_require__(157)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst PageBody$0 = require('./../../src/Layout/PageBody.tsx');\nconst PageBody = PageBody$0.default || (PageBody$0['PageBody'] || PageBody$0);", requireInRuntime);

module.exports = [
    {
        'type': 'markdown',
        'content': 'A very basic component for displaying the main body of a page.'
    },
    {
        'type': 'code',
        'content': 'import { PageTitle } from \'mark-one\';\n\n<PageBody>\n  <PageTitle>Hello world</PageTitle>\n\n  <p>\n    Here is some example content\n  </p>\n</PageBody>',
        'settings': {},
        'evalInContext': evalInContext
    }
]
	

/***/ }),

/***/ 935:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'ExternalLink',
    'description': 'A default <a> element with styles mirroring the Link component\n',
    'methods': [],
    'props': [
        {
            'defaultValue': null,
            'description': '',
            'name': 'as',
            'parent': void 0,
            'required': false,
            'type': { 'name': 'never' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': '',
            'name': 'forwardedAs',
            'parent': void 0,
            'required': false,
            'type': { 'name': 'never' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': '',
            'name': 'ref',
            'parent': void 0,
            'required': false,
            'type': { 'name': '((instance: HTMLAnchorElement) => void) | RefObject<HTMLAnchorElement>' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': '',
            'name': 'theme',
            'parent': void 0,
            'required': false,
            'type': { 'name': 'any' },
            'tags': {}
        }
    ],
    'tags': {},
    'examples': __webpack_require__(936)
}
	

/***/ }),

/***/ 936:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    '@fortawesome/react-fontawesome': __webpack_require__(56),
    '@fortawesome/free-solid-svg-icons': __webpack_require__(57),
    'react': __webpack_require__(0),
    './../../src/Links/ExternalLink.tsx': __webpack_require__(186)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst ExternalLink$0 = require('./../../src/Links/ExternalLink.tsx');\nconst ExternalLink = ExternalLink$0.default || (ExternalLink$0['ExternalLink'] || ExternalLink$0);", requireInRuntime);

module.exports = [
    {
        'type': 'markdown',
        'content': 'This component is a styled version of a regular `<a>` link, for use when we need to link to external resources.'
    },
    {
        'type': 'code',
        'content': 'import { FontAwesomeIcon } from \'@fortawesome/react-fontawesome\';\nimport { faSignOutAlt } from \'@fortawesome/free-solid-svg-icons\';\n\n<ExternalLink href="https://key.harvard.edu/logout">\n  Log Out\n  {\' \'}\n  <FontAwesomeIcon icon={faSignOutAlt} />\n</ExternalLink>',
        'settings': {},
        'evalInContext': evalInContext
    }
]
	

/***/ }),

/***/ 937:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'Link',
    'description': 'An extension of the default React Router Link component with styles overriden\n',
    'methods': [],
    'props': [],
    'tags': {},
    'examples': __webpack_require__(938)
}
	

/***/ }),

/***/ 938:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'react-router-dom': __webpack_require__(249),
    'react': __webpack_require__(0),
    './../../src/Links/Link.tsx': __webpack_require__(185)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst Link$0 = require('./../../src/Links/Link.tsx');\nconst Link = Link$0.default || (Link$0['Link'] || Link$0);", requireInRuntime);

module.exports = [
    {
        'type': 'markdown',
        'content': 'This component is an extension of the default [React Router Link](https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/api/Link.md) component with custom styling. This `Link` component could be used in conjunction with our `Mark-One` `TabList` and `TabListItem` components to create a navigation bar. In order to use this component, the Link must be a child of a React Router.'
    },
    {
        'type': 'code',
        'content': 'import { MemoryRouter } from \'react-router-dom\';\n\n<MemoryRouter>\n  <Link to="#">Test Link</Link>\n</MemoryRouter>',
        'settings': {},
        'evalInContext': evalInContext
    }
]
	

/***/ }),

/***/ 939:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'DropdownList',
    'description': 'Defines a primitive floating list component, which can be used in\nimplementing a dropdown by selectively rendering it, or wrapping it and\nproviding a conditionally display value.\n',
    'methods': [],
    'props': [
        {
            'defaultValue': null,
            'description': '',
            'name': 'as',
            'parent': void 0,
            'required': false,
            'type': { 'name': 'never' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': '',
            'name': 'forwardedAs',
            'parent': void 0,
            'required': false,
            'type': { 'name': 'never' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': '',
            'name': 'ref',
            'parent': void 0,
            'required': false,
            'type': { 'name': '((instance: HTMLUListElement) => void) | RefObject<HTMLUListElement>' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': '',
            'name': 'theme',
            'parent': void 0,
            'required': false,
            'type': { 'name': 'any' },
            'tags': {}
        }
    ],
    'tags': {},
    'examples': __webpack_require__(940)
}
	

/***/ }),

/***/ 940:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'react': __webpack_require__(0),
    './../src/Lists/DropdownList.tsx': __webpack_require__(150)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst DropdownList$0 = require('./../src/Lists/DropdownList.tsx');\nconst DropdownList = DropdownList$0.default || (DropdownList$0['DropdownList'] || DropdownList$0);", requireInRuntime);

module.exports = [{
        'type': 'markdown',
        'content': '> This component does not have a usage example'
    }]
	

/***/ }),

/***/ 941:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'DropdownListItem',
    'description': 'Defines a child component of the DropdownList. The styling is minimal, though\nit can be wrapped and expanded for other implementations.\n',
    'methods': [],
    'props': [
        {
            'defaultValue': null,
            'description': '',
            'name': 'as',
            'parent': void 0,
            'required': false,
            'type': { 'name': 'never' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': '',
            'name': 'forwardedAs',
            'parent': void 0,
            'required': false,
            'type': { 'name': 'never' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': '',
            'name': 'ref',
            'parent': void 0,
            'required': false,
            'type': { 'name': '((instance: HTMLLIElement) => void) | RefObject<HTMLLIElement>' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': '',
            'name': 'theme',
            'parent': void 0,
            'required': false,
            'type': { 'name': 'any' },
            'tags': {}
        }
    ],
    'tags': {},
    'examples': __webpack_require__(942)
}
	

/***/ }),

/***/ 942:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'react': __webpack_require__(0),
    './../src/Lists/DropdownListItem.tsx': __webpack_require__(151)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst DropdownListItem$0 = require('./../src/Lists/DropdownListItem.tsx');\nconst DropdownListItem = DropdownListItem$0.default || (DropdownListItem$0['DropdownListItem'] || DropdownListItem$0);", requireInRuntime);

module.exports = [{
        'type': 'markdown',
        'content': '> This component does not have a usage example'
    }]
	

/***/ }),

/***/ 943:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'List',
    'description': 'Renders either an ordered or unordered list component, depending on the value\nof the "ordered" prop. Both list types are styled identically, but the\ndifference is important semantically\n',
    'methods': [],
    'props': [
        {
            'defaultValue': null,
            'description': '',
            'name': 'as',
            'parent': void 0,
            'required': false,
            'type': { 'name': 'string' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': '',
            'name': 'forwardedAs',
            'parent': void 0,
            'required': false,
            'type': { 'name': 'never' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': false },
            'description': 'Whether this list is ordered (true) or unordered (false)',
            'name': 'ordered',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Lists/List.tsx',
                'name': 'ListProps'
            },
            'required': false,
            'type': { 'name': 'boolean' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': '',
            'name': 'ref',
            'parent': void 0,
            'required': false,
            'type': { 'name': '((instance: HTMLOListElement) => void) | RefObject<HTMLOListElement>' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': '',
            'name': 'theme',
            'parent': void 0,
            'required': false,
            'type': { 'name': 'any' },
            'tags': {}
        }
    ],
    'tags': {},
    'examples': __webpack_require__(944)
}
	

/***/ }),

/***/ 944:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'mark-one': __webpack_require__(15),
    'react': __webpack_require__(0),
    './../../src/Lists/List.tsx': __webpack_require__(152)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst List$0 = require('./../../src/Lists/List.tsx');\nconst List = List$0.default || (List$0['List'] || List$0);", requireInRuntime);

module.exports = [
    {
        'type': 'markdown',
        'content': 'The `<List>` and `<ListItem>` components can be used to render an ordered or unordered list of elements. Both list styles are visually identical, but should be specified for proper html semantics.\n\nThe ordered version of the list:'
    },
    {
        'type': 'code',
        'content': 'import { List, ListItem } from \'mark-one\';\n\n<List ordered>\n  <ListItem>One</ListItem>\n  <ListItem>Two</ListItem>\n  <ListItem>Three</ListItem>\n</List>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'And the unordered version of the list:'
    },
    {
        'type': 'code',
        'content': 'import { List, ListItem } from \'mark-one\';\n\n<List>\n  <ListItem>Dogs</ListItem>\n  <ListItem>Cats</ListItem>\n  <ListItem>Fish</ListItem>\n</List>',
        'settings': {},
        'evalInContext': evalInContext
    }
]
	

/***/ }),

/***/ 945:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'ListItem',
    'description': 'The items to be displayed inside of the List component.\n',
    'methods': [],
    'props': [
        {
            'defaultValue': null,
            'description': '',
            'name': 'as',
            'parent': void 0,
            'required': false,
            'type': { 'name': 'never' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': '',
            'name': 'forwardedAs',
            'parent': void 0,
            'required': false,
            'type': { 'name': 'never' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': '',
            'name': 'ref',
            'parent': void 0,
            'required': false,
            'type': { 'name': '((instance: HTMLLIElement) => void) | RefObject<HTMLLIElement>' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': '',
            'name': 'theme',
            'parent': void 0,
            'required': false,
            'type': { 'name': 'any' },
            'tags': {}
        }
    ],
    'tags': {},
    'examples': __webpack_require__(946)
}
	

/***/ }),

/***/ 946:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'react': __webpack_require__(0),
    './../src/Lists/ListItem.tsx': __webpack_require__(153)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst ListItem$0 = require('./../src/Lists/ListItem.tsx');\nconst ListItem = ListItem$0.default || (ListItem$0['ListItem'] || ListItem$0);", requireInRuntime);

module.exports = [{
        'type': 'markdown',
        'content': '> This component does not have a usage example'
    }]
	

/***/ }),

/***/ 947:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': { 'component': 'Modal\nA dialog style popup that can be used to alert the user to new information,\nor to display additional editing fields/content. While open, the background\nwill be obscured and scrolling will be disabled.' },
    'displayName': 'Modal',
    'description': '\n',
    'methods': [],
    'props': [
        {
            'defaultValue': null,
            'description': 'Identifies the element that provides the modal',
            'name': 'ariaLabelledBy',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Modals/Modal.tsx',
                'name': 'ModalProps'
            },
            'required': true,
            'type': { 'name': 'string' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'Whether or not the modal should be visible on the package\nThis will be controlled by the parent component, likely via useState',
            'name': 'isVisible',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Modals/Modal.tsx',
                'name': 'ModalProps'
            },
            'required': true,
            'type': { 'name': 'boolean' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'The content to be displayed within the modal',
            'name': 'children',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Modals/Modal.tsx',
                'name': 'ModalProps'
            },
            'required': false,
            'type': { 'name': 'ReactNode' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'Function that closes the modal by flipping the isVisible value to false\nThis is passed to our background component to be called when the user\nclicks away',
            'name': 'closeHandler',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Modals/Modal.tsx',
                'name': 'ModalProps'
            },
            'required': false,
            'type': { 'name': '() => void' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'Specifies the ref of the Modal',
            'name': 'forwardRef',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Modals/Modal.tsx',
                'name': 'ModalProps'
            },
            'required': false,
            'type': { 'name': 'RefObject<HTMLDivElement>' },
            'tags': {}
        }
    ],
    'tags': {
        'component': [{
                'title': 'component',
                'description': 'Modal\nA dialog style popup that can be used to alert the user to new information,\nor to display additional editing fields/content. While open, the background\nwill be obscured and scrolling will be disabled.'
            }]
    },
    'examples': __webpack_require__(948)
}
	

/***/ }),

/***/ 948:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'react': __webpack_require__(0),
    'mark-one': __webpack_require__(15),
    './../../src/Modals/Modal.tsx': __webpack_require__(180)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst Modal$0 = require('./../../src/Modals/Modal.tsx');\nconst Modal = Modal$0.default || (Modal$0['Modal'] || Modal$0);", requireInRuntime);

module.exports = [
    {
        'type': 'markdown',
        'content': 'The Modal component renders an overlay box that can be used to call out information to the user. Background content will be dimmed, and clicking outside of the modal box will cause the modal to disappear.\n\nThe Modal itself has very little styling applied to it. This is intentional. The idea is that the `<Modal>` component should only be concerned with the open/close behavior, and any styles can be set on the `children` components. For this purpose, we also have defined specific `<ModalHeader>`, `<ModalBody>`, and `<ModalFooter>` components.\n\nThe `isVisible` prop will be used by the parent component to control whether or not the modal should be displayed. In most cases, this will be done using React\'s `useState` hook, as in this example:'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\nimport { \n  Button,\n  ModalBody,\n  ModalHeader,\n  ModalFooter,\n} from \'mark-one\';\n\nconst [modalVisible, setModalVisible] = useState(false);\n\n<>\n  <Button\n    id="testButton"\n    onClick={() => {setModalVisible(true)}}\n  >\n    Open Modal\n  </Button>\n  <Modal\n    ariaLabelledBy="testButton"\n    closeHandler={() => {setModalVisible(false)}}\n    isVisible={modalVisible}\n  >\n    <ModalHeader>Modal Example 1</ModalHeader>\n    <ModalBody>\n      <div>This can be any arbitrary content</div>\n    </ModalBody>\n    <ModalFooter>\n      <Button onClick={() => setModalVisible(false)}>\n        Close Modal\n      </Button>\n    </ModalFooter>\n  </Modal>\n</>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': '### Open/Close effects\n\nIf you need to run additional code when the modal is opened and closed (e.g. focus an input on open, or clear the values from a form on close), you\'ll need to do so in the parent function that controls the `isVisible` prop.'
    },
    {
        'type': 'code',
        'content': 'import { useState, useRef } from \'react\';\nimport {\n  Button,\n  ModalBody,\n  ModalHeader,\n  ModalFooter,\n  TextInput,\n} from \'mark-one\';\n\nconst inputRef = useRef(null);\nconst [modalVisible, setModalVisible] = useState(false);\nconst [formValue, setFormValue] = useState(\'\');\n\nconst switchModal = (isOpen) => {\n  setModalVisible(isOpen);\n  if (isOpen) {\n    setTimeout(() => { inputRef.current.focus() }, 500)\n  } else {\n    setFormValue(\'\');\n  }\n}\n\n<>\n  <Button\n    id="testButton"\n    onClick={() => { switchModal(true) }}\n  >\n    Open Modal\n  </Button>\n  <Modal\n    ariaLabelledBy="testButton"\n    closeHandler={() => { switchModal(false) }}\n    isVisible={modalVisible}\n  >\n    <ModalHeader\n      closeButtonHandler={() => { switchModal(false) }}\n    >\n      Modal Example 2\n    </ModalHeader>\n    <ModalBody>\n      <div>\n        Any text entered here will be cleared when the modal closes\n      </div>\n      <div>\n        <TextInput\n          forwardRef={inputRef}\n          label="Enter text:"\n          value={formValue}\n          changeHandler={(evt) => {\n            setFormValue(evt.target.value);\n          }}\n        />\n      </div>\n    </ModalBody>\n    <ModalFooter>\n      <Button onClick={() => { switchModal(false) }}>\n        Close Modal\n      </Button>\n    </ModalFooter>\n  </Modal>\n</>',
        'settings': {},
        'evalInContext': evalInContext
    }
]
	

/***/ }),

/***/ 949:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': { 'component': 'ModalBody\nUsed within the Modal component to provide appropriate spacing in line with\nthe ModalHeader and ModalFooter components.' },
    'displayName': 'ModalBody',
    'description': '\n',
    'methods': [],
    'props': [{
            'defaultValue': null,
            'description': '',
            'name': 'theme',
            'parent': void 0,
            'required': false,
            'type': { 'name': 'any' },
            'tags': {}
        }],
    'tags': {
        'component': [{
                'title': 'component',
                'description': 'ModalBody\nUsed within the Modal component to provide appropriate spacing in line with\nthe ModalHeader and ModalFooter components.'
            }]
    },
    'examples': __webpack_require__(950)
}
	

/***/ }),

/***/ 950:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'react': __webpack_require__(0),
    'mark-one': __webpack_require__(15),
    './../../src/Modals/ModalBody.tsx': __webpack_require__(181)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst ModalBody$0 = require('./../../src/Modals/ModalBody.tsx');\nconst ModalBody = ModalBody$0.default || (ModalBody$0['ModalBody'] || ModalBody$0);", requireInRuntime);

module.exports = [
    {
        'type': 'markdown',
        'content': 'This is a very basic component that just adds padding to make the main content of the modal line up with the `<ModalHeader>` and `<ModalFooter>`. This is optional, as the user may want to handle the layout and spacing for the content on their own.'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\nimport { Button, Modal } from \'mark-one\';\n\nconst [modalVisible, setModalVisible] = useState(false);\n\n<>\n  <Button\n    id="testButton"\n    onClick={() => {setModalVisible(true)}}\n  >\n    Open Modal\n  </Button>\n  <Modal\n    ariaLabelledBy="testButton"\n    closeHandler={() => {setModalVisible(false)}}\n    isVisible={modalVisible}\n  >\n    <ModalBody>\n      <p>Any content can be placed inside the Modal Body</p>\n      <Button onClick={() => setModalVisible(false)}>\n        Close Modal\n      </Button>\n    </ModalBody>\n  </Modal>\n</>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'Overflow example: When the contents of the modal body exceeds the height of the page, the user can scroll to see the full contents of the modal.'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\nimport {\n  Button,\n  ModalHeader,\n  Modal,\n  Fieldset,\n  Checkbox,\n  TextInput,\n  RadioButton,\n  POSITION,\n} from \'mark-one\';\n\nconst [modalVisible, setModalVisible] = useState(false);\nconst [checkedValue, setCheckedValue] = useState(\'\');\n\n<>\n  <Button\n    id="overflowTestButton"\n    onClick={() => {setModalVisible(true)}}\n  >\n    Open Modal\n  </Button>\n  <Modal\n    ariaLabelledBy="overflowTestButton"\n    closeHandler={() => {setModalVisible(false)}}\n    isVisible={modalVisible}\n  >\n    <ModalHeader>Overflow Example</ModalHeader>\n    <ModalBody>\n      <>\n        <Fieldset\n          legend="Fieldset Legend"\n          isBorderVisible={false}\n          isLegendVisible={false}\n        >\n          <Checkbox\n            label="Option 1"\n            disabled\n            checked\n          />\n          <Checkbox\n            label="Option 2"\n            disabled\n            checked\n          />\n          <Checkbox\n            label="Option 3"\n            disabled\n            checked\n          />\n          <Checkbox\n            label="Option 4"\n            disabled\n            checked\n          />\n          <Checkbox\n            label="Option 5"\n            disabled\n            checked\n          />\n          <Checkbox\n            label="Option 6"\n            disabled\n            checked\n          />\n          <Checkbox\n            label="Option 7"\n            disabled\n            checked\n          />\n          <Checkbox\n            label="Option 8"\n            disabled\n            checked\n          />\n          <Checkbox\n            label="Option 9"\n            disabled\n            checked\n          />\n          <Checkbox\n            label="Option 10"\n            disabled\n            checked\n          />\n          <TextInput\n            value="test"\n            name="example"\n            id="example"\n            label="Description:"\n            labelPosition={POSITION.TOP}\n            disabled="disabled"\n            onChange={() => {}}\n          />\n          <RadioButton\n            label="One"\n            value="one"\n            name="quantity"\n            checked={checkedValue === \'one\'}\n            onChange={(event) => setCheckedValue(event.target.value)}\n          />\n          <RadioButton\n            label="Two"\n            value="two"\n            name="quantity"\n            checked={checkedValue === \'two\'}\n            onChange={(event) => setCheckedValue(event.target.value)}\n          />\n        </Fieldset>\n      </>\n      <Button onClick={() => setModalVisible(false)}>\n        Close Modal\n      </Button>\n    </ModalBody>\n  </Modal>\n</>',
        'settings': {},
        'evalInContext': evalInContext
    }
]
	

/***/ }),

/***/ 951:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': { 'component': 'ModalFooter\nUsed within the Modal component to render a separated bottom section,\ntypically containing buttons for save, cancel, etc.' },
    'displayName': 'ModalFooter',
    'description': '\n',
    'methods': [],
    'props': [{
            'defaultValue': null,
            'description': '',
            'name': 'theme',
            'parent': void 0,
            'required': false,
            'type': { 'name': 'any' },
            'tags': {}
        }],
    'tags': {
        'component': [{
                'title': 'component',
                'description': 'ModalFooter\nUsed within the Modal component to render a separated bottom section,\ntypically containing buttons for save, cancel, etc.'
            }]
    },
    'examples': __webpack_require__(952)
}
	

/***/ }),

/***/ 952:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'react': __webpack_require__(0),
    'mark-one': __webpack_require__(15),
    './../../src/Modals/ModalFooter.tsx': __webpack_require__(182)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst ModalFooter$0 = require('./../../src/Modals/ModalFooter.tsx');\nconst ModalFooter = ModalFooter$0.default || (ModalFooter$0['ModalFooter'] || ModalFooter$0);", requireInRuntime);

module.exports = [
    {
        'type': 'markdown',
        'content': 'This is a utility component for adding a footer row to the `<Modal>`. It\'s set up to use `flexbox`, and fill in buttons from right to left. For example:'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\nimport {\n  Button,\n  Modal,\n  ModalBody,\n  ModalHeader,\n} from \'mark-one\';\n\nconst [modalVisible, setModalVisible] = useState(false);\n\n<>\n  <Button\n    id="testButton"\n    onClick={() => {setModalVisible(true)}}\n  >\n    Open Modal\n  </Button>\n  <Modal\n    ariaLabelledBy="testButton"\n    closeHandler={() => {setModalVisible(false)}}\n    isVisible={modalVisible}\n  >\n    <ModalHeader>Modal Footer Example</ModalHeader>\n    <ModalBody>\n      <div>\n        This can be any arbitrary content\n      </div>\n    </ModalBody>\n    <ModalFooter>\n      <Button onClick={() => setModalVisible(false)}>\n        One\n      </Button>\n      <Button onClick={() => setModalVisible(false)}>\n        Two\n      </Button>\n      <Button onClick={() => setModalVisible(false)}>\n        Three\n      </Button>\n    </ModalFooter>\n  </Modal>\n</>',
        'settings': {},
        'evalInContext': evalInContext
    }
]
	

/***/ }),

/***/ 953:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': { 'component': 'ModalHeader\nUtility subcomponent for the [[Modal]]. Adds a title bar with the child text\nin an `<h2>` tag. If an optional `closeButtonHandler` is included, will also\nrender a `X` close button.' },
    'displayName': 'ModalHeader',
    'description': '\n',
    'methods': [],
    'props': [
        {
            'defaultValue': null,
            'description': 'the Title to display in the Modal Header',
            'name': 'children',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Modals/ModalHeader.tsx',
                'name': 'ModalHeaderProps'
            },
            'required': false,
            'type': { 'name': 'ReactNode' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'A handler to pass to the close button. If omitted, no close button will be\nrendered',
            'name': 'closeButtonHandler',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Modals/ModalHeader.tsx',
                'name': 'ModalHeaderProps'
            },
            'required': false,
            'type': { 'name': '() => void' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'Specifies the ref of the Modal Header',
            'name': 'forwardRef',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Modals/ModalHeader.tsx',
                'name': 'ModalHeaderProps'
            },
            'required': false,
            'type': { 'name': 'Ref<HTMLHeadingElement>' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'Corresponds to HTML attribute tabindex',
            'name': 'tabIndex',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Modals/ModalHeader.tsx',
                'name': 'ModalHeaderProps'
            },
            'required': false,
            'type': { 'name': 'number' },
            'tags': {}
        }
    ],
    'tags': {
        'component': [{
                'title': 'component',
                'description': 'ModalHeader\nUtility subcomponent for the [[Modal]]. Adds a title bar with the child text\nin an `<h2>` tag. If an optional `closeButtonHandler` is included, will also\nrender a `X` close button.'
            }]
    },
    'examples': __webpack_require__(954)
}
	

/***/ }),

/***/ 954:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'react': __webpack_require__(0),
    'mark-one': __webpack_require__(15),
    'Theme': __webpack_require__(8),
    './../../src/Modals/ModalHeader.tsx': __webpack_require__(183)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst ModalHeader$0 = require('./../../src/Modals/ModalHeader.tsx');\nconst ModalHeader = ModalHeader$0.default || (ModalHeader$0['ModalHeader'] || ModalHeader$0);", requireInRuntime);

module.exports = [
    {
        'type': 'markdown',
        'content': 'This is a utility component for adding a header to the `<Modal>`. The text inside the header will be rendered inside an `<h2>` component, and if an optional `closeButtonHandler` prop is passed in, it will render an `X` button in the top-right corner.\n\n### Without the `closeButtonHandler`'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\nimport {\n  Button,\n  Modal,\n  ModalBody,\n  ModalFooter,\n} from \'mark-one\';\n\nconst [modalVisible, setModalVisible] = useState(false);\n\n<>\n  <Button\n    id="testButton"\n    onClick={() => {setModalVisible(true)}}\n  >\n    Open Modal\n  </Button>\n  <Modal\n    ariaLabelledBy="testButton"\n    closeHandler={() => {setModalVisible(false)}}\n    isVisible={modalVisible}\n  >\n    <ModalHeader>Modal Header without Close</ModalHeader>\n    <ModalBody>\n      <div>\n        This can be any arbitrary content\n      </div>\n    </ModalBody>\n    <ModalFooter>\n      <Button onClick={() => setModalVisible(false)}>\n        Close Modal\n      </Button>\n    </ModalFooter>\n  </Modal>\n</>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': '### With the `closeButtonHandler`'
    },
    {
        'type': 'code',
        'content': 'import { useState } from \'react\';\nimport {\n  Button,\n  Modal,\n  ModalBody,\n} from \'mark-one\';\n\nconst [modalVisible, setModalVisible] = useState(false);\n\n<>\n  <Button\n    id="testButton"\n    onClick={() => {setModalVisible(true)}}\n  >\n    Open Modal\n  </Button>\n  <Modal\n    ariaLabelledBy="testButton"\n    closeHandler={() => {setModalVisible(false)}}\n    isVisible={modalVisible}\n  >\n    <ModalHeader\n      closeButtonHandler={() => {setModalVisible(false)}}\n    >\n      Modal Header with Close Button \u2192\n    </ModalHeader>\n    <ModalBody>\n      <div>\n        This can be any arbitrary content\n      </div>\n    </ModalBody>\n  </Modal>\n</>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': '### With the `forwardRef`\n\nRef example: The optional `forwardRef` property is set. When the test button is\nclicked, the focus shifts to the modal header.'
    },
    {
        'type': 'code',
        'content': 'import { useState, useRef, } from \'react\';\nimport { VARIANT } from \'Theme\';\nimport {\n  Button,\n  Dropdown,\n  Modal,\n  ModalBody,\n} from \'mark-one\';\n\nconst RefExample = () => {\n  const ref = useRef(null);\n  const [value, setValue] = useState(\'\');\n  const [modalVisible, setModalVisible] = useState(false);\n  const onButtonClick = () => {\n    setModalVisible(true);\n    /* Since modal may not have been rendered in DOM, wait for it to be\n    rendered by letting next task of event queue run first */\n    setTimeout(() => ref.current.focus());\n  }\n  return (\n    <>\n      <Button\n        onClick={onButtonClick}\n        variant={VARIANT.INFO}\n      >\n        Focus the Header\n      </Button>\n      <Modal\n        ariaLabelledBy="testButton"\n        closeHandler={() => {setModalVisible(false)}}\n        isVisible={modalVisible}\n      >\n        <ModalHeader\n          closeButtonHandler={() => {setModalVisible(false)}}\n          tabIndex={0}\n          forwardRef={ref}\n        >\n          Modal Header\n        </ModalHeader>\n        <ModalBody>\n          <Dropdown\n            options={[\n              {\n                value: \'all\',\n                label: \'All\',\n              },\n              {\n                value: \'fall\',\n                label: \'Fall\',\n              },\n              {\n                value: \'spring\',\n                label: \'Spring\',\n              },\n            ]}\n            value={value}\n            id="semesters"\n            name="semesters"\n            onChange={(event) => {\n              setValue(event.target.value);\n              alert(\'You changed the selection to \' + event.target.value);\n            }}\n            label="Semester"\n          />\n          <Button\n            onClick={() => setModalVisible(false)}\n            variant={VARIANT.BASE}\n          >\n            Close Modal\n          </Button>\n        </ModalBody>\n      </Modal>\n    </>\n  );\n};\n<RefExample />',
        'settings': {},
        'evalInContext': evalInContext
    }
]
	

/***/ }),

/***/ 955:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'ModalMessage',
    'description': '',
    'methods': [],
    'props': [
        {
            'defaultValue': { 'value': 'ARIA_LIVE_VARIANT.ASSERTIVE' },
            'description': 'The value of the aria-live property',
            'name': 'ariaLive',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Modals/ModalMessage.tsx',
                'name': 'ModalMessageProps'
            },
            'required': false,
            'type': { 'name': 'ARIA_LIVE_VARIANT' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'Text to be displayed',
            'name': 'children',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Modals/ModalMessage.tsx',
                'name': 'ModalMessageProps'
            },
            'required': false,
            'type': { 'name': 'ReactNode' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'The id of the modal message',
            'name': 'id',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Modals/ModalMessage.tsx',
                'name': 'ModalMessageProps'
            },
            'required': false,
            'type': { 'name': 'string' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': 'alert' },
            'description': 'The aria role of the message displayed. A list of the different role\nvalues that should be used can be found in the w3 docs:\nhttps://www.w3.org/TR/wai-aria-1.1/#live_region_roles\nThe default value role is \'alert.\'',
            'name': 'role',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Modals/ModalMessage.tsx',
                'name': 'ModalMessageProps'
            },
            'required': false,
            'type': { 'name': 'string' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': 'VARIANT.BASE' },
            'description': 'Allows you to pass in a variant property from the VARIANT enum',
            'name': 'variant',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Modals/ModalMessage.tsx',
                'name': 'ModalMessageProps'
            },
            'required': false,
            'type': { 'name': 'VARIANT' },
            'tags': {}
        }
    ],
    'examples': __webpack_require__(956)
}
	

/***/ }),

/***/ 956:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'mark-one': __webpack_require__(15),
    'react': __webpack_require__(0),
    './../../src/Modals/ModalMessage.tsx': __webpack_require__(184)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst ModalMessage$0 = require('./../../src/Modals/ModalMessage.tsx');\nconst ModalMessage = ModalMessage$0.default || (ModalMessage$0['ModalMessage'] || ModalMessage$0);", requireInRuntime);

module.exports = [
    {
        'type': 'markdown',
        'content': 'The following is an example of a modal message in which the `variant` property is assigned the enum value `VARIANT.NEGATIVE`.'
    },
    {
        'type': 'code',
        'content': 'import { VARIANT } from \'mark-one\';\n\n<ModalMessage\n  variant={VARIANT.NEGATIVE}\n>\n  Error: Please try again.\n</ModalMessage>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'The following is an example of a modal message in which the `variant` property is assigned the enum value `VARIANT.PRIMARY`.'
    },
    {
        'type': 'code',
        'content': 'import { VARIANT } from \'mark-one\';\n\n<ModalMessage\n  variant={VARIANT.PRIMARY}\n>\n  Success: The information has been updated.\n</ModalMessage>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'The following is an example of a modal message in which the `variant` property is assigned the enum value `VARIANT.INFO`.'
    },
    {
        'type': 'code',
        'content': 'import { VARIANT } from \'mark-one\';\n\n<ModalMessage\n  variant={VARIANT.INFO}\n>\n  Note: All fields are required to submit the form.\n</ModalMessage>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'The following is an example of a modal message in which the `variant` property is assigned the enum value `VARIANT.BASE`.'
    },
    {
        'type': 'code',
        'content': 'import { VARIANT } from \'mark-one\';\n\n<ModalMessage\n  variant={VARIANT.BASE}\n>\n  Note: All fields are required to submit the form.\n</ModalMessage>',
        'settings': {},
        'evalInContext': evalInContext
    }
]
	

/***/ }),

/***/ 957:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'LoadSpinner',
    'description': 'Data load spinner component with styled text under the spinner\n',
    'methods': [],
    'props': [
        {
            'defaultValue': null,
            'description': 'Specifies the text under the spinner',
            'name': 'children',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Spinners/LoadSpinner.tsx',
                'name': 'LoadSpinnerProps'
            },
            'required': false,
            'type': { 'name': 'ReactNode' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'Specifies the color of text under the spinner',
            'name': 'textColor',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Spinners/LoadSpinner.tsx',
                'name': 'LoadSpinnerProps'
            },
            'required': false,
            'type': { 'name': 'SPINNER_TEXT' },
            'tags': {}
        }
    ],
    'tags': {},
    'examples': __webpack_require__(958)
}
	

/***/ }),

/***/ 958:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'mark-one': __webpack_require__(15),
    'react': __webpack_require__(0),
    './../../src/Spinners/LoadSpinner.tsx': __webpack_require__(187)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst LoadSpinner$0 = require('./../../src/Spinners/LoadSpinner.tsx');\nconst LoadSpinner = LoadSpinner$0.default || (LoadSpinner$0['LoadSpinner'] || LoadSpinner$0);", requireInRuntime);

module.exports = [
    {
        'type': 'markdown',
        'content': 'A load spinner component that can be used to show the loading state of the data.'
    },
    {
        'type': 'code',
        'content': '<LoadSpinner>\n  Loading Data\n</LoadSpinner>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'To style the text to have a light color. Note that a dark background is used to show the light text.'
    },
    {
        'type': 'code',
        'content': 'import { SPINNER_TEXT } from \'mark-one\';\n\nconst DarkBackground = styled.div`\n  background: ${({ theme }) => theme.color.background.darker };\n`;\n\n<DarkBackground>\n  <LoadSpinner textColor={SPINNER_TEXT.LIGHT}>\n    Loading Data\n  </LoadSpinner>\n</DarkBackground>',
        'settings': {},
        'evalInContext': evalInContext
    }
]
	

/***/ }),

/***/ 959:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'LoadSpinnerText',
    'description': 'Data load spinner component with styled text under the spinner\n',
    'methods': [],
    'props': [
        {
            'defaultValue': null,
            'description': 'Specifies the text under the spinner',
            'name': 'children',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Spinners/LoadSpinnerText.tsx',
                'name': 'LoadSpinnerTextProps'
            },
            'required': false,
            'type': { 'name': 'ReactNode' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': 'SPINNER_TEXT.DARK' },
            'description': 'Specifies the color of the text under the spinner',
            'name': 'color',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Spinners/LoadSpinnerText.tsx',
                'name': 'LoadSpinnerTextProps'
            },
            'required': false,
            'type': { 'name': 'SPINNER_TEXT' },
            'tags': {}
        }
    ],
    'tags': {},
    'examples': __webpack_require__(960)
}
	

/***/ }),

/***/ 960:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'react': __webpack_require__(0),
    './../src/Spinners/LoadSpinnerText.tsx': __webpack_require__(112)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst LoadSpinnerText$0 = require('./../src/Spinners/LoadSpinnerText.tsx');\nconst LoadSpinnerText = LoadSpinnerText$0.default || (LoadSpinnerText$0['LoadSpinnerText'] || LoadSpinnerText$0);", requireInRuntime);

module.exports = [{
        'type': 'markdown',
        'content': '> This component does not have a usage example'
    }]
	

/***/ }),

/***/ 961:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': { 'component': 'Renders a simple, full-width <table>' },
    'displayName': 'Table',
    'description': '\n',
    'methods': [],
    'props': [{
            'defaultValue': null,
            'description': 'Internal table components like <thead>, <tbody>, <col>. and <colgroup>\nincluding their respective child components',
            'name': 'children',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Tables/Table.tsx',
                'name': 'TableProps'
            },
            'required': true,
            'type': { 'name': 'TableHead | TableBody | HTMLTableColElement | (TableHead | TableBody | HTMLTableColElement)[]' },
            'tags': {}
        }],
    'tags': {
        'component': [{
                'title': 'component',
                'description': 'Renders a simple, full-width <table>'
            }]
    },
    'examples': __webpack_require__(962)
}
	

/***/ }),

/***/ 962:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'mark-one': __webpack_require__(15),
    'react': __webpack_require__(0),
    './../../src/Tables/Table.tsx': __webpack_require__(160)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst Table$0 = require('./../../src/Tables/Table.tsx');\nconst Table = Table$0.default || (Table$0['Table'] || Table$0);", requireInRuntime);

module.exports = [
    {
        'type': 'markdown',
        'content': 'The following is an example of the `Table` component with the `alignment` prop set to the enum value `ALIGN.LEFT.`'
    },
    {
        'type': 'code',
        'content': 'import {\n  ALIGN,\n  Table,\n  TableCell,\n  TableBody,\n  TableRow,\n  TableHeadingCell,\n  TableHead,\n} from \'mark-one\';\n\n<Table>\n  <TableHead>\n    <TableRow>\n      <TableHeadingCell scope={\'col\'}>ID</TableHeadingCell>\n      <TableHeadingCell scope={\'col\'}>First Name</TableHeadingCell>\n      <TableHeadingCell scope={\'col\'}>Last Name</TableHeadingCell>\n    </TableRow>\n  </TableHead>\n  <TableBody isScrollable={true}>\n    <TableRow isStriped={true}>\n      <TableCell alignment={ALIGN.LEFT} foo="blue">1</TableCell>\n      <TableCell alignment={ALIGN.LEFT} foo="blue">Kristin</TableCell>\n      <TableCell alignment={ALIGN.LEFT} foo="blue">Glenn</TableCell>\n    </TableRow>\n    <TableRow>\n      <TableCell alignment={ALIGN.LEFT}>2</TableCell>\n      <TableCell alignment={ALIGN.LEFT}>Jack</TableCell>\n      <TableCell alignment={ALIGN.LEFT}>Thompson</TableCell>\n    </TableRow>\n    <TableRow isStriped={true}>\n      <TableCell alignment={ALIGN.LEFT}>3</TableCell>\n      <TableCell alignment={ALIGN.LEFT}>Lianne</TableCell>\n      <TableCell alignment={ALIGN.LEFT}>Michaels</TableCell>\n    </TableRow>\n    <TableRow>\n      <TableCell alignment={ALIGN.LEFT}>4</TableCell>\n      <TableCell alignment={ALIGN.LEFT}>Gabriela</TableCell>\n      <TableCell alignment={ALIGN.LEFT}>Hines</TableCell>\n    </TableRow>\n  </TableBody>\n</Table>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'The following is an example of the `Table` component with the `alignment` prop set to the enum value `ALIGN.CENTER.` This example also demonstrates the usage of the `variant` property, which is set to `TEXT_VARIANT.NEGATIVE` for two table cells and `TEXT_VARIANT.MEDIUM` for another two table cells.'
    },
    {
        'type': 'code',
        'content': 'import {\n  ALIGN,\n  Table,\n  TableCell,\n  TableBody,\n  TableRow,\n  TableHeadingCell,\n  TableHead,\n  TEXT_VARIANT,\n} from \'mark-one\';\n\n<Table>\n  <TableHead>\n    <TableRow>\n      <TableHeadingCell scope={\'col\'}>ID</TableHeadingCell>\n      <TableHeadingCell scope={\'col\'}>First Name</TableHeadingCell>\n      <TableHeadingCell scope={\'col\'}>Last Name</TableHeadingCell>\n    </TableRow>\n  </TableHead>\n  <TableBody isScrollable={true}>\n    <TableRow isStriped={true}>\n      <TableCell alignment={ALIGN.CENTER}>1</TableCell>\n      <TableCell alignment={ALIGN.CENTER}>Kristin</TableCell>\n      <TableCell alignment={ALIGN.CENTER}>Glenn</TableCell>\n    </TableRow>\n    <TableRow>\n      <TableCell alignment={ALIGN.CENTER}>2</TableCell>\n      <TableCell\n        alignment={ALIGN.CENTER}\n        variant={TEXT_VARIANT.MEDIUM}\n      >\n        Jack\n      </TableCell>\n      <TableCell\n        alignment={ALIGN.CENTER}\n        variant={TEXT_VARIANT.MEDIUM}\n      >\n        Thompson\n      </TableCell>\n    </TableRow>\n    <TableRow isStriped={true}>\n      <TableCell alignment={ALIGN.CENTER}>3</TableCell>\n      <TableCell\n        alignment={ALIGN.CENTER}\n        variant={TEXT_VARIANT.NEGATIVE}\n      >\n        Lianne\n      </TableCell>\n      <TableCell\n        alignment={ALIGN.CENTER}\n        variant={TEXT_VARIANT.NEGATIVE}\n      >\n        Michaels\n      </TableCell>\n    </TableRow>\n    <TableRow>\n      <TableCell alignment={ALIGN.CENTER}>4</TableCell>\n      <TableCell alignment={ALIGN.CENTER}>Gabriela</TableCell>\n      <TableCell alignment={ALIGN.CENTER}>Hines</TableCell>\n    </TableRow>\n  </TableBody>\n</Table>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'The following is an example of the `Table` component with the `alignment` prop set to the enum value `ALIGN.RIGHT.`'
    },
    {
        'type': 'code',
        'content': 'import {\n  ALIGN,\n  Table,\n  TableCell,\n  TableBody,\n  TableRow,\n  TableHeadingCell,\n  TableHead,\n} from \'mark-one\';\n\n<Table>\n  <TableHead>\n    <TableRow>\n      <TableHeadingCell scope={\'col\'}>ID</TableHeadingCell>\n      <TableHeadingCell scope={\'col\'}>First Name</TableHeadingCell>\n      <TableHeadingCell scope={\'col\'}>Last Name</TableHeadingCell>\n    </TableRow>\n  </TableHead>\n  <TableBody isScrollable={true}>\n    <TableRow isStriped={true}>\n      <TableCell alignment={ALIGN.RIGHT}>1</TableCell>\n      <TableCell alignment={ALIGN.RIGHT}>Kristin</TableCell>\n      <TableCell alignment={ALIGN.RIGHT}>Glenn</TableCell>\n    </TableRow>\n    <TableRow>\n      <TableCell alignment={ALIGN.RIGHT}>2</TableCell>\n      <TableCell alignment={ALIGN.RIGHT}>Jack</TableCell>\n      <TableCell alignment={ALIGN.RIGHT}>Thompson</TableCell>\n    </TableRow>\n    <TableRow isStriped={true}>\n      <TableCell alignment={ALIGN.RIGHT}>3</TableCell>\n      <TableCell alignment={ALIGN.RIGHT}>Lianne</TableCell>\n      <TableCell alignment={ALIGN.RIGHT}>Michaels</TableCell>\n    </TableRow>\n    <TableRow>\n      <TableCell alignment={ALIGN.RIGHT}>4</TableCell>\n      <TableCell alignment={ALIGN.RIGHT}>Gabriela</TableCell>\n      <TableCell alignment={ALIGN.RIGHT}>Hines</TableCell>\n    </TableRow>\n  </TableBody>\n</Table>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'The following is an example of the `Table` component in which the `alignment` is not set. In this case, the `alignment` property defaults to `ALIGN.LEFT` per our default props. This example also shows the `backgroundColor` property set to the value `#ffdd2e` for a `TableCell.`'
    },
    {
        'type': 'code',
        'content': 'import {\n  ALIGN,\n  Table,\n  TableCell,\n  TableBody,\n  TableRow,\n  TableHeadingCell,\n  TableHead,\n} from \'mark-one\';\n\n<Table>\n  <TableHead>\n    <TableRow>\n      <TableHeadingCell scope={\'col\'}>ID</TableHeadingCell>\n      <TableHeadingCell scope={\'col\'}>First Name</TableHeadingCell>\n      <TableHeadingCell scope={\'col\'}>Last Name</TableHeadingCell>\n    </TableRow>\n  </TableHead>\n  <TableBody isScrollable={true}>\n    <TableRow isStriped={true}>\n      <TableCell>1</TableCell>\n      <TableCell>Kristin</TableCell>\n      <TableCell>Glenn</TableCell>\n    </TableRow>\n    <TableRow>\n      <TableCell backgroundColor=\'#ffdd2e\'>2</TableCell>\n      <TableCell>Jack</TableCell>\n      <TableCell>Thompson</TableCell>\n    </TableRow>\n    <TableRow isStriped={true}>\n      <TableCell>3</TableCell>\n      <TableCell>Lianne</TableCell>\n      <TableCell>Michaels</TableCell>\n    </TableRow>\n    <TableRow>\n      <TableCell>4</TableCell>\n      <TableCell>Gabriela</TableCell>\n      <TableCell>Hines</TableCell>\n    </TableRow>\n  </TableBody>\n</Table>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': '### More Complex Layouts\n\nSome tables may require more complex layouts, such as cells that span multiple columns/rows, or layered headers. For example:'
    },
    {
        'type': 'code',
        'content': 'import {\n  ALIGN,\n  Table,\n  TableCell,\n  TableBody,\n  TableRow,\n  TableRowHeadingCell,\n  TableHeadingCell,\n  TableHeadingSpacer,\n  TableCellList,\n  TableCellListItem,\n  TableHead,\n} from \'mark-one\';\n\n<Table>\n  <col />\n  <colgroup span="4" />\n  <colgroup span="4" />\n  <TableHead>\n    <TableRow noHighlight>\n      <TableHeadingSpacer />\n      <TableHeadingCell\n        backgroundColor="transparent"\n        colSpan="4"\n        scope="colgroup"\n      >\n        Fall 2019\n      </TableHeadingCell>\n      <TableHeadingCell\n        backgroundColor="transparent"\n        colSpan="4"\n        scope="colgroup"\n      >\n        Spring 2020\n      </TableHeadingCell>\n    </TableRow>\n    <TableRow>\n      <TableHeadingCell scope="col" rowSpan="2">Course</TableHeadingCell>\n      <TableHeadingCell scope="col" rowSpan="2">Instructors</TableHeadingCell>\n      <TableHeadingCell colSpan="3">Enrollment</TableHeadingCell>\n      <TableHeadingCell scope="col" rowSpan="2">Instructors</TableHeadingCell>\n      <TableHeadingCell colSpan="3">Enrollment</TableHeadingCell>\n    </TableRow>\n    <TableRow>\n      <TableHeadingCell scope="col">Pre</TableHeadingCell>\n      <TableHeadingCell scope="col">Study</TableHeadingCell>\n      <TableHeadingCell scope="col">Actual</TableHeadingCell>\n      <TableHeadingCell scope="col">Pre</TableHeadingCell>\n      <TableHeadingCell scope="col">Study</TableHeadingCell>\n      <TableHeadingCell scope="col">Actual</TableHeadingCell>\n    </TableRow>\n  </TableHead>\n  <TableBody>\n    <TableRow>\n      <TableRowHeadingCell scope="row">CS 50</TableRowHeadingCell>\n      <TableCell>\n        <TableCellList>\n          <TableCellListItem>\n            Glenn, Kristin\n          </TableCellListItem>\n          <TableCellListItem>\n            Thompson, Jack\n          </TableCellListItem>\n        </TableCellList>\n      </TableCell>\n      <TableCell>600</TableCell>\n      <TableCell>480</TableCell>\n      <TableCell>300</TableCell>\n      <TableCell></TableCell>\n      <TableCell />\n      <TableCell />\n      <TableCell />\n    </TableRow>\n    <TableRow isStriped>\n      <TableRowHeadingCell scope="row">CS 51</TableRowHeadingCell>\n      <TableCell></TableCell>\n      <TableCell />\n      <TableCell />\n      <TableCell />\n      <TableCell>\n        <TableCellList>\n          <TableCellListItem>\n            Michaels, Lianne\n          </TableCellListItem>\n        </TableCellList>\n      </TableCell>\n      <TableCell>185</TableCell>\n      <TableCell>140</TableCell>\n      <TableCell>120</TableCell>\n    </TableRow>\n    <TableRow>\n      <TableRowHeadingCell scope="row">ES 100</TableRowHeadingCell>\n      <TableCell>\n        <TableCellList>\n          <TableCellListItem>\n            Hines, Gabriela\n          </TableCellListItem>\n        </TableCellList>\n      </TableCell>\n      <TableCell>250</TableCell>\n      <TableCell>175</TableCell>\n      <TableCell>80</TableCell>\n      <TableCell>\n        <TableCellList>\n          <TableCellListItem>\n            Hines, Gabriela\n          </TableCellListItem>\n        </TableCellList>\n      </TableCell>\n      <TableCell>300</TableCell>\n      <TableCell>150</TableCell>\n      <TableCell>100</TableCell>\n    </TableRow>\n  </TableBody>\n</Table>',
        'settings': {},
        'evalInContext': evalInContext
    }
]
	

/***/ }),

/***/ 963:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': { 'component': 'Renders a <tbody> component for use inside the <Table> component.' },
    'displayName': 'TableBody',
    'description': '\n',
    'methods': [],
    'props': [
        {
            'defaultValue': null,
            'description': 'Our TableRow functional component serves as the children for TableBody',
            'name': 'children',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Tables/TableBody.tsx',
                'name': 'TableBodyProps'
            },
            'required': true,
            'type': { 'name': 'TableRow | TableRow[]' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': false },
            'description': 'Controls whether to add a scrollbar in the case where the content of the\nbody does not fit within the table body',
            'name': 'isScrollable',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Tables/TableBody.tsx',
                'name': 'TableBodyProps'
            },
            'required': false,
            'type': { 'name': 'boolean' },
            'tags': {}
        }
    ],
    'tags': {
        'component': [{
                'title': 'component',
                'description': 'Renders a <tbody> component for use inside the <Table> component.'
            }]
    },
    'examples': __webpack_require__(964)
}
	

/***/ }),

/***/ 964:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'react': __webpack_require__(0),
    './../src/Tables/TableBody.tsx': __webpack_require__(167)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst TableBody$0 = require('./../src/Tables/TableBody.tsx');\nconst TableBody = TableBody$0.default || (TableBody$0['TableBody'] || TableBody$0);", requireInRuntime);

module.exports = [{
        'type': 'markdown',
        'content': '> This component does not have a usage example'
    }]
	

/***/ }),

/***/ 965:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'TableCell',
    'description': 'Represents the possible values for TableCell\'s text-align property\n',
    'methods': [],
    'props': [],
    'tags': {},
    'examples': __webpack_require__(966)
}
	

/***/ }),

/***/ 966:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'react': __webpack_require__(0),
    './../src/Tables/TableCell.tsx': __webpack_require__(109)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst TableCell$0 = require('./../src/Tables/TableCell.tsx');\nconst TableCell = TableCell$0.default || (TableCell$0['TableCell'] || TableCell$0);", requireInRuntime);

module.exports = [{
        'type': 'markdown',
        'content': '> This component does not have a usage example'
    }]
	

/***/ }),

/***/ 967:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'TableCellList',
    'description': '',
    'methods': [],
    'props': [
        {
            'defaultValue': null,
            'description': '',
            'name': 'as',
            'parent': void 0,
            'required': false,
            'type': { 'name': 'never' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': '',
            'name': 'forwardedAs',
            'parent': void 0,
            'required': false,
            'type': { 'name': 'never' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': '',
            'name': 'ref',
            'parent': void 0,
            'required': false,
            'type': { 'name': '((instance: HTMLOListElement) => void) | RefObject<HTMLOListElement>' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': '',
            'name': 'theme',
            'parent': void 0,
            'required': false,
            'type': { 'name': 'any' },
            'tags': {}
        }
    ],
    'examples': __webpack_require__(968)
}
	

/***/ }),

/***/ 968:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'react': __webpack_require__(0),
    './../src/Tables/TableCellList.tsx': __webpack_require__(161)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst TableCellList$0 = require('./../src/Tables/TableCellList.tsx');\nconst TableCellList = TableCellList$0.default || (TableCellList$0['TableCellList'] || TableCellList$0);", requireInRuntime);

module.exports = [{
        'type': 'markdown',
        'content': '> This component does not have a usage example'
    }]
	

/***/ }),

/***/ 969:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'TableCellListItem',
    'description': '',
    'methods': [],
    'props': [
        {
            'defaultValue': null,
            'description': '',
            'name': 'as',
            'parent': void 0,
            'required': false,
            'type': { 'name': 'never' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': '',
            'name': 'forwardedAs',
            'parent': void 0,
            'required': false,
            'type': { 'name': 'never' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': '',
            'name': 'ref',
            'parent': void 0,
            'required': false,
            'type': { 'name': '((instance: HTMLLIElement) => void) | RefObject<HTMLLIElement>' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': '',
            'name': 'theme',
            'parent': void 0,
            'required': false,
            'type': { 'name': 'any' },
            'tags': {}
        }
    ],
    'examples': __webpack_require__(970)
}
	

/***/ }),

/***/ 970:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'react': __webpack_require__(0),
    './../src/Tables/TableCellListItem.tsx': __webpack_require__(162)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst TableCellListItem$0 = require('./../src/Tables/TableCellListItem.tsx');\nconst TableCellListItem = TableCellListItem$0.default || (TableCellListItem$0['TableCellListItem'] || TableCellListItem$0);", requireInRuntime);

module.exports = [{
        'type': 'markdown',
        'content': '> This component does not have a usage example'
    }]
	

/***/ }),

/***/ 971:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': { 'component': 'Renders a <thead> component to be used inside of a <Table>' },
    'displayName': 'TableHead',
    'description': '\n',
    'methods': [],
    'props': [{
            'defaultValue': null,
            'description': 'Our TableRow functional component serves as the children for TableHead',
            'name': 'children',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Tables/TableHead.tsx',
                'name': 'TableHeadProps'
            },
            'required': true,
            'type': { 'name': 'TableRow | TableRow[]' },
            'tags': {}
        }],
    'tags': {
        'component': [{
                'title': 'component',
                'description': 'Renders a <thead> component to be used inside of a <Table>'
            }]
    },
    'examples': __webpack_require__(972)
}
	

/***/ }),

/***/ 972:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'react': __webpack_require__(0),
    './../src/Tables/TableHead.tsx': __webpack_require__(164)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst TableHead$0 = require('./../src/Tables/TableHead.tsx');\nconst TableHead = TableHead$0.default || (TableHead$0['TableHead'] || TableHead$0);", requireInRuntime);

module.exports = [{
        'type': 'markdown',
        'content': '> This component does not have a usage example'
    }]
	

/***/ }),

/***/ 973:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': { 'component': 'Used to render a single cell within the TableHead section on a table.\nInteded for column headers only; There is also a TableRowHeadingCell for\nrow heading components.' },
    'displayName': 'TableHeadingCell',
    'description': '\n',
    'methods': [],
    'props': [
        {
            'defaultValue': null,
            'description': 'Text or components to be displayed in the table heading cell',
            'name': 'children',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Tables/TableHeadingCell.tsx',
                'name': 'TableHeadingCellProps'
            },
            'required': true,
            'type': { 'name': 'ReactNode' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'Specifies the background color of the table cell',
            'name': 'backgroundColor',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Tables/TableHeadingCell.tsx',
                'name': 'TableHeadingCellProps'
            },
            'required': false,
            'type': { 'name': 'string' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'Function to call on click event',
            'name': 'clickHandler',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Tables/TableHeadingCell.tsx',
                'name': 'TableHeadingCellProps'
            },
            'required': false,
            'type': { 'name': '(event: MouseEvent<Element, MouseEvent>) => void' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'Handles cells that span multiple columns',
            'name': 'colSpan',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Tables/TableHeadingCell.tsx',
                'name': 'TableHeadingCellProps'
            },
            'required': false,
            'type': { 'name': 'ReactText' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'Handles cells that span multiple rows',
            'name': 'rowSpan',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Tables/TableHeadingCell.tsx',
                'name': 'TableHeadingCellProps'
            },
            'required': false,
            'type': { 'name': 'ReactText' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'Specifies the group of cells that the table heading refers to',
            'name': 'scope',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Tables/TableHeadingCell.tsx',
                'name': 'TableHeadingCellProps'
            },
            'required': false,
            'type': { 'name': '"col" | "colgroup" | "auto"' },
            'tags': {}
        }
    ],
    'tags': {
        'component': [{
                'title': 'component',
                'description': 'Used to render a single cell within the TableHead section on a table.\nInteded for column headers only; There is also a TableRowHeadingCell for\nrow heading components.'
            }]
    },
    'examples': __webpack_require__(974)
}
	

/***/ }),

/***/ 974:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'react': __webpack_require__(0),
    './../src/Tables/TableHeadingCell.tsx': __webpack_require__(165)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst TableHeadingCell$0 = require('./../src/Tables/TableHeadingCell.tsx');\nconst TableHeadingCell = TableHeadingCell$0.default || (TableHeadingCell$0['TableHeadingCell'] || TableHeadingCell$0);", requireInRuntime);

module.exports = [{
        'type': 'markdown',
        'content': '> This component does not have a usage example'
    }]
	

/***/ }),

/***/ 975:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': { 'component': 'Renders a blank/transparent table data cell. Primarily intended for adding\nblank space to use in complicated, multi-layer headers.' },
    'displayName': 'TableHeadingSpacer',
    'description': '\n',
    'methods': [],
    'props': [
        {
            'defaultValue': null,
            'description': '',
            'name': 'as',
            'parent': void 0,
            'required': false,
            'type': { 'name': 'never' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': '',
            'name': 'forwardedAs',
            'parent': void 0,
            'required': false,
            'type': { 'name': 'never' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': '',
            'name': 'ref',
            'parent': void 0,
            'required': false,
            'type': { 'name': '((instance: HTMLTableDataCellElement) => void) | RefObject<HTMLTableDataCellElement>' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': '',
            'name': 'theme',
            'parent': void 0,
            'required': false,
            'type': { 'name': 'any' },
            'tags': {}
        }
    ],
    'tags': {
        'component': [{
                'title': 'component',
                'description': 'Renders a blank/transparent table data cell. Primarily intended for adding\nblank space to use in complicated, multi-layer headers.'
            }]
    },
    'examples': __webpack_require__(976)
}
	

/***/ }),

/***/ 976:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'react': __webpack_require__(0),
    './../src/Tables/TableHeadingSpacer.tsx': __webpack_require__(166)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst TableHeadingSpacer$0 = require('./../src/Tables/TableHeadingSpacer.tsx');\nconst TableHeadingSpacer = TableHeadingSpacer$0.default || (TableHeadingSpacer$0['TableHeadingSpacer'] || TableHeadingSpacer$0);", requireInRuntime);

module.exports = [{
        'type': 'markdown',
        'content': '> This component does not have a usage example'
    }]
	

/***/ }),

/***/ 977:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': { 'component': 'Renders a <tr> element, for use inside the TableHead and TableBody\ncomponents.' },
    'displayName': 'TableRow',
    'description': '\n',
    'methods': [],
    'props': [
        {
            'defaultValue': null,
            'description': 'Cell components to be displayed in the row',
            'name': 'children',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Tables/TableRow.tsx',
                'name': 'TableRowProps'
            },
            'required': true,
            'type': { 'name': 'TableCell | TableHeadingCell | TableRowHeadingCell | TableHeadingSpacer | (TableCell | TableHeadingCell | TableRowHeadingCell | TableHeadingSpacer)[]' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': false },
            'description': 'Controls whether the background of the row has a darker background color\nInteded for use in long tables that help differentiate even/odd rows',
            'name': 'isStriped',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Tables/TableRow.tsx',
                'name': 'TableRowProps'
            },
            'required': false,
            'type': { 'name': 'boolean' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'By default, rows will highlight on hover. Setting this to true will\ndisable that behavior',
            'name': 'noHighlight',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Tables/TableRow.tsx',
                'name': 'TableRowProps'
            },
            'required': false,
            'type': { 'name': 'boolean' },
            'tags': {}
        }
    ],
    'tags': {
        'component': [{
                'title': 'component',
                'description': 'Renders a <tr> element, for use inside the TableHead and TableBody\ncomponents.'
            }]
    },
    'examples': __webpack_require__(978)
}
	

/***/ }),

/***/ 978:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'react': __webpack_require__(0),
    './../src/Tables/TableRow.tsx': __webpack_require__(163)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst TableRow$0 = require('./../src/Tables/TableRow.tsx');\nconst TableRow = TableRow$0.default || (TableRow$0['TableRow'] || TableRow$0);", requireInRuntime);

module.exports = [{
        'type': 'markdown',
        'content': '> This component does not have a usage example'
    }]
	

/***/ }),

/***/ 979:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': { 'component': 'Renders a <th> element that is stylistically similar to the TableCell\ncomponent, for use as a row-level header.' },
    'displayName': 'TableRowHeadingCell',
    'description': '\n',
    'methods': [],
    'props': [
        {
            'defaultValue': null,
            'description': 'Text or components to be displayed in the table heading cell',
            'name': 'children',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Tables/TableRowHeadingCell.tsx',
                'name': 'TableRowHeadingCellProps'
            },
            'required': true,
            'type': { 'name': 'ReactNode' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'Specifies the group of cells that the row heading refers to',
            'name': 'scope',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Tables/TableRowHeadingCell.tsx',
                'name': 'TableRowHeadingCellProps'
            },
            'required': true,
            'type': { 'name': '"row" | "rowgroup" | "auto"' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': 'ALIGN.LEFT' },
            'description': 'Allows you to pass in a alignment property from the ALIGN enum',
            'name': 'alignment',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Tables/TableRowHeadingCell.tsx',
                'name': 'TableRowHeadingCellProps'
            },
            'required': false,
            'type': { 'name': 'ALIGN' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'Specifies the background color of the table cell',
            'name': 'backgroundColor',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Tables/TableRowHeadingCell.tsx',
                'name': 'TableRowHeadingCellProps'
            },
            'required': false,
            'type': { 'name': 'string' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'Handles cells that span multiple columns',
            'name': 'colSpan',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Tables/TableRowHeadingCell.tsx',
                'name': 'TableRowHeadingCellProps'
            },
            'required': false,
            'type': { 'name': 'ReactText' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': 'Handles cells that span multiple rows',
            'name': 'rowSpan',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Tables/TableRowHeadingCell.tsx',
                'name': 'TableRowHeadingCellProps'
            },
            'required': false,
            'type': { 'name': 'ReactText' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': 'VALIGN.CENTER' },
            'description': 'Allows for customizing the vertal alignment of the cell content',
            'name': 'verticalAlignment',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Tables/TableRowHeadingCell.tsx',
                'name': 'TableRowHeadingCellProps'
            },
            'required': false,
            'type': { 'name': 'VALIGN' },
            'tags': {}
        }
    ],
    'tags': {
        'component': [{
                'title': 'component',
                'description': 'Renders a <th> element that is stylistically similar to the TableCell\ncomponent, for use as a row-level header.'
            }]
    },
    'examples': __webpack_require__(980)
}
	

/***/ }),

/***/ 980:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'react': __webpack_require__(0),
    './../src/Tables/TableRowHeadingCell.tsx': __webpack_require__(168)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst TableRowHeadingCell$0 = require('./../src/Tables/TableRowHeadingCell.tsx');\nconst TableRowHeadingCell = TableRowHeadingCell$0.default || (TableRowHeadingCell$0['TableRowHeadingCell'] || TableRowHeadingCell$0);", requireInRuntime);

module.exports = [{
        'type': 'markdown',
        'content': '> This component does not have a usage example'
    }]
	

/***/ }),

/***/ 981:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'TabList',
    'description': '',
    'methods': [],
    'props': [{
            'defaultValue': null,
            'description': '',
            'name': 'theme',
            'parent': void 0,
            'required': false,
            'type': { 'name': 'any' },
            'tags': {}
        }],
    'examples': __webpack_require__(982)
}
	

/***/ }),

/***/ 982:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'mark-one': __webpack_require__(15),
    'styled-components': __webpack_require__(7),
    'react': __webpack_require__(0),
    './../../src/Tabs/TabList.tsx': __webpack_require__(158)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst TabList$0 = require('./../../src/Tabs/TabList.tsx');\nconst TabList = TabList$0.default || (TabList$0['TabList'] || TabList$0);", requireInRuntime);

module.exports = [
    {
        'type': 'markdown',
        'content': 'The following example shows the usage of the TabList and TabListItem components with a StyledNav and StyledLink component.\n\nThe TabList component, along with the TabListItem components where the `isActive` prop is equal to false, are set up to have a background color `transparent`. Since the StyledNav has a background color of `theme.color.background.subtle` (from our MarkOneTheme), we see this background color across most of our tab list. When `isActive` is true for a TabListItem component, the background is `theme.color.background.light`.'
    },
    {
        'type': 'code',
        'content': 'import { TabListItem } from \'mark-one\';\nimport styled from \'styled-components\';\n\nconst StyledNav = styled.nav`\n  background: ${({ theme }) => theme.color.background.subtle};\n`;\n\nconst StyledLink = styled.a`\n  text-decoration: none;\n`;\n\n<StyledNav>\n  <TabList>\n    <TabListItem>\n      <StyledLink href="#">\n        Tab 1\n      </StyledLink>\n    </TabListItem>\n    <TabListItem isActive={true}>\n      <StyledLink href="#">\n        Tab 2\n      </StyledLink>\n    </TabListItem>\n    <TabListItem>\n      <StyledLink href="#">\n        Tab 3\n      </StyledLink>\n    </TabListItem>\n    <TabListItem>\n      <StyledLink href="#">\n        Tab 4\n      </StyledLink>\n    </TabListItem>\n  </TabList>\n</StyledNav>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': 'The nav element in this example does not have a background color set, which is why the background color across the entire TabList defaults to the standard browser background color.'
    },
    {
        'type': 'code',
        'content': '\nimport { TabListItem } from \'mark-one\';\nimport styled from \'styled-components\';\n\nconst StyledLink = styled.a`\n  text-decoration: none;\n`;\n\n<nav>\n  <TabList>\n    <TabListItem>\n      <StyledLink href="#">\n        Tab 1\n      </StyledLink>\n    </TabListItem>\n    <TabListItem isActive={true}>\n      <StyledLink href="#">\n        Tab 2\n      </StyledLink>\n    </TabListItem>\n    <TabListItem>\n      <StyledLink href="#">\n        Tab 3\n      </StyledLink>\n    </TabListItem>\n  </TabList>\n</nav>',
        'settings': {},
        'evalInContext': evalInContext
    }
]
	

/***/ }),

/***/ 983:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'TabListItem',
    'description': '',
    'methods': [],
    'props': [
        {
            'defaultValue': null,
            'description': 'Text or components to be displayed in the TabList item',
            'name': 'children',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Tabs/TabListItem.tsx',
                'name': 'TabListItemProps'
            },
            'required': false,
            'type': { 'name': 'ReactNode' },
            'tags': {}
        },
        {
            'defaultValue': { 'value': false },
            'description': 'Controls whether the TabListItem is in focus',
            'name': 'isActive',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Tabs/TabListItem.tsx',
                'name': 'TabListItemProps'
            },
            'required': false,
            'type': { 'name': 'boolean' },
            'tags': {}
        }
    ],
    'examples': __webpack_require__(984)
}
	

/***/ }),

/***/ 984:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'react': __webpack_require__(0),
    './../src/Tabs/TabListItem.tsx': __webpack_require__(159)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst TabListItem$0 = require('./../src/Tabs/TabListItem.tsx');\nconst TabListItem = TabListItem$0.default || (TabListItem$0['TabListItem'] || TabListItem$0);", requireInRuntime);

module.exports = [{
        'type': 'markdown',
        'content': '> This component does not have a usage example'
    }]
	

/***/ }),

/***/ 985:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'GlobalCSS',
    'description': 'Creates a global stylesheet that will apply to all sub-components,\naugmenting any locally defined styles. It applies some minor style resets,\nsetting margins/padding to 0 and box-sizing to "border-box" for consistency,\nand also sets things like the base background color, base font size, etc.\n\nFor convenience, this component is added as part of the \\[[MarkOneWrapper]],\nwhich injects the \\[[MarkOneTheme]]. To override the base styles in an\napplication, you can simply create a second stylesheet and add it inside the\nMarkOneWrapper.\n\n```jsx\n<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> ReactElement <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> styled<span class="token punctuation">,</span> <span class="token punctuation">{</span> createGlobalStyle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'styled-components\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> MarkOneWrapper <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'mark-one\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> NewGlobalCSS <span class="token operator">=</span> createGlobalStyle<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">\n   html, body {\n     font-size: 20px;\n   }\n</span><span class="token template-punctuation string">`</span></span>\n\n<span class="token keyword">const</span> App<span class="token operator">:</span> FunctionComponent <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter">ReactElement</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MarkOneWrapper</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n     </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">NewGlobalCSS</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">\n     </span><span class="token punctuation">{</span><span class="token punctuation">{</span> rest <span class="token keyword">of</span> the application <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token plain-text">\n   </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">MarkOneWrapper</span></span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span>\n\n```\n',
    'methods': [],
    'props': [
        {
            'defaultValue': null,
            'description': '',
            'name': 'suppressMultiMountWarning',
            'parent': void 0,
            'required': false,
            'type': { 'name': 'boolean' },
            'tags': {}
        },
        {
            'defaultValue': null,
            'description': '',
            'name': 'theme',
            'parent': void 0,
            'required': false,
            'type': { 'name': 'DefaultTheme' },
            'tags': {}
        }
    ],
    'tags': {},
    'examples': __webpack_require__(986)
}
	

/***/ }),

/***/ 986:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'react': __webpack_require__(0),
    './../src/Theme/GlobalCSS.tsx': __webpack_require__(143)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst GlobalCSS$0 = require('./../src/Theme/GlobalCSS.tsx');\nconst GlobalCSS = GlobalCSS$0.default || (GlobalCSS$0['GlobalCSS'] || GlobalCSS$0);", requireInRuntime);

module.exports = [{
        'type': 'markdown',
        'content': '> This component does not have a usage example'
    }]
	

/***/ }),

/***/ 987:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'MarkOneWrapper',
    'description': 'Provides the Mark One Theme to all child components. This should be added at\nthe top level of the application, and then any child component that needs to\nuse the theme should include the `useContext()` hook to grab it. e.g.:\n\n```jsx\n<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useContext<span class="token punctuation">,</span> <span class="token constant">SFC</span><span class="token punctuation">,</span> ReactElement <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> styled<span class="token punctuation">,</span> <span class="token punctuation">{</span> ThemeContext <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'styled-components\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> BaseTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'mark-one\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> TestComponent<span class="token operator">:</span> <span class="token constant">SFC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter">ReactElement</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n   <span class="token keyword">const</span> theme<span class="token operator">:</span> BaseTheme <span class="token operator">=</span> <span class="token function">useContext</span><span class="token punctuation">(</span>ThemeContext<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n   <span class="token keyword">const</span> DarkBackgroundDiv <span class="token operator">=</span> styled<span class="token punctuation">.</span>div<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">\n     background: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>theme<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> theme<span class="token punctuation">.</span>color<span class="token punctuation">.</span>background<span class="token punctuation">.</span>dark<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">;\n   </span><span class="token template-punctuation string">`</span></span>\n\n   <span class="token keyword">return</span> <span class="token punctuation">(</span>\n     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">DarkBackgroundDiv</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n       This will have a dark background.\n     </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">DarkBackgroundDiv</span></span><span class="token punctuation">></span></span>\n   <span class="token punctuation">)</span>\n\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> TestComponent<span class="token punctuation">;</span>\n```\n',
    'methods': [],
    'props': [{
            'defaultValue': null,
            'description': 'The content of the app that should receive the theme',
            'name': 'children',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Theme/MarkOneWrapper.tsx',
                'name': 'ThemeWrapperProps'
            },
            'required': false,
            'type': { 'name': 'ReactNode' },
            'tags': {}
        }],
    'tags': {},
    'examples': __webpack_require__(988)
}
	

/***/ }),

/***/ 988:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'styled-components': __webpack_require__(7),
    'react': __webpack_require__(0),
    './../../src/Theme/MarkOneWrapper.tsx': __webpack_require__(76)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst MarkOneWrapper$0 = require('./../../src/Theme/MarkOneWrapper.tsx');\nconst MarkOneWrapper = MarkOneWrapper$0.default || (MarkOneWrapper$0['MarkOneWrapper'] || MarkOneWrapper$0);", requireInRuntime);

module.exports = [
    {
        'type': 'markdown',
        'content': '## Mark One Theme Specimens\n\n### Background Colors'
    },
    {
        'type': 'code',
        'content': 'import styled from \'styled-components\';\n\nconst BackgroundDiv = styled.div`\n  background: ${({theme, value, modifier}) => (\n    modifier\n    ? theme.color.background[modifier][value]\n    : theme.color.background[value])\n  };\n  padding: ${({theme}) => (theme.ws.medium)};\n  margin-top: ${({theme}) => (theme.ws.small)};\n  color: ${({theme, fontColor}) => (theme.color.text[fontColor])};\n`;\nconst getFontColor = (shade, meaning) => {\n  if (\n    shade === \'accent\'\n    || (meaning === \'info\'\n      && shade === \'medium\')\n  ) {\n    return \'light\';\n  }\n  return /dark/.test(shade) ? \'light\' : \'dark\';\n}\n\n<>\n  {[\n     \'light\',\n     \'subtle\',\n     \'medium\',\n     \'dark\',\n     \'darker\',\n     \'accent\',\n  ].map((color) => (\n    <BackgroundDiv\n      fontColor={getFontColor(color)}\n      value={color}\n    >\n      Background: {color}\n    </BackgroundDiv>\n  ))}\n  {[\'info\', \'positive\', \'negative\'].map((meaning) => (\n    [\'light\', \'medium\', \'dark\'].map((shade) => (\n      <BackgroundDiv\n        value={shade}\n        modifier={meaning}\n        fontColor={getFontColor(shade, meaning)}\n      >\n        {meaning}: {shade}\n      </BackgroundDiv>\n    ))\n  ))}\n</>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': '### Typography'
    },
    {
        'type': 'code',
        'content': 'import styled from \'styled-components\';\n\nconst TextBlock = styled.span`\n  font-family: ${({theme, type}) => theme.font[type].family};\n  font-weight: ${({theme, type}) => theme.font[type].weight};\n  font-size: ${({theme, type}) => theme.font[type].size}\n`;\n\n<>\n  <div>\n    <TextBlock type="title">This is the title</TextBlock>\n  </div>\n  <div>\n    <TextBlock type="heading">This is the heading type</TextBlock>\n  </div>\n  <div>\n    <TextBlock type="body">This is body text</TextBlock>\n  </div>\n  <div>\n    <TextBlock type="bold">This is bold text</TextBlock>\n  </div>\n  <div>\n    <TextBlock type="data">This is text for rendering data</TextBlock>\n  </div>\n</>',
        'settings': {},
        'evalInContext': evalInContext
    },
    {
        'type': 'markdown',
        'content': '### Borders and Shadows'
    },
    {
        'type': 'code',
        'content': 'import styled from \'styled-components\';\n\nconst BorderDiv = styled.div`\n  background: ${({theme}) => (theme.color.background.subtle)\n  };\n  padding: ${({theme}) => (theme.ws.medium)};\n  margin-top: ${({theme}) => (theme.ws.large)};\n  border: ${({theme, border})=> (theme.border[border])}\n  box-shadow: ${({theme, shadow})=> (theme.shadow[shadow])}\n`;\n\n<div>\n  {[\'xlight\', \'light\', \'medium\'].map((shadow) => (\n    [\'hairline\', \'light\', \'heavy\'].map((border) => (\n      <BorderDiv\n        border={border}\n        shadow={shadow}\n      >\n        {border} border | {shadow} shadow\n      </BorderDiv>\n    ))\n  ))}\n</div>',
        'settings': {},
        'evalInContext': evalInContext
    }
]
	

/***/ }),

/***/ 989:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': {},
    'displayName': 'NoteText',
    'description': '',
    'methods': [],
    'props': [{
            'defaultValue': null,
            'description': 'Text to be displayed',
            'name': 'children',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Typography/NoteText.tsx',
                'name': 'NoteTextProps'
            },
            'required': false,
            'type': { 'name': 'ReactNode' },
            'tags': {}
        }],
    'examples': __webpack_require__(990)
}
	

/***/ }),

/***/ 990:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'react': __webpack_require__(0),
    './../../src/Typography/NoteText.tsx': __webpack_require__(177)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst NoteText$0 = require('./../../src/Typography/NoteText.tsx');\nconst NoteText = NoteText$0.default || (NoteText$0['NoteText'] || NoteText$0);", requireInRuntime);

module.exports = [
    {
        'type': 'markdown',
        'content': 'A text component used to convey information (e.g. a form legend).'
    },
    {
        'type': 'code',
        'content': '<NoteText>\n  Note: * denotes a required field\n</NoteText>',
        'settings': {},
        'evalInContext': evalInContext
    }
]
	

/***/ }),

/***/ 991:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': { 'component': 'PageTitle\nPage title component, used for application or page titles. Only one instance\nof this component should ever exist on any given page, for semantic reasons.' },
    'displayName': 'PageTitle',
    'description': '\n',
    'methods': [],
    'props': [{
            'defaultValue': { 'value': '' },
            'description': 'Page heading text',
            'name': 'children',
            'parent': {
                'fileName': 'mark-one/mark-one/src/Typography/PageTitle.tsx',
                'name': 'PageHeadingProps'
            },
            'required': false,
            'type': { 'name': 'ReactNode' },
            'tags': {}
        }],
    'tags': {
        'component': [{
                'title': 'component',
                'description': 'PageTitle\nPage title component, used for application or page titles. Only one instance\nof this component should ever exist on any given page, for semantic reasons.'
            }]
    },
    'examples': __webpack_require__(992)
}
	

/***/ }),

/***/ 992:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'react': __webpack_require__(0),
    './../../src/Typography/PageTitle.tsx': __webpack_require__(175)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst PageTitle$0 = require('./../../src/Typography/PageTitle.tsx');\nconst PageTitle = PageTitle$0.default || (PageTitle$0['PageTitle'] || PageTitle$0);", requireInRuntime);

module.exports = [
    {
        'type': 'markdown',
        'content': 'A top level heading, used for page headers, application titles etc.\n\n**Note:** For accessibility reasons, any given page should only ever have one(1) `<PageTitle>` component.'
    },
    {
        'type': 'code',
        'content': '<PageTitle>Hello World</PageTitle>',
        'settings': {},
        'evalInContext': evalInContext
    }
]
	

/***/ }),

/***/ 993:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

module.exports = {
    'doclets': { 'component': 'SectionHeading\nRender a section heading based on the Mark One Heading styles' },
    'displayName': 'SectionHeading',
    'description': '\n',
    'methods': [],
    'props': [{
            'defaultValue': null,
            'description': '',
            'name': 'theme',
            'parent': void 0,
            'required': false,
            'type': { 'name': 'any' },
            'tags': {}
        }],
    'tags': {
        'component': [{
                'title': 'component',
                'description': 'SectionHeading\nRender a section heading based on the Mark One Heading styles'
            }]
    },
    'examples': __webpack_require__(994)
}
	

/***/ }),

/***/ 994:
/***/ (function(module, exports, __webpack_require__) {


if (false) {}

var requireMap = {
    'react': __webpack_require__(0),
    './../../src/Typography/SectionHeading.tsx': __webpack_require__(176)
};
var requireInRuntimeBase = __webpack_require__(5).default;
var requireInRuntime = requireInRuntimeBase.bind(null, requireMap);
var evalInContextBase = __webpack_require__(6).default;
var evalInContext = evalInContextBase.bind(null, "const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst SectionHeading$0 = require('./../../src/Typography/SectionHeading.tsx');\nconst SectionHeading = SectionHeading$0.default || (SectionHeading$0['SectionHeading'] || SectionHeading$0);", requireInRuntime);

module.exports = [
    {
        'type': 'markdown',
        'content': 'Renders a styled `<h2>` element for denoting the start of a new main section within a page, similar to a chapter title.\n\nFor accessibility, The `<SectionHeading>` should be below the `<PageTitle>` in the DOM, and should not be ordered within other heading elements.'
    },
    {
        'type': 'code',
        'content': '<SectionHeading>Section Heading</SectionHeading>',
        'settings': {},
        'evalInContext': evalInContext
    }
]
	

/***/ })

/******/ });