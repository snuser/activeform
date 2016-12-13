'use strict'
import Observable from './gomeplus/mixin/Observable.js'
import builder from './builder.js'
import meta from './meta.js'
class activeform {
  constructor (options,metaProvider) {
    this._widgets = new Map()
    this._vm = null
    this.errors = new Map();
    this.meta = new meta(metaProvider.getData());
    this.builder = new builder(this.meta,options);
    this.builder.bind('init_vm',this.setWidgetsHandler.bind(this))
  }

  render(){
    this.builder.form()
  }
  setWidgetsHandler(event, vm){
    this._vm = vm
    let $refs = vm.$refs
    for(var name in $refs){
      this._widgets.set(name, $refs[name]);
    }
  }
  getData () {
    let data = {}
    this._widgets.forEach((widget,key)=>{
      data[key] = gomeplus.isFunction(widget.getData) ?  widget.getData() : null
    })
    return data
  }

  setData (data) {
    this._widgets.forEach((widget,key)=>{
      if(gomeplus.isUndefined(data[key]) !== true){
        widget.setData(data[key])
      }
    })
  }

  validate () {
    this._widgets.forEach(function(widget,key){
      if(gomeplus.isFunction(widget.validate))
        widget.validate()
    })
  }
  getErrors(){
    this.errors.clear();
    this._widgets.forEach((widget,key)=>{
      if(gomeplus.isFunction(widget.hasError) && widget.hasError()){
        this.errors.set(key, widget.errorMessage())
      }
    })
    return this.errors;
  }
  hasError(){
    return this.getErrors().size > 0
  }
}
gomeplus.mix(activeform.prototype,Observable)
export  default activeform
