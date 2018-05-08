'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var user = function user(props) {
    return _react2.default.createElement('div', {
        className: 'jsx-2876080547'
    }, _react2.default.createElement('h1', {
        className: 'jsx-2876080547'
    }, props.name), _react2.default.createElement('p', {
        className: 'jsx-2876080547'
    }, 'Age: ', props.age), _react2.default.createElement(_style2.default, {
        styleId: '2876080547',
        css: ['div.jsx-2876080547{border:1px solid #eee;box-shadow:0 2p 3px #ccc;padding:20px;text-align:center;}']
    }));
};

exports.default = user;