(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("validator");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("bcrypt");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("multer");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("serverless-http");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("express-rate-limit");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("express-slow-down");

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "dotenv"
var external_dotenv_ = __webpack_require__(2);
var external_dotenv_default = /*#__PURE__*/__webpack_require__.n(external_dotenv_);

// EXTERNAL MODULE: external "express"
var external_express_ = __webpack_require__(1);
var external_express_default = /*#__PURE__*/__webpack_require__.n(external_express_);

// EXTERNAL MODULE: external "morgan"
var external_morgan_ = __webpack_require__(6);
var external_morgan_default = /*#__PURE__*/__webpack_require__.n(external_morgan_);

// EXTERNAL MODULE: external "jsonwebtoken"
var external_jsonwebtoken_ = __webpack_require__(3);
var external_jsonwebtoken_default = /*#__PURE__*/__webpack_require__.n(external_jsonwebtoken_);

// EXTERNAL MODULE: external "validator"
var external_validator_ = __webpack_require__(4);
var external_validator_default = /*#__PURE__*/__webpack_require__.n(external_validator_);

// EXTERNAL MODULE: external "mongoose"
var external_mongoose_ = __webpack_require__(0);
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_);

// EXTERNAL MODULE: external "bcrypt"
var external_bcrypt_ = __webpack_require__(5);
var external_bcrypt_default = /*#__PURE__*/__webpack_require__.n(external_bcrypt_);

// CONCATENATED MODULE: ../models/userModel.js



const Schema = external_mongoose_default.a.Schema;
const User = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});
User.statics.signup = async function (email, password) {
  if (!email || !password) {
    throw Error("Email and Password fields can't be empty.");
  }
  if (!external_validator_default.a.isEmail(email)) {
    throw Error('Email is invalid');
  }
  if (!external_validator_default.a.isStrongPassword(password)) {
    throw Error('Password is not strong enough.');
  }
  const exists = await this.findOne({
    email
  });
  if (exists) {
    throw Error('Email already in use.');
  }
  const hash = await external_bcrypt_default.a.hash(password, 10);
  const user = await this.create({
    email,
    password: hash
  });
  return user;
};
User.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("Email and Password fields can't be empty.");
  }
  const exists = await this.findOne({
    email
  });
  if (!exists) {
    throw Error('Email does not exist.');
  }
  const hash = exists.password;
  const compare = await external_bcrypt_default.a.compare(password, hash);
  if (compare) {
    return exists;
  }
  throw Error('Email or Password is incorrect.');
};
/* harmony default export */ var userModel = (external_mongoose_default.a.models.User || external_mongoose_default.a.model('User', User));
// CONCATENATED MODULE: ../middlewares/authorization.js



external_dotenv_default.a.config();
const authorization = async (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({
      message: 'Authentication failed'
    });
  }
  const token = req.headers.authorization.split(' ')[1];
  try {
    const {
      _id
    } = external_jsonwebtoken_default.a.verify(token, process.env.SECRET_KEY);
    req.user = await userModel.findOne({
      _id
    }).select('_id');
    next();
  } catch (error) {
    return res.status(401).json({
      errorName: error.name,
      errorMessage: 'Authentication failed. Try Logging in Again.'
    });
  }
};
/* harmony default export */ var middlewares_authorization = (authorization);
// CONCATENATED MODULE: ../models/schema.js

const schema_Schema = external_mongoose_default.a.Schema;
const testSchema = new schema_Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});
/* harmony default export */ var schema = (external_mongoose_default.a.models.testApp || external_mongoose_default.a.model('testApp', testSchema));
// CONCATENATED MODULE: ../controller/workoutController.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



//get all test
const getAllTest = async (req, res) => {
  const {
    email
  } = req.body;
  const tests = await schema.find({
    email
  }).sort({
    createdAt: -1
  });
  res.status(200).json(tests);
};

//get a single test
const getSingleTest = async (req, res) => {
  const {
    id
  } = req.params;
  if (!external_mongoose_default.a.Types.ObjectId.isValid(id)) {
    return res.status(404).json({
      error: 'There is no such blog in the db.',
      status: 404
    });
  }
  const singleTest = await schema.findById(id);
  if (!singleTest) {
    return res.status(404).json({
      error: 'No such workout exists.',
      status: 404
    });
  }
  res.status(200).json(singleTest);
};
//create and post a single test
const createTest = async (req, res, next) => {
  const data = req.body;

  //adding the document to the db
  try {
    const test = await schema.create(_objectSpread({}, data));
    res.status(200).json({
      test: test,
      status: 'ok'
    });
  } catch (error) {
    res.status(404).json({
      error: error.message
    });
  }
};

//update a single test
const updateTest = async (req, res) => {
  const {
    id
  } = req.params;
  if (!external_mongoose_default.a.Types.ObjectId.isValid(id)) {
    return res.status(404).json({
      error: 'No document to delete.'
    });
  }
  const updTest = await schema.findOneAndUpdate({
    _id: id
  }, _objectSpread({}, req.body));
  if (!updTest) {
    return res.status(404).json({
      error: 'No object found to update.'
    });
  }
  res.status(200).json({
    message: 'The object/test was updated.'
  });
};

//delete a single test
const deleteTest = async (req, res) => {
  const {
    id
  } = req.params;
  if (!external_mongoose_default.a.Types.ObjectId.isValid(id)) {
    return res.status(404).json({
      error: 'No document to delete.'
    });
  }
  const delTest = await schema.findOneAndDelete({
    _id: id
  });
  if (!delTest) {
    return res.status(404).json({
      error: 'No object found to delete.'
    });
  }
  return res.status(200).json({
    message: 'The object/test was deleted.'
  });
};

// CONCATENATED MODULE: ../router/workout.js



const router = external_express_default.a.Router();
router.use(middlewares_authorization);

//Get everything
router.post('/getAll', getAllTest);

//Get a single workout
router.get('/:id', getSingleTest);

//Post a new workout
router.post('/', createTest);

//Delete a single workout
router.delete('/:id', deleteTest);

//Update a single workout
router.patch('/:id', updateTest);
/* harmony default export */ var workout = (router);
// CONCATENATED MODULE: ../controller/userController.js



external_dotenv_default.a.config();
const createToken = id => {
  return external_jsonwebtoken_default.a.sign({
    id
  }, process.env.SECRET_KEY, {
    expiresIn: '1d'
  });
};
const userSignUp = async (req, res) => {
  const {
    email,
    password
  } = req.body;
  try {
    const user = await userModel.signup(email, password);
    //create Token
    const token = createToken(user);
    //send token to client
    res.status(200).json({
      email,
      token
    });
  } catch (error) {
    res.status(404).json({
      error: error.message
    });
  }
};
const userLogin = async (req, res) => {
  const {
    email,
    password
  } = req.body;
  try {
    const user = await userModel.login(email, password);
    const token = createToken(user);
    res.status(200).json({
      email,
      token
    });
  } catch (err) {
    res.status(404).json({
      error: err.message
    });
  }
};

// CONCATENATED MODULE: ../router/user.js


const user_router = external_express_default.a.Router();
user_router.post('/login', userLogin);
user_router.post('/signup', userSignUp);
/* harmony default export */ var router_user = (user_router);
// EXTERNAL MODULE: external "cors"
var external_cors_ = __webpack_require__(7);
var external_cors_default = /*#__PURE__*/__webpack_require__.n(external_cors_);

// EXTERNAL MODULE: external "multer"
var external_multer_ = __webpack_require__(8);
var external_multer_default = /*#__PURE__*/__webpack_require__.n(external_multer_);

// EXTERNAL MODULE: external "express-rate-limit"
var external_express_rate_limit_ = __webpack_require__(10);

// EXTERNAL MODULE: external "express-slow-down"
var external_express_slow_down_ = __webpack_require__(11);

// EXTERNAL MODULE: external "serverless-http"
var external_serverless_http_ = __webpack_require__(9);
var external_serverless_http_default = /*#__PURE__*/__webpack_require__.n(external_serverless_http_);

// CONCATENATED MODULE: ./server.js

external_dotenv_default.a.config();










const app = external_express_default()();
const upload = external_multer_default()();
app.use(upload.array());

// const rateLimit = require('express-rate-limit')

// //throttle http request for the user
// const limiter = rateLimit({
//     windowMs: 15 * 60 * 1000, // 15 minutes
//     max: 10, // Limit each IP to 10 requests per `window` (here, per 15 minutes)
//     standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
//     legacyHeaders: false, // Disable the `X-RateLimit-*` headers
// })
// app.use('/:id', limiter)

// const speedLimiter = SlowDown({
//     windowMs: 1 * 60 * 1000, // 1 minute
//     delayAfter: 1, // allow 1 requests per `windowMs`, then...
//     delayMs: 5000, // begin adding 500ms of delay per request above 100:
// })

// app.use("/api", speedLimiter)

//get the response in json
app.use(external_express_default.a.json());

//using morgan to log requests
app.use(external_morgan_default()('dev'));

//using cors to make fetch requests
app.use(external_cors_default()());

//routes
app.use('/.netlify/functions/bundle', router_user);
app.use('/.netlify/functions/bundle', workout);

//connect to DB
external_mongoose_default.a.connect(process.env.MONG_URI).then(data => {
  // app.listen(process.env.PORT, () => {
  console.log('Listening on Port', process.env.PORT);
  // })
}).catch(err => {
  console.log(err);
});
exports.handler = external_serverless_http_default()(app);

/***/ })
/******/ ])));