var webpack = require("webpack"); //to access built-in plugins
var path = require("path");

module.exports = {
    entry: "./src/JSONBigNumber.js",
    output: {
        filename: "JSONBigNumber.min.js",
        path: path.resolve(__dirname, "dist"),
        library: "JSONBigNumber"
    },
    externals: {
        "BigNumber": "BigNumber"
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
};