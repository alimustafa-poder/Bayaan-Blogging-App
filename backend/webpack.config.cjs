const webpack = require('webpack')
const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
    entry: './server.js',
    target: 'node',
    output: {
        path: path.resolve(__dirname, 'functions'),
        filename: 'bundle.cjs',
    },
    externals: [nodeExternals()],
}