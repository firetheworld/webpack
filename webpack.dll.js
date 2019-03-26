const webpack = require('webpack');
const path = require('path');
const pkg = require(path.join(process.cwd(), 'package.json'));
const dllConfig = Object.keys(pkg.dependencies);
const dllExculde = pkg.dllConfig.exclude;

const vendor = exculdeItems(dllConfig, dllExculde);

module.exports = {
    mode: 'development',
    context: process.cwd(),
    entry: {
        vendor,
    },
    output: {
        filename: '[name].[chunkhash].js',
        library: 'vendor_libs',
    },
    plugins: [
        new webpack.DllPlugin({
            name: 'vendor_libs',
            path: './vendor-manifest.json',
        })
    ]
}

function exculdeItems(list, exculde) {
    const set = new Set(list);
    exculde.forEach(element => {
        if (set.has(element)) {
            set.delete(element);
        }
    });
    return Array.from(set);
}