'use strict'
export default function () {
  const meta = function () {
    return this.params.meta
  }

  const name = function () {
    return this.params.field
  }

  const value = function () {
    return this.meta.default;
  }

  const validators = function () {
    let validators = {};
    if (gomeplus.isPlainObject(this.params.validators)) {
      validators = this.params.validators;
    }
    return validators;
  }

  const validatorOptions = function () {
    let options = {};
    if (gomeplus.isPlainObject(this.validators.options)) {
      options = this.validators.options;
    }
    return options;
  }

  const validatorMethods = function () {
    let methods = {};
    if (gomeplus.isPlainObject(this.validators.methods)) {
      methods = this.validators.methods;
    }
    return methods;
  }

  return {
    meta,
    name,
    value,
    validators,
    validatorOptions,
    validatorMethods,
  }
}
