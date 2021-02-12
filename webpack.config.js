const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require("path");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
      entry: {
            index: path.resolve(__dirname, "src", "index.js")
      },
      output: {
            path: path.resolve(__dirname, './dist'),
            filename: '[name].bundle.js',
      },
      module: {
            rules: [
                  {
                        test: /\.css$/,
                        use: ["style-loader", "css-loader",]
                  },
                  {
                        test: /\.scss$/,
                        use: ["style-loader", "css-loader", "sass-loader"]
                  },
                  {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        use: ["babel-loader"]
                  },
                  // Images: Copy image files to build folder
                  // { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource' },
                  {
                        test: /\.(gif|png|jpe?g)$/,
                        use: [
                              {
                                    loader: 'file-loader',
                                    options: {
                                          name: '[name].[ext]',
                                          // context: 'images',
                                          
                                          useRelativePath: true
                                    }
                              }
                        ]
                  },
            ]
      },
      // devtool: 'eval-source-map',
      devServer: {
            overlay: true
      },
      plugins: [
            new CopyWebpackPlugin(
                  { 
                        patterns: [
                              { 
                                    from: path.resolve(__dirname, 'src/img'),
                                    to: path.resolve(__dirname, 'dist/img') 
                              },
                        ]
                  }
            ),
            new HtmlWebpackPlugin({
                  template: path.resolve(__dirname, "src", "index.html")
            }),
            new CleanWebpackPlugin(),
      ]
};