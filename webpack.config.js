var webpack = require("webpack"); //to access built-in plugins
var path = require("path");

module.exports = {
    entry: "./src/JSONBigNumber.js",
    output: {
        filename: "JSONBigNumber.min.js",
        path: path.resolve(__dirname, "dist"),
        library: "JSONBigNumber",
        libraryTarget: "umd"
    },
    externals: {
        "bignumber.js" : {
            commonjs: "bignumber.js",
            commonjs2: "bignumber.js",
            amd: "bignumber.js",
            root: "BigNumber"
        }
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
};