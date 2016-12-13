'use strict'
import Vue from 'vue'
import components  from './components/index.js'
import Observable from './gomeplus/mixin/Observable.js'
class builder{
  static Name = 'activeForm'
  constructor(metaClient,options){
    this._vm = null
    this.vmOptions = options
    this.metaClient = metaClient
  }
  _initVm(){
    let options = {};
    options.name = builder.Name
    options.el = this.vmOptions.el
    options.data = this._optionsData()
    options.components = components
    options.template = this.metaClient.getLayout()
    this._vm = new Vue(options);
    this.trigger('init_vm',this._vm);
  }
  _optionsData(){
      return this.metaClient.getFields.bind(this.metaClient)
  }
  form(){
    this._initVm()
  }
}
gomeplus.mix(builder.prototype, Observable)
export  default builder
