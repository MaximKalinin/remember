"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    padding: 11px;\n    font-size: 20px;\n    background: ", ";\n    border: none;\n    &:focus {\n      background: #E2F0FF;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Input = _styledComponents["default"].input(_templateObject(), function (_ref) {
  var error = _ref.error;
  return error && '#FFE2E2' || '#ECECEC';
});

var _default = Input;
exports["default"] = _default;