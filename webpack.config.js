module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style-loader!css-loader!postcss-loader"
            }
        ]
    },
    postcss: function (webpack) {
        return [
            require("postcss-import")({ addDependencyTo: webpack }),
            require("postcss-url")(),
            require("postcss-cssnext")(),

            // add your "plugins" here
            require('postcss-simple-vars'), // $ Sass Variables https://github.com/postcss/postcss-simple-vars
            //require("stylelint")(),
            require("postcss-mq-grid")(),
            require("postcss-assets")(),
            require('rucksack-css'),
            //require("postcss-pxtorem")(),
            require("css-mqpacker")(),

            // and if you want to compress,
            // just use css-loader option that already use cssnano under the hood
            require("postcss-browser-reporter")(),
            require("postcss-reporter")(),
        ]
    }
};