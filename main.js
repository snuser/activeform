'use strict'
//import manifest from './dist/static/js/manifest.js'
import activefrom from './src/activeform.js'
class  App {
  static init (el){
    let activeFrom = new activeform({
      'el':app,
    },App.metaProvider)
    activeFrom.render()
  }
}
App.metaData = {
  fields:[
    {
      field: 'name',
      widget: 'text',
      meta: {
        placeholder: '请输入名称',
        default: ''
      },
      validators: {
        options: {
          numeric:{message:"必需为数字"},
          commonValidator:{rule:{disable:false},message:"commonValidator"},
          vueValidator:{rule:{disable:true},message:"vueValidator"}
        },
        methods: {
          numeric: function (val) {
            return /^[-+]?[0-9]+$/.test(val);
          },
        }
      }
    },
    {
      field:'age',
      widget:"text",
      meta:{
        placeholder:"请输入年龄",
        default:'1'
      }
    },
    {
      field:'addr',
      widget:"text",
      meta:{
        placeholder:"请输入地址",
        default:'北京市'
      }
    },
    {
      field:'hobby',
      widet:'checkbox',
      meta:{
        tools:[
          {name:"全选",expression:"all"},
          {name:"我的爱好",expression:"2,3"}
        ],
        options:[
          {label:"足球",value:1},
          {label:"篮球",value:2},
          {label:"羽毛球",value:3}
        ],
        default:[1,2]

      }
    }
  ],
  layout:`
     <layout>
      <layout-row>
        <layout-col :grid="6">
          <widget-label label="label"></widget-label>
          <widget-text :params="name" ref="name"></widget-text>
        </layout-col>
        <layout-col :grid="6">
          <widget-label label="年龄"></widget-label>
          <widget-text :params="age" ref="age">  </widget-text>
        </layout-col>
      </layout-row>
      <layout-row>
        <layout-col>
          <widget-label label="中文"></widget-label>
          <widget-text :params="addr" ref="addr"></widget-text>
        </layout-col>
      </layout-row>
       <layout-row>
        <layout-col :grid="6">
          <widget-label label="兴趣"></widget-label>
          <widget-checkbox :params="hobby" ref="hobby"></widget-checkbox>
        </layout-col>
      </layout-row>
    </layout>
  `
}
App.metaProvider = {
  getData(){
    return App.metaData
  }
}

window.App = App
