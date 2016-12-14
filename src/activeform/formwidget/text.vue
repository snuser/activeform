<template>
  <div :class="{ 'has-error': error }" class="form-group control-static">
    <validity :field="name" :validators="validatorOptions" :ref="name">
      <input :name="name" class="form-control" :placeholder="placeholder" v-model="data" @input="validateHandler()"/>
    </validity>
    <p class="help-block" v-if="this.hasError()">{{this.errorMessage()}}</p>
  </div>
</template>

<script>
  import Common from './common/index.js'
   const  {props,computed,methods,data,validators} = Common()
    export default {
      props : Object.assign(props,{}),
      data : function(){
          let defaultData = data()
          return Object.assign(defaultData,{

          })
      },
      computed:Object.assign(computed,{
        placeholder:function(){
          return this.meta.placeholder
        }
      }),
      methods : Object.assign(methods,{
        validateHandler:function(e){
          this.validate.bind(this).call()
        }
      }),
      mounted:function(){
        this.$options.validators = Object.assign(this.$options.validators, this.validatorMethods);
        var self = this;
        setTimeout(function(){
          self.setData(self.value);
        },0);
      },
      validators : Object.assign(validators,{
      })
  }

</script>

<style>
  .control-static{
    display: inline-block;
    width: 90%;
    padding-left: 20px;
    padding-top: 15px;
  }
  .help-block{
    float: left;
  }
</style>
