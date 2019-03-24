(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./src/components/Work.jsx":
/*!*********************************!*\
  !*** ./src/components/Work.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/Typography/index.js\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst Work = props => {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    variant: \"h3\",\n    style: {\n      textAlign: 'center'\n    }\n  }, props.work.title);\n};\n\nWork.propTypes = {\n  work: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Work);\n\n//# sourceURL=webpack:///./src/components/Work.jsx?");

/***/ }),

/***/ "./src/components/WorkPreview.jsx":
/*!****************************************!*\
  !*** ./src/components/WorkPreview.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Card */ \"./node_modules/@material-ui/core/Card/index.js\");\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/CardContent */ \"./node_modules/@material-ui/core/CardContent/index.js\");\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ButtonBase */ \"./node_modules/@material-ui/core/ButtonBase/index.js\");\n/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles/withStyles */ \"./node_modules/@material-ui/core/styles/withStyles.js\");\n/* harmony import */ var _material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Modal */ \"./node_modules/@material-ui/core/Modal/index.js\");\n/* harmony import */ var _material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _Work__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Work */ \"./src/components/Work.jsx\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n // import TextEditable from './TextEditable'\n\n\n\nconst styles = theme => ({\n  button: {\n    marginBottom: theme.spacing.unit,\n    marginLeft: 'auto',\n    marginRight: 'auto',\n    width: '100%',\n    maxWidth: theme.breakpoints.values.sm,\n    display: 'flex',\n    justifyContent: 'space-between',\n    fontSize: theme.typography.fontSize,\n    borderRadius: theme.shape.borderRadius,\n    boxShadow: theme.shadows[1],\n    '&:hover': {\n      boxShadow: theme.shadows[5],\n      transition: theme.transitions.create('boxShadow', {\n        duration: theme.transitions.duration.short\n      })\n    },\n    backgroundColor: theme.palette.background.paper\n  },\n  buttonFocusVisible: {\n    boxShadow: theme.shadows[5],\n    transition: theme.transitions.create('boxShadow', {\n      duration: theme.transitions.duration.short\n    }),\n    backgroundColor: 'inherit'\n  },\n  card: {\n    width: 'inherit',\n    backgroundColor: 'inherit'\n  },\n  table: {\n    textAlign: 'left'\n  },\n  cardContent: {\n    display: 'flex',\n    justifyContent: 'space-between',\n    fontSize: theme.typography.fontSize\n  },\n  leftColumn: {\n    fontVariant: 'small-caps',\n    textAlign: 'right',\n    paddingRight: theme.typography.fontSize,\n    fontSize: theme.typography.fontSize - 3\n  },\n  rightColumn: {},\n  sideInfo: {\n    display: 'flex',\n    alignItems: 'center',\n    justifyContent: 'center'\n  },\n  modal: {\n    position: 'absolute',\n    backgroundColor: theme.palette.background.paper,\n    boxShadow: theme.shadows[5],\n    padding: theme.spacing.unit * 4,\n    outline: 'none',\n    top: '10%',\n    bottom: '10%',\n    left: '10%',\n    right: '10%'\n  }\n});\n\nclass WorkPreview extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(...args) {\n    super(...args);\n\n    _defineProperty(this, \"state\", {\n      open: false\n    });\n\n    _defineProperty(this, \"makeTitle\", name => name.charAt(0).toUpperCase() + name.slice(1));\n\n    _defineProperty(this, \"handleOpen\", () => {\n      this.setState({\n        open: true\n      });\n    });\n\n    _defineProperty(this, \"handleClose\", () => {\n      this.setState({\n        open: false\n      });\n    });\n  }\n\n  render() {\n    const {\n      type,\n      ...infoList\n    } = this.props.info;\n    const {\n      classes\n    } = this.props;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      focusVisibleClassName: classes.buttonFocusVisible,\n      classes: {\n        root: classes.button\n      },\n      type: \"button\",\n      onClick: this.handleOpen\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      className: classes.card\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      className: classes.cardContent\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"table\", {\n      className: classes.table\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tbody\", null, Object.keys(infoList).map((key, index) => {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", {\n        key: index\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n        className: classes.leftColumn\n      }, this.makeTitle(key)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n        className: classes.rightColumn\n      }, infoList[key]));\n    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: classes.sideInfo\n    }, type)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Modal__WEBPACK_IMPORTED_MODULE_6___default.a, {\n      open: this.state.open,\n      onClose: this.handleClose\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: classes.modal\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Work__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      work: infoList\n    }))));\n  }\n\n}\n\nWorkPreview.propTypes = {\n  classes: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired,\n  info: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_material_ui_core_styles_withStyles__WEBPACK_IMPORTED_MODULE_4___default()(styles)(WorkPreview));\n\n//# sourceURL=webpack:///./src/components/WorkPreview.jsx?");

/***/ }),

/***/ "./src/pages/Portfolio.jsx":
/*!*********************************!*\
  !*** ./src/pages/Portfolio.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_WorkPreview_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../components/WorkPreview.jsx */ \"./src/components/WorkPreview.jsx\");\n\n\nconst styles = {\n  ul: {\n    listStyleType: 'none',\n    padding: '0',\n    backgroundColor: 'inherit'\n  }\n};\n\nconst Portfolio = () => {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n    style: styles.ul\n  }, [1, 2, 3, 4, 5, 6, 7, 4, 2, 6, 2, 3].map((i, index) => {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n      key: index\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_WorkPreview_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      info: {\n        title: 'Skrr',\n        by: 'Los',\n        date: '20/1/1992',\n        location: 'Athens',\n        type: 'Music'\n      }\n    }));\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Portfolio);\n\n//# sourceURL=webpack:///./src/pages/Portfolio.jsx?");

/***/ })

}]);