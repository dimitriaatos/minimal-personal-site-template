(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./src/pages/Contact.jsx":
/*!*******************************!*\
  !*** ./src/pages/Contact.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../theme */ \"./src/theme.jsx\");\n/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/ButtonBase */ \"./node_modules/@material-ui/core/ButtonBase/index.js\");\n/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/index.es.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ \"./node_modules/@fortawesome/free-brands-svg-icons/index.es.js\");\n\n\n\n\n\n\n\n\n\nconst styles = theme => ({\n  main: {\n    position: 'fixed',\n    width: '100%',\n    height: '100%',\n    overflow: 'auto',\n    backgroundColor: 'inherit'\n  },\n  contactContainer: {\n    marginTop: theme.spacing.unit * 4,\n    backgroundColor: theme.palette.primary,\n    display: 'flex',\n    justifyContent: 'center',\n    flexWrap: 'wrap'\n  },\n  button: {\n    margin: theme.spacing.unit,\n    color: theme.palette.primary.main,\n    '&:hover': {\n      color: theme.palette.primary.dark\n    }\n  },\n  buttonFocusVisible: {\n    color: theme.palette.primary.dark\n  }\n});\n\nconst icons = [{\n  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__[\"faEnvelope\"],\n  link: 'mailto:dimitriaatos@gmail.com'\n}, {\n  icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__[\"faGithub\"],\n  link: 'https://github.com/dimitriaatos/'\n}, {\n  icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__[\"faFacebook\"],\n  link: 'https://www.facebook.com/dimitris.aatos'\n}, {\n  icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__[\"faTwitter\"],\n  link: 'https://twitter.com/DimitriAatos'\n}, {\n  icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__[\"faFacebookMessenger\"],\n  link: 'https://www.messenger.com/t/dimitris.aatos'\n}, {\n  icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__[\"faSkype\"],\n  link: 'skype:dimitris.ellinas'\n}, {\n  icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__[\"faInstagram\"],\n  link: 'https://www.instagram.com/dimitriaatos/'\n}, {\n  icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__[\"faLinkedin\"],\n  link: 'https://www.linkedin.com/in/dimitri-aatos-ellinas-183842137/'\n}]; // eslint-disable-next-line no-useless-escape\n\nconst url = /^(?:http(s)?:\\/\\/)?[\\w.-]+(?:\\.[\\w\\.-]+)+[\\w\\-\\._~:/?#[\\]@!\\$&'\\(\\)\\*\\+,;=.]+$/;\n\nconst Contact = props => {\n  const {\n    classes\n  } = props;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"main\", {\n    className: classes.main\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: classes.contactContainer\n  }, icons.map((icon, index) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    disableRipple: true,\n    key: index,\n    classes: {\n      root: classes.button,\n      focusVisible: classes.buttonFocusVisible\n    },\n    href: icon.link,\n    target: url.test(icon.link) ? '_blank' : ''\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__[\"FontAwesomeIcon\"], {\n    icon: icon.icon,\n    size: _theme__WEBPACK_IMPORTED_MODULE_1__[\"default\"].iconSize\n  })))));\n};\n\nContact.propTypes = {\n  classes: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,\n  icons: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[\"withStyles\"])(styles)(Contact));\n\n//# sourceURL=webpack:///./src/pages/Contact.jsx?");

/***/ })

}]);