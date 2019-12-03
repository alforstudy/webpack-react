const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
htmlPlugin = new HtmlWebPackPlugin({
    template: path.join(__dirname, '/src/index.html'),
    filename: 'index.html'
});
module.exports = {
    mode: 'development', // development,production
    plugins:[
        htmlPlugin
    ],
    module:{
        rules:[
            {test:/\.js|jsx$/,use:'babel-loader',exclude:/node_modules/},
            //css-loader 使用参数modules 启用css模块化
            {test:/\.css$/, use:['style-loader',{
                loader:'css-loader',
                options:{
                    modules:true,
                    localIdentName:'[path][name]-[local]-[hash:5]'
                }
            }]},
            {test:/\.ttf|woff|woff2|eot|svg$/,use:'url-loader'}
        ]
    },
    resolve:{
        extensions:['.js','.jsx','.json','.css'],
        alias:{
            '@':path.join(__dirname,'./src')
        }
    }
};