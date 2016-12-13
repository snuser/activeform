'use strict'
export  default {
  commonValidator:function(val,meta={}){
    if(meta.disable === true)return true;
    return false
  }
}
