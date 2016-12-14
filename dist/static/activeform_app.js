webpackJsonp([0,2],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _classCallCheck2 = __webpack_require__(1);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(2);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _activeform = __webpack_require__(21);

	var _activeform2 = _interopRequireDefault(_activeform);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var App = function () {
	    function App() {
	        (0, _classCallCheck3.default)(this, App);
	    }

	    (0, _createClass3.default)(App, null, [{
	        key: 'init',
	        value: function init(el) {
	            var activeFrom = new _activeform2.default({
	                'el': el
	            }, App.metaProvider);
	            activeFrom.render();
	        }
	    }]);
	    return App;
	}();

	App.metaData = {
	    fields: [{
	        field: 'name',
	        widget: 'text',
	        meta: {
	            placeholder: '请输入名称',
	            default: ''
	        },
	        validators: {
	            options: {
	                numeric: { message: "必需为数字" },
	                commonValidator: { rule: { disable: false }, message: "commonValidator" },
	                vueValidator: { rule: { disable: true }, message: "vueValidator" }
	            },
	            methods: {
	                numeric: function numeric(val) {
	                    return (/^[-+]?[0-9]+$/.test(val)
	                    );
	                }
	            }
	        }
	    }, {
	        field: 'age',
	        widget: "text",
	        meta: {
	            placeholder: "请输入年龄",
	            default: '1'
	        }
	    }, {
	        field: 'addr',
	        widget: "text",
	        meta: {
	            placeholder: "请输入地址",
	            default: '北京市'
	        }
	    }, {
	        field: 'hobby',
	        widet: 'checkbox',
	        meta: {
	            tools: [{ name: "全选", expression: "all" }, { name: "我的爱好", expression: "2,3" }],
	            options: [{ label: "足球", value: 1 }, { label: "篮球", value: 2 }, { label: "羽毛球", value: 3 }],
	            default: [1, 2]

	        }
	    }],
	    layout: '\n     <layout>\n      <layout-row>\n        <layout-col :grid="6">\n          <widget-label label="label"></widget-label>\n          <widget-text :params="name" ref="name"></widget-text>\n        </layout-col>\n        <layout-col :grid="6">\n          <widget-label label="\u5E74\u9F84"></widget-label>\n          <widget-text :params="age" ref="age">  </widget-text>\n        </layout-col>\n      </layout-row>\n      <layout-row>\n        <layout-col>\n          <widget-label label="\u4E2D\u6587"></widget-label>\n          <widget-text :params="addr" ref="addr"></widget-text>\n        </layout-col>\n      </layout-row>\n       <layout-row>\n        <layout-col :grid="6">\n          <widget-label label="\u5174\u8DA3"></widget-label>\n          <widget-checkbox :params="hobby" ref="hobby"></widget-checkbox>\n        </layout-col>\n      </layout-row>\n    </layout>\n  '
	};
	App.metaProvider = {
	    getData: function getData() {
	        return App.metaData;
	    }
	};

	window.App = App;

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jquery = __webpack_require__(22);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _gomeplus = __webpack_require__(23);

	var _gomeplus2 = _interopRequireDefault(_gomeplus);

	var _vue = __webpack_require__(47);

	var _vue2 = _interopRequireDefault(_vue);

	var _vueValidator = __webpack_require__(49);

	var _vueValidator2 = _interopRequireDefault(_vueValidator);

	var _activeform = __webpack_require__(50);

	var _activeform2 = _interopRequireDefault(_activeform);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_vue2.default.use(_vueValidator2.default);
	exports.default = _activeform2.default;

/***/ },
/* 22 */,
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _stringify = __webpack_require__(24);

	var _stringify2 = _interopRequireDefault(_stringify);

	var _create = __webpack_require__(26);

	var _create2 = _interopRequireDefault(_create);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(function (window) {
	  if (window.gomeplus !== undefined) return;

	  var toString = Object.prototype.toString,
	      isArray = Array.isArray || function (v) {
	    return v && toString.call(v) == '[object Array]';
	  },
	      isPlainObject = function isPlainObject(v) {
	    return v && toString.call(v) === '[object Object]' && 'isPrototypeOf' in v;
	  },
	      isFunction = function isFunction(v) {
	    return v && toString.call(v) === '[object Function]';
	  },
	      isString = function isString(v) {
	    return toString.call(v) === '[object String]';
	  },
	      isNumber = function isNumber(v) {
	    return toString.call(v) === '[object Number]';
	  },
	      isBoolean = function isBoolean(v) {
	    return toString.call(v) === '[object Boolean]';
	  },
	      isUndefined = function isUndefined(v) {
	    return v === undefined;
	  },
	      isEmptyObject = function isEmptyObject(v) {
	    var p;
	    if (!isPlainObject(v)) {
	      return false;
	    }
	    for (p in v) {
	      if (v.hasOwnProperty(p)) {
	        return false;
	      }
	    }
	    return true;
	  },
	      equal = function equal(v1, v2, isStrongType) {
	    var i,
	        len,
	        type1 = toString.call(v1),
	        type2 = toString.call(v2),
	        property;

	    if (isStrongType || SKIP_TYPE_VALIDATION.indexOf(type1) == -1 || SKIP_TYPE_VALIDATION.indexOf(type2) == -1) {
	      if (type1 !== type2) {
	        return false;
	      }
	    }

	    if (gomeplus.isArray(v1)) {
	      if (v1.length !== v2.length) {
	        return false;
	      }
	      for (i = 0, len = v1.length; i < len; i++) {
	        if (!equal(v1[i], v2[i], isStrongType)) {
	          return false;
	        }
	      }
	    } else if (gomeplus.isPlainObject(v1)) {
	      for (property in v1) {
	        if (!(v1.hasOwnProperty(property) && v2.hasOwnProperty(property)) || !equal(v1[property], v2[property], isStrongType)) {
	          return false;
	        }
	      }
	    } else {
	      return isStrongType === true ? v1 === v2 : v1 == v2;
	    }

	    return true;
	  },
	      mix = function mix(dest, source, isDeep) {
	    isDeep = isDeep === undefined ? true : isDeep;

	    for (var p in source) {
	      var src = source[p],
	          target = dest[p];
	      if (isDeep && (isArray(src) || isPlainObject(src))) {
	        var clone = dest[p] = target && (isArray(target) || isPlainObject(target)) ? target : isArray(src) ? [] : {};
	        mix(clone, src);
	      } else {
	        if (p == 'prototype') {
	          continue;
	        }
	        dest[p] = src;
	      }
	    }
	    return dest;
	  },
	      clone = function clone(obj) {
	    if (gomeplus.isArray(obj)) {
	      return mix([], obj);
	    }
	    if (gomeplus.isPlainObject(obj)) {
	      return mix({}, obj);
	    }
	    return obj;
	  },
	      apply = function apply(obj, config, defaults) {
	    if (defaults) {
	      apply(obj, defaults);
	    }
	    return mix(obj, config);
	  },
	      delegate = function delegate(obj, func) {
	    var presetArgs = Array.prototype.splice.call(arguments, 2),
	        delegate = function delegate() {
	      var args = presetArgs.concat(Array.prototype.slice.call(arguments));
	      return func.apply(obj, args);
	    };
	    return delegate;
	  },
	      create = isFunction(_create2.default) ? _create2.default : function (obj) {
	    var F = function F() {};
	    F.prototype = obj.hasOwnProperty('prototype') ? obj.prototype : obj;
	    return new F();
	  },
	      gomeplus = {
	    mixin: {}
	  };
	  gomeplus.host = this;

	  mix(gomeplus, {
	    mix: mix,
	    clone: clone,
	    apply: apply,
	    create: create,
	    isArray: isArray,
	    isString: isString,
	    isFunction: isFunction,
	    isPlainObject: isPlainObject,
	    isNumber: isNumber,
	    isBoolean: isBoolean,
	    isUndefined: isUndefined,
	    isEmptyObject: isEmptyObject,
	    equal: equal,
	    delegate: delegate,
	    upperCaseFirst: function upperCaseFirst(str) {
	      if (!isString(str)) {
	        throw new Error('argument must be a string');
	      }
	      if (str.length < 1) {
	        return str;
	      }
	      return str[0].toUpperCase() + str.substr(1);
	    },
	    nl2br: function nl2br(str) {
	      return str.replace(/\n/g, '<br/>');
	    },
	    setSiteBaseUrl: function setSiteBaseUrl(url) {
	      _baseUrl = url;
	    },
	    getSiteBaseUrl: function getSiteBaseUrl() {
	      return _baseUrl;
	    },
	    json: {
	      encode: _stringify2.default,
	      decode: JSON.parse
	    },
	    classify: function classify(obj) {
	      var F = function F() {};
	      F.prototype = obj.hasOwnProperty('prototype') ? obj.prototype : obj;
	      F.prototype.constructor = F;

	      return F;
	    },
	    extend: function extend(subclass, superclass) {
	      subclass.prototype = gomeplus.create(superclass.prototype);
	      subclass.prototype.constructor = subclass;
	      subclass.prototype.__class = subclass;
	      subclass.prototype.super = superclass.prototype;
	      subclass.prototype.superclass = superclass;

	      return subclass;
	    },
	    createClass: function createClass() {
	      var superclass,
	          instance,
	          clazz = function clazz() {};
	      if (arguments.length == 2) {
	        superclass = arguments[0];
	        instance = arguments[1];
	        if (!isFunction(superclass)) {
	          throw new Error('argument error:Superclass must be a class');
	        } else {
	          clazz = instance.hasOwnProperty('constructor') ? instance.constructor : function () {
	            superclass.apply(this, $.makeArray(arguments));
	          };

	          clazz = gomeplus.extend(clazz, superclass);
	          gomeplus.mix(clazz.prototype, instance);
	        }
	      } else if (arguments.length == 1) {
	        clazz = gomeplus.extend(arguments[0].hasOwnProperty('constructor') ? arguments[0].constructor : clazz, gomeplus.classify(arguments[0]));
	      }

	      return clazz;
	    },
	    DateFormatter: {
	      _formatFunc: {
	        Y: function Y(date) {
	          return date.getFullYear();
	        },
	        y: function y(date) {
	          return Number(String(new Date().getFullYear()).substr(-2));
	        },
	        m: function m(date) {
	          return this._pad(date.getMonth() + 1);
	        },
	        d: function d(date) {
	          return this._pad(date.getDate());
	        },
	        H: function H(date) {
	          return this._pad(date.getHours());
	        },
	        i: function i(date) {
	          return this._pad(date.getMinutes());
	        },
	        s: function s(date) {
	          return this._pad(date.getSeconds());
	        }
	      },
	      format: function format(date, _format) {
	        var that = this;
	        return _format.replace(/[YymdHis]/g, function (k) {
	          var fn = that._formatFunc[k];
	          if (gomeplus.isFunction(fn)) {
	            return fn.call(that, date);
	          }
	          return k;
	        });
	      },
	      _pad: function _pad(v) {
	        if (!gomeplus.isString(v)) {
	          v = String(v);
	        }
	        return v.length > 1 ? v : '0' + v;
	      }
	    },
	    Debugger: {
	      dump: function dump() {
	        console.log(Array.prototype.slice.call(arguments));
	      }
	    }
	  });
	  window['gomeplus'] = gomeplus;
	})(window);

/***/ },
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _map = __webpack_require__(51);

	var _map2 = _interopRequireDefault(_map);

	var _classCallCheck2 = __webpack_require__(1);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(2);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _Observable = __webpack_require__(88);

	var _Observable2 = _interopRequireDefault(_Observable);

	var _builder = __webpack_require__(89);

	var _builder2 = _interopRequireDefault(_builder);

	var _meta = __webpack_require__(129);

	var _meta2 = _interopRequireDefault(_meta);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var activeform = function () {
	  function activeform(options, metaProvider) {
	    (0, _classCallCheck3.default)(this, activeform);

	    this._widgets = new _map2.default();
	    this._vm = null;
	    this.errors = new _map2.default();
	    this.meta = new _meta2.default(metaProvider.getData());
	    this.builder = new _builder2.default(this.meta, options);
	    this.builder.bind('init_vm', this.setWidgetsHandler.bind(this));
	  }

	  (0, _createClass3.default)(activeform, [{
	    key: 'render',
	    value: function render() {
	      this.builder.form();
	    }
	  }, {
	    key: 'setWidgetsHandler',
	    value: function setWidgetsHandler(event, vm) {
	      this._vm = vm;
	      var $refs = vm.$refs;
	      for (var name in $refs) {
	        this._widgets.set(name, $refs[name]);
	      }
	    }
	  }, {
	    key: 'getData',
	    value: function getData() {
	      var data = {};
	      this._widgets.forEach(function (widget, key) {
	        data[key] = gomeplus.isFunction(widget.getData) ? widget.getData() : null;
	      });
	      return data;
	    }
	  }, {
	    key: 'setData',
	    value: function setData(data) {
	      this._widgets.forEach(function (widget, key) {
	        if (gomeplus.isUndefined(data[key]) !== true) {
	          widget.setData(data[key]);
	        }
	      });
	    }
	  }, {
	    key: 'validate',
	    value: function validate() {
	      this._widgets.forEach(function (widget, key) {
	        if (gomeplus.isFunction(widget.validate)) widget.validate();
	      });
	    }
	  }, {
	    key: 'getErrors',
	    value: function getErrors() {
	      var _this = this;

	      this.errors.clear();
	      this._widgets.forEach(function (widget, key) {
	        if (gomeplus.isFunction(widget.hasError) && widget.hasError()) {
	          _this.errors.set(key, widget.errorMessage());
	        }
	      });
	      return this.errors;
	    }
	  }, {
	    key: 'hasError',
	    value: function hasError() {
	      return this.getErrors().size > 0;
	    }
	  }]);
	  return activeform;
	}();

	gomeplus.mix(activeform.prototype, _Observable2.default);
	exports.default = activeform;

/***/ },
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;"use strict";

	gomeplus.mixin.Observable = {
	  bind: function bind(eventName, callback, context) {
	    var listeners = this.__listeners = this.__listeners || {},
	        callbacks = this.__listeners[eventName] = listeners[eventName] || [];
	    callbacks.push({
	      eventName: eventName,
	      callback: callback,
	      context: context || this
	    });

	    return this;
	  },
	  unbind: function unbind(eventName) {
	    var listeners = this.__listeners;
	    if (!(listeners && listeners[eventName])) {
	      return this;
	    }
	    delete listeners[eventName];
	  },
	  trigger: function trigger(eventName) {
	    var listeners = this.__listeners,
	        callback,
	        result,
	        finalResult = true;
	    if (!(listeners && listeners[eventName])) {
	      return this;
	    }
	    var i = 0,
	        len = listeners[eventName].length;
	    for (; i < len; i++) {
	      callback = listeners[eventName][i];
	      result = callback.callback.apply(callback.context, arguments);
	      if (finalResult === true && result === false) {
	        finalResult = false;
	      }
	    }
	    return finalResult;
	  }
	};
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, module) {
	  var Observable = {
	    bind: function bind(eventName, callback, context) {
	      var listeners = this.__listeners = this.__listeners || {},
	          callbacks = this.__listeners[eventName] = listeners[eventName] || [];
	      callbacks.push({
	        eventName: eventName,
	        callback: callback,
	        context: context || this
	      });
	      return this;
	    },
	    unbind: function unbind(eventName) {
	      var listeners = this.__listeners;
	      if (!(listeners && listeners[eventName])) {
	        return this;
	      }
	      delete listeners[eventName];
	      return this;
	    },
	    trigger: function trigger(eventName) {
	      var listeners = this.__listeners,
	          callback,
	          result,
	          finalResult = true;
	      if (!(listeners && listeners[eventName])) {
	        return finalResult;
	      }
	      var i = 0,
	          len = listeners[eventName].length;
	      for (; i < len; i++) {
	        callback = listeners[eventName][i];
	        result = callback.callback.apply(callback.context, arguments);
	        if (finalResult === true && result === false) {
	          finalResult = false;
	        }
	      }
	      return finalResult;
	    }
	  };

	  return Observable;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _classCallCheck2 = __webpack_require__(1);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(2);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _vue = __webpack_require__(47);

	var _vue2 = _interopRequireDefault(_vue);

	var _index = __webpack_require__(90);

	var _index2 = _interopRequireDefault(_index);

	var _Observable = __webpack_require__(88);

	var _Observable2 = _interopRequireDefault(_Observable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var builder = function () {
	  function builder(metaClient, options) {
	    (0, _classCallCheck3.default)(this, builder);

	    this._vm = null;
	    this.vmOptions = options;
	    this.metaClient = metaClient;
	  }

	  (0, _createClass3.default)(builder, [{
	    key: '_initVm',
	    value: function _initVm() {
	      var options = {};
	      options.name = builder.Name;
	      options.el = this.vmOptions.el;
	      options.data = this._optionsData();
	      options.components = _index2.default;
	      options.template = this.metaClient.getLayout();
	      this._vm = new _vue2.default(options);
	      this.trigger('init_vm', this._vm);
	    }
	  }, {
	    key: '_optionsData',
	    value: function _optionsData() {
	      return this.metaClient.getFields.bind(this.metaClient);
	    }
	  }, {
	    key: 'form',
	    value: function form() {
	      this._initVm();
	    }
	  }]);
	  return builder;
	}();

	builder.Name = 'activeForm';

	gomeplus.mix(builder.prototype, _Observable2.default);
	exports.default = builder;

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _vue = __webpack_require__(47);

	var _vue2 = _interopRequireDefault(_vue);

	var _text = __webpack_require__(91);

	var _text2 = _interopRequireDefault(_text);

	var _checkbox = __webpack_require__(104);

	var _checkbox2 = _interopRequireDefault(_checkbox);

	var _label = __webpack_require__(109);

	var _label2 = _interopRequireDefault(_label);

	var _layout = __webpack_require__(114);

	var _layout2 = _interopRequireDefault(_layout);

	var _row = __webpack_require__(119);

	var _row2 = _interopRequireDefault(_row);

	var _col = __webpack_require__(124);

	var _col2 = _interopRequireDefault(_col);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  Layout: _layout2.default,
	  LayoutRow: _row2.default,
	  LayoutCol: _col2.default,
	  WidgetLabel: _label2.default,
	  WidgetText: _text2.default,
	  WidgetCheckbox: _checkbox2.default
	};

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(92)

	/* script */
	__vue_exports__ = __webpack_require__(96)

	/* template */
	var __vue_template__ = __webpack_require__(103)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/lan/workplace/code/activeForm/lib/activeform/formwidget/text.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-1fcb0f3a", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-1fcb0f3a", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] text.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(93);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(95)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-1fcb0f3a!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./text.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-1fcb0f3a!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./text.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(94)();
	// imports


	// module
	exports.push([module.id, "\n.control-static{\n  display: inline-block;\n  width: 90%;\n  padding-left: 20px;\n  padding-top: 15px;\n}\n.help-block{\n  float: left;\n}\n", "", {"version":3,"sources":["/./lib/activeform/formwidget/text.vue?fb8e48d2"],"names":[],"mappings":";AAgDA;EACA,sBAAA;EACA,WAAA;EACA,mBAAA;EACA,kBAAA;CACA;AACA;EACA,YAAA;CACA","file":"text.vue","sourcesContent":["<template>\n  <div :class=\"{ 'has-error': error }\" class=\"form-group control-static\">\n    <validity :field=\"name\" :validators=\"validatorOptions\" :ref=\"name\">\n      <input :name=\"name\" class=\"form-control\" :placeholder=\"placeholder\" v-model=\"data\" @input=\"validateHandler()\"/>\n    </validity>\n    <p class=\"help-block\" v-if=\"this.hasError()\">{{this.errorMessage()}}</p>\n  </div>\n</template>\n\n<script>\n  import Common from './common/index.js'\n   const  {props,computed,methods,data,validators} = Common()\n    export default {\n      props : gomeplus.mix(props,{}),\n      data : function(){\n          let defaultData = data()\n          return gomeplus.mix(defaultData,{\n\n          })\n      },\n      computed:gomeplus.mix(computed,{\n        placeholder:function(){\n          return this.meta.placeholder\n        }\n      }),\n      methods : gomeplus.mix(methods,{\n        validateHandler:function(e){\n          this.validate.bind(this).call()\n        }\n      }),\n      mounted:function(){\n        this.$options.validators = gomeplus.mix(this.$options.validators, this.validatorMethods);\n        var self = this;\n        setTimeout(function(){\n          self.setData(self.value);\n        },0);\n      },\n      validators : gomeplus.mix(validators,{\n        vueValidator : function(val,meta={}){\n          if(meta.disable === true)return true;\n          return false\n        }\n      })\n  }\n\n</script>\n\n<style>\n  .control-static{\n    display: inline-block;\n    width: 90%;\n    padding-left: 20px;\n    padding-top: 15px;\n  }\n  .help-block{\n    float: left;\n  }\n</style>\n"],"sourceRoot":"webpack://"}]);

	// exports


/***/ },
/* 94 */,
/* 95 */,
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(97);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _Common = (0, _index2.default)(),
	    props = _Common.props,
	    computed = _Common.computed,
	    methods = _Common.methods,
	    _data = _Common.data,
	    validators = _Common.validators;

	exports.default = {
	  props: gomeplus.mix(props, {}),
	  data: function data() {
	    var defaultData = _data();
	    return gomeplus.mix(defaultData, {});
	  },
	  computed: gomeplus.mix(computed, {
	    placeholder: function placeholder() {
	      return this.meta.placeholder;
	    }
	  }),
	  methods: gomeplus.mix(methods, {
	    validateHandler: function validateHandler(e) {
	      this.validate.bind(this).call();
	    }
	  }),
	  mounted: function mounted() {
	    this.$options.validators = gomeplus.mix(this.$options.validators, this.validatorMethods);
	    var self = this;
	    setTimeout(function () {
	      self.setData(self.value);
	    }, 0);
	  },
	  validators: gomeplus.mix(validators, {
	    vueValidator: function vueValidator(val) {
	      var meta = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	      if (meta.disable === true) return true;
	      return false;
	    }
	  })
	};

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  return {
	    props: (0, _props2.default)(),
	    computed: (0, _computed2.default)(),
	    methods: (0, _methods2.default)(),
	    data: _data2.default,
	    validators: _validators2.default
	  };
	};

	var _props = __webpack_require__(98);

	var _props2 = _interopRequireDefault(_props);

	var _computed = __webpack_require__(99);

	var _computed2 = _interopRequireDefault(_computed);

	var _methods = __webpack_require__(100);

	var _methods2 = _interopRequireDefault(_methods);

	var _data = __webpack_require__(101);

	var _data2 = _interopRequireDefault(_data);

	var _validators = __webpack_require__(102);

	var _validators2 = _interopRequireDefault(_validators);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 98 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var params = {
	    type: Object,
	    default: function _default() {
	      return {};
	    }
	  };
	  return ["params"];
	};

/***/ },
/* 99 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var meta = function meta() {
	    return this.params.meta;
	  };

	  var name = function name() {
	    return this.params.field;
	  };

	  var value = function value() {
	    return this.meta.default;
	  };

	  var validators = function validators() {
	    var validators = {};
	    if (gomeplus.isPlainObject(this.params.validators)) {
	      validators = this.params.validators;
	    }
	    return validators;
	  };

	  var validatorOptions = function validatorOptions() {
	    var options = {};
	    if (gomeplus.isPlainObject(this.validators.options)) {
	      options = this.validators.options;
	    }
	    return options;
	  };

	  var validatorMethods = function validatorMethods() {
	    var methods = {};
	    if (gomeplus.isPlainObject(this.validators.methods)) {
	      methods = this.validators.methods;
	    }
	    return methods;
	  };

	  return {
	    meta: meta,
	    name: name,
	    value: value,
	    validators: validators,
	    validatorOptions: validatorOptions,
	    validatorMethods: validatorMethods
	  };
	};

/***/ },
/* 100 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var validate = function validate() {
	    var self = this;

	    var $validity = this.$refs[this.name];
	    if ($validity === undefined) return;
	    $validity.validate(this.data, function () {
	      var error = this.result.invalid;
	      self.error = error;
	      self.errors.clear();
	      if (error) {
	        this.result.errors.map(function (item) {
	          self.errors.set(item.validator, item.message);
	        });
	      }
	    });
	  };
	  var validateInit = function validateInit() {
	    this.errors.clear();
	    this.error = false;
	  };
	  var errorMessage = function errorMessage() {
	    var errors = [];
	    this.errors.forEach(function (item) {
	      errors.push(item);
	    });
	    return errors;
	  };
	  var hasError = function hasError() {
	    return this.error;
	  };
	  var getData = function getData() {
	    return this.data;
	  };
	  var setData = function setData(value) {
	    this.data = value;
	    this.validate();
	  };
	  return {
	    validate: validate,
	    validateInit: validateInit,
	    errorMessage: errorMessage,
	    hasError: hasError,
	    getData: getData,
	    setData: setData
	  };
	};

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _map = __webpack_require__(51);

	var _map2 = _interopRequireDefault(_map);

	exports.default = function () {
	  return {
	    errors: new _map2.default(),
	    data: "",
	    error: false
	  };
	};

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 102 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  commonValidator: function commonValidator(val) {
	    var meta = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    if (meta.disable === true) return true;
	    return false;
	  }
	};

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _c('div', {
	    staticClass: "form-group control-static",
	    class: {
	      'has-error': _vm.error
	    }
	  }, [_c('validity', {
	    ref: _vm.name,
	    attrs: {
	      "field": _vm.name,
	      "validators": _vm.validatorOptions
	    }
	  }, [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.data),
	      expression: "data"
	    }],
	    staticClass: "form-control",
	    attrs: {
	      "name": _vm.name,
	      "placeholder": _vm.placeholder
	    },
	    domProps: {
	      "value": _vm._s(_vm.data)
	    },
	    on: {
	      "input": [function($event) {
	        if ($event.target.composing) { return; }
	        _vm.data = $event.target.value
	      }, function($event) {
	        _vm.validateHandler()
	      }]
	    }
	  })]), _vm._v(" "), (this.hasError()) ? _c('p', {
	    staticClass: "help-block"
	  }, [_vm._v(_vm._s(this.errorMessage()))]) : _vm._e()])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-1fcb0f3a", module.exports)
	  }
	}

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(105)

	/* script */
	__vue_exports__ = __webpack_require__(107)

	/* template */
	var __vue_template__ = __webpack_require__(108)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/lan/workplace/code/activeForm/lib/activeform/formwidget/checkbox.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-69f5560e"

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-69f5560e", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-69f5560e", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] checkbox.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(106);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(95)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-69f5560e&scoped=true!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./checkbox.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-69f5560e&scoped=true!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./checkbox.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(94)();
	// imports


	// module
	exports.push([module.id, "\n.hr[data-v-69f5560e] {\n  padding: 0;\n  margin: 0;\n}\n", "", {"version":3,"sources":["/./lib/activeform/formwidget/checkbox.vue?4bdf6b37"],"names":[],"mappings":";AAyFA;EACA,WAAA;EACA,UAAA;CACA","file":"checkbox.vue","sourcesContent":["<template>\n  <div class=\"form-group control-static\">\n    <div v-if=\"tools\">\n    <span v-for=\"(tool,index) in tools\">\n      <input type=\"checkbox\" :checked=\"activeTool===index\" @change=\"toolsHandler($event,index)\">\n      <span>{{tool.name}}</span>\n    </span>&nbsp&nbsp\n      <hr class=\"hr\"/>\n    </div>\n    <label v-for=\"option in options\" class=\"checkbox-inline\">\n      <input type=\"checkbox\" id=\"inlineCheckbox1\" @change=\"checkedHandler\" :checked=\"data.indexOf(option.value) > -1\"\n             :value=\"option.value\"> {{option.label}}\n    </label>\n  </div>\n</template>\n\n<script>\n  import Common from './common/index.js'\n  let {props,computed,methods,data} = Common()\n  const EXPRESSION = {\n    ALL : 'all'\n  }\n  export default{\n    props,\n    data : function () {\n      let defaultData = data()\n      return gomeplus.mix(defaultData, {\n        activeTool: null\n      })\n    },\n    mounted : function () {\n      this.$options.validators = gomeplus.mix(this.$options.validators, this.validatorMethods);\n      let self = this;\n      setTimeout(function () {\n        self.setData(self.value);\n      }, 0);\n    },\n    computed : gomeplus.mix(computed, {\n      options : function () {\n        if (gomeplus.isUndefined(this.meta.options))return []\n        return this.meta.options;\n      },\n      tools : function () {\n        if (gomeplus.isUndefined(this.meta.tools))return false\n        return this.meta.tools\n      }\n    }),\n    methods : gomeplus.mix(methods, {\n      checkedHandler : function (e) {\n        let checked = e.target.checked,\n          value = parseInt(e.target.value)\n        if (checked === true)this._addItem(value)\n        else this._removeItem(value)\n      },\n      toolsHandler : function (e, index) {\n        this.activeTool = index\n        let checked = e.target.checked,\n          data = this._calcValues(index);\n        if (checked) {\n          this.data = data\n        } else {\n          this.activeTool = null\n        }\n      },\n      _calcValues : function (index) {\n        let expression = this.tools[index].expression\n        if (expression === EXPRESSION.ALL) {\n          return this.options.map(function (item) {return item.value})\n        }\n        return expression.split(',').map(function (item) {return parseInt(item)})\n      },\n      _addItem : function (val) {\n        let data = this.data;\n        if (data.indexOf(val) > -1)return;\n        data.push(val)\n        this.data = data\n      },\n      _removeItem : function (val) {\n        let data = this.data,\n          index = data.indexOf(val)\n        if (index === -1)return;\n        data.splice(index, 1)\n        this.data = data\n      }\n    })\n  }\n</script>\n\n<style scoped=\"scoped\">\n  .hr {\n    padding: 0;\n    margin: 0;\n  }\n</style>\n"],"sourceRoot":"webpack://"}]);

	// exports


/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(97);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _Common = (0, _index2.default)(),
	    props = _Common.props,
	    computed = _Common.computed,
	    methods = _Common.methods,
	    _data = _Common.data;

	var EXPRESSION = {
	  ALL: 'all'
	};
	exports.default = {
	  props: props,
	  data: function data() {
	    var defaultData = _data();
	    return gomeplus.mix(defaultData, {
	      activeTool: null
	    });
	  },
	  mounted: function mounted() {
	    this.$options.validators = gomeplus.mix(this.$options.validators, this.validatorMethods);
	    var self = this;
	    setTimeout(function () {
	      self.setData(self.value);
	    }, 0);
	  },
	  computed: gomeplus.mix(computed, {
	    options: function options() {
	      if (gomeplus.isUndefined(this.meta.options)) return [];
	      return this.meta.options;
	    },
	    tools: function tools() {
	      if (gomeplus.isUndefined(this.meta.tools)) return false;
	      return this.meta.tools;
	    }
	  }),
	  methods: gomeplus.mix(methods, {
	    checkedHandler: function checkedHandler(e) {
	      var checked = e.target.checked,
	          value = parseInt(e.target.value);
	      if (checked === true) this._addItem(value);else this._removeItem(value);
	    },
	    toolsHandler: function toolsHandler(e, index) {
	      this.activeTool = index;
	      var checked = e.target.checked,
	          data = this._calcValues(index);
	      if (checked) {
	        this.data = data;
	      } else {
	        this.activeTool = null;
	      }
	    },
	    _calcValues: function _calcValues(index) {
	      var expression = this.tools[index].expression;
	      if (expression === EXPRESSION.ALL) {
	        return this.options.map(function (item) {
	          return item.value;
	        });
	      }
	      return expression.split(',').map(function (item) {
	        return parseInt(item);
	      });
	    },
	    _addItem: function _addItem(val) {
	      var data = this.data;
	      if (data.indexOf(val) > -1) return;
	      data.push(val);
	      this.data = data;
	    },
	    _removeItem: function _removeItem(val) {
	      var data = this.data,
	          index = data.indexOf(val);
	      if (index === -1) return;
	      data.splice(index, 1);
	      this.data = data;
	    }
	  })
	};

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _c('div', {
	    staticClass: "form-group control-static"
	  }, [(_vm.tools) ? _c('div', [_vm._l((_vm.tools), function(tool, index) {
	    return _c('span', [_c('input', {
	      attrs: {
	        "type": "checkbox"
	      },
	      domProps: {
	        "checked": _vm.activeTool === index
	      },
	      on: {
	        "change": function($event) {
	          _vm.toolsHandler($event, index)
	        }
	      }
	    }), _vm._v(" "), _c('span', [_vm._v(_vm._s(tool.name))])])
	  }), _vm._v("  \n    "), _c('hr', {
	    staticClass: "hr"
	  })], true) : _vm._e(), _vm._v(" "), _vm._l((_vm.options), function(option) {
	    return _c('label', {
	      staticClass: "checkbox-inline"
	    }, [_c('input', {
	      attrs: {
	        "type": "checkbox",
	        "id": "inlineCheckbox1"
	      },
	      domProps: {
	        "checked": _vm.data.indexOf(option.value) > -1,
	        "value": option.value
	      },
	      on: {
	        "change": _vm.checkedHandler
	      }
	    }), _vm._v(" " + _vm._s(option.label) + "\n  ")])
	  })], true)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-69f5560e", module.exports)
	  }
	}

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(110)

	/* script */
	__vue_exports__ = __webpack_require__(112)

	/* template */
	var __vue_template__ = __webpack_require__(113)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/lan/workplace/code/activeForm/lib/activeform/formwidget/label.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-2f739c2e", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-2f739c2e", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] label.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(111);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(95)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-2f739c2e!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./label.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-2f739c2e!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./label.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(94)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"label.vue","sourceRoot":"webpack://"}]);

	// exports


/***/ },
/* 112 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: ["label", "field"]
	};

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _c('label', {
	    staticClass: "control-label"
	  }, [_vm._v(_vm._s(_vm.label))])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-2f739c2e", module.exports)
	  }
	}

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(115)

	/* script */
	__vue_exports__ = __webpack_require__(117)

	/* template */
	var __vue_template__ = __webpack_require__(118)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/lan/workplace/code/activeForm/lib/activeform/formwidget/layout.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-384e9860", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-384e9860", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] layout.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(116);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(95)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-384e9860!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./layout.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-384e9860!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./layout.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(94)();
	// imports


	// module
	exports.push([module.id, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"layout.vue","sourceRoot":"webpack://"}]);

	// exports


/***/ },
/* 117 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: []
	};

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _c('div', {
	    staticClass: "container-fluid"
	  }, [_vm._t("default")], true)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-384e9860", module.exports)
	  }
	}

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(120)

	/* script */
	__vue_exports__ = __webpack_require__(122)

	/* template */
	var __vue_template__ = __webpack_require__(123)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/lan/workplace/code/activeForm/lib/activeform/formwidget/row.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-11eeb494", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-11eeb494", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] row.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(121);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(95)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-11eeb494!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./row.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-11eeb494!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./row.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(94)();
	// imports


	// module
	exports.push([module.id, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"row.vue","sourceRoot":"webpack://"}]);

	// exports


/***/ },
/* 122 */
/***/ function(module, exports) {

	"use strict";

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _c('div', {
	    staticClass: "row"
	  }, [_vm._t("default")], true)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-11eeb494", module.exports)
	  }
	}

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__webpack_require__(125)

	/* script */
	__vue_exports__ = __webpack_require__(127)

	/* template */
	var __vue_template__ = __webpack_require__(128)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/lan/workplace/code/activeForm/lib/activeform/formwidget/col.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-10538d8c", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-10538d8c", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] col.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(126);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(95)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-10538d8c!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./col.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-10538d8c!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./col.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(94)();
	// imports


	// module
	exports.push([module.id, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"col.vue","sourceRoot":"webpack://"}]);

	// exports


/***/ },
/* 127 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: {
	    grid: {
	      type: Number,
	      default: function _default() {
	        return 12;
	      }
	    }
	  },
	  computed: {
	    gridClass: function gridClass() {
	      var self = this;
	      return ['col-xs-', 'col-sm-', 'col-md-', 'col-lg-'].map(function (item) {
	        return item + self.grid;
	      }).join(' ');
	    }
	  }
	};

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._c;
	  return _c('div', {
	    class: _vm.gridClass
	  }, [_vm._t("default")], true)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-10538d8c", module.exports)
	  }
	}

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _map = __webpack_require__(51);

	var _map2 = _interopRequireDefault(_map);

	var _classCallCheck2 = __webpack_require__(1);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(2);

	var _createClass3 = _interopRequireDefault(_createClass2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var meta = function () {
	  function meta(_meta) {
	    (0, _classCallCheck3.default)(this, meta);

	    this._fields = new _map2.default();
	    this._initFields(_meta.fields);
	    this._initLayout(_meta.layout);
	  }

	  (0, _createClass3.default)(meta, [{
	    key: '_initFields',
	    value: function _initFields(fields) {
	      var _this = this;

	      var self = this;
	      fields.map(function (item) {
	        _this._fields.set(item.field, item);
	      });
	    }
	  }, {
	    key: '_initLayout',
	    value: function _initLayout(layout) {
	      this._layout = layout;
	    }
	  }, {
	    key: 'getFields',
	    value: function getFields() {
	      var fields = {};
	      this._fields.forEach(function (item, key) {
	        fields[key] = item;
	      });
	      return fields;
	    }
	  }, {
	    key: 'getLayout',
	    value: function getLayout() {
	      return this._layout;
	    }
	  }]);
	  return meta;
	}();

	exports.default = meta;

/***/ }
]);
//# sourceMappingURL=activeform_app.js.map
