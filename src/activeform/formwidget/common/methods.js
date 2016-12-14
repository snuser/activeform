'use strict'
export default function () {
  const validate = function () {
    var self = this
    // refer validity instance from $refs
    var $validity = this.$refs[this.name]
    if($validity === undefined)return;
    $validity.validate(this.data,function(){
      let error =  this.result.invalid
      self.error = error
      self.errors.clear()
      if(error){
        this.result.errors.map(function(item){
          self.errors.set(item.validator,item.message)
        })
      }
    })
  }
  const validateInit = function(){
    this.errors.clear()
    this.error = false
  }
  const errorMessage = function () {
    let errors = []
    this.errors.forEach(function (item) {
      errors.push(item);
    });
    return errors;
  }
  const hasError = function () {
    return this.error
  }
  const getData = function () {
    return this.data
  }
  const setData = function (value) {
    this.data = value
    this.validate()
  }
  return {
    validate,
    validateInit,
    errorMessage,
    hasError,
    getData,
    setData
  }

}
