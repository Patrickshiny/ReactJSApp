/* ES5 path */
const path = require('path');
/* ES5 path */
/* ES6 path */
// import path from 'path';
/* ES6 path */

const currentHtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = 
{
    entry: // webpack entry point
    {
        index:'./index.js'
    },
    output: // webpack output
    {
        filename: 'bundle.js',
        path: path.resolve('./'),
    },
    plugins:
    [
        new currentHtmlWebpackPlugin(
            {
                template: path.resolve(__dirname, "src", "index.html") // load an HTML template from src/index.html
            }
        )
    ]
};

