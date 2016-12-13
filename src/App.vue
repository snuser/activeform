<template>
  <div id="app">
    <layout>
      <layout-row>
        <layout-col :grid="6">
          <widget-label label="label"></widget-label>
          <widget-text :params="name"></widget-text>
        </layout-col>
        <layout-col :grid="6">
          <widget-label label="年龄"></widget-label>
          <widget-text :params="age">  </widget-text>
        </layout-col>
      </layout-row>
      <layout-row>
        <layout-col>
          <widget-label label="中文"></widget-label>
          <widget-text :params="addr"></widget-text>
        </layout-col>
      </layout-row>
    </layout>
  </div>
</template>

<script>

</script>

<style>
  #app {
    width:100%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
