'use strict'
export default class Collection {
  constructor (keyFn) {
    this._items =[]
    this._keys = []
    this._maps = {}
    this.items = null
    this.maps = {}
    if (keyFn && gomeplus.isFunction(keyFn)) {
      this.getKey = keyFn
    }
  }

  getKey (item) {
    let keys = this._keys,
      items = this._items,
      index = items.indexOf(item);

    if (index < 0) {
      return this._items.length;
    }
    return keys[index]
  }

  add (key, item) {
    var keys = this._keys,
      items = this._items,
      maps = this._maps,
      index;

    if (arguments.length == 1) {
      item = key;
      key = this.getKey(item);
    }
    index = this.indexOf(item);

    if (index > -1) {
      keys.splice(index, 1, key);
      items.splice(index, 1, item);
      maps[key] = item;
    } else {
      keys.push(key);
      items.push(item);
      maps[key] = item;
    }

    return this;
  }

  insertAt (index, item) {
    var keys = this._keys,
      items = this._items,
      maps = this._maps,
      key = this.getKey(item);

    index = Math.min(Math.max(0, index), items.length);
    keys.splice(index, 0, key);
    items.splice(index, 0, item);
    maps[key] = item;
  }

  remove (item) {
    var index = this.indexOf(item);

    if (index > -1) {
      return this.removeAt(index);
    }
  }

  removeAt (index) {
    var keys = this._keys,
      items = this._items,
      maps = this._maps,
      length = this.count(),
      removedKey,
      removedItem;
    if (index > length) {
      return false;
    }
    index = Math.max(index, 0);
    removedKey = (keys.splice(index, 1))[0];
    removedItem = (items.splice(index, 1))[0];
    delete maps[removedKey];

    return removedItem;
  }

  get (key) {
    var item = this._maps[key];
    if (gomeplus.isUndefined(item) && gomeplus.isNumber(key)) {
      item = this._items[key];
    }
    if (gomeplus.isUndefined(item)) {
      item = null;
    }

    return item;
  }

  getByIndex (index) {
    var item = this._items[index];
    if (gomeplus.isUndefined(item)) {
      item = null;
    }
    return item;
  }

  indexOf (item) {
    var key = !gomeplus.isUndefined(this.getKey(item)) ? this.getKey(item) : item;
    return this._keys.indexOf(key);
  }


  each (fn) {
    var key,
      item,
      items = this._items.slice(),
      execWithKey = fn.length > 1,
      i,
      len = items.length;

    for (i = 0; i < len; i++) {
      item = items[i];
      key = this.getKey(item);
      execWithKey ? fn(key, item) : fn(item);
    }
  }

  count () {
    return this._items.length;
  }

  toJSON () {
    var result = [],
      json,
      args = arguments;
    this.each(function (item) {
      json = gomeplus.isFunction(item.toJSON) ? item.toJSON.apply(item, args) : item;
      result.push(json);
    });

    return result;
  }

  isFirst (item) {
    if (this.indexOf(item) == 0) {
      return true;
    }

    return false;
  }

  isLast (item) {
    if (this.indexOf(item) == this.count() - 1) {
      return true;
    }

    return false;
  }

  empty () {
    this.items = this._items = [];
    this._keys = [];
    this.maps = this._maps = {};
  }
}
