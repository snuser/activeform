'use strict'
import activeform from 'activeform'
import metaData from './config.js'
class  App {
  static init (el){
    let activeFrom = new activeform({
      'el':el,
    },App.metaProvider)
    activeFrom.render()
  }
}
App.metaData = metaData
App.metaProvider = {
  getData(){
    return App.metaData
  }
}

window.App = App

