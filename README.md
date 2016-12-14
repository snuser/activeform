# activeform
activeform 是一个基于vue框架的form组合工具,结构分为两个部分组装(meta builder)和组件(formwidget)<br/>
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
- col 组件为列组件(提供grip参数 来对应row的栅格数)
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
- text组件 提供text输入功能
- params 参数内容为fields字段中定义的field  如:fields.name={...props}
```
 <widget-text :params="name" ref="name"></widget-text>
```
##### 配置

| 字段meta       | 说明           |
| ------------- |:-------------:|
| placeholder   | placeholder   |
| default       | 默认值         |



