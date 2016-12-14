'use strict'
var webpack = require('webpack'),
    path = require('path'),
    fs = require('fs'),
    CommonsChunkPlugin = require('./common_chunk.js'),
    projectRoot = path.resolve(__dirname,'../'),
    jsProjectRoot = path.resolve(projectRoot,'./src'),
    gomeplusRoot = path.resolve(jsProjectRoot,'gomeplus'),
    entrys = function(root){
      var models =  fs.readdirSync(root);
      var dirs = {};
      models.map(function(item){dirs[item] = path.resolve(root,item,'index.js')})
      return dirs;
    },
    plugins = [];
//commosChunk
for(let plugin in CommonsChunkPlugin){
  plugins.push(CommonsChunkPlugin[plugin])
}


//plugins.push(CommonsChunkPlugin)
var options =  {
  devtool:  '#source-map',
  plugins:plugins,
  entry: entrys(path.resolve(projectRoot,'example')),
  output:{
    path: path.resolve(projectRoot,'dist/static'),
    filename:'[name].js'
  },
  module:{
    //加载器配置
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/
      },
        {
            test: /\.json$/,
            loader: 'json'
        },
    ]
  },
  resolve:{
    extension:['','.js','.vue'],
    fallback: [path.join(jsProjectRoot, './node_modules')],
    alias:{
        'vue$': 'vue/dist/vue.common.js',
        'gomeplus':path.resolve(gomeplusRoot,'gomeplus'),
      'Collection':path.resolve(gomeplusRoot,'util/Collection'),
      'Observable':path.resolve(gomeplusRoot,'mixin/Observable'),
      'activeform' : path.resolve(jsProjectRoot,'activeform')
    }
  },
  externals : {
      'jquery.min' : 'jquery'
  }

}
console.log(options);
module.exports = options
