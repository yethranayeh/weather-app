/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/reset.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/reset.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/**\\r\\n * /* http://meyerweb.com/eric/tools/css/reset/ \\r\\n *    v2.0 | 20110126\\r\\n *    License: none (public domain)\\r\\n *\\r\\n * @format\\r\\n */\\r\\n\\r\\nhtml,\\r\\nbody,\\r\\ndiv,\\r\\nspan,\\r\\napplet,\\r\\nobject,\\r\\niframe,\\r\\nh1,\\r\\nh2,\\r\\nh3,\\r\\nh4,\\r\\nh5,\\r\\nh6,\\r\\np,\\r\\nblockquote,\\r\\npre,\\r\\na,\\r\\nabbr,\\r\\nacronym,\\r\\naddress,\\r\\nbig,\\r\\ncite,\\r\\ncode,\\r\\ndel,\\r\\ndfn,\\r\\nem,\\r\\nimg,\\r\\nins,\\r\\nkbd,\\r\\nq,\\r\\ns,\\r\\nsamp,\\r\\nsmall,\\r\\nstrike,\\r\\nstrong,\\r\\nsub,\\r\\nsup,\\r\\ntt,\\r\\nvar,\\r\\nb,\\r\\nu,\\r\\ni,\\r\\ncenter,\\r\\ndl,\\r\\ndt,\\r\\ndd,\\r\\nol,\\r\\nul,\\r\\nli,\\r\\nfieldset,\\r\\nform,\\r\\nlabel,\\r\\nlegend,\\r\\ntable,\\r\\ncaption,\\r\\ntbody,\\r\\ntfoot,\\r\\nthead,\\r\\ntr,\\r\\nth,\\r\\ntd,\\r\\narticle,\\r\\naside,\\r\\ncanvas,\\r\\ndetails,\\r\\nembed,\\r\\nfigure,\\r\\nfigcaption,\\r\\nfooter,\\r\\nheader,\\r\\nhgroup,\\r\\nmenu,\\r\\nnav,\\r\\noutput,\\r\\nruby,\\r\\nsection,\\r\\nsummary,\\r\\ntime,\\r\\nmark,\\r\\naudio,\\r\\nvideo {\\r\\n\\tmargin: 0;\\r\\n\\tpadding: 0;\\r\\n\\tborder: 0;\\r\\n\\tfont-size: 100%;\\r\\n\\tfont: inherit;\\r\\n\\tvertical-align: baseline;\\r\\n}\\r\\n/* HTML5 display-role reset for older browsers */\\r\\narticle,\\r\\naside,\\r\\ndetails,\\r\\nfigcaption,\\r\\nfigure,\\r\\nfooter,\\r\\nheader,\\r\\nhgroup,\\r\\nmenu,\\r\\nnav,\\r\\nsection {\\r\\n\\tdisplay: block;\\r\\n}\\r\\nbody {\\r\\n\\tline-height: 1;\\r\\n}\\r\\nol,\\r\\nul {\\r\\n\\tlist-style: none;\\r\\n}\\r\\nblockquote,\\r\\nq {\\r\\n\\tquotes: none;\\r\\n}\\r\\nblockquote:before,\\r\\nblockquote:after,\\r\\nq:before,\\r\\nq:after {\\r\\n\\tcontent: \\\"\\\";\\r\\n\\tcontent: none;\\r\\n}\\r\\ntable {\\r\\n\\tborder-collapse: collapse;\\r\\n\\tborder-spacing: 0;\\r\\n}\\r\\ninput {\\r\\n\\toutline: none;\\r\\n\\tborder: none;\\r\\n\\tfont-family: inherit;\\r\\n}\\r\\nbutton,\\r\\ninput,\\r\\noptgroup,\\r\\nselect,\\r\\ntextarea {\\r\\n\\tfont-family: inherit; /* 1 */\\r\\n\\tfont-size: 100%; /* 1 */\\r\\n\\tmargin: 0; /* 2 */\\r\\n}\\r\\n\\r\\n/**\\r\\n  * Show the overflow in IE.\\r\\n  * 1. Show the overflow in Edge.\\r\\n  */\\r\\n\\r\\nbutton,\\r\\ninput {\\r\\n\\t/* 1 */\\r\\n\\toverflow: visible;\\r\\n}\\r\\n\\r\\n/**\\r\\n  * Remove the inheritance of text transform in Edge, Firefox, and IE.\\r\\n  * 1. Remove the inheritance of text transform in Firefox.\\r\\n  */\\r\\n\\r\\nbutton,\\r\\nselect {\\r\\n\\t/* 1 */\\r\\n\\ttext-transform: none;\\r\\n}\\r\\n\\r\\n/**\\r\\n  * Correct the inability to style clickable types in iOS and Safari.\\r\\n  */\\r\\n\\r\\nbutton,\\r\\n[type=\\\"button\\\"],\\r\\n[type=\\\"reset\\\"],\\r\\n[type=\\\"submit\\\"] {\\r\\n\\t-webkit-appearance: button;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n\\tdisplay: inline-block;\\r\\n\\t-webkit-appearance: none !important;\\r\\n\\t-moz-appearance: none !important;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather-app/./src/reset.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/saira-v8-latin-ext_latin-regular.woff2 */ \"./src/fonts/saira-v8-latin-ext_latin-regular.woff2\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/saira-v8-latin-ext_latin-regular.woff */ \"./src/fonts/saira-v8-latin-ext_latin-regular.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/saira-v8-latin-ext_latin-700.woff2 */ \"./src/fonts/saira-v8-latin-ext_latin-700.woff2\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/saira-v8-latin-ext_latin-700.woff */ \"./src/fonts/saira-v8-latin-ext_latin-700.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/** @format */\\r\\n/* saira-regular - latin-ext_latin */\\r\\n@font-face {\\r\\n\\tfont-family: \\\"Saira\\\";\\r\\n\\tfont-style: normal;\\r\\n\\tfont-weight: 400;\\r\\n\\tfont-display: swap;\\r\\n\\tsrc: local(\\\"\\\"), url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format(\\\"woff2\\\"),\\r\\n\\t\\t/* Chrome 26+, Opera 23+, Firefox 39+ */ url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") format(\\\"woff\\\"); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\\r\\n}\\r\\n\\r\\n/* saira-700 - latin-ext_latin */\\r\\n@font-face {\\r\\n\\tfont-family: \\\"Saira\\\";\\r\\n\\tfont-style: normal;\\r\\n\\tfont-weight: 700;\\r\\n\\tfont-display: swap;\\r\\n\\tsrc: local(\\\"\\\"), url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \") format(\\\"woff2\\\"),\\r\\n\\t\\t/* Chrome 26+, Opera 23+, Firefox 39+ */ url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \") format(\\\"woff\\\"); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\\r\\n}\\r\\n\\r\\n/* Start: General */\\r\\n:root {\\r\\n\\t--border-radius: 10px;\\r\\n\\t--padding-min: 0.3rem;\\r\\n\\t--padding-medium: 0.5rem;\\r\\n\\t--padding-max: 1rem;\\r\\n\\r\\n\\t--bg: #212529;\\r\\n\\t--primary: #212529;\\r\\n\\t--secondary: #8f9499;\\r\\n\\t--error: #de4d4c;\\r\\n\\r\\n\\t--light: #dee2e6;\\r\\n\\t--middle: #adb5bd;\\r\\n\\t--dark: #343a40;\\r\\n\\t--weather: #adb5bd;\\r\\n\\r\\n\\t--day: #ec6e4c;\\r\\n\\t--night: #070a32;\\r\\n\\t--sunny: #fbdd7a;\\r\\n\\t--clouds: #969697;\\r\\n\\t--rain: #6df9e5;\\r\\n\\t--thunderstorm: #5bdcfe;\\r\\n\\t--snow: #fcf7f8;\\r\\n\\r\\n\\t/* Atmosphere */\\r\\n\\t--mist: #98a9b2;\\r\\n\\t--smoke: #7f7a78;\\r\\n\\t--fog: #e2e2e2;\\r\\n\\t--haze: #e1d5c5;\\r\\n\\t--dust: #e7ac59;\\r\\n\\t--sand: #d6bd83;\\r\\n\\t--ash: #535455;\\r\\n\\t--squall: #26283c;\\r\\n\\t--tornado: #2f2e33;\\r\\n}\\r\\n\\r\\n*,\\r\\n*:before,\\r\\n*:after {\\r\\n\\tbox-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n\\tfont-family: \\\"Saira\\\", Arial, sans-serif;\\r\\n\\theight: 100vh;\\r\\n\\twidth: 100%;\\r\\n\\toverflow-x: hidden;\\r\\n\\tcolor: var(--light);\\r\\n\\tbackground-color: var(--weather);\\r\\n\\tbackground-image: linear-gradient(to bottom, var(--bg), transparent 50%);\\r\\n\\ttransition: background-color 0.5s ease, color 0.5s ease;\\r\\n}\\r\\n\\r\\n/* Weather color conditions */\\r\\nbody[data-weather=\\\"Clear\\\"] {\\r\\n\\t--weather: var(--sunny);\\r\\n}\\r\\n\\r\\nbody[data-weather=\\\"Clouds\\\"] {\\r\\n\\t--weather: var(--clouds);\\r\\n}\\r\\n\\r\\nbody[data-weather=\\\"Drizzle\\\"],\\r\\nbody[data-weather=\\\"Rain\\\"] {\\r\\n\\t--weather: var(--rain);\\r\\n}\\r\\n\\r\\nbody[data-weather=\\\"Snow\\\"] {\\r\\n\\t--weather: var(--snow);\\r\\n}\\r\\n\\r\\nbody[data-weather=\\\"Thunderstorm\\\"] {\\r\\n\\t--weather: var(--thunderstorm);\\r\\n}\\r\\n\\r\\nbody[data-weather=\\\"Mist\\\"] {\\r\\n\\t--weather: var(--mist);\\r\\n}\\r\\n\\r\\nbody[data-weather=\\\"Smoke\\\"] {\\r\\n\\t--weather: var(--smoke);\\r\\n}\\r\\n\\r\\nbody[data-weather=\\\"Fog\\\"] {\\r\\n\\t--weather: var(--fog);\\r\\n}\\r\\n\\r\\nbody[data-weather=\\\"Haze\\\"] {\\r\\n\\t--weather: var(--haze);\\r\\n}\\r\\n\\r\\nbody[data-weather=\\\"Dust\\\"] {\\r\\n\\t--weather: var(--dust);\\r\\n}\\r\\n\\r\\nbody[data-weather=\\\"Sand\\\"] {\\r\\n\\t--weather: var(--sand);\\r\\n}\\r\\n\\r\\nbody[data-weather=\\\"Ash\\\"] {\\r\\n\\t--weather: var(--ash);\\r\\n}\\r\\n\\r\\nbody[data-weather=\\\"Squall\\\"] {\\r\\n\\t--weather: var(--squall);\\r\\n}\\r\\n\\r\\nbody[data-weather=\\\"Tornado\\\"] {\\r\\n\\t--weather: var(--tornado);\\r\\n}\\r\\n\\r\\n/* Time of day color conditions */\\r\\nbody[data-time=\\\"d\\\"] {\\r\\n\\t--bg: var(--day);\\r\\n\\t--primary: #264653;\\r\\n\\t--secondary: #2a9d8f;\\r\\n\\r\\n\\t--light: #fafafa;\\r\\n\\t--middle: var(--mist);\\r\\n\\t--dark: #222;\\r\\n}\\r\\n\\r\\nbody[data-time=\\\"n\\\"] {\\r\\n\\t--bg: var(--night);\\r\\n\\t--primary: #212529;\\r\\n\\t--secondary: #515a64;\\r\\n\\t/* --secondary: #343a40; */\\r\\n\\r\\n\\t--light: #e9ecef;\\r\\n\\t--middle: var(--mist);\\r\\n\\t--dark: #343a40;\\r\\n}\\r\\n\\r\\n.sr-only {\\r\\n\\tposition: absolute;\\r\\n\\twidth: 1px;\\r\\n\\theight: 1px;\\r\\n\\tpadding: 0;\\r\\n\\tmargin: -1px;\\r\\n\\toverflow: hidden;\\r\\n\\tclip: rect(0, 0, 0, 0);\\r\\n\\twhite-space: nowrap; /* added line */\\r\\n\\tborder: 0;\\r\\n}\\r\\n\\r\\n.disable-select {\\r\\n\\t-webkit-user-select: none;\\r\\n\\t-moz-user-select: none;\\r\\n\\t-ms-user-select: none;\\r\\n\\tuser-select: none;\\r\\n}\\r\\n/* End: General */\\r\\n\\r\\n/* Start: Main */\\r\\n.content {\\r\\n\\tdisplay: flex;\\r\\n\\tflex-direction: column;\\r\\n\\tgap: 1rem;\\r\\n\\tpadding: var(--padding-max);\\r\\n}\\r\\n\\r\\n/* -Start: Form */\\r\\nform {\\r\\n\\t--fs: 1.2rem;\\r\\n\\tfont-size: var(--fs);\\r\\n\\tdisplay: flex;\\r\\n\\tflex-direction: column;\\r\\n\\tgap: 0.5em;\\r\\n\\twidth: 100%;\\r\\n}\\r\\n\\r\\ninput[type=\\\"search\\\"] {\\r\\n\\tborder: none;\\r\\n\\toutline: none;\\r\\n\\tbackground: none;\\r\\n\\twidth: 100%;\\r\\n\\tpadding: var(--padding-min);\\r\\n\\tcolor: var(--primary);\\r\\n\\ttransition: color 250ms ease-out;\\r\\n}\\r\\n\\r\\n.search-area {\\r\\n\\tdisplay: inline-flex;\\r\\n\\talign-items: center;\\r\\n\\tjustify-content: space-between;\\r\\n\\tgap: 0.2em;\\r\\n\\tpadding: var(--padding-min) var(--padding-medium);\\r\\n\\r\\n\\tfont-size: 1.1em;\\r\\n\\tborder: 3px solid var(--primary);\\r\\n\\tborder-radius: var(--border-radius);\\r\\n\\tbackground-color: var(--middle);\\r\\n\\ttransition: border-color 250ms ease-out, background-color 250ms ease-out;\\r\\n}\\r\\n\\r\\n.search-area:focus-within {\\r\\n\\tborder-color: var(--primary);\\r\\n}\\r\\n\\r\\n.search-area:focus-within,\\r\\n.search-area:hover {\\r\\n\\tbackground-color: var(--light);\\r\\n\\tborder-color: var(--secondary);\\r\\n}\\r\\n\\r\\n.search-area i {\\r\\n\\tcursor: pointer;\\r\\n\\tcolor: var(--primary);\\r\\n\\ttransition: color 250ms ease-out;\\r\\n}\\r\\n\\r\\n.search-area:focus-within i,\\r\\n.search-area:hover i {\\r\\n\\tcolor: var(--secondary);\\r\\n}\\r\\n\\r\\n.options {\\r\\n\\tdisplay: flex;\\r\\n\\tjustify-content: space-between;\\r\\n}\\r\\n\\r\\n.lang {\\r\\n\\tdisplay: flex;\\r\\n\\tjustify-content: center;\\r\\n\\talign-items: center;\\r\\n\\tgap: 0.6em;\\r\\n\\tpadding: var(--padding-min) var(--padding-medium);\\r\\n\\tborder: 2px solid var(--primary);\\r\\n\\tborder-radius: var(--border-radius);\\r\\n\\tbackground-color: var(--secondary);\\r\\n\\tcolor: var(--light);\\r\\n\\ttransition: border-color 250ms ease-out, background-color 250ms ease-out, color 250ms ease-out;\\r\\n}\\r\\n\\r\\n.lang select {\\r\\n\\tcolor: var(--light);\\r\\n\\tborder: none;\\r\\n\\tbackground: none;\\r\\n}\\r\\n\\r\\n.lang option {\\r\\n\\tcolor: var(--light);\\r\\n\\tbackground-color: var(--secondary);\\r\\n\\ttext-transform: capitalize;\\r\\n\\ttransition: color 250ms ease-out, background-color 250ms ease-out;\\r\\n}\\r\\n\\r\\n.lang option.rtl {\\r\\n\\tdirection: rtl;\\r\\n}\\r\\n\\r\\n.lang optgroup {\\r\\n\\tcolor: var(--light);\\r\\n\\tbackground-color: var(--primary);\\r\\n\\ttransition: color 250ms ease-out, background-color 250ms ease-out;\\r\\n}\\r\\n\\r\\n.units {\\r\\n\\tdisplay: flex;\\r\\n\\tflex-direction: row-reverse;\\r\\n\\tbackground-color: var(--primary);\\r\\n\\tborder: 2px solid var(--primary);\\r\\n\\tborder-radius: var(--border-radius);\\r\\n\\toverflow: hidden;\\r\\n\\ttransition: background-color 250ms ease-out, border-color 250ms ease-out;\\r\\n}\\r\\n\\r\\n.units input {\\r\\n\\tappearance: none;\\r\\n\\t-moz-appearance: none;\\r\\n\\t-webkit-appearance: none;\\r\\n\\tborder: none;\\r\\n\\toutline: none;\\r\\n}\\r\\n\\r\\n.units label {\\r\\n\\tcursor: pointer;\\r\\n\\tcolor: var(--secondary);\\r\\n\\tpadding: var(--padding-medium);\\r\\n\\tborder: 2px solid transparent;\\r\\n\\ttransition: background-color 250ms ease-out, color 250ms ease-out;\\r\\n}\\r\\n\\r\\n.units label:hover {\\r\\n\\tbackground-color: var(--secondary);\\r\\n\\tcolor: var(--light);\\r\\n}\\r\\n\\r\\n.units input:checked + label {\\r\\n\\tcolor: var(--light);\\r\\n\\tbackground-color: var(--secondary);\\r\\n}\\r\\n/* -End: Form */\\r\\n\\r\\n/* -Start: Weather Info */\\r\\n.weather {\\r\\n\\t--fs: 1.4rem;\\r\\n\\tfont-size: var(--fs);\\r\\n\\r\\n\\tdisplay: flex;\\r\\n\\tflex-direction: column;\\r\\n\\tjustify-content: center;\\r\\n\\talign-items: center;\\r\\n\\tgap: 0.5em;\\r\\n\\twidth: 100%;\\r\\n\\r\\n\\tmargin: auto;\\r\\n\\tpadding: var(--padding-max);\\r\\n}\\r\\n\\r\\n.weather.info {\\r\\n\\tborder: 2px solid var(--primary);\\r\\n\\tborder-radius: var(--border-radius);\\r\\n\\tbackground-color: var(--secondary);\\r\\n\\r\\n\\ttext-shadow: 0 0 5px var(--primary);\\r\\n\\tcolor: var(--light);\\r\\n\\ttransition: border-color 250ms ease-out, background-color 250ms ease-out, color 250ms ease-out;\\r\\n}\\r\\n\\r\\n.weather-city {\\r\\n\\tfont-size: 1.3em;\\r\\n\\tfont-weight: 700;\\r\\n}\\r\\n\\r\\n.weather-date {\\r\\n\\tfont-size: 0.8em;\\r\\n}\\r\\n\\r\\n.weather img {\\r\\n\\t/* Weather icons have extra empty space, so it is clipped with negative margins */\\r\\n\\tmargin: -1em 0;\\r\\n}\\r\\n\\r\\n.weather-temp {\\r\\n\\tfont-size: 4em;\\r\\n\\tfont-weight: bold;\\r\\n}\\r\\n\\r\\n.weather-description {\\r\\n\\tfont-size: 1.1em;\\r\\n\\ttext-transform: capitalize;\\r\\n}\\r\\n\\r\\n.wind-and-humidity {\\r\\n\\tdisplay: flex;\\r\\n\\tjustify-content: space-between;\\r\\n\\twidth: 100%;\\r\\n\\tfont-size: 0.9em;\\r\\n}\\r\\n\\r\\n.wind-and-humidity i {\\r\\n\\tmargin-right: 0.5em;\\r\\n}\\r\\n\\r\\n.loading {\\r\\n\\tfont-size: 4rem;\\r\\n\\tmargin: auto;\\r\\n}\\r\\n\\r\\n.loading i {\\r\\n\\tcolor: var(--secondary);\\r\\n\\ttext-shadow: 0 0 2px var(--primary), 0 0 5px var(--light);\\r\\n\\ttransition: color 250ms ease-out, text-shadow 250ms ease-out;\\r\\n}\\r\\n\\r\\n.error {\\r\\n\\t--fs: 1.8rem;\\r\\n\\tfont-size: var(--fs);\\r\\n\\twidth: 100%;\\r\\n\\r\\n\\tdisplay: flex;\\r\\n\\tjustify-content: center;\\r\\n\\talign-items: center;\\r\\n\\tpadding: var(--padding-max);\\r\\n\\tgap: 0.6em;\\r\\n\\r\\n\\tborder: 2px solid var(--error);\\r\\n\\tborder-radius: var(--border-radius);\\r\\n\\tbackground-color: var(--light);\\r\\n\\tcolor: var(--error);\\r\\n}\\r\\n\\r\\n.error p {\\r\\n\\ttext-transform: capitalize;\\r\\n\\tfont-weight: bold;\\r\\n}\\r\\n\\r\\n.error i {\\r\\n\\tcolor: var(--error);\\r\\n}\\r\\n/* -End: Weather Info */\\r\\n/* End: Main */\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather-app/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/pubsub-js/src/pubsub.js":
/*!**********************************************!*\
  !*** ./node_modules/pubsub-js/src/pubsub.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\n/**\n * Copyright (c) 2010,2011,2012,2013,2014 Morgan Roderick http://roderick.dk\n * License: MIT - http://mrgnrdrck.mit-license.org\n *\n * https://github.com/mroderick/PubSubJS\n */\n\n(function (root, factory){\n    'use strict';\n\n    var PubSub = {};\n\n    if (root.PubSub) {\n        PubSub = root.PubSub;\n        console.warn(\"PubSub already loaded, using existing version\");\n    } else {\n        root.PubSub = PubSub;\n        factory(PubSub);\n    }\n    // CommonJS and Node.js module support\n    if (true){\n        if (module !== undefined && module.exports) {\n            exports = module.exports = PubSub; // Node.js specific `module.exports`\n        }\n        exports.PubSub = PubSub; // CommonJS module 1.1.1 spec\n        module.exports = exports = PubSub; // CommonJS\n    }\n    // AMD support\n    /* eslint-disable no-undef */\n    else {}\n\n}(( typeof window === 'object' && window ) || this, function (PubSub){\n    'use strict';\n\n    var messages = {},\n        lastUid = -1,\n        ALL_SUBSCRIBING_MSG = '*';\n\n    function hasKeys(obj){\n        var key;\n\n        for (key in obj){\n            if ( Object.prototype.hasOwnProperty.call(obj, key) ){\n                return true;\n            }\n        }\n        return false;\n    }\n\n    /**\n     * Returns a function that throws the passed exception, for use as argument for setTimeout\n     * @alias throwException\n     * @function\n     * @param { Object } ex An Error object\n     */\n    function throwException( ex ){\n        return function reThrowException(){\n            throw ex;\n        };\n    }\n\n    function callSubscriberWithDelayedExceptions( subscriber, message, data ){\n        try {\n            subscriber( message, data );\n        } catch( ex ){\n            setTimeout( throwException( ex ), 0);\n        }\n    }\n\n    function callSubscriberWithImmediateExceptions( subscriber, message, data ){\n        subscriber( message, data );\n    }\n\n    function deliverMessage( originalMessage, matchedMessage, data, immediateExceptions ){\n        var subscribers = messages[matchedMessage],\n            callSubscriber = immediateExceptions ? callSubscriberWithImmediateExceptions : callSubscriberWithDelayedExceptions,\n            s;\n\n        if ( !Object.prototype.hasOwnProperty.call( messages, matchedMessage ) ) {\n            return;\n        }\n\n        for (s in subscribers){\n            if ( Object.prototype.hasOwnProperty.call(subscribers, s)){\n                callSubscriber( subscribers[s], originalMessage, data );\n            }\n        }\n    }\n\n    function createDeliveryFunction( message, data, immediateExceptions ){\n        return function deliverNamespaced(){\n            var topic = String( message ),\n                position = topic.lastIndexOf( '.' );\n\n            // deliver the message as it is now\n            deliverMessage(message, message, data, immediateExceptions);\n\n            // trim the hierarchy and deliver message to each level\n            while( position !== -1 ){\n                topic = topic.substr( 0, position );\n                position = topic.lastIndexOf('.');\n                deliverMessage( message, topic, data, immediateExceptions );\n            }\n\n            deliverMessage(message, ALL_SUBSCRIBING_MSG, data, immediateExceptions);\n        };\n    }\n\n    function hasDirectSubscribersFor( message ) {\n        var topic = String( message ),\n            found = Boolean(Object.prototype.hasOwnProperty.call( messages, topic ) && hasKeys(messages[topic]));\n\n        return found;\n    }\n\n    function messageHasSubscribers( message ){\n        var topic = String( message ),\n            found = hasDirectSubscribersFor(topic) || hasDirectSubscribersFor(ALL_SUBSCRIBING_MSG),\n            position = topic.lastIndexOf( '.' );\n\n        while ( !found && position !== -1 ){\n            topic = topic.substr( 0, position );\n            position = topic.lastIndexOf( '.' );\n            found = hasDirectSubscribersFor(topic);\n        }\n\n        return found;\n    }\n\n    function publish( message, data, sync, immediateExceptions ){\n        message = (typeof message === 'symbol') ? message.toString() : message;\n\n        var deliver = createDeliveryFunction( message, data, immediateExceptions ),\n            hasSubscribers = messageHasSubscribers( message );\n\n        if ( !hasSubscribers ){\n            return false;\n        }\n\n        if ( sync === true ){\n            deliver();\n        } else {\n            setTimeout( deliver, 0 );\n        }\n        return true;\n    }\n\n    /**\n     * Publishes the message, passing the data to it's subscribers\n     * @function\n     * @alias publish\n     * @param { String } message The message to publish\n     * @param {} data The data to pass to subscribers\n     * @return { Boolean }\n     */\n    PubSub.publish = function( message, data ){\n        return publish( message, data, false, PubSub.immediateExceptions );\n    };\n\n    /**\n     * Publishes the message synchronously, passing the data to it's subscribers\n     * @function\n     * @alias publishSync\n     * @param { String } message The message to publish\n     * @param {} data The data to pass to subscribers\n     * @return { Boolean }\n     */\n    PubSub.publishSync = function( message, data ){\n        return publish( message, data, true, PubSub.immediateExceptions );\n    };\n\n    /**\n     * Subscribes the passed function to the passed message. Every returned token is unique and should be stored if you need to unsubscribe\n     * @function\n     * @alias subscribe\n     * @param { String } message The message to subscribe to\n     * @param { Function } func The function to call when a new message is published\n     * @return { String }\n     */\n    PubSub.subscribe = function( message, func ){\n        if ( typeof func !== 'function'){\n            return false;\n        }\n\n        message = (typeof message === 'symbol') ? message.toString() : message;\n\n        // message is not registered yet\n        if ( !Object.prototype.hasOwnProperty.call( messages, message ) ){\n            messages[message] = {};\n        }\n\n        // forcing token as String, to allow for future expansions without breaking usage\n        // and allow for easy use as key names for the 'messages' object\n        var token = 'uid_' + String(++lastUid);\n        messages[message][token] = func;\n\n        // return token for unsubscribing\n        return token;\n    };\n\n    PubSub.subscribeAll = function( func ){\n        return PubSub.subscribe(ALL_SUBSCRIBING_MSG, func);\n    };\n\n    /**\n     * Subscribes the passed function to the passed message once\n     * @function\n     * @alias subscribeOnce\n     * @param { String } message The message to subscribe to\n     * @param { Function } func The function to call when a new message is published\n     * @return { PubSub }\n     */\n    PubSub.subscribeOnce = function( message, func ){\n        var token = PubSub.subscribe( message, function(){\n            // before func apply, unsubscribe message\n            PubSub.unsubscribe( token );\n            func.apply( this, arguments );\n        });\n        return PubSub;\n    };\n\n    /**\n     * Clears all subscriptions\n     * @function\n     * @public\n     * @alias clearAllSubscriptions\n     */\n    PubSub.clearAllSubscriptions = function clearAllSubscriptions(){\n        messages = {};\n    };\n\n    /**\n     * Clear subscriptions by the topic\n     * @function\n     * @public\n     * @alias clearAllSubscriptions\n     * @return { int }\n     */\n    PubSub.clearSubscriptions = function clearSubscriptions(topic){\n        var m;\n        for (m in messages){\n            if (Object.prototype.hasOwnProperty.call(messages, m) && m.indexOf(topic) === 0){\n                delete messages[m];\n            }\n        }\n    };\n\n    /**\n       Count subscriptions by the topic\n     * @function\n     * @public\n     * @alias countSubscriptions\n     * @return { Array }\n    */\n    PubSub.countSubscriptions = function countSubscriptions(topic){\n        var m;\n        // eslint-disable-next-line no-unused-vars\n        var token;\n        var count = 0;\n        for (m in messages) {\n            if (Object.prototype.hasOwnProperty.call(messages, m) && m.indexOf(topic) === 0) {\n                for (token in messages[m]) {\n                    count++;\n                }\n                break;\n            }\n        }\n        return count;\n    };\n\n\n    /**\n       Gets subscriptions by the topic\n     * @function\n     * @public\n     * @alias getSubscriptions\n    */\n    PubSub.getSubscriptions = function getSubscriptions(topic){\n        var m;\n        var list = [];\n        for (m in messages){\n            if (Object.prototype.hasOwnProperty.call(messages, m) && m.indexOf(topic) === 0){\n                list.push(m);\n            }\n        }\n        return list;\n    };\n\n    /**\n     * Removes subscriptions\n     *\n     * - When passed a token, removes a specific subscription.\n     *\n\t * - When passed a function, removes all subscriptions for that function\n     *\n\t * - When passed a topic, removes all subscriptions for that topic (hierarchy)\n     * @function\n     * @public\n     * @alias subscribeOnce\n     * @param { String | Function } value A token, function or topic to unsubscribe from\n     * @example // Unsubscribing with a token\n     * var token = PubSub.subscribe('mytopic', myFunc);\n     * PubSub.unsubscribe(token);\n     * @example // Unsubscribing with a function\n     * PubSub.unsubscribe(myFunc);\n     * @example // Unsubscribing from a topic\n     * PubSub.unsubscribe('mytopic');\n     */\n    PubSub.unsubscribe = function(value){\n        var descendantTopicExists = function(topic) {\n                var m;\n                for ( m in messages ){\n                    if ( Object.prototype.hasOwnProperty.call(messages, m) && m.indexOf(topic) === 0 ){\n                        // a descendant of the topic exists:\n                        return true;\n                    }\n                }\n\n                return false;\n            },\n            isTopic    = typeof value === 'string' && ( Object.prototype.hasOwnProperty.call(messages, value) || descendantTopicExists(value) ),\n            isToken    = !isTopic && typeof value === 'string',\n            isFunction = typeof value === 'function',\n            result = false,\n            m, message, t;\n\n        if (isTopic){\n            PubSub.clearSubscriptions(value);\n            return;\n        }\n\n        for ( m in messages ){\n            if ( Object.prototype.hasOwnProperty.call( messages, m ) ){\n                message = messages[m];\n\n                if ( isToken && message[value] ){\n                    delete message[value];\n                    result = value;\n                    // tokens are unique, so we can just stop here\n                    break;\n                }\n\n                if (isFunction) {\n                    for ( t in message ){\n                        if (Object.prototype.hasOwnProperty.call(message, t) && message[t] === value){\n                            delete message[t];\n                            result = true;\n                        }\n                    }\n                }\n            }\n        }\n\n        return result;\n    };\n}));\n\n\n//# sourceURL=webpack://weather-app/./node_modules/pubsub-js/src/pubsub.js?");

/***/ }),

/***/ "./src/reset.css":
/*!***********************!*\
  !*** ./src/reset.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./reset.css */ \"./node_modules/css-loader/dist/cjs.js!./src/reset.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weather-app/./src/reset.css?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weather-app/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DOM)\n/* harmony export */ });\n/** @format */\r\n\r\n\r\n\r\nconst DOM = {\r\n\tinit: function () {\r\n\t\tthis.container = document.querySelector(\".weather\");\r\n\t},\r\n\tdisplayWeather: function (data) {\r\n\t\tthis.container.innerHTML = \"\";\r\n\t\tthis.container.classList.add(\"info\");\r\n\r\n\t\tconst cityName = (function () {\r\n\t\t\tlet name = document.createElement(\"h1\");\r\n\t\t\tname.textContent = data.name;\r\n\t\t\tname.classList.add(\"weather-city\");\r\n\t\t\treturn name;\r\n\t\t})();\r\n\r\n\t\tconst dateAndTime = (function () {\r\n\t\t\tlet date = document.createElement(\"h2\");\r\n\t\t\tlet supportedLangs = {\r\n\t\t\t\tar: \"ar-SA\",\r\n\t\t\t\tcs: \"cs-CZ\",\r\n\t\t\t\tda: \"da-DK\",\r\n\t\t\t\tde: \"de-DE\",\r\n\t\t\t\tel: \"el-GR\",\r\n\t\t\t\ten: \"en-US\",\r\n\t\t\t\tes: \"es-ES\",\r\n\t\t\t\tfi: \"fi-FI\",\r\n\t\t\t\tfr: \"fr-FR\",\r\n\t\t\t\the: \"he-IL\",\r\n\t\t\t\thi: \"hi-IN\",\r\n\t\t\t\thu: \"hu-HU\",\r\n\t\t\t\tid: \"id-ID\",\r\n\t\t\t\tit: \"it-IT\",\r\n\t\t\t\tja: \"ja-JP\",\r\n\t\t\t\tko: \"ko-KR\",\r\n\t\t\t\tnl: \"nl-NL\",\r\n\t\t\t\tno: \"no-NO\",\r\n\t\t\t\tpl: \"pl-PL\",\r\n\t\t\t\tpt: \"pt-BR\",\r\n\t\t\t\tro: \"ro-RO\",\r\n\t\t\t\tru: \"ru-RU\",\r\n\t\t\t\tsv: \"sv-SE\",\r\n\t\t\t\tth: \"th-TH\",\r\n\t\t\t\ttr: \"tr-TR\",\r\n\t\t\t\tvi: \"vi-VN\",\r\n\t\t\t\tzh_cn: \"zh-CN\"\r\n\t\t\t};\r\n\t\t\tlet lang = supportedLangs[document.querySelector(\"select\").value] || \"en-US\";\r\n\t\t\tdate.textContent = new Date(data.dt * 1000).toLocaleString(lang, {\r\n\t\t\t\tdateStyle: \"medium\",\r\n\t\t\t\ttimeStyle: \"short\",\r\n\t\t\t\thour12: false\r\n\t\t\t});\r\n\t\t\tdate.classList.add(\"weather-date\");\r\n\t\t\treturn date;\r\n\t\t})();\r\n\r\n\t\tconst icon = (function () {\r\n\t\t\tlet icon = document.createElement(\"img\");\r\n\t\t\ticon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;\r\n\t\t\ticon.alt = data.weather[0].description;\r\n\t\t\treturn icon;\r\n\t\t})();\r\n\r\n\t\tconst description = (function () {\r\n\t\t\tlet description = document.createElement(\"p\");\r\n\t\t\tdescription.classList.add(\"weather-description\");\r\n\t\t\tdescription.textContent = data.weather[0].description;\r\n\t\t\treturn description;\r\n\t\t})();\r\n\r\n\t\tconst temp = (function () {\r\n\t\t\tlet temp = document.createElement(\"p\");\r\n\t\t\ttemp.classList.add(\"weather-temp\");\r\n\t\t\ttemp.textContent = `${Math.round(data.main.temp)}°`;\r\n\t\t\treturn temp;\r\n\t\t})();\r\n\r\n\t\tconst windAndHumidity = (function () {\r\n\t\t\tconst wind = (function () {\r\n\t\t\t\tlet container = document.createElement(\"div\");\r\n\r\n\t\t\t\tlet icon = document.createElement(\"i\");\r\n\t\t\t\ticon.classList.add(\"fas\", \"fa-wind\");\r\n\r\n\t\t\t\tlet wind = document.createElement(\"span\");\r\n\t\t\t\tlet selectedUnit = document.querySelector(\"[type=radio]:checked\").id;\r\n\t\t\t\tlet metric = selectedUnit === \"metric\" ? \"m/s\" : \"mph\";\r\n\t\t\t\twind.textContent = `${data.wind.speed} ${metric}`;\r\n\r\n\t\t\t\tcontainer.appendChild(icon);\r\n\t\t\t\tcontainer.appendChild(wind);\r\n\t\t\t\treturn container;\r\n\t\t\t})();\r\n\r\n\t\t\tconst humidity = (function () {\r\n\t\t\t\tlet container = document.createElement(\"div\");\r\n\r\n\t\t\t\tlet icon = document.createElement(\"i\");\r\n\t\t\t\ticon.classList.add(\"fas\", \"fa-tint\");\r\n\r\n\t\t\t\tlet humidity = document.createElement(\"span\");\r\n\t\t\t\thumidity.textContent = `${data.main.humidity}%`;\r\n\r\n\t\t\t\tcontainer.appendChild(icon);\r\n\t\t\t\tcontainer.appendChild(humidity);\r\n\t\t\t\treturn container;\r\n\t\t\t})();\r\n\r\n\t\t\tlet windAndHumidity = document.createElement(\"div\");\r\n\t\t\twindAndHumidity.classList.add(\"wind-and-humidity\");\r\n\t\t\twindAndHumidity.appendChild(wind);\r\n\t\t\twindAndHumidity.appendChild(humidity);\r\n\t\t\treturn windAndHumidity;\r\n\t\t})();\r\n\r\n\t\tthis.container.appendChild(cityName);\r\n\t\tthis.container.appendChild(dateAndTime);\r\n\t\tthis.container.appendChild(icon);\r\n\t\tthis.container.appendChild(description);\r\n\t\tthis.container.appendChild(temp);\r\n\t\tthis.container.appendChild(windAndHumidity);\r\n\t},\r\n\tdisplayLoading: function () {\r\n\t\tthis.container.classList.remove(\"info\");\r\n\t\tthis.container.innerHTML = \"\";\r\n\t\tlet loading = document.createElement(\"div\");\r\n\t\tloading.classList.add(\"loading\");\r\n\r\n\t\tlet spinner = document.createElement(\"i\");\r\n\t\tspinner.classList.add(\"fas\", \"fa-spinner\", \"fa-spin\");\r\n\t\tloading.appendChild(spinner);\r\n\t\tthis.container.appendChild(loading);\r\n\t},\r\n\tdisplayError: function (error) {\r\n\t\tthis.container.classList.remove(\"info\");\r\n\t\tthis.container.innerHTML = \"\";\r\n\t\tlet errAlert = document.createElement(\"div\");\r\n\t\terrAlert.classList.add(\"error\");\r\n\r\n\t\tlet errIcon = document.createElement(\"i\");\r\n\t\terrIcon.classList.add(\"fas\", \"fa-exclamation-triangle\");\r\n\t\terrAlert.appendChild(errIcon);\r\n\r\n\t\tlet errorMessage = document.createElement(\"p\");\r\n\t\terrorMessage.textContent = error;\r\n\t\terrAlert.appendChild(errorMessage);\r\n\t\tthis.container.appendChild(errAlert);\r\n\t}\r\n};\r\n\n\n//# sourceURL=webpack://weather-app/./src/DOM.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset.css */ \"./src/reset.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pubsub-js */ \"./node_modules/pubsub-js/src/pubsub.js\");\n/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pubsub_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DOM.js */ \"./src/DOM.js\");\n/** @format */\r\n\r\n\r\n\r\n\r\n\r\n\r\n_DOM_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].init();\r\n\r\nconst Events = {\r\n\tLANGUAGE_CHANGED: \"language-changed\",\r\n\tSEARCH_SUBMITTED: \"search_submitted\",\r\n\tWEATHER_LOADED: \"weather_loaded\",\r\n\tWEATHER_ERROR: \"weather_error\"\r\n};\r\n\r\n/**\r\n * @param {string} apiProxy - The proxy to use for the API call\r\n * @param {string} input - City name\r\n * @param {string} units - Unit (metric or imperial)\r\n * @param {string} lang - Language (en or fr)\r\n */\r\nasync function getWeather(apiProxy, city, units, lang) {\r\n\tconst response = await fetch(`${apiProxy}?q=${city}&units=${units}&lang=${lang}`, { mode: \"cors\" });\r\n\tconst data = await response.json();\r\n\treturn data;\r\n}\r\n\r\n// Start: Development\r\nlet tempData = {\r\n\tcoord: { lon: 2.3488, lat: 48.8534 },\r\n\tweather: [{ id: 804, main: \"Clouds\", description: \"overcast clouds\", icon: \"04n\" }],\r\n\tbase: \"stations\",\r\n\tmain: { temp: 9.06, feels_like: 8.76, temp_min: 7.99, temp_max: 9.87, pressure: 1032, humidity: 95 },\r\n\tvisibility: 10000,\r\n\twind: { speed: 1.34, deg: 270, gust: 3.13 },\r\n\tclouds: { all: 100 },\r\n\tdt: 1643494604,\r\n\tsys: { type: 2, id: 2041230, country: \"FR\", sunrise: 1643441096, sunset: 1643474537 },\r\n\ttimezone: 3600,\r\n\tid: 2988507,\r\n\tname: \"Paris\",\r\n\tcod: 200\r\n};\r\n\r\n_DOM_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].displayWeather(tempData);\r\n\r\nlet weather = [\r\n\t\"Clouds\",\r\n\t\"Rain\",\r\n\t\"Snow\",\r\n\t\"Clear\",\r\n\t\"Thunderstorm\",\r\n\t\"Drizzle\",\r\n\t\"Mist\",\r\n\t\"Smoke\",\r\n\t\"Fog\",\r\n\t\"Haze\",\r\n\t\"Dust\",\r\n\t\"Sand\",\r\n\t\"Ash\",\r\n\t\"Squall\",\r\n\t\"Tornado\"\r\n];\r\nlet time = [\"d\", \"n\"];\r\n\r\nconst sleep = (milliseconds) => {\r\n\treturn new Promise((resolve) => setTimeout(resolve, milliseconds));\r\n};\r\n\r\nasync function loop() {\r\n\tlet body = document.querySelector(\"body\");\r\n\tfor (let t of time) {\r\n\t\tfor (let w of weather) {\r\n\t\t\tbody.setAttribute(\"data-weather\", w);\r\n\t\t\tbody.setAttribute(\"data-time\", t);\r\n\t\t\tawait sleep(1000);\r\n\t\t}\r\n\t}\r\n}\r\n\r\nloop();\r\n// End: Development\r\n\r\n// Development\r\nconst apiProxy = \"http://localhost:5000/weather\";\r\n// Production\r\n// const apiProxy = \"https://aa-api-proxy.herokuapp.com/weather\";\r\n\r\nconst form = {\r\n\tself: document.querySelector(\"form\"),\r\n\tinput: document.querySelector(\"input\"),\r\n\tbutton: document.querySelector(\".search-area i\"),\r\n\tunits: document.querySelectorAll(\"[type=radio]\"),\r\n\tunit: document.querySelector(\"[name=units]:checked\"),\r\n\tlang: document.querySelector(\"select\")\r\n};\r\n\r\n// Event publishing and event listeners\r\nform.lang.addEventListener(\"change\", (event) => {\r\n\tpubsub_js__WEBPACK_IMPORTED_MODULE_2___default().publish(Events.LANGUAGE_CHANGED, event.target.value);\r\n});\r\n\r\nform.self.addEventListener(\"submit\", (event) => {\r\n\tevent.preventDefault();\r\n\tpubsub_js__WEBPACK_IMPORTED_MODULE_2___default().publish(Events.SEARCH_SUBMITTED, form.input.value);\r\n\tform.input.value = \"\";\r\n});\r\n\r\nform.button.addEventListener(\"click\", (event) => {\r\n\tif (form.self.checkValidity()) {\r\n\t\tpubsub_js__WEBPACK_IMPORTED_MODULE_2___default().publish(Events.SEARCH_SUBMITTED, form.input.value);\r\n\t}\r\n});\r\n\r\nform.units.forEach((unit) => {\r\n\tunit.addEventListener(\"change\", (event) => {\r\n\t\tform.unit = event.target;\r\n\t});\r\n});\r\n\r\n// Event subscriptions\r\npubsub_js__WEBPACK_IMPORTED_MODULE_2___default().subscribe(Events.SEARCH_SUBMITTED, (topic, input) => {\r\n\t_DOM_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].displayLoading();\r\n\r\n\tgetWeather(apiProxy, input, form.unit.id, form.lang.value)\r\n\t\t.then((data) => {\r\n\t\t\t// If the data is valid, publish the weather data\r\n\t\t\t// if it returns 404, publish and throw an error\r\n\t\t\tif (data.cod === \"404\") {\r\n\t\t\t\tthrow new Error(data.message);\r\n\t\t\t} else {\r\n\t\t\t\tpubsub_js__WEBPACK_IMPORTED_MODULE_2___default().publish(Events.WEATHER_LOADED, data);\r\n\t\t\t\tconsole.log(data);\r\n\t\t\t}\r\n\t\t})\r\n\t\t.catch((error) => {\r\n\t\t\tconsole.warn(\"There was an error while fetching the data:\" + error.message);\r\n\t\t\tpubsub_js__WEBPACK_IMPORTED_MODULE_2___default().publish(Events.WEATHER_ERROR, error.message);\r\n\t\t});\r\n});\r\n\r\npubsub_js__WEBPACK_IMPORTED_MODULE_2___default().subscribe(Events.WEATHER_ERROR, (topic, error) => {\r\n\t_DOM_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].displayError(error);\r\n});\r\n\r\npubsub_js__WEBPACK_IMPORTED_MODULE_2___default().subscribe(Events.WEATHER_LOADED, (topic, data) => {\r\n\t_DOM_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].displayWeather(data);\r\n\tdocument.querySelector(\"body\").setAttribute(\"data-weather\", data.weather[0].main);\r\n\tdocument.querySelector(\"body\").setAttribute(\"data-time\", data.weather[0].icon[data.weather[0].icon.length - 1]);\r\n});\r\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/fonts/saira-v8-latin-ext_latin-700.woff":
/*!*****************************************************!*\
  !*** ./src/fonts/saira-v8-latin-ext_latin-700.woff ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"cb349da51833afa57da5.woff\";\n\n//# sourceURL=webpack://weather-app/./src/fonts/saira-v8-latin-ext_latin-700.woff?");

/***/ }),

/***/ "./src/fonts/saira-v8-latin-ext_latin-700.woff2":
/*!******************************************************!*\
  !*** ./src/fonts/saira-v8-latin-ext_latin-700.woff2 ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"587835b0b2abd587e215.woff2\";\n\n//# sourceURL=webpack://weather-app/./src/fonts/saira-v8-latin-ext_latin-700.woff2?");

/***/ }),

/***/ "./src/fonts/saira-v8-latin-ext_latin-regular.woff":
/*!*********************************************************!*\
  !*** ./src/fonts/saira-v8-latin-ext_latin-regular.woff ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"609d1f8146895c71adbe.woff\";\n\n//# sourceURL=webpack://weather-app/./src/fonts/saira-v8-latin-ext_latin-regular.woff?");

/***/ }),

/***/ "./src/fonts/saira-v8-latin-ext_latin-regular.woff2":
/*!**********************************************************!*\
  !*** ./src/fonts/saira-v8-latin-ext_latin-regular.woff2 ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"577fedb90013e87d84c7.woff2\";\n\n//# sourceURL=webpack://weather-app/./src/fonts/saira-v8-latin-ext_latin-regular.woff2?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;