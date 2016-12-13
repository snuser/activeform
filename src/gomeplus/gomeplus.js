/**
 * Created by lan on 15/4/23.
 */
(function (window) {
  if(window.gomeplus !== undefined)return;

  var toString = Object.prototype.toString,
    isArray = Array.isArray || function(v){return v && toString.call(v) == '[object Array]';},
    isPlainObject = function(v){
      return v && toString.call(v) === '[object Object]' && 'isPrototypeOf' in v;
    },
    isFunction = function (v) {
      return v && toString.call(v) === '[object Function]';
    },
    isString = function(v) {
      return toString.call(v) === '[object String]';
    },
    isNumber = function(v) {
      return toString.call(v) === '[object Number]';
    },
    isBoolean = function(v) {
      return toString.call(v) === '[object Boolean]';
    },
    isUndefined = function(v) {
      return v === undefined;
    },
    isEmptyObject = function(v) {
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
    equal = function(v1, v2, isStrongType) {
      var i,
        len,
        type1 = toString.call(v1),
        type2 = toString.call(v2),
        property;

      if (isStrongType || (SKIP_TYPE_VALIDATION.indexOf(type1) == -1 || SKIP_TYPE_VALIDATION.indexOf(type2) == -1)) {
        if (type1 !== type2) {
          return false;
        }
      }

      if (gomeplus.isArray(v1)) {
        if (v1.length !== v2.length) {
          return false;
        }
        for (i=0, len=v1.length; i<len; i++) {
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
    mix = function(dest, source, isDeep) {
      isDeep = isDeep === undefined ? true : isDeep;

      for (var p in source) {
        var src = source[p],
          target = dest[p];
        if (isDeep && (isArray(src) || isPlainObject(src))) {
          var clone = dest[p] = (target && (isArray(target) || isPlainObject(target))) ?
            target : (isArray(src) ? [] : {});
          mix(clone, src);
        } else {
          //修正android webview下的遍历bug，会把prototype属性遍历出来，在继承mix时造成对prototype的重写
          if (p == 'prototype') {
            continue;
          }
          dest[p] = src;
        }
      }
      return dest;
    },
    clone = function(obj) {
      if (gomeplus.isArray(obj)) {
        return mix([], obj);
      }
      if (gomeplus.isPlainObject(obj)) {
        return mix({}, obj);
      }
      return obj;
    },
    apply = function(obj, config, defaults) {
      if (defaults) {
        apply(obj, defaults);
      }
      return mix(obj, config);
    },
    delegate = function(obj, func) {
      var presetArgs = Array.prototype.splice.call(arguments, 2),
        delegate = function() {
          var args = presetArgs.concat(Array.prototype.slice.call(arguments));
          return func.apply(obj, args);
        };
      return delegate;
    },
    create = isFunction(Object.create) ? Object.create : function(obj) {
      var F = function() {};
      F.prototype = obj.hasOwnProperty('prototype') ? obj.prototype : obj;
      return new F();
    },
    gomeplus = {
      mixin:{}
    };
  gomeplus.host = this;
  //gomeplus.$client = $(this);
  mix(gomeplus,{
    mix:mix,
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
    upperCaseFirst: function(str) {
      if (!isString(str)) {
        throw new Error('argument must be a string');
      }
      if (str.length < 1) {
        return str;
      }
      return str[0].toUpperCase() + str.substr(1);
    },
    nl2br: function(str) {
      return str.replace(/\n/g, '<br/>');
    },
    setSiteBaseUrl: function(url) {
      _baseUrl = url;
    },
    getSiteBaseUrl: function() {
      return _baseUrl;
    },
    json: {
      encode: JSON.stringify,
      decode: JSON.parse
    },
    classify: function(obj) {
      var F = function() {};
      F.prototype = obj.hasOwnProperty('prototype') ? obj.prototype : obj;
      F.prototype.constructor = F;

      return F;
    },
    extend: function(subclass, superclass) {
      subclass.prototype = gomeplus.create(superclass.prototype);
      subclass.prototype.constructor = subclass;
      subclass.prototype.__class = subclass;
      subclass.prototype.super =  superclass.prototype;
      subclass.prototype.superclass = superclass;

      return subclass;
    },
    createClass: function() {
      var superclass,
        instance,
        clazz = function() {};
      if (arguments.length == 2) {
        superclass = arguments[0];
        instance = arguments[1];
        if (!isFunction(superclass)) {
          throw new Error('argument error:Superclass must be a class');
        } else {
          clazz = instance.hasOwnProperty('constructor') ? instance.constructor : function() {
            superclass.apply(this, $.makeArray(arguments));
          }

          clazz = gomeplus.extend(clazz, superclass);
          gomeplus.mix(clazz.prototype, instance);

        }
      } else if (arguments.length == 1) {
        clazz = gomeplus.extend(arguments[0].hasOwnProperty('constructor')?arguments[0].constructor : clazz,gomeplus.classify(arguments[0]));
      }

      return clazz;
    },
    DateFormatter: {
      _formatFunc: {
        Y: function(date) {
          return date.getFullYear();
        },
        y: function(date) {
          return Number(String((new Date()).getFullYear()).substr(-2));
        },
        m: function(date) {
          return this._pad(date.getMonth() + 1);
        },
        d: function(date) {
          return this._pad(date.getDate());
        },
        H: function(date) {
          return this._pad(date.getHours());
        },
        i: function(date) {
          return this._pad(date.getMinutes());
        },
        s: function(date) {
          return this._pad(date.getSeconds());
        }
      },
      format: function(date, format) {
        var that = this;
        return format.replace(/[YymdHis]/g, function(k) {
          var fn = that._formatFunc[k];
          if (gomeplus.isFunction(fn)) {
            return fn.call(that, date);
          }
          return k;
        });
      },
      _pad: function(v) {
        if (!gomeplus.isString(v)) {
          v = String(v);
        }
        return v.length > 1 ? v : ('0' + v);
      }
    },
    Debugger: {
      dump: function() {
        console.log(Array.prototype.slice.call(arguments));
      }
    }
  });
  window['gomeplus'] = gomeplus;

})(window);
