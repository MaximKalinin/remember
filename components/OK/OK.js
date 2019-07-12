"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _H = _interopRequireDefault(require("../H3/H3"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  background: green;\n  padding: 20px;\n\n  width: 100vw;\n  animation: OKanim 1s ease-in-out;\n\n  @keyframes OKanim {\n    0% {\n      transform: translateY(-100%);\n    }\n    20% {\n      transform: translateY(0);\n    }\n    80% {\n      transform: translateY(0);\n    }\n    100% {\n      transform: translateY(-100%);\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var OKEl = _styledComponents["default"].div(_templateObject());

var OK = function OK(_ref) {
  var message = _ref.message,
      hide = _ref.hide;
  return React.createElement(OKEl, {
    onAnimationEnd: hide
  }, React.createElement(_H["default"], {
    color: "white"
  }, message));
};

var _default = OK;
exports["default"] = _default;