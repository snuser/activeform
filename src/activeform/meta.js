'use strict'
class meta {
  constructor (meta) {
    this._fields = new Map()
    this._initFields(meta.fields);
    this._initLayout(meta.layout);
  }

  _initFields(fields){
    let self = this;
    fields.map((item)=>{
      this._fields.set(item.field, item)
    })
  }

  _initLayout(layout){
    this._layout = layout;
  }

  getFields() {
    let fields = {};
    this._fields.forEach((item,key)=>{
        fields[key] = item
    })
    return fields
  }


  getLayout(){
    return this._layout
  }
}
export  default  meta;
