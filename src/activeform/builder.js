'use strict'
import Vue from 'vue'
import components  from './formwidget/index.js'
import Observable from 'Observable'
class builder{
  constructor(metaClient,options){
    this._vm = null
    this._options = options
    this.metaClient = metaClient
  }
  _initVm(){
    let options = {};
    options.name = builder.Name
    options.el = this._options.el
    options.data = this._fieldsData()
    options.components = components
    options.template = this.metaClient.getLayout()
    this._vm = new Vue(options);
    this.trigger('init_vm',this._vm);
  }
  _fieldsData(){
      return this.metaClient.getFields.bind(this.metaClient)
  }
  form(){
    this._initVm()
  }
}
builder.Name = 'activeForm'
Object.assign(builder.prototype, Observable)
export  default builder
