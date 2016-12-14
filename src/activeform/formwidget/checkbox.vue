<template>
  <div class="form-group control-static">
    <div v-if="tools">
    <span v-for="(tool,index) in tools">
      <input type="checkbox" :checked="activeTool===index" @change="toolsHandler($event,index)">
      <span>{{tool.name}}</span>
    </span>&nbsp&nbsp
      <hr class="hr"/>
    </div>
    <label v-for="option in options" class="checkbox-inline">
      <input type="checkbox" id="inlineCheckbox1" @change="checkedHandler" :checked="data.indexOf(option.value) > -1"
             :value="option.value"> {{option.label}}
    </label>
  </div>
</template>

<script>
  import Common from './common/index.js'
  let {props,computed,methods,data} = Common()
  const EXPRESSION = {
    ALL : 'all'
  }
  export default{
    props,
    data : function () {
      let defaultData = data()
      return Object.assign(defaultData, {
        activeTool: null
      })
    },
    mounted : function () {
      this.$options.validators = Object.assign(this.$options.validators, this.validatorMethods);
      let self = this;
      setTimeout(function () {
        self.setData(self.value);
      }, 0);
    },
    computed : Object.assign(computed, {
      options : function () {
        if (gomeplus.isUndefined(this.meta.options))return []
        return this.meta.options;
      },
      tools : function () {
        if (gomeplus.isUndefined(this.meta.tools))return false
        return this.meta.tools
      }
    }),
    methods : Object.assign(methods, {
      checkedHandler : function (e) {
        let checked = e.target.checked,
          value = parseInt(e.target.value)
        if (checked === true)this._addItem(value)
        else this._removeItem(value)
      },
      toolsHandler : function (e, index) {
        this.activeTool = index
        let checked = e.target.checked,
          data = this._calcValues(index);
        if (checked) {
          this.data = data
        } else {
          this.activeTool = null
        }
      },
      _calcValues : function (index) {
        let expression = this.tools[index].expression
        if (expression === EXPRESSION.ALL) {
          return this.options.map(function (item) {return item.value})
        }
        return expression.split(',').map(function (item) {return parseInt(item)})
      },
      _addItem : function (val) {
        let data = this.data;
        if (data.indexOf(val) > -1)return;
        data.push(val)
        this.data = data
      },
      _removeItem : function (val) {
        let data = this.data,
          index = data.indexOf(val)
        if (index === -1)return;
        data.splice(index, 1)
        this.data = data
      }
    })
  }
</script>

<style scoped="scoped">
  .hr {
    padding: 0;
    margin: 0;
  }
</style>
