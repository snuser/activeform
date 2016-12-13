gomeplus.mixin.Observable = {
  bind: function(eventName, callback, context) {
    var listeners = this.__listeners = (this.__listeners || {}),
      callbacks = this.__listeners[eventName] = (listeners[eventName] || []);
    callbacks.push({
      eventName: eventName,
      callback: callback,
      context: context || this
    });

    return this;
  },
  unbind: function(eventName) {
    var listeners = this.__listeners;
    if (!(listeners && listeners[eventName])) {
      return this;
    }
    delete listeners[eventName];
  },
  trigger: function(eventName) {
    var listeners = this.__listeners,
      callback,
      result,
      finalResult = true;
    if (!(listeners && listeners[eventName])) {
      return this;
    }
    var i=0, len=listeners[eventName].length;
    for (; i<len; i++) {
      callback = listeners[eventName][i];
      result = callback.callback.apply(callback.context, arguments);
      if (finalResult === true && result === false) {
        finalResult = false;
      }
    }
    return finalResult;
  }
};
define(function(require, exports, module) {
  var Observable = {
    bind: function(eventName, callback, context) {
      var listeners = this.__listeners = (this.__listeners || {}),
        callbacks = this.__listeners[eventName] = (listeners[eventName] || []);
      callbacks.push({
        eventName: eventName,
        callback: callback,
        context: context || this
      });
      return this;
    },
    unbind: function(eventName) {
      var listeners = this.__listeners;
      if (!(listeners && listeners[eventName])) {
        return this;
      }
      delete listeners[eventName];
      return this;
    },
    trigger: function(eventName) {
      var listeners = this.__listeners,
        callback,
        result,
        finalResult = true;
      if (!(listeners && listeners[eventName])) {
        return finalResult;
      }
      var i=0, len=listeners[eventName].length;
      for (; i<len; i++) {
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
});
