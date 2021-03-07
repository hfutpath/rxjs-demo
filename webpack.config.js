const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    //出口配置
    filename: 'index.js', //出口文件名
    path: __dirname + '/dist/mbcc' //出口路径
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'), // 需要被处理文件路径
      filename: 'index.html' // 文件打包完毕之后，目标文件名称
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?/, // 即匹配了js文件又匹配了jsx文件
        // 将node_modules排除在外，在编译过程中，不仅编译了自己项目代码，还编译node_modules那么多不是自己写的代码，非常不利于webpack构建性能
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false, // 没有babelrc文件
            presets: [
              require.resolve('@babel/preset-react'),
              require.resolve('@babel/preset-env', { modules: false })
              // modules: false -> 模块化方案的一个指定，在编译ES6语法的时候，是否将import语法当做ES6语法进行编译
              // webpack识别import和export，因为我们已经有了commonJS这个模块化方案，所以我们可以置为false
            ],
            // 是否对编译结果做缓存
            cacheDirectory: true
          }
        }
      },
      {
        //匹配以.css结尾的文件
        test: /\.css$/,
        // use数组中loader执行顺序：从右到左，从下到上 依次执行
        use: [
          // 创建style标签，将js中的样式资源插入进行，添加到head中生效
          'style-loader',
          // 将css文件变成commonjs模块加载js中，里面内容是样式字符串
          'css-loader'
        ]
      },
      {
        //匹配以.less结尾的文件
        test: /\.less$/,
        use: [
          // 创建style标签，将js中的样式资源插入进行，添加到head中生效
          'style-loader',
          // 将css文件变成commonjs模块加载js中，里面内容是样式字符串
          'css-loader',
          // 将less文件编译成css文件
          'less-loader'
        ]
      },
      {
        //excude排除法 后期手动添加
        exclude: /\.(css|js|html|less|png|jpg|jpeg|gif)$/,
        //使用file-loader
        loader: 'file-loader',
        options: {
          name: '[hash:10].[ext]'
        }
      },
      {
        //处理图片
        test: /\.(png|jpg|jpeg|gif)/,
        loader: 'url-loader',
        options: {
          limit: 8 * 1024,
          name: '[hash:10].[ext]',
          exModule: false,
          outputPath: 'imgs' //图片输出增加imgs文件夹
        }
      },
      {
        //匹配.html结尾的文件
        test: /\.html/,
        // 处理html文件的img图片（负责引入img，从而能被url-loader进行处理）
        loader: 'html-loader'
      }
    ]
  }
};
