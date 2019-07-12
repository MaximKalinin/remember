"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Button = _interopRequireDefault(require("./Button/Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding: 24px;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  height: 100vh;\n  box-sizing: border-box;\n  justify-content: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HomeEl = _styledComponents["default"].div(_templateObject());

var Home = function Home(_ref) {
  var isAuth = _ref.isAuth;
  console.log({
    isAuth: isAuth
  });

  if (!isAuth) {
    return React.createElement(_reactRouterDom.Redirect, {
      to: "/hello"
    });
  }

  return React.createElement(HomeEl, null, React.createElement(_reactRouterDom.Link, {
    to: "/exercise"
  }, React.createElement(_Button["default"], {
    color: "blue",
    margin: "0 0 50px 0"
  }, "\u0422\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043A\u0430\uD83E\uDD1C")), React.createElement(_reactRouterDom.Link, {
    to: "/add"
  }, React.createElement(_Button["default"], {
    color: "blue"
  }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u043B\u043E\u0432\u0430\u270F\uFE0F")));
};

var _default = Home;
exports["default"] = _default;