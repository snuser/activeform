<template>
  <div :class="gridClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props:{
    grid:{
      type:Number,
      default:function(){
        return 12;
      }
    }
  },
  computed:{
    gridClass:function(){
      let self = this;
      return ['col-xs-','col-sm-','col-md-','col-lg-'].map(function (item) {
          return item+self.grid;
      }).join(' ')
    }
  }
}
</script>

<style lang="less">
</style>
