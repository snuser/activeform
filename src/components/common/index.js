'use strict'
import Props from './props.js'
import Computed from './computed.js'
import Methods from './methods.js'
import Data from './data.js'
import validators from './validators.js'
export default function(){
  return {
    props : Props(),
    computed : Computed(),
    methods : Methods(),
    data:Data,
    validators
  }
}
