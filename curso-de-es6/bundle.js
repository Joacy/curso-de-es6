/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./desafios/1/exercicio1.js":
/*!**********************************!*\
  !*** ./desafios/1/exercicio1.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/* Exercício 1 - Classe */\nvar Usuario = /*#__PURE__*/function () {\n  function Usuario(email, senha) {\n    _classCallCheck(this, Usuario);\n\n    this.email = email;\n    this.senha = senha;\n    this.admin = false;\n  }\n\n  _createClass(Usuario, [{\n    key: \"isAdmin\",\n    value: function isAdmin() {\n      return this.admin;\n    }\n  }]);\n\n  return Usuario;\n}();\n\nvar Admin = /*#__PURE__*/function (_Usuario) {\n  _inherits(Admin, _Usuario);\n\n  function Admin(email, senha) {\n    var _this;\n\n    _classCallCheck(this, Admin);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Admin).call(this, email, senha));\n    _this.admin = true;\n    return _this;\n  }\n\n  return Admin;\n}(Usuario);\n\nvar User1 = new Usuario(\"email@teste.com\", \"senha123\");\nvar Adm1 = new Admin(\"email@teste.com\", \"senha123\");\nconsole.log(User1.isAdmin()); // false\n\nconsole.log(Adm1.isAdmin()); // true\n\n//# sourceURL=webpack:///./desafios/1/exercicio1.js?");

/***/ }),

/***/ "./desafios/1/exercicio2.js":
/*!**********************************!*\
  !*** ./desafios/1/exercicio2.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* Exercício 2 - Operações com Array */\nvar usuarios = [{\n  nome: \"Diego\",\n  idade: 23,\n  empresa: \"Rocketseat\"\n}, {\n  nome: \"Gabriel\",\n  idade: 15,\n  empresa: \"Rocketseat\"\n}, {\n  nome: \"Lucas\",\n  idade: 30,\n  empresa: \"Facebook\"\n}];\nvar idades = usuarios.map(function (item) {\n  return item[\"idade\"];\n});\nconsole.log(idades);\nvar maisQueDezoito = usuarios.filter(function (item) {\n  return item[\"empresa\"] === \"Rocketseat\" && item[\"idade\"] > 18;\n});\nconsole.log(maisQueDezoito);\nvar trabalhaNoGoogle = usuarios.find(function (item) {\n  return item[\"empresa\"] === \"Google\";\n});\nconsole.log(trabalhaNoGoogle);\nvar usuariosIdadeDobro = usuarios.map(function (item) {\n  item[\"idade\"] = item[\"idade\"] * 2;\n  return item;\n});\nconsole.log(usuariosIdadeDobro);\nvar menosQue50 = usuariosIdadeDobro.filter(function (item) {\n  return item[\"idade\"] <= 50;\n});\nconsole.log(menosQue50);\n\n//# sourceURL=webpack:///./desafios/1/exercicio2.js?");

/***/ }),

/***/ "./desafios/1/exercicio3.js":
/*!**********************************!*\
  !*** ./desafios/1/exercicio3.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* Exercício 3 - Conversão de funções em Arrow Functions */\n// 3.1\n// const arr = [1, 2, 3, 4, 5];\n// arr.map(function (item) {\n//     return item + 10;\n// });\nvar arr = [1, 2, 3, 4, 5];\nvar newArr = arr.map(function (item) {\n  return item + 10;\n});\nconsole.log(newArr); // 3.2\n// Dica: Utilize uma constante pra function\n// const usuario = { nome: 'Diego', idade: 23 };\n// function mostraIdade (usuario) {\n//     return usuario.idade;\n// }\n// mostraIdade(usuario);\n\nvar usuario = {\n  nome: 'Diego',\n  idade: 23\n};\n\nvar mostraIdade = function mostraIdade(usuario) {\n  return usuario.idade;\n};\n\nconsole.log(mostraIdade(usuario)); // 3.3\n// Dica: Utilize uma constante pra function\n// const nome = \"Diego\";\n// const idade = 23;\n// function mostraUsuario (nome = 'Diego', idade = 18) {\n//     return { nome, idade };\n// }\n// mostraUsuario(nome, idade);\n// mostraUsuario(nome);\n\nvar nome = \"Diego\";\nvar idade = 23;\n\nvar mostraUsuario = function mostraUsuario() {\n  var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Diego';\n  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;\n  return {\n    nome: nome,\n    idade: idade\n  };\n};\n\nconsole.log(mostraUsuario(nome, idade));\nconsole.log(mostraUsuario(nome)); // 3.4\n// const promise = function () {\n//     return new Promise(function (resolve, reject) {\n//         return resolve();\n//     })\n// }\n\nvar promise = function promise() {\n  return new Promise(function (resolve, reject) {\n    return resolve();\n  });\n};\n\nconsole.log(promise);\n\n//# sourceURL=webpack:///./desafios/1/exercicio3.js?");

/***/ }),

/***/ "./desafios/1/exercicio4.js":
/*!**********************************!*\
  !*** ./desafios/1/exercicio4.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* Exercício 4 - Desestruturação */\nvar empresa = {\n  nome: 'Rocketseat',\n  endereco: {\n    cidade: 'Rio do Sul',\n    estado: 'SC'\n  }\n};\nvar nome = empresa.nome,\n    endereco = empresa.endereco;\nvar cidade = endereco.cidade,\n    estado = endereco.estado;\nconsole.log(nome); // Rocketseat\n\nconsole.log(cidade); // Rio do Sul\n\nconsole.log(estado); // SC\n\nfunction mostraInfo() {\n  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : usuario,\n      nome = _ref.nome,\n      idade = _ref.idade;\n\n  return \"\".concat(nome, \" tem \").concat(idade, \" anos.\");\n}\n\nconsole.log(mostraInfo({\n  nome: 'Diego',\n  idade: 23\n}));\n\n//# sourceURL=webpack:///./desafios/1/exercicio4.js?");

/***/ }),

/***/ "./desafios/1/exercicio5.js":
/*!**********************************!*\
  !*** ./desafios/1/exercicio5.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n/* Exercício 5 - REST/SPREAD */\nvar arr = [1, 2, 3, 4, 5, 6];\nvar x = arr[0],\n    y = arr.slice(1);\nconsole.log(x); // 1\n\nconsole.log(y); // [2, 3, 4, 5, 6]\n// function soma...\n\nfunction soma(a) {\n  for (var _len = arguments.length, b = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n    b[_key - 1] = arguments[_key];\n  }\n\n  return a + b.reduce(function (total, proximo) {\n    return total + proximo;\n  });\n}\n\nconsole.log(soma(1, 2, 3, 4, 5, 6)); // 21\n\nconsole.log(soma(1, 2)); // 3\n\nvar usuario = {\n  nome: 'Diego',\n  idade: 23,\n  endereco: {\n    cidade: 'Rio do Sul',\n    uf: 'SC',\n    pais: 'Brasil'\n  }\n};\nconsole.log(usuario);\n\nvar usuario2 = _objectSpread({}, usuario, {\n  nome: 'Gabriel'\n});\n\nconsole.log(usuario2);\nvar endereco = usuario.endereco;\n\nvar enderecoA = _objectSpread({}, endereco, {\n  cidade: 'Lontras'\n});\n\nvar usuario3 = _objectSpread({}, usuario, {\n  endereco: enderecoA\n});\n\nconsole.log(usuario3);\n\n//# sourceURL=webpack:///./desafios/1/exercicio5.js?");

/***/ }),

/***/ "./desafios/1/exercicio6.js":
/*!**********************************!*\
  !*** ./desafios/1/exercicio6.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* Exercício 6 - Template Literals */\nvar usuario = 'Diego';\nvar idade = 23; // console.log('O usuário ' + usuario + ' possui ' + idade + ' anos');\n\nconsole.log(\"O usu\\xE1rio \".concat(usuario, \" possui \").concat(idade, \" anos\"));\n\n//# sourceURL=webpack:///./desafios/1/exercicio6.js?");

/***/ }),

/***/ "./desafios/1/exercicio7.js":
/*!**********************************!*\
  !*** ./desafios/1/exercicio7.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* Exercício 7 - Object Short Syntax */\nvar nome = 'Diego';\nvar idade = 23; // const usuario = {\n//     nome: nome,\n//     idade: idade,\n//     cidade: 'Rio do Sul',\n// };\n\nvar usuario = {\n  nome: nome,\n  idade: idade,\n  cidade: 'Rio do Sul'\n};\nconsole.log(usuario);\n\n//# sourceURL=webpack:///./desafios/1/exercicio7.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _desafios_1_exercicio1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./desafios/1/exercicio1 */ \"./desafios/1/exercicio1.js\");\n/* harmony import */ var _desafios_1_exercicio1__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_desafios_1_exercicio1__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _desafios_1_exercicio2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./desafios/1/exercicio2 */ \"./desafios/1/exercicio2.js\");\n/* harmony import */ var _desafios_1_exercicio2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_desafios_1_exercicio2__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _desafios_1_exercicio3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./desafios/1/exercicio3 */ \"./desafios/1/exercicio3.js\");\n/* harmony import */ var _desafios_1_exercicio3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_desafios_1_exercicio3__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _desafios_1_exercicio4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./desafios/1/exercicio4 */ \"./desafios/1/exercicio4.js\");\n/* harmony import */ var _desafios_1_exercicio4__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_desafios_1_exercicio4__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _desafios_1_exercicio5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./desafios/1/exercicio5 */ \"./desafios/1/exercicio5.js\");\n/* harmony import */ var _desafios_1_exercicio5__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_desafios_1_exercicio5__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _desafios_1_exercicio6__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./desafios/1/exercicio6 */ \"./desafios/1/exercicio6.js\");\n/* harmony import */ var _desafios_1_exercicio6__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_desafios_1_exercicio6__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _desafios_1_exercicio7__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./desafios/1/exercicio7 */ \"./desafios/1/exercicio7.js\");\n/* harmony import */ var _desafios_1_exercicio7__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_desafios_1_exercicio7__WEBPACK_IMPORTED_MODULE_6__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar List = /*#__PURE__*/function () {\n  function List() {\n    _classCallCheck(this, List);\n\n    this.data = [];\n  }\n\n  _createClass(List, [{\n    key: \"add\",\n    value: function add(data) {\n      this.data.push(data);\n      console.log(this.data);\n    }\n  }]);\n\n  return List;\n}();\n\nvar TodoList = /*#__PURE__*/function (_List) {\n  _inherits(TodoList, _List);\n\n  function TodoList() {\n    var _this;\n\n    _classCallCheck(this, TodoList);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(TodoList).call(this));\n    _this.usuario = \"Joacy\";\n    return _this;\n  }\n\n  _createClass(TodoList, [{\n    key: \"mostraUsuario\",\n    value: function mostraUsuario() {\n      console.log(this.usuario);\n    }\n  }]);\n\n  return TodoList;\n}(List);\n\nvar MinhaLista = new TodoList();\n\ndocument.getElementById(\"novotodo\").onclick = function () {\n  MinhaLista.add(\"Novo Todo\");\n};\n\nMinhaLista.mostraUsuario();\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./main.js?");

/***/ })

/******/ });