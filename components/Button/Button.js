"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-size: 22px;\n  margin: ", ";\n  color: ", ";\n  background: none;\n  border: none;\n  cursor: pointer;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Button = _styledComponents["default"].button(_templateObject(), function (_ref) {
  var margin = _ref.margin;
  return margin || '0';
}, function (_ref2) {
  var color = _ref2.color;
  return color || 'black';
});

var _default = Button;
exports["default"] = _default;