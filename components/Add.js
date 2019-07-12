"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var firebase = _interopRequireWildcard(require("firebase"));

var _formik = require("formik");

var Yup = _interopRequireWildcard(require("yup"));

var _H = _interopRequireDefault(require("./H3/H3"));

var _Input = _interopRequireDefault(require("./Input/Input"));

var _Button = _interopRequireDefault(require("./Button/Button"));

var _HomeButton = _interopRequireDefault(require("./HomeButton/HomeButton"));

var _OK = _interopRequireDefault(require("./OK/OK"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  padding: 24px;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  height: 100vh;\n  box-sizing: border-box;\n  justify-content: center;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 70px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var LabelEl = _styledComponents["default"].label(_templateObject());

var FormEl = _styledComponents["default"].form(_templateObject2());

var AddEl = _styledComponents["default"].div(_templateObject3());

var Add =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Add, _React$Component);

  function Add() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Add);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Add)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      statusShown: false
    });

    _defineProperty(_assertThisInitialized(_this), "setStatus", function (statusShown) {
      return _this.setState({
        statusShown: statusShown
      });
    });

    _defineProperty(_assertThisInitialized(_this), "addWord", function (values) {
      var original = values.original,
          translation = values.translation;
      var userId = firebase.auth().currentUser.uid;
      var database = firebase.database();
      var words = database.ref("/".concat(userId, "/words"));
      var newWord = words.push();
      return newWord.set(values);
    });

    return _this;
  }

  _createClass(Add, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var statusShown = this.state.statusShown;
      return React.createElement(AddEl, null, React.createElement(_HomeButton["default"], null), statusShown && React.createElement(_OK["default"], {
        message: "\u0421\u043B\u043E\u0432\u043E \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u043E!",
        hide: function hide() {
          return _this2.setStatus(false);
        }
      }), React.createElement(_formik.Formik, {
        initialValues: {
          original: '',
          translation: ''
        },
        validationSchema: Yup.object().shape({
          original: Yup.string().required(),
          translation: Yup.string().required()
        }),
        onSubmit: function onSubmit(values, actions) {
          actions.setSubmitting(true);

          _this2.addWord(values).then(function () {
            _this2.setStatus(true);

            actions.setSubmitting(false);
            actions.resetForm();
          })["catch"](function (err) {
            return console.log({
              err: err
            });
          });
        }
      }, function (_ref) {
        var errors = _ref.errors,
            touched = _ref.touched,
            values = _ref.values,
            handleBlur = _ref.handleBlur,
            handleChange = _ref.handleChange,
            handleSubmit = _ref.handleSubmit,
            isSubmitting = _ref.isSubmitting;
        return React.createElement(FormEl, null, React.createElement(LabelEl, null, React.createElement(_H["default"], {
          margin: "0 0 8px 0"
        }, "\u0421\u043B\u043E\u0432\u043E"), React.createElement(_Input["default"], {
          type: "text",
          value: values.translation,
          onChange: handleChange,
          id: "translation",
          error: touched.translation && errors.translation,
          onBlur: handleBlur
        })), touched.translation && errors.translation && React.createElement("span", {
          style: {
            color: 'red'
          }
        }, errors.translation), React.createElement(LabelEl, null, React.createElement(_H["default"], {
          margin: "24px 0 8px 0"
        }, "\u041D\u0430 \u0440\u0443\u0441\u0441\u043A\u043E\u043C"), React.createElement(_Input["default"], {
          type: "text",
          value: values.original,
          onChange: handleChange,
          id: "original",
          error: touched.original && errors.original,
          onBlur: handleBlur
        })), touched.original && errors.original && React.createElement("span", {
          style: {
            color: 'red'
          }
        }, errors.original), React.createElement(_Button["default"], {
          type: "button",
          margin: "24px 0 150px 0",
          color: "blue",
          onClick: handleSubmit
        }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C", React.createElement("span", {
          role: "img",
          "aria-label": "door"
        }, "\uD83D\uDEAA")));
      }));
    }
  }]);

  return Add;
}(React.Component);

var _default = Add;
exports["default"] = _default;