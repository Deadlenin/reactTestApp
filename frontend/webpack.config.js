const path = require( 'path' );
const ExtractTextPlugin = require( "extract-text-webpack-plugin" );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );

const src = '/src/';
const build = path.join( __dirname, 'target', 'classes', 'META-INF', 'resources' );

let conf = {
    context: path.join( __dirname, src, '/js' ),
    entry: {
        react_test: './index.js',
    },
    output: {
        path: build,
        filename: '[name].build.js',
    },
    optimization: {
        noEmitOnErrors: true,
    },
    watchOptions: {
        poll: true
    },
    devServer: {
        contentBase: build,
        compress: true,
        port: 8000,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.js|\.jsx$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader'
                }

            },
            {
                test: /\.css|.scss$/,
                use: ExtractTextPlugin.extract( {
                    fallback: 'style-loader',
                    use: [ 'css-loader', 'sass-loader' ],
                } )
            },
            {
                test: /\.(ttf|eot|otf)$/,
                use: [{
                    loader: 'file-loader'
                }]
            },
        ]
    },
    resolve: {
        extensions: [ '.js', '.jsx', '.json' ],
    },
    plugins: [
        new ExtractTextPlugin( {filename: '[name].build.css'} ),
        new HtmlWebpackPlugin( {
            filename: 'index.html',
            template: path.join( __dirname, src + 'index.html' ),
        } )
    ]
};

module.exports = ( env, options ) => {
    let isProduction = options.mode === 'production';
    conf.devtool = isProduction ? false : 'eval-sourcemap';
    conf.watch = !isProduction;
    return conf;
};