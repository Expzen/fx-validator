const path = require('path');

module.exports = env => {
  let prod = env.production == true;
    return {
        mode:prod ? 'production':'development',
        entry: './src/index.js',
        output: {
            library: 'fxvalidator',
            libraryTarget: 'umd',
            filename: prod ? 'fxvalidator.min.js': 'fxvalidator.js',
            path: path.resolve(__dirname, 'dist'),
        },
        module:{
            rules: [
                {
                  test: /\.m?js$/,
                  exclude: /(node_modules|bower_components)/,
                  use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['@babel/preset-env'],
                      plugins: ['@babel/plugin-proposal-object-rest-spread']
                    }
                  }
                }
              ]
        }
    }
};