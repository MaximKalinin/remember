"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    font-size: 22px;\n    color: ", ";\n    margin: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var H3 = _styledComponents["default"].h3(_templateObject(), function (_ref) {
  var color = _ref.color;
  return color || 'black';
}, function (_ref2) {
  var margin = _ref2.margin;
  return margin || '0';
});

var _default = H3;
exports["default"] = _default;