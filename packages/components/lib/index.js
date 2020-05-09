'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Button = _interopDefault(require('@material-ui/core/Button'));
var React = _interopDefault(require('react'));

var MyButton = function MyButton() {
  return /*#__PURE__*/React.createElement(Button, {
    variant: "contained",
    disabled: true
  }, "hello");
};

exports.Button = Button;
exports.MyButton = MyButton;
