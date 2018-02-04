const path = require('path');

module.exports = {
    
    context: path.join(__dirname, 'src'),
    
    entry: {
        main: './main'
    },
    
    output: {
        path: path.join(__dirname, 'dist/js'),
        publicPath: '/',
        filename: "[name].js",
        library: 'home',
    },
    
    resolve: {
        extensions: ['.js','.vue', '.json', '*']
    },
    
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        publicPath: '/js'
    },
    module: {
        rules: [
            { 
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: [  "babel-loader"]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css/,
                loader: 'css-loader'
            },
        ]
    }
        
    
}