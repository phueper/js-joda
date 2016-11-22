let fs = require('fs');
let path = require('path');
let webpack = require('webpack');

let minify = JSON.parse(process.env.DIST_MIN || '0');
let sourceMaps = !minify;

function createBanner() {
    let packageJson = require('./package.json');
    let version = `//! @version ${  packageJson.name  } - ${  packageJson.version  }\n`;
    let preamble = fs.readFileSync('./src/license-preamble.js', 'utf8');
    return version + preamble;
}

let banner = createBanner();

module.exports = {
    context: __dirname,
    entry: './src/js-joda.js',
    devtool: sourceMaps ? 'hidden-source-map' : '',
    output: {
        path: `${__dirname   }/dist`,
        filename: minify ? 'js-joda.min.js' : 'js-joda.js',
        libraryTarget: minify ? 'var' : 'umd',
        library: 'JSJoda',
    },
    module: {
        loaders: [{
            loader: 'babel-loader',
            include: [
                path.resolve(__dirname, 'src'),
                path.resolve(__dirname, 'test'),
            ],
            test: /.js$/,
        }],
    },
    plugins: minify ? [
        new webpack.optimize.UglifyJsPlugin({
            comments: false,
            compress: {
                warnings: false,
            },
        }),
        new webpack.BannerPlugin(
            banner, { raw: true },
        ),
    ] : [
        new webpack.BannerPlugin(
            banner, { raw: true },
        ),
    ],
};
