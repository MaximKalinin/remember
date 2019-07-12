"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var firebase = _interopRequireWildcard(require("firebase"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactRouterDom = require("react-router-dom");

var _H = _interopRequireDefault(require("./H3/H3"));

var _HomeButton = _interopRequireDefault(require("./HomeButton/HomeButton"));

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

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  height: 100vh;\n  flex: 100vw 0 0;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  background: white;\n  box-shadow: 0 0 59px rgba(0, 0, 0, 0.35);\n  border-radius:  4px;\n  z-index: ", ";\n  & > * {\n    transition: opacity .3s;\n  }\n\n  &.animate {\n    animation: animate 1s ease-in-out;\n    & > * {\n      opacity: 0;\n    }\n  }\n\n  @keyframes animate {\n  0% {\n    transform: scale(1) translateX(0);\n  }\n  25% {\n    transform: scale(0.8) translateX(-10%);\n  }\n  75% {\n    transform: scale(0.8) translateX(-90%);\n  }\n  100% {\n    transform: scale(1) translateX(-100%);\n  }\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var WordEl = _styledComponents["default"].div(_templateObject(), function (_ref) {
  var zIndex = _ref.zIndex;
  return zIndex || 0;
});

var Exercise =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Exercise, _React$Component);

  function Exercise(props) {
    var _this;

    _classCallCheck(this, Exercise);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Exercise).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "nextStage", function () {
      var _this$state = _this.state,
          stage = _this$state.stage,
          word = _this$state.word;

      switch (stage) {
        case 'original':
          return _this.setState({
            stage: 'translation'
          });

        case 'translation':
          return _this.setState({
            animate: true
          });

        default:
          return;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onAnimationEnd", function () {
      var _this$state2 = _this.state,
          stage = _this$state2.stage,
          word = _this$state2.word;
      return _this.setState({
        word: word + 1,
        stage: 'original',
        animate: false
      });
    });

    _this.state = {
      words: [],
      stage: 'original',
      word: 0,
      animate: false,
      isLoading: true
    };
    _this.database = firebase.database();
    return _this;
  }

  _createClass(Exercise, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var userId = firebase.auth().currentUser.uid;
      this.database.ref("/".concat(userId, "/words")).on('value', function (words) {
        return _this2.setState({
          words: shuffle(Object.keys(words.val()).map(function (key) {
            return words.val()[key];
          })),
          isLoading: false
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state3 = this.state,
          words = _this$state3.words,
          word = _this$state3.word,
          stage = _this$state3.stage,
          animate = _this$state3.animate,
          isLoading = _this$state3.isLoading;
      console.log({
        words: words,
        word: word,
        stage: stage
      });
      var answerStyle = {
        opacity: stage === 'original' || animate ? 0 : 1
      };
      if (isLoading) return React.createElement("div", {
        style: {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }
      }, React.createElement(_Spinner["default"], null));

      if (word >= words.length) {
        var EndEl = (0, _reactRouterDom.withRouter)(End);
        return React.createElement(EndEl, null);
      }

      return React.createElement("div", {
        style: {
          display: 'flex',
          background: '#CCCCCC',
          flexWrap: 'nowrap',
          overflowX: 'hidden'
        }
      }, React.createElement(WordEl, {
        onClick: this.nextStage,
        className: animate && 'animate' || '',
        zIndex: 2
      }, React.createElement(_HomeButton["default"], null), React.createElement(_H["default"], {
        margin: "0 0 20px 0"
      }, words[word] && words[word].original), React.createElement("div", {
        style: answerStyle
      }, React.createElement(_H["default"], {
        color: "blue"
      }, words[word] && words[word].translation))), React.createElement(WordEl, {
        className: animate && 'animate' || '',
        onAnimationEnd: this.onAnimationEnd,
        zIndex: 1
      }));
    }
  }]);

  return Exercise;
}(React.Component);

var End =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(End, _React$Component2);

  function End() {
    _classCallCheck(this, End);

    return _possibleConstructorReturn(this, _getPrototypeOf(End).apply(this, arguments));
  }

  _createClass(End, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var history = this.props.history;
      setTimeout(function () {
        return history.push('/');
      }, 1000);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(WordEl, null, React.createElement(_H["default"], null, "\u0412\u0441\u0435!"));
    }
  }]);

  return End;
}(React.Component);

var shuffle = function shuffle(a) {
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var _ref2 = [a[j], a[i]];
    a[i] = _ref2[0];
    a[j] = _ref2[1];
  }

  return a;
};

var _default = Exercise;
exports["default"] = _default;