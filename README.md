# activeform
activeform 是一个基于vue框架的form组合工具,结构分为两个部分组成(meta builder)和组件(formwidget)<br/>
meta由metaprovider提供components的配置字段fields和布局字段layout.  activeform提供api(getData setData validate).<br/>




###依赖
    ```
    node
    npm
    ```

###安装

    ```
    git clone https://github.com/snuser/activeform
    cd activeform
    npm install -d
    webpack --config build/webpack.config.js
    ```

###组件配置
#### fields
- 定义activeform的控件的meta信息
- field widget 字段名称和要使用的组件名称
- meta 组件要使用的meta信息(根据组件定义各不相同)
- validators 组件校验信息 (根据组件定义各不相同)  options为校验约定  methods为校验方法(分为系统,组件,用户三个层级定义)
```
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
        },
        methods: {
          numeric: function (val) {
            return /^[-+]?[0-9]+$/.test(val);
          }
        }
      }
},
```
#### layout
- layout组件为布局组件包括(row col)
- row 组件为行组件(根据bootstrap栅格分类为一行为12栅格)
- col 组件为列组件(提供grid参数 来对应row的栅格数)
```
<widget-row>
<widget-col :grid="6"/>
<widget-col :grid="6">
<widget-label>
<widget-text>
</widget-col>
</widget-row>
```
_如果row里面grid相加大于12会排到下一行_

#### formwidget
- label 提供label标签
```
<widget-label label="label"></widget-label>
```

##### text组件 提供text输入功能
- 事例
```
 <widget-text :params="fieldName" ref="fieldName"></widget-text>
```
- 配置

    | meta|类型  |说明
    |---|:----|:----|
    | placeholder  | string | placeholder|
    |default | string |    默认值|


##### checkbox

- 事例

    ```
    <widget-checkbox :params="fieldName" ref="filedName"></widget-checkbox>
    ```

- 配置

    | meta | 类型 |事例|
    |---|:----|:----|
    | options  | array | 配置checkbox默认值 [ {label:"足球",value:1}, {label:"篮球",value:2}, {label:"羽毛球",value:3} ]    |  
    | tools    | array | 配置辅助工具的名称和值 [ {name:"全选",expression:"all"}, {name:"我的爱好",expression:[2,3]} ] |
    | default  | array or string| 默认值|
    其中关于 tools.expression和default的值
    ```
        expression | array or string 
        expression = 'all'
        expression = [1,2,3]
        expression = '1,2,3'
    ```
