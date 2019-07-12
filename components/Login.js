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

var _reactRouterDom = require("react-router-dom");

var _H = _interopRequireDefault(require("./H1/H1"));

var _H2 = _interopRequireDefault(require("./H3/H3"));

var _Input = _interopRequireDefault(require("./Input/Input"));

var _Button = _interopRequireDefault(require("./Button/Button"));

var _endpoint = _interopRequireDefault(require("../constants/endpoint"));

var _Spinner = _interopRequireDefault(require("./Spinner/Spinner"));

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

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 70px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  padding: 24px;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  height: 100vh;\n  box-sizing: border-box;\n  justify-content: center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HeaderWrapper = _styledComponents["default"].div(_templateObject());

var LoginEl = _styledComponents["default"].div(_templateObject2());

var LabelEl = _styledComponents["default"].label(_templateObject3());

var FormEl = _styledComponents["default"].form(_templateObject4());

var Login =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Login, _React$Component);

  function Login(props) {
    var _this;

    _classCallCheck(this, Login);

    console.log('construct Login');
    _this = _possibleConstructorReturn(this, _getPrototypeOf(Login).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "actionType", void 0);

    _defineProperty(_assertThisInitialized(_this), "onAuth", function (user) {
      var _this$props = _this.props,
          setAuth = _this$props.setAuth,
          history = _this$props.history;

      if (user) {
        setAuth(true);
        history.push('/');
      } else {
        console.log('not registered');

        _this.setState({
          isLoading: false
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "signup", function (values, action) {
      action.setSubmitting(true);
      firebase.auth().createUserWithEmailAndPassword(values.email, values.password).then(function (response) {
        console.log({
          response: response
        });
        action.setSubmitting(false);
      })["catch"](function (err) {
        return console.log(err);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "signin", function (values, action) {
      var _this$props2 = _this.props,
          setAuth = _this$props2.setAuth,
          history = _this$props2.history;
      action.setSubmitting(true);
      firebase.auth().signInWithEmailAndPassword(values.email, values.password).then(function (response) {
        console.log({
          response: response
        });
        action.setSubmitting(false);
      })["catch"](function (err) {
        return console.log(err);
      });
    });

    firebase.initializeApp({
      apiKey: "AIzaSyAaAj0jvlSSRTMcdMF-8nik9_UAappvQHM",
      authDomain: "remember-8a6c2.firebaseapp.com",
      databaseURL: "https://remember-8a6c2.firebaseio.com/",
      storageBucket: "bucket.appspot.com"
    });
    firebase.auth().onAuthStateChanged(_this.onAuth);
    _this.actionType = 'null';
    _this.state = {
      isLoading: true
    };
    return _this;
  }

  _createClass(Login, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var isLoading = this.state.isLoading;
      if (isLoading) return React.createElement("div", {
        style: {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }
      }, React.createElement(_Spinner["default"], null));
      return React.createElement(LoginEl, null, React.createElement(HeaderWrapper, null, React.createElement(_H["default"], null, "\u0412\u0441\u0435 \u0437\u0430\u043F\u043E\u043C\u043D\u0438\u0448\u044C"), React.createElement(_H["default"], {
        color: "blue"
      }, "!")), React.createElement(_formik.Formik, {
        initialValues: {
          email: '',
          password: ''
        },
        validationSchema: Yup.object().shape({
          email: Yup.string().email().required(),
          password: Yup.string().min(6).required()
        }),
        onSubmit: function onSubmit(values, actions) {
          switch (_this2.actionType) {
            case 'signup':
              return _this2.signup(values, actions);

            case 'signin':
              return _this2.signin(values, actions);

            default:
              return;
          }
        }
      }, function (_ref) {
        var errors = _ref.errors,
            touched = _ref.touched,
            values = _ref.values,
            handleBlur = _ref.handleBlur,
            handleChange = _ref.handleChange,
            handleSubmit = _ref.handleSubmit,
            isSubmitting = _ref.isSubmitting;
        return React.createElement(FormEl, null, React.createElement(LabelEl, null, React.createElement(_H2["default"], {
          margin: "0 0 8px 0"
        }, "\u041F\u043E\u0447\u0442\u0430"), React.createElement(_Input["default"], {
          type: "email",
          value: values.email,
          onChange: handleChange,
          id: "email",
          error: touched.email && errors.email,
          onBlur: handleBlur
        })), touched.email && errors.email && React.createElement("span", {
          style: {
            color: 'red'
          }
        }, errors.email), React.createElement(LabelEl, null, React.createElement(_H2["default"], {
          margin: "24px 0 8px 0"
        }, "\u041F\u0430\u0440\u043E\u043B\u044C"), React.createElement(_Input["default"], {
          type: "password",
          value: values.password,
          onChange: handleChange,
          id: "password",
          error: touched.password && errors.password,
          onBlur: handleBlur
        })), touched.password && errors.password && React.createElement("span", {
          style: {
            color: 'red'
          }
        }, errors.password), React.createElement(_Button["default"], {
          type: "button",
          margin: "24px 0 8px 0",
          color: "blue",
          onClick: function onClick(e) {
            _this2.actionType = 'signin';
            handleSubmit(e);
          }
        }, "\u0412\u043E\u0439\u0442\u0438", React.createElement("span", {
          role: "img",
          "aria-label": "door"
        }, "\uD83D\uDEAA")), React.createElement("span", {
          style: {
            textAlign: 'center'
          }
        }, "\u0438\u043B\u0438"), React.createElement(_Button["default"], {
          type: "button",
          margin: "8px 0 0 0",
          color: "blue",
          onClick: function onClick(e) {
            _this2.actionType = 'signup';
            handleSubmit(e);
          }
        }, "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F", React.createElement("span", {
          role: "img",
          "aria-label": "door"
        }, "\uD83D\uDC68")));
      }), false && React.createElement(FormEl, null, React.createElement(LabelEl, null, React.createElement(_H2["default"], {
        margin: "0 0 8px 0"
      }, "\u041B\u043E\u0433\u0438\u043D"), React.createElement(_Input["default"], {
        type: "email"
      })), React.createElement(LabelEl, null, React.createElement(_H2["default"], {
        margin: "24px 0 8px 0"
      }, "\u041F\u0430\u0440\u043E\u043B\u044C"), React.createElement(_Input["default"], {
        type: "password"
      })), React.createElement(_Button["default"], {
        type: "button",
        margin: "24px 0 8px 0",
        color: "blue"
      }, "\u0412\u043E\u0439\u0442\u0438", React.createElement("span", {
        role: "img",
        "aria-label": "door"
      }, "\uD83D\uDEAA")), React.createElement("span", {
        style: {
          textAlign: 'center'
        }
      }, "\u0438\u043B\u0438"), React.createElement(_Button["default"], {
        type: "button",
        margin: "8px 0 0 0",
        color: "blue"
      }, "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F", React.createElement("span", {
        role: "img",
        "aria-label": "door"
      }, "\uD83D\uDC68"))));
    }
  }]);

  return Login;
}(React.Component);

var _default = (0, _reactRouterDom.withRouter)(Login);

exports["default"] = _default;